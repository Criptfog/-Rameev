const fs = require('fs');
const path = require('path');
console.log('[Дневник Rameev] Копирование нативных Android-патчей фоновой синхронизации...');
const srcDir = path.join(__dirname, '..', 'android-studio-patch');
const destDir = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'java', 'ru', 'rameevcollege', 'diary');
if (fs.existsSync(srcDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  }
  console.log('[Дневник Rameev] Патчи успешно установлены в ' + destDir);
}
