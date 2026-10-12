# HLL SPA Calculator
**v2.2.1 - Updated for Hell Let Loose Update 21**

A Precise web-based targeting calculator for Self-Propelled Artillery (SPA) in Hell Let Loose.

## Features

- **Precise Ballistics:** Built on the game's ballistics internals and validated by our own in-game measurements.
- **Multi-Vehicle Support:** All six SPA vehicles.
- **Auto-Calculation:** Toggle auto-calculation on or off.
- **Height Calculation:** Toggle height correction on or off.
- **Mobile Calculator:** Phone layout with field tabs, a big editable value, and a custom keypad.
- **Keypad View (Desktop):** The phone-style keypad on desktop in a narrower card.
- **Field Manual:** Tank specs, screenshots, and historical notes.

## Installation & Local Usage

### Option 1: Live Web Access (Recommended)
No installation required. Open [HLL SPA Calculator](https://l1tku.github.io/hll-spa-calculator/) in any browser.

### Option 2: Local Development
1. **Clone** or download this repository.
2. Open `index.html` in any modern web browser.

## How to Use

1. **Select Vehicle:** Choose your tank/SPA from the dropdown.
2. **Set Terrain Elevation:** Type the **RED MIL** number you see in your ingame HUD.
3. **Set Distance:** Enter the distance to the target (the enemy).
4. **Set Height Difference (optional):** Enter the height difference between your gun and the target.
5. **Calculate:** Set your turret to the elevation shown.

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

**v2.2.1 - 2026-10-12**
### Added
- Desktop keypad accepts real keyboard input: type numbers, Tab/Enter to move, Backspace/C to clear, `.` or the sign key flips the sign.
- Shift = ±5, Ctrl = ±25 quick-steps (the tip shows your actual sign key).
- Keypad hint line + "Keyboard controls" popup.
- Terrain/Height help popups with in-game screenshots (were plain browser alerts).
- FULL mode got the same `(i)` help buttons as the keypad.

### Changed
- Rewrote the Terrain/Height help texts.
- Keypad card spacing evened out.

### Fixed
- Help popup text now renders under the screenshot.

**v2.2.0 - 2026-10-12**
### Added
- **KEYPAD view on desktop** — the phone-style keypad, now on PC too.
- KEYPAD: hover/press feedback on the keys and the Terrain / Distance / Height tabs.

### Changed
- Switching between FULL / LITE / KEYPAD keeps the values you entered.
- Phones: "More HLL Tools" sits above the Ko-fi button.
- Tank ranges no longer show "(FLAT)".

### Fixed
- KEYPAD: picking a tank now fills in a sensible distance instead of leaving it at 0.
- KEYPAD no longer shows stale values after you edit them in FULL / LITE.

**v2.1.1 - 2026-10-11**
### Fixed
- Height correction now works for downhill and close-range targets.
- Restored the "beyond max range" warning with clearer wording.
- Switching tanks keeps a sensible distance.
- Mobile: warning popup, wider result box, themed Tank Information button, active tank highlighted.
- Field Manual fits the phone screen.

### Changed
- Auto-calc with no distance entered fills in the tank's default.
- Height capped at ±1000 m.
- Mobile Distance tab reads just "Distance".

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

Only the last 5 releases are shown here — the full history lives in [CHANGELOG.md](CHANGELOG.md).
