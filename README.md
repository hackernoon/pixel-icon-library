![Github Cover](https://github.com/hackernoon/pixel-icon-library/assets/53912722/e7527cc9-424d-43ec-a481-78730d1a7d95)

# HackerNoon's Pixel Icon Library

Introducing [HackerNoon’s Pixel Icon Library (now available as a standalone site @ PixelIconLibrary.com)](https://pixeliconlibrary.com), an open-source collection of 1440+ Pixelated Icons. Meticulously designed on a 24px grid, ensuring perfect alignment and consistency to enrich your web/app/product/page/life experience. Inspired by HackerNoon’s retro design vibe, these icons capture the essence of the internet's good old days.

## What’s in the Pixel Icon Library?

- 400+ Unique Pixelated Vector Icons.
- 4 variations per icon to better match your project aesthetic.
- Light SVG Files.
- PNG files in 12px, 16 px, 24px, and 48px for both Light/Dark Mode.
- Multiple Ways to Use - [Install via NPM Package](https://www.npmjs.com/package/@hackernoon/pixel-icon-library), Directly via HTML & CSS, and [via a Figma component library](https://www.figma.com/community/file/1278952394341234192/pixel-icon-library-1440-pixelated-icons-by-hackernoon).

## Usage

### HTML Image

Using the `<img />` element directly in your HTML file.

```
<img src="path/to/icon.svg" alt="icon title" />
```

### Inline HTML

You can paste the content of the icon file directly into your HTML code to display it on the page using the `<svg> </svg>` tag.

```
<body>
 // Add your SVG code here
</body>
```

### CSS

Instead of using an HTML `<img />` element, you can use CSS instead and apply it as a background to any other element.

```
body {
  background-image: url(path/to/icon.svg);
}
```

### SVG as an object

You can also use the `<object>` tag to add the SVG to your page

```
<object data="path/to/icon.svg" width="24" height="24"> </object>
```

### Using <iframe>

Keep in mind that using iframe is not recommended, because its hard to maintain

```
<iframe src="path/to/icon.svg"> </iframe>
```

### SVG as embed

Most of the modern browsers have deprecated plugins, so this is not recommended.

```
<embed src="path/to/icon.svg" />
```

### Figma

HackerNoon’s Pixel Icon Library is available as a [Figma Community File](https://www.figma.com/community/file/1278952394341234192/Pixel-Icon-Library-%7C-120%2B-Pixelated-Icons-By-HackerNoon). To use the components, log in to your Figma account and duplicate the file to your drafts.


## [Installation via NPM Package](https://www.npmjs.com/package/@hackernoon/pixel-icon-library)

### Installing NPM Package
```
npm i @hackernoon/pixel-icon-library
```

### Importing CSS Classes
```
<link rel="stylesheet" href="path/to/@hackernoon/pixel-icon-library/fonts/iconfont.css">
```

### Displaying An Icon
```
<i class="hn hn-icon-name"></i>
```

# License (CC BY 4.0 International)

- The icons (.svg/.png) files are free to download and are licensed under CC 4.0
- By downloading, it is assumed that you agree with the terms mentioned in CC 4.0.
- You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- Other files in the repository which are not icons, are licensed under the MIT License.

# Contribution

For more info on how to contribute please check our [Contribution Guidelines](https://github.com/hackernoon/pixelated-site-icons/blob/main/CONTRIBUTING.md)

# Learn More @ [PixelIconLibrary.com](https://pixeliconlibrary.com)

**Designed with 💚 by Designers at [HackerNoon](https://hackernoon.com)**
