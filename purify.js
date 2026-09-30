import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 同时阻断本地编译源、Workers 目录以及 Pages 编译目录
const dirsToPatch = [
    path.join(__dirname, 'build', 'cf_page'),
    path.join(__dirname, 'build', 'cf_worker'),
    path.join(__dirname, 'docker-node'),
    __dirname
];

const shieldCSS = `div[style*="position: fixed"][style*="top: 0"], div[style*="position:fixed"][style*="top:0"], div[style*="z-index"][style*="top:"], div:has(:contains("严禁将本项目")), div:contains("严禁将本项目"), .safety-banner, #caution-banner { display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; padding: 0 !important; margin: 0 !important; pointer-events: none !important; } body, html { top: 0 !important; padding-top: 0 !important; margin-top: 0 !important; }`;

dirsToPatch.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        // 全面扫描打包出来的混淆主 JS 脚本 (包含 _worker.js, bundle.mjs 等)
        if (file.endsWith('.js') || file.endsWith('.mjs')) {
            const filePath = path.join(dir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let isModified = false;

            // 🟢 绝招 1：降维打击前端动态插入逻辑。直接把前端创建 div 容器的 API 劫持掉！
            // 只要任何脚本试图动态往 body 塞入带有“严禁”或定位不轨的容器，直接变成 display:none
            if (!content.includes('// [Purify Front Shield]')) {
                const frontShield = `
                // [Purify Front Shield]
                if (typeof globalThis !== 'undefined' && typeof document !== 'undefined') {
                    const _origCreateElement = document.createElement;
                    document.createElement = function(tagName, options) {
                        const el = _origCreateElement.call(document, tagName, options);
                        if (tagName && tagName.toLowerCase() === 'div') {
                            setTimeout(() => {
                                if (el.innerHTML && (el.innerHTML.includes('严禁将') || el.innerHTML.includes('本项目') || el.innerHTML.includes('后果自负'))) {
                                    el.style.setProperty('display', 'none', 'important');
                                    el.style.setProperty('visibility', 'hidden', 'important');
                                    el.style.setProperty('height', '0', 'important');
                                    if(el.parentNode) el.parentNode.removeChild(el);
                                }
                            }, 0);
                        }
                        return el;
                    };
                    // 补充注入全局定时器，死死盯住并秒杀该容器
                    setInterval(() => {
                        document.querySelectorAll('div').forEach(div => {
                            if (div.innerText && (div.innerText.includes('严禁将') || div.innerText.includes('本项目'))) {
                                div.style.setProperty('display', 'none', 'important');
                                div.style.setProperty('visibility', 'hidden', 'important');
                                div.style.setProperty('height', '0', 'important');
                                if(div.parentNode) div.parentNode.removeChild(div);
                            }
                        });
                    }, 10000);
                }
                `;
                content = frontShield + "\n" + content;
                isModified = true;
            }

            // 🟢 绝招 2：后端拦截加固。在所有流传回客户端前，无视混淆拼凑，强制强硬插入 CSS 盾牌
            if (!content.includes('// [Purify Global Injection Tiers]')) {
                const globalInjection = `
                // [Purify Global Injection Tiers]
                if (typeof Response !== 'undefined' && !globalThis.HasPurifyResProxy) {
                    globalThis.HasPurifyResProxy = true;
                    const OriginalResponse = Response;
                    globalThis.Response = class extends OriginalResponse {
                        constructor(body, init) {
                            try {
                                const contentType = init?.headers?.get?.('content-type') || init?.headers?.['content-type'] || '';
                                if (typeof body === 'string' && (contentType.includes('html') || body.trim().startsWith('<') || body.includes('<!DOCTYPE'))) {
                                    body = body.replace('<head>', '<head><style>${shieldCSS}</style>')
                                               .replace('<body>', '<body><style>${shieldCSS}</style>');
                                }
                            } catch(e){}
                            super(body, init);
                        }
                    };
                }
                `;
                content = globalInjection + "\n" + content;
                isModified = true;
            }

            if (isModified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(\`🛡️ 成功对文件进行核心功能级化学阉割: \${file}\`);
            }
        }
    });
});
