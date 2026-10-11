# HLL SPA Calculator
**v2.1.1 - Updated for Hell Let Loose Update 21**

A Precise web-based targeting calculator for Self-Propelled Artillery (SPA) in Hell Let Loose.

## Features

- **Precise Ballistics:** Built on deep research into the game's ballistics internals (solver behaviour, flight and tail physics) validated by our own in-game measurements of every vehicle
- **Multi-Vehicle Support:** Accurate formulas for all SPA vehicles.
- **Auto-Calculation:** Toggle auto-calculation on or off.
- **Height Calculation:** Toggle height calculation on or off.
- **Mobile Calculator:** Phones get a calculator-style view — field tabs (Terrain MIL · Height ± · Target Distance), a big editable value display, and a custom keypad, so the on-screen keyboard is never needed.
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

**v2.1.1 - 2026-10-11**
### Fixed
- Close-range height now uses a real ballistic solve when the measured model saturates.
- Restored the "above supported range" warning with clearer wording — it now says the calculator math stops following beyond the flat max range.
- Fixed Height being ignored for downhill targets (the saturation probe used |height| instead of the signed height).
- Tank switching keeps a usable distance: auto-calc on uses the tank default, auto-calc off / phones keep the current value.
- Mobile: `+/-` before typing, floating warning popup, wider result box, equal card spacing, themed Tank Information button, active tank highlighted.
- Field Manual modal fits the phone viewport with a cleaned-up header; close button uses an SVG.
- "MORE HLL TOOLS" themed; footer reordered; haptics added across controls.
- Non-critical images use `prefetch` instead of `preload` (no more "unused preload" warnings).

### Changed
- Auto-calc with an empty distance seeds the tank default so a result shows immediately.
- Mobile calculator card top gap matches the side gaps.
- Height input caps at ±1000 m (mobile keypad and desktop).
- Mobile Distance tab button now reads just "Distance"; the full "Target Distance" label stays on the value readout.

**v2.1.0 - 2026-10-11**
### Added
- **Mobile calculator layout:** phones get field tabs (Terrain · Height · Target), a big editable value, and a custom keypad (no native keyboard needed); tap the value to type, with haptics.
- Terrain red, Height green/red by sign; `MORE HLL TOOLS` moved to the footer on phones.

### Changed
- Phones open zeroed with Tank Info collapsed; default distance `0` on a first load.
- Result refreshes on section change; Height auto-enables when used; lighter card shadow; buttons react on press.

### Fixed
- Height and terrain were ignored on mobile; backspace on a fresh field; keyboard-typed height now applies; copy works over plain `http`; no double-step; value caps.

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

Only the last 5 releases are shown here — the full history lives in [CHANGELOG.md](CHANGELOG.md).
