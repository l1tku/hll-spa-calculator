# Changelog

## [1.5.1] - 2026-04-18

### Desktop Layout Fixes
- Positioned warning icon outside panel 
- Set heightRedSection and toggle panel to 117px height
- Aligned Height Calculation and Auto Calculation toggles
- Removed tear line animation from warning container
- Added mobile-specific flexbox ordering for warning icon

### Image Caching Fix
- Changed image caching from cache-first to network-first strategy

## [1.5.0] - 2026-04-17

### Project Restructure
- Unified separate index files (index.html, index-mobile.html, index-lite.html) into single responsive build
- Consolidated multiple CSS/JS files into unified dist/styles.css and dist/main.js
- Single codebase handles all view modes - eliminated code duplication

### Major Mobile Overhaul
- Complete mobile layout redesign with responsive panels and optimized touch targets
- Added collapsible tank specs panel with toggle button
- Mobile tank info button restyled as classified document with noise texture
- Mobile "More HLL Tools" button for accessing project hub

### New Features
- Height difference toggle to enable/disable height inputs
- Hold-to-repeat (+/-) buttons with 1.5s delay before auto-increment
- PWA support with manifest.json and app icons
- Cache-busting version system for GitHub Pages deployment

### UI/UX Improvements
- Unified full/lite mode result display handling
- More Projects modal restyled with dark armored panel
- Removed deprecated armored ruler component
- Simplified screenshot gallery (WebP only)

### Fixes
- Terrain elevation calculating correctly (was returning 0)
- Base value showing correct MIL instead of 0
- Tab/Enter navigation working correctly across modes
- Tank history content corrections (removed game patch notes)

## [1.0.9] - 2025-12-21

### Fixed
- **Lite View Control Buttons**
  - Fixed an issue where the increment/decrement (+/-) buttons in the Lite view (`index-lite.html`) were unresponsive.
  - Added missing `data-field` and `data-delta` attributes to the Distance, Height, and Elevation buttons to ensure they correctly hook into the JavaScript logic and trigger calculations.
  
## [1.0.8] - 2025-12-20

### Changed
- Visual polish for toggle buttons (ruler snap, auto calc) with clearer ON/OFF states
- Refined height difference handling for more reliable elevation results
- Improved structure by moving inline styles/scripts into bundled CSS/JS for better caching and performance

### Affected
- index.html
- index-mobile.html
- index-lite.html
- dist/styles.css, dist/styles-lite.css
- dist/main.js, dist/main-lite.js, dist/main-mobile.js

## [1.0.7] - 2025-01-XX

### Changed
- **Production-ready Tailwind CSS setup**
  - Replaced CDN Tailwind script with built CSS file (`dist/output.css`) for production use
  - Eliminated console warnings about CDN usage in production
  - Improved performance with optimized, minified CSS
  - Better offline support and faster page loads

### Fixed
- **Critical: Height difference calculation formula**
  - Fixed incorrect height difference calculation that was adding meters directly to mils
  - Now correctly converts height difference from meters to mils using standard ballistics formula: `mils = (height_diff_meters / distance_meters) * 1000`
  - Applied fix to both `index.html` and `index-mobile.html`
  - This significantly improves accuracy for targets at different elevations
- **Mobile scaling improvements**
  - Enhanced viewport settings with `maximum-scale=5.0` and `user-scalable=yes` for better mobile usability
  - Prevents UI elements from scaling incorrectly on mobile devices
  - Better touch interaction and zoom control on mobile devices
- **History correction and small bug fixes**
  - Fixed calculation history display issues
  - Resolved minor UI inconsistencies
  - Improved error handling for edge cases

### Verified
- **Ballistics data accuracy**
  - Verified all ballistics mil values match the PDF reference data for all vehicles
  - Confirmed minMil and maxMil values are correct for all vehicles
  - All distance-to-mil mappings (200m-600m) verified against ballistics.pdf

## [1.0.6] - 2025-12-12

### Release
- Version bump for release

## [1.0.5] - 2025-01-XX

### Added
- **Mobile HTML version with comprehensive mobile optimizations**
  - Enhanced viewport settings with maximum-scale=5.0 and user-scalable=yes for better mobile usability
  - Mobile-optimized touch interactions with active state feedback for all interactive elements
  - iOS-specific input optimizations (minimum 16px font size to prevent automatic zoom)
  - Mobile-specific styling adjustments for better readability and usability on small screens
  - Optimized dropdown menus for mobile with viewport height-based max-height
  - Mobile-optimized counter elements with scalable CSS variables
  - Simplified 3D depth effects for better mobile performance
  - Mobile-specific decorative element visibility adjustments

### Changed
- Improved mobile user experience with touch-friendly interface elements
- Enhanced mobile responsiveness with better container padding and layout adjustments
- Background attachment changed to scroll on mobile for better performance

## [1.0.4] - 2025-01-XX

### Fixed
- Fixed screenshot lightbox image not being centered when displayed
- Fixed screenshot navigation showing loading state when switching with arrow keys (now preloads images with smooth fade transition)
- Fixed old screenshot image briefly appearing when clicking a new screenshot (now immediately clears old image with multiple hiding methods and preloads new image before switching)
- Fixed field manual ammo icons (AP_invert_28, HE_invert_28, SMOKE_invert_28) flashing briefly when opening on Netlify (now preloads before display)
- Fixed tank image loading flash and delayed switching when changing tanks on Netlify (now preloads with fade transition for smooth switching)

### Performance
- **Massive image size reduction with WebP format**
  - Background image: 6.3 MB → 178 KB (97% reduction!)
  - Tank images: 45-68 KB → 7-13 KB (80% reduction!)
  - Implemented WebP with PNG fallback for maximum browser compatibility
- Optimized image loading for faster page load times
  - Added preload for critical tank images with high priority (WebP + PNG)
  - Implemented lazy loading for non-critical images (flag icons, vehicle icons, screenshots)
  - Added async decoding for all images to prevent blocking main thread
  - Improved tank image switching with preloading for smoother transitions
  - Added CSS optimization hints for background image rendering

## [1.0.3] - 2025-01-XX

### Changed
- Updated warning sign display and styling
- Improved final value visual presentation and formatting

## [1.0.2] - 2025-01-XX

### Fixed
- Fixed an issue where ammunition icons (AP, HE, SMOKE) were not displaying in the tank information panel due to a bug in the JavaScript rendering logic.
- Fixed missing images throughout the application

### Added
- Added mechanical counter feature

## [1.0.1] - 2025-01-XX

### Performance
- Optimized icon assets for better performance
  - Flag icons resized to 30px (`BRITISH_30.png`, `GERMANY_30.png`, `SOVIET_30.png`, `US_30.png`)
  - Vehicle icons resized to 28px (`AP_invert_28.png`, `HE_invert_28.png`, `SMOKE_invert_28.png`, `T_HUD_Status_Ammo_invert_28.png`)
- Removed unused assets to reduce repository size

## [1.0.0] - 2025

### Initial Release
- Calculate accurate elevation settings for multiple SPA vehicles
- Support for British Bishop, Churchill AVRE, US Sherman M4A3, Soviet KV-2, and German Panzer III/Brummbär
- Interactive distance ruler with snap-to-grid functionality
- Auto-calculation mode or manual calculation
- Tank information with specifications and screenshots
- Military-themed UI with authentic styling


