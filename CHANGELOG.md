# Changelog

## [2.2.2] - 2026-10-13

### Added
- Changelog viewer in the footer — tap the version.

### Changed
- Distance no longer auto-fills a default; it stays 0 until entered.
- Flags are high-res on phones, small `_30` on desktop.
- Field Manual subtitles are smaller on mobile.

## [2.2.1] - 2026-10-12

### Added
- Desktop keypad accepts real keyboard input (numbers, Tab/Enter, Backspace/C, sign key).
- Shift = ±5, Ctrl = ±25 quick-step modifiers.
- Keypad hint line and "Keyboard controls" popup.
- Terrain/Height help popups with in-game screenshots (replaced browser alerts).
- FULL mode now has the same `(i)` help buttons as the keypad.

### Changed
- Rewrote Terrain/Height help texts.
- Evened out keypad card spacing.

### Fixed
- Help popup text now renders under the screenshot.

## [2.2.0] - 2026-10-12

### Added
- **KEYPAD view on desktop** — the phone-style keypad, now on PC too.
- Hover/press feedback on keypad keys and the Terrain/Distance/Height tabs.

### Changed
- Switching between FULL / LITE / KEYPAD preserves entered values.
- "More HLL Tools" sits above the Ko-fi button on phones.
- Tank ranges no longer show `(FLAT)`.

### Fixed
- Keypad tank selection now fills in a sensible distance instead of leaving it at 0.
- Keypad no longer shows stale values after edits in FULL / LITE.

## [2.1.1] - 2026-10-11

### Fixed
- Height correction now works for downhill and close-range targets.
- Restored the "beyond max range" warning with clearer wording.
- Switching tanks keeps a sensible distance.
- Mobile warning popup, wider result box, themed Tank Information button, and active-tank highlight.
- Field Manual fits the phone screen.

### Changed
- Auto-calc with no distance entered fills in the tank's default.
- Height capped at ±1000 m.
- Mobile Distance tab renamed to "Distance".

## [2.1.0] - 2026-10-11

### Added
- Mobile calculator layout: tabs, custom keypad, haptics, color-coded values.

### Changed
- Phones start zeroed with Tank Info collapsed; auto-calculate on; result refreshes on tab change.

### Fixed
- Height/terrain ignored on mobile.
- Backspace on fresh field, double-tap steps, and value caps.
- Height stuck at close range; now falls back to a real ballistic solve when the model saturates.

## [2.0.5] - 2026-10-11

### Added
- The cat meme (`hell_and_back.webp`) peeks out behind the calculator.
- Quick-step modifiers on desktop: **Shift+click = ±5**, **Ctrl/Cmd+click = ±25**, with a one-time tip toast.

### Changed
- Inputs read like the in-game HUD: terrain `0MIL`/`+14MIL`/`-7MIL`, height `+5M`/`-3M`, distance `400M`.
- Tank range shows the measured span.
- Result bar shows `Distance`, signed `Target Height`, and `Terrain Elevation`.
- `+`/`-` buttons no longer auto-repeat.

## [2.0.0] - 2026-10-10

### Changed
- New calculation engine: all six SPAs solve from in-game measurements with exact ballistics, physical tail law, and per-vehicle height correction. Old display tables kept as reference only.
- Input limits match the game: distance 0–2500 m, terrain elevation ±356 MIL, height ±1000 m. Whole numbers, clamped on Enter.
- Vehicle ranges show the true max with full tilt (e.g. Bishop 2317 m).

## [1.6.5] - 2026-10-02

### Changed
- Bishop SP engine health: 430 → 530.

## [1.6.4] - 2026-09-30

### Changed
- Field Manual Bishop munition cost: 280 → 240.
- Field Manual stats corrected from game files for all six SPAs (pitch rate, smoke count, elevation fields).
- Engine/hull healths updated to current values; Dustbin clips 50 → 28; Panzer III AT 690 → 640.
- Pitch fields now show MIL alongside degrees.

## [1.6.3] - 2026-09-30

### Fixed
- Turret max elevation updated to 466 MIL for Sturmpanzer IV, Sherman M4A3 105, KV-2, and Panzer III Ausf. N.
- Enter focus loop now wraps on touchscreen laptops.
- Tank selection no longer calculates twice in auto mode.
- F5 reload keeps Lite mode and restores values to both panels.
- Turret max warning now takes priority over the range warning.

### Removed
- ~2,856 lines of dead code.
- Lite panel's duplicate faction dropdown and legacy Calculate button.
- The word "(Yellow)" from the result label.

### Changed
- Version strings synced across footer and service worker.

## [1.6.2] - 2026-09-24

### Removed
- Redundant comments across `index.html`, `service-worker.js`, and `dist/styles.css`.

## [1.6.1] - 2026-09-23

### Fixed
- Unselected Full/Lite toggle button now stays grey.
- Sturmpanzer screenshots updated to new `sturmpanzer_*.webp` images.
- Image viewer right-click "Open image in new tab" now opens the current image.
- Field Manual subtitle texts updated.

## [1.6.0] - 2026-09-23

### Changed
- Updated displayed game patch from HLL Update 20 to HLL Update 21.
- Game version link now points to the HLL Update 21 changelog.
- Service Worker cache version bumped to `v25`.

## [1.5.9] - 2026-09-16

### Added
- Open Graph (`og:image`) and Twitter Card preview image.
- Schema.org `WebSite` JSON-LD structured data and `og:site_name`.
- Favicon definitions with explicit dimensions and URLs.

### Changed
- Service Worker cache version bumped to `v24`.

## [1.5.8] - 2026-06-14

### Added
- Ko-fi support button on desktop and mobile.

### Changed
- Version text is now clickable: app version links to GitHub, game version links to the HLL changelog, author links to the GitHub profile.

## [1.5.7] - 2026-06-05

### Changed
- Re-tuned sub-200 m anchor sets for all SPAs using fresh in-game distance checks.
- Updated tested physical minimums for close-range interpolation.
- Improved under-200 m recovery accuracy with measured anchor points.
- Renamed Other Projects links.

## [1.5.6] - 2026-06-04

### Changed
- Rebuilt SPA yellow-sight range tables from in-game screenshots for all six vehicles.
- Added tested low-range vehicle anchors and warnings for sub-table shots.
- Vehicle range displays now reflect tested physical minimums instead of implying a hard 200 m minimum.

### Fixed
- Broken SPA HUD MIL conversion that caused incorrect sight values across the range table.

## [1.5.5] - 2026-06-04

### Changed
- Corrected Field Manual primary armament ammo displays for all six SPAs.
- Added `HEAT` and `FLYING DUSTBIN` support in the Field Manual renderer; `HEAT` uses the AP icon, `FLYING DUSTBIN` uses the HE icon.
- Slightly increased ammo and machine-gun icon sizes for readability.

### Fixed
- Mobile-only scrolling bug where the background overlay was lost when scrolling back up.

### Changed
- Moved mobile background darkening from a fixed overlay layer into the body background to avoid compositor repaint issues.

## [1.5.4] - 2026-06-03

### Changed
- SPA armor-damage stats updated for HLL Update 20.
- Panzer III Ausf. N `apDamage`: 610 → 690.
- Remaining SPA `apDamage` values: 950 → 1025 where applicable.

## [1.5.3] - 2026-04-21

### Changed
- More compact desktop layout and improved UI consistency.

## [1.5.2] - 2026-04-19

### Fixed
- Reset button triggering keyboard on mobile.
- Mobile scrolling when touching `+`/`-` buttons.
- Help-icon stuck highlight on mobile.
- Focus loop on mobile after pressing Enter.
- Input select-all behavior for height/diff/red number.

### Added
- Haptic feedback on Calculate, Copy, Reset, and toggles.

### Changed
- Preloaded flag icons and project hub icons.

## [1.5.1] - 2026-04-18

### Changed
- Warning icon positioned outside panel.
- `heightRedSection` and toggle panel heights aligned.
- Height Calculation and Auto Calculation toggles aligned.
- Removed tear line animation from warning container.
- Added mobile-specific flexbox ordering for warning icon.
- Image caching switched from cache-first to network-first.

## [1.5.0] - 2026-04-17

### Added
- Unified responsive build replacing separate `index.html`, `index-mobile.html`, and `index-lite.html`.
- Consolidated CSS/JS into `dist/styles.css` and `dist/main.js`.
- Height difference toggle.
- Hold-to-repeat `+`/`-` buttons.
- PWA support with `manifest.json` and app icons.
- Cache-busting version system for GitHub Pages deployment.

### Changed
- Complete mobile layout redesign with responsive panels and optimized touch targets.
- Collapsible tank specs panel.
- Mobile tank info restyled as a classified document with noise texture.
- Mobile "More HLL Tools" button for the project hub.
- Unified full/lite mode result display handling.
- More Projects modal restyled with dark armored panel.
- Simplified screenshot gallery to WebP only.

### Removed
- Deprecated armored ruler component.

### Fixed
- Terrain elevation returning 0.
- Base value showing 0.
- Tab/Enter navigation across modes.
- Tank history content corrections.

## [1.0.9] - 2025-12-21

### Fixed
- Lite view `+`/`-` buttons were unresponsive due to missing `data-field` and `data-delta` attributes.

## [1.0.8] - 2025-12-20

### Changed
- Toggle button styling with clearer ON/OFF states.
- Refined height difference handling for more reliable elevation results.
- Moved inline styles/scripts into bundled CSS/JS for better caching and performance.

## [1.0.7] - 2025-01-XX

### Changed
- Replaced CDN Tailwind with a built CSS file (`dist/output.css`) for production.
- Verified ballistics data accuracy against the PDF reference for all vehicles.

### Fixed
- Height difference calculation now correctly converts meters to mils.
- Mobile viewport scaling (`maximum-scale=5.0`, `user-scalable=yes`).
- Calculation history display and minor UI inconsistencies.

## [1.0.5] - 2025-01-XX

### Added
- Mobile HTML version with viewport, touch, iOS font-size, dropdown, counter, and 3D-effect optimizations.

### Changed
- Improved mobile UX, padding, and layout.
- Background attachment set to scroll on mobile for better performance.

## [1.0.4] - 2025-01-XX

### Fixed
- Screenshot lightbox centering.
- Screenshot navigation loading state and preloading.
- Old screenshot briefly appearing when clicking a new one.
- Field Manual ammo icon flash on Netlify.
- Tank image loading flash and delayed switching.

### Changed
- Massive image size reduction with WebP format and PNG fallback.
- Optimized image loading with preloads, lazy loading, async decoding, and CSS rendering hints.

## [1.0.3] - 2025-01-XX

### Changed
- Warning sign display and styling.
- Improved final value visual presentation and formatting.

## [1.0.2] - 2025-01-XX

### Fixed
- Ammunition icons not displaying in the tank information panel.
- Missing images throughout the app.

### Added
- Mechanical counter feature.

## [1.0.1] - 2025-01-XX

### Changed
- Optimized icon assets (flags at 30 px, vehicle icons at 28 px).

### Removed
- Unused assets to reduce repository size.

## [1.0.0] - 2025

### Added
- Initial release: elevation calculator for multiple SPA vehicles.
- Interactive distance ruler with snap-to-grid.
- Auto-calculation or manual calculation modes.
- Tank information with specifications and screenshots.
- Military-themed UI.
