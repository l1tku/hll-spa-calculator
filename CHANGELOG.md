# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4] - 2025-01-XX

### Fixed
- Fixed screenshot lightbox image not being centered when displayed
- Fixed screenshot navigation showing loading state when switching with arrow keys (now preloads images with smooth fade transition)
- Fixed old screenshot image briefly appearing when clicking a new screenshot (now preloads new image before switching)
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


