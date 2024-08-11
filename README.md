# Markdown Viewer Browser Plugin

Markdown Viewer is a lightweight browser extension that allows you to view Markdown files directly in your browser. The extension supports both light and dark themes, which can be toggled on and off, and ensures that all Markdown elements are rendered correctly.

## Features

- **View Markdown Files**: Automatically renders `.md` files in your browser.
- **Theme Toggle**: Switch between light and dark modes.
- **Responsive Design**: Ensures images and other media scale correctly within the viewport.
- **Support for Links and Media**: Handles web links, email links, images, videos, and other embedded media.

## Installation

1. **Download the Extension**:
   - Download the latest release from the [Releases](https://github.com/tegaidogun/markdown-viewer-browser-plugin/releases) page.
   
2. **Install in Firefox**:
   - Go to `about:debugging` > "This Firefox" > "Load Temporary Add-on" and select the `.xpi` file.

3. **Install in Chrome/Edge**:
   - Go to `chrome://extensions/` (or `edge://extensions/`), enable Developer mode, and load the unpacked extension or upload the `.zip` file directly.

## Usage

1. Open a `.md` file in your browser.
2. The Markdown content will be automatically rendered.
3. Use the theme toggle switch at the top of the page to switch between light and dark modes.

## Development

To build the extension:

1. Install the necessary tools:
   - Install `web-ext` globally: `npm install --global web-ext`.
2. Navigate to the project directory and run:
   - `web-ext build` to package the extension.

The build artifacts will be placed in the `web-ext-artifacts` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Acknowledgments

- [marked.js](https://github.com/markedjs/marked) for Markdown parsing.
