import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'build', 'cf_page');
const workerFile = path.join(targetDir, '_worker.js');

// 💡 视觉净化天网：直接屏蔽任何固定在顶部(fixed)、包含高z-index的异常横幅容器
const shieldStyle = `
<style type="text/css">
  /* 暴力隐形出现在顶部的固定提示栏 */
  div[style*="position: fixed"][style*="top: 0"], 
  div[style*="position:fixed"][style*="top:0"],
  div[style*="position: fixed"][style*="top:0"],
  div[style*="position:fixed"][style*="top: 0"],
  div[style*="z-index"][style*="top:"],
  /* 针对市面上常规警告横幅类名的防御 */
  .safety-banner, #caution-banner, .caution-bar { 
    display: none !important; 
    visibility: hidden !important; 
    opacity: 0 !important; 
    height: 0 !important; 
    max-height: 0 !important;
    padding: 0 !important; 
    margin: 0 !important; 
    pointer-events: none !important; 
  }
  /* 修正因为隐藏横幅导致的页面顶部留白 */
  body, html { top: 0 !important; padding-top: 0 !important; margin-top: 0 !important; }
</style>
`;

if (fs.existsSync(workerFile)) {
    let content = fs.readFileSync(workerFile, 'utf8');

    // 突破混淆的核心：无论内容怎么变，网页渲染总需要通过浏览器输出
    // 我们直接在返回的每一个 Response / HTML 的入口（如 <head> 或 <body> 标签）后面强制追加我们的天网 CSS
    if (content.includes('</head>')) {
        content = content.replace(/<\/head>/i, `${shieldStyle}</head>`);
    } else {
        // 如果后端代码直接拼接字符串，我们在文件头部的全局注入钩子中挂载样式
        content = shieldStyle + content;
    }

    fs.writeFileSync(workerFile, content, 'utf8');
    console.log('🛡️ [Purify 4.0] 视觉防御重写成功！已在流层面抹除横幅显示。');
} else {
    console.log('⚠️ 未找到编译文件。');
}
