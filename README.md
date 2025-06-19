# CSRS Customizer

A Chrome extension that customizes the UP Mindanao CSRS web interface. It allows you to change fonts, colors, padding, and more, as well as calculate GWA (General Weighted Average) directly from the popup.

## Features
- Change all font-family styles to your preferred font (Inter, SF UI Display, Roboto, Open Sans, Courier New, Times New Roman, and more)
- Inject Google Fonts or CDN fonts into the page
- Customize background and border colors
- Adjust table and element padding
- Remove table borders
- Alternate row colors for tables
- Reverse all changes with one click
- Calculate GWA (General Weighted Average) and Cumulative GWA
- Compute total units and laude standing (for shiftees or those using the prospectus page)

## Installation
1. Download or clone this repository to your computer.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the `csrs-customizer` folder.
5. The CSRS Customizer extension should now appear in your extensions bar.

## Usage
1. Navigate to your CSRS or relevant student records page.
2. Click the CSRS Customizer extension icon in the Chrome toolbar to open the popup.
3. Use the available options:
   - **Calculate GWA**: Click to compute your GWA for the current page.
   - **Font Selector**: Choose a font from the dropdown and click **Apply Font** to change all fonts on the page.
   - **Customize Colors**: Pick background and border colors, then click **Change Colors**.
   - **Customize Padding**: Enter a padding value (in px) and click **Change Padding**.
   - **Remove Borders**: Removes all table borders for a cleaner look.
   - **Alternating Row Colors**: Applies alternating background colors to table rows for better readability.
   - **Reverse Changes**: Reverts all customizations made by the extension.
   - **Calculate Cumulative GWA**: Computes cumulative GWA, total units, and laude standing (useful for shiftees or on the prospectus page).

## Permissions
- `scripting`, `activeTab`, and access to all URLs are required to inject scripts and modify the page as needed.

## Notes
- This extension is intended for use on CSRS or similar student records web pages.
- No data is collected or sent externally.
- For any issues or feature requests, please open an issue or pull request.
---

**Developed for personal use.**

> **Disclaimer:**
> This extension is in no way affiliated with, endorsed by, or officially connected to UP Mindanao or any of its departments. It is an independent project created for personal and academic purposes only. The extension is unvalidated and may not work as intended in all cases. Use at your own risk and with caution, especially when relying on computed results. Always double-check important data and do not use this tool for any official or critical purposes. 