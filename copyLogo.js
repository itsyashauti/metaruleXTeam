import fs from 'fs';
import path from 'path';

const source = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\a1a8a58c-1d4c-4a68-973b-96336d2d9fb1\\.user_uploaded\\media_1790515653511.png';
const dest = path.resolve('public/logo.png');

try {
  fs.copyFileSync(source, dest);
  console.log('✅ Logo copied successfully to public/logo.png!');
} catch (e) {
  console.error('❌ Failed to copy logo:', e.message);
}
