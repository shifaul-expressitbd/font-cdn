# Font CDN

![CDN Status](https://img.shields.io/badge/CDN-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

High-performance font CDN hosted on GitHub Pages, perfect for web projects and Puppeteer PDF generation.

## 🌟 Available Fonts

| Font           | Styles  | WOFF2 (Recommended)                                                           | WOFF                                                                         |
| -------------- | ------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Airstrip**   | Regular | [Link](https://shifaul-expressitbd.github.io/font-cdn/fonts/airstrip.woff2)   | [Link](https://shifaul-expressitbd.github.io/font-cdn/fonts/airstrip.woff)   |
| **Autography** | Regular | [Link](https://shifaul-expressitbd.github.io/font-cdn/fonts/autography.woff2) | [Link](https://shifaul-expressitbd.github.io/font-cdn/fonts/autography.woff) |
| **Pollinator** | Regular | [Link](https://shifaul-expressitbd.github.io/font-cdn/fonts/pollinator.woff2) | [Link](https://shifaul-expressitbd.github.io/font-cdn/fonts/pollinator.woff) |

## 🚀 Quick Start

### HTML Usage (Direct CSS)

```html
<style>
  @font-face {
    font-family: "Airstrip";
    src: url("https://shifaul-expressitbd.github.io/font-cdn/fonts/airstrip.woff2") format("woff2"), url("https://shifaul-expressitbd.github.io/font-cdn/fonts/airstrip.woff")
        format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
</style>
```

### Dynamic CSS API

You can also load the CSS for any available font dynamically:

```html
<link rel="stylesheet" href="https://shifaul-expressitbd.github.io/font-cdn/api.css?family=Airstrip" />
```

Replace `Airstrip` with any available font name (e.g., `Autography`, `Pollinator`).

This will generate the correct `@font-face` CSS for the requested font automatically.
