# BrowserCheck.js

`BrowserCheck.js` is a simple JavaScript utility for detecting the user's browser and its version. If the browser is outdated or not supported, it displays an alert suggesting the user upgrade to a more recent version for better compatibility and security.

## Features

- Detects various browsers, including Internet Explorer, Firefox, Opera, Microsoft Edge, Chrome, and Safari.
- Provides browser-specific alerts for outdated versions.
- Prompts users to update their browsers for a better experience if they are using older versions.

## Installation

You can easily include `browserCheck.js` in your project by following these steps:

1. Download the `browserCheck.js` file or copy the contents to your JavaScript directory.
2. Include the script in your HTML file:

```html
<script src="path/to/browserCheck.js"></script>
```

## Usage

Simply include the script in your HTML file as shown in the installation section. The `checkBrowser()` function will run automatically when the script is loaded, checking the user's browser and displaying alerts if necessary.

### Example

Add the following to your HTML file to use `BrowserCheck.js`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Browser Check Example</title>
    <script src="path/to/browserCheck.js"></script>
</head>
<body>
    <h1>Welcome to Browser Check Example</h1>
    <p>If you're using an outdated browser, you'll see an alert.</p>
</body>
</html>
```

## How It Works

- **Internet Explorer**: Detects if the user is using Internet Explorer and displays the version number. If detected, it recommends switching to Chrome or Edge.
- **Firefox**: Checks the Firefox version and alerts the user if they are using a version older than 93.
- **Opera**: Determines if Opera is using the Chromium engine. If not, it alerts the user to update.
- **Microsoft Edge**: Checks if Edge is using the Chromium engine or the legacy version and alerts accordingly.
- **Chrome**: Checks if the user is running an older version of Chrome (below version 100) and advises updating.
- **Safari**: Alerts users if they are using a Safari version older than 10.

## Contributing

If you have suggestions, enhancements, or bug reports, feel free to open an issue or create a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Disclaimer

This script is designed to help users identify outdated browsers and improve compatibility. However, it may not cover all edge cases or browser versions. Use at your own discretion and test in your environment to ensure compatibility.

## Author

Developed by Amritpal Singh.
