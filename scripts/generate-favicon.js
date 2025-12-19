/**
 * Script to generate favicon.ico from favicon.svg
 * 
 * To use this script:
 * 1. Install sharp: npm install --save-dev sharp
 * 2. Run: npm run generate-favicon
 * 
 * Or use an online converter:
 * https://convertio.co/svg-ico/
 * https://www.favicon-generator.org/
 */

const fs = require('fs');
const path = require('path');

console.log('⚠️  ICO files are binary and cannot be generated directly from SVG in Node.js without additional tools.');
console.log('');
console.log('📝 Please use one of these methods to generate favicon.ico:');
console.log('');
console.log('1. Online Converter (Recommended):');
console.log('   - Visit: https://convertio.co/svg-ico/');
console.log('   - Upload: public/favicon.svg');
console.log('   - Download and save as: public/favicon.ico');
console.log('');
console.log('2. Using ImageMagick (if installed):');
console.log('   convert public/favicon.svg -resize 32x32 public/favicon.ico');
console.log('');
console.log('3. Using online favicon generator:');
console.log('   - Visit: https://www.favicon-generator.org/');
console.log('   - Upload your SVG and generate all sizes');
console.log('');

// Check if favicon.svg exists
const svgPath = path.join(__dirname, '../public/favicon.svg');
if (fs.existsSync(svgPath)) {
  console.log('✅ Found favicon.svg at:', svgPath);
} else {
  console.log('❌ favicon.svg not found at:', svgPath);
}

process.exit(0);

