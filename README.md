# HLL SPA Calculator
**v2.2.3 - Updated for Hell Let Loose Update 21**

A Precise web-based targeting calculator for Self-Propelled Artillery (SPA) in Hell Let Loose.

## Features

- **Precise Ballistics:** Built on the game's ballistics internals and validated by our own in-game measurements.
- **Multi-Vehicle Support:** All six SPA vehicles.
- **Auto-Calculation:** Toggle auto-calculation on or off.
- **Height Calculation:** Toggle height correction on or off.
- **Max Reach Readout:** See how far your gun reaches from your current terrain elevation.
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

Only the last 5 releases are shown here — the full history lives in [CHANGELOG.md](CHANGELOG.md).

### [2.2.3] - 2026-10-13

#### Added
- **Max reach readout** next to Target Distance (FULL / LITE / keypad) — shows how far you can shoot from your current terrain; red when the distance is out of reach.
- Tank Info Range shows flat and max uphill reach, e.g. `~23–719m flat · 904m max uphill`.

### [2.2.2] - 2026-10-13

#### Added
- Changelog viewer in the footer — tap the version.

#### Changed
- Distance no longer auto-fills a default; it stays 0 until entered.
- Flags are high-res on phones, small `_30` on desktop.
- Field Manual subtitles are smaller on mobile.

### [2.2.1] - 2026-10-12

#### Added
- Desktop keypad accepts real keyboard input (numbers, Tab/Enter, Backspace/C, sign key).
- Shift = ±5, Ctrl = ±25 quick-step modifiers.
- Keypad hint line and "Keyboard controls" popup.
- Terrain/Height help popups with in-game screenshots (replaced browser alerts).
- FULL mode now has the same `(i)` help buttons as the keypad.

#### Changed
- Rewrote Terrain/Height help texts.
- Evened out keypad card spacing.

#### Fixed
- Help popup text now renders under the screenshot.

### [2.2.0] - 2026-10-12

#### Added
- **KEYPAD view on desktop** — the phone-style keypad, now on PC too.
- Hover/press feedback on keypad keys and the Terrain/Distance/Height tabs.

#### Changed
- Switching between FULL / LITE / KEYPAD preserves entered values.
- "More HLL Tools" sits above the Ko-fi button on phones.
- Tank ranges no longer show `(FLAT)`.

#### Fixed
- Keypad tank selection now fills in a sensible distance instead of leaving it at 0.
- Keypad no longer shows stale values after edits in FULL / LITE.

### [2.1.1] - 2026-10-11

#### Fixed
- Height correction now works for downhill and close-range targets.
- Restored the "beyond max range" warning with clearer wording.
- Switching tanks keeps a sensible distance.
- Mobile warning popup, wider result box, themed Tank Information button, and active-tank highlight.
- Field Manual fits the phone screen.

#### Changed
- Auto-calc with no distance entered fills in the tank's default.
- Height capped at ±1000 m.
- Mobile Distance tab renamed to "Distance".
