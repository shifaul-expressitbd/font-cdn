# Font CDN

A lightweight CDN for serving web fonts, optimized for PDF generation with Puppeteer.

## Available Fonts

| Font Name      | Styles Available | Example URL |
|----------------|------------------|-------------|
| Airstrip       | Regular          | `https://shifaul-expressitbd.github.io/font-cdn/fonts/airstrip.woff` |
| Autography     | Regular          | `https://shifaul-expressitbd.github.io/font-cdn/fonts/autography.woff` |
| Pollinator     | Regular          | `https://shifaul-expressitbd.github.io/font-cdn/fonts/pollinator.woff` |

## How to Use

### 1. In HTML/CSS
```html
<style>
  @font-face {
    font-family: 'Airstrip';
    src: url('https://shifaul-expressitbd.github.io/font-cdn/fonts/airstrip.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  body {
    font-family: 'Airstrip', sans-serif;
  }
</style>
