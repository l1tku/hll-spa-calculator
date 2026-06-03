# HLL SPA Artillery Calculator
**v1.5.4 — Updated for Hell Let Loose Update 20**

A web-based targeting calculator for Self-Propelled Artillery (SPA) in Hell Let Loose.

## Installation & Local Usage

### Option 1: Live Web Access (Recommended)
No installation required. Simply visit the [Live Demo Link](https://l1tku.github.io/hll-spa-calculator/) from any desktop or mobile browser.

### Option 2: Local Development
1. **Clone** or download this repository.
2. Open `index.html` in any modern web browser.

## How to Use

1. **Select Vehicle:** Choose your tank/SPA from the dropdown.
2. **Set Distance:** Enter target distance (Range varies by vehicle).
3. **Set Height Difference (optional):** Enter height difference in meters.
4. **Set Terrain Elevation:** Type the **RED MIL** number you see in your ingame HUD.
5. **Calculate:** Use the calculated Yellow Elevation setting.

## Features

- **Multi-Vehicle Support:** Accurate formulas for all SPA vehicles.
- **Auto-Calculation:** Toggle auto-calculation on or off.
- **Height Calculation:** Toggle height calculation on or off.
- **Mobile Support:** Compact mobile design with collapsible panels.
- **Intel Database:** Built-in "Field Manual" with tank specifications, screenshots, and history.
- **Immersive UI:** Military-themed interface with authentic styling.
- **Lite Mode:** Lightweight version.

## Vehicles Supported

- **British:** Bishop SP, Churchill AVRE
- **US:** Sherman M4A3 (105)
- **Soviet Union:** KV-2
- **DAK:** Panzer III Ausf.N
- **Germany:** Sturmpanzer IV (Brummbär)

## Disclaimer & Copyright

This project is a community-made tool and is **not** affiliated with, endorsed by, or sponsored by Team17, Cover 6 Studios, or Black Matter.

**Hell Let Loose** content and materials are trademarks and copyrights of their respective owners.
* **Game Assets:** The vehicle images and specific game icons used in this tool are the property of the Hell Let Loose developers and publishers. They are used here for educational and informational purposes.

## License

The source code (HTML, CSS, JavaScript) of this project is licensed under the **MIT License**.

> **Note:** The game assets (vehicle images in `/images/tanks`) are **excluded** from this license and remain the intellectual property of their respective owners.

## Version History

**v1.5.3 - 2026-04-21**

### Recent Updates
- **Performance**: Preloaded all tank images and flag icons on page load to eliminate popping when switching between vehicles.

**v1.5.2 - 2026-04-19**

### Recent Updates
- **Mobile UX Improvements**: Fixed reset button triggering keyboard on mobile, added haptic feedback to buttons (Calculate, Copy, Reset, toggles), fixed mobile scrolling when touching +/- buttons, fixed help-icon stuck highlight on mobile, prevented focus loop on mobile after pressing Enter, and fixed input select-all behavior for heightDiff/redNumber.
- **Performance**: Added image preloads for flag icons and project hub icons.

**v1.5.1 - 2026-04-18**

### Recent Updates
- **Desktop layout fixes**: Fixed warning icon positioning and toggle button alignment.
- **Panel height consistency**: Set uniform 117px height for height/elevation and toggle panels.
- **Animation cleanup**: Removed tear line animation from warning container.

**v1.5.0 - 2026-04-17**

### Recent Updates
- **Mobile overhaul**: Complete responsive redesign with collapsible tank specs, classified-style tank info button, and optimized touch targets.
- **Height difference toggle**: New toggle to enable/disable height inputs with dynamic layout adjustment.
- **Hold-to-repeat buttons**: +/- buttons now auto-increment when held (1.5s delay).
- **PWA support**: Added manifest.json and app icons for installable web app experience.
- **Cache-busting**: Versioned assets for reliable GitHub Pages updates.
- **Bug fixes**: Fixed terrain elevation calculation, reset button, tab navigation, and tank history content.

**v1.0.9 - 2025**

### Recent Updates
- **Lite mode**: Lightweight HTML/CSS/JS build for faster loads and low-end devices.
- **Height calculations**: Updated formulas to match in-game red-number compensation and muzzle heights for accurate elevation.
- **HTML → CSS/JS split**: Styles and scripts moved into built assets for cleaner HTML and quicker rendering.

### Previous Updates
- **Production-ready CSS**: Switched from Tailwind CDN to built CSS file for better performance and production readiness.
- **Mobile scaling fixes**: Enhanced viewport settings for better mobile usability and zoom control.
- **Mobile HTML version**: Comprehensive mobile optimizations with enhanced touch interactions, iOS-specific input handling, and mobile-optimized UI elements.
- **Performance improvements**: Optimized icon assets (flags resized to 30px, vehicle icons to 28px).
- **Cleanup**: Removed unused assets to reduce repository size.
