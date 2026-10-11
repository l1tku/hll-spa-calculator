# HLL SPA Calculator
**v2.0.5 - Updated for Hell Let Loose Update 21**

A Precise web-based targeting calculator for Self-Propelled Artillery (SPA) in Hell Let Loose.

## Features

- **Precise Ballistics:** Built on deep research into the game's ballistics internals (solver behaviour, flight and tail physics) validated by our own in-game measurements of every vehicle
- **Multi-Vehicle Support:** Accurate formulas for all SPA vehicles.
- **Auto-Calculation:** Toggle auto-calculation on or off.
- **Height Calculation:** Toggle height calculation on or off.
- **Mobile Support:** Compact mobile design with collapsible panels.
- **Intel Database:** Built-in "Field Manual" with tank specifications, screenshots, and authentic WWII history.
- **Immersive UI:** Military-themed interface with authentic styling.
- **Lite Mode:** Lightweight version.

## Installation & Local Usage

### Option 1: Live Web Access (Recommended)
No installation required. Open [HLL SPA Calculator](https://l1tku.github.io/hll-spa-calculator/) in any browser.

### Option 2: Local Development
1. **Clone** or download this repository.
2. Open `index.html` in any modern web browser.

## How to Use

1. **Select Vehicle:** Choose your tank/SPA from the dropdown.
2. **Set Distance:** Enter target distance (Range varies by vehicle).
3. **Set Height Difference (optional):** Enter height difference in meters.
4. **Set Terrain Elevation:** Type the **RED MIL** number you see in your ingame HUD.
5. **Calculate:** Use the calculated Elevation setting.

## Vehicles Supported

- **British:** Bishop SP, Churchill AVRE
- **Canada:** Churchill AVRE
- **US:** Sherman M4A3 (105)
- **Soviet Union:** KV-2
- **DAK:** Panzer III Ausf.N
- **Germany:** Sturmpanzer IV (Brummbar)

## Credits

- **Early SPA research:** u/Extension_Lake6664 — [Reddit post](https://www.reddit.com/r/HellLetLoose/comments/1tiqksn/hll_spa_true_max_range_2000m_shots_and_general/) · [GitHub](https://github.com/Balmontogustangodungagloboguntu/HLL-SPA-true-calculator)
- **Current engine:** our own research + measurements.

## Disclaimer & Copyright

This project is a community-made tool and is **not** affiliated with, endorsed by, or sponsored by Team17, Cover 6 Studios, or Black Matter.

**Hell Let Loose** content and materials are trademarks and copyrights of their respective owners.
* **Game Assets:** The vehicle images and specific game icons used in this tool are the property of the Hell Let Loose developers and publishers. They are used here for educational and informational purposes.

## License

The source code (HTML, CSS, JavaScript) of this project is licensed under the **MIT License**.

> **Note:** The game assets (vehicle images in `/images/tanks`) are **excluded** from this license and remain the intellectual property of their respective owners.

## Version History

**v2.0.5 - 2026-10-11**
### Added
- The cat meme (`hell_and_back.webp`) now peeks out behind the calculator:3
- Quick-step steppers on desktop: **Shift+click = ±5**, **Ctrl/Cmd+click = ±25**, with a one-time tip toast.

### Changed
- Inputs read like the in-game HUD: terrain `0MIL`/`+14MIL`/`-7MIL`, height `+5M`/`-3M`, distance `400M`.
- Tank range shows the measured span as `~17m - ~506m (FLAT)`.
- Result bar shows `Distance` (e.g. `400M`), signed `Target Height` (`+1M`/`-1M`), and `Terrain Elevation` (`0MIL`/`+14MIL`/`-7MIL`).
- Holding −/+ no longer auto-repeats — one press = one step.

**v2.0.0 - 2026-10-10**
### Changed
- New calculation engine: all six SPAs solve from our own in-game measurements (full span, -89 MIL to the past-cap tail) with exact ballistics — physical tail law and per-vehicle height correction. Old display tables kept as reference only.
- Input limits match the game: distance 0–2500 m, terrain elevation ±356 MIL (the firing gate), height ±1000 m. Whole numbers, clamped on Enter.
- Vehicle ranges show the true max with full tilt (e.g. Bishop 2317m).

**v1.6.5 - 2026-10-02**
### Fixed
- Bishop SP engine health 430 → 530

**v1.6.4 - 2026-09-30**
### Fixed
- Field Manual munitions cost for Bishop SP corrected from 280 to 240
- Field Manual stats corrected from the game files (datamine, not in any patch notes), all six SPAs: pitch rate 1°/s → 1.5°/s, smoke 45 → 35, elevation field 30° → 26.2°/15°/20°
- Engine/hull healths raised to current values (Bishop 910/830 → 880/850, AVRE → 1230/1080/960/630), Dustbin clips 50 → 28, Panzer III AT 690 → 640
- Pitch fields now also show MIL (e.g. `-5° (-89 MIL)`, `1.5°/s (27 MIL/s)`)

**v1.6.3 - 2026-09-30**
### Fixed
- Turret max elevation updated to 466 MIL for Sturmpanzer IV, Sherman M4A3 105, KV-2 and Panzer III Ausf. N. Not in the patch notes — thanks, devs.
- Enter focus loop now wraps on touchscreen laptops.
- Tank selection no longer calculates twice in auto mode.
- F5 reload keeps Lite mode and restores values to both panels.
- Turret max warning now takes priority over the range warning.

### Removed
- ~2,856 lines of dead code (main.js 11,672 → 9,062).
- Lite panel's duplicate faction dropdown and legacy Calculate button.
- The word "(Yellow)" from the result label.

### Changed
- Version strings all track this changelog (footer `v1.6.3`, service worker `1.6.3-2`).

Only the last 5 releases are shown here — the full history lives in [CHANGELOG.md](CHANGELOG.md).
