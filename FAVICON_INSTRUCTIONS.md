# Favicon Conversion Instructions

To convert the SVG favicon to ICO format, you can use one of these methods:

## Method 1: Online Converter (Easiest)
1. Visit https://convertio.co/svg-ico/ or https://www.favicon-generator.org/
2. Upload `public/favicon.svg`
3. Download the generated `favicon.ico`
4. Replace `public/favicon.ico` with the downloaded file

## Method 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first (if not installed)
# Then run:
convert public/favicon.svg -resize 32x32 public/favicon.ico
```

## Method 3: Using Node.js Package
```bash
npm install --save-dev to-ico
# Then create a script to convert
```

The current setup uses `favicon.svg` as the primary favicon (for modern browsers) and `favicon.ico` as a fallback (for older browsers).

