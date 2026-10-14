// ============================================
// VERSION CONFIG
// ============================================

const HLL_VERSION = {

    appVersion: 'v2.2.4',

    gamePatch: 'HLL Update 21',

    statsUpdated: '2026-10-11',

    author: 'by litku'

};

function flagImgTag(flagSrc, alt, loading) {

    const src = String(flagSrc);

    const small = src.replace(/([^/]+)\.webp$/, '$1_30.webp');

    return '<img src="' + small + '" srcset="' + small + ' 1x, ' + src + ' 2x" alt="' + alt + '" class="flag-icon" loading="' + loading + '" decoding="async">';

}


// ============================================
// INGAME ARTILLERY DATA TABLES
// ============================================

const tables = {};

tables['British (Bishop SP)'] = {
    800: 167, 760: 159, 720: 151, 680: 144, 640: 136, 600: 128,
    560: 120, 520: 112, 480: 105, 440: 97, 400: 89, 360: 81,
    320: 73, 280: 65, 240: 58, 200: 50,
    minMil: -89, maxMil: 267
};

tables['British (Churchill AVRE)'] = {
    250: 256, 240: 246, 230: 235, 220: 225, 210: 215, 200: 204,
    190: 194, 180: 183, 170: 173, 160: 162, 150: 152, 140: 141,
    130: 131, 120: 120, 110: 110, 100: 100,
    minMil: -89, maxMil: 356
};

tables['DAK (Panzer III Ausf.N)'] = {
    500: 366, 480: 348, 460: 331, 440: 313, 420: 295, 400: 277,
    380: 260, 360: 242, 340: 224, 320: 206, 300: 188, 280: 171,
    260: 153, 240: 135, 220: 117, 200: 100,
    minMil: -89, maxMil: 466
};

tables['Germany (Sturmpanzer IV Brummbär)'] = {
    500: 366, 480: 348, 460: 331, 440: 313, 420: 295, 400: 277,
    380: 260, 360: 242, 340: 224, 320: 206, 300: 188, 280: 171,
    260: 153, 240: 135, 220: 117, 200: 100,
    minMil: -89, maxMil: 466
};
const sturmpanzerKey = Object.keys(tables).find((key) => key.includes('Sturmpanzer'));

tables['Soviet Union (KV-2)'] = {
    600: 366, 575: 350, 550: 333, 525: 316, 500: 300, 475: 283,
    450: 266, 425: 250, 400: 233, 375: 216, 350: 200, 325: 183,
    300: 166, 275: 150, 250: 133, 225: 116, 200: 100,
    minMil: -89, maxMil: 466
};

tables['US (Sherman M4A3 105)'] = {
    600: 366, 575: 350, 550: 333, 525: 316, 500: 300, 475: 283,
    450: 266, 425: 250, 400: 233, 375: 216, 350: 200, 325: 183,
    300: 166, 275: 150, 250: 133, 225: 116, 200: 100,
    minMil: -89, maxMil: 466
};


// ============================================
// SPA SOLVE ENGINE
// measured rows + tail law + height term.
// the tables above are just reference, the solve uses the rows below.

// ============================================

const SPA_SOLVE = {};

SPA_SOLVE['US (Sherman M4A3 105)'] = {
    rows: [[-89,23],[-50,35],[-16,55],[5,75],[25,101],[40,122],[55,145],[70,168],[85,194],
           [100,221],[116,241],[166,311],[233,406],[300,507],[366,598],
           [400,644],[424,676],[448,702],[466,719]],
    tail: { maxM: 600, capDeg: 20.6 }, hmM: 1.46, turretMil: [-89, 466]
};

SPA_SOLVE['Soviet Union (KV-2)'] = {
    rows: [[-89,22],[-50,35],[-16,55],[5,75],[25,99],[40,122],[55,143],[70,168],[85,191],
           [99,217],[116,241],[166,311],[233,406],[300,507],[367,601],
           [403,648],[426,676],[451,703],[466,720]],
    tail: { maxM: 600, capDeg: 20.6 }, hmM: 1.34, turretMil: [-89, 466]
};

SPA_SOLVE[sturmpanzerKey] = {
    rows: [[-89,18],[-50,29],[-16,48],[5,67],[25,92],[40,115],[55,139],[70,164],[85,190],
           [100,218],[117,237],[188,311],[260,387],[331,466],[364,500],[366,508],
           [398,535],[422,557],[446,585],[464,600]],
    tail: { maxM: 500, capDeg: 20.6 }, hmM: 1.52, turretMil: [-89, 466]
};

SPA_SOLVE['DAK (Panzer III Ausf.N)'] = {
    rows: [[-87,18],[-49,28],[-14,48],[7,68],[25,92],[41,114],[51,131],[58,142],[66,153],
           [74,168],[82,181],[90,196],[98,211],[106,222],[113,228],[120,237],[129,242],
           [137,251],[146,264],[153,272],[163,282],[170,289],[203,324],[252,377],
           [302,430],[353,486],[403,539],[453,591],[469,605]],
    tail: { maxM: 500, capDeg: 20.6 }, hmM: 1.04, turretMil: [-89, 466]
};

SPA_SOLVE['British (Churchill AVRE)'] = {
    rows: [[-89,17],[-20,35],[10,48],[82,98],[100,114],[110,124],[120,132],[131,142],
           [141,150],[152,161],[162,171],[173,179],[183,189],[194,197],[204,206],[215,217],
           [225,225],[235,234],[246,245],[256,255],[281,274],[301,293],[330,315],[345,326],[356,334]],
    tail: { maxM: 250, capDeg: 14.42 }, hmM: 0.94, turretMil: [-89, 356]
};

SPA_SOLVE['British (Bishop SP)'] = {
    rows: [[-89,19],[-50,32],[-16,61],[5,100],[25,148],[40,194],[50,232],[58,278],[65,304],
           [73,338],[81,381],[89,424],[97,459],[105,500],[112,535],[120,573],[128,611],
           [136,655],[144,695],[151,730],[159,769],[167,810],[200,955],[267,1238]],
    tail: { maxM: 800, capDeg: 9.4 }, hmM: 1.64, turretMil: [-89, 267]
};

const SPA_G = 9.8;
const SPA_MIL_DEG = 0.05625;

// forward: mil -> metres
// rows + tail law past the last row
//   I(t) = 5*cos(t) + C*sin(2t),  C = (maxM - 5*cos(cap)) / (1.005 * sin(2*cap))
function spaForwardMeters(key, mil) {
    const d = SPA_SOLVE[key];
    if (!d) return NaN;
    const rows = d.rows;
    if (mil <= rows[0][0]) return rows[0][1];
    const last = rows[rows.length - 1];
    if (mil <= last[0]) {
        for (let i = 0; i < rows.length - 1; i++) {
            const m1 = rows[i][0], r1 = rows[i][1];
            const m2 = rows[i + 1][0], r2 = rows[i + 1][1];
            if (mil <= m2) return r1 + (mil - m1) / (m2 - m1) * (r2 - r1);
        }
    }
    const rad = (deg) => deg * Math.PI / 180;
    const th = rad(mil * SPA_MIL_DEG);
    const thTop = rad(last[0] * SPA_MIL_DEG);
    const thCap = rad(d.tail.capDeg);
    const C = (d.tail.maxM - 5 * Math.cos(thCap)) / (1.005 * Math.sin(2 * thCap));
    const I = (t) => 5 * Math.cos(t) + C * Math.sin(2 * t);
    return last[1] + I(th) - I(thTop);
}

// height correction: heightM = target height above gun (m)

function spaHeightDeltaMeters(key, mil, heightM) {
    if (!heightM) return 0;
    const d = SPA_SOLVE[key];
    const R = spaForwardMeters(key, mil);
    const thDeg = mil * SPA_MIL_DEG;
    const rad = thDeg * Math.PI / 180;
    const sinF = Math.sin(rad), cosF = Math.cos(rad);
    if (Math.abs(sinF) < 1e-4 || Math.abs(cosF) < 1e-4) return 0;
    const thSpeed = Math.max(thDeg, 2.8) * Math.PI / 180;
    const rSpawn = Math.max(R - 5 * cosF, 1);
    const v2 = SPA_G * rSpawn / (2.01 * Math.sin(thSpeed) * Math.cos(thSpeed));
    if (!(v2 > 0)) return 0;
    const v = Math.sqrt(v2), vx = v * cosF, vy0 = v * sinF;
    const land = (dh) => {
        const D = d.hmM + 5 * sinF - dh;
        const disc = Math.max(0, vy0 * vy0 + 2 * SPA_G * D);
        return 5 * cosF + vx * (vy0 + Math.sqrt(disc)) / SPA_G;
    };
    return land(heightM) - land(0);
}

// inverse: distance (+ height) -> world mil
function spaInverseMils(key, meters, heightM) {
    const height = heightM || 0;
    const f = (mil) => spaForwardMeters(key, mil) + spaHeightDeltaMeters(key, mil, height) - meters;
    let lo = -89, hi = 800;
    const fLo = f(lo), fHi = f(hi);
    if (!Number.isFinite(fLo) || !Number.isFinite(fHi)) return NaN;
    if (fLo >= 0) return lo;
    if (fHi <= 0) return hi;
    for (let i = 0; i < 60; i++) {
        const mid = (lo + hi) * 0.5;
        const fMid = f(mid);
        if (!Number.isFinite(fMid)) return NaN;
        if (fMid < 0) lo = mid; else hi = mid;
        if (hi - lo < 1e-4) break;
    }
    return (lo + hi) * 0.5;
}

// ============================================
// END SPA SOLVE ENGINE
// ============================================

// ============================================
// TANK DATA ARRAY
// ============================================

const tankData = [

    {

        value: "British (Bishop SP)",

        flag: "images/UI/Icons/flags/BRITISH.webp",

        flagAlt: "BRITISH",

        image: "images/tanks/BISHOP_248.webp",

        imageBase: "BISHOP_248",

        shortName: "Bishop SP",

        classifiedRef: {

            ref: "REF: ORD-1942/SPA-007",

            designation: "CLASSIFIED: VALENTINE-BISHOP",

            classification: "OPERATION TORCH | 25-PDR SPA"

        }

    },

    {

        value: "British (Churchill AVRE)",

        flag: "images/UI/Icons/flags/BRITISH.webp",

        flagAlt: "BRITISH",

        image: "images/tanks/AVRE_248.webp",

        imageBase: "AVRE_248",

        shortName: "Churchill AVRE",

        classifiedRef: {

            ref: "REF: WO-1943/AVRE-001",

            designation: "CLASSIFIED: CHURCHILL-290MM",

            classification: "OVERLORD PREP | BREACHING VEHICLE"

        }

    },

    {

        value: "US (Sherman M4A3 105)",

        flag: "images/UI/Icons/flags/US.webp",

        flagAlt: "US",

        image: "images/tanks/M4A3_248.webp",

        imageBase: "M4A3_248",

        shortName: "Sherman M4A3",

        classifiedRef: {

            ref: "REF: OCM-1944/M4A3-105",

            designation: "CLASSIFIED: SHERMAN-105MM",

            classification: "OPERATION COBRA | CLOSE SUPPORT"

        }

    },

    {

        value: "Soviet Union (KV-2)",

        flag: "images/UI/Icons/flags/SOVIET.webp",

        flagAlt: "USSR",

        image: "images/tanks/KV2_248.webp",

        imageBase: "KV2_248",

        shortName: "KV-2",

        classifiedRef: {

            ref: "REF: STAVKA-1941/KV-2-152",

            designation: "CLASSIFIED: KV-2 \"DRUNKEN MONSTER\"",

            classification: "BARBAROSSA DEFENSE | 152MM HOWITZER"

        }

    },

    {

        value: "DAK (Panzer III Ausf.N)",

        flag: "images/UI/Icons/flags/GERMANY.webp",

        flagAlt: "Germany",

        image: "images/tanks/PANZERIII_248.webp",

        imageBase: "PANZERIII_248",

        shortName: "Panzer III Ausf.N",

        classifiedRef: {

            ref: "REF: AK-1942/PzIII-Ausf.N",

            designation: "CLASSIFIED: PANZER-III-AFRIKA",

            classification: "SONNENBLUME | 75MM L/24 INFANTRY SUPPORT"

        }

    },

    {

        value: "Germany (Sturmpanzer IV Brummbär)",

        flag: "images/UI/Icons/flags/GERMANY.webp",

        flagAlt: "Germany",

        image: "images/tanks/BRUMMBAR_248.webp",

        imageBase: "BRUMMBAR_248",

        shortName: "Sturmpanzer IV",

        classifiedRef: {

            ref: "REF: WH-1943/StuPz-IV-150",

            designation: "CLASSIFIED: BRUMMBÄR",

            classification: "ZITADELLE | URBAN ASSAULT GUN"

        }

    }

];


// Helper function to handle tank selection (used by both full and lite dropdowns)

function handleTankSelection(value, selectSelected, selectItems, factionInput, isLite) {

    const tank = tankData.find(t => t.value === value);


    if (!tank) return false;


    factionInput.value = tank.value;


    selectSelected.innerHTML = `

        ${flagImgTag(tank.flag, tank.flagAlt, 'eager')}

        <span class="text-ellipsis flex-1 min-w-0">${tank.shortName}</span>

    `;


    selectItems.querySelectorAll('.select-item').forEach(item => {

        const active = item.getAttribute('data-value') === tank.value;

        item.classList.toggle('select-item-active', active);

        item.setAttribute('aria-selected', active ? 'true' : 'false');

    });


    selectItems.classList.add('select-hide');

    selectSelected.classList.remove('select-arrow-active');


    if (isLite) {

        selectSelected.setAttribute('aria-expanded', 'false');

    } else {


        updateFactionImage();

        updateMilRangeText();

    }


    updateMaxRangeHints();

    saveState();

    if (isAutoCalcEnabled()) {

        calculate();

    } else if (!isLite) {

        // Reset final counter to 0000 when switching tanks and auto calc is off

        rollElevationToNumber(0);

    }

    // Keep the on-screen keypad readouts in step after a tank switch

    if (typeof refreshKeypadFromInputs === 'function') refreshKeypadFromInputs();


    return true;

}


function generateTankDropdown() {

    const selectSelected = document.getElementById('selectSelected');

    const selectItems = document.getElementById('selectItems');

    const factionInput = document.getElementById('faction');


    if (!selectSelected || !selectItems || !factionInput) return;

    
    const currentFaction = factionInput.value || tankData[0].value;

    const currentTank = tankData.find(t => t.value === currentFaction) || tankData[0];

    
    selectSelected.innerHTML = `

        ${flagImgTag(currentTank.flag, currentTank.flagAlt, 'eager')}

        <span class="text-ellipsis flex-1 min-w-0">${currentTank.shortName}</span>

    `;

    
    selectItems.innerHTML = tankData.map(tank => `

        <div data-value="${tank.value}" class="select-item${tank.value === currentFaction ? ' select-item-active' : ''}" role="option" aria-selected="${tank.value === currentFaction ? 'true' : 'false'}">

            ${flagImgTag(tank.flag, tank.flagAlt, 'lazy')}

            ${tank.shortName}

        </div>

    `).join('');

    
    const items = selectItems.querySelectorAll('div[data-value]');

    items.forEach(item => {

        item.addEventListener('click', function(e) {

            e.stopPropagation();

            haptic(HAPTIC_TAP);

            const value = this.getAttribute('data-value');

            handleTankSelection(value, selectSelected, selectItems, factionInput, false);

        });

    });

}


function getTankByValue(value) {

    return tankData.find(t => t.value === value) || tankData[0];

}


// Read/write a field across the full + lite input pair. The two layouts use
// separate inputs, so switching views must mirror the values.

function readViewValue(wasLite, fullId, liteId) {

    const el = document.getElementById(wasLite ? liteId : fullId) ||

        document.getElementById(fullId) ||

        document.getElementById(liteId);

    return el ? el.value : null;

}

function applyViewValue(value, fullId, liteId) {

    if (value == null) return;

    [fullId, liteId].forEach(function(id) {

        const el = document.getElementById(id);

        if (el && el.value !== value) el.value = value;

    });

}


// Switch between full and lite view modes

function switchViewMode(mode) {

    // Capture the currently-visible values first so switching views keeps them.

    const wasLite = document.body.getAttribute('data-mode') === 'lite';

    const captured = {

        distance: readViewValue(wasLite, 'distance', 'distanceLite'),

        heightDiff: readViewValue(wasLite, 'heightDiff', 'heightDiffLite'),

        redNumber: readViewValue(wasLite, 'redNumber', 'redNumberLite')

    };

    // KEYPAD is an overlay on the FULL layout, so the full-mode styling
    // (tank image, side buttons, spec panel) stays identical. Keep data-mode
    // as "full" and flag the keypad with a body class instead.

    const keypadView = (mode === 'keypad');

    const layoutMode = keypadView ? 'full' : mode;

    document.body.setAttribute('data-mode', layoutMode);

    document.body.classList.toggle('keypad-view', keypadView);

    // Mirror the captured values into both input pairs so the values stay.

    applyViewValue(captured.distance, 'distance', 'distanceLite');

    applyViewValue(captured.heightDiff, 'heightDiff', 'heightDiffLite');

    applyViewValue(captured.redNumber, 'redNumber', 'redNumberLite');

    // Refresh the keypad display from the underlying inputs so it doesn't show stale values.

    if (keypadView && typeof refreshKeypadFromInputs === 'function') refreshKeypadFromInputs();

    
    // KEYPAD view hides the Height / Auto toggles, so force both on (the keypad

    // is always live, same as phones).

    if (keypadView) {

        ['heightDiffToggle', 'autoCalcToggle'].forEach(function(id) {

            const t = document.getElementById(id);

            if (t && !t.checked) {

                t.checked = true;

                t.dispatchEvent(new Event('change', { bubbles: true }));

            }

        });

    }

    
    try {

        localStorage.setItem('hll-calculator-mode', mode);

    } catch (e) {


    }

    
    if (layoutMode === 'lite') {

        generateLiteTankDropdown();


        syncFullTogglesToLite();

    } else {

        generateTankDropdown();


        updateCalculateButton();

    }


    if (isAutoCalcEnabled()) {

        calculate();

    }

}


// Generate lite mode dropdown

function generateLiteTankDropdown() {

    const selectSelected = document.getElementById('selectSelectedLite');

    const selectItems = document.getElementById('selectItemsLite');

    const factionInput = document.getElementById('faction');

    
    if (!selectSelected || !selectItems || !factionInput) return;

    
    const currentFaction = factionInput.value || tankData[0].value;

    const currentTank = tankData.find(t => t.value === currentFaction) || tankData[0];

    
    selectSelected.innerHTML = `

        ${flagImgTag(currentTank.flag, currentTank.flagAlt, 'eager')}

        <span class="text-ellipsis flex-1 min-w-0">${currentTank.shortName}</span>

    `;

    
    selectItems.innerHTML = tankData.map(tank => `

        <div data-value="${tank.value}" class="select-item${tank.value === currentFaction ? ' select-item-active' : ''}" role="option" aria-selected="${tank.value === currentFaction ? 'true' : 'false'}">

            ${flagImgTag(tank.flag, tank.flagAlt, 'lazy')}

            ${tank.shortName}

        </div>

    `).join('');

    
    const items = selectItems.querySelectorAll('div[data-value]');

    items.forEach(item => {

        item.addEventListener('click', function(e) {

            e.stopPropagation();

            haptic(HAPTIC_TAP);

            const value = this.getAttribute('data-value');

            handleTankSelection(value, selectSelected, selectItems, factionInput, true);

        });

    });

    
    if (!selectSelected.dataset.liteHandlerAttached) {

        selectSelected.dataset.liteHandlerAttached = 'true';

        
        selectSelected.addEventListener('click', function(e) {

            e.stopPropagation();

            haptic(HAPTIC_TAP);

            const isExpanded = selectSelected.getAttribute('aria-expanded') === 'true';

            selectSelected.setAttribute('aria-expanded', !isExpanded);

            selectSelected.classList.toggle('select-arrow-active');

            selectItems.classList.toggle('select-hide');

        });

    }

    
    if (!document.body.dataset.liteDropdownCloseAttached) {

        document.body.dataset.liteDropdownCloseAttached = 'true';

        
        document.addEventListener('click', function(e) {

            const liteDropdown = document.querySelector('.mode-lite-only .custom-select');

            if (liteDropdown && !liteDropdown.contains(e.target)) {

                const liteSelectItems = document.getElementById('selectItemsLite');

                const liteSelectSelected = document.getElementById('selectSelectedLite');

                if (liteSelectItems) liteSelectItems.classList.add('select-hide');

                if (liteSelectSelected) {

                    liteSelectSelected.classList.remove('select-arrow-active');

                    liteSelectSelected.setAttribute('aria-expanded', 'false');

                }

            }

        });

    }

}


// Tank information data (in-game statistics, history, and real life)

const tankInfo = {

    'US (Sherman M4A3 105)': {

        title: 'M4A3 Sherman with 105mm Howitzer',

        stats: {

            elevation: '-89 MIL to 466 MIL',

            hullGun: 'M1919 .30 cal - 200 rounds × 6 magazines',

            mainGun: '105mm HOWIZER - 50 HE rounds, 35 SMOKE rounds, 20 HEAT rounds',

            turretRotation: '360°',

            coaxial: 'M1919 .30 cal - 200 rounds × 6 magazines',

            topSpeed: '25 km/h',

            yawRate: '7°/s',

            pitchRate: '1.5°/s (27 MIL/s)',

            pitchAngleMin: '-5° (-89 MIL)',

            pitchAngleMax: '26.2° (466 MIL)',

            hullHealth: '900',

            turretHealth: '790',

            mobilityHealth: '710',

            engineBlockHealth: '520',

            gearSwitchTime: '0.8s',

            reloadSpeed: '10s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '35',

            apDamage: '1025',

            apDirectArmor: 'Very High',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '28m',

            munitionsCost: '280'

        },

        history: 'The M4 Sherman tank variant equipped with the 105mm howitzer (typically the M4 or M4A3 chassis) was developed to provide powerful close infantry support. It saw extensive use in both the European and Pacific Theaters. The 105mm howitzer was highly effective against fortifications, infantry positions, and used primarily for demolition and smoke delivery, making it valuable for breakthrough operations.',

        historyImages: {

            background: { src: 'images/history/sherman_m4a3_105/development.webp', caption: 'M4(105) development study - Development of Armored Vehicles Vol. 1 (U.S. Army, 1947, public domain).' },

            range: { src: 'images/history/sherman_m4a3_105/howitzer.webp', caption: "105 mm Howitzer M2A1; the Sherman's M4 howitzer is the tank version of this gun (U.S. War Department, public domain)." },

            production: { src: 'images/history/sherman_m4a3_105/production.webp', caption: "Chrysler's Detroit Arsenal Tank Plant, 1942 (public domain)." },

            service: [

                { src: 'images/history/sherman_m4a3_105/service_europe.webp', caption: 'M4A3 crew of the 191st Tank Battalion, Rambervillers, France, 13 October 1944 (U.S. Signal Corps, public domain).' },

                { src: 'images/history/sherman_m4a3_105/service_pacific.webp', caption: 'M4 Sherman of the 710th Tank Battalion, Leyte, Philippines, 1945 (U.S. Army, public domain).' }

            ]

        },

        realLife: {

            range: '11,500 yards (~10,500m) for indirect fire with M67 HE projectile; 1,500 yards (~1,400m) effective direct fire.',

            production: 'A total of 4,680 105mm Howitzer Shermans (across M4 and M4A3 chassis) were produced between February 1943 and March 1945, primarily by Detroit Arsenal and Chrysler at the Grand Blanc Arsenal.',

            service: 'Used by the US Army in European and Pacific theaters (1943-1945). It was typically issued one per tank company as a dedicated close-support vehicle.',

            strengths: [

                'Carried a high volume of High Explosive (HE) and Smoke rounds, making it an excellent infantry support weapon.',

                'The 105mm HE shell was far more destructive against dug-in positions and buildings than the standard 75mm or 76mm shells.',

                'Good mobility and reliability, maintaining the logistical advantage of the Sherman chassis.'

            ],

            weaknesses: [

                'The M4 105mm Howitzer model used a lower turret (D50878) which lacked a power traverse.',

                'The tank was primarily armed with HE rounds and had limited effectiveness against heavily armored enemy tanks in direct fire combat (though it did carry a Heat/HESH round).',

                'Used the older Vertical Volute Spring Suspension (VVSS) on many versions, which was less stable than the later Horizontal Volute Spring Suspension (HVSS).'

            ]

        }

    },

    'Soviet Union (KV-2)': {

        title: 'KV-2 Heavy Tank',

        stats: {

            elevation: '-89 MIL to 466 MIL',

            hullGun: 'DT .30 cal - 200 rounds × 6 magazines',

            mainGun: '152MM M-10T - 50 HE rounds, 35 SMOKE rounds, 20 HEAT rounds',

            turretRotation: '360°',

            coaxial: 'NO COAXIAL',

            topSpeed: '22 km/h',

            yawRate: '6°/s',

            pitchRate: '1.5°/s (27 MIL/s)',

            pitchAngleMin: '-5° (-89 MIL)',

            pitchAngleMax: '26.2° (466 MIL)',

            hullHealth: '890',

            turretHealth: '830',

            mobilityHealth: '700',

            engineBlockHealth: '520',

            gearSwitchTime: '1.1s',

            reloadSpeed: '12s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '35',

            apDamage: '1025',

            apDirectArmor: 'Very High',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '32m',

            munitionsCost: '280'

        },

        history: 'The KV-2 was a Soviet heavy tank armed with the massive 152mm M-10 howitzer (specifically the M-10T). It was designed as an assault tank to destroy fortifications and bunkers. It saw action during the Winter War against Finland and was famously used in the early stages of Operation Barbarossa, where its heavy armor proved almost impervious to early German anti-tank guns. Despite its powerful armament, its slow speed, long reload time, and mechanical issues made it highly problematic.',

        historyImages: {

            background: { src: 'images/history/kv2/background.webp', caption: 'First KV-2 prototype, February 1940 (Wikimedia Commons, CC0).' },

            range: { src: 'images/history/kv2/range.webp', caption: 'Soviet 152 mm M-10 howitzer (1942); the KV-2 used the M-10T tank version (SA-kuva, public domain).' },

            service: [

                { src: 'images/history/kv2/service_raseiniai.webp', caption: 'Germans inspect a damaged KV-2 near Raseiniai, 1941 (public domain).' },

                { src: 'images/history/kv2/service_german.webp', caption: 'German soldiers inspect a captured KV-2, 1941 (public domain).' }

            ]

        },

        realLife: {

            range: '12,400 meters (maximum indirect fire range with the M-10 howitzer); effective direct fire range for tank combat was less than 1,000 meters.',

            production: 'Produced from 1940-1941 (not 1939), with approximately 334 units built at the Kirov Plant (LKZ) in Leningrad.',

            service: 'Used by the Red Army in the early Eastern Front (1940-1941). Most were lost due to mechanical failure and fuel shortage rather than enemy fire.',

            strengths: [

                'Carried the most powerful gun mounted on a tank chassis at the time, capable of destroying any Axis tank and most fortifications.',

                'Heavy armor (up to 110mm on the turret front) provided near-invulnerability to most German anti-tank weapons in 1941.'

            ],

            weaknesses: [

                'Turret rotation was extremely slow, and often impossible on uneven ground or slopes due to its immense weight.',

                'Long, two-piece ammunition reload time (upwards of 40 seconds), limiting its fire rate in tank combat.',

                'The immense weight (52 tons) caused severe reliability and mechanical issues with the transmission and running gear.'

            ]

        }

    },

    'British (Churchill AVRE)': {

        title: 'Churchill Mk III AVRE',

        stats: {

            elevation: '-89 MIL to 356 MIL',

            hullGun: '7.92 BESA - 200 rounds × 6 magazines',

            mainGun: '230MM PETARD "FLYING DUSTBIN" - 28 FLYING DUSTBIN rounds, 35 SMOKE rounds',

            turretRotation: '360°',

            coaxial: '7.92 BESA - 200 rounds × 6 magazines',

            topSpeed: '20 km/h',

            yawRate: '7°/s',

            pitchRate: '1.5°/s (27 MIL/s)',

            pitchAngleMin: '-5° (-89 MIL)',

            pitchAngleMax: '20° (356 MIL)',

            hullHealth: '1230',

            turretHealth: '1080',

            mobilityHealth: '960',

            engineBlockHealth: '630',

            gearSwitchTime: '0.8s',

            reloadSpeed: '16s',

            maxClipsHE: '28',

            maxClipsSmoke: '35',

            apDamage: '1300',

            apDirectArmor: 'Very High',

            heDamage: 'Extremely High',

            heDirectArmor: 'Very High',

            heExplosionArmor: 'High',

            heDamageRadius: '36m',

            munitionsCost: '360',

            maxRange: '250m (short range mortar)',

            specialNote: 'Direct hit applies damage directly to hull health - fatal to all vehicles'

        },

        history: 'The Churchill AVRE (Armoured Vehicle Royal Engineers) was a specialized engineering vehicle designed to destroy fortifications. It was armed with a 290mm Petard mortar, capable of firing a 40-pound "Flying Dustbin" projectile (containing 28 pounds of high explosive). These vehicles were crucial during D-Day and subsequent operations, used to breach enemy defenses and clear obstacles.',

        historyImages: {

            background: { src: 'images/history/avre/background.webp', caption: 'A Churchill AVRE carrying a fascine, Italy (Imperial War Museums, public domain).' },

            range: { src: 'images/history/avre/range.webp', caption: 'The 29 cm Petard spigot mortar on a Churchill AVRE, with a 40 lb bomb (right), April 1944 (Imperial War Museums, public domain).' },

            production: { src: 'images/history/avre/production.webp', caption: 'Churchill tanks on a factory production line (Terence Cuneo, 1939-1946; Imperial War Museums, public domain).' },

            service: [

                { src: 'images/history/avre/service_dday.webp', caption: 'Churchill AVREs of 5th Assault Regiment, Royal Engineers, on D-Day, 6 June 1944 (Imperial War Museums, public domain).' },

                { src: 'images/history/avre/service_caen.webp', caption: 'A Churchill AVRE on the road to Caen, 9 July 1944 (Imperial War Museums, public domain).' }

            ]

        },

        realLife: {

            range: '73 - 100 meters (effective range) or 210 meters (maximum range). The extremely short range was due to the mortar\'s design.',

            production: 'Base Churchill tanks manufactured at Vauxhall Motors in Luton, Bedfordshire, UK. Approximately 700 total conversions were performed by Royal Engineers on various Churchill marks.',

            service: 'Used by British and Canadian forces in Normandy and beyond (1944-1945), forming part of the specialized "Hobart\'s Funnies" (79th Armoured Division).',

            strengths: [

                'Designed specifically for assaulting fortifications and pillboxes at point-blank range',

                'Devastating firepower against structures due to the large high-explosive charge',

                'Heavily armored for protection during close-quarters breaching operations'

            ],

            weaknesses: [

                'Extremely short effective range (~100m) forced the tank to operate dangerously close to the enemy',

                'Slow and risky muzzle-loading reload process, performed by the co-driver via the hull front',

                'Slow top speed, typical of the Churchill chassis'

            ]

        }

    },

    'British (Bishop SP)': {

        title: 'Bishop SP 25pdr',

        stats: {

            elevation: '-89 MIL to 267 MIL',

            hullGun: 'NO MG ON DRIVER',

            mainGun: 'QF 25 POUNDER - 50 HE rounds, 35 SMOKE rounds, 20 AP rounds',

            turretRotation: '8° total (4° left and 4° right)',

            coaxial: 'NO COAXIAL GUN',

            topSpeed: '20 km/h',

            yawRate: '4°/s',

            pitchRate: '1.5°/s (27 MIL/s)',

            pitchAngleMin: '-5° (-89 MIL)',

            pitchAngleMax: '15° (267 MIL)',

            hullHealth: '880',

            turretHealth: '850',

            mobilityHealth: '710',

            engineBlockHealth: '530',

            gearSwitchTime: '0.8s',

            reloadSpeed: '10s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '35',

            apDamage: '1025',

            apDirectArmor: 'Very High',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '30m',

            munitionsCost: '240',

            maxRange: '800m (can exceed on slopes)'

        },

        history: 'The Bishop was a British self-propelled artillery vehicle based on the Valentine tank chassis, armed with a 25-pounder field gun. It was used during World War II, primarily in North Africa. The vehicle was named after its boxy superstructure resembling a bishop\'s mitre. It had limited elevation and traverse, which severely affected its effectiveness as an artillery piece.',

        historyImages: {

            background: { src: 'images/history/bishop/background.webp', caption: 'A Bishop 25-pdr self-propelled gun in the Western Desert, September 1942 (Imperial War Museums, public domain).' },

            range: { src: 'images/history/bishop/range.webp', caption: 'A Bishop of 142nd Field Regiment, Royal Artillery, firing in Italy, 1943 (Imperial War Museums, public domain).' },

            service: [

                { src: 'images/history/bishop/service_tunisia.webp', caption: 'Bishop 25-pdr self-propelled guns in action near Grenadier Hill, Tunisia, March 1943 (Imperial War Museums, public domain).' },

                { src: 'images/history/bishop/service_italy.webp', caption: 'A Bishop 25-pdr self-propelled gun near Cava, Italy, 28 September 1943 (Imperial War Museums, public domain).' }

            ]

        },

        realLife: {

            range: '6,400 yards (~5,900m) due to limited 15° elevation (compared to 12,253m for the standard towed gun)',

            production: 'Produced from 1942-1943, ~149 units built by Birmingham Railway Carriage and Wagon Company in Birmingham, UK',

            service: 'Used by British forces in North Africa and Italy (1942-1943)',

            strengths: [

                'Provided immediate, mobile artillery support when needed most',

                'Used a powerful and standardized gun (the 25-pdr)'

            ],

            weaknesses: [

                'Severely limited elevation (15°) and traverse, which drastically cut the maximum range',

                'Tall silhouette, making it an easy target',

                'Quickly replaced by more effective SPGs like the M7 Priest and the Sexton'

            ]

        }

    },

    'Germany (Sturmpanzer IV Brummbär)': {

        title: 'Sturmpanzer IV Brummbär',

        stats: {

            elevation: '-89 MIL to 466 MIL',

            hullGun: 'NO MG DRIVER',

            mainGun: 'StuH 43 L/12 - 50 HE rounds, 35 SMOKE rounds, 20 HEAT rounds',

            turretRotation: '30° total (15° left and 15° right)',

            coaxial: 'NO COAXIAL GUN',

            topSpeed: '23 km/h',

            yawRate: '8°/s',

            pitchRate: '1.5°/s (27 MIL/s)',

            pitchAngleMin: '-5° (-89 MIL)',

            pitchAngleMax: '26.2° (466 MIL)',

            hullHealth: '910',

            turretHealth: '830',

            mobilityHealth: '710',

            engineBlockHealth: '530',

            gearSwitchTime: '0.8s',

            reloadSpeed: '11s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '35',

            apDamage: '1025',

            apDirectArmor: 'Very High',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '32m',

            munitionsCost: '280',

            frontalArmor: 'Very Heavy (front plate only)'

        },

        history: 'The Sturmpanzer IV, unofficially known as the Brummbär (Grizzly Bear), was a German assault gun based on the Panzer IV chassis, armed with a 150mm StuH 43 L/12 howitzer. It was designed primarily for heavy infantry support, demolishing fortifications and buildings in urban and close-quarters combat. First deployed at the **Battle of Kursk** in mid-1943, it saw use on both the Eastern and Western Fronts.',

        historyImages: {

            background: { src: 'images/history/brummbar/background.webp', caption: 'A Sturmpanzer IV "Brummbär" passing a column of prisoners on the Italian front (public domain).' },

            production: { src: 'images/history/brummbar/production.webp', caption: 'Panzer IVs under construction at Nibelungenwerk, where the Sturmpanzer IV was built (public domain).' },

            service: { src: 'images/history/brummbar/service_anzio.webp', caption: 'Rear view of a Sturmpanzer IV at a German front-line service point near Anzio, Italy (public domain).' }

        },

        realLife: {

            range: '4,600 meters (maximum indirect fire range); effective direct fire range was around 1,000 meters.',

            production: 'Produced from April 1943 to March 1945, with 306 units built by Deutsche Eisenwerke.',

            service: 'Used by dedicated Sturmpanzer units within the Wehrmacht on both the Eastern and Western Fronts (1943-1945), including at Kursk and during the fighting for Italy and Normandy.',

            strengths: [

                'Carried the extremely powerful 150mm StuH 43, firing a massive 38kg (84 lb) High-Explosive (HE) shell.',

                'Featured heavy frontal armor (up to 100mm) designed to protect it during close-quarters assaults.',

                'Effective in urban and breakthrough combat against reinforced positions and enemy bunkers.'

            ],

            weaknesses: [

                'Limited gun traverse (7° left, 7° right) and slow elevation, making it difficult to engage targets quickly.',

                'The immense weight and high silhouette made it susceptible to mechanical breakdown and difficult to conceal.',

                'The main gun had a very slow muzzle velocity, limiting its effectiveness against enemy tanks.'

            ]

        }

    },

    'DAK (Panzer III Ausf.N)': {

        title: 'Panzer III Ausf.N',

        stats: {

            elevation: '-89 MIL to 466 MIL',

            hullGun: 'MG34 7.92mm - 200 rounds × 6 magazines',

            mainGun: '7.5CM KwK 37 - 50 HE rounds, 35 SMOKE rounds, 20 HEAT rounds',

            turretRotation: '360°',

            coaxial: 'MG34 7.92mm - 200 rounds × 6 magazines',

            topSpeed: '26 km/h', // Note: not confirmed, but likely around 26 km/h

            yawRate: '9°/s',

            pitchRate: '1.5°/s (27 MIL/s)',

            pitchAngleMin: '-5° (-89 MIL)',

            pitchAngleMax: '26.2° (466 MIL)',

            hullHealth: '910',

            turretHealth: '830',

            mobilityHealth: '710',

            engineBlockHealth: '530',

            gearSwitchTime: '0.8s',

            reloadSpeed: '7s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '35',

            apDamage: '640',

            apDirectArmor: 'Medium',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '24m',

            munitionsCost: '280'

        },

        history: 'The Panzer III Ausf. N was a German medium tank variant armed with the short-barreled 7.5 cm KwK 37 L/24 gun. It was designed specifically for close infantry support with high-explosive (HE) rounds, as the chassis was no longer competitive in anti-tank roles. It saw service primarily on the Eastern Front, but also with the Afrika Korps and in Italy.',

        historyImages: {

            background: { src: 'images/history/panzer_iii/background.webp', caption: 'A Panzer III of 21st Panzer Division in the North African desert (public domain).' },

            range: { src: 'images/history/panzer_iii/range.webp', caption: 'A Panzer III Ausf. N captured on the Kursk salient, showing the short 7.5 cm gun (public domain).' },

            service: [

                { src: 'images/history/panzer_iii/service_tunisia.webp', caption: 'German Panzer IIIs in Tunisia, 1942 (public domain).' },

                { src: 'images/history/panzer_iii/service_alamain.webp', caption: 'A Panzer III destroyed at the Second Battle of El Alamein, October 1942 (public domain).' }

            ]

        },

        realLife: {

            range: '5,400 meters (maximum indirect fire range); effective direct fire range was around 600-1,000 meters.',

            production: 'A total of 700 Ausf. N tanks were produced between August 1942 and August 1943. Most were conversions of older Panzer III chassis (Ausf. J, L, and M) and the tank turret was fitted with the gun previously mounted on the early Panzer IV.',

            service: 'Used by the Wehrmacht on the Eastern Front, North Africa (Tunisia campaign), and Italy (1942-1944). It often served in independent tank battalions for infantry support.',

            strengths: [

                'The large-caliber, low-velocity 75mm HE shell was highly effective against infantry, unarmored targets, and field fortifications.',

                'The chassis provided good mobility and reliability.'

            ],

            weaknesses: [

                'Very limited anti-tank capability due to the low muzzle velocity of the L/24 gun (though it could carry HEAT rounds).',

                'Armor protection was becoming increasingly inadequate by 1943.',

                'Production of the Ausf. N ceased as the Panzer III was phased out in favor of the Panzer IV and the newer Panther.'

            ]

        }

    }

};


// Helper function to interpolate values

const lowRangeAnchors = new Map([
    [tables['US (Sherman M4A3 105)'], {
        minDistance: 23,
        anchors: [
            { distance: 25, mil: -89 },
            { distance: 47, mil: -30 },
            { distance: 96, mil: 22 }
        ]
    }],
    [tables['DAK (Panzer III Ausf.N)'], {
        minDistance: 18,
        anchors: [
            { distance: 20, mil: -89 },
            { distance: 48, mil: -10 },
            { distance: 98, mil: 30 }
        ]
    }],
    [sturmpanzerKey ? tables[sturmpanzerKey] : null, {
        minDistance: 18,
        anchors: [
            { distance: 24, mil: -89 },
            { distance: 47, mil: -15 },
            { distance: 98, mil: 30 },
            { distance: 156, mil: 69 }
        ]
    }],
    [tables['Soviet Union (KV-2)'], {
        minDistance: 22,
        anchors: [
            { distance: 25, mil: -89 },
            { distance: 45, mil: -24 },
            { distance: 96, mil: 19 }
        ]
    }],
    [tables['British (Churchill AVRE)'], {
        minDistance: 17,
        anchors: [
            { distance: 22, mil: -89 },
            { distance: 48, mil: 10 },
            { distance: 98, mil: 82 },
            { distance: 150, mil: 150 }
        ]
    }],
    [tables['British (Bishop SP)'], {
        minDistance: 19,
        anchors: [
            { distance: 23, mil: -89 },
            { distance: 47, mil: -27 },
            { distance: 98, mil: 7 },
            { distance: 147, mil: 23 }
        ]
    }]
].filter(([table]) => !!table));

function interpolate(table, meters) {

    // measured engine
    const solveKey = Object.keys(tables).find((k) => tables[k] === table);
    if (solveKey && SPA_SOLVE[solveKey]) {
        const mil = spaInverseMils(solveKey, meters, 0);
        return Number.isFinite(mil) ? mil : NaN;
    }


    const distances = Object.keys(table)

        .filter(k => k !== 'minMil' && k !== 'maxMil')

        .map(Number)

        .sort((a, b) => b - a);


    const maxDist = distances[0];

    const minDist = distances[distances.length - 1];


    if (meters > maxDist) {

        const d1 = distances[0];

        const d2 = distances[1];

        const m1 = table[d1];

        const m2 = table[d2];

        const slope = (m1 - m2) / (d1 - d2);

        return m1 + (meters - d1) * slope;

    }


    if (meters < minDist) {

        const lowRangeAnchor = lowRangeAnchors.get(table);

        if (lowRangeAnchor) {

            const anchors = [...lowRangeAnchor.anchors, { distance: minDist, mil: table[minDist] }]
                .sort((a, b) => a.distance - b.distance);

            if (meters <= anchors[0].distance) {

                return anchors[0].mil;

            }

            for (let i = 0; i < anchors.length - 1; i++) {

                const a1 = anchors[i];

                const a2 = anchors[i + 1];

                if (meters <= a2.distance) {

                    const ratio = (meters - a1.distance) / (a2.distance - a1.distance);

                    return a1.mil + ratio * (a2.mil - a1.mil);

                }

            }

        }

        const d1 = distances[distances.length - 1];

        const d2 = distances[distances.length - 2];

        const m1 = table[d1];

        const m2 = table[d2];

        const slope = (m1 - m2) / (d1 - d2);

        return m1 + (meters - d1) * slope;

    }


    for (let i = 0; i < distances.length - 1; i++) {

        const d1 = distances[i];

        const d2 = distances[i + 1];

        if (meters <= d1 && meters >= d2) {

            const m1 = table[d1];

            const m2 = table[d2];

            const ratio = (meters - d1) / (d2 - d1);

            return m1 + ratio * (m2 - m1);

        }

    }


    return table[distances[distances.length - 1]];

}


// Update MIL range text and stats

function updateMilRangeText() {

    const faction = document.getElementById('faction').value;

    const table = tables[faction];

    const info = tankInfo[faction];

    const milRangeText = document.getElementById('milRangeText');

    const tank = getTankByValue(faction);


    if (table && info && info.stats) {

        const stats = info.stats;

        const elevation = `${table.minMil} MIL to ${table.maxMil} MIL`;


        const distances = Object.keys(table)

            .filter(k => !isNaN(parseInt(k)))

            .map(k => parseInt(k))

            .sort((a, b) => a - b);

        const rangeMin = distances[0] || 0;

        const rangeMax = distances[distances.length - 1] || 0;

        // Tank Info range is derived from the same model as the "max reach at
        // this terrain" hint, so the two numbers never disagree. Shows the
        // flat range and the extra reach available from a full uphill slope.
        const solveKeyForRangeText = Object.keys(tables).find(k => tables[k] === table);

        let rangeDisplay = `~${rangeMin}m - ~${rangeMax}m`;

        if (solveKeyForRangeText && SPA_SOLVE[solveKeyForRangeText]) {

            const minReach = spaForwardMeters(solveKeyForRangeText, SPA_SOLVE[solveKeyForRangeText].turretMil[0]);

            const flatReach = maxRangeMetersAtTerrain(faction, 0, false, 0);

            const slopeReach = maxRangeMetersAtTerrain(faction, 356, false, 0);

            if (Number.isFinite(minReach) && flatReach !== null && slopeReach !== null) {

                rangeDisplay = `~${Math.round(minReach)}–${Math.round(flatReach)}m flat · ${Math.round(slopeReach)}m max uphill`;

            }

        }


        let mainGunText = stats.mainGun;

        const mainGunParts = mainGunText.split(' - ');

        let mainGunDisplay = '';

        if (mainGunParts[1]) {


            const ammoMatches = mainGunParts[1].match(/(\d+)\s*(HEAT|HE|SMOKE|AP|FLYING DUSTBIN)\s*rounds/g);

            if (ammoMatches) {

                const ammoList = ammoMatches.map((m, index) => {

                    const match = m.match(/(\d+)\s*(HEAT|HE|SMOKE|AP|FLYING DUSTBIN)/);

                    if (match) {

                        const count = match[1];

                        const type = match[2];

                        return `${type} ${count}`;

                    }

                    return m;

                }).join(' • ');

                mainGunDisplay = ammoList;

            }

        } else {

            mainGunDisplay = mainGunText;

        }


        let hullGunText = stats.hullGun;

        if (hullGunText.includes('NO')) {

            hullGunText = 'NO MG';

        } else {


            const ammoMatch = hullGunText.match(/(\d+)\s*rounds(?:\s*×\s*(\d+)\s*magazines)?/);

            if (ammoMatch) {

                hullGunText = `${ammoMatch[1]} rounds`;

                if (ammoMatch[2]) {

                    hullGunText += ` × ${ammoMatch[2]} magazines`;

                }

            } else {

                hullGunText = 'YES';

            }

        }


        let coaxialGunText = stats.coaxial;

        if (coaxialGunText.includes('NO')) {

            coaxialGunText = 'NO MG';

        } else {


            const ammoMatch = coaxialGunText.match(/(\d+)\s*rounds(?:\s*×\s*(\d+)\s*magazines)?/);

            if (ammoMatch) {

                coaxialGunText = `${ammoMatch[1]} rounds`;

                if (ammoMatch[2]) {

                    coaxialGunText += ` × ${ammoMatch[2]} magazines`;

                }

            } else {

                coaxialGunText = 'YES';

            }

        }


        let rotationText = stats.turretRotation;

        if (rotationText.includes('total')) {

            const match = rotationText.match(/(\d+)°/);

            if (match) {

                rotationText = match[1] + '°';

            }

        } else if (rotationText.includes('°')) {

            const match = rotationText.match(/(\d+°)/);

            if (match) {

                rotationText = match[1];

            }

        }


        const coaxCrossed = coaxialGunText === 'NO MG' ? 'text-decoration: line-through; opacity: 0.6;' : '';

        const hullCrossed = hullGunText === 'NO MG' ? 'text-decoration: line-through; opacity: 0.6;' : '';


        const isMobile = window.innerWidth <= 768;

        const compactImageHtml = isMobile ? `

            <div class="faction-image-compact" id="compactImageContainer">

                <picture>

                    <source srcset="${tank.image}" type="image/webp">

                    <img id="factionImageCompact" src="${tank.image}" alt="Selected tank" class="max-w-full max-h-full object-contain">

                </picture>

            </div>

        ` : '';


        const tankInfoBtn = document.getElementById('tankInfoIcon');


        milRangeText.innerHTML = `

            <div class="spec-item">

                <span class="spec-bullet">▸</span>

                <span class="spec-label">Range:</span>

                <span class="spec-value">${rangeDisplay}</span>

            </div>

            <div class="spec-item">

                <span class="spec-bullet">▸</span>

                <span class="spec-label">Elevation:</span>

                <span class="spec-value">${elevation}</span>

            </div>

            <div class="spec-item">

                <span class="spec-bullet">▸</span>

                <span class="spec-label">Turret Rotation:</span>

                <span class="spec-value">${rotationText}</span>

            </div>

            <div class="spec-item">

                <span class="spec-bullet">▸</span>

                <span class="spec-label">Coax MG:</span>

                <span class="spec-value" style="${coaxCrossed}">${coaxialGunText}</span>

            </div>

            <div class="spec-item">

                <span class="spec-bullet">▸</span>

                <span class="spec-label">Hull MG:</span>

                <span class="spec-value" style="${hullCrossed}">${hullGunText}</span>

            </div>

            <div class="spec-item">

                <span class="spec-bullet">▸</span>

                <span class="spec-label">Top Speed:</span>

                <span class="spec-value">${stats.topSpeed}</span>

            </div>

            ${compactImageHtml}

        `;


        if (isMobile && tankInfoBtn && !milRangeText.contains(tankInfoBtn)) {

            tankInfoBtn.classList.remove('hidden');

            milRangeText.appendChild(tankInfoBtn);

        }

    } else if (table) {

        milRangeText.innerHTML = `

            <div class="spec-item">

                <span class="spec-bullet">▸</span>

                <span class="spec-label">Elevation:</span>

                <span class="spec-value">${table.minMil} MIL to ${table.maxMil} MIL</span>

            </div>

        `;


        if (isMobile && tankInfoBtn && !milRangeText.contains(tankInfoBtn)) {

            tankInfoBtn.classList.remove('hidden');

            milRangeText.appendChild(tankInfoBtn);

        }

    }

}


// Update faction image

function updateFactionImage() {

    const faction = document.getElementById('faction').value;

    const tank = getTankByValue(faction);

    
    const img = document.getElementById('factionImage');

    const picture = img ? img.closest('picture') : null;

    const imgCompact = document.getElementById('factionImageCompact');

    const pictureCompact = imgCompact ? imgCompact.closest('picture') : null;


    if (img && picture) {

        const webpSrc = tank.image;

        const currentSrc = img.src;

        
        if (currentSrc && (currentSrc.includes(tank.imageBase) || currentSrc.endsWith(`${tank.imageBase}.png`))) {

            img.style.opacity = '1';

        } else {

            const source = picture.querySelector('source');

            const newImage = new Image();


            if (currentSrc && !currentSrc.includes('data:') && currentSrc !== '') {

                img.style.transition = 'opacity 0.2s ease';

                img.style.opacity = '0';

            } else {

                img.style.opacity = '0';

                img.style.transition = 'opacity 0.2s ease';

            }


            const switchImage = function(useWebP = true) {

                if (source) {

                    source.srcset = webpSrc;

                }

                img.src = webpSrc;

                if (img.hasAttribute('fetchpriority')) {

                    img.removeAttribute('fetchpriority');

                }

                requestAnimationFrame(function() {

                    img.style.opacity = '1';

                });

            };


            let imageLoaded = false;

            newImage.onload = function() {

                if (!imageLoaded) {

                    imageLoaded = true;

                    switchImage(true);

                }

            };

            newImage.onerror = function() {

                if (!imageLoaded) {

                    imageLoaded = true;

                    if (source) {

                        source.srcset = tankData[0].image;

                    }

                    img.src = tankData[0].image;

                    img.style.opacity = '1';

                }

            };


            newImage.src = webpSrc;

            if (newImage.complete && newImage.naturalWidth > 0) {

                imageLoaded = true;

                switchImage(true);

            }


            img.onerror = function() {

                if (source) {

                    source.srcset = tankData[0].image;

                }

                this.src = tankData[0].image;

                this.style.opacity = '1';

            };

        }

    }


    if (imgCompact && pictureCompact) {

        const webpSrc = tank.image;

        const sourceCompact = pictureCompact.querySelector('source');

        if (sourceCompact) {

            sourceCompact.srcset = webpSrc;

        }

        imgCompact.src = webpSrc;

        
        const milRangeText = document.getElementById('milRangeText');

        if (milRangeText && window.innerWidth <= 768) {

            const compactContainer = imgCompact.closest('.faction-image-compact');

            if (compactContainer && !milRangeText.contains(compactContainer)) {

                compactContainer.classList.remove('hidden');

                milRangeText.appendChild(compactContainer);

            }

            
            const tankInfoBtn = document.getElementById('tankInfoIcon');

            if (tankInfoBtn && !milRangeText.contains(tankInfoBtn)) {

                tankInfoBtn.classList.remove('hidden');

                milRangeText.appendChild(tankInfoBtn);

            }

        }

    }


    const classifiedText = tank.classifiedRef;

    const refTextElement = document.getElementById('classifiedRefText');

    if (refTextElement) {

        refTextElement.innerHTML = `${classifiedText.ref}<br>${classifiedText.designation}<br>${classifiedText.classification}`;

    }


    updateMilRangeText();

}


// Signed values shown like the in-game HUD: 0, +14, -7 (terrain elevation / height difference)

function formatSignedValue(value) {

    const num = (typeof value === 'number') ? value : parseFloat(value);

    if (isNaN(num) || num === 0) return '0';

    return (num > 0 ? '+' : '') + num;

}


// FULL/desktop panel shows the terrain elevation exactly like the in-game HUD: 0MIL, +14MIL, -7MIL

function formatMilsHudValue(value) {

    const num = (typeof value === 'number') ? value : parseFloat(value);

    if (isNaN(num)) return '0MIL';

    return formatSignedValue(num) + 'MIL';

}


// Target distance is shown like the in-game marker: 400M

function formatMetersHudValue(value) {

    const num = (typeof value === 'number') ? value : parseFloat(value);

    if (isNaN(num)) return '0M';

    return num + 'M';

}


// The result bar shows the target distance (e.g. 400M) instead of the base MIL

function updateDistanceReadout() {

    const el = document.getElementById('baseValue');

    if (!el) return;

    const inputs = Array.from(document.querySelectorAll('input#distance, input#distanceLite'));

    const visible = inputs.find(i => i.offsetParent !== null) || inputs[0];

    const raw = visible ? parseFloat(visible.value) : NaN;

    el.textContent = formatMetersHudValue(Number.isFinite(raw) ? raw : 0);

}

// Max range (m) reachable on the current terrain elevation: the furthest shot
// at full turret elevation. The red MIL tilts the shell's world-space launch
// angle, so a positive (uphill) read extends the reach and a negative
// (downhill) read shortens it. Grounded in the measured ballistics
// (SPA_SOLVE rows + tail law) so it stays physical on steep slopes, unlike the
// reference table's linear extrapolation (which runs away past ~900 m).
function maxRangeMetersAtTerrain(faction, redNumber, heightDiffEnabled, heightDiff) {

    const key = Object.keys(tables).find(k => tables[k] === tables[faction]) || (SPA_SOLVE[faction] ? faction : null);

    if (!key || !SPA_SOLVE[key]) return null;

    const worldMaxMil = SPA_SOLVE[key].turretMil[1] + (Number.isFinite(redNumber) ? redNumber : 0);

    let meters = spaForwardMeters(key, worldMaxMil);

    if (Number.isFinite(meters) && heightDiffEnabled && Number.isFinite(heightDiff) && heightDiff !== 0) {

        const dh = spaHeightDeltaMeters(key, worldMaxMil, heightDiff);

        if (Number.isFinite(dh)) meters += dh;

    }

    return Number.isFinite(meters) ? meters : null;

}

function updateMaxRangeHints() {

    const hints = [document.getElementById('maxRangeHintFull'), document.getElementById('maxRangeHintLite'), document.getElementById('maxRangeHintMobile')].filter(Boolean);

    if (hints.length === 0) return;

    const factionEl = document.getElementById('faction');

    const faction = factionEl ? factionEl.value : '';

    if (!tables[faction]) {

        hints.forEach(h => { h.textContent = ''; h.classList.remove('max-out'); });

        return;

    }

    const heightToggle = document.getElementById('heightDiffToggle');

    const heightEnabled = heightToggle ? heightToggle.checked : false;

    const redInput = document.getElementById('redNumber');

    const heightInput = document.getElementById('heightDiff');

    const redNumber = redInput ? parseHeightDiff(redInput.value) : 0;

    const heightDiff = heightInput ? parseHeightDiff(heightInput.value) : 0;

    const maxMeters = maxRangeMetersAtTerrain(faction, redNumber, heightEnabled, heightDiff);

    const distanceEl = document.getElementById('distance');

    const distance = distanceEl ? parseHeightDiff(distanceEl.value) : NaN;

    const distanceSet = Number.isFinite(distance) && distance > 0;

    const outOfReach = distanceSet && maxMeters !== null && distance > maxMeters;

    hints.forEach(h => {

        if (maxMeters === null) {

            h.textContent = '';

            h.classList.remove('max-out');

        } else {

            h.textContent = '(' + Math.round(maxMeters) + 'm max)';

            h.title = 'Furthest target reachable at the current terrain elevation (red MIL): ' + Math.round(maxMeters) + 'm';

            h.classList.toggle('max-out', !!outOfReach);

        }

    });

}


// Height difference is shown signed with meters and coloured by sign: 0M, +5M, -3M

function parseHeightDiff(value) {

    const raw = String(value || '0').trim();

    const normalized = raw.replace(/^▲/, '+').replace(/^▼/, '-');

    return parseFloat(normalized);

}

function formatHeightDiffHudValue(value) {

    const num = (typeof value === 'number') ? value : parseHeightDiff(value);

    if (isNaN(num) || num === 0) return '0M';

    return formatSignedValue(num) + 'M';

}

function setHeightDiffClass(input, value) {

    const num = (typeof value === 'number') ? value : parseHeightDiff(value);

    input.classList.remove('height-diff-positive', 'height-diff-negative', 'height-diff-zero');

    if (!Number.isFinite(num) || num === 0) {

        input.classList.add('height-diff-zero');

    } else if (num > 0) {

        input.classList.add('height-diff-positive');

    } else {

        input.classList.add('height-diff-negative');

    }

}


// Haptic feedback (Android Chrome only - iOS has no Vibration API support).
// The API has no amplitude control, so "strength" is just duration. Calculate
// is intentionally the strongest; the steppers sit just below it.

const HAPTIC_CALC = 60;

const HAPTIC_STEP = 50;

const HAPTIC_TAP = 40;

function haptic(ms) {

    if (navigator.vibrate) navigator.vibrate(ms);

}


// Mobile layout (phones) - matches the CSS max-width breakpoint

function isMobileLayout() {

    return window.innerWidth <= 768;

}


// KEYPAD view is an overlay on the full layout (see switchViewMode). It behaves
// like the desktop calculator even in a narrow window, so tank switches there
// should seed the tank's default distance.

function isKeypadView() {

    return document.body.classList.contains('keypad-view');

}


// Touch-primary devices (phones/tablets) have no Shift/Ctrl keys, so the
// quick-step stepper hints are desktop-only.

function isTouchPrimaryDevice() {

    if (!window.matchMedia) return false;

    return window.matchMedia('(pointer: coarse)').matches ||

        window.matchMedia('(hover: none)').matches;

}


// One-time tip toast explaining the Shift/Ctrl quick steps on the stepper buttons

function showQuickstepToast() {

    // Desktop-only tip: skip on touch-primary devices

    if (isTouchPrimaryDevice()) return;

    const KEY = 'quickstepTipShown';

    if (showQuickstepToast.shown) return;

    try {

        if (sessionStorage.getItem(KEY)) return;

    } catch (e) {}

    let toast = document.getElementById('quickstepToast');

    if (!toast) {

        toast = document.createElement('div');

        toast.id = 'quickstepToast';

        toast.className = 'quickstep-toast';

        toast.textContent = 'TIP: Hold Shift and press −/+ for ±5 · Hold Ctrl for ±25';

        toast.addEventListener('click', function() { toast.remove(); });

        document.body.appendChild(toast);

    }

    requestAnimationFrame(function() { toast.classList.add('show'); });

    setTimeout(function() {

        toast.classList.remove('show');

        setTimeout(function() { if (toast.parentNode) toast.remove(); }, 300);

    }, 8000);

    try {

        sessionStorage.setItem(KEY, '1');

    } catch (e) {}

    showQuickstepToast.shown = true;

}


// Adjust value function for increment/decrement buttons

function adjustValue(fieldId, delta) {


    const allInputs = document.querySelectorAll(`input[id="${fieldId}"], input[id="${fieldId}Lite"]`);

    if (allInputs.length === 0) return;

    
    const input = allInputs[0];

    const inputValue = input.value || '0';

    const currentValue = parseHeightDiff(inputValue) || 0;

    let newValue = Math.round(currentValue + delta);


    if (fieldId === 'distance') {

        newValue = Math.max(0, Math.min(2500, newValue));

    } else if (fieldId === 'redNumber') {

        newValue = Math.max(-356, Math.min(356, newValue));

    } else if (fieldId === 'heightDiff') {


        newValue = Math.max(-1000, Math.min(1000, newValue));

    }


    allInputs.forEach(inp => {

        if (fieldId === 'redNumber') {

            // In-game look: 0MIL, +14MIL, -7MIL

            inp.value = formatMilsHudValue(newValue);

        } else if (fieldId === 'distance') {

            inp.value = formatMetersHudValue(newValue);

        } else if (fieldId === 'heightDiff') {

            inp.value = formatHeightDiffHudValue(newValue);

            setHeightDiffClass(inp, newValue);

        } else {

            inp.value = newValue;

        }

    });


    saveState();

    updateMaxRangeHints();

    const distance = parseFloat(document.getElementById('distance').value);

    if (distance && !isNaN(distance) && isAutoCalcEnabled()) {

        calculate();

    } else {


        updateDistanceReadout();


        if (mobWarningTimer) { clearTimeout(mobWarningTimer); mobWarningTimer = null; }

        const mobWarnClear = document.getElementById('mobWarning');

        if (mobWarnClear) mobWarnClear.classList.add('hidden');


        if (fieldId === 'distance' || fieldId === 'heightDiff' || fieldId === 'redNumber') {

            rollElevationToNumber(0);


            const heightValueEl = document.getElementById('heightValue');

            const redValueEl = document.getElementById('redValue');

            if (heightValueEl) { heightValueEl.textContent = '--'; heightValueEl.className = 'text-gray-300'; }

            if (redValueEl) { redValueEl.textContent = '--'; redValueEl.className = 'text-gray-300'; }

            const redValueUnitEl = document.getElementById('redValueUnit');

            if (redValueUnitEl) { redValueUnitEl.className = 'text-gray-300'; }


            updateMilLabels();

        }

    }

}


const MILS_PER_RAD_APPROX = -80;

const MILS_PER_DEG = 17.777779;

const SPA_V0_MPS = 112.5;

const SPA_G_MPS2 = 9.8;

const USE_PHYSICS_HEIGHT_CORRECTION = true;


function degreesToMils(deg) {

    return deg * MILS_PER_DEG;

}


function roundToIntUnreal(x) {

    return x >= 0 ? Math.floor(x + 0.5) : Math.ceil(x - 0.5);

}


function hudQuantizeMil(mils) {

    return (roundToIntUnreal(mils * 2.0 + 0.5) >> 1);

}

function spaHudMilFromRaw(table, mils) {

    if (!Number.isFinite(mils)) return mils;

    return hudQuantizeMil(mils);

}


function milToDegrees(mil) {

    return mil / MILS_PER_DEG;

}


function solveBallisticAnglesRad(xMeters, yMeters, v0Mps, gMps2) {

    if (!(xMeters > 0) || !isFinite(xMeters) || !isFinite(yMeters) || !(v0Mps > 0) || !(gMps2 > 0)) {

        return null;

    }

    const v2 = v0Mps * v0Mps;

    const v4 = v2 * v2;

    const gx2 = gMps2 * xMeters * xMeters;

    const d = v4 - gMps2 * (gx2 + 2.0 * yMeters * v2);

    if (!(d >= 0)) {

        return null;

    }

    const sqrtD = Math.sqrt(d);

    const denom = gMps2 * xMeters;

    const tan1 = (v2 + sqrtD) / denom;

    const tan2 = (v2 - sqrtD) / denom;

    return [Math.atan(tan1), Math.atan(tan2)];

}


function computeEffectiveMuzzleSpeedMps(baseMil, distanceMeters) {

    if (!(distanceMeters > 0) || !isFinite(baseMil) || !isFinite(distanceMeters)) {

        return null;

    }


    const baseDeg = Math.abs(milToDegrees(baseMil));

    const elevRad = baseDeg * (Math.PI / 180.0);

    if (!(elevRad > 0)) {

        return null;

    }


    const sin2 = Math.sin(2.0 * elevRad);

    if (!(sin2 > 1e-6)) {

        return null;

    }


    const v2 = (distanceMeters * SPA_G_MPS2) / sin2;

    if (!(v2 > 0) || !isFinite(v2)) {

        return null;

    }

    const v0 = Math.sqrt(v2);

    if (!(v0 > 0) || !isFinite(v0)) {

        return null;

    }

    return v0;

}


function computeBallisticHeightDiffMils(baseMil, distanceMeters, heightDiffMeters) {

    const x = distanceMeters;

    const y = heightDiffMeters;

    if (!(x > 0) || !isFinite(baseMil) || !isFinite(x) || !isFinite(y)) {

        return 0;

    }


    const v0 = computeEffectiveMuzzleSpeedMps(baseMil, x) ?? SPA_V0_MPS;

    if (!(v0 > 0) || !isFinite(v0)) {

        return degreesToMils(Math.atan2(y, x) * (180.0 / Math.PI));

    }


    const baseDegAbs = Math.abs(milToDegrees(baseMil));

    const baseElevRad = baseDegAbs * (Math.PI / 180.0);

    const sols = solveBallisticAnglesRad(x, y, v0, SPA_G_MPS2);

    if (!sols) {

        return degreesToMils(Math.atan2(y, x) * (180.0 / Math.PI));

    }


    const a0 = sols[0];

    const a1 = sols[1];

    const chosen = (Math.abs(a0 - baseElevRad) <= Math.abs(a1 - baseElevRad)) ? a0 : a1;

    const deltaDeg = (chosen - baseElevRad) * (180.0 / Math.PI);

    return degreesToMils(deltaDeg);

}


function clamp01(x) {

    if (x <= 0) return 0;

    if (x >= 1) return 1;

    return x;

}


function lerp(a, b, t) {

    return a + (b - a) * t;

}


function rangeFromPerfectMil(table, mil) {

    if (!table || !isFinite(mil)) return NaN;


    const distances = Object.keys(table)

        .filter(k => k !== 'minMil' && k !== 'maxMil')

        .map(Number)

        .filter(Number.isFinite)

        .sort((a, b) => a - b);


    if (distances.length < 2) return NaN;

    const minRange = distances[0];

    const maxRange = distances[distances.length - 1];


    const maxPitchMil = Number(table[minRange]);

    const minPitchMil = Number(table[maxRange]);

    if (!Number.isFinite(maxPitchMil) || !Number.isFinite(minPitchMil) || !(maxRange > minRange)) {

        return NaN;

    }


    const denom = (minPitchMil - maxPitchMil);

    if (!Number.isFinite(denom) || Math.abs(denom) < 1e-9) return NaN;

    const t = clamp01((mil - maxPitchMil) / denom);

    return minRange + (maxRange - minRange) * t;

}


function simulateSpaImpactDistanceMeters(table, mil, terrainSlope) {

    const targetX = rangeFromPerfectMil(table, mil);

    if (!(targetX > 0) || !isFinite(targetX) || !isFinite(terrainSlope)) {

        return NaN;

    }


    const aimedPitchDeg = milToDegrees(mil);

    const maxPitchDeg = milToDegrees(table.maxMil);

    const apexPoint = 0.6;

    const descentCurve = 1.7;

    const apexSpeedMultiplier = 0.6;

    const dispersedTravelDelay = 1.2;


    const pitchFactor = clamp01((aimedPitchDeg - -90.0) / ((maxPitchDeg - -90.0) || 1));

    const scaledApexPoint = (apexPoint - 0.01) * pitchFactor + 0.01;


    const targetZ = 0;


    const rad = aimedPitchDeg * (Math.PI / 180.0);

    const initialNX = Math.cos(rad);

    const initialNZ = Math.sin(rad);

    const invLen0 = 1.0 / Math.max(1e-9, Math.sqrt(initialNX * initialNX + initialNZ * initialNZ));


    let initX = initialNX * invLen0;

    let initZ = initialNZ * invLen0;


    let newX = initX;

    let newZ = initZ;


    const baseSpeed = SPA_V0_MPS;

    const apexSpeed = baseSpeed * apexSpeedMultiplier;


    let posX = 0;

    let posZ = 0;


    let velX = baseSpeed * initX;

    let velZ = baseSpeed * initZ;

    let prevVelZ = velZ;


    let velZCap = Number.POSITIVE_INFINITY;

    let passedApex = false;

    let guidanceOff = false;


    const dt = 1.0 / 60.0;

    const maxSteps = 2000;


    for (let i = 0; i < maxSteps; i++) {

        const prevX = posX;

        const prevZ = posZ;


        if (!guidanceOff) {

            const xyDist = Math.abs(posX);

            const travelAlpha = clamp01(xyDist / targetX);


            if (!passedApex && scaledApexPoint <= travelAlpha) {

                passedApex = true;

            }


            if (travelAlpha >= 0.9999 || (passedApex && posZ < targetZ)) {

                guidanceOff = true;

            } else {

                const toX = targetX - posX;

                const toZ = targetZ - posZ;

                const invToLen = 1.0 / Math.max(1e-9, Math.sqrt(toX * toX + toZ * toZ));

                const dirX = toX * invToLen;

                const dirZ = toZ * invToLen;


                if (passedApex && travelAlpha > 0 && (1.0 - scaledApexPoint) > 1e-6) {

                    let t = ((travelAlpha + 0.05) - scaledApexPoint) / (1.0 - scaledApexPoint);

                    t = clamp01(t);

                    t = Math.pow(t, descentCurve);

                    newZ = lerp(initZ, dirZ, t);

                }


                const disperse = Math.pow(travelAlpha + 0.05, dispersedTravelDelay);

                newX = lerp(initX, dirX, disperse);


                const invNewLen = 1.0 / Math.max(1e-9, Math.sqrt(newX * newX + newZ * newZ));

                newX *= invNewLen;

                newZ *= invNewLen;


                if (newZ > velZCap) {

                    newZ = velZCap;

                }

                velZCap = newZ;


                const apexPointClamped = Math.min(0.95, Math.max(0.05, scaledApexPoint));

                let speed;

                if (apexPointClamped < travelAlpha) {

                    let u = (travelAlpha - apexPointClamped) / (1.0 - apexPointClamped);

                    u = clamp01(u);

                    speed = (u * u) * (baseSpeed - apexSpeed) + apexSpeed;

                } else {

                    let u = 1.0 - (travelAlpha / apexPointClamped);

                    u = clamp01(u);

                    speed = (1.0 - u * u) * (apexSpeed - baseSpeed) + baseSpeed;

                }


                velX = speed * newX;

                const wantVelZ = speed * newZ;

                velZ = Math.min(prevVelZ, wantVelZ);

            }

        } else {

            velZ -= SPA_G_MPS2 * dt;

        }


        posX += velX * dt;

        posZ += velZ * dt;

        prevVelZ = velZ;


        const groundPrev = terrainSlope * prevX;

        const groundNow = terrainSlope * posX;

        if (posZ <= groundNow) {

            const denom = (posZ - prevZ) - (groundNow - groundPrev);

            const tHit = Math.abs(denom) < 1e-9 ? 0 : clamp01((groundPrev - prevZ) / denom);

            return prevX + (posX - prevX) * tHit;

        }


        if (posX > targetX * 2.0) {

            return posX;

        }

    }


    return targetX;

}


function computeHeightDiffMils(baseMil, distanceMeters, heightDiffMeters, table) {

    // measured engine
    const solveKey = Object.keys(tables).find((k) => tables[k] === table);
    if (solveKey && SPA_SOLVE[solveKey]) {
        const world = spaInverseMils(solveKey, distanceMeters, heightDiffMeters);
        const flat = spaInverseMils(solveKey, distanceMeters, 0);
        if (Number.isFinite(world) && Number.isFinite(flat)) {
            // Guard against low-angle saturation in spaHeightDeltaMeters: the model
            // clamps the discriminant for large heights, so the inverse solve stops
            // changing with height. Probe with the SAME sign as the target height -
            // uphill and downhill saturate in different mil bands, so probing with
            // |height| falsely reports a downhill shot as saturated.
            const probeHeight = heightDiffMeters === 0 ? 1 : heightDiffMeters;
            const testHeight = heightDiffMeters >= 0
                ? Math.max(heightDiffMeters + 50, 100)
                : Math.min(heightDiffMeters - 50, -100);
            const dUser = spaHeightDeltaMeters(solveKey, world, probeHeight);
            const dTest = spaHeightDeltaMeters(solveKey, world, testHeight);
            const saturated = Number.isFinite(dUser) && Number.isFinite(dTest) && Math.abs(dTest - dUser) < 0.5;
            if (!saturated) return world - flat;
            const ballisticDiff = computeBallisticHeightDiffMils(baseMil, distanceMeters, heightDiffMeters);
            if (Number.isFinite(ballisticDiff)) return ballisticDiff;
            return degreesToMils(Math.atan2(heightDiffMeters, distanceMeters) * (180.0 / Math.PI));
        }
    }

    const x = distanceMeters;

    const y = heightDiffMeters;

    if (!(x > 0) || !isFinite(baseMil) || !isFinite(x) || !isFinite(y) || !table) {

        return computeBallisticHeightDiffMils(baseMil, distanceMeters, heightDiffMeters);

    }


    if (Math.abs(y) < 1e-6) {

        return 0;

    }


    const slope = y / x;

    const lo0 = Number(table.minMil);

    const hi0 = Number(table.maxMil);

    if (!Number.isFinite(lo0) || !Number.isFinite(hi0) || !(hi0 > lo0)) {

        return computeBallisticHeightDiffMils(baseMil, distanceMeters, heightDiffMeters);

    }


    const f = (mil) => simulateSpaImpactDistanceMeters(table, mil, slope) - x;


// Prefer a LOCAL solution near the base mil so small height changes don't jump the aim

// to a far-away root.

    let lo = Math.max(lo0, baseMil - 20);

    let hi = Math.min(hi0, baseMil + 20);

    let fLo = f(lo);

    let fHi = f(hi);


// Expand window gradually until we bracket a root or we hit full bounds

    for (let expand = 0; expand < 6 && (!Number.isFinite(fLo) || !Number.isFinite(fHi) || fLo * fHi > 0); expand++) {

        const halfWidth = 20 * Math.pow(2, expand + 1);

        lo = Math.max(lo0, baseMil - halfWidth);

        hi = Math.min(hi0, baseMil + halfWidth);

        fLo = f(lo);

        fHi = f(hi);

    }


    if (!Number.isFinite(fLo) || !Number.isFinite(fHi)) {

        return computeBallisticHeightDiffMils(baseMil, distanceMeters, heightDiffMeters);

    }


    if (fLo === 0) {

        return lo - baseMil;

    }

    if (fHi === 0) {

        return hi - baseMil;

    }


    if (fLo * fHi > 0) {

        return computeBallisticHeightDiffMils(baseMil, distanceMeters, heightDiffMeters);

    }


    for (let i = 0; i < 26; i++) {

        const mid = (lo + hi) * 0.5;

        const fMid = f(mid);

        if (!Number.isFinite(fMid)) {

            return computeBallisticHeightDiffMils(baseMil, distanceMeters, heightDiffMeters);

        }

        if (Math.abs(fMid) < 0.05) {

            return mid - baseMil;

        }

        if (fLo * fMid <= 0) {

            hi = mid;

            fHi = fMid;

        } else {

            lo = mid;

            fLo = fMid;

        }

    }


    return ((lo + hi) * 0.5) - baseMil;

}


function isAutoCalcEnabled() {

    const toggle = document.getElementById('autoCalcToggle');

    return toggle ? toggle.checked : true;

}


// Distances are no longer auto-seeded anywhere - the calculator keeps 0 until
// the user enters a value.


function setAllValues(inputs, value) {

    inputs.forEach(input => { 


        let nextValue = value;

        if (input.id === 'redNumber' || input.id === 'redNumberLite') {

            nextValue = formatMilsHudValue(value);

        } else if (input.id === 'distance' || input.id === 'distanceLite') {

            nextValue = formatMetersHudValue(value);

        } else if (input.id === 'heightDiff' || input.id === 'heightDiffLite') {

            nextValue = formatHeightDiffHudValue(value);

            setHeightDiffClass(input, value);

        }

        input.value = nextValue;


        const event = new Event('input', { bubbles: true });

        input.dispatchEvent(event);

    });

}


function updateCalculateButton() {

    const button = document.getElementById('calculateButton');

    const metalPanel = document.getElementById('metalPanel');

    const isAuto = isAutoCalcEnabled();


    if (button && metalPanel) {

        if (isAuto) {


            const wasHidden = button.offsetHeight === 0;

            let originalVisibility = button.style.visibility;

            let originalPosition = button.style.position;


            if (wasHidden) {

                button.style.visibility = 'hidden';

                button.style.position = 'absolute';

                button.style.display = '';

            }


            let buttonHeight = button.offsetHeight;


            if (wasHidden) {

                button.style.visibility = originalVisibility;

                button.style.position = originalPosition;

            }


            if (buttonHeight === 0) {

                buttonHeight = 54;

            }


            button.style.display = 'none';

            metalPanel.classList.remove('hidden');

            metalPanel.style.display = 'block';


            metalPanel.style.height = buttonHeight + 'px';

            button.disabled = true;

        } else {


            button.style.display = '';

            metalPanel.classList.add('hidden');

            metalPanel.style.display = 'none';

            button.disabled = false;

        }

    }

}


function updateMilLabels() {


    const milCounter = document.getElementById('elevationMilCounter');

    if (milCounter) {

        milCounter.style.display = '';

    }


    const baseValueEl = document.getElementById('baseValue');

    const baseMilLabelEl = document.getElementById('baseMilLabel');

    const redValueEl = document.getElementById('redValue');

    const redValueUnitEl = document.getElementById('redValueUnit');


    if (baseValueEl && baseMilLabelEl) {

        baseMilLabelEl.style.display = (baseValueEl.textContent.trim() === '--') ? 'none' : '';

    }

}


let currentElevationDigits = [];

let isElevationNegative = false;

const elevationCounterElement = document.getElementById('elevationCounter');

const CELL_HEIGHT = 80;


function createElevationDigitWheel(index, isFirstWheel = false) {

    const wheel = document.createElement('div');

    wheel.className = 'digit-wheel';


    const strip = document.createElement('div');

    strip.className = 'digit-strip';

    strip.id = `elevation-strip-${index}`;


    if (isFirstWheel) {


        const firstWheelSequence = [0, '−'];

        const sequenceLength = firstWheelSequence.length;


        for (let i = 0; i < 40; i++) {

            const cell = document.createElement('div');

            cell.className = 'digit-cell';

            cell.textContent = firstWheelSequence[i % sequenceLength];

            strip.appendChild(cell);

        }

    } else {


        for (let i = 0; i < 40; i++) {

            const cell = document.createElement('div');

            cell.className = 'digit-cell';

            cell.textContent = i % 10;

            strip.appendChild(cell);

        }

    }


    wheel.appendChild(strip);

    return wheel;

}


function createElevationMILWheel(letter) {

    const wheel = document.createElement('div');

    wheel.className = 'mil-wheel';


    const strip = document.createElement('div');

    strip.className = 'mil-strip';


// Create cells with the letter in the middle position (position 10)

    for (let i = 0; i < 20; i++) {

        const cell = document.createElement('div');

        cell.className = 'mil-cell';

        if (i === 10) {

            cell.textContent = letter;

        } else {

            cell.textContent = ' ';

        }

        strip.appendChild(cell);

    }


    strip.style.transform = `translateY(-${10 * CELL_HEIGHT}px)`;


    wheel.appendChild(strip);

    return wheel;

}


function initializeElevationMIL() {

    const milCounter = document.getElementById('elevationMilCounter');

    if (!milCounter) return;


    milCounter.innerHTML = '';

    const letters = ['M', 'I', 'L'];

    letters.forEach(letter => {

        const wheel = createElevationMILWheel(letter);

        milCounter.appendChild(wheel);

    });

}


function setupElevationCounter(targetNumber) {

    const absValue = Math.abs(targetNumber);

    const numStr = String(Math.max(0, Math.floor(absValue))).padStart(3, '0');

    const targetDigits = numStr.split('').map(Number);

    const isNeg = targetNumber < 0;


    if (currentElevationDigits.length !== 4) {

        elevationCounterElement.innerHTML = '';

        for (let i = 0; i < 4; i++) {

            const wheel = createElevationDigitWheel(i, i === 0);

            elevationCounterElement.appendChild(wheel);

        }

    }


    for (let i = 0; i < 4; i++) {

        const strip = document.getElementById(`elevation-strip-${i}`);

        if (strip) {

            if (i === 0 && isNeg) {

                strip.style.transition = 'none';

                strip.style.transform = `translateY(-${1 * CELL_HEIGHT}px)`;

            } else {

                strip.style.transition = 'none';

                strip.style.transform = 'translateY(0)';

            }

        }

    }


    currentElevationDigits = [0, 0, 0, 0];

    isElevationNegative = isNeg;

}


function rollElevationToNumber(targetNumber) {

    const absValue = Math.abs(targetNumber);

    const numStr = String(Math.max(0, Math.floor(absValue))).padStart(3, '0');

    const targetDigits = numStr.split('').map(Number);

    const isNeg = targetNumber < 0;


    if (currentElevationDigits.length !== 4) {

        setupElevationCounter(targetNumber);

    }


    const firstStrip = document.getElementById('elevation-strip-0');

    if (firstStrip) {

        const currentFirstValue = isElevationNegative ? '-' : 0;

        const targetFirstValue = isNeg ? '-' : 0;

        const isResetting = targetNumber === 0;

        const signChanged = targetFirstValue !== currentFirstValue;

        const needsAnimation = signChanged || isResetting;


        if (needsAnimation) {


            void firstStrip.offsetWidth;


            setTimeout(() => {

                if (isNeg) {


                    firstStrip.style.transition = 'transform 0.2s ease-in-out';

                    firstStrip.style.transform = `translateY(-${1 * CELL_HEIGHT}px)`;

                } else {


                    firstStrip.style.transition = 'transform 0.2s ease-in-out';

                    firstStrip.style.transform = `translateY(0)`;

                }

            }, 0);

        }

    }


    for (let index = 1; index < 4; index++) {

        const strip = document.getElementById(`elevation-strip-${index}`);

        if (!strip) continue;


        let currentDigit = currentElevationDigits[index] || 0;

        let actualCurrentPosition = currentDigit * CELL_HEIGHT;

        const transform = strip.style.transform || '';

        const transformMatch = transform.match(/translateY\((-?\d+)px\)/);

        if (transformMatch) {


            actualCurrentPosition = Math.abs(parseInt(transformMatch[1]));


            currentDigit = Math.round(actualCurrentPosition / CELL_HEIGHT) % 10;

        }


        const targetDigit = targetDigits[index - 1];


        if (currentDigit === targetDigit) {


            const finalSnapPosition = -(targetDigit * CELL_HEIGHT);

            strip.style.transition = 'none';

            strip.style.transform = `translateY(${finalSnapPosition}px)`;

            strip.classList.remove('rolling', 'snapping');

            continue;

        }


        const normalizedCurrentPosition = currentDigit * CELL_HEIGHT;


        let moveDistance = targetDigit - currentDigit;


        const finalPosition = -(normalizedCurrentPosition + moveDistance * CELL_HEIGHT);


        strip.style.transition = 'none';

        strip.style.transform = `translateY(-${normalizedCurrentPosition}px)`;


        void strip.offsetWidth;

        requestAnimationFrame(() => {


            setTimeout(() => {

                strip.style.transition = 'transform 0.2s ease-in-out';

                strip.style.transform = `translateY(${finalPosition}px)`;

            }, (index - 1) * 35);

        });

    }


    currentElevationDigits = [isNeg ? '-' : 0, targetDigits[0], targetDigits[1], targetDigits[2]];

    isElevationNegative = isNeg;

}


let mobWarningTimer = null;


function showWarning(warningDiv, message) {

    if (!warningDiv) return;


    const warningP = warningDiv.querySelector('p');

    const warningIconBtn = document.getElementById('warningIcon');

    const warningIconMobile = document.getElementById('warningIconMobile');

    
    if (warningP) {

        const currentMessage = message || warningP.textContent;

        warningP.textContent = currentMessage;

        
        const warningMobileDiv = document.getElementById('warningMobile');

        const warningMobileP = warningMobileDiv ? warningMobileDiv.querySelector('p') : null;

        if (warningMobileP) {

            warningMobileP.textContent = currentMessage;

        }

        
        if (warningIconBtn) {

            warningIconBtn.classList.remove('hidden');

        }


        if (warningIconMobile) {

            warningIconMobile.classList.remove('hidden');

        }

        
        if (mobWarningTimer) clearTimeout(mobWarningTimer);


        const warningDelay = (isMobileLayout() || isKeypadView()) ? 700 : 120;

        mobWarningTimer = setTimeout(function () {

            const mobWarning = document.getElementById('mobWarning');

            if (!mobWarning) return;

            const bannerText = mobWarning.querySelector('.mob-warning-text');

            if (bannerText) bannerText.textContent = currentMessage;

            mobWarning.classList.remove('hidden');

        }, warningDelay);


        document.querySelectorAll('.distance-controls').forEach(el => {

            el.classList.add('warning-margin');

        });

        
        warningDiv.classList.add('hidden');

    }

}


function hideWarning(warningDiv) {

    if (!warningDiv) return;

    
    const warningIconBtn = document.getElementById('warningIcon');

    const warningIconMobile = document.getElementById('warningIconMobile');

    
    warningDiv.classList.add('hidden');

    
    if (warningIconBtn) {

        warningIconBtn.classList.add('hidden');

    }


    if (warningIconMobile) {

        warningIconMobile.classList.add('hidden');

    }

    
    if (mobWarningTimer) { clearTimeout(mobWarningTimer); mobWarningTimer = null; }

    const mobWarningEl = document.getElementById('mobWarning');

    if (mobWarningEl) mobWarningEl.classList.add('hidden');


    document.querySelectorAll('.distance-controls').forEach(el => {

        el.classList.remove('warning-margin');

    });

}


function toggleWarningMessage(warningId) {

    const id = warningId || 'warning';

    const warningDiv = document.getElementById(id);

    if (warningDiv) {

        warningDiv.classList.toggle('hidden');

    }

}


function closeWarningMessage() {

    const warningDiv = document.getElementById('warning');

    const warningDivMobile = document.getElementById('warningMobile');

    const mobWarningClose = document.getElementById('mobWarning');

    if (mobWarningClose) mobWarningClose.classList.add('hidden');

    if (warningDiv) {

        warningDiv.classList.add('hidden');

    }

    if (warningDivMobile) {

        warningDivMobile.classList.add('hidden');

    }

}


function calculate() {

    try {

        updateMaxRangeHints();

        const faction = document.getElementById('faction').value;

        const distance = parseFloat(document.getElementById('distance').value);


    const heightDiffToggle = document.getElementById('heightDiffToggle');

    const heightDiffEnabled = heightDiffToggle ? heightDiffToggle.checked : false;


    const allHeightInputs = document.querySelectorAll('input#heightDiff, input#heightDiffLite');

    let heightDiffInput = null;

    for (const input of allHeightInputs) {

        if (input.offsetParent !== null) {

            heightDiffInput = input;

            break;

        }

    }


    if (!heightDiffInput && allHeightInputs.length) heightDiffInput = allHeightInputs[0];


    let enteredHeight = 0;

    if (heightDiffInput && heightDiffEnabled) {

        const v = heightDiffInput.value.trim();

        if (v === '' || v === '-' || v === '+') {

            enteredHeight = 0;

        } else {

            const parsed = parseFloat(v.replace(/\+/g, ''));

            enteredHeight = isNaN(parsed) ? 0 : parsed;

        }

    }


    const heightDiff = enteredHeight;


    const allRedInputs = document.querySelectorAll('input#redNumber, input#redNumberLite');

    let redNumberInput = null;

    for (const input of allRedInputs) {

        if (input.offsetParent !== null) {

            redNumberInput = input;

            break;

        }

    }


    if (!redNumberInput && allRedInputs.length) redNumberInput = allRedInputs[0];

    let redNumber = 0;

    if (redNumberInput) {

        const redNumberValue = redNumberInput.value.trim();

        if (redNumberValue === '' || redNumberValue === '-' || redNumberValue === '+') {

            redNumber = 0;

        } else {

            const parsed = parseFloat(redNumberValue.replace(/\+/g, ''));

            redNumber = isNaN(parsed) ? 0 : parsed;

        }

    }


    const warningDiv = document.getElementById('warning');


    if (!distance || isNaN(distance)) {


        if (isMobileLayout() || isAutoCalcEnabled()) {

            if (typeof hideWarning === 'function') hideWarning(warningDiv);

        } else if (warningDiv) {

            showWarning(warningDiv, 'Please enter a valid distance');

        }


        rollElevationToNumber(0);

        const baseValueEl = document.getElementById('baseValue');

        const heightValueEl = document.getElementById('heightValue');

        const redValueEl = document.getElementById('redValue');

        const redValueUnitEl = document.getElementById('redValueUnit');

        if (baseValueEl) baseValueEl.textContent = '--';

        if (heightValueEl) { heightValueEl.textContent = '--'; heightValueEl.className = 'text-gray-300'; }

        if (redValueEl) { redValueEl.textContent = '--'; redValueEl.className = 'text-gray-300'; }

        if (redValueUnitEl) { redValueUnitEl.className = 'text-gray-300'; }

        updateMilLabels();

        return;

    }


    const table = tables[faction];

    if (!table) {

        if (warningDiv) {

            showWarning(warningDiv, `Error: Unknown faction "${faction}"`);

        }


        rollElevationToNumber(0);

        const baseValueEl2 = document.getElementById('baseValue');

        const heightValueEl2 = document.getElementById('heightValue');

        const redValueEl2 = document.getElementById('redValue');

        const redValueUnitEl2 = document.getElementById('redValueUnit');

        if (baseValueEl2) baseValueEl2.textContent = '--';

        if (heightValueEl2) { heightValueEl2.textContent = '--'; heightValueEl2.className = 'text-gray-300'; }

        if (redValueEl2) { redValueEl2.textContent = '--'; redValueEl2.className = 'text-gray-300'; }

        if (redValueUnitEl2) { redValueUnitEl2.className = 'text-gray-300'; }

        updateMilLabels();

        return;

    }

    let base = interpolate(table, distance);


    if (typeof base !== 'number' || isNaN(base)) {

        base = interpolate(table, distance);

    }

    const solveKeyForRange = Object.keys(tables).find(k => tables[k] === table);

    let maxDist = null;

    if (solveKeyForRange && SPA_SOLVE[solveKeyForRange]) {

        const rows = SPA_SOLVE[solveKeyForRange].rows;

        const rowsMaxDist = rows[rows.length - 1][1];

        maxDist = Math.max(spaForwardMeters(solveKeyForRange, 800), rowsMaxDist);

    }


    // Furthest target reachable on this terrain, from the same math as the
    // calculation itself - used only to state the limit in the warning text.

    let reachMax = null;

    if (solveKeyForRange) {

        reachMax = maxRangeMetersAtTerrain(faction, redNumber, heightDiffEnabled, heightDiff);

    }


    const usePhysicsHeightCorrection = true; // measured solve covers the full span (low band + tail)

    let heightDiffMils = usePhysicsHeightCorrection

        ? computeHeightDiffMils(base, distance, heightDiff, table)

        : (heightDiff / distance) * MILS_PER_RAD_APPROX;

    if (!Number.isFinite(heightDiffMils)) {

        heightDiffMils = computeBallisticHeightDiffMils(base, distance, heightDiff);

    }

    const final = Math.round(base + heightDiffMils - redNumber);


    const minMil = table.minMil;

    const maxMil = table.maxMil;


    const lowRangeAnchor = lowRangeAnchors.get(table);

    if (final > maxMil) {

        if (warningDiv) {

            const reachText = (reachMax !== null && reachMax > 0) ? ` Max reach on this terrain: ${Math.round(reachMax)}m.` : '';

            showWarning(warningDiv, `WARNING: Calculated elevation (${final} MIL) exceeds this turret's maximum elevation (${maxMil} MIL).${reachText}`);

        }

    } else if (lowRangeAnchor && distance < lowRangeAnchor.minDistance) {

        if (warningDiv) {

            showWarning(warningDiv, `Warning: ${distance}m is below this vehicle's tested physical minimum (~${lowRangeAnchor.minDistance}m).`);

        }

    } else if (final < minMil) {

        if (warningDiv) {

            showWarning(warningDiv, `WARNING: Calculated elevation (${final} MIL) is below this turret's minimum elevation (${minMil} MIL).`);

        }

    } else if (maxDist !== null && distance > maxDist) {

        if (warningDiv) {

            showWarning(warningDiv, `Distance exceeds supported range. Calculator math stops following beyond ~${Math.round(maxDist)}m.`);

        }

    } else {

        if (warningDiv) {

            hideWarning(warningDiv);

        }

    }


    rollElevationToNumber(Math.round(spaHudMilFromRaw(table, final)));


    const elevationCounterEl = document.getElementById('elevationCounter');

    const elevationValueContainer = elevationCounterEl ? elevationCounterEl.closest('.armored-result-value') : null;

    if (elevationValueContainer) {

        elevationValueContainer.classList.remove(

            'elevation-count-up', 'elevation-pulse', 'elevation-slide-fade', 'elevation-scale-bounce',

            'elevation-mechanical-odometer', 'elevation-mechanical-tick', 

            'elevation-mechanical-snap', 'elevation-mechanical-gauge'

        );

    }


    const displayHeightValue = ((typeof heightDiff === 'number' && !isNaN(heightDiff)) ? heightDiff : 0);

    const displayRedNumber = (typeof redNumber === 'number' && !isNaN(redNumber)) ? redNumber : 0;

    const displayRedNumberHud = hudQuantizeMil(displayRedNumber);


    const baseValueEl = document.getElementById('baseValue');

    if (baseValueEl) {

        const distanceText = formatMetersHudValue(distance);

        baseValueEl.textContent = distanceText;

        baseValueEl.innerHTML = distanceText;

    }


    const heightEl = document.getElementById('heightValue');

    if (heightEl) {

        heightEl.textContent = formatHeightDiffHudValue(displayHeightValue);

        heightEl.className = (displayHeightValue > 0) ? 'text-green-400' : (displayHeightValue < 0 ? 'text-red-400' : 'text-gray-300');

    }


    const redElement = document.getElementById('redValue');

    const redUnitElement = document.getElementById('redValueUnit');

    if (redElement) {

        const redText = formatMilsHudValue(displayRedNumberHud);

        redElement.textContent = redText;

        const colorClass = 'text-hud-red';

        redElement.className = colorClass;

        if (redUnitElement) {

            redUnitElement.className = colorClass;

        }

    }


    setTimeout(() => {

        const baseEl = document.getElementById('baseValue');

        const heightEl = document.getElementById('heightValue');

        const redEl = document.getElementById('redValue');


        if (baseEl) {

            if (baseEl.textContent === '--' || baseEl.textContent === '0' || baseEl.textContent.trim() === '') {

                baseEl.textContent = formatMetersHudValue(distance);

            }

        }


        if (heightEl) {

            const currentText = heightEl.textContent;

            const expectedText = formatHeightDiffHudValue(displayHeightValue);

            if (currentText === '--' || currentText === '0M' || currentText.trim() === '') {

                heightEl.textContent = expectedText;

            }

        }


        if (redEl) {

            const currentText = redEl.textContent;

            const expectedText = formatMilsHudValue(displayRedNumberHud);

            if (currentText === '--' || currentText === '0' || currentText === '+0' || currentText === '0MIL' || currentText.trim() === '') {

                redEl.textContent = expectedText;

                redEl.className = 'text-hud-red';

                const redUnitCheckEl = document.getElementById('redValueUnit');

                if (redUnitCheckEl) redUnitCheckEl.className = 'text-hud-red';

            }

        }

    }, 50);


    updateMilLabels();


    const isCoarsePointer = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);

    if (!isAutoCalcEnabled() && !isCoarsePointer) {

        const distanceInputEl = document.getElementById('distance');

        if (distanceInputEl) {

            distanceInputEl.focus();

            distanceInputEl.select();

        }

    } else if (document.activeElement && (document.activeElement.id === 'calculateButton' || document.activeElement.id === 'calculateButtonLite')) {

        document.activeElement.blur();

    }


    saveState();

    } catch (error) {


        const warningDiv = document.getElementById('warning');

        if (warningDiv) {

            showWarning(warningDiv, 'Error calculating elevation. Please check your inputs.');

        }

    }

}


window.calculate = calculate;


function copyResult(buttonElement) {


    const counterElement = document.getElementById('elevationCounter');

    let elevationValue = '0000';

    if (counterElement) {

        const strips = counterElement.querySelectorAll('.digit-strip');

        let valueStr = '';


        strips.forEach((strip, index) => {

            const transform = strip.style.transform || '';

            const match = transform.match(/translateY\(-?(\d+)px\)/);

            if (match) {

                const position = Math.round(parseInt(match[1]) / CELL_HEIGHT);

                const cells = strip.querySelectorAll('.digit-cell');


                if (cells.length > 0) {


                    const cellIndex = position % cells.length;

                    const cellContent = cells[cellIndex]?.textContent || '0';

                    valueStr += cellContent;

                } else {


                    if (index === 0) {


                        valueStr += (position % 2 === 1) ? '−' : '0';

                    } else {


                        valueStr += (position % 10);

                    }

                }

            } else {

                valueStr += '0';

            }

        });


        if (valueStr.includes('−')) {


            const numericPart = valueStr.replace(/[^0-9]/g, '');

            const paddedNumeric = numericPart.padStart(4, '0');


            const trimmedNumeric = paddedNumeric.replace(/^0+/, '') || '0';

            elevationValue = '−' + trimmedNumeric;

        } else {


            const numericPart = valueStr.replace(/[^0-9]/g, '');

            const paddedNumeric = numericPart.padStart(4, '0');


            elevationValue = paddedNumeric.replace(/^0+/, '') || '0';

        }

    }


    const baseValueEl = document.getElementById('baseValue');

    const heightValueEl = document.getElementById('heightValue');

    const redValueEl = document.getElementById('redValue');

    const heightSymbolEl = document.getElementById('heightSymbol');


    const baseValue = baseValueEl ? baseValueEl.textContent.trim() : '--';

    const heightValue = heightValueEl ? heightValueEl.textContent.trim() : '--';

    const redValue = redValueEl ? redValueEl.textContent.trim() : '--';

    const heightSymbol = heightSymbolEl ? heightSymbolEl.textContent.trim() : 'Δ';


    let resultText = `Set Elevation To: ${elevationValue} MIL`;


    const copyButton = buttonElement || document.querySelector('.copy-result-button');


    if (copyButton && !copyButton.dataset.originalContent) {

        copyButton.dataset.originalContent = '📋';

    }

    const originalContent = copyButton ? (copyButton.dataset.originalContent || '📋') : '📋';


    const showCopied = () => {

        if (copyButton) {

            copyButton.classList.add('copied');

            copyButton.innerHTML = '✓';

            setTimeout(() => {

                copyButton.innerHTML = originalContent;

                copyButton.classList.remove('copied');

            }, 2000);

        }

    };


    const fallbackCopy = () => {

        const textArea = document.createElement('textarea');

        textArea.value = resultText;

        textArea.style.position = 'fixed';

        textArea.style.opacity = '0';

        document.body.appendChild(textArea);

        textArea.focus();

        textArea.select();

        let ok = false;

        try {

            ok = document.execCommand('copy');

        } catch (err) {

            ok = false;

        }

        document.body.removeChild(textArea);

        if (ok) {

            showCopied();

        } else {

            alert('Failed to copy. Please select and copy the text manually.');

        }

    };


    // navigator.clipboard only exists in secure contexts (https or localhost).

    // Over plain http (e.g. the LAN URL) it is undefined and writeText throws,

    // which previously prevented the fallback below from ever running.

    if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(resultText).then(showCopied).catch(fallbackCopy);

    } else {

        fallbackCopy();

    }

}


function resetCalculator(buttonElement) {


    const resetButton = buttonElement || document.querySelector('.reset-result-button');


    if (resetButton && !resetButton.dataset.originalContent) {

        resetButton.dataset.originalContent = '🔄';

    }

    const originalContent = resetButton ? (resetButton.dataset.originalContent || '🔄') : '🔄';


    if (resetButton) {

        resetButton.classList.add('resetting');

        resetButton.innerHTML = '✓';

    }


    const distanceInputs = document.querySelectorAll('input#distance, input#distanceLite');

    const heightDiffInputs = document.querySelectorAll('input#heightDiff, input#heightDiffLite');

    const redNumberInputs = document.querySelectorAll('input#redNumber, input#redNumberLite');


    if (distanceInputs.length > 0) {

        setAllValues(distanceInputs, '0');

    }

    if (heightDiffInputs.length > 0) {

        setAllValues(heightDiffInputs, '0');

    }

    if (redNumberInputs.length > 0) {

        setAllValues(redNumberInputs, '0');

    }


    setTimeout(() => {

        if (typeof calculate === 'function') {

            calculate();

        } else {


            if (typeof rollElevationToNumber === 'function') {

                rollElevationToNumber(0);

            } else if (typeof setupElevationCounter === 'function') {

                setupElevationCounter(0);

            }


            const baseValueEl = document.getElementById('baseValue');

            const heightValueEl = document.getElementById('heightValue');

            const redValueEl = document.getElementById('redValue');


            updateDistanceReadout();

            if (heightValueEl) heightValueEl.textContent = '0M';

            if (redValueEl) { redValueEl.textContent = '0MIL'; redValueEl.className = 'text-hud-red'; }

            const redValueUnitResetEl = document.getElementById('redValueUnit');

            if (redValueUnitResetEl) redValueUnitResetEl.className = 'text-hud-red';


        }


        const warningDiv = document.getElementById('warning');

        if (warningDiv) {

            hideWarning(warningDiv);

        }


        if (typeof syncArmoredToggles === 'function') {

            syncArmoredToggles();

        }


        if (typeof saveState === 'function') {

            saveState();

        }

    }, 50);


    setTimeout(() => {

        if (resetButton) {

            resetButton.classList.remove('resetting');

            resetButton.innerHTML = originalContent;

        }

    }, 800);

}


window.resetCalculator = resetCalculator;


function saveState() {

    try {

        const faction = document.getElementById('faction').value;


        const allHeightInputs = document.querySelectorAll('input#heightDiff, input#heightDiffLite');

        let visibleHeightInput = null;

        for (const input of allHeightInputs) {

            if (input.offsetParent !== null) {

                visibleHeightInput = input;

                break;

            }

        }


        const state = {

            faction,

            distance: document.getElementById('distance').value,

            heightDiff: visibleHeightInput ? visibleHeightInput.value : document.getElementById('heightDiff').value,

            redNumber: document.getElementById('redNumber').value,

            autoCalc: document.getElementById('autoCalcToggle') ? document.getElementById('autoCalcToggle').checked : true,

            heightDiffEnabled: document.getElementById('heightDiffToggle') ? document.getElementById('heightDiffToggle').checked : false

        };

        localStorage.setItem('hllSpaState', JSON.stringify(state));

    } catch (e) {


    }

}


function loadState() {

    try {

        const raw = localStorage.getItem('hllSpaState');

        if (!raw) return;

        const state = JSON.parse(raw);


        if (state.faction) {

            const hiddenFaction = document.getElementById('faction');

            hiddenFaction.value = state.faction;


            const flagMap = {

                'British (Bishop SP)': 'BRITISH.webp',

                'British (Churchill AVRE)': 'BRITISH.webp',

                'US (Sherman M4A3 105)': 'US.webp',

                'Soviet Union (KV-2)': 'SOVIET.webp',

                'DAK (Panzer III Ausf.N)': 'GERMANY.webp',

                'Germany (Sturmpanzer IV Brummbär)': 'GERMANY.webp'

            };


            const flag = flagMap[state.faction] || 'BRITISH.webp';

            const selectSelected = document.getElementById('selectSelected');


            const displayName = state.faction.replace(' (Sherman M4A3 105)', ' (Sherman M4A3)');

            selectSelected.innerHTML = `${flagImgTag('images/UI/Icons/flags/' + flag, flag.split('.')[0], 'eager')} <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; min-width: 0;">${displayName}</span>`;


            updateFactionImage();

        }


        const distanceInputs = document.querySelectorAll('input#distance, input#distanceLite');

        if (state.distance !== undefined && state.distance !== null && state.distance !== '') {

            setAllValues(distanceInputs, state.distance);

        }


        if (state.heightDiff !== undefined && state.heightDiff !== null && state.heightDiff !== '') {

            const rawHeightDiff = String(state.heightDiff).trim();

            if (rawHeightDiff === '' || rawHeightDiff === '-' || rawHeightDiff === '+') {

                setAllValues(document.querySelectorAll('input#heightDiff, input#heightDiffLite'), '0');

            } else {

                const parsedHeightDiff = parseFloat(rawHeightDiff.replace(/\+/g, ''));

                const heightValue = Number.isFinite(parsedHeightDiff) ? rawHeightDiff : '0';

                setAllValues(document.querySelectorAll('input#heightDiff, input#heightDiffLite'), heightValue);

            }

        }


        const redNumberInputs = document.querySelectorAll('input#redNumber, input#redNumberLite');

        if (state.redNumber !== undefined && state.redNumber !== null && state.redNumber !== '') {

            const rawRedNumber = String(state.redNumber).trim();

            if (rawRedNumber === '' || rawRedNumber === '-' || rawRedNumber === '+') {

                setAllValues(redNumberInputs, '0');

            } else {

                const parsedRedNumber = parseFloat(rawRedNumber.replace(/\+/g, ''));

                setAllValues(redNumberInputs, Number.isFinite(parsedRedNumber) ? rawRedNumber : '0');

            }

        }


        const autoCalcToggle = document.getElementById('autoCalcToggle');

        if (autoCalcToggle && typeof state.autoCalc === 'boolean') {

            autoCalcToggle.checked = state.autoCalc;

        }


        const heightDiffToggle = document.getElementById('heightDiffToggle');

        if (heightDiffToggle && typeof state.heightDiffEnabled === 'boolean') {

            heightDiffToggle.checked = state.heightDiffEnabled;

        }


        updateCalculateButton();

        updateToggleLEDs();

        updateHeightDiffToggleUI();

        syncArmoredToggles();

    } catch (e) {


    }

}


function toggleArmoredSwitch(checkboxId, element) {

    try {

        const checkbox = document.getElementById(checkboxId);

        if (!checkbox) {

            return;

        }


        checkbox.checked = !checkbox.checked;


        if (checkbox.checked) {

            element.classList.add('active');

        } else {

            element.classList.remove('active');

        }


        if (checkboxId === 'autoCalcToggle') {

            const event = new Event('change', { bubbles: true });

            checkbox.dispatchEvent(event);


            syncArmoredToggles();

        } else if (checkboxId === 'heightDiffToggle') {

            const event = new Event('change', { bubbles: true });

            checkbox.dispatchEvent(event);

            updateHeightDiffToggleUI();

            saveState();

        }

    } catch (error) {

        // Silently ignore - error is already handled gracefully

    }

}


window.toggleArmoredSwitch = toggleArmoredSwitch;


function syncArmoredToggles() {

    const autoToggle = document.getElementById('autoCalcToggle');

    const heightDiffToggle = document.getElementById('heightDiffToggle');

    const armoredAuto = document.getElementById('armoredAutoToggle');

    const armoredHeightDiffToggle = document.getElementById('armoredHeightDiffToggle');


    if (autoToggle && armoredAuto) {

        if (autoToggle.checked) {

            armoredAuto.classList.add('active');

        } else {

            armoredAuto.classList.remove('active');

        }

    }


    if (heightDiffToggle && armoredHeightDiffToggle) {

        if (heightDiffToggle.checked) {

            armoredHeightDiffToggle.classList.add('active');

        } else {

            armoredHeightDiffToggle.classList.remove('active');

        }

    }


    updateToggleLEDs();

    updateHeightDiffToggleUI();

}


function updateToggleLEDs() {

    const autoCalcToggle = document.getElementById('autoCalcToggle');

    const calcOnLabel = document.getElementById('calcOnLabel');

    const calcOffLabel = document.getElementById('calcOffLabel');


    if (autoCalcToggle && calcOnLabel && calcOffLabel) {

        if (autoCalcToggle.checked) {


            calcOnLabel.classList.add('led-on-green');

            calcOnLabel.classList.remove('led-off');

            calcOffLabel.classList.remove('led-on-green', 'led-off');

        } else {


            calcOffLabel.classList.add('led-off');

            calcOffLabel.classList.remove('led-on-green');

            calcOnLabel.classList.remove('led-on-green', 'led-off');

        }

    }


    const heightDiffToggleLED = document.getElementById('heightDiffToggle');

    const heightDiffOnLabel = document.getElementById('heightDiffOnLabel');

    const heightDiffOffLabel = document.getElementById('heightDiffOffLabel');

    if (heightDiffToggleLED && heightDiffOnLabel && heightDiffOffLabel) {

        if (heightDiffToggleLED.checked) {


            heightDiffOnLabel.classList.add('led-on-green');

            heightDiffOnLabel.classList.remove('led-off');

            heightDiffOffLabel.classList.remove('led-on-green', 'led-off');

        } else {


            heightDiffOffLabel.classList.add('led-off');

            heightDiffOffLabel.classList.remove('led-on-green');

            heightDiffOnLabel.classList.remove('led-on-green', 'led-off');

        }

    }

}


function updateHeightDiffToggleUI() {

    const heightDiffToggle = document.getElementById('heightDiffToggle');

    const heightDiffColumn = document.getElementById('heightDiffColumn');

    const terrainElevationColumn = document.getElementById('terrainElevationColumn');

    const heightRedGrid = document.getElementById('heightRedGrid');

    const armoredHeightDiffToggle = document.getElementById('armoredHeightDiffToggle');

    const targetHeightSection = document.getElementById('targetHeightSection');


    if (!heightDiffToggle) return;


    const isEnabled = heightDiffToggle.checked;


    if (armoredHeightDiffToggle) {

        if (isEnabled) {

            armoredHeightDiffToggle.classList.add('active');

            armoredHeightDiffToggle.setAttribute('aria-checked', 'true');

        } else {

            armoredHeightDiffToggle.classList.remove('active');

            armoredHeightDiffToggle.setAttribute('aria-checked', 'false');

        }

    }


    if (heightDiffColumn && heightRedGrid) {

        if (isEnabled) {


            heightDiffColumn.classList.remove('hidden');

            heightRedGrid.classList.remove('grid-cols-1');

            heightRedGrid.classList.add('grid-cols-2');

        } else {


            heightDiffColumn.classList.add('hidden');

            heightRedGrid.classList.remove('grid-cols-2');

            heightRedGrid.classList.add('grid-cols-1');


            setAllValues(document.querySelectorAll('input#heightDiff, input#heightDiffLite'), '0');

        }

    }


    if (targetHeightSection) {

        if (isEnabled) {

            targetHeightSection.classList.remove('hidden');

        } else {

            targetHeightSection.classList.add('hidden');

        }

    }


    updateToggleLEDs();


    if (isAutoCalcEnabled()) {

        calculate();

    }

}


updateHeightDiffToggleUI();

loadState();


setupElevationCounter(0);

initializeElevationMIL();


updateFactionImage();

updateMilRangeText();

updateMaxRangeHints();


if (isAutoCalcEnabled()) {

    calculate();

} else {


    setupElevationCounter(0);

    rollElevationToNumber(0);

    const baseEl = document.getElementById('baseValue');

    const heightEl = document.getElementById('heightValue');

    const redEl = document.getElementById('redValue');

    const redUnitEl = document.getElementById('redValueUnit');

    updateDistanceReadout();


    if (heightEl) {

        heightEl.textContent = '--';

        heightEl.className = 'text-gray-300';

    }

    if (redEl) {

        redEl.textContent = '--';

        redEl.className = 'text-gray-300';

    }

    if (redUnitEl) {

        redUnitEl.className = 'text-gray-300';

    }

}

updateCalculateButton();

updateMilLabels();

syncArmoredToggles();


const autoToggleCheckbox = document.getElementById('autoCalcToggle');

const heightDiffToggleCheckbox = document.getElementById('heightDiffToggle');

if (autoToggleCheckbox) {

    autoToggleCheckbox.addEventListener('change', syncArmoredToggles);

}

if (heightDiffToggleCheckbox) {

    heightDiffToggleCheckbox.addEventListener('change', function() {

        updateHeightDiffToggleUI();

        saveState();

    });

}


const heightDiffToggleLite = document.getElementById('heightDiffToggleLite');

const autoCalcToggleLite = document.getElementById('autoCalcToggleLite');

const armoredHeightDiffToggleLite = document.getElementById('armoredHeightDiffToggleLite');

const armoredAutoToggleLite = document.getElementById('armoredAutoToggleLite');


function updateLiteToggleUI(toggle, armoredToggle, onLabel, offLabel, isActive) {

    if (armoredToggle) {

        if (isActive) {

            armoredToggle.classList.add('active');

            armoredToggle.setAttribute('aria-checked', 'true');

        } else {

            armoredToggle.classList.remove('active');

            armoredToggle.setAttribute('aria-checked', 'false');

        }

    }

    if (onLabel && offLabel) {

        if (isActive) {

            onLabel.classList.add('active');

            offLabel.classList.remove('active');

        } else {

            onLabel.classList.remove('active');

            offLabel.classList.add('active');

        }

    }

}


function updateLiteHeightDiffVisibility() {

    const heightDiffToggleLite = document.getElementById('heightDiffToggleLite');

    const liteHeightDiffRow = document.getElementById('liteHeightDiffRow');

    if (liteHeightDiffRow && heightDiffToggleLite) {

        if (heightDiffToggleLite.checked) {

            liteHeightDiffRow.classList.remove('hidden');

        } else {

            liteHeightDiffRow.classList.add('hidden');

        }

    }

}


function updateLiteCalcButtonVisibility() {

    const autoCalcToggleLite = document.getElementById('autoCalcToggleLite');

    const liteCalcButtonRow = document.getElementById('liteCalcButtonRow');

    if (liteCalcButtonRow && autoCalcToggleLite) {

        if (autoCalcToggleLite.checked) {

            liteCalcButtonRow.classList.add('hidden');

        } else {

            liteCalcButtonRow.classList.remove('hidden');

        }

    }

}


function syncLiteTogglesToFull() {

    const fullHeightToggle = document.getElementById('heightDiffToggle');

    const fullAutoToggle = document.getElementById('autoCalcToggle');

    if (heightDiffToggleLite && fullHeightToggle) {

        fullHeightToggle.checked = heightDiffToggleLite.checked;

    }

    if (autoCalcToggleLite && fullAutoToggle) {

        fullAutoToggle.checked = autoCalcToggleLite.checked;

    }

    syncArmoredToggles();

    updateHeightDiffToggleUI();

}


function syncFullTogglesToLite() {

    const fullHeightToggle = document.getElementById('heightDiffToggle');

    const fullAutoToggle = document.getElementById('autoCalcToggle');

    if (fullHeightToggle && heightDiffToggleLite) {

        heightDiffToggleLite.checked = fullHeightToggle.checked;

        updateLiteToggleUI(heightDiffToggleLite, armoredHeightDiffToggleLite,

            document.getElementById('heightDiffOnLabelLite'), document.getElementById('heightDiffOffLabelLite'),

            fullHeightToggle.checked);

        updateLiteHeightDiffVisibility();

    }

    if (fullAutoToggle && autoCalcToggleLite) {

        autoCalcToggleLite.checked = fullAutoToggle.checked;

        updateLiteToggleUI(autoCalcToggleLite, armoredAutoToggleLite,

            document.getElementById('calcOnLabelLite'), document.getElementById('calcOffLabelLite'),

            fullAutoToggle.checked);

        updateLiteCalcButtonVisibility();

    }

}


if (heightDiffToggleLite) {

    heightDiffToggleLite.addEventListener('change', function() {

        updateLiteToggleUI(this, armoredHeightDiffToggleLite,

            document.getElementById('heightDiffOnLabelLite'), document.getElementById('heightDiffOffLabelLite'),

            this.checked);

        updateLiteHeightDiffVisibility();

        syncLiteTogglesToFull();

        saveState();

    });

    updateLiteToggleUI(heightDiffToggleLite, armoredHeightDiffToggleLite,

        document.getElementById('heightDiffOnLabelLite'), document.getElementById('heightDiffOffLabelLite'),

        heightDiffToggleLite.checked);

    updateLiteHeightDiffVisibility();

}


if (autoCalcToggleLite) {

    autoCalcToggleLite.addEventListener('change', function() {

        updateLiteToggleUI(this, armoredAutoToggleLite,

            document.getElementById('calcOnLabelLite'), document.getElementById('calcOffLabelLite'),

            this.checked);

        updateLiteCalcButtonVisibility();

        syncLiteTogglesToFull();

        saveState();

        if (this.checked) {

            calculate();

        }

    });

    updateLiteToggleUI(autoCalcToggleLite, armoredAutoToggleLite,

        document.getElementById('calcOnLabelLite'), document.getElementById('calcOffLabelLite'),

        autoCalcToggleLite.checked);

    updateLiteCalcButtonVisibility();

}


// Add click handlers to visual switch elements (checkboxes are hidden)

if (armoredHeightDiffToggleLite && heightDiffToggleLite) {

    armoredHeightDiffToggleLite.addEventListener('click', function() {

        heightDiffToggleLite.checked = !heightDiffToggleLite.checked;

        heightDiffToggleLite.dispatchEvent(new Event('change', { bubbles: true }));

    });

}


if (armoredAutoToggleLite && autoCalcToggleLite) {

    armoredAutoToggleLite.addEventListener('click', function() {

        autoCalcToggleLite.checked = !autoCalcToggleLite.checked;

        autoCalcToggleLite.dispatchEvent(new Event('change', { bubbles: true }));

    });

}


const calculateButtonLite = document.getElementById('calculateButtonLite');

if (calculateButtonLite) {

    calculateButtonLite.addEventListener('click', function() {

        calculate();

    });

}


if (autoToggleCheckbox) {

    autoToggleCheckbox.addEventListener('change', syncFullTogglesToLite);

}

if (heightDiffToggleCheckbox) {

    heightDiffToggleCheckbox.addEventListener('change', syncFullTogglesToLite);

}


['distance', 'heightDiff', 'redNumber'].forEach(id => {


    const allInputs = document.querySelectorAll(`input#${id}, input#${id}Lite`);

    if (!allInputs.length) return;


    const selectAllHandler = function() {

        const v = this.value || '';

        if (!v.length) return;

        setTimeout(() => {

            try {

                this.setSelectionRange(0, v.length);

            } catch (e) {


            }

        }, 0);

    };


    const ensureNonEmptyHandler = function() {

        if (this.value.trim() === '') {

            if (this.id === 'redNumber' || this.id === 'redNumberLite') {

                this.value = '0MIL';

            } else if (this.id === 'distance' || this.id === 'distanceLite' || this.id === 'heightDiff' || this.id === 'heightDiffLite') {

                this.value = '0M';

            } else {

                this.value = '0';

            }

            try {

                saveState();

                if (isAutoCalcEnabled()) {

                calculate();

                } else {


                    updateDistanceReadout();

                }

            } catch (e) {


            }

        } else {


            if (this.id === 'distance' || this.id === 'distanceLite') {

                const numValue = parseFloat(this.value);

                if (!isNaN(numValue)) {

                    let finalValue = numValue;


                    if (numValue < 0) {

                        finalValue = 0;

                    } else if (numValue > 2500) {

                        finalValue = 2500;

                    }


                    this.value = formatMetersHudValue(finalValue);


                    if (finalValue !== numValue) {

                        saveState();

                        if (isAutoCalcEnabled()) {

                            calculate();

                        }

                    }

                }

            }


            if (this.id === 'redNumber' || this.id === 'redNumberLite') {

                const numValue = parseFloat(this.value);

                const formatFor = (v) => formatMilsHudValue(v);

                if (!isNaN(numValue)) {

                    if (numValue < -356) {
                        this.value = formatFor(-356);
                    } else if (numValue > 356) {
                        this.value = formatFor(356);
                    } else {
                        // In-game look: "0MIL" / "+14MIL" (FULL), signed number (LITE)
                        this.value = formatFor(numValue);
                    }

                } else {

                    this.value = formatFor(0);

                }

            }


            if (this.id === 'heightDiff' || this.id === 'heightDiffLite') {

                const numValue = parseHeightDiff(this.value);

                if (!isNaN(numValue)) {

                    // In-game look: ▲5M, ▼3M, 0M
                    this.value = formatHeightDiffHudValue(numValue);

                    setHeightDiffClass(this, numValue);

                } else {

                    this.value = '0M';

                    setHeightDiffClass(this, 0);

                }

            }


            if (isAutoCalcEnabled()) {

                if (this.id === 'heightDiff' || this.id === 'heightDiffLite' || this.id === 'redNumber' || this.id === 'redNumberLite' || this.id === 'distance' || this.id === 'distanceLite') {


                    setTimeout(() => {

                        calculate();

                    }, 0);

                }

            }

        }


        syncInputValue(this, [id]);

    };


    allInputs.forEach(input => {

        input.addEventListener('focus', selectAllHandler);

        input.addEventListener('click', selectAllHandler);

        input.addEventListener('blur', ensureNonEmptyHandler);


        input.addEventListener('paste', function(e) {

            e.preventDefault();

            const paste = (e.clipboardData || window.clipboardData).getData('text');


            const isNegative = paste.trim().startsWith('-');


            let cleaned = paste.replace(/[^0-9,.\-]/g, '');


            if (cleaned.includes('-')) {

                cleaned = '-' + cleaned.replace(/-/g, '');

            } else if (isNegative && !cleaned.startsWith('-')) {

                cleaned = '-' + cleaned;

            }


            if (cleaned.includes(',') && cleaned.includes('.')) {


                const firstComma = cleaned.indexOf(',');

                const firstPeriod = cleaned.indexOf('.');

                if (firstComma < firstPeriod) {

                    cleaned = cleaned.replace(/\./g, '');

                } else {

                    cleaned = cleaned.replace(/,/g, '');

                }

            } else if (cleaned.includes(',')) {


                cleaned = cleaned.replace(/,/g, '.');

            }


            const parts = cleaned.split('.');

            if (parts.length > 2) {

                cleaned = parts[0] + '.' + parts.slice(1).join('');

            }


            if (this.id === 'distance' || this.id === 'distanceLite') {

                const numValue = parseFloat(cleaned);

                if (!isNaN(numValue)) {

                    if (numValue < 0) cleaned = '0';

                    else if (numValue > 2500) cleaned = '2500';

                }

            } else if (this.id === 'redNumber' || this.id === 'redNumberLite') {

                const numValue = parseFloat(cleaned);

                if (!isNaN(numValue)) {

                    if (numValue < -356) { cleaned = '-356'; }
                    else if (numValue > 356) { cleaned = '356'; }

                }

            } else if (this.id === 'heightDiff' || this.id === 'heightDiffLite') {

                const numValue = parseFloat(cleaned);

                if (!isNaN(numValue)) {

                    /* no cap on height */

                }

            }


            this.value = cleaned;


            if (isAutoCalcEnabled()) {

                if (this.id === 'heightDiff' || this.id === 'heightDiffLite' || this.id === 'redNumber' || this.id === 'redNumberLite' || this.id === 'distance' || this.id === 'distanceLite') {


                    setTimeout(() => {

                        calculate();

                    }, 0);

                }

            } else {


                if (this.id === 'heightDiff' || this.id === 'heightDiffLite' || this.id === 'redNumber' || this.id === 'redNumberLite' || this.id === 'distance' || this.id === 'distanceLite') {

                    updateDistanceReadout();

                }

            }

        });

    });

});


const distanceInputEl = document.getElementById('distance');

const heightInputEl = document.getElementById('heightDiff');

const redInputEl = document.getElementById('redNumber');

const calcButtonEl = document.getElementById('calculateButton');


function updateTabLoop() {

    const isAuto = isAutoCalcEnabled();


    if (calcButtonEl) {


        calcButtonEl.tabIndex = isAuto ? -1 : 4;

    }

}


function getFocusOrder() {

    const heightDiffToggle = document.getElementById('heightDiffToggle');

    const heightDiffToggleLite = document.getElementById('heightDiffToggleLite');

    const isHeightDiffEnabled = (heightDiffToggle && heightDiffToggle.checked) || (heightDiffToggleLite && heightDiffToggleLite.checked);

    const isManualMode = !isAutoCalcEnabled();


    const order = [];


    function isVisible(el) {

        if (!el) return false;

        if (el.classList.contains('hidden')) return false;

        if (el.style.display === 'none') return false;


        if (el.offsetParent === null) return false;

        return true;

    }


    const allDistInputs = document.querySelectorAll('input#distance, input#distanceLite');

    let distInput = null;

    for (const input of allDistInputs) {

        if (isVisible(input)) {

            distInput = input;

            break;

        }

    }


    const allHeightInputs = document.querySelectorAll('input#heightDiff, input#heightDiffLite');

    let heightInput = null;

    for (const input of allHeightInputs) {

        if (isVisible(input)) {

            heightInput = input;

            break;

        }

    }


    const allRedInputs = document.querySelectorAll('input#redNumber, input#redNumberLite');

    let redInput = null;

    for (const input of allRedInputs) {

        if (isVisible(input)) {

            redInput = input;

            break;

        }

    }


    const calcBtn = document.getElementById('calculateButton');

    const calcBtnLite = document.getElementById('calculateButtonLite');


    if (isVisible(redInput)) order.push(redInput);


    if (isVisible(distInput)) order.push(distInput);


    if (isHeightDiffEnabled && isVisible(heightInput)) {

        order.push(heightInput);

    }


    if (isManualMode && isVisible(calcBtn)) {

        order.push(calcBtn);

    }


    if (isManualMode && isVisible(calcBtnLite)) {

        order.push(calcBtnLite);

    }


    return order;

}


function navigateFocus(e) {


    if (e.key !== 'Enter' && e.key !== 'Tab') return;


    const order = getFocusOrder();

    if (order.length === 0) return;


    const currentIndex = order.indexOf(document.activeElement);

    if (currentIndex === -1) return;


    e.preventDefault();


    const direction = (e.key === 'Tab' && e.shiftKey) ? -1 : 1;

    let nextIndex = currentIndex + direction;


    const isCoarsePointer = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);


    if (!isCoarsePointer) {

        if (nextIndex < 0) nextIndex = order.length - 1;

        if (nextIndex >= order.length) nextIndex = 0;

    } else {


        if (nextIndex < 0) nextIndex = 0;

        if (nextIndex >= order.length) {


            document.activeElement.blur();

            return;

        }

    }


    const currentId = document.activeElement.id;

    if (currentId === 'calculateButton' || currentId === 'calculateButtonLite') {


        calculate();

        saveState();

    } else if ((currentId === 'distance' || currentId === 'distanceLite' || currentId === 'heightDiff' || currentId === 'heightDiffLite' || currentId === 'redNumber' || currentId === 'redNumberLite') && isAutoCalcEnabled()) {


        calculate();

        saveState();

    } else if ((currentId === 'distance' || currentId === 'distanceLite' || currentId === 'heightDiff' || currentId === 'heightDiffLite' || currentId === 'redNumber' || currentId === 'redNumberLite') && !isAutoCalcEnabled()) {


        rollElevationToNumber(0);

        const baseValueEl = document.getElementById('baseValue');

        const heightValueEl = document.getElementById('heightValue');

        const redValueEl = document.getElementById('redValue');

        const redValueUnitEl = document.getElementById('redValueUnit');

        updateDistanceReadout();

        if (heightValueEl) { heightValueEl.textContent = '--'; heightValueEl.className = 'text-gray-300'; }

        if (redValueEl) { redValueEl.textContent = '--'; redValueEl.className = 'text-gray-300'; }

        if (redValueUnitEl) redValueUnitEl.className = 'text-gray-300';

        updateMilLabels();

        saveState();

    }


    const nextEl = order[nextIndex];

    if (nextEl) {

        nextEl.focus();

        if (nextEl.select) nextEl.select();

    }

}


document.querySelectorAll('input#distance, input#distanceLite').forEach(input => {

    input.addEventListener('keydown', navigateFocus);


    input.addEventListener('blur', function() {

        if (isAutoCalcEnabled()) {

            calculate();

        }

    });

});


document.querySelectorAll('input#heightDiff, input#heightDiffLite').forEach(input => {

    input.addEventListener('keydown', navigateFocus);


    input.addEventListener('blur', function() {

        if (isAutoCalcEnabled()) {

            calculate();

        }

    });

});


document.querySelectorAll('input#redNumber, input#redNumberLite').forEach(input => {

    input.addEventListener('keydown', navigateFocus);


    input.addEventListener('blur', function() {

        if (isAutoCalcEnabled()) {

            calculate();

        }

    });

});


if (calcButtonEl) calcButtonEl.addEventListener('keydown', navigateFocus);


const calcButtonLiteEl = document.getElementById('calculateButtonLite');

if (calcButtonLiteEl) calcButtonLiteEl.addEventListener('keydown', navigateFocus);


const INPUT_LIMITS = { distance: [0, 2500], redNumber: [-356, 356], heightDiff: [-1000, 1000] };

function clampTypedValue(input, id) {
    const v = (id === 'heightDiff') ? parseHeightDiff(input.value) : parseFloat(input.value);
    if (!Number.isFinite(v)) return false;
    const limits = INPUT_LIMITS[id];
    let r = Math.round(v);
    if (limits) {
        if (r < limits[0]) r = limits[0];
        else if (r > limits[1]) r = limits[1];
    }
    let display = String(r);
    if (id === 'redNumber') {
        display = formatMilsHudValue(r);
    } else if (id === 'distance') {
        display = formatMetersHudValue(r);
    } else if (id === 'heightDiff') {
        display = formatHeightDiffHudValue(r);
    }
    if (input.value !== display) { input.value = display; return true; }
    return false;
}

function sanitizeTypedValue(input) {
    const raw = input.value;
    // Keep the in-game unit suffixes ("0MIL", "200M", "+5M") intact
    if (/^[+-]?[0-9]*(MIL|M)$/i.test(raw)) {
        return false;
    }
    let cleaned = raw.replace(/[^0-9\-]/g, '');
    if (cleaned.includes('-')) cleaned = '-' + cleaned.replace(/-/g, '');
    if (cleaned !== raw) { input.value = cleaned; return true; }
    return false;
}


function syncInputValue(sourceInput, targetIds) {

    targetIds.forEach(id => {

        document.querySelectorAll('input#' + id + ', input#' + id + 'Lite').forEach(target => {

            if (target !== sourceInput && target.value !== sourceInput.value) {

                target.value = sourceInput.value;

            }

        });

    });

}


['distance', 'heightDiff', 'redNumber'].forEach(id => {

    document.querySelectorAll('input#' + id + ', input#' + id + 'Lite').forEach(input => {

        input.addEventListener('input', function() {
            const sanitized = sanitizeTypedValue(this);
            syncInputValue(this, [id]);
            updateMaxRangeHints();
            if (sanitized && isAutoCalcEnabled()) calculate();
        });
        input.addEventListener('change', function() {
            const clamped = clampTypedValue(this, id);
            if (clamped) {
                syncInputValue(this, [id]);
                updateMaxRangeHints();
                if (isAutoCalcEnabled()) calculate();
            }
        });

    });

});


updateToggleLEDs();


if (autoCalcToggle) {

    autoCalcToggle.addEventListener('change', function() {

        try {

            updateToggleLEDs();

            saveState();

            updateCalculateButton();

            updateTabLoop();


            if (this.checked) {

                calculate();

            } else {


            rollElevationToNumber(0);

            const baseValueEl = document.getElementById('baseValue');

            const heightValueEl = document.getElementById('heightValue');

            const redValueEl = document.getElementById('redValue');

            updateDistanceReadout();


            if (heightValueEl) {

                heightValueEl.textContent = '--';

                heightValueEl.className = 'text-gray-300';

            }

            if (redValueEl) {

                redValueEl.textContent = '--';

                redValueEl.className = 'text-gray-300';

            }

            const redValueUnitEl = document.getElementById('redValueUnit');

            if (redValueUnitEl) {

                redValueUnitEl.className = 'text-gray-300';

            }


            updateMilLabels();

        }

        } catch (error) {

            // Silently ignore - error is already handled gracefully

            updateToggleLEDs();

            syncArmoredToggles();

        }

    });

}


const selectSelected = document.getElementById('selectSelected');

const selectItems = document.getElementById('selectItems');


function toggleDropdown(e) {

    if (e) {

        e.preventDefault();

        e.stopPropagation();

    }

    haptic(HAPTIC_TAP);

    selectItems.classList.toggle('select-hide');

    selectSelected.classList.toggle('select-arrow-active');

}


if (selectSelected) {


    selectSelected.addEventListener('click', toggleDropdown);

    selectSelected.addEventListener('touchstart', toggleDropdown, { passive: false });

}


document.addEventListener('click', function(e) {

    if (!e.target.closest('.custom-select')) {

        selectItems.classList.add('select-hide');

        selectSelected.classList.remove('select-arrow-active');

    }

});


let tankInfoIcon;

let tankInfoModal;

let closeTankInfo;

let tankInfoTitle;

let tankInfoContent;

let fieldManualRestoreTab = null;

let fieldManualViewFaction = null;


const tankScreenshotMap = {

    'US (Sherman M4A3 105)': 'M4A3',

    'Soviet Union (KV-2)': 'KV2',

    'British (Churchill AVRE)': 'AVRE',

    'British (Bishop SP)': 'BISHOP',

    'Germany (Sturmpanzer IV Brummbär)': 'STURMPANZER',

    'DAK (Panzer III Ausf.N)': 'PANZER III'

};


function getTankScreenshots(tankName) {

    const folderName = tankScreenshotMap[tankName];

    if (!folderName) return [];


    const screenshotFiles = {

        'M4A3': [

            'm4a3_1.webp',

            'm4a3_2.webp',

            'm4a3_3.webp',

            'm4a3_4.webp',

            'm4a3_5.webp',

            'm4a3_6.webp',

            'm4a3_7.webp',

            'm4a3_8.webp'

        ],

        'KV2': [

            'kv2_1.webp',

            'kv2_2.webp',

            'kv2_3.webp',

            'kv2_4.webp',

            'kv2_5.webp',

            'kv2_6.webp',

            'kv2_7.webp',

            'kv2_8.webp'

        ],

        'AVRE': [

            'avre_1.webp',

            'avre_2.webp',

            'avre_3.webp',

            'avre_4.webp',

            'avre_5.webp',

            'avre_6.webp',

            'avre_7.webp',

            'avre_8.webp'

        ],

        'BISHOP': [

            'bishop_1.webp',

            'bishop_2.webp',

            'bishop_3.webp',

            'bishop_4.webp',

            'bishop_5.webp',

            'bishop_6.webp',

            'bishop_7.webp',

            'bishop_8.webp'

        ],

        'STURMPANZER': [

            'sturmpanzer_1.webp',

            'sturmpanzer_2.webp',

            'sturmpanzer_3.webp',

            'sturmpanzer_4.webp',

            'sturmpanzer_5.webp',

            'sturmpanzer_6.webp',

            'sturmpanzer_7.webp',

            'sturmpanzer_8.webp'

        ],

        'PANZER III': [

            'panzer3_1.webp',

            'panzer3_2.webp',

            'panzer3_3.webp',

            'panzer3_4.webp',

            'panzer3_5.webp',

            'panzer3_6.webp',

            'panzer3_7.webp',

            'panzer3_8.webp'

        ]

    };


    const files = screenshotFiles[folderName] || [];


    return files.map(file => `images/screenshots/${folderName}/${file}`);

}


function generateScreenshotGallery(tankName) {

    const screenshots = getTankScreenshots(tankName);

    if (screenshots.length === 0) return '';


    const galleryItems = screenshots.map((src, index) => {


        const thumbSrc = src.replace(/\.webp$/, '_thumb.webp');

        const escapedSrc = src.replace(/'/g, "\\'");

        return `

            <div class="screenshot-item" data-src="${escapedSrc}">

                <img src="${thumbSrc}" alt="Screenshot ${index + 1}" loading="lazy" decoding="async">

            </div>

        `;

    }).join('');


    return `

        <div class="info-modal-section">

            <h4>In-Game Screenshots</h4>

            <div class="screenshot-gallery">

                ${galleryItems}

            </div>

        </div>

    `;

}


let currentScreenshotGallery = [];

let currentScreenshotIndex = -1;

let screenshotNavRequestId = 0;

let screenshotActiveSlot = 0;

const SCREENSHOT_MIN_SCALE = 1;

const SCREENSHOT_MAX_SCALE = 4;

let screenshotZoomScale = 1;

let screenshotZoomX = 0;

let screenshotZoomY = 0;

let screenshotGestureActive = false;

let screenshotSuppressClick = false;

let screenshotPinchStartDist = 1;

let screenshotPinchStartScale = 1;

let screenshotPinchStartMid = { x: 0, y: 0 };

let screenshotPinchStartTranslate = { x: 0, y: 0 };

let screenshotPanStart = null;

let screenshotTapStart = null;

let screenshotLastTap = null;

let currentScreenshotCaptions = [];

let screenshotMousePanStart = null;

function getScreenshotLightboxActive() {

    const lightbox = document.getElementById('screenshotLightbox');

    return !!(lightbox && lightbox.classList.contains('active'));

}

function getActiveScreenshotImg() {

    const { imgA, imgB } = getScreenshotLightboxElements();

    return screenshotActiveSlot === 0 ? imgA : imgB;

}

function applyScreenshotZoom() {

    const { lightbox, imgA, imgB } = getScreenshotLightboxElements();

    const active = screenshotActiveSlot === 0 ? imgA : imgB;

    const inactive = screenshotActiveSlot === 0 ? imgB : imgA;

    if (inactive) inactive.style.transform = '';

    if (active) {

        active.style.transform = `translate(${screenshotZoomX}px, ${screenshotZoomY}px) scale(${screenshotZoomScale})`;

    }

    if (lightbox) {

        lightbox.classList.toggle('is-zoomed', screenshotZoomScale > 1.01);

    }

}

function resetScreenshotZoom() {

    screenshotZoomScale = 1;

    screenshotZoomX = 0;

    screenshotZoomY = 0;

    screenshotPanStart = null;

    applyScreenshotZoom();

}

function updateScreenshotCaption(index) {

    const captionEl = document.getElementById('screenshotLightboxCaption');

    if (!captionEl) return;

    const text = currentScreenshotCaptions[index] || '';

    captionEl.textContent = text;

    captionEl.classList.toggle('visible', !!text);

}

function clampScreenshotZoom() {

    const active = getActiveScreenshotImg();

    if (!active) return;

    const maxX = Math.max(0, (active.clientWidth * (screenshotZoomScale - 1)) / 2);

    const maxY = Math.max(0, (active.clientHeight * (screenshotZoomScale - 1)) / 2);

    screenshotZoomX = Math.min(maxX, Math.max(-maxX, screenshotZoomX));

    screenshotZoomY = Math.min(maxY, Math.max(-maxY, screenshotZoomY));

}

function getScreenshotStageCenter() {

    const stage = document.getElementById('screenshotLightboxStage');

    if (!stage) {

        return { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    }

    const rect = stage.getBoundingClientRect();

    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };

}

function getTouchDistance(a, b) {

    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

}

function getTouchMidpoint(a, b) {

    return { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };

}

function toggleScreenshotZoomAt(clientX, clientY) {

    if (screenshotZoomScale > 1.01) {

        resetScreenshotZoom();

        return;

    }

    const target = 2.5;

    const center = getScreenshotStageCenter();

    screenshotZoomScale = target;

    screenshotZoomX = (clientX - center.x) * (1 - target);

    screenshotZoomY = (clientY - center.y) * (1 - target);

    clampScreenshotZoom();

    applyScreenshotZoom();

}

function onScreenshotTouchStart(e) {

    if (!getScreenshotLightboxActive()) return;

    if (e.touches.length === 2) {

        e.preventDefault();

        screenshotGestureActive = true;

        screenshotSuppressClick = true;

        screenshotTapStart = null;

        screenshotPanStart = null;

        screenshotPinchStartDist = getTouchDistance(e.touches[0], e.touches[1]) || 1;

        screenshotPinchStartScale = screenshotZoomScale;

        screenshotPinchStartMid = getTouchMidpoint(e.touches[0], e.touches[1]);

        screenshotPinchStartTranslate = { x: screenshotZoomX, y: screenshotZoomY };

    } else if (e.touches.length === 1) {

        const target = e.target;

        const onControl = target && target.closest && (

            target.closest('.nav-zone-left') ||

            target.closest('.nav-zone-right') ||

            target.closest('.screenshot-lightbox-close')

        );

        screenshotTapStart = onControl ? null : { x: e.touches[0].clientX, y: e.touches[0].clientY };

        if (screenshotZoomScale > 1.01) {

            screenshotPanStart = { x: e.touches[0].clientX, y: e.touches[0].clientY, tx: screenshotZoomX, ty: screenshotZoomY };

        }

    }

}

function onScreenshotTouchMove(e) {

    if (!getScreenshotLightboxActive()) return;

    if (e.touches.length === 2) {

        e.preventDefault();

        screenshotSuppressClick = true;

        screenshotTapStart = null;

        const dist = getTouchDistance(e.touches[0], e.touches[1]);

        const mid = getTouchMidpoint(e.touches[0], e.touches[1]);

        const center = getScreenshotStageCenter();

        let scale = screenshotPinchStartScale * (dist / screenshotPinchStartDist);

        scale = Math.min(SCREENSHOT_MAX_SCALE, Math.max(SCREENSHOT_MIN_SCALE, scale));

        const ratio = scale / screenshotPinchStartScale;

        screenshotZoomScale = scale;

        screenshotZoomX = mid.x - center.x - ratio * (screenshotPinchStartMid.x - center.x - screenshotPinchStartTranslate.x);

        screenshotZoomY = mid.y - center.y - ratio * (screenshotPinchStartMid.y - center.y - screenshotPinchStartTranslate.y);

        clampScreenshotZoom();

        applyScreenshotZoom();

    } else if (e.touches.length === 1 && screenshotPanStart && screenshotZoomScale > 1.01) {

        const dx = e.touches[0].clientX - screenshotPanStart.x;

        const dy = e.touches[0].clientY - screenshotPanStart.y;

        if (Math.hypot(dx, dy) > 8) {

            screenshotTapStart = null;

        }

        e.preventDefault();

        screenshotSuppressClick = true;

        screenshotZoomX = screenshotPanStart.tx + dx;

        screenshotZoomY = screenshotPanStart.ty + dy;

        clampScreenshotZoom();

        applyScreenshotZoom();

    }

}

function onScreenshotTouchEnd(e) {

    if (!getScreenshotLightboxActive()) return;

    if (e.touches.length >= 2) return;

    if (e.touches.length === 1) {

        screenshotPanStart = screenshotZoomScale > 1.01

            ? { x: e.touches[0].clientX, y: e.touches[0].clientY, tx: screenshotZoomX, ty: screenshotZoomY }

            : null;

        return;

    }

    screenshotPanStart = null;

    if (screenshotZoomScale <= 1.01) {

        resetScreenshotZoom();

    } else {

        clampScreenshotZoom();

        applyScreenshotZoom();

    }

    if (screenshotTapStart && !screenshotGestureActive) {

        const now = Date.now();

        if (screenshotLastTap && now - screenshotLastTap.time < 300 &&

            Math.hypot(screenshotTapStart.x - screenshotLastTap.x, screenshotTapStart.y - screenshotLastTap.y) < 40) {

            toggleScreenshotZoomAt(screenshotTapStart.x, screenshotTapStart.y);

            screenshotLastTap = null;

        } else {

            screenshotLastTap = { time: now, x: screenshotTapStart.x, y: screenshotTapStart.y };

        }

    }

    screenshotTapStart = null;

    screenshotGestureActive = false;

    if (screenshotSuppressClick) {

        setTimeout(function() { screenshotSuppressClick = false; }, 350);

    }

}


function getScreenshotLightboxElements() {

    return {

        lightbox: document.getElementById('screenshotLightbox'),

        stage: document.getElementById('screenshotLightboxStage'),

        imgA: document.getElementById('screenshotLightboxImgA'),

        imgB: document.getElementById('screenshotLightboxImgB')

    };

}


function buildScreenshotGalleryFromDOM() {

    const screenshotItems = document.querySelectorAll('.screenshot-item');

    return Array.from(screenshotItems).map(item => {

        return item.getAttribute('data-src') || '';

    }).filter(url => url);

}


function preloadScreenshotByIndex(index) {

    if (!currentScreenshotGallery || currentScreenshotGallery.length === 0) return;

    if (index < 0 || index >= currentScreenshotGallery.length) return;

    const url = currentScreenshotGallery[index];

    if (!url) return;

    const img = new Image();

    img.decoding = 'async';

    img.src = url;

}


async function loadAndDecodeImage(url) {

    if (!url) {

        throw new Error('Missing image URL');

    }

    const tmp = new Image();

    tmp.decoding = 'async';

    tmp.src = url;

    try {

        await tmp.decode();

    } catch (e) {

        await new Promise(resolve => {

            tmp.onload = resolve;

            tmp.onerror = resolve;

        });

        if (!tmp.complete || tmp.naturalWidth === 0) {

            throw e;

        }

    }

    return url;

}


async function showScreenshotAtIndex(index) {

    const { imgA, imgB } = getScreenshotLightboxElements();

    if (!imgA || !imgB) return;

    if (!currentScreenshotGallery || currentScreenshotGallery.length === 0) return;

    if (index < 0 || index >= currentScreenshotGallery.length) return;


    const requestId = ++screenshotNavRequestId;

    const slots = [imgA, imgB];

    const outgoingSlot = screenshotActiveSlot;

    const incomingSlot = outgoingSlot === 0 ? 1 : 0;

    const outgoingImg = slots[outgoingSlot];

    const incomingImg = slots[incomingSlot];

    const item = currentScreenshotGallery[index];


    incomingImg.classList.remove('is-visible');


    let url;

    try {

        url = await loadAndDecodeImage(item);

    } catch (e) {

        return;

    }


    if (requestId !== screenshotNavRequestId) return;


    incomingImg.src = url;

    try {

        if (incomingImg.decode) {

            await incomingImg.decode();

        }

    } catch (e) {

    }


    if (requestId !== screenshotNavRequestId) return;


    incomingImg.classList.add('is-visible');

    outgoingImg.classList.remove('is-visible');

    screenshotActiveSlot = incomingSlot;

    resetScreenshotZoom();

    updateScreenshotCaption(index);


    const nextIndex = (index + 1) % currentScreenshotGallery.length;

    const prevIndex = (index - 1 + currentScreenshotGallery.length) % currentScreenshotGallery.length;

    preloadScreenshotByIndex(nextIndex);

    preloadScreenshotByIndex(prevIndex);

}


function onScreenshotWheel(e) {

    if (!getScreenshotLightboxActive()) return;

    e.preventDefault();

    let delta = e.deltaY;

    if (e.deltaMode === 1) delta *= 16;

    else if (e.deltaMode === 2) delta *= 100;

    const center = getScreenshotStageCenter();

    const oldScale = screenshotZoomScale;

    let scale = oldScale * Math.exp(-delta * 0.0015);

    scale = Math.min(SCREENSHOT_MAX_SCALE, Math.max(SCREENSHOT_MIN_SCALE, scale));

    if (Math.abs(scale - oldScale) < 0.0001) return;

    const ratio = scale / oldScale;

    screenshotZoomScale = scale;

    screenshotZoomX = e.clientX - center.x - ratio * (e.clientX - center.x - screenshotZoomX);

    screenshotZoomY = e.clientY - center.y - ratio * (e.clientY - center.y - screenshotZoomY);

    clampScreenshotZoom();

    applyScreenshotZoom();

}


function onScreenshotMouseDown(e) {

    if (!getScreenshotLightboxActive()) return;

    if (screenshotZoomScale <= 1.01) return;

    if (e.button !== 0) return;

    const target = e.target;

    if (!target || !target.classList || !target.classList.contains('screenshot-lightbox-img')) return;

    e.preventDefault();

    screenshotMousePanStart = { x: e.clientX, y: e.clientY, tx: screenshotZoomX, ty: screenshotZoomY };

    window.addEventListener('mousemove', onScreenshotMouseMove);

    window.addEventListener('mouseup', onScreenshotMouseUp);

}


function onScreenshotMouseMove(e) {

    if (!screenshotMousePanStart) return;

    screenshotZoomX = screenshotMousePanStart.tx + (e.clientX - screenshotMousePanStart.x);

    screenshotZoomY = screenshotMousePanStart.ty + (e.clientY - screenshotMousePanStart.y);

    clampScreenshotZoom();

    applyScreenshotZoom();

}


function onScreenshotMouseUp() {

    screenshotMousePanStart = null;

    window.removeEventListener('mousemove', onScreenshotMouseMove);

    window.removeEventListener('mouseup', onScreenshotMouseUp);

}


function openLightboxWithGallery(gallery, index, captions, plainColors) {
    const { lightbox, imgA, imgB } = getScreenshotLightboxElements();

    if (!lightbox || !imgA || !imgB) return;

    if (!gallery || gallery.length === 0) return;

    lightbox.classList.toggle('no-filter', !!plainColors);

    currentScreenshotGallery = gallery.slice();

    currentScreenshotCaptions = Array.isArray(captions) ? captions.slice() : [];

    currentScreenshotIndex = Math.min(Math.max(0, index | 0), gallery.length - 1);

    imgA.classList.remove('is-visible');

    imgB.classList.remove('is-visible');

    imgA.removeAttribute('src');

    imgB.removeAttribute('src');

    screenshotActiveSlot = 0;

    resetScreenshotZoom();

    screenshotNavRequestId++;

    lightbox.classList.add('active');

    showScreenshotAtIndex(currentScreenshotIndex);

}


window.openImageLightbox = function(urls, index, captions) {

    if (!Array.isArray(urls) || urls.length === 0) return;

    openLightboxWithGallery(urls, index, captions, true);

};


window.openScreenshotLightbox = function(src) {

    const gallery = buildScreenshotGalleryFromDOM();

    if (!gallery || gallery.length === 0) return;

    const screenshotItems = Array.from(document.querySelectorAll('.screenshot-item'));

    const clickedItem = screenshotItems.find(item =>

        item.getAttribute('data-src') === src

    );

    const index = clickedItem ? screenshotItems.indexOf(clickedItem) : 0;

    openLightboxWithGallery(gallery, index);

};


window.navigateScreenshot = function(direction) {

    if (currentScreenshotGallery.length === 0) return;


    currentScreenshotIndex += direction;


    if (currentScreenshotIndex < 0) {

        currentScreenshotIndex = currentScreenshotGallery.length - 1;

    } else if (currentScreenshotIndex >= currentScreenshotGallery.length) {

        currentScreenshotIndex = 0;

    }


    showScreenshotAtIndex(currentScreenshotIndex);

};


window.closeScreenshotLightbox = function() {

    const lightbox = document.getElementById('screenshotLightbox');

    if (lightbox) {

        lightbox.classList.remove('active');

        lightbox.classList.remove('no-filter');

    }

    resetScreenshotZoom();

    const captionEl = document.getElementById('screenshotLightboxCaption');

    if (captionEl) captionEl.classList.remove('visible');


    screenshotNavRequestId++;

    const { imgA, imgB } = getScreenshotLightboxElements();

    if (imgA) imgA.classList.remove('is-visible');

    if (imgB) imgB.classList.remove('is-visible');

};


document.addEventListener('keydown', function(e) {

    const lightbox = document.getElementById('screenshotLightbox');

    if (lightbox && lightbox.classList.contains('active')) {

        if (e.key === 'Escape') {

            closeScreenshotLightbox();

        } else if (e.key === 'ArrowLeft') {

            navigateScreenshot(-1);

        } else if (e.key === 'ArrowRight') {

            navigateScreenshot(1);

        }

    }

});


function renderHistoryFigures(images) {

    const list = Array.isArray(images) ? images : (images ? [images] : []);

    const items = list.filter(img => img && img.src);

    if (items.length === 0) return '';

    return items.map(img => {

        const alt = (img.caption || 'Historical photograph').replace(/"/g, '&quot;');

        return `<figure class="history-figure"><img src="${img.src}" alt="${alt}" loading="lazy" decoding="async">${img.caption ? `<figcaption>${img.caption}</figcaption>` : ''}</figure>`;

    }).join('');

}


function buildFieldManualTankMenu() {

    const menu = document.getElementById('tankInfoTankMenu');

    if (!menu) return;

    const factionInput = document.getElementById('faction');

    const current = fieldManualViewFaction || (factionInput ? factionInput.value : '');

    menu.innerHTML = tankData.map(tank => `

        <div class="tank-option${tank.value === current ? ' active' : ''}" data-value="${tank.value}" role="option" aria-selected="${tank.value === current ? 'true' : 'false'}">

            ${flagImgTag(tank.flag, tank.flagAlt, 'lazy')}

            <span>${tank.shortName}</span>

        </div>

    `).join('');

    menu.querySelectorAll('.tank-option').forEach(option => {

        option.addEventListener('click', function(e) {

            e.stopPropagation();

            selectFieldManualTank(this.getAttribute('data-value'));

        });

    });

}


function closeFieldManualTankMenu() {

    const menu = document.getElementById('tankInfoTankMenu');

    const title = document.getElementById('tankInfoTitle');

    const wrap = document.getElementById('tankInfoTankSelect');

    if (menu) menu.classList.remove('open');

    if (wrap) wrap.classList.remove('open');

    if (title) title.setAttribute('aria-expanded', 'false');

}


function toggleFieldManualTankMenu(e) {

    if (e) {

        e.preventDefault();

        e.stopPropagation();

    }

    const menu = document.getElementById('tankInfoTankMenu');

    const title = document.getElementById('tankInfoTitle');

    if (!menu) return;

    const willOpen = !menu.classList.contains('open');

    buildFieldManualTankMenu();

    menu.classList.toggle('open', willOpen);

    const wrap = document.getElementById('tankInfoTankSelect');

    if (wrap) wrap.classList.toggle('open', willOpen);

    if (title) title.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

}


function selectFieldManualTank(value) {

    closeFieldManualTankMenu();

    if (!tankInfo[value]) return;

    if (fieldManualViewFaction === value) return;

    const activeTabBtn = document.querySelector('.info-modal-tabs .info-modal-tab.active');

    fieldManualRestoreTab = activeTabBtn ? activeTabBtn.getAttribute('data-tab') : 'stats';

    // View only: render this tank's manual WITHOUT changing the active/playing tank.

    showTankInfo(value);

}


function showTankInfo(factionOverride) {

    const faction = factionOverride || document.getElementById('faction').value;

    const info = tankInfo[faction];

    fieldManualViewFaction = faction;


    if (info) {

        tankInfoTitle.textContent = info.title;


        function formatAmmo(text) {

            if (text.includes(' × ') || text.includes('×') || text.includes('/')) {


                return text.replace(/(\d+)\s*[×/]\s*(\d+)/g, '$1 rounds × $2 magazines');

            }

            return text;

        }


        const screenshotGallery = generateScreenshotGallery(faction);


        function collectImagePaths(info) {

            const imagePaths = new Set();


            if (info.stats.mainGun) {

                const parts = info.stats.mainGun.split(' - ');

                if (parts.length === 2) {

                    const ammoText = parts[1];

                    const ammoMatches = ammoText.match(/(\d+)\s*(HEAT|HE|SMOKE|AP|FLYING DUSTBIN)\s*rounds/g);

                    if (ammoMatches) {

                        ammoMatches.forEach(m => {

                            const match = m.match(/(\d+)\s*(HEAT|HE|SMOKE|AP|FLYING DUSTBIN)/);

                            if (match) {

                                const type = match[2];
                                const ammoIconMap = {
                                    HE: 'HE_invert_28.webp',
                                    SMOKE: 'SMOKE_invert_28.webp',
                                    AP: 'AP_invert_28.webp',
                                    HEAT: 'AP_invert_28.webp',
                                    'FLYING DUSTBIN': 'HE_invert_28.webp'
                                };

                                imagePaths.add(`images/UI/Icons/vehicles/${ammoIconMap[type] || 'T_HUD_Status_Ammo_invert_28.webp'}`);

                            }

                        });

                    }

                }

            }


            if (info.stats.coaxial && !info.stats.coaxial.includes('NO')) {

                imagePaths.add('images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.webp');

            }

            if (info.stats.hullGun && !info.stats.hullGun.includes('NO')) {

                imagePaths.add('images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.webp');

            }


            if (info.historyImages) {

                ['background', 'range', 'production', 'service'].forEach(key => {

                    const value = info.historyImages[key];

                    const list = Array.isArray(value) ? value : (value ? [value] : []);

                    list.forEach(img => {

                        if (img && img.src) imagePaths.add(img.src);

                    });

                });

            }


            return Array.from(imagePaths);

        }


        function preloadImages(imagePaths) {

            return Promise.all(imagePaths.map(path => {

                return new Promise((resolve, reject) => {

                    const img = new Image();

                    img.onload = resolve;

                    img.onerror = resolve;

                    img.src = path;

                });

            }));

        }


        function formatMainGun(text) {


            const parts = text.split(' - ');

            if (parts.length === 2) {

                const gunName = parts[0];

                const ammoText = parts[1];


                const ammoItems = [];

                const ammoMatches = ammoText.match(/(\d+)\s*(HEAT|HE|SMOKE|AP|FLYING DUSTBIN)\s*rounds/g);

                if (ammoMatches) {

                    ammoMatches.forEach(m => {

                        const match = m.match(/(\d+)\s*(HEAT|HE|SMOKE|AP|FLYING DUSTBIN)/);

                        if (match) {

                            const count = match[1];

                            const type = match[2];


                            const ammoIconMap = {
                                HE: 'HE_invert_28.webp',
                                SMOKE: 'SMOKE_invert_28.webp',
                                AP: 'AP_invert_28.webp',
                                HEAT: 'AP_invert_28.webp',
                                'FLYING DUSTBIN': 'HE_invert_28.webp'
                            };
                            const imagePath = `images/UI/Icons/vehicles/${ammoIconMap[type] || 'T_HUD_Status_Ammo_invert_28.webp'}`;


                            ammoItems.push(`<span style="display: inline-flex; align-items: center; gap: 3px; margin-right: 8px;"><img src="${imagePath}" alt="${type}" style="width: 16px; height: 16px; object-fit: contain;" loading="eager" decoding="async"><span class="highlight-number">${count}</span> <span class="highlight-number">${type}</span></span>`);

                        }

                    });

                }


                const ammoBox = ammoItems.length > 0 

                    ? `<span class="ammo-box">${ammoItems.join('')}</span>`

                    : '';

                return `<span class="highlight-number" style="margin-right: 14px;">${gunName}</span>${ammoBox}`;

            }

            return `<span class="highlight-number">${text}</span>`;

        }


        function formatElevation(text) {

            return `<span class="highlight-number">${text}</span>`;

        }


        function formatTurretRotation(text) {

            return `<span class="highlight-number">${text}</span>`;

        }


        function formatTopSpeed(text) {

            return `<span class="highlight-number">${text}</span>`;

        }


// Pitch angle display: degrees stay highlighted, trailing "(xxx MIL)" is muted
function formatPitchAngle(value) {
    if (!value) return '';
    const m = /^(.*?)\s*(\([^)]*\))$/.exec(value);
    if (!m) return `<span class="highlight-number">${value}</span>`;
    return `<span class="highlight-number">${m[1]}</span> <span style="color: #000000;">${m[2]}</span>`;
}


        function formatNumericValue(value) {

            if (!value) return '';

            return `<span class="highlight-number">${value}</span>`;

        }


        function formatGunAmmo(text) {

            if (text.includes('NO') || text.includes('NO ')) {

                return `<span class="no-weapon-marked">${text}</span>`;

            }


            const parts = text.split(' - ');

            if (parts.length === 2) {

                const gunName = parts[0];

                const ammoText = parts[1];


                const ammoMatch = ammoText.match(/(\d+)\s*rounds\s*[×x]\s*(\d+)\s*magazines/i);

                if (ammoMatch) {

                    const rounds = ammoMatch[1];

                    const magazines = ammoMatch[2];

                    const imagePath = 'images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.webp';

                    return `<span class="highlight-number" style="margin-right: 14px;">${gunName}</span><span class="ammo-box"><img src="${imagePath}" alt="Ammo" style="width: 16px; height: 16px; object-fit: contain;" loading="eager" decoding="async"><span class="highlight-number">${rounds}</span> rounds × <span class="highlight-number">${magazines}</span> magazines</span>`;

                }

            }


            return `<span class="highlight-number">${text}</span>`;

        }


        const statsContent = `

            <div class="info-tab-content active" id="tab-stats">

                <div class="field-manual-specs">

                    <div class="spec-header">

                        <div class="spec-title">VEHICLE STATS</div>

                        <div class="spec-subtitle"><span>Operational Data</span><span class="spec-updated">Updated ${HLL_VERSION.statsUpdated}</span></div>

                    </div>


                    <div class="spec-table">

                        <div class="spec-row">

                            <div class="spec-label">PRIMARY ARMAMENT:</div>

                            <div class="spec-value">${formatMainGun(info.stats.mainGun)}</div>

                        </div>

                        <div class="spec-row">

                            <div class="spec-label">ELEVATION RANGE:</div>

                            <div class="spec-value">${formatElevation(info.stats.elevation)}</div>

                        </div>

                        <div class="spec-row">

                            <div class="spec-label">TURRET ROTATION:</div>

                            <div class="spec-value">${formatTurretRotation(info.stats.turretRotation)}</div>

                        </div>

                        <div class="spec-row weapon-row ${(info.stats.coaxial && (info.stats.coaxial.includes('NO') || info.stats.coaxial.includes('NO '))) ? 'no-weapon-row' : ''}">

                            <div class="spec-label">COAXIAL WEAPON:</div>

                            <div class="spec-value">${formatGunAmmo(formatAmmo(info.stats.coaxial))}</div>

                        </div>

                        <div class="spec-row weapon-row ${(info.stats.hullGun && (info.stats.hullGun.includes('NO') || info.stats.hullGun.includes('NO '))) ? 'no-weapon-row' : ''}">

                            <div class="spec-label">HULL MACHINE GUN:</div>

                            <div class="spec-value">${formatGunAmmo(formatAmmo(info.stats.hullGun))}</div>

                        </div>

                        <div class="spec-row">

                            <div class="spec-label">MAXIMUM SPEED:</div>

                            <div class="spec-value">${formatTopSpeed(info.stats.topSpeed)}</div>

                        </div>

                        ${info.stats.yawRate ? `

                        <div class="spec-row">

                            <div class="spec-label">YAW RATE:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.yawRate)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.pitchRate ? `

                        <div class="spec-row">

                            <div class="spec-label">PITCH RATE:</div>

                            <div class="spec-value">${formatPitchAngle(info.stats.pitchRate)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.pitchAngleMin && info.stats.pitchAngleMax ? `

                        <div class="spec-row">

                            <div class="spec-label">PITCH ANGLE RANGE:</div>

                            <div class="spec-value">${formatPitchAngle(info.stats.pitchAngleMin)} <span style="color: #000000;">to</span> ${formatPitchAngle(info.stats.pitchAngleMax)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.hullHealth ? `

                        <div class="spec-row">

                            <div class="spec-label">HULL HEALTH:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.hullHealth)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.turretHealth ? `

                        <div class="spec-row">

                            <div class="spec-label">TURRET HEALTH:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.turretHealth)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.mobilityHealth ? `

                        <div class="spec-row">

                            <div class="spec-label">MOBILITY HEALTH:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.mobilityHealth)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.engineBlockHealth ? `

                        <div class="spec-row">

                            <div class="spec-label">ENGINE BLOCK HEALTH:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.engineBlockHealth)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.gearSwitchTime ? `

                        <div class="spec-row">

                            <div class="spec-label">GEAR SWITCH TIME:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.gearSwitchTime)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.reloadSpeed ? `

                        <div class="spec-row">

                            <div class="spec-label">RELOAD SPEED:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.reloadSpeed)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.maxClipsAP || info.stats.maxClipsHE || info.stats.maxClipsSmoke ? `

                        <div class="spec-row">

                            <div class="spec-label">MAX CLIPS:</div>

                            <div class="spec-value">${[info.stats.maxClipsAP ? `<span style="color: #000000;">AP:</span> ${formatNumericValue(info.stats.maxClipsAP)}` : '', info.stats.maxClipsHE ? `<span style="color: #000000;">HE:</span> ${formatNumericValue(info.stats.maxClipsHE)}` : '', info.stats.maxClipsSmoke ? `<span style="color: #000000;">SMOKE:</span> ${formatNumericValue(info.stats.maxClipsSmoke)}` : ''].filter(Boolean).join(', ')}</div>

                        </div>

                        ` : ''}

                        ${info.stats.apDamage ? `

                        <div class="spec-row">

                            <div class="spec-label">AP DAMAGE:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.apDamage)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.apDirectArmor ? `

                        <div class="spec-row">

                            <div class="spec-label">AP DIRECT ARMOR:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.apDirectArmor)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.heDamage ? `

                        <div class="spec-row">

                            <div class="spec-label">HE DAMAGE:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.heDamage)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.heDirectArmor ? `

                        <div class="spec-row">

                            <div class="spec-label">HE DIRECT ARMOR:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.heDirectArmor)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.heExplosionArmor ? `

                        <div class="spec-row">

                            <div class="spec-label">HE EXPLOSION ARMOR:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.heExplosionArmor)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.heDamageRadius ? `

                        <div class="spec-row">

                            <div class="spec-label">HE DAMAGE RADIUS:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.heDamageRadius)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.munitionsCost ? `

                        <div class="spec-row">

                            <div class="spec-label">MUNITIONS COST:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.munitionsCost)}</div>

                        </div>

                        ` : ''}

                    </div>


                    <div class="field-manual-footer">

                        <div class="footer-line">────────────────────────────────────────</div>

                        <div class="footer-stamp">VERIFIED: ██/██/1944</div>

                    </div>

                </div>

            </div>

        `;


        const screenshotsContent = `

            <div class="info-tab-content" id="tab-screenshots">

                ${screenshotGallery || '<div class="info-modal-section"><p>No screenshots available for this tank.</p></div>'}

            </div>

        `;


        const historyContent = `

            <div class="info-tab-content" id="tab-history">

                <div class="info-modal-section">

                    <h4>Background</h4>

                    ${renderHistoryFigures(info.historyImages && info.historyImages.background)}

                    <p>${info.history}</p>

                </div>

                <div class="info-modal-section">

                    <h4>Range</h4>

                    ${renderHistoryFigures(info.historyImages && info.historyImages.range)}

                    <p>${info.realLife.range}</p>

                </div>

                <div class="info-modal-section">

                    <h4>Production</h4>

                    ${renderHistoryFigures(info.historyImages && info.historyImages.production)}

                    <p>${info.realLife.production}</p>

                </div>

                <div class="info-modal-section">

                    <h4>Service</h4>

                    ${renderHistoryFigures(info.historyImages && info.historyImages.service)}

                    <p>${info.realLife.service}</p>

                </div>

                <div class="info-modal-section">

                    <h4>Strengths & Weaknesses</h4>

                    ${info.realLife.strengths && info.realLife.strengths.length > 0 ? `

                        <div class="typewriter-note typewriter-excelled" style="margin-bottom: 16px; margin-top: 12px;">

                            <div class="typewriter-label">WHERE IT EXCELLED:</div>

                            <ul class="typewriter-list">

                                ${info.realLife.strengths.map(strength => `<li>${strength}</li>`).join('')}

                            </ul>

                        </div>

                    ` : ''}

                    ${info.realLife.weaknesses && info.realLife.weaknesses.length > 0 ? `

                        <div class="typewriter-note typewriter-struggled">

                            <div class="typewriter-label">WHERE IT STRUGGLED:</div>

                            <ul class="typewriter-list">

                                ${info.realLife.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}

                            </ul>

                        </div>

                    ` : ''}

                </div>

            </div>

        `;


        const imagePaths = collectImagePaths(info);


        preloadImages(imagePaths).then(() => {

            tankInfoContent.innerHTML = statsContent + screenshotsContent + historyContent;

            tankInfoModal.style.display = 'block';

            tankInfoModal.setAttribute('data-open', 'true');


            document.body.style.overflow = 'hidden';


            if (tankInfoIcon) {

                tankInfoIcon.classList.add('extended');

            }


            const targetTab = fieldManualRestoreTab || 'stats';

            fieldManualRestoreTab = null;

            const tabContainer = document.querySelector('.info-modal-tabs');

            if (tabContainer) {


                tabContainer.querySelectorAll('.info-modal-tab').forEach(btn => btn.classList.remove('active'));


                const activeTab = tabContainer.querySelector('[data-tab="' + targetTab + '"]');

                if (activeTab) {

                    activeTab.classList.add('active');

                }

            }


            const modalContent = document.querySelector('.info-modal-content');

            if (modalContent) {

                modalContent.querySelectorAll('.info-tab-content').forEach(content => content.classList.remove('active'));

                const activeTabContent = modalContent.querySelector('#tab-' + targetTab);

                if (activeTabContent) {

                    activeTabContent.classList.add('active');

                }

            }


            const screenshotItems = tankInfoContent.querySelectorAll('.screenshot-item');

            screenshotItems.forEach(item => {

                item.addEventListener('click', function(e) {

                    e.stopPropagation();

                    const src = this.getAttribute('data-src');

                    const webpSrc = this.getAttribute('data-src-webp');

                    openScreenshotLightbox(webpSrc || src);

                });

            });


            const historyFigureImgs = tankInfoContent.querySelectorAll('#tab-history .history-figure img');

            historyFigureImgs.forEach(img => {

                img.addEventListener('click', function(e) {

                    e.stopPropagation();

                    const all = Array.from(tankInfoContent.querySelectorAll('#tab-history .history-figure img'));

                    const urls = all.map(i => i.getAttribute('src')).filter(Boolean);

                    const captions = all.map(i => {

                        const fig = i.closest('.history-figure');

                        const cap = fig ? fig.querySelector('figcaption') : null;

                        return cap ? cap.textContent.trim() : '';

                    });

                    openImageLightbox(urls, all.indexOf(img), captions);

                });

            });

        });

    }

}


function toggleTankSpecs() {

    const specsPanel = document.getElementById('milRangeText');

    const toggleBtn = document.getElementById('tankSpecsToggle');

    
    if (!specsPanel || !toggleBtn) {

        return;

    }

    
    const isCollapsed = specsPanel.classList.contains('tank-specs-collapsed');

    specsPanel.classList.toggle('tank-specs-collapsed');

    toggleBtn.classList.toggle('collapsed', !isCollapsed);

}


// Tab switching functionality (using event delegation)

document.addEventListener('click', function(e) {

    if (e.target.classList.contains('info-modal-tab')) {

        haptic(HAPTIC_TAP);

        const clickedTab = e.target;

        const tabContainer = clickedTab.closest('.info-modal-tabs');

        const modalContent = clickedTab.closest('.info-modal-content');


        if (tabContainer && modalContent) {

// Remove active class from all tabs

            tabContainer.querySelectorAll('.info-modal-tab').forEach(btn => btn.classList.remove('active'));


            modalContent.querySelectorAll('.info-tab-content').forEach(content => content.classList.remove('active'));


            clickedTab.classList.add('active');


            const tabName = clickedTab.getAttribute('data-tab');

            const content = modalContent.querySelector(`#tab-${tabName}`);

            if (content) {

                content.classList.add('active');

            }

        }

    }

});


function closeTankInfoModal() {

    haptic(HAPTIC_TAP);

    if (tankInfoModal) {

        tankInfoModal.style.display = 'none';

        tankInfoModal.removeAttribute('data-open');

    }


    document.body.style.overflow = '';


    if (tankInfoIcon) {

        tankInfoIcon.classList.remove('extended');

    }

}


document.addEventListener('keydown', function(e) {


    if (e.key !== 'Escape' && e.key !== 'Esc' && e.keyCode !== 27) {

        return;

    }


    const screenshotLightboxEl = document.getElementById('screenshotLightbox');

    if (screenshotLightboxEl && screenshotLightboxEl.classList.contains('active')) {

        // Let the screenshot viewer handle Escape itself (it is on top of the modal)

        return;

    }


    const tankMenuEl = document.getElementById('tankInfoTankMenu');

    if (tankMenuEl && tankMenuEl.classList.contains('open')) {

        // Close the Field Manual tank switcher first, not the whole modal

        closeFieldManualTankMenu();

        e.preventDefault();

        e.stopImmediatePropagation();

        return;

    }


    if (tankInfoModal) {

        const isOpenByStyle = tankInfoModal.style.display === 'block';

        const isOpenByData = tankInfoModal.getAttribute('data-open') === 'true';

        const isOpenByComputed = window.getComputedStyle(tankInfoModal).display === 'block';

        const isOpenByClass = tankInfoIcon && tankInfoIcon.classList.contains('extended');


        if (isOpenByStyle || isOpenByData || isOpenByComputed || isOpenByClass) {

            closeTankInfoModal();

            e.preventDefault();

            e.stopImmediatePropagation();

            return false;

        }

    }


}, true);


// ==========================================

// EVENT LISTENER WIRING

// ==========================================


function wireUpEventListeners() {


    generateTankDropdown();


    generateLiteTankDropdown();


    tankInfoIcon = document.getElementById('tankInfoIcon');

    tankInfoModal = document.getElementById('tankInfoModal');

    closeTankInfo = document.getElementById('closeTankInfo');

    tankInfoTitle = document.getElementById('tankInfoTitle');

    tankInfoContent = document.getElementById('tankInfoContent');


    if (tankInfoTitle) {

        tankInfoTitle.addEventListener('keydown', function(e) {

            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {

                toggleFieldManualTankMenu(e);

            } else if (e.key === 'Escape') {

                closeFieldManualTankMenu();

            }

        });

    }

    const tankSelectEl = document.getElementById('tankInfoTankSelect');

    if (tankSelectEl) {

        // whole title row (name + caret) is the click target, not just the text

        tankSelectEl.addEventListener('click', toggleFieldManualTankMenu);

    }

    document.addEventListener('click', function(e) {

        const menu = document.getElementById('tankInfoTankMenu');

        if (!menu || !menu.classList.contains('open')) return;

        if (e.target && e.target.closest && e.target.closest('#tankInfoTankSelect')) return;

        closeFieldManualTankMenu();

    });

    document.addEventListener('keydown', function(e) {

        if (e.key === 'Escape') closeFieldManualTankMenu();

    });


    const moreProjectsBtn = document.getElementById('moreProjectsBtn');

    const moreProjectsBox = document.getElementById('moreProjectsBox');

    const closeMoreProjects = document.getElementById('closeMoreProjects');


    if (moreProjectsBtn && moreProjectsBox && closeMoreProjects) {

        moreProjectsBtn.addEventListener('click', function(e) {

            e.stopPropagation();

            e.preventDefault();

            moreProjectsBox.classList.remove('hidden');

            moreProjectsBox.style.display = 'block';

            moreProjectsBtn.classList.add('extended');


            document.body.style.overflow = 'hidden';

        });


        closeMoreProjects.addEventListener('click', function(e) {

            e.stopPropagation();

            e.preventDefault();

            haptic(HAPTIC_TAP);

            moreProjectsBox.classList.add('hidden');

            moreProjectsBox.style.display = 'none';

            moreProjectsBtn.classList.remove('extended');


            document.body.style.overflow = '';

        });


        document.addEventListener('click', function(e) {

            if (e.target === moreProjectsBox) {

                moreProjectsBox.classList.add('hidden');

                moreProjectsBox.style.display = 'none';

                moreProjectsBtn.classList.remove('extended');


                document.body.style.overflow = '';

            }

        });

    }


    const mobileHllToolsBtn = document.getElementById('mobileHllToolsBtn');

    if (mobileHllToolsBtn && moreProjectsBox && closeMoreProjects) {

        mobileHllToolsBtn.addEventListener('click', function(e) {

            e.stopPropagation();

            e.preventDefault();

            haptic(HAPTIC_TAP);

            moreProjectsBox.classList.remove('hidden');

            moreProjectsBox.style.display = 'block';


            document.body.style.overflow = 'hidden';

        });

    }


    if (tankInfoIcon) {

        tankInfoIcon.addEventListener('click', function(e) {

            e.stopPropagation();

            e.preventDefault();


            const selectItems = document.getElementById('selectItems');

            const selectSelected = document.getElementById('selectSelected');

            if (selectItems) selectItems.classList.add('select-hide');

            if (selectSelected) selectSelected.classList.remove('select-arrow-active');

            haptic(HAPTIC_TAP);

            showTankInfo();

        });

    }


    if (closeTankInfo) {

        closeTankInfo.addEventListener('click', closeTankInfoModal);

    }


    window.addEventListener('click', function(e) {

        if (e.target === tankInfoModal) {

            closeTankInfoModal();

        }

    });


    const viewToggle = document.getElementById('viewToggle');

    if (viewToggle) {

        const togglePills = viewToggle.querySelectorAll('.toggle-pill');


        const positionViewHighlight = function() {

            const active = viewToggle.querySelector('.toggle-pill.active');

            if (!active) return;

            viewToggle.style.setProperty('--hl-left', active.offsetLeft + 'px');

            viewToggle.style.setProperty('--hl-width', active.offsetWidth + 'px');

        };

        window.addEventListener('resize', positionViewHighlight);

        togglePills.forEach(pill => {

            pill.addEventListener('click', function(e) {

                e.preventDefault();

                const mode = this.getAttribute('data-mode');

                switchViewMode(mode);

                
                togglePills.forEach(p => {

                    p.classList.remove('active');

                    p.setAttribute('aria-selected', 'false');

                });

                this.classList.add('active');

                this.setAttribute('aria-selected', 'true');

                
                viewToggle.classList.remove('full-active', 'lite-active', 'keypad-active');

                viewToggle.classList.add(mode === 'full' ? 'full-active' : (mode === 'lite' ? 'lite-active' : 'keypad-active'));

                positionViewHighlight();

            });

        });


        try {

            const savedMode = localStorage.getItem('hll-calculator-mode');

            if ((savedMode === 'lite' || savedMode === 'full' || savedMode === 'keypad') && document.body.getAttribute('data-mode') !== savedMode) {

                switchViewMode(savedMode);

                togglePills.forEach(p => {

                    const active = p.getAttribute('data-mode') === savedMode;

                    p.classList.toggle('active', active);

                    p.setAttribute('aria-selected', active ? 'true' : 'false');

                });

                viewToggle.classList.remove('full-active', 'lite-active', 'keypad-active');

                viewToggle.classList.add(savedMode === 'full' ? 'full-active' : (savedMode === 'lite' ? 'lite-active' : 'keypad-active'));

            }

        } catch (e) {


        }

        positionViewHighlight();

    }


    // 1. Wire up the Calculate Button


    function isTouchDevice() {

        return (('ontouchstart' in window) ||

            (navigator.maxTouchPoints > 0) ||

            (navigator.msMaxTouchPoints > 0));

    }


    const calcBtn = document.getElementById('calculateButton');

    if (calcBtn) {

        let touchTriggered = false;


        calcBtn.addEventListener('touchstart', function(e) {

            touchTriggered = false;

            calcBtn.classList.add('holding');


            haptic(HAPTIC_TAP);

        }, { passive: true });


        calcBtn.addEventListener('touchend', function(e) {

            calcBtn.classList.remove('holding');

            touchTriggered = true;


            haptic(HAPTIC_CALC);


            calculate();

        });


        calcBtn.addEventListener('touchcancel', function(e) {

            calcBtn.classList.remove('holding');

        });


        calcBtn.addEventListener('click', function(e) {


            if (touchTriggered) {

                touchTriggered = false;

                e.preventDefault();

                e.stopPropagation();

                return;

            }

            e.preventDefault();

            calculate();

        });

    }


    // 2. Wire up Copy and Reset Buttons

    const copyBtn = document.querySelector('.copy-result-button');

    if (copyBtn) {

        // A single 'click' handler works for both mouse and touch. A tap that

        // becomes a scroll fires no 'click', so this is reliable on mobile - the

        // old touchend + ghost-click guard could miss taps and skip the haptic.

        copyBtn.addEventListener('click', function(e) {

            e.preventDefault();

            e.stopPropagation();

            haptic(HAPTIC_TAP);

            copyResult(this);

        });

    }


    const resetBtn = document.querySelector('.reset-result-button');

    if (resetBtn) {

        // Single 'click' handler for mouse and touch (no ghost-click guard).

        resetBtn.addEventListener('click', function(e) {

            e.preventDefault();

            e.stopPropagation();

            haptic(HAPTIC_TAP);

            resetCalculator(this);

        });

    }


    // 3. Wire up the Plus/Minus Buttons for all inputs


    function wireButton(inputId, delta) {


        const allInputs = document.querySelectorAll(`input[id="${inputId}"], input[id="${inputId}Lite"]`);

        allInputs.forEach(input => {

            const btn = delta < 0 ? input.previousElementSibling : input.nextElementSibling;

            if (btn && btn.tagName === 'BUTTON') {

                if (isTouchPrimaryDevice()) {


                    btn.title = delta < 0 ? 'Click -1' : 'Click +1';

                } else if (delta < 0) {

                    btn.title = 'Click -1 · Hold Shift for -5 · Hold Ctrl for -25';

                } else {

                    btn.title = 'Click +1 · Hold Shift for +5 · Hold Ctrl for +25';

                }

                // The +/- step is applied in a single 'click' handler below, which

                // works for both mouse and touch. The old touch/mouse handlers with

                // ghost-click guards could swallow taps on mobile.


                btn.addEventListener('touchstart', function() {

                    btn.classList.add('holding');

                }, { passive: true });


                btn.addEventListener('touchend', function() {

                    btn.classList.remove('holding');

                }, { passive: true });


                btn.addEventListener('touchcancel', function() {

                    btn.classList.remove('holding');

                });


                btn.addEventListener('mousedown', function(e) {

                    if (e.button === 0) btn.classList.add('holding');

                });


                btn.addEventListener('mouseup', function() {

                    btn.classList.remove('holding');

                });


                btn.addEventListener('mouseleave', function() {

                    btn.classList.remove('holding');

                });


                btn.addEventListener('click', function(e) {

                    e.preventDefault();


                    haptic(HAPTIC_STEP);


                    let step = 1;

                    if (e.ctrlKey || e.metaKey) {

                        step = 25;

                    } else if (e.shiftKey) {

                        step = 5;

                    }

                    adjustValue(inputId, delta * step);

                    showQuickstepToast();

                });

            }

        });

    }

    
    ['distance', 'heightDiff', 'redNumber'].forEach(id => {

        wireButton(id, -1);

        wireButton(id, 1);

    });


    // 4. Wire up the Armored Toggles (Auto Calc & Height Diff)

    const toggleConfig = [

        { 

            checkboxId: 'autoCalcToggle', 

            triggerIds: ['armoredAutoToggle'] 

        },

        { 

            checkboxId: 'heightDiffToggle', 

            triggerIds: ['armoredHeightDiffToggle'] 

        }

    ];


    toggleConfig.forEach(config => {

        const checkbox = document.getElementById(config.checkboxId);

        if (checkbox) {

            config.triggerIds.forEach(triggerId => {

                const element = document.getElementById(triggerId);

                if (element) {

                    const newElement = element.cloneNode(true);

                    element.parentNode.replaceChild(newElement, element);


                    let touchStartTime = 0;

                    let touchStartY = 0;

                    let touchHandled = false;


                    newElement.addEventListener('touchstart', function(e) {

                        touchHandled = false;

                        touchStartTime = Date.now();

                        touchStartY = e.touches[0].clientY;

                    }, { passive: true });


                    newElement.addEventListener('touchend', function(e) {

                        e.preventDefault();

                        e.stopPropagation();


                        const touchEndTime = Date.now();

                        const touchEndY = e.changedTouches[0].clientY;

                        const timeDiff = touchEndTime - touchStartTime;

                        const yDiff = Math.abs(touchEndY - touchStartY);


                        if (timeDiff < 300 && yDiff < 10) {

                            touchHandled = true;


                            haptic(HAPTIC_TAP);

                            checkbox.checked = !checkbox.checked;

                            const event = new Event('change', { bubbles: true });

                            checkbox.dispatchEvent(event);

                            setTimeout(() => {

                                touchHandled = false;

                            }, 400);

                        }

                    }, { passive: false });


                    newElement.addEventListener('click', function(e) {


                        if (touchHandled) {

                            e.preventDefault();

                            e.stopPropagation();

                            return;

                        }

                        e.preventDefault();

                        e.stopPropagation();

                        checkbox.checked = !checkbox.checked;

                        const event = new Event('change', { bubbles: true });

                        checkbox.dispatchEvent(event);

                    });


                    newElement.style.cursor = 'pointer';

                }

            });

        }

    });


    // 5. Wire up Screenshot Lightbox Navigation (Arrows & Close Button)

    const lightbox = document.getElementById('screenshotLightbox');

    if (lightbox) {

        const leftZone = lightbox.querySelector('.nav-zone-left');

        const rightZone = lightbox.querySelector('.nav-zone-right');

        const closeIcon = lightbox.querySelector('.screenshot-lightbox-close');


        if (leftZone) {

            leftZone.addEventListener('click', function(e) {

                e.preventDefault();

                e.stopPropagation();

                if (screenshotSuppressClick) return;

                navigateScreenshot(-1);

            });

        }


        if (rightZone) {

            rightZone.addEventListener('click', function(e) {

                e.preventDefault();

                e.stopPropagation();

                if (screenshotSuppressClick) return;

                navigateScreenshot(1);

            });

        }


        if (closeIcon) {

            closeIcon.addEventListener('click', function(e) {

                e.preventDefault();

                e.stopPropagation();

                closeScreenshotLightbox();

            });

        }


        lightbox.addEventListener('click', function(e) {

            // Ignore synthetic clicks fired right after a pinch/pan gesture

            if (screenshotSuppressClick) {

                e.preventDefault();

                e.stopPropagation();

                return;

            }

            // Only close if clicking the background itself, not the image

            if (e.target === lightbox || e.target.id === 'screenshotLightboxStage') {

                closeScreenshotLightbox();

            }

        });


        // Pinch-to-zoom (and pan while zoomed) inside the screenshot viewer

        lightbox.addEventListener('touchstart', onScreenshotTouchStart, { passive: false });

        lightbox.addEventListener('touchmove', onScreenshotTouchMove, { passive: false });

        lightbox.addEventListener('touchend', onScreenshotTouchEnd, { passive: true });

        lightbox.addEventListener('touchcancel', onScreenshotTouchEnd, { passive: true });

        lightbox.addEventListener('wheel', onScreenshotWheel, { passive: false });

        lightbox.addEventListener('mousedown', onScreenshotMouseDown);

    }


    // 6. Wire up Warning Icon and Close Button

    const warningIconBtn = document.getElementById('warningIcon');

    if (warningIconBtn) {

        warningIconBtn.addEventListener('click', function(e) {

            e.preventDefault();

            e.stopPropagation();

            toggleWarningMessage();

        });

    }


    const warningIconMobile = document.getElementById('warningIconMobile');

    if (warningIconMobile) {

        warningIconMobile.addEventListener('click', function(e) {

            e.preventDefault();

            e.stopPropagation();

            toggleWarningMessage('warningMobile');

        });

    }


    document.querySelectorAll('.warning-close').forEach(function(warningCloseBtn) {

        warningCloseBtn.addEventListener('click', function(e) {

            e.preventDefault();

            e.stopPropagation();

            closeWarningMessage();

        });

    });


    document.addEventListener('click', function(e) {

        const warningDiv = document.getElementById('warning');

        const warningIconBtn = document.getElementById('warningIcon');

        if (warningDiv && !warningDiv.classList.contains('hidden')) {


            if (!warningDiv.contains(e.target) && 

                (!warningIconBtn || !warningIconBtn.contains(e.target))) {

                closeWarningMessage();

            }

        }

    });


    document.addEventListener('click', function(e) {

        const warningMobileDiv = document.getElementById('warningMobile');

        const warningIconMobile = document.getElementById('warningIconMobile');

        if (warningMobileDiv && !warningMobileDiv.classList.contains('hidden')) {


            if (!warningMobileDiv.contains(e.target) && 

                (!warningIconMobile || !warningIconMobile.contains(e.target))) {

                closeWarningMessage();

            }

        }

    });


    // 7. Wire up Tank Specs Toggle Button

    const tankSpecsToggleBtn = document.getElementById('tankSpecsToggle');

    const milRangeText = document.getElementById('milRangeText');

    const tankSpecsToggleIcon = document.getElementById('tankSpecsToggleIcon');

    
    if (tankSpecsToggleBtn && milRangeText) {


        const isMobile = window.innerWidth <= 768;

        if (isMobile && !milRangeText.classList.contains('tank-specs-collapsed')) {

            milRangeText.classList.add('tank-specs-collapsed');

        }


        if (milRangeText.classList.contains('tank-specs-collapsed')) {

            tankSpecsToggleBtn.classList.add('collapsed');

        }


        if (tankSpecsToggleIcon) {

            tankSpecsToggleIcon.textContent = '';

        }

        
        tankSpecsToggleBtn.addEventListener('click', function(e) {

            e.preventDefault();

            e.stopPropagation();

            haptic(HAPTIC_TAP);

            toggleTankSpecs();

        });

    }

}


if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', wireUpEventListeners);

} else {

    wireUpEventListeners();

}


// ============================================

// MOBILE LAYOUT - Handle mobile-specific DOM adjustments

// ============================================

function handleMobileLayout() {

    const isMobile = window.innerWidth <= 768;

    const milRangeText = document.getElementById('milRangeText');

    const tankInfoBtn = document.getElementById('tankInfoIcon');


    if (!milRangeText || !tankInfoBtn) {

        return;

    }


    if (isMobile) {


        tankInfoBtn.classList.remove('hidden');

        tankInfoBtn.style.display = 'flex';

        tankInfoBtn.style.visibility = 'visible';

        tankInfoBtn.style.opacity = '1';


        const span = tankInfoBtn.querySelector('span');

        if (span && !span.textContent.includes('\n')) {

            span.textContent = 'TANK\nINFO';

        }


        if (!milRangeText.contains(tankInfoBtn)) {

            milRangeText.appendChild(tankInfoBtn);

        }

        
        if (typeof updateMilRangeText === 'function') {

            updateMilRangeText();

        }


        if (!milRangeText.dataset.mobileInitCollapsed) {

            milRangeText.classList.add('tank-specs-collapsed');

            const tankSpecsToggleBtnEl = document.getElementById('tankSpecsToggle');

            if (tankSpecsToggleBtnEl) tankSpecsToggleBtnEl.classList.add('collapsed');

            milRangeText.dataset.mobileInitCollapsed = '1';

        }

    } else {


        const calculatorCard = document.getElementById('calculator-card');

        if (calculatorCard && milRangeText.contains(tankInfoBtn)) {

            calculatorCard.parentNode.insertBefore(tankInfoBtn, calculatorCard.nextSibling);

        }


        milRangeText.classList.remove('tank-specs-collapsed');

        const tankSpecsToggleBtn = document.getElementById('tankSpecsToggle');

        if (tankSpecsToggleBtn) {

            tankSpecsToggleBtn.classList.remove('collapsed');

        }


        if (typeof updateMilRangeText === 'function') {

            updateMilRangeText();

        }

    }

}


if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', handleMobileLayout);

} else {

    handleMobileLayout();

}

window.addEventListener('resize', handleMobileLayout);


// ============================================

// VERSION DISPLAY - Dynamically inject version

// ============================================

function injectVersion() {

    if (typeof HLL_VERSION === 'undefined') return;

    const appVersionEl = document.getElementById('appVersion');
    if (appVersionEl) appVersionEl.textContent = HLL_VERSION.appVersion;

    const gameVersionEl = document.getElementById('gameVersion');
    if (gameVersionEl) gameVersionEl.textContent = HLL_VERSION.gamePatch;

}


if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', injectVersion);

} else {

    injectVersion();

}


// ============================================

// CHANGELOG VIEWER - footer version opens the changelog

// ============================================

function renderChangelogMarkdown(md) {

    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function inline(s) {
        return esc(s)
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    }

    const lines = String(md).split('\n');
    let html = '';
    let inList = false;

    function closeList() { if (inList) { html += '</ul>'; inList = false; } }

    lines.forEach(function (raw) {
        const line = raw.replace(/\r$/, '');
        if (/^#\s/.test(line)) return;
        if (/^##\s/.test(line)) { closeList(); html += '<h4>' + inline(line.replace(/^#+\s+/, '')) + '</h4>'; return; }
        if (/^###\s/.test(line)) { closeList(); html += '<h5>' + inline(line.replace(/^#+\s+/, '')) + '</h5>'; return; }
        if (/^-\s+/.test(line)) { if (!inList) { html += '<ul>'; inList = true; } html += '<li>' + inline(line.replace(/^-\s+/, '')) + '</li>'; return; }
        if (line.trim() === '') { closeList(); return; }
        closeList();
        html += '<p>' + inline(line) + '</p>';
    });

    closeList();
    return html;

}

function initChangelog() {

    const openBtn = document.getElementById('appVersion');
    const modal = document.getElementById('changelogBox');
    const body = document.getElementById('changelogBody');
    const closeBtn = document.getElementById('closeChangelog');

    if (!openBtn || !modal || !body) return;

    let loaded = false;

    function onKey(e) { if (e.key === 'Escape') close(); }

    function close() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey, true);
    }

    function open() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey, true);
        if (loaded) return;
        body.innerHTML = '<p class="changelog-empty">Loading...</p>';
        fetch('CHANGELOG.md', { cache: 'no-cache' })
            .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
            .then(function (md) { body.innerHTML = renderChangelogMarkdown(md); loaded = true; })
            .catch(function () { body.innerHTML = '<p class="changelog-empty">Could not load the changelog.</p>'; });
    }

    openBtn.addEventListener('click', function (e) { e.preventDefault(); open(); });
    if (closeBtn) closeBtn.addEventListener('click', close);
    modal.addEventListener('pointerdown', function (e) { if (e.target === modal) close(); });

}

if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', initChangelog);

} else {

    initChangelog();

}


// ============================================


// ============================================

function initMobileCalculator() {

    const root = document.getElementById('mobileCalculator');

    if (!root) return;

    const tabs = Array.prototype.slice.call(root.querySelectorAll('.mob-tab'));

    const keypad = document.getElementById('mobKeypad');

    const activeInput = document.getElementById('mobActiveInput');

    const activeLabelEl = document.getElementById('mobActiveLabel');

    const helpBtn = document.getElementById('mobActiveHelp');

    const heightTab = document.getElementById('mobTabHeight');

    const heightToggle = document.getElementById('heightDiffToggle');

    const mobMaxHint = document.getElementById('maxRangeHintMobile');


    if (!keypad || tabs.length === 0) return;


    const FIELD_LABELS = { distance: 'Target Distance', redNumber: 'Terrain Elevation', heightDiff: 'Height Difference' };

    // Help text shown by the value-box "?" button. Distance has none, so the
    // button hides for that field.
    const HELP_TEXT = {
        redNumber: 'Terrain elevation is the tilt of the ground under your tank - shown as the red MIL in-game.\n\nToo much tilt (~356+) and you can\'t fire — you\'ll see the text "UNSTABLE GRADIENT" in-game. Uphill, downhill, sideways — all count. Sideways tilt stops you firing too, even when the red MIL looks low.\n\nCan\'t shoot? Move to flatter ground, you goof.\n\nTip: Keep the hull level when firing. If one track is higher than the other the whole gun tilts sideways and the shell lands off to the side.',
        heightDiff: 'The height difference is how much higher or lower the target is than your gun, in meters.\n\n+  target above you\n-  target below you\n\nOvershooting? The target is lower - go negative. Undershooting? It\'s higher - go positive.\n\nLeave it at 0 if you\'re roughly level with the target.'
    };

    // buffer = unsigned digits being edited, neg = pending sign for the entry.
    // Keeping the sign separate means +/- works even before the first digit
    // (e.g. select Height, press +/- then 1 0 0 -> -100).
    const state = { field: 'distance', fresh: true, buffer: '', neg: false };


    function readField(field) {

        const input = document.getElementById(field);

        if (!input) return 0;

        const value = parseHeightDiff(input.value);

        return isNaN(value) ? 0 : value;

    }


    function updateTabValues() {

        ['distance', 'redNumber', 'heightDiff'].forEach(function(field) {

            const el = root.querySelector('.mob-tab-value[data-value-for="' + field + '"]');

            if (!el) return;

            const input = document.getElementById(field);

            el.textContent = input ? input.value : '0';

            el.classList.remove('mob-val-red', 'mob-val-green');

            const numValue = input ? parseHeightDiff(input.value) : 0;

            if (field === 'redNumber') {

                // Terrain elevation is always red (matches the in-game HUD)

                el.classList.add('mob-val-red');

            } else if (field === 'heightDiff') {

                if (numValue > 0) el.classList.add('mob-val-green');

                else if (numValue < 0) el.classList.add('mob-val-red');

            }

        });

        updateActiveValueColor();

    }


    function updateActiveValueColor() {

        if (!activeInput) return;

        activeInput.classList.remove('mob-val-red', 'mob-val-green');

        if (state.field === 'redNumber') {

            activeInput.classList.add('mob-val-red');

        } else if (state.field === 'heightDiff') {

            const value = readField('heightDiff');

            if (value > 0) activeInput.classList.add('mob-val-green');

            else if (value < 0) activeInput.classList.add('mob-val-red');

        }

    }


    function render() {

        tabs.forEach(function(tab) {

            const selected = tab.getAttribute('data-field') === state.field;

            tab.classList.toggle('active', selected);

            tab.setAttribute('aria-selected', selected ? 'true' : 'false');

        });

        if (activeLabelEl) activeLabelEl.textContent = FIELD_LABELS[state.field] || '';

        if (activeInput) {

            if (document.activeElement === activeInput && !state.fresh) {

                // Show the pending sign even when the digits are still 0 (e.g. "-0")
                const digits = state.buffer === '' ? '0' : state.buffer;

                activeInput.value = (state.neg ? '-' : '') + digits;

            } else {

                const input = document.getElementById(state.field);

                let display = input ? input.value : '0';

                // Show the pending negative sign even while the value is still 0
                if (!state.fresh && state.neg && parseHeightDiff(display) === 0) {

                    display = display.replace(/^\+?0/, '-0');

                }

                activeInput.value = display;

            }

        }

        const signKey = keypad.querySelector('[data-key="sign"]');

        if (signKey) signKey.disabled = (state.field === 'distance');

        if (mobMaxHint) {

            mobMaxHint.classList.toggle('hidden', state.field !== 'distance');

            if (typeof updateMaxRangeHints === 'function') updateMaxRangeHints();

        }

        if (helpBtn) {

            const hasHelp = !!HELP_TEXT[state.field];

            helpBtn.classList.toggle('visible', hasHelp);

            if (hasHelp) helpBtn.setAttribute('aria-label', 'Help: ' + (FIELD_LABELS[state.field] || state.field));

        }

        updateTabValues();

    }


    function selectField(field) {

        state.field = field;

        state.fresh = true;

        state.buffer = '';

        state.neg = readField(field) < 0;

        render();

        // Refresh the result whenever the user moves between the three sections

        if (typeof calculate === 'function' && isAutoCalcEnabled()) calculate();

    }


    function ensureHeightEnabled() {

        const toggle = document.getElementById('heightDiffToggle');

        if (toggle && !toggle.checked) {

            toggle.checked = true;

            toggle.dispatchEvent(new Event('change', { bubbles: true }));

        }

    }


    function applyBuffer() {

        if (state.field === 'heightDiff') ensureHeightEnabled();

        const digits = parseInt(state.buffer, 10) || 0;

        const target = state.neg ? -digits : digits;

        const current = readField(state.field);

        if (target !== current) adjustValue(state.field, target - current);

        state.fresh = false;

        // Keep the buffer unsigned and the sign separate so a pending sign
        // survives a 0 value (adjustValue cannot represent "-0").
        state.buffer = String(Math.abs(readField(state.field)));

        render();

    }


    function pressDigit(digit) {

        if (state.fresh) {

            state.buffer = digit;

            state.fresh = false;

        } else {

            state.buffer = (state.buffer === '0' ? '' : state.buffer) + digit;

        }

        // Limit digits per field: terrain 3 (max 356), others 4

        const maxLen = state.field === 'redNumber' ? 3 : 4;

        if (state.buffer.length > maxLen) state.buffer = state.buffer.slice(0, maxLen);

        applyBuffer();

    }


    function pressClear() {

        state.fresh = false;

        state.buffer = '0';

        state.neg = false;

        applyBuffer();

    }


    function pressResetAll() {

        // Del = reset everything to 0 (unlike C, which only clears the active field)
        if (typeof resetCalculator === 'function') {

            resetCalculator();

        } else {

            keypadOrder.forEach(function(field) {

                adjustValue(field, -readField(field));

            });

        }

        state.fresh = true;

        state.buffer = '';

        state.neg = readField(state.field) < 0;

        render();

    }


    function pressBack() {

        // Even on a freshly selected field, backspace should delete the last

        // digit of the current value.

        if (state.fresh) {

            state.buffer = String(Math.abs(readField(state.field)));

            state.neg = readField(state.field) < 0;

            state.fresh = false;

        }

        state.buffer = String(state.buffer).slice(0, -1);

        if (!state.buffer) state.buffer = '0';

        applyBuffer();

    }


    function pressSign() {

        if (state.field === 'distance') return;

        if (state.field === 'heightDiff') ensureHeightEnabled();

        // Works even at 0: flip a pending sign so the next digits are negative.
        if (state.fresh) {

            state.buffer = String(Math.abs(readField(state.field)));

            state.neg = readField(state.field) < 0;

            state.fresh = false;

        }

        state.neg = !state.neg;

        applyBuffer();

    }


    function pressStep(amount) {

        if (state.field === 'heightDiff') ensureHeightEnabled();

        adjustValue(state.field, amount);

        state.fresh = false;

        state.buffer = String(Math.abs(readField(state.field)));

        state.neg = readField(state.field) < 0;

        render();

    }


    tabs.forEach(function(tab) {

        // pointerdown = react on press (not release) so it feels instant

        tab.addEventListener('pointerdown', function(e) {

            e.preventDefault();

            haptic(HAPTIC_TAP);

            selectField(this.getAttribute('data-field'));

        });

    });


    // Desktop keypad keyboard support: type with the keyboard like a real
    // calculator - digits fill the active field, Tab/Enter move to the next,
    // Backspace deletes, +/- step the value, . or § (or ~) flips the sign,
    // C clears the active field, Del resets all fields to 0.
    const keypadOrder = ['redNumber', 'distance', 'heightDiff'];

    document.addEventListener('keydown', function (e) {

        if (!isKeypadView()) return;

        if (document.getElementById('mobHelpPopup')) return;

        let handledKey = false;

        if (e.key === 'Tab') {

            handledKey = true;

            const idx = keypadOrder.indexOf(state.field);

            if (idx !== -1) {

                const dir = e.shiftKey ? -1 : 1;

                e.preventDefault();

                selectField(keypadOrder[(idx + dir + keypadOrder.length) % keypadOrder.length]);

            }

            if (handledKey) showKeyboardTip();

            return;

        }

        // When the editable value box is focused, typing there works natively.
        if (document.activeElement === activeInput) return;

        if (/^[0-9]$/.test(e.key)) {

            handledKey = true;

            haptic(HAPTIC_TAP);

            e.preventDefault();

            pressDigit(e.key);

        } else if (e.key === 'Backspace') {

            handledKey = true;

            haptic(HAPTIC_TAP);

            e.preventDefault();

            pressBack();

        } else if (e.key === 'Delete') {

            handledKey = true;

            haptic(HAPTIC_TAP);

            e.preventDefault();

            pressResetAll();

        } else if (e.key === 'Enter') {

            handledKey = true;

            haptic(HAPTIC_TAP);

            e.preventDefault();

            selectField(keypadOrder[(keypadOrder.indexOf(state.field) + 1) % keypadOrder.length]);

        } else if (e.code === 'Equal' || e.code === 'NumpadAdd' || e.key === '+' || e.key === '=' || e.key === '*') {

            handledKey = true;

            haptic(HAPTIC_TAP);

            e.preventDefault();

            let step = e.ctrlKey || e.metaKey ? 25 : (e.shiftKey ? 5 : 1);

            pressStep(step);

        } else if (e.code === 'Minus' || e.code === 'NumpadSubtract' || e.key === '-' || e.key === '_') {

            handledKey = true;

            haptic(HAPTIC_TAP);

            e.preventDefault();

            let step = e.ctrlKey || e.metaKey ? 25 : (e.shiftKey ? 5 : 1);

            pressStep(-step);

        } else if (
            e.code === 'IntlBackslash' || e.code === 'Backquote' ||
            e.code === 'Period' || e.code === 'NumpadDecimal' ||
            e.key === '§' || e.key === '°' || e.key === '~' || e.key === '`' ||
            e.key === '½' || e.key === '^' || e.key === '²' || e.key === 'º' ||
            e.key === 'ª' || e.key === '¬' || e.key === '¦' || e.key === '.'
        ) {

            handledKey = true;

            haptic(HAPTIC_TAP);

            e.preventDefault();

            pressSign();

        } else if (e.key === 'c' || e.key === 'C') {

            handledKey = true;

            haptic(HAPTIC_TAP);

            e.preventDefault();

            pressClear();

        }

        if (handledKey) showKeyboardTip();

    });


    // Keyboard-controls help (i) button under the keypad
    const keypadShortcutsBtn = document.getElementById('keypadShortcutsBtn');

    // Try to detect the actual sign-key label from the user's keyboard layout.
    // The Backquote key (left of 1) is the sign-flip key on most layouts, but
    // the character printed on it varies (§, ^, `, ², etc.).
    let detectedSignKeyLabel = null;
    let signKeyDetectPromise = null;
    function detectSignKeyLabel() {
        if (signKeyDetectPromise) return signKeyDetectPromise;
        signKeyDetectPromise = Promise.resolve().then(function () {
            if (!navigator.keyboard || !navigator.keyboard.getLayoutMap) return null;
            return navigator.keyboard.getLayoutMap().then(function (map) {
                const main = map.get('Backquote');
                const alt = map.get('IntlBackslash');
                const parts = [];
                if (main) parts.push(main);
                // Only include the secondary ISO key if it differs and is one of
                // the sign-like characters we already accept as a flip shortcut.
                if (alt && alt !== main && /[§°~`½^²ºª¬¦]/.test(alt)) parts.push(alt);
                detectedSignKeyLabel = parts.length ? parts.join(' / ') : null;
                return detectedSignKeyLabel;
            });
        }).catch(function () { return null; });
        return signKeyDetectPromise;
    }
    // Start detection in the background; no need to block UI.
    detectSignKeyLabel();

    function getSignKeyLabelText() {
        return detectedSignKeyLabel || '§';
    }

    function buildKeypadControlsHtml() {
        const signLabel = getSignKeyLabelText();
        const k = function (t) { return '<kbd class="kc-key">' + t + '</kbd>'; };
        const pad = function (t) { return '<span class="kc-pad">' + t + '</span>'; };
        const plus = '<span class="kc-join">+</span>';
        const or = '<span class="kc-or">/</span>';
        const row = function (keys, desc) {
            return '<div class="kc-row"><span class="kc-keys">' + keys + '</span><span class="kc-desc">' + desc + '</span></div>';
        };
        const kbIcon = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="1.5" y="4" width="13" height="8" rx="1.4"/><path d="M4 6.5h.01M6.5 6.5h.01M9 6.5h.01M11.5 6.5h.01M5.5 9.5h5" stroke-linecap="round"/></svg>';
        const mouseIcon = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="4.5" y="1.5" width="7" height="13" rx="3.5"/><path d="M8 1.5v4" stroke-linecap="round"/></svg>';

        return ''
            + '<div class="kc-group">'
            +   '<div class="kc-title">' + kbIcon + 'Keyboard</div>'
            +   row(k('0') + '<span class="kc-range">&#8211;</span>' + k('9'), 'enter digits')
            +   row(k('Tab') + or + k('Enter'), 'next field')
            +   row(k('Shift') + plus + k('Tab'), 'previous field')
            +   row(k('+') + or + k('-'), 'step by 1')
            +   row(k('.') + or + k(signLabel), 'flip sign (+ / -)')
            +   row(k('Backspace'), 'delete digit')
            +   row(k('C'), 'clear')
            +   row(k('Del'), 'reset all to 0')
            +   row(k('Shift') + plus + k('-') + or + k('+'), 'step by 5')
            +   row(k('Ctrl') + plus + k('-') + or + k('+'), 'step by 25')
            + '</div>'
            + '<div class="kc-group">'
            +   '<div class="kc-title">' + mouseIcon + 'Mouse</div>'
            +   row(k('Shift') + plus + k('Click') + pad('-') + or + pad('+'), 'step by 5')
            +   row(k('Ctrl') + plus + k('Click') + pad('-') + or + pad('+'), 'step by 25')
            + '</div>';
    }

    if (keypadShortcutsBtn) {

        keypadShortcutsBtn.addEventListener('click', function (e) {

            e.preventDefault();

            e.stopPropagation();

            haptic(HAPTIC_TAP);

            // Wait for detection if it hasn't finished, then show.
            detectSignKeyLabel().then(function () {
                showHelpPopup('controls', buildKeypadControlsHtml(), 'Keyboard Controls', true);
            });

        });

    }


    // One-time tip: keyboard works on the keypad (shown on first key use).
    let keyboardTipDone = false;

    function showKeyboardTip() {

        if (keyboardTipDone) return;

        keyboardTipDone = true;

        try {

            if (sessionStorage.getItem('keypadKeyTip')) return;

        } catch (e) {}

        let tip = document.getElementById('keypadKeyToast');

        if (!tip) {

            tip = document.createElement('div');

            tip.id = 'keypadKeyToast';

            tip.className = 'quickstep-toast';

            tip.textContent = 'TIP: You can type numbers on the keypad - Tab/Enter next, +/-, . or sign key (' + getSignKeyLabelText() + '), C clear, Del reset all';

            tip.addEventListener('click', function () { tip.remove(); });

            document.body.appendChild(tip);

        }

        requestAnimationFrame(function () { tip.classList.add('show'); });

        setTimeout(function () {

            tip.classList.remove('show');

            setTimeout(function () { if (tip.parentNode) tip.remove(); }, 300);

        }, 6000);

        try {

            sessionStorage.setItem('keypadKeyTip', '1');

        } catch (e) {}

    }


    // Value-box help button: shows the explanation for the active field.

    if (helpBtn) {

        helpBtn.addEventListener('click', function(e) {

            e.preventDefault();

            e.stopPropagation();

            const helpText = HELP_TEXT[state.field];

            if (!helpText) return;

            haptic(HAPTIC_TAP);

            showHelpPopup(state.field, helpText);

        });

    }


    // FULL-mode field help (i) buttons reuse the same themed popup
    document.querySelectorAll('.help-i[data-help-field]').forEach(function (btn) {

        btn.addEventListener('click', function (e) {

            e.preventDefault();

            e.stopPropagation();

            const field = btn.getAttribute('data-help-field');

            if (!HELP_TEXT[field]) return;

            haptic(HAPTIC_TAP);

            showHelpPopup(field, HELP_TEXT[field]);

        });

    });


    // Popup help with optional in-game screenshot for Terrain Elevation
    function showHelpPopup(field, text, title, html) {

        const old = document.getElementById('mobHelpPopup');

        if (old) old.remove();

        const popup = document.createElement('div');

        popup.id = 'mobHelpPopup';

        popup.className = 'mob-help-popup';

        const box = document.createElement('div');

        box.className = 'mob-help-box';

        box.setAttribute('role', 'dialog');

        box.setAttribute('aria-modal', 'true');

        const head = document.createElement('div');

        head.className = 'mob-help-head';

        const titleEl = document.createElement('span');

        titleEl.className = 'mob-help-title';

        titleEl.textContent = title || FIELD_LABELS[field] || 'Help';

        const closeBtn = document.createElement('button');

        closeBtn.type = 'button';

        closeBtn.className = 'mob-help-close';

        closeBtn.setAttribute('aria-label', 'Close help');

        closeBtn.textContent = '\u2715';

        const infoIcon = document.createElement('span');

        infoIcon.className = 'mob-help-info';

        infoIcon.setAttribute('aria-hidden', 'true');

        infoIcon.innerHTML = '<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true" focusable="false"><circle cx="8" cy="4.1" r="1.15"/><rect x="7.15" y="6.4" width="1.7" height="6.2" rx="0.85"/></svg>';

        const headLeft = document.createElement('div');

        headLeft.className = 'mob-help-head-left';

        headLeft.appendChild(infoIcon);

        headLeft.appendChild(titleEl);

        head.appendChild(headLeft);

        head.appendChild(closeBtn);

        const body = document.createElement('div');

        body.className = 'mob-help-body';

        const helpImgs = {

            redNumber: { src: 'images/UI/help/red_mil_ingame.webp', alt: 'In-game HUD showing the red terrain elevation MIL' },

            heightDiff: { src: 'images/UI/help/height_difference.webp', alt: 'Height difference between you and the target' }

        };

        const helpImg = helpImgs[field];

        if (helpImg) {

            const img = document.createElement('img');

            img.src = helpImg.src;

            img.alt = helpImg.alt;

            img.loading = 'lazy';

            img.className = 'mob-help-img';

            body.appendChild(img);

        }

        if (html) {

            const div = document.createElement('div');

            div.className = 'mob-help-shortcuts';

            div.innerHTML = text;

            body.appendChild(div);

        } else {

            const pre = document.createElement('pre');

            pre.className = 'mob-help-text';

            pre.textContent = text;

            body.appendChild(pre);

        }

        box.appendChild(head);

        box.appendChild(body);

        popup.appendChild(box);

        document.body.appendChild(popup);

        document.body.style.overflow = 'hidden';

        function close() {

            popup.remove();

            document.body.style.overflow = '';

            document.removeEventListener('keydown', onKey, true);

        }

        function onKey(e) {

            if (e.key === 'Escape') close();

        }

        popup.addEventListener('pointerdown', function(e) {

            if (e.target === popup || e.target.closest('.mob-help-close')) close();

        });

        document.addEventListener('keydown', onKey, true);

    }


    let lastKeyAction = '';

    let lastKeyTime = 0;

    // React on pointerdown (immediate) rather than click (on release)

    keypad.addEventListener('pointerdown', function(e) {

        const key = e.target.closest('.mob-key');

        if (!key || key.disabled) return;

        e.preventDefault();

        key.classList.add('pressed');

        const action = key.getAttribute('data-key');

        // Guard against a single tap firing the same key twice (which made

        // -/+ step by 2). The window is tiny, so normal tapping is unaffected.

        const now = Date.now();

        if (action === lastKeyAction && (now - lastKeyTime) < 50) return;

        lastKeyAction = action;

        lastKeyTime = now;

        haptic(HAPTIC_TAP);

        if (action === 'clear') pressClear();

        else if (action === 'back') pressBack();

        else if (action === 'sign') pressSign();

        else if (action === 'minus' || action === 'plus') {

            // Same Quick-Step modifiers as the desktop FULL-mode −/+ buttons:
            // Shift = ±5, Ctrl/Cmd = ±25.
            let step = 1;

            if (e.ctrlKey || e.metaKey) {

                step = 25;

            } else if (e.shiftKey) {

                step = 5;

            }

            pressStep((action === 'minus' ? -1 : 1) * step);

        }

        else if (/^[0-9]$/.test(action)) pressDigit(action);

    });


    // Clear the pressed animation immediately on release (iOS holds :active)

    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (evt) {

        keypad.addEventListener(evt, function () {

            keypad.querySelectorAll('.mob-key.pressed').forEach(function (k) {

                k.classList.remove('pressed');

            });

        });

    });


    // Tapping the value readout lets you type with the phone's own keyboard

    if (activeInput) {

        activeInput.addEventListener('focus', function() {

            state.buffer = String(Math.abs(readField(state.field)));

            state.neg = readField(state.field) < 0;

            state.fresh = false;

            activeInput.select();

        });


        activeInput.addEventListener('input', function() {

            let raw = activeInput.value.replace(/[^0-9-]/g, '');

            raw = (state.field === 'distance')

                ? raw.replace(/-/g, '')

                : raw.replace(/(?!^)-/g, '');

            if (activeInput.value !== raw) activeInput.value = raw;

            state.neg = raw.charAt(0) === '-';

            state.buffer = raw.replace(/^-/, '');

            state.fresh = false;

            // Typing height must also enable the height calculation

            if (state.field === 'heightDiff') ensureHeightEnabled();

            const target = parseInt(raw, 10) || 0;

            const current = readField(state.field);

            if (target !== current) adjustValue(state.field, target - current);

            updateTabValues();

        });


        // Enter on the phone keyboard dismisses it (commits the value)

        activeInput.addEventListener('keydown', function(e) {

            if (e.key === 'Enter' || e.keyCode === 13) {

                e.preventDefault();

                activeInput.blur();

            }

        });


        activeInput.addEventListener('blur', function() {

            render();

        });

    }


    // Reset the keypad entry state whenever the active field's underlying input

    // is changed from outside the keypad (e.g. tank switch seeding a default

    // distance, the reset button, or typing in a desktop input). This makes the

    // next digit replace the value instead of appending to a stale buffer.

    ['distance', 'redNumber', 'heightDiff'].forEach(function(field) {

        ['', 'Lite'].forEach(function(suffix) {

            const input = document.getElementById(field + suffix);

            if (!input) return;

            input.addEventListener('input', function() {

                if (state.field !== field) return;

                state.fresh = true;

                state.buffer = '';

                state.neg = readField(field) < 0;

                render();

            });

        });

    });


    // Height is optional and the toggles panel is hidden on phones, so the

    // Height tab is always available. The underlying height toggle is switched

    // on automatically the first time the Height field is used.

    if (heightTab) heightTab.style.display = '';


    // The Calculate button is gone on phones, so mobile always calculates live.

    // Only touch this on the mobile layout - desktop keeps the Auto toggle.

    if (isMobileLayout()) {

        const autoToggle = document.getElementById('autoCalcToggle');

        if (autoToggle && !autoToggle.checked) {

            autoToggle.checked = true;

            autoToggle.dispatchEvent(new Event('change', { bubbles: true }));

        }

    }


    // On phones always start from all zeros - no restored distance/elevation

    if (isMobileLayout()) {

        ['distance', 'heightDiff', 'redNumber'].forEach(function (field) {

            const current = readField(field);

            if (current !== 0) adjustValue(field, -current);

        });

        // Make sure the readouts/counter show zeros, not a stale default

        if (typeof updateDistanceReadout === 'function') updateDistanceReadout();

        // Snap the counter to 0000 instantly (no roll-in from a stale value)

        if (typeof setupElevationCounter === 'function') setupElevationCounter(0);

    }

    // Refresh the keypad readouts from the underlying inputs when switching views.

    window.refreshKeypadFromInputs = render;

    selectField('distance');

}


if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', initMobileCalculator);

} else {

    initMobileCalculator();

}
