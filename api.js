// api.js (simplified)
// Utility to get available fonts from the fonts directory
function getAvailableFonts() {
  // In a real serverless/edge environment, you may need to hardcode or fetch this list differently
  return [
    { name: 'Airstrip', file: 'airstrip' },
    { name: 'Autography', file: 'autography' },
    { name: 'Pollinator', file: 'pollinator' }
  ];
}

function generateFontCSS(family) {
  const fonts = getAvailableFonts();
  const selected = fonts.find(f => f.name.toLowerCase() === family.toLowerCase());
  if (!selected) {
    return `/* Font family '${family}' not found. Available: ${fonts.map(f => f.name).join(', ')} */`;
  }
  return `@font-face {
  font-family: '${selected.name}';
  src: url('https://shifaul-expressitbd.github.io/font-cdn/fonts/${selected.file}.woff2') format('woff2'),
       url('https://shifaul-expressitbd.github.io/font-cdn/fonts/${selected.file}.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;
}

const url = new URL(request.url);
const family = url.searchParams.get('family');

if (family) {
  const css = generateFontCSS(family); // Now dynamic for any font in fonts/
  return new Response(css, { headers: { 'Content-Type': 'text/css' } });
}