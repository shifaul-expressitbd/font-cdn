// generate-css.js
const fs = require('fs');

const fonts = {
  'Airstrip': { weights: [400], display: 'swap' },
  'Autography': { weights: [400], display: 'swap' },
  'Pollinator': { weights: [400], display: 'swap' }
};

let cssOutput = '';
Object.entries(fonts).forEach(([name, config]) => {
  config.weights.forEach(weight => {
    cssOutput += `
@font-face {
  font-family: '${name}';
  src: url('https://shifaul-expressitbd.github.io/font-cdn/fonts/${name.toLowerCase()}.woff2') format('woff2'),
       url('https://shifaul-expressitbd.github.io/font-cdn/fonts/${name.toLowerCase()}.woff') format('woff');
  font-weight: ${weight};
  font-style: normal;
  font-display: ${config.display};
}\n`;
  });
});

fs.writeFileSync('fonts.css', cssOutput);
