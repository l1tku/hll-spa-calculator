# HLL SPA Artillery Calculator
**v1.5.3 — Updated for Hell Let Loose Update 19.1**

A web-based targeting calculator for Self-Propelled Artillery (SPA) in Hell Let Loose.

## Live Demo
Access the calculator instantly in your browser:  
**[https://l1tku.github.io/hll-spa-calculator/](https://l1tku.github.io/hll-spa-calculator/)**

## Features

- **Multi-Vehicle Support:** Accurate formulas for British Bishop, Churchill AVRE, US Sherman M4A3, Soviet KV-2, and German Panzer III/Sturmpanzer IV.
- **Smart Calculation:** Auto-calculation modes with manual overrides.
- **Height Difference Toggle:** Enable/disable height inputs for elevation calculations.
- **Mobile Support:** Responsive design with optimized touch targets and collapsible panels.
- **Intel Database:** Built-in "Field Manual" with tank specifications and screenshots.
- **Immersive UI:** Military-themed interface with authentic styling.
- **Lite Mode:** Lightweight version optimized for low-end devices.

## How to Use

1. **Select Vehicle:** Choose your tank/SPA from the dropdown.
2. **Set Distance:** Enter target distance (Range varies by vehicle).
3. **Adjust Height(optional):** Enter height difference in meters (Negative if target is lower, positive if higher).
4. **Input Terrain Elev:** Enter the current elevation adjustment (The **RED MIL** number visible in your HUD).
5. **Fire:** Use the calculated Yellow Elevation setting.

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
