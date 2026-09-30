import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'build', 'cf_page');
const workerFile = path.join(targetDir, '_worker.js');

// 💡 视觉天网 CSS：强制隐藏任何出现在页面顶部、z-index 极高、或包含非法用途警告的固定容器
const cssShield = `
<style type="text/css">
  /* 拦截位置固定的顶部横幅 */
  div[style*="position: fixed"][style*="top: 0"],
  div[style*="position:fixed"][style*="top:0"],
  div[style*="z-index"][style*="top: 0"],
  /* 兜底文本拦截器（防止未来改动样式） */
  div:has(:contains("严禁将本项目")),
  div:contains("严禁将本项目"),
  iframe:has(:contains("严禁将本项目")),
  .safety-banner, #caution-banner {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    pointer-events: none !important;
  }
  body, html { top: 0 !important; padding-top: 0 !important; margin-top: 0 !important; }
</style>
`;

if (fs.existsSync(workerFile)) {
    let content = fs.readFileSync(workerFile, 'utf8');

    // 1. 拦截后端返回 HTML 的逻辑，将 CSS 天网强行注入到所有代理网页的入口处
    // 寻找常见的响应头或者 HTML 拼接锚点，把我们的样式暴力注入进去
    content = content.replace(/<\/head>/i, `${cssShield}</head>`);
    content = content.replace(/<body>/i, `<body>${cssShield}`);
    
    // 2. 将可能的硬编码纯文本混淆字符串打碎替换（双重保险）
    content = content.replace(/严禁将本项目用于任何非法用途，否则后果自负/g, "");
    content = content.replace(/严禁将本项目/g, "");
    content = content.replace(/Caution/g, "");

    fs.writeFileSync(workerFile, content, 'utf8');
    console.log('🛡️ [Purify 3.0] 终极视觉屏蔽样式已注入！');
} else {
    console.log('⚠️ 未找到编译文件。');
}
