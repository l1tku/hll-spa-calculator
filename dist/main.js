// Artillery data tables
const tables = {
    'British (Bishop SP)': {
        600: 133, 573: 142, 547: 151, 520: 160, 493: 169, 467: 178,
        440: 187, 413: 196, 387: 204, 360: 213, 333: 222, 307: 231,
        280: 240, 253: 249, 227: 258, 200: 267,
        minMil: -89, maxMil: 267
    },
    'British (Churchill AVRE)': {
        600: 178, 573: 190, 547: 201, 520: 213, 493: 225, 467: 237,
        440: 249, 413: 261, 387: 273, 360: 284, 333: 296, 307: 308,
        280: 320, 253: 332, 227: 344, 200: 356,
        minMil: -89, maxMil: 356
    },
    'DAK (Panzer III Ausf.N)': {
        600: 267, 573: 284, 547: 302, 520: 320, 493: 338, 467: 356,
        440: 373, 413: 391, 387: 409, 360: 427, 333: 444, 307: 462,
        280: 480, 253: 498, 227: 516, 200: 533,
        minMil: -89, maxMil: 533
    },
    'Germany (Sturmpanzer IV Brummbär)': {
        600: 267, 573: 284, 547: 302, 520: 320, 493: 338, 467: 356,
        440: 373, 413: 391, 387: 409, 360: 427, 333: 444, 307: 462,
        280: 480, 253: 498, 227: 516, 200: 533,
        minMil: -89, maxMil: 533
    },
    'Soviet Union (KV-2)': {
        600: 267, 573: 284, 547: 302, 520: 320, 493: 338, 467: 356,
        440: 373, 413: 391, 387: 409, 360: 427, 333: 444, 307: 462,
        280: 480, 253: 498, 227: 516, 200: 533,
        minMil: -89, maxMil: 533
    },
    'US (Sherman M4A3 105)': {
        600: 267, 573: 284, 547: 302, 520: 320, 493: 338, 467: 356,
        440: 373, 413: 391, 387: 409, 360: 427, 333: 444, 307: 462,
        280: 480, 253: 498, 227: 516, 200: 533,
        minMil: -89, maxMil: 533
    }
};

let muzzleHeightByFaction = {};
const DEFAULT_MUZZLE_HEIGHTS_M = {
    'British (Bishop SP)': 2.08,
    'British (Churchill AVRE)': 1.95,
    'US (Sherman M4A3 105)': 2.52,
    'Soviet Union (KV-2)': 2.48,
    'DAK (Panzer III Ausf.N)': 1.90,
    'Germany (Sturmpanzer IV Brummbär)': 1.93
};

const TURRET_PITCH_LIMITS_DEG = {
    'US (Sherman M4A3 105)': { min: -5.7, max: 29.8 }
};

function getDefaultMuzzleHeightM(faction) {
    const v = DEFAULT_MUZZLE_HEIGHTS_M[faction];
    return (typeof v === 'number' && isFinite(v)) ? v : 2.5;
}

function getMuzzleHeightMForFaction(faction) {
    const v = muzzleHeightByFaction && Object.prototype.hasOwnProperty.call(muzzleHeightByFaction, faction)
        ? muzzleHeightByFaction[faction]
        : undefined;
    return (typeof v === 'number' && isFinite(v)) ? v : getDefaultMuzzleHeightM(faction);
}

// Tank information data (in-game statistics, history, and real life)
const tankInfo = {
    'US (Sherman M4A3 105)': {
        title: 'M4A3 Sherman with 105mm Howitzer',
        stats: {
            elevation: '-89 MIL to 533 MIL',
            hullGun: 'M1919 .30 cal - 200 rounds × 6 magazines',
            mainGun: '105mm HOWIZER - 50 HE rounds, 35 SMOKE rounds, 20 AP rounds',
            turretRotation: '360°',
            coaxial: 'M1919 .30 cal - 200 rounds × 6 magazines',
            topSpeed: '24 km/h',
            yawRate: '4°/s',
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
            apDamage: '950',
            apDirectArmor: 'Very High',
            heDamage: '590',
            heDirectArmor: 'Low',
            heExplosionArmor: 'Low',
            heDamageRadius: '31m',
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
            elevation: '-89 MIL to 533 MIL',
            hullGun: 'DT .30 cal - 200 rounds × 6 magazines',
            mainGun: '152MM M-10T - 50 HE rounds, 35 SMOKE rounds, 20 AP rounds',
            turretRotation: '360°',
            coaxial: 'NO COAXIAL',
            topSpeed: '23 km/h',
            yawRate: '4°/s',
            pitchRate: '1°/s',
            pitchAngleMin: '-5°',
            pitchAngleMax: '30°',
            hullHealth: '890',
            turretHealth: '830',
            mobilityHealth: '700',
            engineBlockHealth: '420',
            gearSwitchTime: '1.1s',
            reloadSpeed: '10s',
            maxClipsAP: '20',
            maxClipsHE: '50',
            maxClipsSmoke: '45',
            apDamage: '950',
            apDirectArmor: 'Very High',
            heDamage: '590',
            heDirectArmor: 'Low',
            heExplosionArmor: 'Low',
            heDamageRadius: '31m',
            munitionsCost: '280'
        },
        history: 'The KV-2 was a Soviet heavy tank armed with the massive 152mm M-10 howitzer (specifically the M-10T). It was designed as an assault tank to destroy fortifications and bunkers. It saw action during the Winter War against Finland (though production models were post-war) and was famously used in the early stages of Operation Barbarossa, where its heavy armor proved almost impervious to early German anti-tank guns. Despite its powerful armament, its slow speed, long reload time, and mechanical issues made it highly problematic.',
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
            mainGun: '230MM PETARD - 50 HE rounds, 35 SMOKE rounds, 20 AP rounds',
            turretRotation: '360°',
            coaxial: '7.92 BESA - 200 rounds × 6 magazines',
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
            apDamage: '950',
            apDirectArmor: 'Very High',
            heDamage: '590',
            heDirectArmor: 'Low',
            heExplosionArmor: 'Low',
            heDamageRadius: '31m',
            munitionsCost: '280'
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
            apDamage: '950',
            apDirectArmor: 'Very High',
            heDamage: '590',
            heDirectArmor: 'Low',
            heExplosionArmor: 'Low',
            heDamageRadius: '31m',
            munitionsCost: '280'
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
            elevation: '-89 MIL to 533 MIL',
            hullGun: 'NO MG DRIVER',
            mainGun: 'StuH 45 L/12 - 50 HE rounds, 35 SMOKE rounds, 20 AP rounds',
            turretRotation: '30° total (15° left and 15° right)',
            coaxial: 'NO COAXIAL GUN',
            topSpeed: '24 km/h',
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
            apDamage: '950',
            apDirectArmor: 'Very High',
            heDamage: '590',
            heDirectArmor: 'Low',
            heExplosionArmor: 'Low',
            heDamageRadius: '31m',
            munitionsCost: '280'
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
            elevation: '-89 MIL to 533 MIL',
            hullGun: 'MG34 7.92mm - 200 rounds × 6 magazines',
            mainGun: '7.5CM KwK 37 - 50 HE rounds, 35 SMOKE rounds, 20 AP rounds',
            turretRotation: '360°',
            coaxial: 'MG34 7.92mm - 200 rounds × 6 magazines',
            topSpeed: '24 km/h',
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
            apDamage: '950',
            apDirectArmor: 'Very High',
            heDamage: '590',
            heDirectArmor: 'Low',
            heExplosionArmor: 'Low',
            heDamageRadius: '31m',
            munitionsCost: '280'
        },
history: 'The Panzer III Ausf. N was a German medium tank variant armed with the short-barreled 7.5 cm KwK 37 L/24 gun. It was designed specifically for close infantry support with high-explosive (HE) rounds, as the chassis was no longer competitive in anti-tank roles. It saw service primarily on the Eastern Front, but also with the Afrika Korps and in Italy.',
        realLife: {
            range: '5,400 meters (maximum indirect fire range); effective direct fire range was around 600-1,000 meters.',
            production: 'A total of 700 Ausf. N tanks were produced between August 1942 and August 1943. Most were conversions of older Panzer III chassis (Ausf. J, L, and M) and the tank turret was fitted with the gun previously mounted on the early Panzer IV.',
            service: 'Used by the Wehrmacht on the Eastern Front, North Africa (Tunisia campaign), and Italy (1942-1944). It often served in independent tank battalions for infantry support.',
            strengths: [
                'The large-caliber, low-velocity 75mm HE shell was highly effective against infantry, unarmored targets, and field fortifications.',
                'The chassis provided good mobility and reliability.',
                'It was a highly cost-effective way to utilize older Panzer III chassis for a dedicated support role.'
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
function interpolate(table, meters) {
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

// Extrapolate for distances < minDist (200m)
    if (meters < minDist) {
        const d1 = distances[distances.length - 1];  // 200m
        const d2 = distances[distances.length - 2];  // 227m
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

    if (table && info && info.stats) {
        const stats = info.stats;
        const elevation = `${table.minMil} MIL to ${table.maxMil} MIL`;

// Format main gun - extract only ammo (remove gun name)
        let mainGunText = stats.mainGun;
        const mainGunParts = mainGunText.split(' - ');
        let mainGunDisplay = '';
        if (mainGunParts[1]) {
// Extract ammo counts: "50 HE rounds, 35 SMOKE rounds, 20 AP rounds"
            const ammoMatches = mainGunParts[1].match(/(\d+)\s*(HE|SMOKE|AP)\s*rounds/g);
            if (ammoMatches) {
                const ammoList = ammoMatches.map((m, index) => {
                    const match = m.match(/(\d+)\s*(HE|SMOKE|AP)/);
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

        milRangeText.innerHTML = `
            <div class="spec-item">
                <span class="spec-bullet">▸</span>
                <span class="spec-label">Main Gun:</span>
                <span class="spec-value">${mainGunDisplay}</span>
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
        `;
    } else if (table) {
        milRangeText.innerHTML = `
            <div class="spec-item">
                <span class="spec-bullet">▸</span>
                <span class="spec-label">Elevation:</span>
                <span class="spec-value">${table.minMil} MIL to ${table.maxMil} MIL</span>
            </div>
        `;
    }
}

// Update faction image
function updateFactionImage() {
    const faction = document.getElementById('faction').value;
    const factionMap = {
        'British (Bishop SP)': 'BISHOP_248',
        'British (Churchill AVRE)': 'AVRE_248',
        'US (Sherman M4A3 105)': 'M4A3_248',
        'Soviet Union (KV-2)': 'KV2_248',
        'DAK (Panzer III Ausf.N)': 'PANZERIII_248',
        'Germany (Sturmpanzer IV Brummbär)': 'BRUMMBAR_248'
    };

    const classifiedTextMap = {
        'British (Bishop SP)': {
            ref: 'REF: ORD-1942/SPA-007',
            designation: 'CLASSIFIED: VALENTINE-BISHOP',
            classification: 'OPERATION TORCH | 25-PDR SPA'
        },
        'British (Churchill AVRE)': {
            ref: 'REF: WO-1943/AVRE-001',
            designation: 'CLASSIFIED: CHURCHILL-290MM',
            classification: 'OVERLORD PREP | BREACHING VEHICLE'
        },
        'US (Sherman M4A3 105)': {
            ref: 'REF: OCM-1944/M4A3-105',
            designation: 'CLASSIFIED: SHERMAN-105MM',
            classification: 'OPERATION COBRA | CLOSE SUPPORT'
        },
        'Soviet Union (KV-2)': {
            ref: 'REF: STAVKA-1941/KV-2-152',
            designation: 'CLASSIFIED: KV-2 "DRUNKEN MONSTER"',
            classification: 'BARBAROSSA DEFENSE | 152MM HOWITZER'
        },
        'DAK (Panzer III Ausf.N)': {
            ref: 'REF: AK-1942/PzIII-Ausf.N',
            designation: 'CLASSIFIED: PANZER-III-AFRIKA',
            classification: 'SONNENBLUME | 75MM L/24 INFANTRY SUPPORT'
        },
        'Germany (Sturmpanzer IV Brummbär)': {
            ref: 'REF: WH-1943/StuPz-IV-150',
            designation: 'CLASSIFIED: BRUMMBÄR',
            classification: 'ZITADELLE | URBAN ASSAULT GUN'
        }
    };

    const baseName = factionMap[faction] || 'BISHOP_248';
    const img = document.getElementById('factionImage');
    const picture = img ? img.closest('picture') : null;

    if (img && picture) {
        const webpSrc = `images/tanks/${baseName}.webp`;
        const pngSrc = `images/tanks/${baseName}.png`;
        const currentSrc = img.src;
        if (currentSrc && (currentSrc.includes(baseName) || currentSrc.endsWith(`${baseName}.png`))) {
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
                    source.srcset = useWebP ? webpSrc : pngSrc;
                }
                img.src = pngSrc;
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
                    const pngImage = new Image();
                    pngImage.onload = function() {
                        if (!imageLoaded) {
                            imageLoaded = true;
                            switchImage(false);
                        }
                    };
                    pngImage.onerror = function() {
                        if (!imageLoaded) {
                            imageLoaded = true;
                            if (source) {
                                source.srcset = 'images/tanks/BISHOP_248.webp';
                            }
                            img.src = 'images/tanks/BISHOP_248.png';
                            img.style.opacity = '1';
                        }
                    };
                    pngImage.src = pngSrc;
                }
            };

            newImage.src = webpSrc;
            if (newImage.complete && newImage.naturalWidth > 0) {
                imageLoaded = true;
                switchImage(true);
            }

            img.onerror = function() {
                if (source) {
                    source.srcset = 'images/tanks/BISHOP_248.webp';
                }
                this.src = 'images/tanks/BISHOP_248.png';
                this.style.opacity = '1';
            };
        }
    }

// Update classified reference text
    const classifiedText = classifiedTextMap[faction] || classifiedTextMap['British (Bishop SP)'];
    const refTextElement = document.getElementById('classifiedRefText');
    if (refTextElement) {
        refTextElement.innerHTML = `${classifiedText.ref}<br>${classifiedText.designation}<br>${classifiedText.classification}`;
    }

    const muzzleHeightInput = document.getElementById('muzzleHeight');
    if (muzzleHeightInput) {
        const v = getMuzzleHeightMForFaction(faction);
        muzzleHeightInput.value = String(v);
    }

    updateMilRangeText();
}

// Adjust value function for increment/decrement buttons
function adjustValue(fieldId, delta) {
    const input = document.getElementById(fieldId);
    const inputValue = input.value || '0';
    const currentValue = parseFloat(inputValue.replace('+', '')) || 0;
    let newValue = (fieldId === 'muzzleHeight')
        ? (Math.round((currentValue + delta) * 10) / 10)
        : Math.round(currentValue + delta);

// Apply limits
    if (fieldId === 'distance') {
        newValue = Math.max(0, Math.min(1000, newValue));
    } else if (fieldId === 'redNumber') {
        newValue = Math.max(-1000, Math.min(1000, newValue));
    } else if (fieldId === 'heightDiff') {
        newValue = Math.max(-5000, Math.min(5000, newValue));
    } else if (fieldId === 'muzzleHeight') {
        newValue = Math.max(0, Math.min(50, newValue));
    }

// Write raw numeric value into the field for fast manual editing
    input.value = newValue;

// Update ruler if distance field changed
    if (fieldId === 'distance') {
        const snapToggle = document.getElementById('snapToggle');

// Turn off snap mode when using +/- buttons if value is not a 25m increment
        if (snapToggle && snapToggle.checked) {
            const isMultipleOf25 = Math.abs(newValue % 25) < 0.001; // Check if value is a multiple of 25
            if (!isMultipleOf25) {
                snapToggle.checked = false;
                updateToggleLEDs();
                syncArmoredToggles();
                saveState(); // Save state when snap mode is toggled off
            }
        }

        updateArmoredRuler(newValue);
    }

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
        if (fieldId === 'distance' || fieldId === 'heightDiff' || fieldId === 'muzzleHeight' || fieldId === 'redNumber') {
            rollElevationToNumber(0);
// Show "--" for height and elevation when auto calc is off
            const heightValueEl = document.getElementById('heightValue');
            const redValueEl = document.getElementById('redValue');
            if (heightValueEl) heightValueEl.textContent = '--';
            if (redValueEl) redValueEl.textContent = '--';
// Update MIL labels after values are set to "--"
            updateMilLabels();
        }
    }
}

// Constants
const SLIDER_THUMB_WIDTH = 18;
const MILS_PER_RAD_APPROX = -80;
const MILS_PER_DEG = 17.777779;
const SPA_V0_MPS = 112.5;
const SPA_G_MPS2 = 9.8;
const USE_PHYSICS_HEIGHT_CORRECTION = true;
const USE_PERFECT_SPA_MECHANIC = true;

function unwindDegrees(deg) {
    deg = ((deg + 180) % 360 + 360) % 360 - 180;
    return deg;
}

function degreesToMils(deg) {
    return deg * MILS_PER_DEG;
}

function roundToIntUnreal(x) {
    return x >= 0 ? Math.floor(x + 0.5) : Math.ceil(x - 0.5);
}

function hudQuantizeMil(mils) {
    return (roundToIntUnreal(mils * 2.0 + 0.5) >> 1);
}

function milToDegrees(mil) {
    return mil / MILS_PER_DEG;
}

function computePerfectSpaBaseMil(table, distanceMeters) {
    if (!table || !(distanceMeters > 0) || !isFinite(distanceMeters)) {
        return NaN;
    }

    const distances = Object.keys(table)
        .filter(k => k !== 'minMil' && k !== 'maxMil')
        .map(Number)
        .filter(Number.isFinite)
        .sort((a, b) => a - b);

    if (distances.length < 2) {
        return NaN;
    }

    const minRange = distances[0];
    const maxRange = distances[distances.length - 1];

    const maxPitchMil = Number(table[minRange]);
    const minPitchMil = Number(table[maxRange]);
    if (!Number.isFinite(maxPitchMil) || !Number.isFinite(minPitchMil) || !(maxRange > minRange)) {
        return NaN;
    }

    const t = (distanceMeters - minRange) / (maxRange - minRange);
    return maxPitchMil + (minPitchMil - maxPitchMil) * t;
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

function simulateSpaZAtDistanceMeters(table, mil, distanceMeters, terrainSlope, muzzleHeightMeters) {
    const targetX = distanceMeters;
    if (!(targetX > 0) || !isFinite(targetX) || !isFinite(terrainSlope) || !isFinite(muzzleHeightMeters)) {
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

    const targetZ = (-muzzleHeightMeters) + terrainSlope * targetX;

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

        const groundPrev = (-muzzleHeightMeters) + terrainSlope * prevX;
        const groundNow = (-muzzleHeightMeters) + terrainSlope * posX;
        if (posZ <= groundNow) {
            return NaN;
        }

        if (prevX <= targetX && posX >= targetX) {
            const t = Math.abs(posX - prevX) < 1e-9 ? 0 : clamp01((targetX - prevX) / (posX - prevX));
            return prevZ + (posZ - prevZ) * t;
        }
    }

    return NaN;
}

let isTrajectoryWindowVisible = false;
let lastTrajectoryPreviewArgs = null;
let lastTrajectorySim = null;
let lastTrajectorySimKey = '';
let trajectoryStaticCanvas = null;
let trajectoryStaticKey = '';
let trajectoryStaticMeta = null;
let trajectoryMarkerTimeSec = 0;
let trajectoryAnimPlaying = false;
let trajectoryAnimStartMs = 0;
let trajectoryAnimStartTimeSec = 0;
let trajectoryAnimRafId = 0;
let trajectoryImpactEffectStartMs = 0;
let trajectoryImpactEffectX = 0;
let trajectoryImpactEffectZ = 0;

function trajectorySimKey(args) {
    if (!args || !args.table) return '';
    const maxMil = Number(args.table.maxMil);
    const minMil = Number(args.table.minMil);
    return [
        String(args.faction || ''),
        Number(args.mil).toFixed(4),
        Number(args.distanceMeters).toFixed(4),
        Number(args.terrainSlope).toFixed(6),
        Number(args.muzzleHeightMeters).toFixed(4),
        Number.isFinite(minMil) ? minMil.toFixed(4) : 'NaN',
        Number.isFinite(maxMil) ? maxMil.toFixed(4) : 'NaN'
    ].join('|');
}

function invalidateTrajectoryStaticCache() {
    trajectoryStaticCanvas = null;
    trajectoryStaticKey = '';
    trajectoryStaticMeta = null;
}

function cancelTrajectoryAnimFrame() {
    if (trajectoryAnimRafId) {
        cancelAnimationFrame(trajectoryAnimRafId);
        trajectoryAnimRafId = 0;
    }
}

function setTrajectoryAnimationPlaying(nextPlaying) {
    trajectoryAnimPlaying = !!nextPlaying;
    const playBtn = document.getElementById('trajectoryPlayButton');
    if (playBtn) {
        playBtn.textContent = trajectoryAnimPlaying ? '⏸' : '▶';
    }
    if (!trajectoryAnimPlaying) {
        cancelTrajectoryAnimFrame();
    }
}

function trajectoryAnimFrame(nowMs) {
    if (!trajectoryAnimPlaying || !isTrajectoryWindowVisible || !lastTrajectorySim || !lastTrajectorySim.points) {
        setTrajectoryAnimationPlaying(false);
        return;
    }

    const impactTime = Number(lastTrajectorySim.impactTimeSec);
    if (!Number.isFinite(impactTime) || impactTime <= 0) {
        setTrajectoryAnimationPlaying(false);
        return;
    }

    const elapsedSec = (nowMs - trajectoryAnimStartMs) / 1000;
    trajectoryMarkerTimeSec = trajectoryAnimStartTimeSec + elapsedSec;

    if (trajectoryMarkerTimeSec >= impactTime) {
        trajectoryMarkerTimeSec = impactTime;
        const impactSample = sampleTrajectoryAtTime(lastTrajectorySim.points, impactTime);
        if (impactSample) {
            trajectoryImpactEffectStartMs = performance.now();
            trajectoryImpactEffectX = impactSample.x;
            trajectoryImpactEffectZ = impactSample.z;
        }
        setTrajectoryAnimationPlaying(false);
    }

    renderTrajectoryPreview(lastTrajectoryPreviewArgs);

    if (trajectoryAnimPlaying) {
        trajectoryAnimRafId = requestAnimationFrame(trajectoryAnimFrame);
    }
}

function sampleTrajectoryAtTime(points, tSec) {
    if (!points || points.length < 2 || !Number.isFinite(tSec)) return null;
    const last = points[points.length - 1];
    if (!last || !Number.isFinite(last.t)) return null;
    const t = Math.max(0, Math.min(last.t, tSec));

    let lo = 0;
    let hi = points.length - 1;
    while (lo + 1 < hi) {
        const mid = (lo + hi) >> 1;
        const tm = points[mid].t;
        if (tm <= t) lo = mid;
        else hi = mid;
    }

    const a = points[lo];
    const b = points[hi];
    const denom = (b.t - a.t);
    const u = Math.abs(denom) < 1e-9 ? 0 : clamp01((t - a.t) / denom);
    return {
        x: a.x + (b.x - a.x) * u,
        z: a.z + (b.z - a.z) * u,
        t
    };
}

function niceStep(maxValue, targetTicks) {
    const maxV = Math.max(0, Number(maxValue));
    const t = Math.max(2, Number(targetTicks) || 5);
    if (!(maxV > 0) || !Number.isFinite(maxV)) return 1;

    const raw = maxV / t;
    const exp = Math.floor(Math.log10(raw));
    const base = Math.pow(10, exp);
    const frac = raw / base;
    let niceFrac;
    if (frac <= 1) niceFrac = 1;
    else if (frac <= 2) niceFrac = 2;
    else if (frac <= 5) niceFrac = 5;
    else niceFrac = 10;
    return niceFrac * base;
}

function simulateSpaTrajectoryPoints(table, mil, distanceMeters, terrainSlope, muzzleHeightMeters) {
    const targetX = distanceMeters;
    if (!(targetX > 0) || !isFinite(mil) || !isFinite(targetX) || !isFinite(terrainSlope) || !isFinite(muzzleHeightMeters) || !table) {
        return null;
    }

    const aimedPitchDeg = milToDegrees(mil);
    const maxPitchDeg = milToDegrees(table.maxMil);
    const apexPoint = 0.6;
    const descentCurve = 1.7;
    const apexSpeedMultiplier = 0.6;
    const dispersedTravelDelay = 1.2;

    const pitchFactor = clamp01((aimedPitchDeg - -90.0) / ((maxPitchDeg - -90.0) || 1));
    const scaledApexPoint = (apexPoint - 0.01) * pitchFactor + 0.01;

    const targetZ = (-muzzleHeightMeters) + terrainSlope * targetX;

    const rad = aimedPitchDeg * (Math.PI / 180.0);
    let initX = Math.cos(rad);
    let initZ = Math.sin(rad);
    const invLen0 = 1.0 / Math.max(1e-9, Math.sqrt(initX * initX + initZ * initZ));
    initX *= invLen0;
    initZ *= invLen0;

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

    let timeSec = 0;
    const points = [{ x: 0, z: 0, t: 0 }];

    for (let i = 0; i < maxSteps; i++) {
        const prevX = posX;
        const prevZ = posZ;
        const prevT = timeSec;

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

        timeSec = prevT + dt;

        points.push({ x: posX, z: posZ, t: timeSec });

        const groundPrev = (-muzzleHeightMeters) + terrainSlope * prevX;
        const groundNow = (-muzzleHeightMeters) + terrainSlope * posX;
        if (posZ <= groundNow) {
            const denom = (posZ - prevZ) - (groundNow - groundPrev);
            const tHit = Math.abs(denom) < 1e-9 ? 0 : clamp01((groundPrev - prevZ) / denom);
            const hitX = prevX + (posX - prevX) * tHit;
            const hitZ = prevZ + (posZ - prevZ) * tHit;
            const hitT = prevT + (timeSec - prevT) * tHit;
            points.push({ x: hitX, z: hitZ, t: hitT });
            return {
                points,
                targetX,
                targetZ,
                impactX: hitX,
                impactTimeSec: hitT,
                terrainSlope,
                muzzleHeightMeters
            };
        }

        if (posX > targetX * 2.0) {
            return {
                points,
                targetX,
                targetZ,
                impactX: posX,
                impactTimeSec: timeSec,
                terrainSlope,
                muzzleHeightMeters
            };
        }
    }

    return {
        points,
        targetX,
        targetZ,
        impactX: targetX,
        impactTimeSec: timeSec,
        terrainSlope,
        muzzleHeightMeters
    };
}

function clearTrajectoryPreview() {
    const canvas = document.getElementById('trajectoryCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
}

function renderTrajectoryPreview(args) {
    const windowEl = document.getElementById('trajectoryWindow');
    const canvas = document.getElementById('trajectoryCanvas');
    if (!windowEl || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    const cssW = Math.max(1, rect.width);
    const cssH = Math.max(1, rect.height);
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(cssW * dpr));
    canvas.height = Math.max(1, Math.floor(cssH * dpr));

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    if (!args || !args.table) {
        return;
    }

    const key = trajectorySimKey(args);
    if (!lastTrajectorySim || key !== lastTrajectorySimKey) {
        lastTrajectorySim = simulateSpaTrajectoryPoints(args.table, args.mil, args.distanceMeters, args.terrainSlope, args.muzzleHeightMeters);
        lastTrajectorySimKey = key;
        trajectoryMarkerTimeSec = 0;
        setTrajectoryAnimationPlaying(false);
        invalidateTrajectoryStaticCache();
    }

    const sim = lastTrajectorySim;
    if (!sim || !sim.points || sim.points.length < 2) {
        return;
    }

    const staticKey = `${key}|${canvas.width}x${canvas.height}`;

    if (!trajectoryStaticCanvas || trajectoryStaticKey !== staticKey) {
        const off = document.createElement('canvas');
        off.width = canvas.width;
        off.height = canvas.height;
        const sctx = off.getContext('2d');
        if (!sctx) return;

        sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        sctx.clearRect(0, 0, cssW, cssH);

        const groundAt = (x) => (-args.muzzleHeightMeters) + args.terrainSlope * x;
        const pts = sim.points.map(p => ({ x: p.x, z: p.z - groundAt(p.x) }));

        const maxX = Math.max(args.distanceMeters, sim.impactX || args.distanceMeters, 1);
        let maxZ = 0;
        for (const p of pts) {
            if (Number.isFinite(p.z) && p.z > maxZ) maxZ = p.z;
        }
        maxZ = Math.max(5, maxZ);

        const padL = 44;
        const padR = 12;
        const padT = 12;
        const padB = 12;
        const plotW = Math.max(1, cssW - padL - padR);
        const plotH = Math.max(1, cssH - padT - padB);

        const xToPx = (x) => padL + (x / maxX) * plotW;
        const zToPx = (z) => padT + plotH - (z / maxZ) * plotH;

        sctx.strokeStyle = 'rgba(42, 42, 42, 0.25)';
        sctx.lineWidth = 1;
        sctx.strokeRect(padL + 0.5, padT + 0.5, plotW - 1, plotH - 1);

        const stepX = niceStep(maxX, 6);
        const stepZ = niceStep(maxZ, 5);

        sctx.font = "11px 'Courier New', monospace";
        sctx.fillStyle = 'rgba(42, 42, 42, 0.78)';
        sctx.strokeStyle = 'rgba(42, 42, 42, 0.12)';
        sctx.lineWidth = 1;

        for (let x = 0; x <= maxX + 1e-6; x += stepX) {
            const px = xToPx(x);
            sctx.beginPath();
            sctx.moveTo(px, padT);
            sctx.lineTo(px, padT + plotH);
            sctx.stroke();
            const label = `${Math.round(x)}m`;
            sctx.fillText(label, Math.min(cssW - padR - 40, px + 3), padT + plotH - 4);
        }

        for (let z = 0; z <= maxZ + 1e-6; z += stepZ) {
            const py = zToPx(z);
            sctx.beginPath();
            sctx.moveTo(padL, py);
            sctx.lineTo(padL + plotW, py);
            sctx.stroke();
            const label = `${Math.round(z)}m`;
            sctx.fillText(label, padL + 3, Math.max(padT + 11, py - 3));
        }

        sctx.strokeStyle = 'rgba(42, 42, 42, 0.55)';
        sctx.beginPath();
        sctx.moveTo(xToPx(0), zToPx(0));
        sctx.lineTo(xToPx(maxX), zToPx(0));
        sctx.stroke();

        sctx.strokeStyle = 'rgba(139, 105, 20, 0.45)';
        sctx.setLineDash([4, 4]);
        sctx.beginPath();
        sctx.moveTo(xToPx(args.distanceMeters), padT);
        sctx.lineTo(xToPx(args.distanceMeters), padT + plotH);
        sctx.stroke();
        sctx.setLineDash([]);

        sctx.strokeStyle = 'rgba(139, 105, 20, 0.95)';
        sctx.lineWidth = 2;
        sctx.beginPath();
        for (let i = 0; i < pts.length; i++) {
            const p = pts[i];
            const px = xToPx(p.x);
            const py = zToPx(p.z);
            if (i === 0) sctx.moveTo(px, py);
            else sctx.lineTo(px, py);
        }
        sctx.stroke();

        const muzzleZ = args.muzzleHeightMeters;
        sctx.fillStyle = 'rgba(139, 105, 20, 0.95)';
        sctx.beginPath();
        sctx.arc(xToPx(0), zToPx(muzzleZ), 3, 0, Math.PI * 2);
        sctx.fill();

// Tank + turret pitch visual (field manual ink style)
// Anchor the muzzle to the trajectory origin (x=0, z=muzzleHeight).
        let pitchDeg = milToDegrees(args.mil);
        const pitchLimits = (args.faction && TURRET_PITCH_LIMITS_DEG[args.faction]) ? TURRET_PITCH_LIMITS_DEG[args.faction] : null;
        if (pitchLimits && Number.isFinite(pitchLimits.min) && Number.isFinite(pitchLimits.max)) {
            pitchDeg = Math.max(pitchLimits.min, Math.min(pitchLimits.max, pitchDeg));
        }
        const pitchRad = (Number.isFinite(pitchDeg) ? pitchDeg : 0) * (Math.PI / 180.0);
// Convert to screen-space direction (account for axis scaling)
        const sx = plotW / maxX;
        const sy = plotH / maxZ;
        let dx = Math.cos(pitchRad) * sx;
        let dy = -Math.sin(pitchRad) * sy;
        const invLen = 1.0 / Math.max(1e-9, Math.sqrt(dx * dx + dy * dy));
        dx *= invLen;
        dy *= invLen;

        const turretR = 6;
        const muzzlePx = xToPx(0);
        const muzzlePy = zToPx(args.muzzleHeightMeters);

// Place turret center so the barrel starts at the muzzle point.
        const turretCX = muzzlePx - dx * turretR;
        const turretCY = muzzlePy - dy * turretR;

// Hull/tracks are drawn relative to the turret center.
        const hullW = 36;
        const hullH = 10;
        const tracksW = 48;
        const tracksH = 8;
        const hullX = turretCX - 16;
        const hullY = turretCY + 4;
        const tracksX = hullX - 6;
        const tracksY = hullY + hullH;

// Tracks
        sctx.fillStyle = 'rgba(42, 42, 42, 0.55)';
        sctx.fillRect(tracksX, tracksY, tracksW, tracksH);
// Hull
        sctx.fillStyle = 'rgba(42, 42, 42, 0.35)';
        sctx.fillRect(hullX, hullY, hullW, hullH);
// Turret
        sctx.fillStyle = 'rgba(42, 42, 42, 0.45)';
        sctx.beginPath();
        sctx.arc(turretCX, turretCY, turretR, 0, Math.PI * 2);
        sctx.fill();
// Barrel
        const bx0 = muzzlePx;
        const by0 = muzzlePy;
        const bx1 = bx0 + dx * 28;
        const by1 = by0 + dy * 28;
        sctx.strokeStyle = 'rgba(139, 105, 20, 0.9)';
        sctx.lineWidth = 2;
        sctx.beginPath();
        sctx.moveTo(bx0, by0);
        sctx.lineTo(bx1, by1);
        sctx.stroke();

        trajectoryStaticCanvas = off;
        trajectoryStaticKey = staticKey;
        trajectoryStaticMeta = {
            dpr,
            cssW,
            cssH,
            padL,
            padT,
            plotW,
            plotH,
            maxX,
            maxZ,
            terrainSlope: args.terrainSlope,
            muzzleHeightMeters: args.muzzleHeightMeters,
            distanceMeters: args.distanceMeters
        };
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (trajectoryStaticCanvas) {
        ctx.drawImage(trajectoryStaticCanvas, 0, 0);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const marker = sampleTrajectoryAtTime(sim.points, trajectoryMarkerTimeSec);
    if (marker) {
        const meta = trajectoryStaticMeta;
        const groundAt = (x) => (-meta.muzzleHeightMeters) + meta.terrainSlope * x;
        const markerRelZ = marker.z - groundAt(marker.x);
        const xToPx = (x) => meta.padL + (x / meta.maxX) * meta.plotW;
        const zToPx = (z) => meta.padT + meta.plotH - (z / meta.maxZ) * meta.plotH;
        ctx.fillStyle = 'rgba(127, 29, 29, 0.92)';
        ctx.beginPath();
        ctx.arc(xToPx(marker.x), zToPx(markerRelZ), 3.5, 0, Math.PI * 2);
        ctx.fill();
    }

// Impact effect (brief expanding ring)
    if (trajectoryImpactEffectStartMs && trajectoryStaticMeta) {
        const meta = trajectoryStaticMeta;
        const t = (performance.now() - trajectoryImpactEffectStartMs) / 1000.0;
        if (t > 0.6) {
            trajectoryImpactEffectStartMs = 0;
        } else {
            const groundAt = (x) => (-meta.muzzleHeightMeters) + meta.terrainSlope * x;
            const relZ = trajectoryImpactEffectZ - groundAt(trajectoryImpactEffectX);
            const xToPx = (x) => meta.padL + (x / meta.maxX) * meta.plotW;
            const zToPx = (z) => meta.padT + meta.plotH - (z / meta.maxZ) * meta.plotH;
            const px = xToPx(trajectoryImpactEffectX);
            const py = zToPx(relZ);

            const r = 6 + t * 42;
            const a = 1.0 - (t / 0.6);
            ctx.save();
            ctx.globalAlpha = Math.max(0, Math.min(1, a));
            ctx.strokeStyle = 'rgba(127, 29, 29, 0.85)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px, py, r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.strokeStyle = 'rgba(139, 105, 20, 0.6)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(px, py, r * 0.65, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        }
    }

    const hud = document.getElementById('trajectoryHud');
    if (hud) {
        const impactTime = Number(sim.impactTimeSec);
        const tof = Number.isFinite(impactTime) ? impactTime : NaN;
        let maxRelZ = 0;
        const meta = trajectoryStaticMeta;
        if (meta && Number.isFinite(meta.maxZ)) {
            maxRelZ = meta.maxZ;
        }
        const cur = Math.max(0, Math.min(tof || 0, trajectoryMarkerTimeSec));
        const tStr = Number.isFinite(tof) ? `${cur.toFixed(2)}/${tof.toFixed(2)}s` : '--';
        const pitchDeg = milToDegrees(args.mil);
        const pitchStr = Number.isFinite(pitchDeg) ? `${pitchDeg.toFixed(1)}°` : '--';
        hud.textContent = `TOF ${tStr} | Pitch ${pitchStr} | Range ${Math.round(args.distanceMeters)}m | Hmax ${Math.round(maxRelZ)}m | ${Math.round(args.mil)} MIL`;
    }
}

function setTrajectoryWindowVisible(nextVisible) {
    const windowEl = document.getElementById('trajectoryWindow');
    if (!windowEl) return;
    isTrajectoryWindowVisible = !!nextVisible;
    windowEl.style.display = isTrajectoryWindowVisible ? 'block' : 'none';
    if (isTrajectoryWindowVisible) {
        renderTrajectoryPreview(lastTrajectoryPreviewArgs);
    } else {
        setTrajectoryAnimationPlaying(false);
        invalidateTrajectoryStaticCache();
    }
}

function toggleTrajectoryWindow() {
    setTrajectoryWindowVisible(!isTrajectoryWindowVisible);
}

function computeObjectTopHeightDiffMils(baseMil, distanceMeters, targetHeightAboveGroundMeters, muzzleHeightMeters, groundSlope, table) {
    const x = distanceMeters;
    if (!(x > 0) || !isFinite(baseMil) || !isFinite(x) || !isFinite(targetHeightAboveGroundMeters) || !isFinite(muzzleHeightMeters) || !isFinite(groundSlope) || !table) {
        return 0;
    }

    const desiredZ = (-muzzleHeightMeters) + (groundSlope * x) + targetHeightAboveGroundMeters;

    const lo0 = Number(table.minMil);
    const hi0 = Number(table.maxMil);
    if (!Number.isFinite(lo0) || !Number.isFinite(hi0) || !(hi0 > lo0)) {
        return computeBallisticHeightDiffMils(baseMil, x, desiredZ);
    }

    let lo = lo0;
    let hi = hi0;
    let fLo = simulateSpaZAtDistanceMeters(table, lo, x, groundSlope, muzzleHeightMeters) - desiredZ;
    let fHi = simulateSpaZAtDistanceMeters(table, hi, x, groundSlope, muzzleHeightMeters) - desiredZ;

    if (!Number.isFinite(fLo) || !Number.isFinite(fHi)) {
        return computeBallisticHeightDiffMils(baseMil, x, desiredZ);
    }

    if (fLo === 0) return lo - baseMil;
    if (fHi === 0) return hi - baseMil;
    if (fLo * fHi > 0) {
        return computeBallisticHeightDiffMils(baseMil, x, desiredZ);
    }

    for (let i = 0; i < 26; i++) {
        const mid = (lo + hi) * 0.5;
        const zMid = simulateSpaZAtDistanceMeters(table, mid, x, groundSlope, muzzleHeightMeters);
        if (!Number.isFinite(zMid)) {
            return computeBallisticHeightDiffMils(baseMil, x, desiredZ);
        }
        const fMid = zMid - desiredZ;
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
    return toggle ? toggle.checked : true; // Default to auto
}

// Function to update display values from input fields ONLY when not calculated
// This should NOT overwrite calculated values from calculate() function
function updateDisplayValues() {
    const heightInput = document.getElementById('heightDiff');
    const muzzleHeightInput = document.getElementById('muzzleHeight');
    const redInput = document.getElementById('redNumber');
    const distanceInput = document.getElementById('distance');
    const factionInput = document.getElementById('faction');
    const heightEl = document.getElementById('heightValue');
    const redEl = document.getElementById('redValue');
    const baseEl = document.getElementById('baseValue');
    const heightSymbolEl = document.getElementById('heightSymbol');

// Only update base if it's "--" or empty (error state)
    if (baseEl && distanceInput && factionInput) {
        if (baseEl.textContent === '--' || baseEl.textContent.trim() === '') {
            const distance = parseFloat(distanceInput.value);
            const faction = factionInput.value;
            if (distance && !isNaN(distance) && tables[faction]) {
                const base = interpolate(tables[faction], distance);
                if (!isNaN(base)) {
                    baseEl.textContent = String(hudQuantizeMil(base));
                }
            }
        }
    }

// Only update height if it's "--" or empty (error state)
    if (heightEl && heightInput) {
        if (heightEl.textContent === '--' || heightEl.textContent.trim() === '') {
            const faction = factionInput ? factionInput.value : '';
            const enteredHeight = parseFloat(heightInput.value) || 0;
            const muzzleHeight = getMuzzleHeightMForFaction(faction);
            if (muzzleHeightInput) {
                muzzleHeightInput.value = String(muzzleHeight);
            }

            const hText = (enteredHeight >= 0 ? '+' : '') + enteredHeight + 'm';
            heightEl.textContent = hText;
            heightEl.className = enteredHeight >= 0 ? 'text-green-400' : 'text-red-400';
            if (heightSymbolEl) {
                heightSymbolEl.textContent = (enteredHeight >= 0) ? '▲' : '▼';
                heightSymbolEl.className = 'text-gray-300';
            }
        }
    }

// Only update elevation if it's "--" or empty (error state)
    if (redEl && redInput) {
        if (redEl.textContent === '--' || redEl.textContent.trim() === '') {
            const rVal = parseFloat(redInput.value) || 0;
            const displayRVal = hudQuantizeMil(rVal);
            const rText = (displayRVal >= 1 ? '+' : '') + displayRVal;
            redEl.textContent = rText;
            const colorClass = displayRVal >= 0 ? 'text-green-400' : 'text-red-400';
            redEl.className = colorClass;
            const redUnitEl = document.getElementById('redValueUnit');
            if (redUnitEl) {
                redUnitEl.className = colorClass;
            }
        }
    }
}

// Update calculate button visibility based on mode
function updateCalculateButton() {
    const button = document.getElementById('calculateButton');
    const metalPanel = document.getElementById('metalPanel');
    const isAuto = isAutoCalcEnabled();
    if (button && metalPanel) {
        if (isAuto) {
// Ensure button is visible to get its height
            if (button.style.display === 'none') {
                button.style.display = '';
            }
// Get button height before hiding it
            const buttonHeight = button.offsetHeight;
// Hide button, show metal panel
            button.style.display = 'none';
            metalPanel.style.display = 'block';
// Match metal panel height to button height exactly
            metalPanel.style.height = buttonHeight + 'px';
            button.disabled = true;
        } else {
// Show button, hide metal panel
            button.style.display = '';
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
    if (redValueEl && redValueUnitEl) {
        redValueUnitEl.style.display = (redValueEl.textContent.trim() === '--') ? 'none' : '';
    }
}

// Sync ruler with input field
function syncSliderWithInput() {
    const distanceInput = document.getElementById('distance');
    const armoredRuler = document.getElementById('armoredRuler');

    distanceInput.addEventListener('input', function() {
        const snapToggle = document.getElementById('snapToggle');
        const inputValue = parseFloat(this.value) || 400;

// Turn off snap mode if value is not a 25m increment
        if (snapToggle && snapToggle.checked) {
            const isMultipleOf25 = Math.abs(inputValue % 25) < 0.001; // Check if value is a multiple of 25
            if (!isMultipleOf25) {
                snapToggle.checked = false;
                syncArmoredToggles();
                updateToggleLEDs();
                saveState(); // Save state when snap mode is toggled off
            }
        }

        updateArmoredRuler(inputValue);
        if (isAutoCalcEnabled()) {
            calculate();
        } else {
// When auto calc is off, reset base value to "--" and final value to 0000
            const baseValueEl = document.getElementById('baseValue');
            if (baseValueEl) {
                baseValueEl.textContent = '--';
            }
            rollElevationToNumber(0);
// Show "--" for height and elevation when auto calc is off
            const heightValueEl = document.getElementById('heightValue');
            const redValueEl = document.getElementById('redValue');
            if (heightValueEl) heightValueEl.textContent = '--';
            if (redValueEl) redValueEl.textContent = '--';
// Update MIL labels after values are set to "--"
            updateMilLabels();
        }
        saveState();
    });

// Make ruler draggable with pixel-perfect snapping
    if (armoredRuler) {
        let isDragging = false;

// Helper function to calculate value from mouse position
        function calculateValueFromMouse(e, rulerElement) {
            const containerRect = rulerElement.getBoundingClientRect();
            let relativeX = e.clientX - containerRect.left;
// Account for padding so clicks map to the same grid as marks
            const style = getComputedStyle(rulerElement);
            const padLeft = parseFloat(style.paddingLeft) || 0;
            const padRight = parseFloat(style.paddingRight) || 0;
            const usableWidth = Math.max(1, (rulerElement.clientWidth || containerRect.width) - padLeft - padRight);

// Clamp to padded area
            relativeX = Math.max(padLeft, Math.min(relativeX, padLeft + usableWidth));

            const min = 200;
            const max = 600;
            const range = max - min;

// Align click math with rendering math (usable width)
            const ratio = Math.max(0, Math.min(1, (relativeX - padLeft) / usableWidth));

            let newValue = min + ratio * range;

// Apply snap if enabled - snap to nearest 25m mark
            const snapToggle = document.getElementById('snapToggle');
            if (snapToggle && snapToggle.checked) {
// Snap to nearest 25m increment
                newValue = Math.round(newValue / 25) * 25;
            } else {
// Round to nearest integer when not snapping
                newValue = Math.round(newValue);
            }

            return Math.max(min, Math.min(max, newValue));
        }

// Helper function to update indicator position only (lightweight for dragging)
        function updateIndicatorOnly(newValue) {
            const indicator = document.getElementById('armoredRulerIndicator');
            if (!indicator || !armoredRuler) return;

            const min = 200;
            const max = 600;
            const range = max - min;
            const clampedValue = Math.max(min, Math.min(max, newValue));

            const style = getComputedStyle(armoredRuler);
            const padLeft = parseFloat(style.paddingLeft) || 0;
            const padRight = parseFloat(style.paddingRight) || 0;
            const rulerWidth = armoredRuler.clientWidth || armoredRuler.getBoundingClientRect().width;
            const usableWidth = Math.max(1, rulerWidth - padLeft - padRight);

            const ratio = (clampedValue - min) / range;
            const pixelPosition = Math.round(ratio * usableWidth) + padLeft;
            indicator.style.left = pixelPosition + 'px';
        }

// Helper function to update value (full update with calculations)
        function updateValue(newValue, skipExpensive = false) {
            distanceInput.value = newValue;

            if (skipExpensive) {
// During dragging, only update indicator position
                updateIndicatorOnly(newValue);
// Trigger calculation if auto mode is enabled, even during drag
                if (isAutoCalcEnabled()) {
                    calculate();
                } else {
// When auto calc is off, reset base value to "--" and final value to 0000
                    const baseValueEl = document.getElementById('baseValue');
                    if (baseValueEl) {
                        baseValueEl.textContent = '--';
                    }
                    rollElevationToNumber(0);
// Show "--" for height and elevation when auto calc is off
                    const heightValueEl = document.getElementById('heightValue');
                    const redValueEl = document.getElementById('redValue');
                    if (heightValueEl) heightValueEl.textContent = '--';
                    if (redValueEl) redValueEl.textContent = '--';
// Update MIL labels after values are set to "--"
                    updateMilLabels();
                }
            } else {
// Full update when not dragging
                updateArmoredRuler(newValue);

                if (isAutoCalcEnabled()) {
                    calculate();
                } else {
// When auto calc is off, reset base value to "--" and final value to 0000
                    const baseValueEl = document.getElementById('baseValue');
                    if (baseValueEl) {
                        baseValueEl.textContent = '--';
                    }
                    rollElevationToNumber(0);
// Show "--" for height and elevation when auto calc is off
                    const heightValueEl = document.getElementById('heightValue');
                    const redValueEl = document.getElementById('redValue');
                    if (heightValueEl) heightValueEl.textContent = '--';
                    if (redValueEl) redValueEl.textContent = '--';
// Update MIL labels after values are set to "--"
                    updateMilLabels();
                }
                saveState();
            }
        }

// Throttle using requestAnimationFrame
        let rafId = null;
        let pendingValue = null;

        function scheduleUpdate(newValue, skipExpensive) {
            pendingValue = { value: newValue, skipExpensive: skipExpensive };
            if (rafId === null) {
                rafId = requestAnimationFrame(() => {
                    if (pendingValue) {
                        updateValue(pendingValue.value, pendingValue.skipExpensive);
                        pendingValue = null;
                    }
                    rafId = null;
                });
            }
        }

// Helper to get coordinates from mouse or touch event
        function getEventCoordinates(e) {
            if (e.touches && e.touches.length > 0) {
                return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
            }
            return { clientX: e.clientX, clientY: e.clientY };
        }

// Mouse down - start dragging
        armoredRuler.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault(); // Prevent text selection

            const newValue = calculateValueFromMouse(e, this);
            updateValue(newValue, false); // Full update on initial click
        });

// Touch start - start dragging
        armoredRuler.addEventListener('touchstart', function(e) {
            isDragging = true;
            e.preventDefault(); // Prevent scrolling

            const coords = getEventCoordinates(e);
            const touchEvent = { clientX: coords.clientX };
            const newValue = calculateValueFromMouse(touchEvent, this);
            updateValue(newValue, false); // Full update on initial touch
        }, { passive: false });

// Mouse move - update while dragging (throttled)
        document.addEventListener('mousemove', function(e) {
            if (isDragging && armoredRuler) {
                e.preventDefault();
                const newValue = calculateValueFromMouse(e, armoredRuler);
                scheduleUpdate(newValue, true); // Lightweight update during drag
            }
        });

// Touch move - update while dragging (throttled)
        document.addEventListener('touchmove', function(e) {
            if (isDragging && armoredRuler) {
                e.preventDefault();
                const coords = getEventCoordinates(e);
                const touchEvent = { clientX: coords.clientX };
                const newValue = calculateValueFromMouse(touchEvent, armoredRuler);
                scheduleUpdate(newValue, true); // Lightweight update during drag
            }
        }, { passive: false });

// Mouse up - stop dragging and do full update
        document.addEventListener('mouseup', function() {
            if (isDragging) {
                isDragging = false;
// Cancel any pending RAF updates
                if (rafId !== null) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
// Do final full update with calculations
                if (pendingValue) {
                    updateValue(pendingValue.value, false);
                    pendingValue = null;
                } else {
// Ensure final value is saved
                    const currentValue = parseFloat(distanceInput.value);
                    if (!isNaN(currentValue)) {
                        updateValue(currentValue, false);
                    }
                }
            }
        });

// Touch end - stop dragging and do full update
        document.addEventListener('touchend', function() {
            if (isDragging) {
                isDragging = false;
// Cancel any pending RAF updates
                if (rafId !== null) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
// Do final full update with calculations
                if (pendingValue) {
                    updateValue(pendingValue.value, false);
                    pendingValue = null;
                } else {
// Ensure final value is saved
                    const currentValue = parseFloat(distanceInput.value);
                    if (!isNaN(currentValue)) {
                        updateValue(currentValue, false);
                    }
                }
            }
        });

// Touch cancel - stop dragging
        document.addEventListener('touchcancel', function() {
            if (isDragging) {
                isDragging = false;
                if (rafId !== null) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
                pendingValue = null;
            }
        });

// Mouse leave - stop dragging if mouse leaves the ruler
        armoredRuler.addEventListener('mouseleave', function() {
            if (isDragging) {
// Keep dragging active even when mouse leaves, but stop on mouseup
            }
        });
    }

// Initialize ruler position
    updateArmoredRuler(parseFloat(distanceInput.value) || 400);
}

// Update armored ruler with marks and indicator - pixel perfect
function updateArmoredRuler(value) {
    const ruler = document.getElementById('armoredRuler');
    const indicator = document.getElementById('armoredRulerIndicator');
    if (!ruler || !indicator) return;

// Get padding to align marks/indicator inside the box
    const style = getComputedStyle(ruler);
    const padLeft = parseFloat(style.paddingLeft) || 0;
    const padRight = parseFloat(style.paddingRight) || 0;

// Get actual pixel width of ruler (content box, excluding border)
    let rulerWidth = ruler.clientWidth;
    if (!rulerWidth) {
        const rulerRect = ruler.getBoundingClientRect();
        rulerWidth = rulerRect.width;
    }

// Usable width for marks/indicator (inside padding)
    const usableWidth = Math.max(1, rulerWidth - padLeft - padRight);

// If ruler not yet rendered (width is 0), use offsetWidth or schedule retry
    if (rulerWidth === 0) {
        rulerWidth = ruler.offsetWidth;
        if (rulerWidth === 0) {
// Ruler not ready yet, retry on next frame
            requestAnimationFrame(() => updateArmoredRuler(value));
            return;
        }
    }

// Clear existing marks and labels
    const existingMarks = ruler.querySelectorAll('.armored-ruler-mark');
    existingMarks.forEach(mark => mark.remove());
    const existingLabels = ruler.querySelectorAll('.armored-ruler-label');
    existingLabels.forEach(label => label.remove());

// Ruler range
    const min = 200;
    const max = 600;
    const range = max - min;

// Clamp value to valid range
    const clampedValue = Math.max(min, Math.min(max, value));

// Create marks with pixel-perfect positioning
// Big lines at 50m intervals, small lines at 25m intervals
    const step = 25;
    const steps = (max - min) / step; // 16 intervals
    for (let idx = 0; idx <= steps; idx++) {
        const i = min + idx * step;
        const isMajor = (i % 50 === 0);

// Calculate exact pixel position with distributed rounding
        let pixelPosition;
        if (idx === 0) {
// First mark: position at 1px to cover left edge (mark is 2px wide, centered)
            pixelPosition = 1;
        } else if (idx === steps) {
// Last mark: position at rulerWidth - 1px to cover right edge
            pixelPosition = rulerWidth - 1;
        } else {
// Middle marks: distribute evenly within usable width
            pixelPosition = Math.round((idx * usableWidth) / steps) + padLeft;
        }

// Create mark
        const mark = document.createElement('div');
        mark.className = 'armored-ruler-mark' + (isMajor ? ' major' : '');
        mark.style.left = pixelPosition + 'px';
        mark.style.transform = 'translate3d(-50%, 0, 0)';
        ruler.appendChild(mark);

// Create label for all marks (major and minor)
        const label = document.createElement('div');
        label.className = 'armored-ruler-label' + (isMajor ? '' : ' minor');
        label.textContent = i.toString();
        label.style.left = pixelPosition + 'px';
        ruler.appendChild(label);
    }

// Update indicator position - pixel perfect alignment with marks
    const ratio = (clampedValue - min) / range;
    const pixelPosition = Math.round(ratio * usableWidth) + padLeft;
    indicator.style.left = pixelPosition + 'px';
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
                strip.style.transform = `translateY(-${1 * CELL_HEIGHT}px)`; // Position 1 is minus sign
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
            }, (index - 1) * 35); // Stagger each digit by 35ms
        });
    }

// Update current state
    currentElevationDigits = [isNeg ? '-' : 0, targetDigits[0], targetDigits[1], targetDigits[2]];
    isElevationNegative = isNeg;
}

// Track previous warning message type to avoid repeating animation
let previousWarningType = '';
let previousWarningMessage = '';
let isWarningAnimating = false;
let warningAnimationTimeout = null;

// Normalize warning message to extract just the warning type (ignore changing values)
function normalizeWarningMessage(message) {
    if (!message) return '';
// Remove dynamic values and keep only the warning type
// Replace numeric values with placeholders to compare warning types
    let normalized = message
        .replace(/\(-?\d+\s*MIL\)/g, '(X MIL)')            // Replace "(267 MIL)" with "(X MIL)"
        .replace(/\d+\s*MIL/g, 'X MIL')                    // Replace "267 MIL" with "X MIL"
        .replace(/\(\d+m\)/g, '(Xm)')                      // Replace "(189m)" with "(Xm)"
        .replace(/\d+m/g, 'Xm')                            // Replace "189m" with "Xm"
        .replace(/\(-?\d+\)/g, '(X)')                      // Replace "(267)" with "(X)"
        .replace(/:\s*\d+/g, ': X')                        // Replace ": 189" with ": X"
        .replace(/\d+-\d+/g, 'X-X')                        // Replace ranges like "200-600" with "X-X"
        .trim();
    return normalized;
}

// Show warning with animation only if warning type changed
function showWarning(warningDiv, message) {
    if (!warningDiv) return;

    const warningP = warningDiv.querySelector('p');
    if (warningP) {
        const currentMessage = message || warningP.textContent;
        const currentWarningType = normalizeWarningMessage(currentMessage);

// Check if warning type changed (not just the message values)
        const warningTypeChanged = currentWarningType !== previousWarningType;
        const wasHidden = warningDiv.classList.contains('hidden');

// Remove hiding class if present
        warningDiv.classList.remove('hiding');

// Update the message
        warningP.textContent = currentMessage;

// Only animate if warning type changed or warning was hidden
// AND animation is not currently in progress
        if ((warningTypeChanged || wasHidden) && !isWarningAnimating) {
            warningDiv.classList.remove('hidden');
// Mark animation as in progress
            isWarningAnimating = true;

// Clear any pending animation timeout
            if (warningAnimationTimeout) {
                clearTimeout(warningAnimationTimeout);
            }

// Reset animation to ensure it plays
            warningDiv.style.animation = 'none';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    warningDiv.style.animation = '';
// Reset animation flag after animation completes (400ms)
                    warningAnimationTimeout = setTimeout(() => {
                        isWarningAnimating = false;
                        warningAnimationTimeout = null;
                    }, 400);
                });
            });
            previousWarningType = currentWarningType;
            previousWarningMessage = currentMessage;
        } else {
// Warning type didn't change, just update the text without animation
            warningDiv.classList.remove('hidden');
// Update stored message but keep the same type
            previousWarningMessage = currentMessage;
        }
    } else {
// Fallback if no p element
        warningDiv.classList.remove('hiding');
        warningDiv.classList.remove('hidden');
        previousWarningType = normalizeWarningMessage(message || '');
        previousWarningMessage = message || '';
    }
}

// Hide warning with reverse animation
function hideWarning(warningDiv) {
    if (!warningDiv) return;

// Only animate if warning is currently visible and not already animating
    if (!warningDiv.classList.contains('hidden') && !isWarningAnimating) {
// Mark animation as in progress
        isWarningAnimating = true;

// Clear any pending animation timeout
        if (warningAnimationTimeout) {
            clearTimeout(warningAnimationTimeout);
        }

// Add hiding class first to trigger reverse animation
        warningDiv.classList.add('hiding');
// Reset animation to ensure it plays
        warningDiv.style.animation = 'none';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                warningDiv.style.animation = '';
// After animation completes, add hidden class and remove hiding
                setTimeout(() => {
                    warningDiv.classList.remove('hiding');
                    warningDiv.classList.add('hidden');
                    previousWarningType = '';
                    previousWarningMessage = '';
                    isWarningAnimating = false;
                    warningAnimationTimeout = null;
                }, 400); // Match animation duration
            });
        });
    } else {
// Already hidden or animating, just ensure it stays hidden
        warningDiv.classList.remove('hiding');
        warningDiv.classList.add('hidden');
        previousWarningType = '';
        previousWarningMessage = '';
    }
}

// Reset warning animation to replay it (kept for backwards compatibility)
function resetWarningAnimation(warningDiv) {
    if (!warningDiv) return;
    warningDiv.style.animation = 'none';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            warningDiv.style.animation = '';
        });
    });
}

// Calculate function
function calculate() {
    try {
        const faction = document.getElementById('faction').value;
        const distance = parseFloat(document.getElementById('distance').value);

// Parse heightDiff - handle +, -, and empty values
    const heightDiffInput = document.getElementById('heightDiff');
    let enteredHeight = 0;
    if (heightDiffInput) {
        const v = heightDiffInput.value.trim();
        if (v === '' || v === '-' || v === '+') {
            enteredHeight = 0;
        } else {
            const parsed = parseFloat(v.replace(/\+/g, ''));
            enteredHeight = isNaN(parsed) ? 0 : parsed;
        }
    }

    const muzzleHeightInput = document.getElementById('muzzleHeight');
    let muzzleHeight = getMuzzleHeightMForFaction(faction);
    if (muzzleHeightInput) {
        muzzleHeightInput.value = String(muzzleHeight);
    }

    const heightDiff = enteredHeight;

// Parse redNumber - handle +, -, and empty values
    const redNumberInput = document.getElementById('redNumber');
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
    const resultDiv = document.getElementById('result');

    if (!distance || isNaN(distance)) {
        if (warningDiv) {
            showWarning(warningDiv, 'Please enter a valid distance');
        }
// Show default "0000 MIL" when validation fails
        rollElevationToNumber(0);
        document.getElementById('baseValue').textContent = '--';
        document.getElementById('heightValue').textContent = '--';
        document.getElementById('redValue').textContent = '--';
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
        document.getElementById('baseValue').textContent = '--';
        document.getElementById('heightValue').textContent = '--';
        document.getElementById('redValue').textContent = '--';
        updateMilLabels();
        return;
    }
    const minDist = Math.min(...Object.keys(table).filter(k => k !== 'minMil' && k !== 'maxMil').map(Number));
    const maxDist = Math.max(...Object.keys(table).filter(k => k !== 'minMil' && k !== 'maxMil').map(Number));

    const perfectBase = computePerfectSpaBaseMil(table, distance);
    const base = (USE_PERFECT_SPA_MECHANIC && Number.isFinite(perfectBase))
        ? perfectBase
        : interpolate(table, distance);
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

// Check distance range first (prioritize over MIL limits)
    if (distance < minDist || distance > maxDist) {
// Keep distance warning if no MIL limit issue
        if (warningDiv) {
            if (distance > maxDist) {
                showWarning(warningDiv, `Warning: ${distance}m is above supported range (${maxDist}m max). Elevation may be inaccurate.`);
            } else {
                showWarning(warningDiv, `Warning: ${distance}m is below supported range (${minDist}m min). Elevation may be inaccurate.`);
            }
        }
    } else if (final < minMil || final > maxMil) {
// Check if final elevation is outside turret's MIL limits
        let limitWarning = '';
        if (final < minMil) {
            limitWarning = `WARNING: Calculated elevation (${final} MIL) is below this turret's minimum elevation (${minMil} MIL).`;
        } else if (final > maxMil) {
            limitWarning = `WARNING: Calculated elevation (${final} MIL) exceeds this turret's maximum elevation (${maxMil} MIL).`;
        }
        if (warningDiv) {
            showWarning(warningDiv, limitWarning);
        }
    } else {
        if (warningDiv) {
            hideWarning(warningDiv);
        }
    }

// Update elevation using mechanical counter
    rollElevationToNumber(Math.round(final));

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
            const baseText = String(hudQuantizeMil(base));
            baseValueEl.textContent = baseText;
            baseValueEl.innerHTML = baseText;
        } else {
            console.error('Base value is invalid:', base);
        }
    } else {
        console.error('baseValue element not found!');
    }

    const heightEl = document.getElementById('heightValue');
    const heightSymbolEl = document.getElementById('heightSymbol');
    if (heightSymbolEl) {
        heightSymbolEl.textContent = (displayHeightValue >= 0) ? '▲' : '▼';
        heightSymbolEl.className = 'text-gray-300';
    }
    if (heightEl) {
        heightEl.textContent = displayHeightValue + 'm';
        heightEl.className = (displayHeightValue >= 0) ? 'text-green-400' : 'text-red-400';
    } else {
        console.error('heightValue element not found!');
    }

    const redElement = document.getElementById('redValue');
    const redUnitElement = document.getElementById('redValueUnit');
    if (redElement) {
        const redText = (displayRedNumberHud >= 1 ? '+' : '') + displayRedNumberHud;
        redElement.textContent = redText;
        const colorClass = displayRedNumberHud >= 0 ? 'text-green-400' : 'text-red-400';
        redElement.className = colorClass;
        if (redUnitElement) {
            redUnitElement.className = colorClass;
        }
    } else {
        console.error('redValue element not found!');
    }

// Final verification - ensure values are set and not overwritten
    setTimeout(() => {
        const baseEl = document.getElementById('baseValue');
        const heightEl = document.getElementById('heightValue');
        const redEl = document.getElementById('redValue');

// Re-verify and set base if needed
        if (baseEl && typeof base === 'number' && !isNaN(base)) {
            if (baseEl.textContent === '--' || baseEl.textContent === '0' || baseEl.textContent.trim() === '') {
                baseEl.textContent = String(hudQuantizeMil(base));
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

    lastTrajectoryPreviewArgs = {
        table,
        mil: final,
        faction,
        distanceMeters: distance,
        terrainSlope: (distance > 0 ? (heightDiff / distance) : 0),
        muzzleHeightMeters: muzzleHeight
    };
    trajectoryMarkerTimeSec = 0;
    setTrajectoryAnimationPlaying(false);
    if (isTrajectoryWindowVisible) {
        renderTrajectoryPreview(lastTrajectoryPreviewArgs);
    }

// In manual mode, focus distance input after calculation (for Enter key workflow)
// In auto mode, remove focus from calculate button to clear yellow highlight
    if (!isAutoCalcEnabled()) {
        const distanceInputEl = document.getElementById('distance');
        if (distanceInputEl) {
            distanceInputEl.focus();
            distanceInputEl.select();
        }
    } else if (document.activeElement && document.activeElement.id === 'calculateButton') {
        document.activeElement.blur();
    }

// Persist current state
    saveState();
    } catch (error) {
        console.error('Error in calculate function:', error);
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
    const distanceInput = document.getElementById('distance');
    const heightDiffInput = document.getElementById('heightDiff');
    const muzzleHeightInput = document.getElementById('muzzleHeight');
    const redNumberInput = document.getElementById('redNumber');

    if (distanceInput) {
        distanceInput.value = '400';
// Update ruler directly (don't trigger input event which might interfere with snap)
        if (typeof updateArmoredRuler === 'function') {
            updateArmoredRuler(400);
        }
    }
    if (heightDiffInput) {
        heightDiffInput.value = '0';
    }
    if (muzzleHeightInput) {
        const faction = document.getElementById('faction').value;
        muzzleHeightInput.value = String(getMuzzleHeightMForFaction(faction));
    }
    if (redNumberInput) {
        redNumberInput.value = '0';
    }

// Sync snap toggle state if snap is enabled
    const snapToggle = document.getElementById('snapToggle');
    if (snapToggle && snapToggle.checked) {
// If snap is on, ensure it's properly synced and value is snapped
        if (typeof syncArmoredToggles === 'function') {
            syncArmoredToggles();
        }
// Snap value to nearest 25m (400 is already on 25m boundary)
        const snappedValue = Math.round(400 / 25) * 25;
        if (distanceInput) {
            distanceInput.value = snappedValue;
            if (typeof updateArmoredRuler === 'function') {
                updateArmoredRuler(snappedValue);
            }
        }
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

// Ensure snap toggle is synced after reset
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
        const muzzleHeightInput = document.getElementById('muzzleHeight');
        if (muzzleHeightInput) {
            const parsed = parseFloat(String(muzzleHeightInput.value || '').trim().replace(/\+/g, ''));
            if (Number.isFinite(parsed)) {
                muzzleHeightByFaction[faction] = Math.max(0, Math.min(50, parsed));
            }
        }
        const state = {
            faction,
            distance: document.getElementById('distance').value,
            heightDiff: document.getElementById('heightDiff').value,
            muzzleHeightByFaction,
            redNumber: document.getElementById('redNumber').value,
            fineTune: document.getElementById('snapToggle') ? document.getElementById('snapToggle').checked : false,
            autoCalc: document.getElementById('autoCalcToggle') ? document.getElementById('autoCalcToggle').checked : true
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

        if (state.muzzleHeightByFaction && typeof state.muzzleHeightByFaction === 'object') {
            muzzleHeightByFaction = state.muzzleHeightByFaction;
        }

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

        const muzzleHeightInput = document.getElementById('muzzleHeight');
        if (muzzleHeightInput && state.faction) {
            muzzleHeightInput.value = String(getMuzzleHeightMForFaction(state.faction));
        }

        const distanceInput = document.getElementById('distance');
        if (state.distance !== undefined && state.distance !== null && state.distance !== '') {
            distanceInput.value = state.distance;
            updateArmoredRuler(parseFloat(state.distance) || 400);
        }

        const heightDiffInput = document.getElementById('heightDiff');
        if (state.heightDiff !== undefined && state.heightDiff !== null && state.heightDiff !== '') {
            const rawHeightDiff = String(state.heightDiff).trim();
            if (rawHeightDiff === '' || rawHeightDiff === '-' || rawHeightDiff === '+') {
                heightDiffInput.value = '0';
            } else {
                const parsedHeightDiff = parseFloat(rawHeightDiff.replace(/\+/g, ''));
                heightDiffInput.value = Number.isFinite(parsedHeightDiff) ? rawHeightDiff : '0';
            }
        }

        const redNumberInput = document.getElementById('redNumber');
        if (state.redNumber !== undefined && state.redNumber !== null && state.redNumber !== '') {
            const rawRedNumber = String(state.redNumber).trim();
            if (rawRedNumber === '' || rawRedNumber === '-' || rawRedNumber === '+') {
                redNumberInput.value = '0';
            } else {
                const parsedRedNumber = parseFloat(rawRedNumber.replace(/\+/g, ''));
                redNumberInput.value = Number.isFinite(parsedRedNumber) ? rawRedNumber : '0';
            }
        }

        const snapToggle = document.getElementById('snapToggle');
        if (snapToggle && typeof state.fineTune === 'boolean') {
            snapToggle.checked = state.fineTune;
            updateSnapModeLabel();
        }

        const autoCalcToggle = document.getElementById('autoCalcToggle');
        if (autoCalcToggle && typeof state.autoCalc === 'boolean') {
            autoCalcToggle.checked = state.autoCalc;
            updateCalcModeLabel();
        }

// Update UI elements after loading state
        if (distanceInput) {
            updateArmoredRuler(parseFloat(distanceInput.value) || 400);
        }
        updateCalculateButton();
        updateToggleLEDs();
    } catch (e) {
// Ignore parse/storage errors
    }
}

// Function to update calculation mode label (no longer needed - labels are static)
function updateCalcModeLabel() {
// Labels are now static, no update needed
}

// Function to update snap mode label (no longer needed - labels are static)
function updateSnapModeLabel() {
// Labels are now static, no update needed
}

// Toggle function for armored panel switches
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
        if (checkboxId === 'snapToggle') {
            const event = new Event('change', { bubbles: true });
            checkbox.dispatchEvent(event);
        } else if (checkboxId === 'autoCalcToggle') {
            const event = new Event('change', { bubbles: true });
            checkbox.dispatchEvent(event);
// Also sync the toggle state to ensure it's correct
            syncArmoredToggles();
        }
    } catch (error) {
        console.error('Error in toggleArmoredSwitch:', error);
    }
}

// Explicitly expose to global scope for inline onclick handlers
window.toggleArmoredSwitch = toggleArmoredSwitch;

// Sync armored toggles with checkboxes on load
function syncArmoredToggles() {
    const snapToggle = document.getElementById('snapToggle');
    const autoToggle = document.getElementById('autoCalcToggle');
    const armoredSnap = document.getElementById('armoredSnapToggle');
    const armoredAuto = document.getElementById('armoredAutoToggle');

    if (snapToggle && armoredSnap) {
        if (snapToggle.checked) {
            armoredSnap.classList.add('active');
        } else {
            armoredSnap.classList.remove('active');
        }
    }

    if (autoToggle && armoredAuto) {
        if (autoToggle.checked) {
            armoredAuto.classList.add('active');
        } else {
            armoredAuto.classList.remove('active');
        }
    }

// Update LED indicators
    updateToggleLEDs();
}

// Function to update LED-style toggle labels
function updateToggleLEDs() {
    const snapToggle = document.getElementById('snapToggle');
    const snapOnLabel = document.getElementById('snapOnLabel');
    const snapOffLabel = document.getElementById('snapOffLabel');
    const autoCalcToggle = document.getElementById('autoCalcToggle');
    const calcOnLabel = document.getElementById('calcOnLabel');
    const calcOffLabel = document.getElementById('calcOffLabel');

// Update Ruler Snap toggle labels
    if (snapToggle && snapOnLabel && snapOffLabel) {
        if (snapToggle.checked) {
// ON state: light up ON label with green LED, turn OFF label off
            snapOnLabel.classList.add('led-on-green');
            snapOnLabel.classList.remove('led-off');
            snapOffLabel.classList.remove('led-on-green', 'led-off');
        } else {
// OFF state: light up OFF label with red LED, turn ON label off
            snapOffLabel.classList.add('led-off');
            snapOffLabel.classList.remove('led-on-green');
            snapOnLabel.classList.remove('led-on-green', 'led-off');
        }
    }

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
}

// Load any saved state before wiring up interactions
loadState();

// Initialize mechanical counter
setupElevationCounter(0);
initializeElevationMIL();

// Ensure faction image and badges are displayed on initial load
updateFactionImage();
updateMilRangeText();

syncSliderWithInput();

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
    if (baseEl) baseEl.textContent = '--';
// Show "--" when auto calculation is off
    if (heightEl) {
        heightEl.textContent = '--';
    }
    if (redEl) {
        redEl.textContent = '--';
    }
}
updateCalculateButton();
updateMilLabels();
syncArmoredToggles();

// Sync armored toggles when checkboxes change
const snapToggleCheckbox = document.getElementById('snapToggle');
const autoToggleCheckbox = document.getElementById('autoCalcToggle');
if (snapToggleCheckbox) {
    snapToggleCheckbox.addEventListener('change', syncArmoredToggles);
}
if (autoToggleCheckbox) {
    autoToggleCheckbox.addEventListener('change', syncArmoredToggles);
}

// Make editing fast and keep fields from being empty
['distance', 'heightDiff', 'redNumber'].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;

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

    const focusCalcHandler = function() {
    };

// On blur, if left empty, force it back to 0
    const ensureNonEmptyHandler = function() {
        if (this.value.trim() === '') {
            if (this.id === 'muzzleHeight') {
                const faction = document.getElementById('faction').value;
                this.value = String(getMuzzleHeightMForFaction(faction));
            } else {
                this.value = '0';
            }
            try {
                if (this.id === 'distance') {
// update ruler with distance
                    updateArmoredRuler(0);
                }
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
            if (this.id === 'distance') {
                const numValue = parseFloat(this.value);
                if (!isNaN(numValue)) {
                    let finalValue = numValue;

                    if (numValue < 0) {
                        finalValue = 0;
                    } else if (numValue > 1000) {
                        finalValue = 1000;
                    }

// If snap mode is enabled, snap to nearest 25m
                    const snapToggle = document.getElementById('snapToggle');
                    if (snapToggle && snapToggle.checked) {
                        finalValue = Math.round(finalValue / 25) * 25;
                    }

                    if (finalValue !== numValue) {
                        this.value = finalValue;
                    }

// Update ruler with final value
                    updateArmoredRuler(finalValue);

// If value was snapped, trigger calculation and save state
                    if (finalValue !== numValue) {
                        saveState();
                        if (isAutoCalcEnabled()) {
                            calculate();
                        }
                    }
                }
            }

// Enforce min/max limits for redNumber field (tank body angle)
            if (this.id === 'redNumber') {
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
            if (this.id === 'heightDiff') {
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
                if (this.id === 'heightDiff' || this.id === 'redNumber' || this.id === 'distance') {
// Use setTimeout to ensure value is updated in DOM before calculation
                    setTimeout(() => {
                        calculate();
                    }, 0);
                }
            }
        }
    };

// Also prevent paste of non-numeric content
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
        if (this.id === 'distance') {
            const numValue = parseFloat(cleaned);
            if (!isNaN(numValue)) {
                if (numValue < 0) cleaned = '0';
                else if (numValue > 1000) cleaned = '1000';
            }
        } else if (this.id === 'redNumber') {
            const numValue = parseFloat(cleaned);
            if (!isNaN(numValue)) {
                if (numValue < -1000) cleaned = '-1000';
                else if (numValue > 1000) cleaned = '1000';
            }
        } else if (this.id === 'heightDiff') {
            const numValue = parseFloat(cleaned);
            if (!isNaN(numValue)) {
                if (numValue < -5000) cleaned = '-5000';
                else if (numValue > 5000) cleaned = '5000';
            }
        }

        this.value = cleaned;

// After paste, handle calculation or reset base value
        if (isAutoCalcEnabled()) {
            if (this.id === 'heightDiff' || this.id === 'redNumber' || this.id === 'distance') {
// Use setTimeout to ensure value is updated in DOM before calculation
                setTimeout(() => {
                    calculate();
                }, 0);
            }
        } else {
// When auto calc is off, reset base value to "--" when any input changes
            if (this.id === 'heightDiff' || this.id === 'redNumber' || this.id === 'distance') {
                const baseValueEl = document.getElementById('baseValue');
                if (baseValueEl) {
                    baseValueEl.textContent = '--';
                }
            }
        }
    });

    input.addEventListener('focus', selectAllHandler);
    input.addEventListener('focus', focusCalcHandler);
    input.addEventListener('click', selectAllHandler);
    input.addEventListener('blur', ensureNonEmptyHandler);
});

// Fine-tuning toggle functionality
const snapToggleEl = document.getElementById('snapToggle');

// If no saved state set it, default to fine-tune mode
if (!localStorage.getItem('hllSpaState')) {
    if (snapToggleEl) {
        snapToggleEl.checked = false;
    }
    updateSnapModeLabel();
}

if (snapToggleEl) {
    snapToggleEl.addEventListener('change', function() {
        syncArmoredToggles();
        if (this.checked) {
// Snap mode: 25m increments
// Snap current value to nearest 25m
            const distanceInput = document.getElementById('distance');
            const currentValue = parseFloat(distanceInput.value) || 400;
            const snappedValue = Math.round(currentValue / 25) * 25;
            distanceInput.value = snappedValue;
// Update ruler with new snapped value
            updateArmoredRuler(snappedValue);
// Trigger calculation if auto mode is enabled
            if (isAutoCalcEnabled()) {
                calculate();
            }
        }
        updateSnapModeLabel();
        saveState();
    });
}

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

if (calcButtonEl && distanceInputEl && heightInputEl && redInputEl) {
// Calculate button: loop back to Distance when tabbing forward (manual mode only)
    calcButtonEl.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && !e.shiftKey) {
            if (!isAutoCalcEnabled()) {
                e.preventDefault();
                distanceInputEl.focus();
                distanceInputEl.select();
            }
        } else if (e.key === 'Enter') {
// Enter key will trigger calculate() via button's onclick
// Focus will be set to distance input by calculate() function in manual mode
        }
    });

// RedNumber input: loop back to Distance when tabbing forward in auto mode
    redInputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && !e.shiftKey) {
            if (isAutoCalcEnabled()) {
                e.preventDefault();
                distanceInputEl.focus();
                distanceInputEl.select();
            }
        }
    });

// Initialize tab loop
    updateTabLoop();
}

// Auto calculation toggle functionality
const autoCalcToggle = document.getElementById('autoCalcToggle');

// Set initial label text
updateCalcModeLabel();
updateSnapModeLabel();
updateToggleLEDs();

if (autoCalcToggle) {
    autoCalcToggle.addEventListener('change', function() {
        try {
            updateCalcModeLabel();
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
            }
            if (redValueEl) {
                redValueEl.textContent = '--';
            }
// Show MIL labels for default "0000"
            updateMilLabels();
        }
        } catch (error) {
            console.error('Error in auto calculation toggle:', error);
// Ensure toggle state is still updated even if calculation fails
            updateToggleLEDs();
            syncArmoredToggles();
        }
    });
}

// Update ruler on resize (in case layout changes)
window.addEventListener('resize', function() {
    const distanceInput = document.getElementById('distance');
    if (distanceInput) {
        updateArmoredRuler(parseFloat(distanceInput.value) || 400);
    }
});

// Enter key cycling through inputs: Distance -> Height -> Elevation -> (Calculate in manual) -> Distance
if (distanceInputEl && heightInputEl && redInputEl) {
    distanceInputEl.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            heightInputEl.focus();
            heightInputEl.select();
        }
    });

    heightInputEl.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            redInputEl.focus();
            redInputEl.select();
        }
    });

    redInputEl.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (isAutoCalcEnabled()) {
// Auto mode: loop back to distance
                distanceInputEl.focus();
                distanceInputEl.select();
            } else {
// Manual mode: focus calculate button
                calcButtonEl.focus();
            }
        }
    });
}

// Custom select functionality
const selectSelected = document.getElementById('selectSelected');
const selectItems = document.getElementById('selectItems');
const hiddenFaction = document.getElementById('faction');

selectSelected.addEventListener('click', function() {
    selectItems.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
});

selectItems.addEventListener('click', function(e) {
    if (e.target !== this) {
        const selectedDiv = e.target.closest('div');
        if (selectedDiv) {
            const value = selectedDiv.getAttribute('data-value');
            const text = selectedDiv.innerHTML;
// Wrap text content in span for truncation
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = text;
            const img = tempDiv.querySelector('img');
            const textContent = tempDiv.textContent.trim();
            selectSelected.innerHTML = img ? `${img.outerHTML} <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; min-width: 0;">${textContent}</span>` : `<span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; min-width: 0;">${textContent}</span>`;
            hiddenFaction.value = value;

            selectItems.classList.add('select-hide');
            selectSelected.classList.remove('select-arrow-active');

            updateFactionImage();
            if (isAutoCalcEnabled()) {
            calculate();
            } else {
// Reset final counter to 0000 when switching tanks and auto calc is off
                rollElevationToNumber(0);
            }
            saveState();
        }
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.custom-select')) {
        selectItems.classList.add('select-hide');
        selectSelected.classList.remove('select-arrow-active');
    }
});

// Tank info modal functionality
const tankInfoIcon = document.getElementById('tankInfoIcon');
const tankInfoModal = document.getElementById('tankInfoModal');
const closeTankInfo = document.getElementById('closeTankInfo');
const tankInfoTitle = document.getElementById('tankInfoTitle');
const tankInfoContent = document.getElementById('tankInfoContent');

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
            'm4a3_1.png',
            'm4a3_2.png',
            'm4a3_3.png',
            'm4a3_4.png',
            'm4a3_5.png',
            'm4a3_6.png',
            'm4a3_7.png',
            'm4a3_8.png'
        ],
        'KV2': [
            'kv2_1.png',
            'kv2_2.png',
            'kv2_3.png',
            'kv2_4.png',
            'kv2_5.png',
            'kv2_6.png',
            'kv2_7.png',
            'kv2_8.png'
        ],
        'AVRE': [
            'avre_1.png',
            'avre_2.png',
            'avre_3.png',
            'avre_4.png',
            'avre_5.png',
            'avre_6.png',
            'avre_7.png',
            'avre_8.png'
        ],
        'BISHOP': [
            'bishop_1.png',
            'bishop_2.png',
            'bishop_3.png',
            'bishop_4.png',
            'bishop_5.png',
            'bishop_6.png',
            'bishop_7.png',
            'bishop_8.png'
        ],
        'STURMPANZER': [
            'brummbar_1.png',
            'brummbar_2.png',
            'brummbar_3.png',
            'brummbar_4.png',
            'brummbar_5.png',
            'brummbar_6.png',
            'brummbar_7.png',
            'brummbar_8.png'
        ],
        'PANZER III': [
            'panzer3_1.png',
            'panzer3_2.png',
            'panzer3_3.png',
            'panzer3_4.png',
            'panzer3_5.png',
            'panzer3_6.png',
            'panzer3_7.png',
            'panzer3_8.png'
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
// Escape quotes in the path for onclick attribute
        const escapedSrc = src.replace(/'/g, "\\'");
// Create WebP paths (both thumbnail and full)
        const thumbSrcPNG = src.replace(/(\.[^.]+)$/, '_thumb$1');
        const thumbSrcWebP = thumbSrcPNG.replace(/\.png$/, '.webp');
        const fullSrcWebP = src.replace(/\.png$/, '.webp');
        return `
            <div class="screenshot-item" data-src="${escapedSrc}" data-src-webp="${fullSrcWebP.replace(/'/g, "\\'")}">
                <picture>
                    <source srcset="${thumbSrcWebP}" type="image/webp">
                    <img src="${thumbSrcPNG}" alt="Screenshot ${index + 1}" loading="lazy" decoding="async">
                </picture>
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
        return {
            webp: item.getAttribute('data-src-webp') || '',
            png: item.getAttribute('data-src') || ''
        };
    }).filter(item => item.webp || item.png);
}

function preloadScreenshotByIndex(index) {
    if (!currentScreenshotGallery || currentScreenshotGallery.length === 0) return;
    if (index < 0 || index >= currentScreenshotGallery.length) return;
    const item = currentScreenshotGallery[index];
    const url = item.webp || item.png;
    if (!url) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
}

async function resolveScreenshotUrl(item) {
    const loadAndDecode = async (url) => {
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
    };

    if (item.webp && item.png) {
        try {
            return await loadAndDecode(item.webp);
        } catch (e) {
            return await loadAndDecode(item.png);
        }
    }
    return await loadAndDecode(item.webp || item.png);
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
        url = await resolveScreenshotUrl(item);
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
        item.getAttribute('data-src') === src || item.getAttribute('data-src-webp') === src
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
                    const ammoMatches = ammoText.match(/(\d+)\s*(HE|SMOKE|AP)\s*rounds/g);
                    if (ammoMatches) {
                        ammoMatches.forEach(m => {
                            const match = m.match(/(\d+)\s*(HE|SMOKE|AP)/);
                            if (match) {
                                const type = match[2];
                                imagePaths.add(`images/UI/Icons/vehicles/${type.toUpperCase()}_invert_28.png`);
                            }
                        });
                    }
                }
            }

// Collect from coaxial and hull gun (T_HUD_Status_Ammo_invert_28.png)
            if (info.stats.coaxial && !info.stats.coaxial.includes('NO')) {
                imagePaths.add('images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.png');
            }
            if (info.stats.hullGun && !info.stats.hullGun.includes('NO')) {
                imagePaths.add('images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.png');
            }

            return Array.from(imagePaths);
        }

// Function to preload images
        function preloadImages(imagePaths) {
            return Promise.all(imagePaths.map(path => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = resolve; // Resolve even on error to not block
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
                const ammoMatches = ammoText.match(/(\d+)\s*(HE|SMOKE|AP)\s*rounds/g);
                if (ammoMatches) {
                    ammoMatches.forEach(m => {
                        const match = m.match(/(\d+)\s*(HE|SMOKE|AP)/);
                        if (match) {
                            const count = match[1];
                            const type = match[2];
// Construct image path - type is already uppercase from regex
                            const imagePath = `images/UI/Icons/vehicles/${type.toUpperCase()}_invert_28.png`;
// Build each ammo item with explicit image tag (inside single box)
                            ammoItems.push(`<span style="display: inline-flex; align-items: center; gap: 3px; margin-right: 8px;"><img src="${imagePath}" alt="${type}" style="width: 14px; height: 14px; object-fit: contain;" loading="eager" decoding="async"><span class="highlight-number">${count}</span> <span class="highlight-number">${type}</span></span>`);
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
                    const imagePath = 'images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.png';
                    return `<span class="highlight-number" style="margin-right: 14px;">${gunName}</span><span class="ammo-box"><img src="${imagePath}" alt="Ammo" loading="eager" decoding="async"><span class="highlight-number">${rounds}</span> rounds × <span class="highlight-number">${magazines}</span> magazines</span>`;
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
                        <div class="spec-subtitle">Performance Data</div>
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
// Move button back to original position when modal closes
    if (tankInfoIcon) {
        tankInfoIcon.classList.remove('extended');
    }
}

if (tankInfoIcon) {
    tankInfoIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
// Close dropdown if open
        selectItems.classList.add('select-hide');
        selectSelected.classList.remove('select-arrow-active');
        showTankInfo();
    });
}

if (closeTankInfo) {
    closeTankInfo.addEventListener('click', closeTankInfoModal);
}

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
    if (e.target === tankInfoModal) {
        closeTankInfoModal();
    }
});

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
}, true); // Use capture phase

// Add event listeners to replace inline onclick handlers (CSP compliance)
document.addEventListener('DOMContentLoaded', function() {
// Armored toggle switches
    const armoredSnapToggle = document.getElementById('armoredSnapToggle');
    if (armoredSnapToggle) {
        armoredSnapToggle.addEventListener('click', function() {
            toggleArmoredSwitch('snapToggle', this);
        });
    }

    const armoredAutoToggle = document.getElementById('armoredAutoToggle');
    if (armoredAutoToggle) {
        armoredAutoToggle.addEventListener('click', function() {
            toggleArmoredSwitch('autoCalcToggle', this);
        });
    }

// Distance buttons
    const distanceInput = document.getElementById('distance');
    if (distanceInput) {
        const distanceControls = distanceInput.closest('.distance-controls');
        if (distanceControls) {
            const buttons = distanceControls.querySelectorAll('.armored-button');
            if (buttons.length >= 2) {
                buttons[0].addEventListener('click', function() { adjustValue('distance', -1); });
                buttons[1].addEventListener('click', function() { adjustValue('distance', 1); });
            }
        }
    }

// Height difference buttons
    const heightDiffInput = document.getElementById('heightDiff');
    if (heightDiffInput) {
        const heightControls = heightDiffInput.parentElement;
        if (heightControls) {
            const buttons = heightControls.querySelectorAll('.armored-button');
            if (buttons.length >= 2) {
                buttons[0].addEventListener('click', function() { adjustValue('heightDiff', -1); });
                buttons[1].addEventListener('click', function() { adjustValue('heightDiff', 1); });
            }
        }
    }

// Red number (terrain elevation) buttons
    const redNumberInput = document.getElementById('redNumber');
    if (redNumberInput) {
        const redControls = redNumberInput.parentElement;
        if (redControls) {
            const buttons = redControls.querySelectorAll('.armored-button');
            if (buttons.length >= 2) {
                buttons[0].addEventListener('click', function() { adjustValue('redNumber', -1); });
                buttons[1].addEventListener('click', function() { adjustValue('redNumber', 1); });
            }
        }
    }

// Calculate button
    const calculateButton = document.getElementById('calculateButton');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculate);
    }

// Copy result button
    const copyButton = document.querySelector('.copy-result-button');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            copyResult(this);
        });
    }

// Reset calculator button
    const resetButton = document.querySelector('.reset-result-button');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            resetCalculator(this);
        });
    }

    const trajectoryToggleButton = document.getElementById('trajectoryToggleButton');
    if (trajectoryToggleButton) {
        trajectoryToggleButton.addEventListener('click', function() {
            toggleTrajectoryWindow();
        });
    }

    const trajectoryCloseButton = document.getElementById('trajectoryCloseButton');
    if (trajectoryCloseButton) {
        trajectoryCloseButton.addEventListener('click', function() {
            setTrajectoryWindowVisible(false);
        });
    }

    const trajectoryPlayButton = document.getElementById('trajectoryPlayButton');
    if (trajectoryPlayButton) {
        trajectoryPlayButton.addEventListener('click', function(e) {
            e.stopPropagation();
            if (!isTrajectoryWindowVisible) return;
            if (!lastTrajectorySim) {
                renderTrajectoryPreview(lastTrajectoryPreviewArgs);
            }
            const impactTime = lastTrajectorySim ? Number(lastTrajectorySim.impactTimeSec) : NaN;
            if (!Number.isFinite(impactTime) || impactTime <= 0) return;

            if (!trajectoryAnimPlaying) {
                if (trajectoryMarkerTimeSec >= impactTime) {
                    trajectoryMarkerTimeSec = 0;
                }
                trajectoryAnimStartMs = performance.now();
                trajectoryAnimStartTimeSec = trajectoryMarkerTimeSec;
                setTrajectoryAnimationPlaying(true);
                cancelTrajectoryAnimFrame();
                trajectoryAnimRafId = requestAnimationFrame(trajectoryAnimFrame);
            } else {
                setTrajectoryAnimationPlaying(false);
                renderTrajectoryPreview(lastTrajectoryPreviewArgs);
            }
        });
    }

    window.addEventListener('resize', function() {
        if (isTrajectoryWindowVisible) {
            renderTrajectoryPreview(lastTrajectoryPreviewArgs);
        }
    }, { passive: true });

// Tank info button
    const tankInfoIcon = document.getElementById('tankInfoIcon');
    if (tankInfoIcon) {
        tankInfoIcon.addEventListener('click', showTankInfo);
    }

// Screenshot lightbox
    const screenshotLightbox = document.getElementById('screenshotLightbox');
    if (screenshotLightbox) {
        screenshotLightbox.addEventListener('click', closeScreenshotLightbox);
    }

// Navigation zones
    document.querySelectorAll('.nav-zone-left').forEach(zone => {
        zone.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateScreenshot(-1);
        });
    });

    document.querySelectorAll('.nav-zone-right').forEach(zone => {
        zone.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateScreenshot(1);
        });
    });

// Lightbox close button
    const lightboxClose = document.querySelector('.screenshot-lightbox-close');
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function(e) {
            e.stopPropagation();
            closeScreenshotLightbox();
        });
    }

// Lightbox image
    const lightboxStage = document.getElementById('screenshotLightboxStage');
    if (lightboxStage) {
        lightboxStage.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// Minimal hold increment support for lite view (desktop logic)
let __holdTimer = null;
function startHoldIncrement(id, delta, event) {
    if (event) {
        event.preventDefault?.();
    }
    adjustValue(id, delta);
    clearInterval(__holdTimer);
    __holdTimer = setInterval(() => adjustValue(id, delta), 150);
}
function stopHoldIncrement() {
    if (__holdTimer) {
        clearInterval(__holdTimer);
        __holdTimer = null;
    }
}

// Force auto-calc on for lite view, regardless of stored state
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.lite-compact')) {
        const autoCalcToggle = document.getElementById('autoCalcToggle');
        if (autoCalcToggle) {
            autoCalcToggle.checked = true;
        }
        // Sync UI labels/LEDs and ensure calculation runs once
        if (typeof updateCalcModeLabel === 'function') updateCalcModeLabel();
        if (typeof updateToggleLEDs === 'function') updateToggleLEDs();
        if (typeof syncArmoredToggles === 'function') syncArmoredToggles();
        if (typeof calculate === 'function') calculate();
    }
});

// View Mode Toggle Logic (Full/Lite)
function setupViewModeToggle(switchId, targetUrl) {
    const switchEl = document.getElementById(switchId);
    if (switchEl) {
        const navigate = function(e) {
            if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = targetUrl;
            }
        };
        switchEl.addEventListener('click', navigate);
        switchEl.addEventListener('keypress', navigate);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setupViewModeToggle('viewModeSwitchFull', 'index-lite.html');
    setupViewModeToggle('viewModeSwitchLite', 'index.html');
});