// ============================================
// VERSION CONFIG
// ============================================

const HLL_VERSION = {

    appVersion: 'v1.6.3',

    gamePatch: 'HLL Update 21',

    author: 'by litku'

};



// ============================================
// ARTILLERY DATA TABLES
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
// TANK DATA ARRAY
// ============================================

const tankData = [

    {

        value: "British (Bishop SP)",

        flag: "images/UI/Icons/flags/BRITISH_30.webp",

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

        flag: "images/UI/Icons/flags/BRITISH_30.webp",

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

        flag: "images/UI/Icons/flags/US_30.webp",

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

        flag: "images/UI/Icons/flags/SOVIET_30.webp",

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

        flag: "images/UI/Icons/flags/GERMANY_30.webp",

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

        flag: "images/UI/Icons/flags/GERMANY_30.webp",

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



    // Update hidden input

    factionInput.value = tank.value;



    // Update selected display

    selectSelected.innerHTML = `

        <img src="${tank.flag}" alt="${tank.flagAlt}" class="flag-icon" loading="eager" decoding="async">

        <span class="text-ellipsis flex-1 min-w-0">${tank.shortName}</span>

    `;



    // Hide dropdown

    selectItems.classList.add('select-hide');

    selectSelected.classList.remove('select-arrow-active');



    // Lite mode specific: update aria-expanded

    if (isLite) {

        selectSelected.setAttribute('aria-expanded', 'false');

    } else {

        // Full mode specific: update related UI elements

        updateFactionImage();

        updateMilRangeText();

    }



    // Calculate appropriate default distance based on tank's max range

    const table = tables[tank.value];

    let defaultDistance = 400;

    if (table) {

        const distances = Object.keys(table)

            .filter(k => !isNaN(parseInt(k)))

            .map(k => parseInt(k))

            .sort((a, b) => a - b);

        const minRange = distances[0] || 200;

        const maxRange = distances[distances.length - 1] || 600;

        // Use the actual table minimum for short-range SPAs (AVRE), otherwise 400m.

        defaultDistance = maxRange <= 250 ? minRange : 400;

    }



    // Update all distance inputs to the default value for this tank

    const distanceInputs = document.querySelectorAll('input#distance, input#distanceLite');

    distanceInputs.forEach(input => {

        input.value = String(defaultDistance);

        const event = new Event('input', { bubbles: true });

        input.dispatchEvent(event);

    });



    // Save state and recalculate

    saveState();

    if (isAutoCalcEnabled()) {

        calculate();

    } else if (!isLite) {

        // Reset final counter to 0000 when switching tanks and auto calc is off

        rollElevationToNumber(0);

    }



    return true;

}



function generateTankDropdown() {

    const selectSelected = document.getElementById('selectSelected');

    const selectItems = document.getElementById('selectItems');

    const factionInput = document.getElementById('faction');



    

    if (!selectSelected || !selectItems || !factionInput) return;

    

    // Get current faction or default to first tank

    const currentFaction = factionInput.value || tankData[0].value;

    const currentTank = tankData.find(t => t.value === currentFaction) || tankData[0];

    

    // Generate selected item HTML

    selectSelected.innerHTML = `

        <img src="${currentTank.flag}" alt="${currentTank.flagAlt}" class="flag-icon" loading="eager" decoding="async">

        <span class="text-ellipsis flex-1 min-w-0">${currentTank.shortName}</span>

    `;

    

    // Generate dropdown items HTML

    selectItems.innerHTML = tankData.map(tank => `

        <div data-value="${tank.value}">

            <img src="${tank.flag}" alt="${tank.flagAlt}" class="flag-icon" loading="lazy" decoding="async">

            ${tank.shortName}

        </div>

    `).join('');

    

    // Re-attach click handlers to new dropdown items

    const items = selectItems.querySelectorAll('div[data-value]');

    items.forEach(item => {

        item.addEventListener('click', function(e) {

            e.stopPropagation();

            const value = this.getAttribute('data-value');

            handleTankSelection(value, selectSelected, selectItems, factionInput, false);

        });

    });

}



function getTankByValue(value) {

    return tankData.find(t => t.value === value) || tankData[0];

}



// Switch between full and lite view modes

function switchViewMode(mode) {

    document.body.setAttribute('data-mode', mode);

    

    // Save preference to localStorage

    try {

        localStorage.setItem('hll-calculator-mode', mode);

    } catch (e) {

        // Ignore localStorage errors

    }

    

    // Regenerate dropdowns for the new mode

    if (mode === 'lite') {

        generateLiteTankDropdown();

        // Sync lite toggles with full mode state when switching to lite

        syncFullTogglesToLite();

    } else {

        generateTankDropdown();

        // Ensure calculate button is visible/hidden correctly when returning to full mode

        updateCalculateButton();

    }



    // Recalculate if auto-calc is enabled

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

    

    // Get current faction or default to first tank

    const currentFaction = factionInput.value || tankData[0].value;

    const currentTank = tankData.find(t => t.value === currentFaction) || tankData[0];

    

    // Generate selected item HTML

    selectSelected.innerHTML = `

        <img src="${currentTank.flag}" alt="${currentTank.flagAlt}" class="flag-icon" loading="eager" decoding="async">

        <span class="text-ellipsis flex-1 min-w-0">${currentTank.shortName}</span>

    `;

    

    // Generate dropdown items HTML

    selectItems.innerHTML = tankData.map(tank => `

        <div data-value="${tank.value}">

            <img src="${tank.flag}" alt="${tank.flagAlt}" class="flag-icon" loading="lazy" decoding="async">

            ${tank.shortName}

        </div>

    `).join('');

    

    // Re-attach click handlers to new dropdown items

    const items = selectItems.querySelectorAll('div[data-value]');

    items.forEach(item => {

        item.addEventListener('click', function(e) {

            e.stopPropagation();

            const value = this.getAttribute('data-value');

            handleTankSelection(value, selectSelected, selectItems, factionInput, true);

        });

    });

    

    // Only attach selectSelected click handler once

    if (!selectSelected.dataset.liteHandlerAttached) {

        selectSelected.dataset.liteHandlerAttached = 'true';

        

        // Toggle dropdown on click

        selectSelected.addEventListener('click', function(e) {

            e.stopPropagation();

            const isExpanded = selectSelected.getAttribute('aria-expanded') === 'true';

            selectSelected.setAttribute('aria-expanded', !isExpanded);

            selectSelected.classList.toggle('select-arrow-active');

            selectItems.classList.toggle('select-hide');

        });

    }

    

    // Only attach document click handler once

    if (!document.body.dataset.liteDropdownCloseAttached) {

        document.body.dataset.liteDropdownCloseAttached = 'true';

        

        // Close dropdown when clicking outside

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

            topSpeed: '24 km/h',

            yawRate: '7°/s',

            pitchRate: '1°/s',

            pitchAngleMin: '-5°',

            pitchAngleMax: '30°',

            hullHealth: '900',

            turretHealth: '790',

            mobilityHealth: '710',

            engineBlockHealth: '420',

            gearSwitchTime: '0.8s',

            reloadSpeed: '10s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '45',

            apDamage: '1025',

            apDirectArmor: 'Very High',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '28m',

            munitionsCost: '280'

        },

        history: 'The M4 Sherman tank variant equipped with the 105mm howitzer (typically the M4 or M4A3 chassis) was developed to provide powerful close infantry support. It saw extensive use in both the European and Pacific Theaters. The 105mm howitzer was highly effective against fortifications, infantry positions, and used primarily for demolition and smoke delivery, making it valuable for breakthrough operations.',

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

            topSpeed: '23 km/h',

            yawRate: '6°/s',

            pitchRate: '1°/s',

            pitchAngleMin: '-5°',

            pitchAngleMax: '30°',

            hullHealth: '890',

            turretHealth: '830',

            mobilityHealth: '700',

            engineBlockHealth: '420',

            gearSwitchTime: '1.1s',

            reloadSpeed: '12s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '45',

            apDamage: '1025',

            apDirectArmor: 'Very High',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '32m',

            munitionsCost: '280'

        },

        history: 'The KV-2 was a Soviet heavy tank armed with the massive 152mm M-10 howitzer (specifically the M-10T). It was designed as an assault tank to destroy fortifications and bunkers. It saw action during the Winter War against Finland and was famously used in the early stages of Operation Barbarossa, where its heavy armor proved almost impervious to early German anti-tank guns. Despite its powerful armament, its slow speed, long reload time, and mechanical issues made it highly problematic.',

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

            pitchRate: '1°/s',

            pitchAngleMin: '-5°',

            pitchAngleMax: '30°',

            hullHealth: '910',

            turretHealth: '830',

            mobilityHealth: '710',

            engineBlockHealth: '430',

            gearSwitchTime: '0.8s',

            reloadSpeed: '16s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '45',

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

            pitchRate: '1°/s',

            pitchAngleMin: '-5°',

            pitchAngleMax: '30°',

            hullHealth: '910',

            turretHealth: '830',

            mobilityHealth: '710',

            engineBlockHealth: '430',

            gearSwitchTime: '0.8s',

            reloadSpeed: '10s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '45',

            apDamage: '1025',

            apDirectArmor: 'Very High',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '30m',

            munitionsCost: '280',

            maxRange: '800m (can exceed on slopes)'

        },

        history: 'The Bishop was a British self-propelled artillery vehicle based on the Valentine tank chassis, armed with a 25-pounder field gun. It was used during World War II, primarily in North Africa. The vehicle was named after its boxy superstructure resembling a bishop\'s mitre. It had limited elevation and traverse, which severely affected its effectiveness as an artillery piece.',

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

            mainGun: 'StuH 45 L/12 - 50 HE rounds, 35 SMOKE rounds, 20 HEAT rounds',

            turretRotation: '30° total (15° left and 15° right)',

            coaxial: 'NO COAXIAL GUN',

            topSpeed: '24 km/h',

            yawRate: '8°/s',

            pitchRate: '1°/s',

            pitchAngleMin: '-5°',

            pitchAngleMax: '30°',

            hullHealth: '910',

            turretHealth: '830',

            mobilityHealth: '710',

            engineBlockHealth: '430',

            gearSwitchTime: '0.8s',

            reloadSpeed: '11s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '45',

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

            topSpeed: '24 km/h',

            yawRate: '9°/s',

            pitchRate: '1°/s',

            pitchAngleMin: '-5°',

            pitchAngleMax: '30°',

            hullHealth: '910',

            turretHealth: '830',

            mobilityHealth: '710',

            engineBlockHealth: '430',

            gearSwitchTime: '0.8s',

            reloadSpeed: '7s',

            maxClipsAP: '20',

            maxClipsHE: '50',

            maxClipsSmoke: '45',

            apDamage: '690',

            apDirectArmor: 'Medium',

            heDamage: '590',

            heDirectArmor: 'Low',

            heExplosionArmor: 'Low',

            heDamageRadius: '24m',

            munitionsCost: '280'

        },

        history: 'The Panzer III Ausf. N was a German medium tank variant armed with the short-barreled 7.5 cm KwK 37 L/24 gun. It was designed specifically for close infantry support with high-explosive (HE) rounds, as the chassis was no longer competitive in anti-tank roles. It saw service primarily on the Eastern Front, but also with the Afrika Korps and in Italy.',

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
        minDistance: 25,
        anchors: [
            { distance: 25, mil: -89 },
            { distance: 47, mil: -30 },
            { distance: 96, mil: 22 }
        ]
    }],
    [tables['DAK (Panzer III Ausf.N)'], {
        minDistance: 20,
        anchors: [
            { distance: 20, mil: -89 },
            { distance: 48, mil: -10 },
            { distance: 98, mil: 30 }
        ]
    }],
    [sturmpanzerKey ? tables[sturmpanzerKey] : null, {
        minDistance: 24,
        anchors: [
            { distance: 24, mil: -89 },
            { distance: 47, mil: -15 },
            { distance: 98, mil: 30 },
            { distance: 156, mil: 69 }
        ]
    }],
    [tables['Soviet Union (KV-2)'], {
        minDistance: 25,
        anchors: [
            { distance: 25, mil: -89 },
            { distance: 45, mil: -24 },
            { distance: 96, mil: 19 }
        ]
    }],
    [tables['British (Churchill AVRE)'], {
        minDistance: 22,
        anchors: [
            { distance: 22, mil: -89 },
            { distance: 48, mil: 10 },
            { distance: 98, mil: 82 },
            { distance: 150, mil: 150 }
        ]
    }],
    [tables['British (Bishop SP)'], {
        minDistance: 23,
        anchors: [
            { distance: 23, mil: -89 },
            { distance: 47, mil: -27 },
            { distance: 98, mil: 7 },
            { distance: 147, mil: 23 }
        ]
    }]
].filter(([table]) => !!table));

function interpolate(table, meters) {

    // Filter out minMil and maxMil properties, only use distance keys

// Filter out minMil and maxMil properties, only use distance keys

    const distances = Object.keys(table)

        .filter(k => k !== 'minMil' && k !== 'maxMil')

        .map(Number)

        .sort((a, b) => b - a);



    const maxDist = distances[0];

    const minDist = distances[distances.length - 1];



// Extrapolate for distances > maxDist (600m)

    if (meters > maxDist) {

        const d1 = distances[0];

        const d2 = distances[1];

        const m1 = table[d1];

        const m2 = table[d2];

        const slope = (m1 - m2) / (d1 - d2);

        return m1 + (meters - d1) * slope;

    }



// Use confirmed physical low-end anchors when available instead of extending the sight table linearly.

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



// Interpolate for distances within range

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



// Get range min/max from table keys

        const distances = Object.keys(table)

            .filter(k => !isNaN(parseInt(k)))

            .map(k => parseInt(k))

            .sort((a, b) => a - b);

        const rangeMin = distances[0] || 0;

        const rangeMax = distances[distances.length - 1] || 0;

        const physicalRangeOverrides = {
            'US (Sherman M4A3 105)': `~25m - ${rangeMax}m`,
            'DAK (Panzer III Ausf.N)': `~24m - ${rangeMax}m`
        };

        if (sturmpanzerKey) {

            physicalRangeOverrides[sturmpanzerKey] = `~24m - ${rangeMax}m`;

        }

        physicalRangeOverrides['British (Bishop SP)'] = `~20m - ${rangeMax}m`;

        physicalRangeOverrides['British (Churchill AVRE)'] = `~22m - ${rangeMax}m`;

        physicalRangeOverrides['Soviet Union (KV-2)'] = `~25m - ${rangeMax}m`;

        const rangeDisplay = physicalRangeOverrides[faction] || (rangeMin > 100 ? `<${rangeMin}m - ${rangeMax}m` : `${rangeMin}m - ${rangeMax}m`);



// Format main gun - extract only ammo (remove gun name)

        let mainGunText = stats.mainGun;

        const mainGunParts = mainGunText.split(' - ');

        let mainGunDisplay = '';

        if (mainGunParts[1]) {

// Extract ammo counts: "50 HE rounds, 35 SMOKE rounds, 20 HEAT rounds"

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



// Format hull gun - show if has MG, ammo count, and magazines

        let hullGunText = stats.hullGun;

        if (hullGunText.includes('NO')) {

            hullGunText = 'NO MG';

        } else {

// Extract ammo count and magazines: "200 rounds × 6 magazines"

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



// Format coaxial gun - show if has MG, ammo count, and magazines

        let coaxialGunText = stats.coaxial;

        if (coaxialGunText.includes('NO')) {

            coaxialGunText = 'NO MG';

        } else {

// Extract ammo count and magazines: "200 rounds × 6 magazines"

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



// Extract total rotation

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



// Check if values should be crossed out

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



        // Get reference to tank info button before clearing innerHTML

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

        // Append tank info button back after innerHTML clears it

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

        // Append tank info button back after innerHTML clears it

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



    // Also update compact image

    if (imgCompact && pictureCompact) {

        const webpSrc = tank.image;

        const sourceCompact = pictureCompact.querySelector('source');

        if (sourceCompact) {

            sourceCompact.srcset = webpSrc;

        }

        imgCompact.src = webpSrc;

        

        // Move compact image inside milRangeText panel on mobile

        const milRangeText = document.getElementById('milRangeText');

        if (milRangeText && window.innerWidth <= 768) {

            const compactContainer = imgCompact.closest('.faction-image-compact');

            if (compactContainer && !milRangeText.contains(compactContainer)) {

                compactContainer.classList.remove('hidden');

                milRangeText.appendChild(compactContainer);

            }

            

            // Also move tank info button inside panel on mobile

            const tankInfoBtn = document.getElementById('tankInfoIcon');

            if (tankInfoBtn && !milRangeText.contains(tankInfoBtn)) {

                tankInfoBtn.classList.remove('hidden');

                milRangeText.appendChild(tankInfoBtn);

            }

        }

    }



    // Update classified reference text

    const classifiedText = tank.classifiedRef;

    const refTextElement = document.getElementById('classifiedRefText');

    if (refTextElement) {

        refTextElement.innerHTML = `${classifiedText.ref}<br>${classifiedText.designation}<br>${classifiedText.classification}`;

    }



    updateMilRangeText();

}



// Adjust value function for increment/decrement buttons

function adjustValue(fieldId, delta) {

    // Find all inputs with this ID (handles duplicate IDs for lite/full modes)

    const allInputs = document.querySelectorAll(`input[id="${fieldId}"], input[id="${fieldId}Lite"]`);

    if (allInputs.length === 0) return;

    

    // Get value from first input

    const input = allInputs[0];

    const inputValue = input.value || '0';

    const currentValue = parseFloat(inputValue.replace('+', '')) || 0;

    let newValue = Math.round(currentValue + delta);



    // Apply limits

    if (fieldId === 'distance') {

        newValue = Math.max(0, Math.min(1000, newValue));

    } else if (fieldId === 'redNumber') {

        newValue = Math.max(-1000, Math.min(1000, newValue));

    } else if (fieldId === 'heightDiff') {

        newValue = Math.max(-5000, Math.min(5000, newValue));

    }



    // Update ALL inputs with this ID

    allInputs.forEach(inp => {

        inp.value = newValue;

    });



// Always save state when values change

    saveState();



// Trigger calculation if we have distance and auto mode is enabled

// calculate() will set all display values correctly

    const distance = parseFloat(document.getElementById('distance').value);

    if (distance && !isNaN(distance) && isAutoCalcEnabled()) {

        calculate();

    } else {

// When auto calc is off, reset base value to "--" and final value to 0000 when any value changes

        const baseValueEl = document.getElementById('baseValue');

        if (baseValueEl) {

            baseValueEl.textContent = '--';

        }

// Reset final value to 0000 when auto calc is off

        if (fieldId === 'distance' || fieldId === 'heightDiff' || fieldId === 'redNumber') {

            rollElevationToNumber(0);

// Show "--" for height and elevation when auto calc is off

            const heightValueEl = document.getElementById('heightValue');

            const redValueEl = document.getElementById('redValue');

            if (heightValueEl) { heightValueEl.textContent = '--'; heightValueEl.className = 'text-gray-300'; }

            if (redValueEl) { redValueEl.textContent = '--'; redValueEl.className = 'text-gray-300'; }

            const redValueUnitEl = document.getElementById('redValueUnit');

            if (redValueUnitEl) { redValueUnitEl.className = 'text-gray-300'; }

// Update MIL labels after values are set to "--"

            updateMilLabels();

        }

    }

}



// Constants

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

        return (y / x) * MILS_PER_RAD_APPROX;

    }



    const baseDegAbs = Math.abs(milToDegrees(baseMil));

    const baseElevRad = baseDegAbs * (Math.PI / 180.0);

    const sols = solveBallisticAnglesRad(x, y, v0, SPA_G_MPS2);

    if (!sols) {

        return (y / x) * MILS_PER_RAD_APPROX;

    }



    const a0 = sols[0];

    const a1 = sols[1];

    const chosen = (Math.abs(a0 - baseElevRad) <= Math.abs(a1 - baseElevRad)) ? a0 : a1;

    const deltaDeg = (chosen - baseElevRad) * (180.0 / Math.PI);

    return -degreesToMils(deltaDeg);

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



// Check if auto calculation is enabled

function isAutoCalcEnabled() {

    const toggle = document.getElementById('autoCalcToggle');

    return toggle ? toggle.checked : true;

}



// Helper to set value on all inputs in a NodeList (used by faction change and reset handlers)

function setAllValues(inputs, value) {

    inputs.forEach(input => { 

        input.value = value;

        // Trigger input event to ensure any listeners update

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

            // Temporarily make button visible for measurement if hidden

            const wasHidden = button.offsetHeight === 0;

            let originalVisibility = button.style.visibility;

            let originalPosition = button.style.position;



            if (wasHidden) {

                button.style.visibility = 'hidden';

                button.style.position = 'absolute';

                button.style.display = '';

            }



            // Get button height before hiding it

            let buttonHeight = button.offsetHeight;



            // Restore styles if we changed them

            if (wasHidden) {

                button.style.visibility = originalVisibility;

                button.style.position = originalPosition;

            }



            // Fallback to CSS-defined height if still 0

            if (buttonHeight === 0) {

                buttonHeight = 54;

            }



            // Hide button, show metal panel

            button.style.display = 'none';

            metalPanel.classList.remove('hidden');

            metalPanel.style.display = 'block';

            // Match metal panel height to button height exactly

            metalPanel.style.height = buttonHeight + 'px';

            button.disabled = true;

        } else {

            // Show button, hide metal panel

            button.style.display = '';

            metalPanel.classList.add('hidden');

            metalPanel.style.display = 'none';

            button.disabled = false;

        }

    }

}



// Update MIL label visibility based on whether results are calculated

function updateMilLabels() {

// MIL is always visible in mechanical counter, so this function is no longer needed

// But keeping it for compatibility with other code that calls it

    const milCounter = document.getElementById('elevationMilCounter');

    if (milCounter) {

        milCounter.style.display = '';

    }



// Update MIL label visibility based on values

    const baseValueEl = document.getElementById('baseValue');

    const baseMilLabelEl = document.getElementById('baseMilLabel');

    const redValueEl = document.getElementById('redValue');

    const redValueUnitEl = document.getElementById('redValueUnit');



// Hide MIL labels when values are "--"

    if (baseValueEl && baseMilLabelEl) {

        baseMilLabelEl.style.display = (baseValueEl.textContent.trim() === '--') ? 'none' : '';

    }

}



// Mechanical Counter System - from demo

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

// First wheel: only 0 and minus sign (no other digits)

        const firstWheelSequence = [0, '−'];

        const sequenceLength = firstWheelSequence.length;



// Create 40 cells (sequence repeated for smooth rolling)

        for (let i = 0; i < 40; i++) {

            const cell = document.createElement('div');

            cell.className = 'digit-cell';

            cell.textContent = firstWheelSequence[i % sequenceLength];

            strip.appendChild(cell);

        }

    } else {

// Regular digit wheels: 0-9 repeated (more cells for smooth animation)

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



// Position to show the letter (middle position)

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



// Always create 4 wheels (first wheel can show - or digit)

    if (currentElevationDigits.length !== 4) {

        elevationCounterElement.innerHTML = '';

        for (let i = 0; i < 4; i++) {

            const wheel = createElevationDigitWheel(i, i === 0);

            elevationCounterElement.appendChild(wheel);

        }

    }



// Initialize all strips to show 0 (or - for first wheel if negative)

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



// Ensure we have 4 wheels

    if (currentElevationDigits.length !== 4) {

        setupElevationCounter(targetNumber);

    }



// Handle first wheel separately (can show 0 or -)

    const firstStrip = document.getElementById('elevation-strip-0');

    if (firstStrip) {

        const currentFirstValue = isElevationNegative ? '-' : 0;

        const targetFirstValue = isNeg ? '-' : 0;

        const isResetting = targetNumber === 0;

        const signChanged = targetFirstValue !== currentFirstValue;

        const needsAnimation = signChanged || isResetting;



        if (needsAnimation) {

// Simple direct switch between 0 and - (no rolling animation)

            void firstStrip.offsetWidth;



            setTimeout(() => {

                if (isNeg) {

// Switch directly to minus sign (position 1)

                    firstStrip.style.transition = 'transform 0.2s ease-in-out';

                    firstStrip.style.transform = `translateY(-${1 * CELL_HEIGHT}px)`;

                } else {

// Switch directly to 0 (position 0)

                    firstStrip.style.transition = 'transform 0.2s ease-in-out';

                    firstStrip.style.transform = `translateY(0)`;

                }

            }, 0);

        }

    }



// Roll remaining 3 digits (index 1, 2, 3) with staggered delay

// Only animate digits that actually change

    for (let index = 1; index < 4; index++) {

        const strip = document.getElementById(`elevation-strip-${index}`);

        if (!strip) continue;



// Get current digit from state, but also verify from DOM transform

        let currentDigit = currentElevationDigits[index] || 0;

        let actualCurrentPosition = currentDigit * CELL_HEIGHT;

        const transform = strip.style.transform || '';

        const transformMatch = transform.match(/translateY\((-?\d+)px\)/);

        if (transformMatch) {

// Get the actual pixel position from DOM (will be negative)

            actualCurrentPosition = Math.abs(parseInt(transformMatch[1]));

// Calculate current digit from actual position (normalize to 0-9)

            currentDigit = Math.round(actualCurrentPosition / CELL_HEIGHT) % 10;

        }



        const targetDigit = targetDigits[index - 1];



// Check if digit actually changed

        if (currentDigit === targetDigit) {

// Digit hasn't changed - set position immediately without animation

            const finalSnapPosition = -(targetDigit * CELL_HEIGHT);

            strip.style.transition = 'none';

            strip.style.transform = `translateY(${finalSnapPosition}px)`;

            strip.classList.remove('rolling', 'snapping');

            continue;

        }



// Normalize current position to base range (0-9) to ensure we start from a safe position

        const normalizedCurrentPosition = currentDigit * CELL_HEIGHT;



// Calculate how many positions to move (direct movement, no rolling)

// For both upward and downward, move directly without wrapping

        let moveDistance = targetDigit - currentDigit;

// No wrapping - move directly to target (can be negative for downward)



// Calculate final animation position (direct movement)

        const finalPosition = -(normalizedCurrentPosition + moveDistance * CELL_HEIGHT);



// Snap to normalized position first (without animation)

        strip.style.transition = 'none';

        strip.style.transform = `translateY(-${normalizedCurrentPosition}px)`;



// Force reflow and wait a frame for snap to apply

        void strip.offsetWidth;

        requestAnimationFrame(() => {

// Animate with staggered delay (only for changing digits)

            setTimeout(() => {

                strip.style.transition = 'transform 0.2s ease-in-out';

                strip.style.transform = `translateY(${finalPosition}px)`;

            }, (index - 1) * 35);

        });

    }



// Update current state

    currentElevationDigits = [isNeg ? '-' : 0, targetDigits[0], targetDigits[1], targetDigits[2]];

    isElevationNegative = isNeg;

}



// Show warning with compact icon - shows icon, message hidden by default

function showWarning(warningDiv, message) {

    if (!warningDiv) return;



    const warningP = warningDiv.querySelector('p');

    const warningIconBtn = document.getElementById('warningIcon');

    const warningIconMobile = document.getElementById('warningIconMobile');

    

    if (warningP) {

        const currentMessage = message || warningP.textContent;

        warningP.textContent = currentMessage;

        

        // Also sync text to mobile warning

        const warningMobileDiv = document.getElementById('warningMobile');

        const warningMobileP = warningMobileDiv ? warningMobileDiv.querySelector('p') : null;

        if (warningMobileP) {

            warningMobileP.textContent = currentMessage;

        }

        

        // Show the warning icon button (desktop)

        if (warningIconBtn) {

            warningIconBtn.classList.remove('hidden');

        }

        // Show the warning icon button (mobile)

        if (warningIconMobile) {

            warningIconMobile.classList.remove('hidden');

        }

        

        // Add margin class to distance-controls for mobile

        document.querySelectorAll('.distance-controls').forEach(el => {

            el.classList.add('warning-margin');

        });

        

        // Keep warning message hidden by default (user must click icon to see it)

        warningDiv.classList.add('hidden');

    }

}



// Hide warning - hides both icon and message

function hideWarning(warningDiv) {

    if (!warningDiv) return;

    

    const warningIconBtn = document.getElementById('warningIcon');

    const warningIconMobile = document.getElementById('warningIconMobile');

    

    // Hide the warning message

    warningDiv.classList.add('hidden');

    

    // Hide the warning icon button (desktop)

    if (warningIconBtn) {

        warningIconBtn.classList.add('hidden');

    }

    // Hide the warning icon button (mobile)

    if (warningIconMobile) {

        warningIconMobile.classList.add('hidden');

    }

    

    // Remove margin class from distance-controls

    document.querySelectorAll('.distance-controls').forEach(el => {

        el.classList.remove('warning-margin');

    });

}



// Toggle warning message visibility when icon is clicked

function toggleWarningMessage(warningId) {

    const id = warningId || 'warning';

    const warningDiv = document.getElementById(id);

    if (warningDiv) {

        warningDiv.classList.toggle('hidden');

    }

}



// Close warning message when X is clicked

function closeWarningMessage() {

    const warningDiv = document.getElementById('warning');

    const warningDivMobile = document.getElementById('warningMobile');

    if (warningDiv) {

        warningDiv.classList.add('hidden');

    }

    if (warningDivMobile) {

        warningDivMobile.classList.add('hidden');

    }

}



// Calculate function

function calculate() {

    try {

        const faction = document.getElementById('faction').value;

        const distance = parseFloat(document.getElementById('distance').value);



// Parse heightDiff - handle +, -, and empty values

// Check if height difference toggle is enabled (default OFF)

    const heightDiffToggle = document.getElementById('heightDiffToggle');

    const heightDiffEnabled = heightDiffToggle ? heightDiffToggle.checked : false;



    // Find the visible heightDiff input (there are duplicates in lite/full modes)

    const allHeightInputs = document.querySelectorAll('input#heightDiff, input#heightDiffLite');

    let heightDiffInput = null;

    for (const input of allHeightInputs) {

        if (input.offsetParent !== null) {

            heightDiffInput = input;

            break;

        }

    }



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



// Parse redNumber - handle +, -, and empty values

    // Find the visible redNumber input (there are duplicates in lite/full modes)

    const allRedInputs = document.querySelectorAll('input#redNumber, input#redNumberLite');

    let redNumberInput = null;

    for (const input of allRedInputs) {

        if (input.offsetParent !== null) {

            redNumberInput = input;

            break;

        }

    }

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

        if (warningDiv) {

            showWarning(warningDiv, 'Please enter a valid distance');

        }

// Show default "0000 MIL" when validation fails

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

// Show default "0000 MIL" when faction error

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

    const minDist = Math.min(...Object.keys(table).filter(k => k !== 'minMil' && k !== 'maxMil').map(Number));

    const maxDist = Math.max(...Object.keys(table).filter(k => k !== 'minMil' && k !== 'maxMil').map(Number));



    let base = interpolate(table, distance);

    // Ensure base is always a valid number - fallback to interpolate if still NaN

    if (typeof base !== 'number' || isNaN(base)) {

        base = interpolate(table, distance);

    }

// Calculate final elevation: base plus height difference (converted to mils) minus tank body angle

    const usePhysicsHeightCorrection = USE_PHYSICS_HEIGHT_CORRECTION && (distance > minDist) && (distance < maxDist);

    let heightDiffMils = usePhysicsHeightCorrection

        ? computeHeightDiffMils(base, distance, heightDiff, table)

        : (heightDiff / distance) * MILS_PER_RAD_APPROX;

    if (!Number.isFinite(heightDiffMils)) {

        heightDiffMils = computeBallisticHeightDiffMils(base, distance, heightDiff);

    }

    const final = Math.round(base + heightDiffMils - redNumber);





// Check turret elevation limits

    const minMil = table.minMil;

    const maxMil = table.maxMil;



// Turret max elevation outranks distance warnings — the dial value is the hard limit.

    const lowRangeAnchor = lowRangeAnchors.get(table);

    if (final > maxMil) {

        if (warningDiv) {

            showWarning(warningDiv, `WARNING: Calculated elevation (${final} MIL) exceeds this turret's maximum elevation (${maxMil} MIL).`);

        }

    } else if (lowRangeAnchor && distance < lowRangeAnchor.minDistance) {

        if (warningDiv) {

            showWarning(warningDiv, `Warning: ${distance}m is below this vehicle's tested physical minimum (~${lowRangeAnchor.minDistance}m).`);

        }

    } else if (distance > maxDist) {

        if (warningDiv) {

            showWarning(warningDiv, `Warning: ${distance}m is above supported range (${maxDist}m max).`);

        }

    } else if (final < minMil) {

        if (warningDiv) {

            showWarning(warningDiv, `WARNING: Calculated elevation (${final} MIL) is below this turret's minimum elevation (${minMil} MIL).`);

        }

    } else {

        if (warningDiv) {

            hideWarning(warningDiv);

        }

    }



// Update elevation using mechanical counter

    rollElevationToNumber(Math.round(spaHudMilFromRaw(table, final)));



// Remove any existing animation classes to prevent animations (legacy cleanup)

    const elevationCounterEl = document.getElementById('elevationCounter');

    const elevationValueContainer = elevationCounterEl ? elevationCounterEl.closest('.armored-result-value') : null;

    if (elevationValueContainer) {

        elevationValueContainer.classList.remove(

            'elevation-count-up', 'elevation-pulse', 'elevation-slide-fade', 'elevation-scale-bounce',

            'elevation-mechanical-odometer', 'elevation-mechanical-tick', 

            'elevation-mechanical-snap', 'elevation-mechanical-gauge'

        );

    }



// ===== CRITICAL: Set ALL display values - MUST BE DONE HERE =====

// These values MUST be set and MUST NEVER be "--" after a successful calculation



// Normalize values to ensure they're numbers

    const displayHeightValue = ((typeof heightDiff === 'number' && !isNaN(heightDiff)) ? heightDiff : 0);

    const displayRedNumber = (typeof redNumber === 'number' && !isNaN(redNumber)) ? redNumber : 0;

    const displayRedNumberHud = hudQuantizeMil(displayRedNumber);



// Set base value - ALWAYS set, NEVER "--"

    const baseValueEl = document.getElementById('baseValue');

    if (baseValueEl) {

        if (typeof base === 'number' && !isNaN(base)) {

            const baseText = String(spaHudMilFromRaw(table, base));

            baseValueEl.textContent = baseText;

            baseValueEl.innerHTML = baseText;

        }

    } else {

    }



    const heightEl = document.getElementById('heightValue');

    const heightSymbolEl = document.getElementById('heightSymbol');

    if (heightSymbolEl) {

        heightSymbolEl.textContent = (displayHeightValue >= 0) ? '▲' : '▼';

        heightSymbolEl.className = 'text-gray-300';

    }

    if (heightEl) {

        heightEl.textContent = displayHeightValue + 'm';

        heightEl.className = (displayHeightValue > 0) ? 'text-green-400' : (displayHeightValue < 0 ? 'text-red-400' : 'text-gray-300');

    }



    const redElement = document.getElementById('redValue');

    const redUnitElement = document.getElementById('redValueUnit');

    if (redElement) {

        const redText = (displayRedNumberHud >= 1 ? '+' : '') + displayRedNumberHud;

        redElement.textContent = redText;

        const colorClass = displayRedNumberHud > 0 ? 'text-green-400' : (displayRedNumberHud < 0 ? 'text-red-400' : 'text-gray-300');

        redElement.className = colorClass;

        if (redUnitElement) {

            redUnitElement.className = colorClass;

        }

    }



// Final verification - ensure values are set and not overwritten

    setTimeout(() => {

        const baseEl = document.getElementById('baseValue');

        const heightEl = document.getElementById('heightValue');

        const redEl = document.getElementById('redValue');



// Re-verify and set base if needed

        if (baseEl && typeof base === 'number' && !isNaN(base)) {

            if (baseEl.textContent === '--' || baseEl.textContent === '0' || baseEl.textContent.trim() === '') {

                baseEl.textContent = String(spaHudMilFromRaw(tables[faction], base));

            }

        }



// Re-verify and set height if needed

        if (heightEl) {

            const currentText = heightEl.textContent;

            const expectedText = displayHeightValue + 'm';

            if (currentText === '--' || currentText === '0m' || currentText.trim() === '') {

                heightEl.textContent = expectedText;

            }

        }



// Re-verify and set elevation if needed

        if (redEl) {

            const currentText = redEl.textContent;

            const expectedText = (displayRedNumberHud >= 1 ? '+' : '') + displayRedNumberHud;

            if (currentText === '--' || currentText === '0' || currentText.trim() === '') {

                redEl.textContent = expectedText;

            }

        }

    }, 50);



// Update MIL labels after values are set

    updateMilLabels();



// In manual mode, focus distance input after calculation (for Enter key workflow)

// In auto mode, remove focus from calculate button to clear yellow highlight

// Skip focus on touch-primary devices (phones/tablets) to prevent keyboard from opening

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



// Persist current state

    saveState();

    } catch (error) {

// Show error to user

        const warningDiv = document.getElementById('warning');

        if (warningDiv) {

            showWarning(warningDiv, 'Error calculating elevation. Please check your inputs.');

        }

    }

}



// Explicitly expose to global scope for inline onclick handlers

window.calculate = calculate;



// Copy result to clipboard

function copyResult(buttonElement) {

// Get value from mechanical counter

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

// Get the cell at the current position (modulo to handle wrapping)

                    const cellIndex = position % cells.length;

                    const cellContent = cells[cellIndex]?.textContent || '0';

                    valueStr += cellContent;

                } else {

// Fallback: calculate digit from position

                    if (index === 0) {

// First wheel: even position = 0, odd position = '−'

                        valueStr += (position % 2 === 1) ? '−' : '0';

                    } else {

// Regular digit wheels: 0-9

                        valueStr += (position % 10);

                    }

                }

            } else {

                valueStr += '0';

            }

        });



// Process the value string

        if (valueStr.includes('−')) {

// Has minus sign - extract it and pad the numeric part

            const numericPart = valueStr.replace(/[^0-9]/g, '');

            const paddedNumeric = numericPart.padStart(4, '0');

// Remove leading zeros, but keep at least one digit

            const trimmedNumeric = paddedNumeric.replace(/^0+/, '') || '0';

            elevationValue = '−' + trimmedNumeric;

        } else {

// No minus sign - just pad to 4 digits

            const numericPart = valueStr.replace(/[^0-9]/g, '');

            const paddedNumeric = numericPart.padStart(4, '0');

// Remove leading zeros, but keep at least one digit

            elevationValue = paddedNumeric.replace(/^0+/, '') || '0';

        }

    }



// Get display values

    const baseValueEl = document.getElementById('baseValue');

    const heightValueEl = document.getElementById('heightValue');

    const redValueEl = document.getElementById('redValue');

    const heightSymbolEl = document.getElementById('heightSymbol');



    const baseValue = baseValueEl ? baseValueEl.textContent.trim() : '--';

    const heightValue = heightValueEl ? heightValueEl.textContent.trim() : '--';

    const redValue = redValueEl ? redValueEl.textContent.trim() : '--';

    const heightSymbol = heightSymbolEl ? heightSymbolEl.textContent.trim() : 'Δ';



// Format the result text

    let resultText = `Set Elevation To: ${elevationValue} MIL`;



// Get the button element - use passed element or fallback to querySelector

    const copyButton = buttonElement || document.querySelector('.copy-result-button');



// Store original content if not already stored, or always use the known original

    if (copyButton && !copyButton.dataset.originalContent) {

        copyButton.dataset.originalContent = '📋';

    }

    const originalContent = copyButton ? (copyButton.dataset.originalContent || '📋') : '📋';



// Copy to clipboard

    navigator.clipboard.writeText(resultText).then(() => {

// Show feedback

        if (copyButton) {

            copyButton.classList.add('copied');

            copyButton.innerHTML = '✓';

            setTimeout(() => {

                copyButton.innerHTML = originalContent;

                copyButton.classList.remove('copied');

            }, 2000);

        }

    }).catch(err => {

// Fallback for older browsers

        const textArea = document.createElement('textarea');

        textArea.value = resultText;

        textArea.style.position = 'fixed';

        textArea.style.opacity = '0';

        document.body.appendChild(textArea);

        textArea.select();

        try {

            document.execCommand('copy');

            if (copyButton) {

                copyButton.classList.add('copied');

                copyButton.innerHTML = '✓';

                setTimeout(() => {

                    copyButton.innerHTML = originalContent;

                    copyButton.classList.remove('copied');

                }, 2000);

            }

        } catch (err) {

            alert('Failed to copy. Please select and copy the text manually.');

        }

        document.body.removeChild(textArea);

    });

}



// Reset calculator to default values

function resetCalculator(buttonElement) {

// Get button element

    const resetButton = buttonElement || document.querySelector('.reset-result-button');



// Store original content if not already stored

    if (resetButton && !resetButton.dataset.originalContent) {

        resetButton.dataset.originalContent = '🔄';

    }

    const originalContent = resetButton ? (resetButton.dataset.originalContent || '🔄') : '🔄';



// Add resetting class and change text

    if (resetButton) {

        resetButton.classList.add('resetting');

        resetButton.innerHTML = '✓';

    }



// Reset input fields

    const distanceInputs = document.querySelectorAll('input#distance, input#distanceLite');

    const heightDiffInputs = document.querySelectorAll('input#heightDiff, input#heightDiffLite');

    const redNumberInputs = document.querySelectorAll('input#redNumber, input#redNumberLite');



    // Get current faction and calculate appropriate default distance

    const faction = document.getElementById('faction').value;

    const table = tables[faction];

    let defaultDistance = 400;

    if (table) {

        const distances = Object.keys(table)

            .filter(k => !isNaN(parseInt(k)))

            .map(k => parseInt(k))

            .sort((a, b) => a - b);

        const minRange = distances[0] || 200;

        const maxRange = distances[distances.length - 1] || 600;

        // Use the actual table minimum for short-range SPAs (AVRE), otherwise 400m.

        defaultDistance = maxRange <= 250 ? minRange : 400;

    }



    if (distanceInputs.length > 0) {

        setAllValues(distanceInputs, String(defaultDistance));

    }

    if (heightDiffInputs.length > 0) {

        setAllValues(heightDiffInputs, '0');

    }

    if (redNumberInputs.length > 0) {

        setAllValues(redNumberInputs, '0');

    }



// Recalculate to update all displays and counter

// Use setTimeout to ensure inputs are processed first

    setTimeout(() => {

        if (typeof calculate === 'function') {

            calculate();

        } else {

// Fallback: manually reset counter and displays

            if (typeof rollElevationToNumber === 'function') {

                rollElevationToNumber(0);

            } else if (typeof setupElevationCounter === 'function') {

                setupElevationCounter(0);

            }



// Reset display values

            const baseValueEl = document.getElementById('baseValue');

            const heightValueEl = document.getElementById('heightValue');

            const redValueEl = document.getElementById('redValue');



            if (baseValueEl) baseValueEl.textContent = '0';

            if (heightValueEl) heightValueEl.textContent = '0m';

            if (redValueEl) redValueEl.textContent = '0';



        }



// Hide warning if visible

        const warningDiv = document.getElementById('warning');

        if (warningDiv) {

            hideWarning(warningDiv);

        }



        if (typeof syncArmoredToggles === 'function') {

            syncArmoredToggles();

        }



// Save state

        if (typeof saveState === 'function') {

            saveState();

        }

    }, 50);



// Reset button appearance after a moment

    setTimeout(() => {

        if (resetButton) {

            resetButton.classList.remove('resetting');

            resetButton.innerHTML = originalContent;

        }

    }, 800);

}



// Explicitly expose to global scope for inline onclick handlers

window.resetCalculator = resetCalculator;



// Save current UI state to localStorage

function saveState() {

    try {

        const faction = document.getElementById('faction').value;

        // Find the visible heightDiff input to save its value

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

// Ignore storage errors (e.g., disabled storage)

    }

}



// Load UI state from localStorage if available

function loadState() {

    try {

        const raw = localStorage.getItem('hllSpaState');

        if (!raw) return;

        const state = JSON.parse(raw);



        if (state.faction) {

            const hiddenFaction = document.getElementById('faction');

            hiddenFaction.value = state.faction;



// Update custom select display

            const flagMap = {

                'British (Bishop SP)': 'BRITISH_30.webp',

                'British (Churchill AVRE)': 'BRITISH_30.webp',

                'US (Sherman M4A3 105)': 'US_30.webp',

                'Soviet Union (KV-2)': 'SOVIET_30.webp',

                'DAK (Panzer III Ausf.N)': 'GERMANY_30.webp',

                'Germany (Sturmpanzer IV Brummbär)': 'GERMANY_30.webp'

            };



            const flag = flagMap[state.faction] || 'BRITISH_30.webp';

            const selectSelected = document.getElementById('selectSelected');

// Format faction name for display (remove "105" from M4A3)

            const displayName = state.faction.replace(' (Sherman M4A3 105)', ' (Sherman M4A3)');

            selectSelected.innerHTML = `<img src="images/UI/Icons/flags/${flag}" alt="${flag.split('.')[0]}" class="flag-icon" loading="eager" decoding="async"> <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; min-width: 0;">${displayName}</span>`;



            updateFactionImage();

        }



        const distanceInputs = document.querySelectorAll('input#distance, input#distanceLite');

        if (state.distance !== undefined && state.distance !== null && state.distance !== '') {

            setAllValues(distanceInputs, state.distance);

        }



        // Set all heightDiff inputs (both lite and full modes)

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



// Update UI elements after loading state

        updateCalculateButton();

        updateToggleLEDs();

        updateHeightDiffToggleUI();

        syncArmoredToggles();

    } catch (e) {

// Ignore parse/storage errors

    }

}



function toggleArmoredSwitch(checkboxId, element) {

    try {

        const checkbox = document.getElementById(checkboxId);

        if (!checkbox) {

            return;

        }



        checkbox.checked = !checkbox.checked;



// Update visual state immediately

        if (checkbox.checked) {

            element.classList.add('active');

        } else {

            element.classList.remove('active');

        }



// Trigger the existing event handlers

        if (checkboxId === 'autoCalcToggle') {

            const event = new Event('change', { bubbles: true });

            checkbox.dispatchEvent(event);

// Also sync the toggle state to ensure it's correct

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



// Explicitly expose to global scope for inline onclick handlers

window.toggleArmoredSwitch = toggleArmoredSwitch;



// Sync armored toggles with checkboxes on load

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



// Update LED indicators

    updateToggleLEDs();

    updateHeightDiffToggleUI();

}



// Function to update LED-style toggle labels

function updateToggleLEDs() {

    const autoCalcToggle = document.getElementById('autoCalcToggle');

    const calcOnLabel = document.getElementById('calcOnLabel');

    const calcOffLabel = document.getElementById('calcOffLabel');



// Update Auto Calculation toggle labels

    if (autoCalcToggle && calcOnLabel && calcOffLabel) {

        if (autoCalcToggle.checked) {

// ON state: light up ON label with green LED, turn OFF label off

            calcOnLabel.classList.add('led-on-green');

            calcOnLabel.classList.remove('led-off');

            calcOffLabel.classList.remove('led-on-green', 'led-off');

        } else {

// OFF state: light up OFF label with red LED, turn ON label off

            calcOffLabel.classList.add('led-off');

            calcOffLabel.classList.remove('led-on-green');

            calcOnLabel.classList.remove('led-on-green', 'led-off');

        }

    }



// Update Height Difference toggle labels

    const heightDiffToggleLED = document.getElementById('heightDiffToggle');

    const heightDiffOnLabel = document.getElementById('heightDiffOnLabel');

    const heightDiffOffLabel = document.getElementById('heightDiffOffLabel');

    if (heightDiffToggleLED && heightDiffOnLabel && heightDiffOffLabel) {

        if (heightDiffToggleLED.checked) {

// ON state: light up ON label with green LED, turn OFF label off

            heightDiffOnLabel.classList.add('led-on-green');

            heightDiffOnLabel.classList.remove('led-off');

            heightDiffOffLabel.classList.remove('led-on-green', 'led-off');

        } else {

// OFF state: light up OFF label with red LED, turn ON label off

            heightDiffOffLabel.classList.add('led-off');

            heightDiffOffLabel.classList.remove('led-on-green');

            heightDiffOnLabel.classList.remove('led-on-green', 'led-off');

        }

    }

}



// Update Height Difference toggle UI (visibility and grid layout)

function updateHeightDiffToggleUI() {

    const heightDiffToggle = document.getElementById('heightDiffToggle');

    const heightDiffColumn = document.getElementById('heightDiffColumn');

    const terrainElevationColumn = document.getElementById('terrainElevationColumn');

    const heightRedGrid = document.getElementById('heightRedGrid');

    const armoredHeightDiffToggle = document.getElementById('armoredHeightDiffToggle');

    const targetHeightSection = document.getElementById('targetHeightSection');



    if (!heightDiffToggle) return;



    const isEnabled = heightDiffToggle.checked;



    // Update armored toggle switch visual

    if (armoredHeightDiffToggle) {

        if (isEnabled) {

            armoredHeightDiffToggle.classList.add('active');

            armoredHeightDiffToggle.setAttribute('aria-checked', 'true');

        } else {

            armoredHeightDiffToggle.classList.remove('active');

            armoredHeightDiffToggle.setAttribute('aria-checked', 'false');

        }

    }



    // Update visibility and grid layout

    if (heightDiffColumn && heightRedGrid) {

        if (isEnabled) {

            // Show height diff column and switch to 2-column layout

            heightDiffColumn.classList.remove('hidden');

            heightRedGrid.classList.remove('grid-cols-1');

            heightRedGrid.classList.add('grid-cols-2');

        } else {

            // Hide height diff column and switch to 1-column layout

            heightDiffColumn.classList.add('hidden');

            heightRedGrid.classList.remove('grid-cols-2');

            heightRedGrid.classList.add('grid-cols-1');

            // Reset height diff value to 0 when disabled (all inputs)

            setAllValues(document.querySelectorAll('input#heightDiff, input#heightDiffLite'), '0');

        }

    }



    // Update result display - hide/show Target Height section

    if (targetHeightSection) {

        if (isEnabled) {

            targetHeightSection.classList.remove('hidden');

        } else {

            targetHeightSection.classList.add('hidden');

        }

    }



    // Update LED labels

    updateToggleLEDs();



    // Trigger recalculation if auto calc is enabled

    if (isAutoCalcEnabled()) {

        calculate();

    }

}



// Load any saved state before wiring up interactions

updateHeightDiffToggleUI();

loadState();



// Initialize mechanical counter

setupElevationCounter(0);

initializeElevationMIL();



// Ensure faction image and badges are displayed on initial load

updateFactionImage();

updateMilRangeText();



// Run initial calculation after everything is set up (only if auto mode)

if (isAutoCalcEnabled()) {

    calculate();

} else {

// Show default "0000 MIL" when auto calculation is off on initial load

    setupElevationCounter(0);

    rollElevationToNumber(0);

    const baseEl = document.getElementById('baseValue');

    const heightEl = document.getElementById('heightValue');

    const redEl = document.getElementById('redValue');

    const redUnitEl = document.getElementById('redValueUnit');

    if (baseEl) baseEl.textContent = '--';

// Show "--" when auto calculation is off

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



// Sync armored toggles when checkboxes change

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



// Lite toggle handling

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

        if (this.checked) calculate();

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



// Lite calculate button click handler

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



// Make editing fast and keep fields from being empty

['distance', 'heightDiff', 'redNumber'].forEach(id => {

    // Get all inputs with this ID (both full and lite modes)

    const allInputs = document.querySelectorAll(`input#${id}, input#${id}Lite`);

    if (!allInputs.length) return;



// On focus/click, select the entire value so typing overwrites it

    const selectAllHandler = function() {

        const v = this.value || '';

        if (!v.length) return;

        setTimeout(() => {

            try {

                this.setSelectionRange(0, v.length);

            } catch (e) {

// some browsers may not support setSelectionRange

            }

        }, 0);

    };



// On blur, if left empty, force it back to 0

    const ensureNonEmptyHandler = function() {

        if (this.value.trim() === '') {

            this.value = '0';

            try {

                saveState();

                if (isAutoCalcEnabled()) {

                calculate();

                } else {

// When auto calc is off, reset base value to "--"

                    const baseValueEl = document.getElementById('baseValue');

                    if (baseValueEl) {

                        baseValueEl.textContent = '--';

                    }

                }

            } catch (e) {

// ignore if not available yet

            }

        } else {

// Enforce min/max limits for distance field

            if (this.id === 'distance' || this.id === 'distanceLite') {

                const numValue = parseFloat(this.value);

                if (!isNaN(numValue)) {

                    let finalValue = numValue;



                    if (numValue < 0) {

                        finalValue = 0;

                    } else if (numValue > 1000) {

                        finalValue = 1000;

                    }



                    if (finalValue !== numValue) {

                        this.value = finalValue;

                    }



// If value was clamped, trigger calculation and save state

                    if (finalValue !== numValue) {

                        saveState();

                        if (isAutoCalcEnabled()) {

                            calculate();

                        }

                    }

                }

            }



// Enforce min/max limits for redNumber field (tank body angle)

            if (this.id === 'redNumber' || this.id === 'redNumberLite') {

                const numValue = parseFloat(this.value);

                if (!isNaN(numValue)) {

                    if (numValue < -1000) {

                        this.value = '-1000';

                    } else if (numValue > 1000) {

                        this.value = '1000';

                    }

                }

            }



// Enforce min/max limits for heightDiff field

            if (this.id === 'heightDiff' || this.id === 'heightDiffLite') {

                const numValue = parseFloat(this.value);

                if (!isNaN(numValue)) {

                    if (numValue < -5000) {

                        this.value = '-5000';

                    } else if (numValue > 5000) {

                        this.value = '5000';

                    }

                }

            }



// Trigger calculation in auto mode when any input changes

// calculate() will set all display values correctly

            if (isAutoCalcEnabled()) {

                if (this.id === 'heightDiff' || this.id === 'heightDiffLite' || this.id === 'redNumber' || this.id === 'redNumberLite' || this.id === 'distance' || this.id === 'distanceLite') {

// Use setTimeout to ensure value is updated in DOM before calculation

                    setTimeout(() => {

                        calculate();

                    }, 0);

                }

            }

        }

    };



    // Apply event listeners to all instances of this input (full and lite modes)

    allInputs.forEach(input => {

        input.addEventListener('focus', selectAllHandler);

        input.addEventListener('click', selectAllHandler);

        input.addEventListener('blur', ensureNonEmptyHandler);



        // Also prevent paste of non-numeric content - wrap in forEach

        input.addEventListener('paste', function(e) {

            e.preventDefault();

            const paste = (e.clipboardData || window.clipboardData).getData('text');



            // Handle negative numbers for redNumber and heightDiff fields

            const isNegative = paste.trim().startsWith('-');

            // Remove all non-numeric characters except comma, period, and minus sign

            let cleaned = paste.replace(/[^0-9,.\-]/g, '');

            // Ensure minus sign is only at the start

            if (cleaned.includes('-')) {

                cleaned = '-' + cleaned.replace(/-/g, '');

            } else if (isNegative && !cleaned.startsWith('-')) {

                cleaned = '-' + cleaned;

            }



            // Replace comma with period for consistency, or keep first decimal separator

            if (cleaned.includes(',') && cleaned.includes('.')) {

                // If both exist, keep the first one

                const firstComma = cleaned.indexOf(',');

                const firstPeriod = cleaned.indexOf('.');

                if (firstComma < firstPeriod) {

                    cleaned = cleaned.replace(/\./g, '');

                } else {

                    cleaned = cleaned.replace(/,/g, '');

                }

            } else if (cleaned.includes(',')) {

                // Replace comma with period

                cleaned = cleaned.replace(/,/g, '.');

            }

            // Ensure only one decimal separator

            const parts = cleaned.split('.');

            if (parts.length > 2) {

                cleaned = parts[0] + '.' + parts.slice(1).join('');

            }



            // Apply limits after cleaning

            if (this.id === 'distance' || this.id === 'distanceLite') {

                const numValue = parseFloat(cleaned);

                if (!isNaN(numValue)) {

                    if (numValue < 0) cleaned = '0';

                    else if (numValue > 1000) cleaned = '1000';

                }

            } else if (this.id === 'redNumber' || this.id === 'redNumberLite') {

                const numValue = parseFloat(cleaned);

                if (!isNaN(numValue)) {

                    if (numValue < -1000) cleaned = '-1000';

                    else if (numValue > 1000) cleaned = '1000';

                }

            } else if (this.id === 'heightDiff' || this.id === 'heightDiffLite') {

                const numValue = parseFloat(cleaned);

                if (!isNaN(numValue)) {

                    if (numValue < -5000) cleaned = '-5000';

                    else if (numValue > 5000) cleaned = '5000';

                }

            }



            this.value = cleaned;



            // After paste, handle calculation or reset base value

            if (isAutoCalcEnabled()) {

                if (this.id === 'heightDiff' || this.id === 'heightDiffLite' || this.id === 'redNumber' || this.id === 'redNumberLite' || this.id === 'distance' || this.id === 'distanceLite') {

                    // Use setTimeout to ensure value is updated in DOM before calculation

                    setTimeout(() => {

                        calculate();

                    }, 0);

                }

            } else {

                // When auto calc is off, reset base value to "--" when any input changes

                if (this.id === 'heightDiff' || this.id === 'heightDiffLite' || this.id === 'redNumber' || this.id === 'redNumberLite' || this.id === 'distance' || this.id === 'distanceLite') {

                    const baseValueEl = document.getElementById('baseValue');

                    if (baseValueEl) {

                        baseValueEl.textContent = '--';

                    }

                }

            }

        });

    });

});



// Keyboard focus loop: Distance -> Height -> Elevation -> Calculate (manual only) -> Distance

const distanceInputEl = document.getElementById('distance');

const heightInputEl = document.getElementById('heightDiff');

const redInputEl = document.getElementById('redNumber');

const calcButtonEl = document.getElementById('calculateButton');



// Function to update tab loop based on auto/manual mode

function updateTabLoop() {

    const isAuto = isAutoCalcEnabled();



    if (calcButtonEl) {

        // In auto mode, remove button from tab order; in manual mode, include it

        calcButtonEl.tabIndex = isAuto ? -1 : 4;

    }

}



// Unified navigation for Enter and Tab keys

function getFocusOrder() {

    const heightDiffToggle = document.getElementById('heightDiffToggle');

    const heightDiffToggleLite = document.getElementById('heightDiffToggleLite');

    const isHeightDiffEnabled = (heightDiffToggle && heightDiffToggle.checked) || (heightDiffToggleLite && heightDiffToggleLite.checked);

    const isManualMode = !isAutoCalcEnabled();



    const order = [];



    // Helper to check if element is actually visible (not display:none and not hidden class)

    function isVisible(el) {

        if (!el) return false;

        if (el.classList.contains('hidden')) return false;

        if (el.style.display === 'none') return false;

        // Check if offsetParent is null (means display:none or not in document)

        if (el.offsetParent === null) return false;

        return true;

    }



    // Get fresh references to inputs (in case mode changed)

    // Find the visible distance input (there are duplicates in lite and full modes)

    const allDistInputs = document.querySelectorAll('input#distance, input#distanceLite');

    let distInput = null;

    for (const input of allDistInputs) {

        if (isVisible(input)) {

            distInput = input;

            break;

        }

    }



    // Find the visible heightDiff input (there are duplicates in lite and full modes)

    const allHeightInputs = document.querySelectorAll('input#heightDiff, input#heightDiffLite');

    let heightInput = null;

    for (const input of allHeightInputs) {

        if (isVisible(input)) {

            heightInput = input;

            break;

        }

    }



    // Find the visible redNumber input (there are duplicates in lite and full modes)

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



    // Distance is always first if visible

    if (isVisible(distInput)) order.push(distInput);



    // Height diff only if toggle is ON AND input is visible

    if (isHeightDiffEnabled && isVisible(heightInput)) {

        order.push(heightInput);

    }



    // Red/terrain elevation always included if visible

    if (isVisible(redInput)) order.push(redInput);



    // Calculate button only in manual mode AND if visible

    if (isManualMode && isVisible(calcBtn)) {

        order.push(calcBtn);

    }

    // Lite calculate button only in manual mode AND if visible

    if (isManualMode && isVisible(calcBtnLite)) {

        order.push(calcBtnLite);

    }



    return order;

}



function navigateFocus(e) {

    // Handle both Enter and Tab

    if (e.key !== 'Enter' && e.key !== 'Tab') return;



    const order = getFocusOrder();

    if (order.length === 0) return;



    const currentIndex = order.indexOf(document.activeElement);

    if (currentIndex === -1) return;



    e.preventDefault();



    // Calculate direction

    const direction = (e.key === 'Tab' && e.shiftKey) ? -1 : 1;

    let nextIndex = currentIndex + direction;



    // Detect touch-primary device (phones/tablets): they stop at the last field

    // instead of looping; fine-pointer devices (mouse/trackpad) always loop.

    const isCoarsePointer = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);



    // Wrap around (only on fine-pointer devices - touch-primary should not loop)

    if (!isCoarsePointer) {

        if (nextIndex < 0) nextIndex = order.length - 1;

        if (nextIndex >= order.length) nextIndex = 0;

    } else {

        // Touch-primary device: don't wrap - stay at boundaries

        if (nextIndex < 0) nextIndex = 0;

        if (nextIndex >= order.length) {

            // At the last element, just blur (don't loop)

            document.activeElement.blur();

            return;

        }

    }



    // Calculate before moving focus (only if auto calc is enabled, OR if on calculate button)

    const currentId = document.activeElement.id;

    if (currentId === 'calculateButton' || currentId === 'calculateButtonLite') {

        // Calculate button pressed - always calculate

        calculate();

        saveState();

    } else if ((currentId === 'distance' || currentId === 'distanceLite' || currentId === 'heightDiff' || currentId === 'heightDiffLite' || currentId === 'redNumber' || currentId === 'redNumberLite') && isAutoCalcEnabled()) {

        // Input field with auto calc on - calculate automatically

        calculate();

        saveState();

    } else if ((currentId === 'distance' || currentId === 'distanceLite' || currentId === 'heightDiff' || currentId === 'heightDiffLite' || currentId === 'redNumber' || currentId === 'redNumberLite') && !isAutoCalcEnabled()) {

        // Input field with auto calc off - reset final counter to 0000

        rollElevationToNumber(0);

        const baseValueEl = document.getElementById('baseValue');

        const heightValueEl = document.getElementById('heightValue');

        const redValueEl = document.getElementById('redValue');

        const redValueUnitEl = document.getElementById('redValueUnit');

        if (baseValueEl) baseValueEl.textContent = '--';

        if (heightValueEl) { heightValueEl.textContent = '--'; heightValueEl.className = 'text-gray-300'; }

        if (redValueEl) { redValueEl.textContent = '--'; redValueEl.className = 'text-gray-300'; }

        if (redValueUnitEl) redValueUnitEl.className = 'text-gray-300';

        updateMilLabels();

        saveState();

    }



    // Move focus

    const nextEl = order[nextIndex];

    if (nextEl) {

        nextEl.focus();

        if (nextEl.select) nextEl.select();

    }

}



// Attach unified handler to all inputs and button (using keydown for both Tab and Enter)

// Attach to ALL distance inputs (both lite and full modes)

document.querySelectorAll('input#distance, input#distanceLite').forEach(input => {

    input.addEventListener('keydown', navigateFocus);

    // Trigger auto-calculation on blur (click outside)

    input.addEventListener('blur', function() {

        if (isAutoCalcEnabled()) {

            calculate();

        }

    });

});



// Attach to ALL heightDiff inputs (both lite and full modes)

document.querySelectorAll('input#heightDiff, input#heightDiffLite').forEach(input => {

    input.addEventListener('keydown', navigateFocus);

    // Trigger auto-calculation on blur (click outside)

    input.addEventListener('blur', function() {

        if (isAutoCalcEnabled()) {

            calculate();

        }

    });

});



// Attach to ALL redNumber inputs (both lite and full modes)

document.querySelectorAll('input#redNumber, input#redNumberLite').forEach(input => {

    input.addEventListener('keydown', navigateFocus);

    // Trigger auto-calculation on blur (click outside)

    input.addEventListener('blur', function() {

        if (isAutoCalcEnabled()) {

            calculate();

        }

    });

});



if (calcButtonEl) calcButtonEl.addEventListener('keydown', navigateFocus);



// Attach keydown handler to lite calculate button

const calcButtonLiteEl = document.getElementById('calculateButtonLite');

if (calcButtonLiteEl) calcButtonLiteEl.addEventListener('keydown', navigateFocus);



// Sync input values between full and lite modes (bidirectional)

function syncInputValue(sourceInput, targetIds) {

    targetIds.forEach(id => {

        document.querySelectorAll('input#' + id + ', input#' + id + 'Lite').forEach(target => {

            if (target !== sourceInput && target.value !== sourceInput.value) {

                target.value = sourceInput.value;

            }

        });

    });

}



// Attach input event listeners to sync values across all modes

['distance', 'heightDiff', 'redNumber'].forEach(id => {

    document.querySelectorAll('input#' + id + ', input#' + id + 'Lite').forEach(input => {

        input.addEventListener('input', function() {

            syncInputValue(this, [id]);

        });

    });

});



// Set initial label text

updateToggleLEDs();



if (autoCalcToggle) {

    autoCalcToggle.addEventListener('change', function() {

        try {

            updateToggleLEDs();

            saveState();

            updateCalculateButton();

            updateTabLoop();

// If switching to auto, calculate immediately

            if (this.checked) {

                calculate();

            } else {

// Show default "0000 MIL" when auto calculation is turned off

            rollElevationToNumber(0);

            const baseValueEl = document.getElementById('baseValue');

            const heightValueEl = document.getElementById('heightValue');

            const redValueEl = document.getElementById('redValue');

            if (baseValueEl) baseValueEl.textContent = '--';

// Show "--" when auto calculation is off

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

// Show MIL labels for default "0000"

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

    selectItems.classList.toggle('select-hide');

    selectSelected.classList.toggle('select-arrow-active');

}



if (selectSelected) {

    // Support both click and touch events for mobile

    selectSelected.addEventListener('click', toggleDropdown);

    selectSelected.addEventListener('touchstart', toggleDropdown, { passive: false });

}



// Close dropdown when clicking outside

document.addEventListener('click', function(e) {

    if (!e.target.closest('.custom-select')) {

        selectItems.classList.add('select-hide');

        selectSelected.classList.remove('select-arrow-active');

    }

});



// Tank info modal functionality

let tankInfoIcon;

let tankInfoModal;

let closeTankInfo;

let tankInfoTitle;

let tankInfoContent;



// Mapping of tank names to screenshot folder names

const tankScreenshotMap = {

    'US (Sherman M4A3 105)': 'M4A3',

    'Soviet Union (KV-2)': 'KV2',

    'British (Churchill AVRE)': 'AVRE',

    'British (Bishop SP)': 'BISHOP',

    'Germany (Sturmpanzer IV Brummbär)': 'STURMPANZER',

    'DAK (Panzer III Ausf.N)': 'PANZER III'

};



// Function to get screenshots for a tank

function getTankScreenshots(tankName) {

    const folderName = tankScreenshotMap[tankName];

    if (!folderName) return [];



// List of screenshot filenames for each tank (using new naming convention)

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

// Use the updated screenshot set that matches the current UI styling

    return files.map(file => `images/screenshots/${folderName}/${file}`);

}



// Function to generate screenshot gallery HTML

function generateScreenshotGallery(tankName) {

    const screenshots = getTankScreenshots(tankName);

    if (screenshots.length === 0) return '';



    const galleryItems = screenshots.map((src, index) => {

        // Create WebP paths (both thumbnail and full) - all files are now WebP only

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



// Store current screenshot gallery and index

let currentScreenshotGallery = [];

let currentScreenshotIndex = -1;

let screenshotNavRequestId = 0;

let screenshotActiveSlot = 0;



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



    const nextIndex = (index + 1) % currentScreenshotGallery.length;

    const prevIndex = (index - 1 + currentScreenshotGallery.length) % currentScreenshotGallery.length;

    preloadScreenshotByIndex(nextIndex);

    preloadScreenshotByIndex(prevIndex);

}



// Function to open screenshot in lightbox (make it global)

window.openScreenshotLightbox = function(src) {

    const { lightbox, imgA, imgB } = getScreenshotLightboxElements();

    if (!lightbox || !imgA || !imgB) return;



    currentScreenshotGallery = buildScreenshotGalleryFromDOM();

    if (!currentScreenshotGallery || currentScreenshotGallery.length === 0) return;



    const screenshotItems = document.querySelectorAll('.screenshot-item');

    const clickedItem = Array.from(screenshotItems).find(item =>

        item.getAttribute('data-src') === src

    );



    if (clickedItem) {

        currentScreenshotIndex = Array.from(screenshotItems).indexOf(clickedItem);

    } else {

        currentScreenshotIndex = 0;

    }



    imgA.classList.remove('is-visible');

    imgB.classList.remove('is-visible');

    imgA.removeAttribute('src');

    imgB.removeAttribute('src');

    screenshotActiveSlot = 0;

    screenshotNavRequestId++;



    lightbox.classList.add('active');

    showScreenshotAtIndex(currentScreenshotIndex);

};



// Function to navigate between screenshots

window.navigateScreenshot = function(direction) {

    if (currentScreenshotGallery.length === 0) return;



    currentScreenshotIndex += direction;



// Loop around

    if (currentScreenshotIndex < 0) {

        currentScreenshotIndex = currentScreenshotGallery.length - 1;

    } else if (currentScreenshotIndex >= currentScreenshotGallery.length) {

        currentScreenshotIndex = 0;

    }



    showScreenshotAtIndex(currentScreenshotIndex);

};



// Function to close screenshot lightbox (make it global)

window.closeScreenshotLightbox = function() {

    const lightbox = document.getElementById('screenshotLightbox');

    if (lightbox) {

        lightbox.classList.remove('active');

    }



// Cancel any in-flight decode/load and reset visibility so re-open can't flash old content

    screenshotNavRequestId++;

    const { imgA, imgB } = getScreenshotLightboxElements();

    if (imgA) imgA.classList.remove('is-visible');

    if (imgB) imgB.classList.remove('is-visible');

};



// Keyboard navigation for lightbox

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



function showTankInfo() {

    const faction = document.getElementById('faction').value;

    const info = tankInfo[faction];



    if (info) {

        tankInfoTitle.textContent = info.title;



// Helper function to format ammunition (200 × 6 or 200/6 means rounds × magazines)

        function formatAmmo(text) {

            if (text.includes(' × ') || text.includes('×') || text.includes('/')) {

// Replace × with × and add clarification

                return text.replace(/(\d+)\s*[×/]\s*(\d+)/g, '$1 rounds × $2 magazines');

            }

            return text;

        }



// Generate screenshot gallery

        const screenshotGallery = generateScreenshotGallery(faction);



// Function to collect all image paths that will be used in the content

        function collectImagePaths(info) {

            const imagePaths = new Set();



// Collect from main gun

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



// Collect from coaxial and hull gun (T_HUD_Status_Ammo_invert_28.png)

            if (info.stats.coaxial && !info.stats.coaxial.includes('NO')) {

                imagePaths.add('images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.webp');

            }

            if (info.stats.hullGun && !info.stats.hullGun.includes('NO')) {

                imagePaths.add('images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.webp');

            }



            return Array.from(imagePaths);

        }



// Function to preload images

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

// Extract gun name and ammunition info

            const parts = text.split(' - ');

            if (parts.length === 2) {

                const gunName = parts[0];

                const ammoText = parts[1];



// Extract all ammo types with their counts - build complete HTML

                const ammoItems = [];

                const ammoMatches = ammoText.match(/(\d+)\s*(HEAT|HE|SMOKE|AP|FLYING DUSTBIN)\s*rounds/g);

                if (ammoMatches) {

                    ammoMatches.forEach(m => {

                        const match = m.match(/(\d+)\s*(HEAT|HE|SMOKE|AP|FLYING DUSTBIN)/);

                        if (match) {

                            const count = match[1];

                            const type = match[2];

// Use the dedicated shell icons when they exist, otherwise fall back to a generic ammo icon.

                            const ammoIconMap = {
                                HE: 'HE_invert_28.webp',
                                SMOKE: 'SMOKE_invert_28.webp',
                                AP: 'AP_invert_28.webp',
                                HEAT: 'AP_invert_28.webp',
                                'FLYING DUSTBIN': 'HE_invert_28.webp'
                            };
                            const imagePath = `images/UI/Icons/vehicles/${ammoIconMap[type] || 'T_HUD_Status_Ammo_invert_28.webp'}`;

// Build each ammo item with explicit image tag (inside single box)

                            ammoItems.push(`<span style="display: inline-flex; align-items: center; gap: 3px; margin-right: 8px;"><img src="${imagePath}" alt="${type}" style="width: 16px; height: 16px; object-fit: contain;" loading="eager" decoding="async"><span class="highlight-number">${count}</span> <span class="highlight-number">${type}</span></span>`);

                        }

                    });

                }



// Return gun name + single ammo box containing all ammo types

                const ammoBox = ammoItems.length > 0 

                    ? `<span class="ammo-box">${ammoItems.join('')}</span>`

                    : '';

                return `<span class="highlight-number" style="margin-right: 14px;">${gunName}</span>${ammoBox}`;

            }

            return `<span class="highlight-number">${text}</span>`;

        }



// Function to highlight elevation MIL values - full value highlighted

        function formatElevation(text) {

            return `<span class="highlight-number">${text}</span>`;

        }



// Function to highlight turret rotation

        function formatTurretRotation(text) {

            return `<span class="highlight-number">${text}</span>`;

        }



// Function to highlight top speed - full value highlighted

        function formatTopSpeed(text) {

            return `<span class="highlight-number">${text}</span>`;

        }



// Function to format numeric values with units

        function formatNumericValue(value) {

            if (!value) return '';

            return `<span class="highlight-number">${value}</span>`;

        }



// Function to highlight coaxial and hull gun

        function formatGunAmmo(text) {

            if (text.includes('NO') || text.includes('NO ')) {

                return `<span class="no-weapon-marked">${text}</span>`;

            }

// Split by " - " to separate gun name and ammo

            const parts = text.split(' - ');

            if (parts.length === 2) {

                const gunName = parts[0];

                const ammoText = parts[1];

// Format: "200 rounds × 6 magazines" into one box with image

                const ammoMatch = ammoText.match(/(\d+)\s*rounds\s*[×x]\s*(\d+)\s*magazines/i);

                if (ammoMatch) {

                    const rounds = ammoMatch[1];

                    const magazines = ammoMatch[2];

                    const imagePath = 'images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.webp';

                    return `<span class="highlight-number" style="margin-right: 14px;">${gunName}</span><span class="ammo-box"><img src="${imagePath}" alt="Ammo" style="width: 16px; height: 16px; object-fit: contain;" loading="eager" decoding="async"><span class="highlight-number">${rounds}</span> rounds × <span class="highlight-number">${magazines}</span> magazines</span>`;

                }

            }

// Fallback to highlight full text

            return `<span class="highlight-number">${text}</span>`;

        }



// Generate content for each tab

        const statsContent = `

            <div class="info-tab-content active" id="tab-stats">

                <div class="field-manual-specs">

                    <div class="spec-header">

                        <div class="spec-title">VEHICLE STATS</div>

                        <div class="spec-subtitle">Operational Data</div>

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

                            <div class="spec-value">${formatNumericValue(info.stats.pitchRate)}</div>

                        </div>

                        ` : ''}

                        ${info.stats.pitchAngleMin && info.stats.pitchAngleMax ? `

                        <div class="spec-row">

                            <div class="spec-label">PITCH ANGLE RANGE:</div>

                            <div class="spec-value">${formatNumericValue(info.stats.pitchAngleMin)} <span style="color: #000000;">to</span> ${formatNumericValue(info.stats.pitchAngleMax)}</div>

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

                    <p>${info.history}</p>

                </div>

                <div class="info-modal-section">

                    <h4>Range</h4>

                    <p>${info.realLife.range}</p>

                </div>

                <div class="info-modal-section">

                    <h4>Production</h4>

                    <p>${info.realLife.production}</p>

                </div>

                <div class="info-modal-section">

                    <h4>Service</h4>

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



// Collect and preload images before displaying modal

        const imagePaths = collectImagePaths(info);



// Preload images, then display modal

        preloadImages(imagePaths).then(() => {

            tankInfoContent.innerHTML = statsContent + screenshotsContent + historyContent;

            tankInfoModal.style.display = 'block';

            tankInfoModal.setAttribute('data-open', 'true');

            // Lock background scrolling

            document.body.style.overflow = 'hidden';

// Keep button extended when modal is open

            if (tankInfoIcon) {

                tankInfoIcon.classList.add('extended');

            }



// Reset tabs to default "stats" tab

            const tabContainer = document.querySelector('.info-modal-tabs');

            if (tabContainer) {

// Remove active from all tabs

                tabContainer.querySelectorAll('.info-modal-tab').forEach(btn => btn.classList.remove('active'));

// Set stats tab as active

                const statsTab = tabContainer.querySelector('[data-tab="stats"]');

                if (statsTab) {

                    statsTab.classList.add('active');

                }

            }



// Ensure stats content is visible

            const modalContent = document.querySelector('.info-modal-content');

            if (modalContent) {

                modalContent.querySelectorAll('.info-tab-content').forEach(content => content.classList.remove('active'));

                const statsTabContent = modalContent.querySelector('#tab-stats');

                if (statsTabContent) {

                    statsTabContent.classList.add('active');

                }

            }



// Add click handlers for screenshot items (using event delegation)

            const screenshotItems = tankInfoContent.querySelectorAll('.screenshot-item');

            screenshotItems.forEach(item => {

                item.addEventListener('click', function(e) {

                    e.stopPropagation();

                    const src = this.getAttribute('data-src');

                    const webpSrc = this.getAttribute('data-src-webp');

                    openScreenshotLightbox(webpSrc || src);

                });

            });

        });

    }

}



// Toggle tank specifications panel

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

        const clickedTab = e.target;

        const tabContainer = clickedTab.closest('.info-modal-tabs');

        const modalContent = clickedTab.closest('.info-modal-content');



        if (tabContainer && modalContent) {

// Remove active class from all tabs

            tabContainer.querySelectorAll('.info-modal-tab').forEach(btn => btn.classList.remove('active'));



// Remove active class from all content

            modalContent.querySelectorAll('.info-tab-content').forEach(content => content.classList.remove('active'));



// Add active class to clicked tab

            clickedTab.classList.add('active');



// Show corresponding content

            const tabName = clickedTab.getAttribute('data-tab');

            const content = modalContent.querySelector(`#tab-${tabName}`);

            if (content) {

                content.classList.add('active');

            }

        }

    }

});



function closeTankInfoModal() {

    if (tankInfoModal) {

        tankInfoModal.style.display = 'none';

        tankInfoModal.removeAttribute('data-open');

    }

    // Restore background scrolling

    document.body.style.overflow = '';

// Move button back to original position when modal closes

    if (tankInfoIcon) {

        tankInfoIcon.classList.remove('extended');

    }

}



// Close modal with Escape key - comprehensive handler

document.addEventListener('keydown', function(e) {

// Only handle Escape key

    if (e.key !== 'Escape' && e.key !== 'Esc' && e.keyCode !== 27) {

        return;

    }



// Check if tank info modal is open using multiple methods

    if (tankInfoModal) {

        const isOpenByStyle = tankInfoModal.style.display === 'block';

        const isOpenByData = tankInfoModal.getAttribute('data-open') === 'true';

        const isOpenByComputed = window.getComputedStyle(tankInfoModal).display === 'block';

        const isOpenByClass = tankInfoIcon && tankInfoIcon.classList.contains('extended');



// If modal is open by any method, close it

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

    // Generate tank dropdown dynamically

    generateTankDropdown();



    // Also generate lite mode dropdown if elements exist

    generateLiteTankDropdown();



    // Assign tank info modal variables after DOM is ready

    tankInfoIcon = document.getElementById('tankInfoIcon');

    tankInfoModal = document.getElementById('tankInfoModal');

    closeTankInfo = document.getElementById('closeTankInfo');

    tankInfoTitle = document.getElementById('tankInfoTitle');

    tankInfoContent = document.getElementById('tankInfoContent');



    // More Projects button

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

            // Lock background scrolling

            document.body.style.overflow = 'hidden';

        });



        closeMoreProjects.addEventListener('click', function(e) {

            e.stopPropagation();

            e.preventDefault();

            moreProjectsBox.classList.add('hidden');

            moreProjectsBox.style.display = 'none';

            moreProjectsBtn.classList.remove('extended');

            // Restore background scrolling

            document.body.style.overflow = '';

        });



        document.addEventListener('click', function(e) {

            if (e.target === moreProjectsBox) {

                moreProjectsBox.classList.add('hidden');

                moreProjectsBox.style.display = 'none';

                moreProjectsBtn.classList.remove('extended');

                // Restore background scrolling

                document.body.style.overflow = '';

            }

        });

    }



    // Mobile HLL Tools button (shares the same modal as desktop)

    const mobileHllToolsBtn = document.getElementById('mobileHllToolsBtn');

    if (mobileHllToolsBtn && moreProjectsBox && closeMoreProjects) {

        mobileHllToolsBtn.addEventListener('click', function(e) {

            e.stopPropagation();

            e.preventDefault();

            moreProjectsBox.classList.remove('hidden');

            moreProjectsBox.style.display = 'block';

            // Lock background scrolling

            document.body.style.overflow = 'hidden';

        });

    }



    // Tank info button event listener

    if (tankInfoIcon) {

        tankInfoIcon.addEventListener('click', function(e) {

            e.stopPropagation();

            e.preventDefault();

            // Close dropdown if open

            const selectItems = document.getElementById('selectItems');

            const selectSelected = document.getElementById('selectSelected');

            if (selectItems) selectItems.classList.add('select-hide');

            if (selectSelected) selectSelected.classList.remove('select-arrow-active');

            showTankInfo();

        });

    }



    // Close tank info modal

    if (closeTankInfo) {

        closeTankInfo.addEventListener('click', closeTankInfoModal);

    }



    // Close tank info modal when clicking outside

    window.addEventListener('click', function(e) {

        if (e.target === tankInfoModal) {

            closeTankInfoModal();

        }

    });



    // Wire up View Toggle

    const viewToggle = document.getElementById('viewToggle');

    if (viewToggle) {

        const togglePills = viewToggle.querySelectorAll('.toggle-pill');

        togglePills.forEach(pill => {

            pill.addEventListener('click', function(e) {

                e.preventDefault();

                const mode = this.getAttribute('data-mode');

                switchViewMode(mode);

                

                // Update active states

                togglePills.forEach(p => {

                    p.classList.remove('active');

                    p.setAttribute('aria-selected', 'false');

                });

                this.classList.add('active');

                this.setAttribute('aria-selected', 'true');

                

                // Update toggle container class

                viewToggle.classList.remove('full-active', 'lite-active');

                viewToggle.classList.add(mode === 'full' ? 'full-active' : 'lite-active');

            });

        });

        // Restore saved view mode on load (F5 keeps Lite/Full selection)

        try {

            const savedMode = localStorage.getItem('hll-calculator-mode');

            if ((savedMode === 'lite' || savedMode === 'full') && document.body.getAttribute('data-mode') !== savedMode) {

                switchViewMode(savedMode);

                togglePills.forEach(p => {

                    const active = p.getAttribute('data-mode') === savedMode;

                    p.classList.toggle('active', active);

                    p.setAttribute('aria-selected', active ? 'true' : 'false');

                });

                viewToggle.classList.remove('full-active', 'lite-active');

                viewToggle.classList.add(savedMode === 'full' ? 'full-active' : 'lite-active');

            }

        } catch (e) {

            // Ignore localStorage errors

        }

    }



    // 1. Wire up the Calculate Button

    // Helper function to detect touch/mobile devices

    function isTouchDevice() {

        return (('ontouchstart' in window) ||

            (navigator.maxTouchPoints > 0) ||

            (navigator.msMaxTouchPoints > 0));

    }



    const calcBtn = document.getElementById('calculateButton');

    if (calcBtn) {

        let touchTriggered = false;



        // Handle touch (mobile) - for visual feedback and calculation

        calcBtn.addEventListener('touchstart', function(e) {

            touchTriggered = false;

            calcBtn.classList.add('holding');

            // Haptic feedback on mobile

            if (navigator.vibrate) navigator.vibrate(10);

        }, { passive: true });



        calcBtn.addEventListener('touchend', function(e) {

            calcBtn.classList.remove('holding');

            touchTriggered = true;

            // Haptic feedback on mobile

            if (navigator.vibrate) navigator.vibrate(15);

            // Trigger calculation on mobile touch

            calculate();

        });



        calcBtn.addEventListener('touchcancel', function(e) {

            calcBtn.classList.remove('holding');

        });



        calcBtn.addEventListener('click', function(e) {

            // If touch already triggered calculation, skip

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

        let copyTouchHandled = false;

        let copyLastTouchTime = 0;



        // Handle touch events with haptic feedback

        copyBtn.addEventListener('touchstart', function(e) {

            copyTouchHandled = true;

            copyLastTouchTime = Date.now();

            e.preventDefault();

            e.stopPropagation();

        }, { passive: false });



        copyBtn.addEventListener('touchend', function(e) {

            e.preventDefault();

            e.stopPropagation();

            // Haptic feedback on release

            if (navigator.vibrate) navigator.vibrate(10);

            copyResult(this);

            setTimeout(() => { copyTouchHandled = false; }, 100);

        }, { passive: false });



        copyBtn.addEventListener('touchcancel', function() {

            copyTouchHandled = false;

        });



        // Handle click for desktop (ignore ghost clicks from touch)

        copyBtn.addEventListener('click', function(e) {

            const now = Date.now();

            if (now - copyLastTouchTime < 500 || copyTouchHandled) {

                e.preventDefault();

                e.stopPropagation();

                return;

            }

            e.preventDefault();

            e.stopPropagation();

            copyResult(this);

        });

    }



    const resetBtn = document.querySelector('.reset-result-button');

    if (resetBtn) {

        let resetTouchHandled = false;

        let resetLastTouchTime = 0;



        // Handle touch events to prevent input focus on mobile

        resetBtn.addEventListener('touchstart', function(e) {

            resetTouchHandled = true;

            resetLastTouchTime = Date.now();

            e.preventDefault();

            e.stopPropagation();

        }, { passive: false });



        resetBtn.addEventListener('touchend', function(e) {

            e.preventDefault();

            e.stopPropagation();

            // Haptic feedback on release

            if (navigator.vibrate) navigator.vibrate(10);

            resetCalculator(this);

            setTimeout(() => { resetTouchHandled = false; }, 100);

        }, { passive: false });



        resetBtn.addEventListener('touchcancel', function() {

            resetTouchHandled = false;

        });



        // Handle click for desktop (ignore ghost clicks from touch)

        resetBtn.addEventListener('click', function(e) {

            const now = Date.now();

            if (now - resetLastTouchTime < 500 || resetTouchHandled) {

                e.preventDefault();

                e.stopPropagation();

                return;

            }

            e.preventDefault();

            e.stopPropagation();

            resetCalculator(this);

        });

    }



    // 3. Wire up the Plus/Minus Buttons for all inputs

    // Handle duplicate IDs by scoping to visible containers

    function wireButton(inputId, delta) {

        // Find all inputs with this ID

        const allInputs = document.querySelectorAll(`input[id="${inputId}"], input[id="${inputId}Lite"]`);

        allInputs.forEach(input => {

            const btn = delta < 0 ? input.previousElementSibling : input.nextElementSibling;

            if (btn && btn.tagName === 'BUTTON') {

                let lastTouchTime = 0;

                let holdTimer = null;

                let repeatInterval = null;

                const HOLD_DELAY = 1500;

                const REPEAT_RATE = 100;



                let touchHandled = false;

                let touchStartY = 0;

                let touchStartX = 0;

                let isScrolling = false;



                function startHolding(e) {

                    lastTouchTime = Date.now();



                    // Add visual feedback

                    btn.classList.add('holding');



                    // Perform initial adjustment

                    adjustValue(inputId, delta);



                    // Start hold timer for auto-repeat

                    holdTimer = setTimeout(() => {

                        // After 1.5 seconds, start repeating

                        repeatInterval = setInterval(() => {

                            adjustValue(inputId, delta);

                        }, REPEAT_RATE);

                    }, HOLD_DELAY);

                }



                function stopHolding() {

                    // Clear timers

                    if (holdTimer) {

                        clearTimeout(holdTimer);

                        holdTimer = null;

                    }

                    if (repeatInterval) {

                        clearInterval(repeatInterval);

                        repeatInterval = null;

                    }

                    // Remove visual feedback

                    btn.classList.remove('holding');

                }



                // Handle touch (mobile) - allow scrolling, trigger only on clean tap

                btn.addEventListener('touchstart', function(e) {

                    touchHandled = true;

                    isScrolling = false;

                    touchStartY = e.touches[0].clientY;

                    touchStartX = e.touches[0].clientX;

                    // Just visual feedback - don't trigger yet

                    btn.classList.add('holding');

                }, { passive: true });



                btn.addEventListener('touchmove', function(e) {

                    const touchY = e.touches[0].clientY;

                    const touchX = e.touches[0].clientX;

                    const yDiff = Math.abs(touchY - touchStartY);

                    const xDiff = Math.abs(touchX - touchStartX);

                    // If moved more than 10px, it's a scroll - cancel everything

                    if (yDiff > 10 || xDiff > 10) {

                        isScrolling = true;

                        btn.classList.remove('holding');

                    }

                }, { passive: true });



                btn.addEventListener('touchend', function(e) {

                    btn.classList.remove('holding');

                    // Only trigger if we didn't scroll

                    if (!isScrolling && touchHandled) {

                        lastTouchTime = Date.now();

                        // Haptic feedback on mobile

                        if (navigator.vibrate) navigator.vibrate(10);

                        adjustValue(inputId, delta);

                    }

                    // Reset

                    setTimeout(() => {

                        touchHandled = false;

                        isScrolling = false;

                    }, 100);

                }, { passive: false });



                btn.addEventListener('touchcancel', function() {

                    btn.classList.remove('holding');

                    touchHandled = false;

                    isScrolling = false;

                });



                // Handle mouse (desktop) - skip if touch already handled

                btn.addEventListener('mousedown', function(e) {

                    if (touchHandled) return;

                    if (e.button !== 0) return;

                    startHolding(e);

                });



                btn.addEventListener('mouseup', function() {

                    if (touchHandled) return;

                    stopHolding();

                });



                btn.addEventListener('mouseleave', function() {

                    if (touchHandled) return;

                    stopHolding();

                });



                // Handle click (desktop) - for non-hold clicks

                btn.addEventListener('click', function(e) {

                    const now = Date.now();

                    // Ignore ghost clicks from touch events

                    if (now - lastTouchTime < 500 || touchHandled) {

                        e.preventDefault();

                        e.stopPropagation();

                        return;

                    }

                    e.preventDefault();

                    // Only adjust if we didn't already handle it via mousedown

                    if (!holdTimer && !repeatInterval) {

                        adjustValue(inputId, delta);

                    }

                });

            }

        });

    }

    

    // Wire up all buttons

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



                    // Handle touch start

                    newElement.addEventListener('touchstart', function(e) {

                        touchHandled = false;

                        touchStartTime = Date.now();

                        touchStartY = e.touches[0].clientY;

                    }, { passive: true });



                    // Handle touch end - only toggle if it was a tap (not a scroll)

                    newElement.addEventListener('touchend', function(e) {

                        e.preventDefault();

                        e.stopPropagation();



                        const touchEndTime = Date.now();

                        const touchEndY = e.changedTouches[0].clientY;

                        const timeDiff = touchEndTime - touchStartTime;

                        const yDiff = Math.abs(touchEndY - touchStartY);



                        // Only toggle if it was a quick tap (less than 300ms) and minimal movement (less than 10px)

                        if (timeDiff < 300 && yDiff < 10) {

                            touchHandled = true;

                            // Haptic feedback on toggle

                            if (navigator.vibrate) navigator.vibrate(15);

                            checkbox.checked = !checkbox.checked;

                            const event = new Event('change', { bubbles: true });

                            checkbox.dispatchEvent(event);

                            setTimeout(() => {

                                touchHandled = false;

                            }, 400);

                        }

                    }, { passive: false });



                    // Handle click for desktop/mouse users

                    newElement.addEventListener('click', function(e) {

                        // Only handle click if it wasn't from a touch event

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



        // Left Arrow

        if (leftZone) {

            leftZone.addEventListener('click', function(e) {

                e.preventDefault();

                e.stopPropagation();

                navigateScreenshot(-1);

            });

        }



        // Right Arrow

        if (rightZone) {

            rightZone.addEventListener('click', function(e) {

                e.preventDefault();

                e.stopPropagation();

                navigateScreenshot(1);

            });

        }



        // Close 'X' Button

        if (closeIcon) {

            closeIcon.addEventListener('click', function(e) {

                e.preventDefault();

                e.stopPropagation();

                closeScreenshotLightbox();

            });

        }



        // Close when clicking the dark background (optional quality of life)

        lightbox.addEventListener('click', function(e) {

            // Only close if clicking the background itself, not the image

            if (e.target === lightbox || e.target.id === 'screenshotLightboxStage') {

                closeScreenshotLightbox();

            }

        });

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

    // Mobile warning icon

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



    // Close warning when clicking outside of it (desktop)

    document.addEventListener('click', function(e) {

        const warningDiv = document.getElementById('warning');

        const warningIconBtn = document.getElementById('warningIcon');

        if (warningDiv && !warningDiv.classList.contains('hidden')) {

            // Check if click was outside warning banner and outside warning icon

            if (!warningDiv.contains(e.target) && 

                (!warningIconBtn || !warningIconBtn.contains(e.target))) {

                closeWarningMessage();

            }

        }

    });

    // Close mobile warning when clicking outside of it

    document.addEventListener('click', function(e) {

        const warningMobileDiv = document.getElementById('warningMobile');

        const warningIconMobile = document.getElementById('warningIconMobile');

        if (warningMobileDiv && !warningMobileDiv.classList.contains('hidden')) {

            // Check if click was outside warning banner and outside warning icon

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

        // Collapse by default on mobile

        const isMobile = window.innerWidth <= 768;

        if (isMobile && !milRangeText.classList.contains('tank-specs-collapsed')) {

            milRangeText.classList.add('tank-specs-collapsed');

        }

        // Sync toggle button collapsed class with panel state

        if (milRangeText.classList.contains('tank-specs-collapsed')) {

            tankSpecsToggleBtn.classList.add('collapsed');

        }

        // Clear text content for CSS triangle (HTML has "▼" which would show as text)

        if (tankSpecsToggleIcon) {

            tankSpecsToggleIcon.textContent = '';

        }

        

        tankSpecsToggleBtn.addEventListener('click', function(e) {

            e.preventDefault();

            e.stopPropagation();

            toggleTankSpecs();

        });

    }

}



// Run immediately if DOM is ready, or wait for DOMContentLoaded

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

        // Force button visible and move into panel

        tankInfoBtn.classList.remove('hidden');

        tankInfoBtn.style.display = 'flex';

        tankInfoBtn.style.visibility = 'visible';

        tankInfoBtn.style.opacity = '1';

        // Update text to be two lines

        const span = tankInfoBtn.querySelector('span');

        if (span && !span.textContent.includes('\n')) {

            span.textContent = 'TANK\nINFO';

        }



        if (!milRangeText.contains(tankInfoBtn)) {

            milRangeText.appendChild(tankInfoBtn);

        }

        

        // Re-render tank specs to generate compact image for mobile

        if (typeof updateMilRangeText === 'function') {

            updateMilRangeText();

        }

    } else {

        // Move button back outside panel on desktop (to original position)

        const calculatorCard = document.getElementById('calculator-card');

        if (calculatorCard && milRangeText.contains(tankInfoBtn)) {

            calculatorCard.parentNode.insertBefore(tankInfoBtn, calculatorCard.nextSibling);

        }



        // Ensure panel is expanded when switching to desktop

        milRangeText.classList.remove('tank-specs-collapsed');

        const tankSpecsToggleBtn = document.getElementById('tankSpecsToggle');

        if (tankSpecsToggleBtn) {

            tankSpecsToggleBtn.classList.remove('collapsed');

        }



        // Re-render tank specs to remove compact image for desktop

        if (typeof updateMilRangeText === 'function') {

            updateMilRangeText();

        }

    }

}



// Run mobile layout handler on DOM ready and resize

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



// Inject version on page load

if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', injectVersion);

} else {

    injectVersion();

}
