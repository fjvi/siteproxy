import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'build', 'cf_page');
const workerFile = path.join(targetDir, '_worker.js');

// 💡 纯 CSS 隐藏盾牌（转为字符串，确保 JS 语法合法）
const shieldCSS = `div[style*="position: fixed"][style*="top: 0"], div[style*="position:fixed"][style*="top:0"], div[style*="z-index"][style*="top:"], div:has(:contains("严禁将本项目")), div:contains("严禁将本项目"), .safety-banner, #caution-banner { display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; padding: 0 !important; margin: 0 !important; pointer-events: none !important; } body, html { top: 0 !important; padding-top: 0 !important; margin-top: 0 !important; }`;

if (fs.existsSync(workerFile)) {
    let content = fs.readFileSync(workerFile, 'utf8');

    /**
     * 🚀 降维打击混淆：
     * 不管作者后端如何拼凑横幅，我们在 _worker.js 的全局返回逻辑中插桩。
     * 在全局文件尾部追加一段响应劫持代码：只要返回的是网页(html)，
     * 就在代码最后动态注入一个 <style> 标签，从而在浏览器渲染的瞬间将其隐形！
     */
    const injectLogic = `
    
    // 🛡️ [SiteProxy Banner Purify Tier]
    if (typeof Response !== 'undefined') {
      const OriginalResponse = Response;
      globalThis.Response = class extends OriginalResponse {
        constructor(body, init) {
          const contentType = init?.headers?.get?.('content-type') || init?.headers?.['content-type'] || '';
          if (typeof body === 'string' && (contentType.includes('html') || body.trim().startsWith('<'))) {
            // 在页面渲染前塞入隐形滤镜
            body = body.replace('<head>', '<head><style>${shieldCSS}</style>')
                       .replace('<body>', '<body><style>${shieldCSS}</style>');
          }
          super(body, init);
        }
      };
    }
    `;

    // 安全地追加在纯 JS 文件末尾，绝不破坏前文的混淆语法结构
    content = content + injectLogic;

    fs.writeFileSync(workerFile, content, 'utf8');
    console.log('🛡️ [Purify 5.0] 已成功在 JS 运行时注入响应流滤镜！');
} else {
    console.log('⚠️ 未找到编译文件。');
}
