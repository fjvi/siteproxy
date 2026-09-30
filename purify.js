import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定位仓库中现有的产物目录
const targetDir = path.join(__dirname, 'build', 'cf_page');
const workerFile = path.join(targetDir, '_worker.js');

// 注入最高优先级的隐藏样式，彻底隐形横幅
const injectCSS = `<style type="text/css">div:has(:contains("严禁将本项目")), div:contains("严禁将本项目用于任何非法用途"), [style*="position: fixed"][style*="top: 0"]:has(:contains("Caution")), .safety-banner, #caution-banner { display: none !important; visibility: hidden !important; height: 0 !important; opacity: 0 !important; pointer-events: none !important; } body { top: 0 !important; padding-top: 0 !important; margin-top: 0 !important; }</style>`;

if (fs.existsSync(workerFile)) {
    let content = fs.readFileSync(workerFile, 'utf8');
    // 文本替换与样式注入双重保险
    content = content.replace(/严禁将本项目用于任何非法用途，否则后果自负/g, "");
    content = content.replace(/Caution/g, "");
    content = content.replace(/<head>/i, `<head>${injectCSS}`);
    
    fs.writeFileSync(workerFile, content, 'utf8');
    console.log('✅ 网页端构建成功：已在预编译文件中自动抹除警告横幅！');
} else {
    console.log('⚠️ 未找到编译文件。');
}
