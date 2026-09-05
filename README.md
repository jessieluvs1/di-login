# Dealer Inspire WordPress Admin Login

Chrome extension that opens `/wp/wp-admin/` for the current Dealer Inspire website.

## Install locally

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose this folder.
5. Click the extension's toolbar icon while viewing a website.

The extension opens the site's WordPress admin route. It does not bypass WordPress authentication; Chrome will show the standard WordPress login page when you are not already signed in.

## Privacy

The extension does not collect, store, transmit, or sell user data. See [PRIVACY.md](PRIVACY.md) for the complete privacy statement.

## Chrome Web Store submission

1. Test the extension through `chrome://extensions` using **Load unpacked**.
2. Create a ZIP archive containing `manifest.json`, `background.js`, and `icons/`. Do not include `.git`, `.DS_Store`, or other local files.
3. In the Chrome Web Store Developer Dashboard, upload the ZIP and provide the required store listing information, screenshots, support contact, and accurate data-use disclosures.
4. Declare that the extension does not collect or transmit user data. Provide the public URL for the privacy statement if the dashboard requests one.
