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
                    topSpeed: '24 km/h'
                },
                history: 'The M4 Sherman tank variant equipped with the 105mm howitzer (typically the M4 or M4A3 chassis) was developed to provide powerful close infantry support. It saw extensive use in both the European and Pacific Theaters. The 105mm howitzer was highly effective against fortifications, infantry positions, and used primarily for demolition and smoke delivery, making it valuable for breakthrough operations.',
                realLife: {
                    range: '~11,000m (indirect fire), ~2,000m (direct fire)',
                    production: 'Produced from 1943-1945 at Detroit Arsenal Tank Plant (Warren, Michigan), Fisher Body Tank Plant/Grand Blanc Metal Center (Grand Blanc, Michigan), and other US facilities',
                    service: 'Used by US Army in European and Pacific theaters (1943-1945)',
                    strengths: [
                        'Versatile for both direct and indirect fire support',
                        'Good mobility and reliability',
                        'Standard HE and AP capabilities',
                        'Effective against infantry and fortifications'
                    ],
                    weaknesses: []
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
                    topSpeed: '23 km/h'
                },
                history: 'The KV-2 was a Soviet heavy tank armed with the massive 152mm M-10 howitzer (specifically the M-10T). It was designed as an assault tank to destroy fortifications and bunkers. It saw action during the Winter War against Finland (though production models were post-war) and was famously used in the early stages of Operation Barbarossa, where its heavy armor proved almost impervious to early German anti-tank guns. Despite its powerful armament, its slow speed, long reload time, and mechanical issues made it highly problematic.',
                realLife: {
                    range: '~12,000m (indirect fire), ~1,200m (direct fire)',
                    production: 'Produced from 1939-1941, ~334 units built at Kirov Plant (Factory No. 100) in Leningrad (now St. Petersburg, Russia)',
                    service: 'Used by Red Army in Winter War and early Eastern Front (1939-1941)',
                    strengths: [
                        'Extremely powerful armament',
                        'Highly effective against fortifications'
                    ],
                    weaknesses: [
                        'Very slow turret rotation and movement',
                        'Long reload time (20-40 seconds)',
                        'Vulnerable to mechanical breakdowns'
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
                    topSpeed: '20 km/h'
                },
                history: 'The Churchill AVRE (Armoured Vehicle Royal Engineers) was a specialized engineering vehicle designed to destroy fortifications. It was armed with a 290mm Petard mortar, capable of firing a 40-pound "Flying Dustbin" projectile (containing 28 pounds of high explosive). These vehicles were crucial during D-Day and subsequent operations, used to breach enemy defenses and clear obstacles.',
                realLife: {
                    range: '~100m (very short range in real life)',
                    production: 'Base Churchill tanks manufactured at Vauxhall Motors in Luton, Bedfordshire, UK. AVRE conversions performed by Royal Engineers',
                    service: 'Used by British and Canadian forces in Normandy and beyond (1944-1945)',
                    strengths: [
                        'Designed specifically for assaulting fortifications',
                        'Devastating firepower against structures',
                        'Large high-explosive blast radius',
                        'Heavily armored'
                    ],
                    weaknesses: [
                        'Extremely short effective range (~100m)',
                        'Slow'
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
                    topSpeed: '20 km/h'
                },
                history: 'The Bishop was a British self-propelled artillery vehicle based on the Valentine tank chassis, armed with a 25-pounder field gun. It was used during World War II, primarily in North Africa. The vehicle was named after its boxy superstructure resembling a bishop\'s mitre. It had limited elevation and traverse, which severely affected its effectiveness as an artillery piece.',
                realLife: {
                    range: '~6,000-12,000m (indirect fire)',
                    production: 'Produced from 1942-1943, ~149 units built by Birmingham Railway Carriage and Wagon Company in Birmingham, UK',
                    service: 'Used by British forces in North Africa and Italy (1942-1943)',
                    strengths: [
                        'Good for medium-range engagements',
                        'Balanced between mobility and firepower'
                    ],
                    weaknesses: [
                        'Limited turret elevation and traverse',
                        'Replaced by more effective SPGs like the Sexton'
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
                    topSpeed: '24 km/h'
                },
                history: 'The Sturmpanzer IV, unofficially known as the Brummbär (Grizzly Bear), was a German assault gun based on the Panzer IV chassis, armed with a 150mm StuH 43 L/12 howitzer. It was designed primarily for heavy infantry support, demolishing fortifications and buildings in urban and close-quarters combat. First deployed at the **Battle of Kursk** in mid-1943, it saw use on both the Eastern and Western Fronts.',
                realLife: {
                    range: '~4,600m (indirect fire), ~1,000m (direct fire)',
                    production: 'Produced from 1943-1945, ~306 units built by Alkett (Altmärkische Kettenfabrik) in Berlin-Spandau, Germany',
                    service: 'Used by Wehrmacht on Eastern and Western Fronts (1943-1945)',
                    strengths: [
                        'Extremely powerful armament',
                        'Large high-explosive blast radius',
                        'Heavily armored',
                        'Effective in urban warfare'
                    ],
                    weaknesses: [
                        'Limited traverse (30° total)',
                        'Slow'
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
                    topSpeed: '24 km/h'
                },
                history: 'The Panzer III Ausf. N was a German medium tank variant armed with the short-barreled 7.5 cm KwK 37 L/24 gun. It was designed specifically for close infantry support with high-explosive (HE) rounds, as the chassis was no longer competitive in anti-tank roles. It saw service primarily on the Eastern Front, but also with the Afrika Korps and in Italy.',
                realLife: {
                    range: '~6,000m (indirect fire), ~1,500m (direct fire)',
                    production: 'Produced from 1942-1943 at Daimler-Benz (Berlin-Marienfelde), MAN (Nuremberg), and Henschel (Kassel), Germany',
                    service: 'Used by Afrika Korps and on Eastern Front (1942-1943)',
                    strengths: [
                        'Good balance of mobility and firepower',
                        'Effective against infantry and light vehicles',
                        'Faster than heavy tanks',
                        'Designed for infantry support role'
                    ],
                    weaknesses: [
                        'Limited anti-tank capability'
                    ]
                }
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
                const d1 = distances[0];  // 600m
                const d2 = distances[1];    // 573m
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
            
            // Map faction to tank image name
            const factionMap = {
                'British (Bishop SP)': 'BISHOP_248',
                'British (Churchill AVRE)': 'AVRE_248',
                'US (Sherman M4A3 105)': 'M4A3_248',
                'Soviet Union (KV-2)': 'KV2_248',
                'DAK (Panzer III Ausf.N)': 'PANZERIII_248',
                'Germany (Sturmpanzer IV Brummbär)': 'BRUMMBAR_248'
            };
            
            // Classified reference text for each tank
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
                    <div class="spec-item" style="flex-wrap: wrap;">
                        <span class="spec-bullet">▸</span>
                        <span class="spec-label">Main Gun:</span>
                        <span class="spec-value">${mainGunDisplay}</span>
                    </div>
                    <div class="spec-item" style="flex-wrap: wrap;">
                        <span class="spec-bullet">▸</span>
                        <span class="spec-label">Elevation:</span>
                        <span class="spec-value">${elevation}</span>
                    </div>
                    <div class="spec-item" style="flex-wrap: wrap;">
                        <span class="spec-bullet">▸</span>
                        <span class="spec-label">Turret Rotation:</span>
                        <span class="spec-value">${rotationText}</span>
                    </div>
                    <div class="spec-item" style="flex-wrap: wrap;">
                        <span class="spec-bullet">▸</span>
                        <span class="spec-label">Coax MG:</span>
                        <span class="spec-value" style="${coaxCrossed}">${coaxialGunText}</span>
                    </div>
                    <div class="spec-item" style="flex-wrap: wrap;">
                        <span class="spec-bullet">▸</span>
                        <span class="spec-label">Hull MG:</span>
                        <span class="spec-value" style="${hullCrossed}">${hullGunText}</span>
                    </div>
                    <div class="spec-item" style="flex-wrap: wrap;">
                        <span class="spec-bullet">▸</span>
                        <span class="spec-label">Top Speed:</span>
                        <span class="spec-value">${stats.topSpeed}</span>
                    </div>
                    <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 12px; margin-top: 16px;">
                        <button id="tankInfoIcon" class="select-info-button" onclick="showTankInfo()">
                            <span>INTEL</span>
                        </button>
                        <div class="faction-image-compact overflow-hidden flex items-center justify-center flex-shrink-0" style="width: 112px; height: 112px; margin-left: auto;">
                            <picture>
                                <source srcset="images/tanks/${factionMap[faction] || 'BISHOP_248'}.webp" type="image/webp">
                                <img id="factionImageBottom" src="images/tanks/${factionMap[faction] || 'BISHOP_248'}.png" alt="Faction" class="max-w-full max-h-full object-contain" decoding="async" style="opacity: 1;">
                            </picture>
                        </div>
                    </div>
                `;
            } else if (table) {
                milRangeText.innerHTML = `
                    <div class="spec-item" style="flex-wrap: wrap;">
                        <span class="spec-bullet">▸</span>
                        <span class="spec-label">Elevation:</span>
                        <span class="spec-value">${table.minMil} MIL to ${table.maxMil} MIL</span>
                    </div>
                    <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 12px; margin-top: 16px;">
                        <button id="tankInfoIcon" class="select-info-button" onclick="showTankInfo()">
                            <span>INTEL</span>
                        </button>
                        <div class="faction-image-compact overflow-hidden flex items-center justify-center flex-shrink-0" style="width: 112px; height: 112px; margin-left: auto;">
                            <picture>
                                <source srcset="images/tanks/${factionMap[faction] || 'BISHOP_248'}.webp" type="image/webp">
                                <img id="factionImageBottom" src="images/tanks/${factionMap[faction] || 'BISHOP_248'}.png" alt="Faction" class="max-w-full max-h-full object-contain" decoding="async" style="opacity: 1;">
                            </picture>
                        </div>
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
            
            // Classified reference text for each tank
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
                
                // Check if we're already showing this image to avoid unnecessary transitions
                const currentSrc = img.src;
                if (currentSrc && (currentSrc.includes(baseName) || currentSrc.endsWith(`${baseName}.png`))) {
                    // Already showing this image, ensure it's visible
                    img.style.opacity = '1';
                    return;
                }
                
                // Update picture element - browser will automatically choose WebP if supported
                const source = picture.querySelector('source');
                
                // Preload the image for smoother transitions with fade effect
                const newImage = new Image();
                
                // Fade out current image (only if there's a current image)
                if (currentSrc && !currentSrc.includes('data:') && currentSrc !== '') {
                    img.style.transition = 'opacity 0.2s ease';
                    img.style.opacity = '0';
                } else {
                    // Initial load - start hidden, will fade in when loaded
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.2s ease';
                }
                
                const switchImage = function(useWebP = true) {
                    // Update source elements
                    if (source) {
                        source.srcset = useWebP ? webpSrc : pngSrc;
                    }
                    img.src = pngSrc; // Set PNG as fallback
                    
                    // Remove high priority after initial load to allow other resources
                    if (img.hasAttribute('fetchpriority')) {
                        img.removeAttribute('fetchpriority');
                    }
                    
                    // Fade in the new image
                    requestAnimationFrame(function() {
                        img.style.opacity = '1';
                    });
                };
                
                // Set up load handlers
                let imageLoaded = false;
                newImage.onload = function() {
                    if (!imageLoaded) {
                        imageLoaded = true;
                        switchImage(true); // Use WebP
                    }
                };
                newImage.onerror = function() {
                    if (!imageLoaded) {
                        // Fallback to PNG if WebP fails
                        const pngImage = new Image();
                        pngImage.onload = function() {
                            if (!imageLoaded) {
                                imageLoaded = true;
                                switchImage(false); // Use PNG
                            }
                        };
                        pngImage.onerror = function() {
                            if (!imageLoaded) {
                                imageLoaded = true;
                                // Final fallback to default tank image
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
                
                // Start loading WebP first
                newImage.src = webpSrc;
                
                // If image is already cached, switch immediately
                if (newImage.complete && newImage.naturalWidth > 0) {
                    imageLoaded = true;
                    switchImage(true); // Use WebP (it's already loaded)
                }
                
                // Also set up error handler on the main image
                img.onerror = function() {
                    if (source) {
                        source.srcset = 'images/tanks/BISHOP_248.webp';
                    }
                    this.src = 'images/tanks/BISHOP_248.png';
                    this.style.opacity = '1';
                };
            } else if (img) {
                // Fallback if picture element not found
                img.style.transition = 'opacity 0.2s ease';
                img.style.opacity = '0';
                
                const newImage = new Image();
                newImage.onload = function() {
                    img.src = `images/tanks/${baseName}.png`;
                    requestAnimationFrame(function() {
                        img.style.opacity = '1';
                    });
                };
                newImage.onerror = function() {
                    img.src = 'images/tanks/BISHOP_248.png';
                    img.style.opacity = '1';
                };
                newImage.src = `images/tanks/${baseName}.png`;
            }
            
            // Update bottom tank image
            const imgBottom = document.getElementById('factionImageBottom');
            const pictureBottom = imgBottom ? imgBottom.closest('picture') : null;
            
            if (imgBottom && pictureBottom) {
                const webpSrc = `images/tanks/${baseName}.webp`;
                const pngSrc = `images/tanks/${baseName}.png`;
                
                const currentSrcBottom = imgBottom.src || imgBottom.getAttribute('src') || '';
                // Check if image already shows the correct tank
                if (currentSrcBottom && (currentSrcBottom.includes(baseName) || currentSrcBottom.includes(`${baseName}.png`) || currentSrcBottom.includes(`${baseName}.webp`))) {
                    // Already showing correct image, ensure it's visible
                    imgBottom.style.opacity = '1';
                } else {
                    const sourceBottom = pictureBottom.querySelector('source');
                    const newImageBottom = new Image();
                    
                    if (currentSrcBottom && !currentSrcBottom.includes('data:') && currentSrcBottom !== '') {
                        imgBottom.style.transition = 'opacity 0.2s ease';
                        imgBottom.style.opacity = '0';
                    } else {
                        imgBottom.style.opacity = '0';
                        imgBottom.style.transition = 'opacity 0.2s ease';
                    }
                    
                    const switchImageBottom = function(useWebP = true) {
                        if (sourceBottom) {
                            sourceBottom.srcset = useWebP ? webpSrc : pngSrc;
                        }
                        imgBottom.src = pngSrc;
                        requestAnimationFrame(function() {
                            imgBottom.style.opacity = '1';
                        });
                    };
                    
                    let imageLoadedBottom = false;
                    newImageBottom.onload = function() {
                        if (!imageLoadedBottom) {
                            imageLoadedBottom = true;
                            switchImageBottom(true);
                        }
                    };
                    newImageBottom.onerror = function() {
                        if (!imageLoadedBottom) {
                            const pngImageBottom = new Image();
                            pngImageBottom.onload = function() {
                                if (!imageLoadedBottom) {
                                    imageLoadedBottom = true;
                                    switchImageBottom(false);
                                }
                            };
                            pngImageBottom.onerror = function() {
                                if (!imageLoadedBottom) {
                                    imageLoadedBottom = true;
                                    if (sourceBottom) {
                                        sourceBottom.srcset = 'images/tanks/BISHOP_248.webp';
                                    }
                                    imgBottom.src = 'images/tanks/BISHOP_248.png';
                                    imgBottom.style.opacity = '1';
                                }
                            };
                            pngImageBottom.src = pngSrc;
                        }
                    };
                    
                    newImageBottom.src = webpSrc;
                    
                    if (newImageBottom.complete && newImageBottom.naturalWidth > 0) {
                        imageLoadedBottom = true;
                        switchImageBottom(true);
                    }
                    
                    imgBottom.onerror = function() {
                        if (sourceBottom) {
                            sourceBottom.srcset = 'images/tanks/BISHOP_248.webp';
                        }
                        this.src = 'images/tanks/BISHOP_248.png';
                        this.style.opacity = '1';
                    };
                }
            } else if (imgBottom) {
                imgBottom.style.transition = 'opacity 0.2s ease';
                imgBottom.style.opacity = '0';
                
                const newImageBottom = new Image();
                newImageBottom.onload = function() {
                    imgBottom.src = `images/tanks/${baseName}.png`;
                    requestAnimationFrame(function() {
                        imgBottom.style.opacity = '1';
                    });
                };
                newImageBottom.onerror = function() {
                    imgBottom.src = 'images/tanks/BISHOP_248.png';
                    imgBottom.style.opacity = '1';
                };
                newImageBottom.src = `images/tanks/${baseName}.png`;
            }
            
            updateMilRangeText();

            const muzzleHeightInput = document.getElementById('muzzleHeight');
            if (muzzleHeightInput) {
                const v = getMuzzleHeightMForFaction(faction);
                muzzleHeightInput.value = String(v);
            }
        }

        // Adjust value function for increment/decrement buttons
        function adjustValue(fieldId, delta, event) {
            // Allow keyboard events to always work (they should only increment by 1)
            if (event && event.type === 'keydown') {
                // Keyboard events always proceed - they're handled separately and only increment by 1
            } else if (event && event.type === 'click') {
                // On mobile, prevent double-firing from touchstart + click
                // Check if this button was already handled by touchstart
                const target = event.target || event.currentTarget;
                if (target && target.getAttribute('data-touch-handled') === 'true') {
                    // This click was from a touch event, ignore it (touchstart already handled it)
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }
                
                // Also check time-based prevention for desktop mouse clicks
                const now = Date.now();
                if ((now - lastTapTime < 600 && lastTapField === fieldId && lastTapDelta === delta) || isProcessingHold) {
                    // This click was likely from the same tap, ignore it
                    return;
                }
            }
            
            // Also prevent if we're processing a hold and this isn't from the hold interval
            // But allow keyboard events to proceed
            if (isProcessingHold && (!event || (event.type !== 'touchstart' && event.type !== 'mousedown' && event.type !== 'keydown'))) {
                return;
            }
            
            const input = document.getElementById(fieldId);
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

            // Write raw numeric value into the field for fast manual editing
            input.value = newValue;
            
            // Update input wrapper state
            updateInputWrappers();
            
            // Update preset buttons if distance changed
            if (fieldId === 'distance') {
                updatePresetButtons();
                updateArmoredRuler(newValue);
                
                // Update slider to match input value
                const distanceSlider = document.getElementById('distanceSlider');
                if (distanceSlider) {
                    const clampedValue = Math.max(200, Math.min(600, newValue));
                    distanceSlider.value = clampedValue;
                }
                
                // Update range indicator immediately
                updateRangeIndicators();
                
                // Also trigger input event to ensure all listeners are notified
                input.dispatchEvent(new Event('input', { bubbles: true }));
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
                if (fieldId === 'distance' || fieldId === 'heightDiff' || fieldId === 'redNumber') {
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

        // Hold-to-increment functionality
        let holdInterval = null;
        let holdTimeout = null;
        let holdSpeed = 200; // Initial speed in ms
        let holdButton = null;
        let lastTapTime = 0;
        let lastTapField = null;
        let lastTapDelta = null;
        let isProcessingHold = false; // Flag to prevent double-firing

        function startHoldIncrement(fieldId, delta, event) {
            if (event) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                event.stopPropagation();
            }

            // If a hold is already active, do nothing. This prevents multiple triggers.
            if (holdInterval || holdTimeout) {
                return;
            }
            
            isProcessingHold = true;
            holdButton = event?.target || event?.currentTarget;
            if (holdButton) {
                holdButton.classList.add('holding');
                if (event && event.type === 'touchstart') {
                    holdButton.setAttribute('data-touch-handled', 'true');
                    setTimeout(() => {
                        if (holdButton) {
                            holdButton.removeAttribute('data-touch-handled');
                        }
                    }, 500);
                }
            }

            // Add listeners to the document to ensure stop is called, even if the cursor leaves the button.
            // Using { once: true } ensures they are automatically removed after firing once.
            document.addEventListener('mouseup', stopHoldIncrement, { once: true });
            document.addEventListener('touchend', stopHoldIncrement, { once: true });
            document.addEventListener('touchcancel', stopHoldIncrement, { once: true });
            
            const now = Date.now();
            lastTapTime = now;
            lastTapField = fieldId;
            lastTapDelta = delta;
            
            adjustValue(fieldId, delta, event);
            
            setTimeout(() => {
                isProcessingHold = false;
            }, 100);
            
            holdTimeout = setTimeout(() => {
                holdSpeed = 200; // Reset speed
                holdInterval = setInterval(() => {
                    adjustValue(fieldId, delta);
                    // Accelerate increment speed
                    if (holdSpeed > 50) {
                        clearInterval(holdInterval);
                        holdSpeed = Math.max(50, holdSpeed - 10);
                        holdInterval = setInterval(() => {
                            adjustValue(fieldId, delta);
                        }, holdSpeed);
                    }
                }, holdSpeed);
            }, 300);
        }

        function stopHoldIncrement() {
            // Remove the document-level listeners in case they haven't fired yet (e.g., if stop is called by an inline onmouseup)
            document.removeEventListener('mouseup', stopHoldIncrement);
            document.removeEventListener('touchend', stopHoldIncrement);
            document.removeEventListener('touchcancel', stopHoldIncrement);

            if (holdTimeout) {
                clearTimeout(holdTimeout);
                holdTimeout = null;
            }
            if (holdInterval) {
                clearInterval(holdInterval);
                holdInterval = null;
            }
            if (holdButton) {
                holdButton.classList.remove('holding');
                holdButton = null;
            }
            holdSpeed = 200;
            triggerHaptic('light');
            // Reset processing flag after a delay to allow for new taps
            setTimeout(() => {
                isProcessingHold = false;
            }, 150);
        }

        // Preset distance buttons
        function setPresetDistance(value) {
            const input = document.getElementById('distance');
            if (input) {
                input.value = value;
                // Update preset button states
                document.querySelectorAll('.preset-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelector(`.preset-button[data-value="${value}"]`)?.classList.add('active');
                
                // Trigger haptic feedback
                triggerHaptic('light');
                
                // Update and calculate
                updateArmoredRuler(value);
                updateInputWrappers();
                updatePresetButtons();
                updateRangeIndicators();
                saveState();
                if (isAutoCalcEnabled()) {
                    calculate();
                } else {
                    adjustValue('distance', 0); // Trigger update
                }
            }
        }

        // Clear input function
        function clearInput(fieldId) {
            const input = document.getElementById(fieldId);
            if (input) {
                input.value = fieldId === 'distance' ? '400' : '0';
                const wrapper = input.closest('.input-wrapper');
                if (wrapper) {
                    wrapper.classList.remove('has-value');
                }
                
                triggerHaptic('light');
                
                if (fieldId === 'distance') {
                    updateArmoredRuler(400);
                }
                saveState();
                if (isAutoCalcEnabled()) {
                    calculate();
                } else {
                    adjustValue(fieldId, 0);
                }
            }
        }

        // Swipe gesture handlers
        let swipeStartY = null;
        let swipeStartX = null;
        let swipeThreshold = 30;

        function initSwipeGestures() {
            const inputs = ['distance', 'heightDiff', 'redNumber'];
            inputs.forEach(fieldId => {
                const input = document.getElementById(fieldId);
                if (input) {
                    input.addEventListener('touchstart', (e) => {
                        // Don't prevent default - allow normal input focus and typing
                        swipeStartY = e.touches[0].clientY;
                        swipeStartX = e.touches[0].clientX;
                        input.classList.add('swipe-active');
                        // Ensure input can receive focus for typing
                        if (document.activeElement !== input) {
                            input.focus();
                        }
                    }, { passive: true });
                    
                    input.addEventListener('touchmove', (e) => {
                        if (swipeStartY === null) return;
                        const deltaY = e.touches[0].clientY - swipeStartY;
                        const deltaX = e.touches[0].clientX - swipeStartX;
                        // Only process if vertical swipe is dominant
                        if (Math.abs(deltaY) > Math.abs(deltaX)) {
                            e.preventDefault();
                        }
                    }, { passive: false });
                    
                    input.addEventListener('touchend', (e) => {
                        if (swipeStartY === null) return;
                        const deltaY = e.changedTouches[0].clientY - swipeStartY;
                        const deltaX = Math.abs(e.changedTouches[0].clientX - swipeStartX);
                        
                        // Only process swipe if it was a significant swipe (not just a tap)
                        // This allows normal taps to focus the input for typing
                        if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > swipeThreshold) {
                            // It's a swipe, prevent default to avoid triggering input focus
                            e.preventDefault();
                            const increment = Math.abs(deltaY) > 100 ? 10 : 1;
                            if (deltaY < 0) {
                                // Swipe up - increment
                                adjustValue(fieldId, increment);
                                triggerHaptic('light');
                            } else {
                                // Swipe down - decrement
                                adjustValue(fieldId, -increment);
                                triggerHaptic('light');
                            }
                        } else {
                            // It's just a tap, allow normal input behavior (focus and typing)
                            // Don't prevent default
                        }
                        
                        swipeStartY = null;
                        swipeStartX = null;
                        input.classList.remove('swipe-active');
                    }, { passive: false });
                }
            });
        }

        // Haptic feedback
        function triggerHaptic(type = 'light') {
            if ('vibrate' in navigator) {
                const patterns = {
                    'light': 10,
                    'medium': 20,
                    'strong': 30
                };
                try {
                    navigator.vibrate(patterns[type] || 10);
                } catch (e) {
                    // Chrome blocks vibration if no user gesture - suppress error
                    console.debug('Vibration blocked by browser:', e.message);
                }
            }
        }

        // Update range indicators
        function updateRangeIndicators() {
            const distance = parseFloat(document.getElementById('distance').value) || 400;
            const distanceBar = document.getElementById('distanceRangeBar');
            if (distanceBar) {
                // Distance range: 200-600m, show percentage
                const clampedDistance = Math.max(200, Math.min(600, distance));
                const percentage = ((clampedDistance - 200) / (600 - 200)) * 100;
                distanceBar.style.width = Math.min(100, Math.max(0, percentage)) + '%';
                
                // Color states for 200-600m range:
                // Green (optimal): 300-500m
                // Yellow (acceptable): 250-300m and 500-550m
                // Orange (edge): 200-250m and 550-600m
                if (clampedDistance >= 300 && clampedDistance <= 500) {
                    // Optimal range - green
                    distanceBar.style.background = 'linear-gradient(90deg, #22c55e, #22c55e)';
                } else if ((clampedDistance >= 250 && clampedDistance < 300) || (clampedDistance > 500 && clampedDistance <= 550)) {
                    // Acceptable range - yellow
                    distanceBar.style.background = 'linear-gradient(90deg, #eab308, #eab308)';
                } else if ((clampedDistance >= 200 && clampedDistance < 250) || (clampedDistance > 550 && clampedDistance <= 600)) {
                    // Edge of range - orange
                    distanceBar.style.background = 'linear-gradient(90deg, #f97316, #f97316)';
                } else {
                    // Fallback - should not happen with clamping
                    distanceBar.style.background = 'linear-gradient(90deg, #ef4444, #ef4444)';
                }
            }
        }

        // Update result validation colors
        function updateResultValidation(final, minMil, maxMil) {
            const resultValue = document.getElementById('resultValue');
            if (resultValue) {
                resultValue.classList.remove('valid', 'warning', 'invalid');
                if (final >= minMil && final <= maxMil) {
                    resultValue.classList.add('valid');
                } else {
                    resultValue.classList.add('invalid');
                }
            }
        }

        // Flash result on calculation
        function flashResult() {
            const resultValue = document.getElementById('resultValue');
            if (resultValue) {
                resultValue.classList.add('flash');
                setTimeout(() => {
                    resultValue.classList.remove('flash');
                }, 300);
            }
        }

        // Recent values memory
        const RECENT_VALUES_KEY = 'hll_calc_recent_distances';
        const MAX_RECENT_VALUES = 10;

        function saveRecentDistance(value) {
            try {
                let recent = JSON.parse(localStorage.getItem(RECENT_VALUES_KEY) || '[]');
                // Remove if already exists
                recent = recent.filter(v => v !== value);
                // Add to front
                recent.unshift(value);
                // Keep only last MAX_RECENT_VALUES
                recent = recent.slice(0, MAX_RECENT_VALUES);
                localStorage.setItem(RECENT_VALUES_KEY, JSON.stringify(recent));
            } catch (e) {
                console.error('Error saving recent distance:', e);
            }
        }

        function getRecentDistances() {
            try {
                return JSON.parse(localStorage.getItem(RECENT_VALUES_KEY) || '[]');
            } catch (e) {
                return [];
            }
        }

        // Update input wrapper state for clear buttons
        function updateInputWrappers() {
            document.querySelectorAll('.input-wrapper input').forEach(input => {
                const wrapper = input.closest('.input-wrapper');
                if (wrapper) {
                    if (input.value && input.value !== '0' && input.value !== '400') {
                        wrapper.classList.add('has-value');
                    } else {
                        wrapper.classList.remove('has-value');
                    }
                }
            });
        }

        // Update preset button active state
        function updatePresetButtons() {
            const distance = parseFloat(document.getElementById('distance').value) || 400;
            document.querySelectorAll('.preset-button').forEach(btn => {
                btn.classList.remove('active');
                if (parseInt(btn.dataset.value) === distance) {
                    btn.classList.add('active');
                }
            });
        }

        // Constants
        const SLIDER_THUMB_WIDTH = 18;
        const MILS_PER_RAD_APPROX = -80;
        const MILS_PER_DEG = 17.777779;
        const SPA_V0_MPS = 112.5;
        const SPA_G_MPS2 = 9.8;
        const USE_PHYSICS_HEIGHT_CORRECTION = true;
        const USE_PERFECT_SPA_MECHANIC = true;

        // Check if auto calculation is enabled
        function isAutoCalcEnabled() {
            const toggle = document.getElementById('autoCalcToggle');
            return toggle ? toggle.checked : true; // Default to auto
        }
        
        // Function to update display values from input fields ONLY when not calculated
        // This should NOT overwrite calculated values from calculate() function
        function updateDisplayValues() {
            const heightInput = document.getElementById('heightDiff');
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
                    const hVal = parseFloat(heightInput.value) || 0;
                    const hText = (hVal >= 0 ? '+' : '') + hVal + 'm';
                    heightEl.textContent = hText;
                    heightEl.className = hVal >= 0 ? 'text-green-400' : 'text-red-400';
                }
            }
            if (heightSymbolEl && heightInput) {
                const hVal = parseFloat(heightInput.value) || 0;
                heightSymbolEl.textContent = hVal >= 0 ? '▲' : '▼';
            }
            
            // Only update elevation if it's "--" or empty (error state)
            if (redEl && redInput) {
                if (redEl.textContent === '--' || redEl.textContent.trim() === '') {
                    const rVal = parseFloat(redInput.value) || 0;
                    const rText = (rVal >= 0 ? '+' : '') + rVal;
                    redEl.textContent = rText;
                    const colorClass = rVal >= 0 ? 'text-green-400' : 'text-red-400';
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
            const buttonContainer = button ? button.parentElement : null;
            const isAuto = isAutoCalcEnabled();
            if (button && buttonContainer) {
                if (isAuto) {
                    buttonContainer.style.display = 'none';
                } else {
                    buttonContainer.style.display = 'block';
                    button.classList.remove('opacity-50', 'cursor-not-allowed');
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
            const distanceSlider = document.getElementById('distanceSlider');
            
            // Initialize slider value to match input (clamp to 200-600 range for slider only)
            if (distanceSlider && distanceInput) {
                const initialValue = parseFloat(distanceInput.value) || 400;
                // Clamp slider to 200-600 range, but allow input to be 0-1000
                const clampedValue = Math.max(200, Math.min(600, initialValue));
                distanceSlider.value = clampedValue;
                // Don't modify input value - allow 0-1000 range
            }
            
            // Sync input to slider
            distanceInput.addEventListener('input', function() {
                const inputValue = parseFloat(this.value) || 400;
                // Allow input to be 0-1000, but clamp for slider (200-600)
                const clampedInput = Math.max(0, Math.min(1000, inputValue));
                const clampedSlider = Math.max(200, Math.min(600, clampedInput));
                
                // Update input if it was outside 0-1000 range
                if (inputValue < 0 || inputValue > 1000) {
                    this.value = clampedInput;
                }
                
                // Update slider (clamped to 200-600)
                if (distanceSlider) {
                    distanceSlider.value = clampedSlider;
                }
                
                updateInputWrappers();
                updateRangeIndicators();
                updateArmoredRuler(clampedSlider);
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
            
            // Sync slider to input
            if (distanceSlider) {
                // Prevent page scrolling when touching slider on mobile
                let isDragging = false;
                
                // Function to update slider value from touch position
                function updateSliderFromTouch(e) {
                    // Get touch coordinates - use touches for start/move, changedTouches for end
                    let touch = null;
                    if (e.touches && e.touches.length > 0) {
                        touch = e.touches[0];
                    } else if (e.changedTouches && e.changedTouches.length > 0) {
                        touch = e.changedTouches[0];
                    }
                    
                    // If no valid touch found, return early
                    if (!touch) {
                        return;
                    }
                    
                    const rect = distanceSlider.getBoundingClientRect();
                    const x = touch.clientX - rect.left;
                    const percent = Math.max(0, Math.min(1, x / rect.width));
                    const min = parseFloat(distanceSlider.min) || 200;
                    const max = parseFloat(distanceSlider.max) || 600;
                    const step = parseFloat(distanceSlider.step) || 1;
                    const value = Math.round((min + percent * (max - min)) / step) * step;
                    const clampedValue = Math.max(min, Math.min(max, value));
                    
                    // Immediately update the range indicator bar for zero-lag visuals
                    if (distanceRangeBar) {
                        const percentage = ((clampedValue - min) / (max - min)) * 100;
                        distanceRangeBar.style.width = Math.min(100, Math.max(0, percentage)) + '%';
                        if (clampedValue >= 300 && clampedValue <= 500) {
                            distanceRangeBar.style.background = 'linear-gradient(90deg, #22c55e, #22c55e)';
                        } else if ((clampedValue >= 250 && clampedValue < 300) || (clampedValue > 500 && clampedValue <= 550)) {
                            distanceRangeBar.style.background = 'linear-gradient(90deg, #eab308, #eab308)';
                        } else if ((clampedValue >= 200 && clampedValue < 250) || (clampedValue > 550 && clampedValue <= 600)) {
                            distanceRangeBar.style.background = 'linear-gradient(90deg, #f97316, #f97316)';
                        } else {
                            distanceRangeBar.style.background = 'linear-gradient(90deg, #ef4444, #ef4444)';
                        }
                    }

                    distanceSlider.value = clampedValue;
                    // Trigger input event to update the input field and other dependencies
                    distanceSlider.dispatchEvent(new Event('input', { bubbles: true }));
                    // Keep the range indicator visually in sync while dragging
                    updateRangeIndicators();
                }
                
                const distanceRangeBar = document.getElementById('distanceRangeBar');
                
                distanceSlider.addEventListener('touchstart', function(e) {
                    isDragging = true;
                    if (distanceRangeBar) {
                        distanceRangeBar.classList.add('no-transition');
                    }
                    updateSliderFromTouch(e);
                    // Prevent default to stop page scrolling
                    if (e.cancelable) {
                        e.preventDefault();
                    }
                }, { passive: false });
                
                distanceSlider.addEventListener('touchmove', function(e) {
                    if (isDragging) {
                        updateSliderFromTouch(e);
                        // Prevent default to stop page scrolling while dragging
                        if (e.cancelable) {
                            e.preventDefault();
                        }
                    }
                }, { passive: false });
                
                distanceSlider.addEventListener('touchend', function(e) {
                    if (isDragging) {
                        updateSliderFromTouch(e);
                    }
                    isDragging = false;
                    if (distanceRangeBar) {
                        distanceRangeBar.classList.remove('no-transition');
                    }
                    // Small delay to prevent any scroll after release
                    if (e.cancelable) {
                        e.preventDefault();
                    }
                }, { passive: false });
                
                distanceSlider.addEventListener('input', function() {
                    const sliderValue = parseFloat(this.value) || 400;
                    distanceInput.value = Math.round(sliderValue);
                    
                    // Trigger input event to update everything
                    distanceInput.dispatchEvent(new Event('input'));
                });
            }
            
            // Ruler dragging removed for mobile - not compatible with touch devices
        }

        // Update armored ruler - no-op for mobile (ruler removed)
        function updateArmoredRuler(value) {
            // Ruler removed for mobile - function kept for compatibility
            return;
        }

        // Mechanical Counter System - from demo
        let currentElevationDigits = [];
        let isElevationNegative = false;
        const elevationCounterElement = document.getElementById('elevationCounter');
        
        // Get dynamic CELL_HEIGHT from computed styles or CSS variable
        function getCellHeight() {
            if (elevationCounterElement) {
                const computedStyle = window.getComputedStyle(elevationCounterElement);
                const height = parseFloat(computedStyle.height);
                if (height && !isNaN(height)) {
                    return height;
                }
            }
            // Fallback: get from CSS variable or use base size
            const rootStyle = getComputedStyle(document.documentElement);
            const baseSize = rootStyle.getPropertyValue('--counter-base-size').trim();
            const scale = rootStyle.getPropertyValue('--counter-scale').trim() || '1';
            const baseSizeNum = parseFloat(baseSize) || 80;
            const scaleNum = parseFloat(scale) || 1;
            const calculatedHeight = baseSizeNum * scaleNum;
            return calculatedHeight;
        }
        
        // Initialize CELL_HEIGHT - will be updated dynamically
        let CELL_HEIGHT = getCellHeight();
        
        // Function to update all counter strip positions when CELL_HEIGHT changes
        function updateCounterStripsForNewHeight() {
            if (!elevationCounterElement) return;
            
            // Get the old CELL_HEIGHT by checking if we can derive it from existing transforms
            // But for simplicity, we'll use currentElevationDigits as source of truth
            // Update all digit strips based on current state
            for (let i = 0; i < 4; i++) {
                const strip = document.getElementById(`elevation-strip-${i}`);
                if (!strip) continue;
                
                // Preserve current display by reading from state
                if (i === 0 && isElevationNegative) {
                    // First strip showing minus sign
                    strip.style.transition = 'none';
                    strip.style.transform = `translateY(-${1 * CELL_HEIGHT}px)`;
                } else {
                    // For all strips (first digit or remaining), use currentElevationDigits
                    const digit = (i < currentElevationDigits.length) ? currentElevationDigits[i] : 0;
                    strip.style.transition = 'none';
                    strip.style.transform = `translateY(-${digit * CELL_HEIGHT}px)`;
                }
            }
            
            // Also update MIL counter strips (they use position 10 to show letters)
            const milCounter = document.getElementById('elevationMilCounter');
            if (milCounter) {
                const milStrips = milCounter.querySelectorAll('.mil-strip');
                milStrips.forEach(strip => {
                    strip.style.transition = 'none';
                    strip.style.transform = `translateY(-${10 * CELL_HEIGHT}px)`;
                });
            }
        }
        
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
            // Update CELL_HEIGHT dynamically before use
            CELL_HEIGHT = getCellHeight();
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
                // Ensure MIL is initialized when counter is created
                initializeElevationMIL();
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
            // Update CELL_HEIGHT dynamically before use
            CELL_HEIGHT = getCellHeight();
            const absValue = Math.abs(targetNumber);
            const numStr = String(Math.max(0, Math.floor(absValue))).padStart(3, '0');
            const targetDigits = numStr.split('').map(Number);
            const isNeg = targetNumber < 0;
            
            // Ensure we have 4 wheels
            if (currentElevationDigits.length !== 4) {
                setupElevationCounter(targetNumber);
            }
            
            // Ensure MIL counter is always initialized and visible
            const milCounter = document.getElementById('elevationMilCounter');
            if (milCounter && !milCounter.querySelector('.mil-wheel')) {
                initializeElevationMIL();
            }
            if (milCounter) {
                milCounter.style.display = '';
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
                } else {
                    // Ensure position is set correctly even if no animation needed
                    if (isNeg) {
                        firstStrip.style.transition = 'none';
                        firstStrip.style.transform = `translateY(-${1 * CELL_HEIGHT}px)`;
                    } else {
                        firstStrip.style.transition = 'none';
                        firstStrip.style.transform = `translateY(0)`;
                    }
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
            
            // Match warning width to calculator-card before showing
            matchWarningWidth();
            
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

        function clamp01(x) {
            if (x <= 0) return 0;
            if (x >= 1) return 1;
            return x;
        }

        function lerp(a, b, t) {
            return a + (b - a) * t;
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

            // Match desktop solver: target surface is at Z=0 and terrain slope only affects ground plane,
            // keeping the impact distance calculation consistent with table distances.
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
            const t = Math.max(0, Math.min(1, (mil - maxPitchMil) / denom));
            return minRange + (maxRange - minRange) * t;
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

        // Calculate function
        function calculate() {
            try {
                const faction = document.getElementById('faction').value;
                const distance = parseFloat(document.getElementById('distance').value);
            
            // Parse heightDiff - handle +, -, and empty values
            const heightDiffInput = document.getElementById('heightDiff');
            let heightDiff = 0;
            if (heightDiffInput) {
                const heightDiffValue = heightDiffInput.value.trim();
                if (heightDiffValue === '' || heightDiffValue === '-' || heightDiffValue === '+') {
                    heightDiff = 0;
                } else {
                    const parsed = parseFloat(heightDiffValue.replace(/\+/g, ''));
                    heightDiff = isNaN(parsed) ? 0 : parsed;
                }
            }
            
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
            
            // Check if final elevation is outside turret's MIL limits
            if (final < minMil || final > maxMil) {
                let limitWarning = '';
                if (final < minMil) {
                    limitWarning = `WARNING: Calculated elevation (${final} MIL) is below this turret's minimum elevation (${minMil} MIL).`;
                } else if (final > maxMil) {
                    limitWarning = `WARNING: Calculated elevation (${final} MIL) exceeds this turret's maximum elevation (${maxMil} MIL).`;
                }
                if (warningDiv) {
                    showWarning(warningDiv, limitWarning);
                }
                // Update result validation - invalid
                updateResultValidation(final, minMil, maxMil);
            } else if (distance < minDist || distance > maxDist) {
                // Keep distance warning if no MIL limit issue
                if (warningDiv) {
                    showWarning(warningDiv, `Warning: Distance (${distance}m) is outside the typical range (${minDist}-${maxDist}m).`);
                }
                // Update result validation - warning
                const resultValue = document.getElementById('resultValue');
                if (resultValue) {
                    resultValue.classList.remove('valid', 'warning', 'invalid');
                    resultValue.classList.add('warning');
                }
            } else {
                if (warningDiv) {
                    hideWarning(warningDiv);
                }
                // Update result validation - valid
                updateResultValidation(final, minMil, maxMil);
            }

            // Update elevation using mechanical counter
            rollElevationToNumber(Math.round(final));
            
            // Update result validation colors
            updateResultValidation(final, minMil, maxMil);
            
            // Flash result on calculation
            flashResult();
            
            // Save recent distance
            saveRecentDistance(distance);
            
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
            const displayHeightDiff = (typeof heightDiff === 'number' && !isNaN(heightDiff)) ? heightDiff : 0;
            const displayRedNumber = (typeof redNumber === 'number' && !isNaN(redNumber)) ? redNumber : 0;
            
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
            
            // Set target height - ALWAYS set, NEVER "--"
            const heightElement = document.getElementById('heightValue');
            const heightSymbolElement = document.getElementById('heightSymbol');
            if (heightElement) {
                const heightText = (displayHeightDiff >= 0 ? '+' : '') + displayHeightDiff + 'm';
                heightElement.textContent = heightText;
                heightElement.className = displayHeightDiff >= 0 ? 'text-green-400' : 'text-red-400';
            } else {
                console.error('heightValue element not found!');
            }
            if (heightSymbolElement) {
                heightSymbolElement.textContent = displayHeightDiff >= 0 ? '▲' : '▼';
            }
            
            // Set elevation - ALWAYS set, NEVER "--"
            const redElement = document.getElementById('redValue');
            const redUnitElement = document.getElementById('redValueUnit');
            if (redElement) {
                const redText = (displayRedNumber >= 0 ? '+' : '') + displayRedNumber;
                redElement.textContent = redText;
                const colorClass = displayRedNumber >= 0 ? 'text-green-400' : 'text-red-400';
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
                    const expectedText = (displayHeightDiff >= 0 ? '+' : '') + displayHeightDiff + 'm';
                    if (currentText === '--' || currentText === '0m' || currentText.trim() === '') {
                        heightEl.textContent = expectedText;
                    }
                }
                
                // Re-verify and set elevation if needed
                if (redEl) {
                    const currentText = redEl.textContent;
                    const expectedText = (displayRedNumber >= 0 ? '+' : '') + displayRedNumber;
                    if (currentText === '--' || currentText === '+0' || currentText === '0' || currentText.trim() === '') {
                        redEl.textContent = expectedText;
                    }
                }
            }, 50);
            
            // Update MIL labels after values are set
            updateMilLabels();

            // Remove focus from calculate button to clear yellow highlight (mobile doesn't need focus management)
            /* if (document.activeElement && document.activeElement.id === 'calculateButton') {
                document.activeElement.blur();
            } */

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
            // Update CELL_HEIGHT dynamically before use
            CELL_HEIGHT = getCellHeight();
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
            
            // Trigger haptic feedback
            triggerHaptic('medium');
            
            // Add resetting class and change text
            if (resetButton) {
                resetButton.classList.add('resetting');
                resetButton.innerHTML = '✓';
            }
            
            // Reset input fields
            const distanceInput = document.getElementById('distance');
            const heightDiffInput = document.getElementById('heightDiff');
            const redNumberInput = document.getElementById('redNumber');
            
            if (distanceInput) {
                distanceInput.value = '400';
                // Update slider to match the reset value
                const distanceSlider = document.getElementById('distanceSlider');
                if (distanceSlider) {
                    distanceSlider.value = '400';
                }
                // Update ruler directly (don't trigger input event which might interfere with snap)
                if (typeof updateArmoredRuler === 'function') {
                    updateArmoredRuler(400);
                }
            }
            if (heightDiffInput) {
                heightDiffInput.value = '0';
            }
            if (redNumberInput) {
                redNumberInput.value = '0';
            }
            
            // Update new UI elements
            updateInputWrappers();
            updatePresetButtons();
            updateRangeIndicators();
            
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
                    if (redValueEl) redValueEl.textContent = '+0';
                }
                
                // Hide warning if visible
                const warningDiv = document.getElementById('warning');
                if (warningDiv) {
                    hideWarning(warningDiv);
                }
                
                // Reset result validation
                const resultValue = document.getElementById('resultValue');
                if (resultValue) {
                    resultValue.classList.remove('valid', 'warning', 'invalid');
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
                const state = {
                    faction: document.getElementById('faction').value,
                    distance: document.getElementById('distance').value,
                    heightDiff: document.getElementById('heightDiff').value,
                    redNumber: document.getElementById('redNumber').value,
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

                const distanceInput = document.getElementById('distance');
                if (state.distance !== undefined && state.distance !== null && state.distance !== '') {
                    distanceInput.value = state.distance;
                    updateArmoredRuler(parseFloat(state.distance) || 400);
                }

                const heightDiffInput = document.getElementById('heightDiff');
                if (state.heightDiff !== undefined && state.heightDiff !== null && state.heightDiff !== '') {
                    heightDiffInput.value = state.heightDiff;
                }

                const redNumberInput = document.getElementById('redNumber');
                if (state.redNumber !== undefined && state.redNumber !== null && state.redNumber !== '') {
                    redNumberInput.value = state.redNumber;
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

        // Toggle function for armored panel switches
        // Add a debounce to prevent double-firing
        let toggleDebounce = false;
        function toggleArmoredSwitch(checkboxId, element) {
            // Prevent rapid double-taps/clicks
            if (toggleDebounce) {
                return;
            }
            
            try {
                const checkbox = document.getElementById(checkboxId);
                if (!checkbox) {
                    return;
                }
                
                // Set debounce flag
                toggleDebounce = true;
                
                // Toggle the checkbox state
                checkbox.checked = !checkbox.checked;
                
                // Trigger the change event - this will handle all UI updates including syncArmoredToggles
                const event = new Event('change', { bubbles: true });
                checkbox.dispatchEvent(event);
                
                // Clear debounce after a short delay
                setTimeout(() => {
                    toggleDebounce = false;
                }, 300);
            } catch (error) {
                console.error('Error in toggleArmoredSwitch:', error);
                toggleDebounce = false;
            }
        }
        
        // Explicitly expose to global scope for inline onclick handlers
        window.toggleArmoredSwitch = toggleArmoredSwitch;
        
        // Toggle tank specifications panel
        function toggleTankSpecs() {
            const specsPanel = document.getElementById('milRangeText');
            const toggleIcon = document.getElementById('tankSpecsToggleIcon');
            
            if (specsPanel && toggleIcon) {
                const isCollapsed = specsPanel.classList.contains('tank-specs-collapsed');
                
                if (isCollapsed) {
                    specsPanel.classList.remove('tank-specs-collapsed');
                    toggleIcon.textContent = '▲';
                    toggleIcon.style.transform = 'rotate(0deg)';
                } else {
                    specsPanel.classList.add('tank-specs-collapsed');
                    toggleIcon.textContent = '▼';
                    toggleIcon.style.transform = 'rotate(0deg)';
                }
            }
        }
        
        // Expose to global scope for inline onclick handlers
        window.toggleTankSpecs = toggleTankSpecs;

        // Sync armored toggles with checkboxes on load
        function syncArmoredToggles() {
            const autoToggle = document.getElementById('autoCalcToggle');
            const armoredAuto = document.getElementById('armoredAutoToggle');
            
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
        }

        // Load any saved state before wiring up interactions
        loadState();
        
        function checkElevationLabelOverlap() {
            const resultContainer = document.getElementById('result');
            if (!resultContainer) return;
            const copyButton = resultContainer.querySelector('.copy-result-button');
            const resetButton = resultContainer.querySelector('.reset-result-button');
            const label = resultContainer.querySelector('.panel-label');
            if (!copyButton || !resetButton || !label) return;
            const containerWidth = resultContainer.offsetWidth;
            const containerRect = resultContainer.getBoundingClientRect();
            const copyRect = copyButton.getBoundingClientRect();
            const resetRect = resetButton.getBoundingClientRect();
            const labelRect = label.getBoundingClientRect();
            const leftButtonRight = resetRect.right - containerRect.left;
            const rightButtonLeft = copyRect.left - containerRect.left;
            const availableWidth = rightButtonLeft - leftButtonRight;
            const labelWidth = labelRect.width;
            const labelLeft = labelRect.left - containerRect.left;
            const labelRight = labelRect.right - containerRect.left;
            const overlapsLeft = labelLeft < leftButtonRight;
            const overlapsRight = labelRight > rightButtonLeft;
        }
        
        // Initialize mechanical counter
        setupElevationCounter(0);
        initializeElevationMIL();

        // Ensure faction image and badges are displayed on initial load
        updateFactionImage();
        updateMilRangeText();

        syncSliderWithInput();

        checkElevationLabelOverlap();
        window.addEventListener('resize', function() {
            // Match warning width to calculator-card on resize
            matchWarningWidth();
            
            if (elevationCounterElement) {
                const currentCellHeight = getCellHeight();
                
                // Check if CELL_HEIGHT has changed and update if necessary
                if (currentCellHeight !== CELL_HEIGHT) {
                    CELL_HEIGHT = currentCellHeight;
                    // Update all strip positions with new CELL_HEIGHT
                    updateCounterStripsForNewHeight();
                }
            }
            checkElevationLabelOverlap();
        });
        
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
        const autoToggleCheckbox = document.getElementById('autoCalcToggle');
        if (autoToggleCheckbox) {
            autoToggleCheckbox.addEventListener('change', syncArmoredToggles);
        }
        
        // Mobile-optimized toggle switch event handling
        const armoredAutoToggle = document.getElementById('armoredAutoToggle');
        if (armoredAutoToggle) {
            let touchStartTime = 0;
            let touchStartY = 0;
            let touchHandled = false;
            
            // Handle touch start
            armoredAutoToggle.addEventListener('touchstart', function(e) {
                touchHandled = false;
                touchStartTime = Date.now();
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            
            // Handle touch end - only toggle if it was a tap (not a scroll)
            armoredAutoToggle.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const touchEndTime = Date.now();
                const touchEndY = e.changedTouches[0].clientY;
                const timeDiff = touchEndTime - touchStartTime;
                const yDiff = Math.abs(touchEndY - touchStartY);
                
                // Only toggle if it was a quick tap (less than 300ms) and minimal movement (less than 10px)
                if (timeDiff < 300 && yDiff < 10) {
                    touchHandled = true;
                    toggleArmoredSwitch('autoCalcToggle', this);
                    // Prevent click event from firing after touch
                    setTimeout(() => {
                        touchHandled = false;
                    }, 400);
                }
            }, { passive: false });
            
            // Handle click for desktop/mouse users
            armoredAutoToggle.addEventListener('click', function(e) {
                // Only handle click if it wasn't from a touch event
                if (touchHandled) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                toggleArmoredSwitch('autoCalcToggle', this);
            });
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

            // On blur, if left empty, force it back to 0
            const ensureNonEmptyHandler = function() {
                if (this.value.trim() === '') {
                    this.value = '0';
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
                    
                    // When leaving a field with a value, calculate in auto mode
                    if (isAutoCalcEnabled()) {
                        calculate();
                    }
                    // Note: When auto calc is off, don't reset base value on blur
                    // The base value should only be reset when input values actually change,
                    // not when fields lose focus (e.g., clicking calculate button)
                }
            };

            // On focus (when tabbing to field), calculate in auto mode
            const focusCalcHandler = function() {
                // Don't calculate on focus - it interferes with typing
                // Calculation will happen on blur instead
            };

            // Prevent typing letters - only allow numbers and decimal separator (comma or period)
            input.addEventListener('keypress', function(e) {
                const char = String.fromCharCode(e.which || e.keyCode);
                const currentValue = this.value;
                
                // Allow minus sign only at the start for redNumber and heightDiff
                if (char === '-') {
                    if (this.id === 'redNumber' || this.id === 'heightDiff') {
                        // Only allow minus at the start and if not already present
                        if (this.selectionStart !== 0 || currentValue.includes('-')) {
                            e.preventDefault();
                        }
                        return;
                    } else {
                        e.preventDefault();
                        return;
                    }
                }
                
                // Allow: numbers (0-9), comma (,), period (.)
                if (!/[0-9,.]/.test(char) && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    return;
                }
                
                // Only allow one decimal separator
                if ((char === ',' || char === '.') && (currentValue.includes(',') || currentValue.includes('.'))) {
                    e.preventDefault();
                }
            });

            // Normalize input value - convert comma to period and ensure only numbers and one decimal separator
            input.addEventListener('input', function(e) {
                const cursorPos = this.selectionStart;
                let value = this.value;
                
                // Handle negative numbers for redNumber and heightDiff fields
                const isNegative = value.startsWith('-');
                // Remove all non-numeric characters except comma, period, and minus sign
                value = value.replace(/[^0-9,.\-]/g, '');
                // Ensure minus sign is only at the start
                if (value.includes('-')) {
                    value = '-' + value.replace(/-/g, '');
                } else if (isNegative && !value.startsWith('-')) {
                    value = '-' + value;
                }
                
                // Replace comma with period
                value = value.replace(/,/g, '.');
                // Ensure only one decimal separator
                const parts = value.split('.');
                if (parts.length > 2) {
                    value = parts[0] + '.' + parts.slice(1).join('');
                }
                
                // Enforce min/max limits for distance field
                if (this.id === 'distance') {
                    const numValue = parseFloat(value);
                    if (!isNaN(numValue)) {
                        if (numValue < 0) {
                            value = '0';
                        } else if (numValue > 1000) {
                            value = '1000';
                        }
                    }
                }
                
                // Enforce min/max limits for redNumber field (tank body angle)
                if (this.id === 'redNumber') {
                    const numValue = parseFloat(value);
                    if (!isNaN(numValue)) {
                        if (numValue < -1000) {
                            value = '-1000';
                        } else if (numValue > 1000) {
                            value = '1000';
                        }
                    }
                }
                
                // Enforce min/max limits for heightDiff field
                if (this.id === 'heightDiff') {
                    const numValue = parseFloat(value);
                    if (!isNaN(numValue)) {
                        if (numValue < -5000) {
                            value = '-5000';
                        } else if (numValue > 5000) {
                            value = '5000';
                        }
                    }
                }
                
                if (value !== this.value) {
                    this.value = value;
                    // Restore cursor position
                    setTimeout(() => {
                        const newPos = Math.min(cursorPos, value.length);
                        this.setSelectionRange(newPos, newPos);
                    }, 0);
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
                } else {
                    // When auto calc is off, reset base value to "--" and final value to 0000 when any input changes
                    if (this.id === 'heightDiff' || this.id === 'redNumber' || this.id === 'distance') {
                        const baseValueEl = document.getElementById('baseValue');
                        if (baseValueEl) {
                            baseValueEl.textContent = '--';
                        }
                        // Reset final value to 0000 when auto calc is off
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
            });

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


        // Keyboard focus loop: Distance -> Height -> Elevation -> Calculate (manual only) -> Distance
        const distanceInputEl = document.getElementById('distance');
        const heightInputEl = document.getElementById('heightDiff');
        const redInputEl = document.getElementById('redNumber');
        const calcButtonEl = document.getElementById('calculateButton');

        // Function to update tab loop based on auto/manual mode
        function updateTabLoop() {
            // Tab navigation disabled for mobile - no tabindex needed
            // This function kept for compatibility but does nothing on mobile
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
                // Ensure toggle visual state is synced after all updates
                syncArmoredToggles();
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
                        // Reset final counter to 0000 when tank changes and auto calc is off
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

        // Function to open screenshot in lightbox (make it global)
        window.openScreenshotLightbox = function(src) {
            const lightbox = document.getElementById('screenshotLightbox');
            const lightboxImg = document.getElementById('screenshotLightboxImg');
            const lightboxSource = document.getElementById('screenshotLightboxSource');
            if (lightbox && lightboxImg) {
                // IMMEDIATELY clear old image source using transparent pixel to force clear
                // This must happen before anything else to prevent old image flash
                const blankPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                const lightboxPicture = lightboxImg.closest('picture');
                
                // ALWAYS hide picture element first if lightbox is active - prevents any rendering
                if (lightbox.classList.contains('active') && lightboxPicture) {
                    lightboxPicture.classList.add('switching');
                }
                
                if (lightbox.classList.contains('active') && lightboxImg.src) {
                    // Remove ready class and add hiding class
                    lightboxImg.classList.remove('ready');
                    lightboxImg.classList.add('hiding');
                    
                    // REMOVE source element from DOM entirely to prevent browser from using it
                    if (lightboxSource && lightboxSource.parentNode) {
                        lightboxSource.parentNode.removeChild(lightboxSource);
                    }
                    // Remove src entirely instead of setting to blank pixel - prevents browser from showing cached image
                    lightboxImg.removeAttribute('src');
                    lightboxImg.removeAttribute('srcset');
                    // Also clear any cached image data
                    if (lightboxImg.complete) {
                        lightboxImg.src = '';
                    }
                    
                    // Force multiple reflows to ensure the blank pixel is rendered
                    void lightboxImg.offsetHeight;
                    void lightboxImg.offsetWidth;
                }
                
                // Get all screenshots from the current gallery (both PNG and WebP)
                const screenshotItems = document.querySelectorAll('.screenshot-item');
                currentScreenshotGallery = Array.from(screenshotItems).map(item => {
                    // Try WebP first, fallback to PNG
                    const webpSrc = item.getAttribute('data-src-webp');
                    return webpSrc || item.getAttribute('data-src');
                });
                
                // Find the index of the clicked image
                const clickedItem = Array.from(screenshotItems).find(item => 
                    item.getAttribute('data-src') === src || item.getAttribute('data-src-webp') === src
                );
                
                let targetWebpSrc, targetPngSrc, targetSrc;
                
                if (clickedItem) {
                    targetWebpSrc = clickedItem.getAttribute('data-src-webp');
                    targetPngSrc = clickedItem.getAttribute('data-src');
                    targetSrc = targetPngSrc || src;
                    currentScreenshotIndex = Array.from(screenshotItems).indexOf(clickedItem);
                } else {
                    currentScreenshotIndex = 0;
                    targetSrc = currentScreenshotGallery[0] || src;
                }
                
                // If opening fresh, ensure image starts hidden but will show when ready
                if (!lightbox.classList.contains('active') || !lightboxImg.src || lightboxImg.src === blankPixel) {
                    // Remove ready class to ensure image is hidden initially
                    lightboxImg.classList.remove('ready');
                    lightboxImg.classList.remove('hiding');
                    // Remove switching class if present
                    if (lightboxPicture) {
                        lightboxPicture.classList.remove('switching');
                    }
                }
                
                // Preload the new image before switching to avoid showing old image
                const newImg = new Image();
                let imageLoaded = false;
                
                const switchImage = function() {
                    if (imageLoaded) return; // Prevent multiple calls
                    imageLoaded = true;
                    
                    // Recreate source element if it was removed, or update existing one
                    const pictureElement = lightboxImg.closest('picture');
                    let currentSource = pictureElement ? pictureElement.querySelector('source') : null;
                    
                    if (targetWebpSrc) {
                        if (!currentSource) {
                            // Recreate source element if it was removed
                            currentSource = document.createElement('source');
                            currentSource.id = 'screenshotLightboxSource';
                            currentSource.type = 'image/webp';
                            if (pictureElement) {
                                pictureElement.insertBefore(currentSource, lightboxImg);
                            }
                        }
                        currentSource.srcset = targetWebpSrc;
                    } else if (currentSource && currentSource.parentNode) {
                        // Remove source if no WebP version
                        currentSource.parentNode.removeChild(currentSource);
                    }
                    
                    // Set the new image source BUT keep picture hidden until image loads
                    lightboxImg.src = targetSrc;
                    
                    // Function to show the new image
                    const showNewImage = function() {
                        // Remove switching class from picture element
                        const lightboxPicture = pictureElement;
                        if (lightboxPicture) {
                            lightboxPicture.classList.remove('switching');
                        }
                        
                        // Remove hiding class and add ready class
                        lightboxImg.classList.remove('hiding');
                        lightboxImg.classList.add('ready');
                    };
                    
                    // Check if image is already loaded (cached)
                    if (lightboxImg.complete && lightboxImg.naturalWidth > 0) {
                        // Image is already loaded, show it (use small delay to ensure src is set)
                        setTimeout(function() {
                            showNewImage();
                        }, 10);
                    } else {
                        // Wait for image to load
                        const originalOnload = lightboxImg.onload;
                        lightboxImg.onload = function() {
                            if (originalOnload) originalOnload();
                            showNewImage();
                        };
                        const originalOnerror = lightboxImg.onerror;
                        lightboxImg.onerror = function() {
                            if (originalOnerror) originalOnerror();
                            // Even on error, show the image
                            showNewImage();
                        };
                    }
                };
                
                // Set up load handlers before setting src
                newImg.onload = switchImage;
                newImg.onerror = switchImage; // Still show image even if preload fails
                
                // Start loading
                newImg.src = targetSrc;
                
                // If image is already cached, onload may not fire, so check immediately
                if (newImg.complete) {
                    switchImage();
                }
                
                lightbox.classList.add('active');
            }
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
            
            const lightboxImg = document.getElementById('screenshotLightboxImg');
            const lightboxSource = document.getElementById('screenshotLightboxSource');
            const screenshotItems = document.querySelectorAll('.screenshot-item');
            
            if (lightboxImg && screenshotItems[currentScreenshotIndex]) {
                const item = screenshotItems[currentScreenshotIndex];
                const webpSrc = item.getAttribute('data-src-webp');
                const pngSrc = item.getAttribute('data-src');
                const targetSrc = pngSrc || currentScreenshotGallery[currentScreenshotIndex];
                
                // Preload the image before switching to avoid visible loading
                const newImg = new Image();
                
                // Fade out current image
                lightboxImg.style.transition = 'opacity 0.15s ease';
                lightboxImg.style.opacity = '0';
                
                // Preload the new image
                const switchImage = function() {
                    // Update source elements
                    if (lightboxSource && webpSrc) {
                        lightboxSource.srcset = webpSrc;
                    }
                    lightboxImg.src = targetSrc;
                    
                    // Fade in the new image
                    requestAnimationFrame(function() {
                        lightboxImg.style.opacity = '1';
                    });
                };
                
                // Set up load handlers before setting src
                newImg.onload = switchImage;
                newImg.onerror = switchImage; // Still show image even if preload fails
                
                // Start loading
                newImg.src = targetSrc;
                
                // If image is already cached, onload may not fire, so check immediately
                if (newImg.complete) {
                    switchImage();
                }
            }
        };

        // Function to close screenshot lightbox (make it global)
        window.closeScreenshotLightbox = function() {
            const lightbox = document.getElementById('screenshotLightbox');
            if (lightbox) {
                lightbox.classList.remove('active');
            }
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
                    // Extract gun name only (without ammo info)
                    const parts = text.split(' - ');
                    if (parts.length === 2) {
                        const gunName = parts[0];
                        return `<span class="highlight-number">${gunName}</span>`;
                    }
                    return `<span class="highlight-number">${text}</span>`;
                }
                
                function formatMainGunAmmo(text) {
                    // Extract ammunition info and return ammo box HTML
                    const parts = text.split(' - ');
                    if (parts.length === 2) {
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
                        
                        // Return single ammo box containing all ammo types
                        return ammoItems.length > 0 
                            ? `<span class="ammo-box">${ammoItems.join('')}</span>`
                            : '';
                    }
                    return '';
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
                
                // Function to highlight coaxial and hull gun (gun name only)
                function formatGunAmmo(text) {
                    if (text.includes('NO') || text.includes('NO ')) {
                        return `<span class="no-weapon-marked">${text}</span>`;
                    }
                    // Split by " - " to separate gun name and ammo
                    const parts = text.split(' - ');
                    if (parts.length === 2) {
                        const gunName = parts[0];
                        return `<span class="highlight-number">${gunName}</span>`;
                    }
                    // Fallback to highlight full text
                    return `<span class="highlight-number">${text}</span>`;
                }
                
                // Function to extract and format ammo box for coaxial and hull guns
                function formatGunAmmoBox(text) {
                    if (text.includes('NO') || text.includes('NO ')) {
                        return '';
                    }
                    // Split by " - " to separate gun name and ammo
                    const parts = text.split(' - ');
                    if (parts.length === 2) {
                        const ammoText = parts[1];
                        // Format: "200 rounds × 6 magazines" into one box with image
                        const ammoMatch = ammoText.match(/(\d+)\s*rounds\s*[×x]\s*(\d+)\s*magazines/i);
                        if (ammoMatch) {
                            const rounds = ammoMatch[1];
                            const magazines = ammoMatch[2];
                            const imagePath = 'images/UI/Icons/vehicles/T_HUD_Status_Ammo_invert_28.png';
                            return `<span class="ammo-box"><img src="${imagePath}" alt="Ammo" loading="eager" decoding="async"><span class="highlight-number">${rounds}</span> rounds × <span class="highlight-number">${magazines}</span> magazines</span>`;
                        }
                    }
                    return '';
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
                                ${formatMainGunAmmo(info.stats.mainGun) ? `
                                <div class="spec-row">
                                    <div class="spec-label" style="grid-column: 1 / -1;">${formatMainGunAmmo(info.stats.mainGun)}</div>
                                </div>
                                ` : ''}
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
                                ${formatGunAmmoBox(formatAmmo(info.stats.coaxial)) ? `
                                <div class="spec-row">
                                    <div class="spec-label" style="grid-column: 1 / -1;">${formatGunAmmoBox(formatAmmo(info.stats.coaxial))}</div>
                                </div>
                                ` : ''}
                                <div class="spec-row weapon-row ${(info.stats.hullGun && (info.stats.hullGun.includes('NO') || info.stats.hullGun.includes('NO '))) ? 'no-weapon-row' : ''}">
                                    <div class="spec-label">HULL MACHINE GUN:</div>
                                    <div class="spec-value">${formatGunAmmo(formatAmmo(info.stats.hullGun))}</div>
                                </div>
                                ${formatGunAmmoBox(formatAmmo(info.stats.hullGun)) ? `
                                <div class="spec-row">
                                    <div class="spec-label" style="grid-column: 1 / -1;">${formatGunAmmoBox(formatAmmo(info.stats.hullGun))}</div>
                                </div>
                                ` : ''}
                                <div class="spec-row">
                                    <div class="spec-label">MAXIMUM SPEED:</div>
                                    <div class="spec-value">${formatTopSpeed(info.stats.topSpeed)}</div>
                                </div>
                            </div>
                            
                            <div class="field-manual-footer">
                                <div class="footer-line">────────────────────────────────────────</div>
                                <div class="footer-note">NOTES: Specifications based on in-game data. Actual performance may vary.</div>
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
                    document.body.classList.add('modal-open');
                    
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
                            // IMMEDIATELY clear old image before opening new one to prevent flash
                            const lightboxImg = document.getElementById('screenshotLightboxImg');
                            const lightboxSource = document.getElementById('screenshotLightboxSource');
                            const lightboxPicture = lightboxImg ? lightboxImg.closest('picture') : null;
                            
                            // ALWAYS hide picture element FIRST using CSS class to prevent any rendering
                            if (lightboxPicture) {
                                lightboxPicture.classList.add('switching');
                            }
                            
                            if (lightboxImg) {
                                // Remove ready class and add hiding class
                                lightboxImg.classList.remove('ready');
                                lightboxImg.classList.add('hiding');
                                
                                // REMOVE source element from DOM entirely to prevent browser from using it
                                if (lightboxSource && lightboxSource.parentNode) {
                                    lightboxSource.parentNode.removeChild(lightboxSource);
                                }
                                
                                // Remove src entirely instead of setting to blank pixel - prevents browser from showing cached image
                                lightboxImg.removeAttribute('src');
                                lightboxImg.removeAttribute('srcset');
                                // Also clear any cached image data
                                if (lightboxImg.complete) {
                                    lightboxImg.src = '';
                                }
                                
                                // Force multiple reflows to ensure changes take effect
                                void lightboxImg.offsetHeight;
                                void lightboxImg.offsetWidth;
                            }
                            
                            const src = this.getAttribute('data-src');
                            const webpSrc = this.getAttribute('data-src-webp');
                            
                            // Use requestAnimationFrame to ensure clearing happens in next frame before opening
                            requestAnimationFrame(function() {
                                openScreenshotLightbox(webpSrc || src);
                            });
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
            document.body.classList.remove('modal-open');
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

        // Initialize all new features
        // Match warning container width to calculator-card width
        function matchWarningWidth() {
            const calculatorCard = document.getElementById('calculator-card');
            const warningContainer = document.getElementById('warning');
            
            if (calculatorCard && warningContainer) {
                const cardRect = calculatorCard.getBoundingClientRect();
                const cardWidth = cardRect.width;
                warningContainer.style.width = cardWidth + 'px';
                warningContainer.style.maxWidth = cardWidth + 'px';
            }
        }
        
        function initializeMobileEnhancements() {
            // Initialize swipe gestures
            initSwipeGestures();
            
            // Match warning width to calculator-card
            matchWarningWidth();
            
            // Update input wrappers on load
            updateInputWrappers();
            
            // Update preset buttons
            updatePresetButtons();
            
            // Update range indicators
            updateRangeIndicators();
            
            
            // Add keyboard event handlers for Enter key
            const inputs = ['distance', 'heightDiff', 'redNumber'];
            inputs.forEach(fieldId => {
                const input = document.getElementById(fieldId);
                if (input) {
                    // Ensure input is focusable and can accept typing
                    input.removeAttribute('readonly');
                    input.removeAttribute('disabled');
                    
                    input.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            if (!isAutoCalcEnabled()) {
                                calculate();
                            } else {
                                // In auto mode, just blur the input
                                this.blur();
                            }
                        }
                        // Allow all other keys to work normally (typing numbers, etc.)
                    });
                    
                    // Update wrapper state on input
                    input.addEventListener('input', function() {
                        updateInputWrappers();
                        if (fieldId === 'distance') {
                            updatePresetButtons();
                            updateRangeIndicators();
                        }
                    });
                }
            });
            
            // Add keyboard handlers to increment/decrement buttons
            // This ensures buttons only increment by 1 when using keyboard (Space/Enter)
            const buttonConfigs = [
                { fieldId: 'distance', delta: -1 },
                { fieldId: 'distance', delta: 1 },
                { fieldId: 'heightDiff', delta: -1 },
                { fieldId: 'heightDiff', delta: 1 },
                { fieldId: 'redNumber', delta: -1 },
                { fieldId: 'redNumber', delta: 1 }
            ];
            
            // Find buttons by checking their onclick handlers
            buttonConfigs.forEach(config => {
                const buttons = document.querySelectorAll('.armored-button');
                buttons.forEach(button => {
                    const onclickAttr = button.getAttribute('onclick');
                    if (onclickAttr && onclickAttr.includes(`adjustValue('${config.fieldId}', ${config.delta})`)) {
                        // Add keyboard handler to this button
                        button.addEventListener('keydown', function(e) {
                            // Handle Space or Enter key - only increment by 1
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                e.stopPropagation();
                                // Directly call adjustValue with the correct delta, bypassing hold-to-increment
                                adjustValue(config.fieldId, config.delta, { type: 'keydown' });
                            }
                        });
                        
                        // Add touchstart handler for hold-to-increment on armored buttons
                        button.addEventListener('touchstart', (e) => {
                            startHoldIncrement(config.fieldId, config.delta, e);
                        }, { passive: false });
                    }
                });
            });

            // Add click listener for haptic feedback on the calculate button
            const calculateButton = document.getElementById('calculateButton');
            if (calculateButton) {
                calculateButton.addEventListener('click', () => {
                    triggerHaptic('medium');
                });
            }
            
            // Add touchstart handlers for info buttons
            const heightInfoButton = document.getElementById('heightInfo');
            if (heightInfoButton) {
                heightInfoButton.addEventListener('touchstart', (e) => {
                    e.target.setAttribute('data-touch-handled', 'true');
                    showHeightInfo(e);
                }, { passive: false });
            }
            
            const terrainInfoButton = document.getElementById('terrainInfo');
            if (terrainInfoButton) {
                terrainInfoButton.addEventListener('touchstart', (e) => {
                    e.target.setAttribute('data-touch-handled', 'true');
                    showTerrainInfo(e);
                }, { passive: false });
            }
        }

        // Show height difference info tooltip
        function showHeightInfo(event) {
            if (event) {
                event.stopPropagation();
                event.preventDefault();
            }
            
            // Remove existing tooltip if any
            const existingTooltip = document.getElementById('heightInfoTooltip');
            if (existingTooltip) {
                existingTooltip.remove();
                return;
            }
            
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.id = 'heightInfoTooltip';
            tooltip.style.cssText = 'position: fixed; background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%); border: 2px solid #c2b280; padding: 12px 16px; border-radius: 4px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8); z-index: 10000; color: #e5e7eb; font-family: "Courier New", monospace; font-size: 0.85rem; max-width: 250px; line-height: 1.5;';
            tooltip.innerHTML = '<div style="font-weight: bold; color: #c2b280; margin-bottom: 8px;">Height Difference (m)</div><div style="color: #9ca3af; margin-bottom: 8px;">Enter the height difference between target and gun</div><div style="color: #9ca3af; margin-bottom: 6px;">- target lower than gun (negative value)<br>+ target higher than gun (positive value)</div><div style="color: #a3e635; font-weight: bold;">Tip: You can leave this empty.</div>';
            
            // Position tooltip near the button
            const button = event.target;
            const rect = button.getBoundingClientRect();
            tooltip.style.left = (rect.right + 10) + 'px';
            tooltip.style.top = (rect.top - 10) + 'px';
            
            // Adjust if tooltip goes off screen
            setTimeout(() => {
                const tooltipRect = tooltip.getBoundingClientRect();
                if (tooltipRect.right > window.innerWidth) {
                    tooltip.style.left = (rect.left - tooltipRect.width - 10) + 'px';
                }
                if (tooltipRect.top < 0) {
                    tooltip.style.top = '10px';
                }
            }, 0);
            
            document.body.appendChild(tooltip);
            
            // Close tooltip when clicking outside or after 5 seconds
            const closeTooltip = (e) => {
                if (!tooltip.contains(e.target) && e.target !== button) {
                    tooltip.remove();
                    document.removeEventListener('click', closeTooltip);
                    document.removeEventListener('touchstart', closeTooltip);
                }
            };
            
            setTimeout(() => {
                document.addEventListener('click', closeTooltip);
                document.addEventListener('touchstart', closeTooltip);
            }, 100);
            
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.remove();
                }
            }, 5000);
        }

        // Show terrain elevation info tooltip
        function showTerrainInfo(event) {
            if (event) {
                event.stopPropagation();
                event.preventDefault();
            }
            
            // Remove existing tooltip if any
            const existingTooltip = document.getElementById('terrainInfoTooltip');
            if (existingTooltip) {
                existingTooltip.remove();
                return;
            }
            
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.id = 'terrainInfoTooltip';
            tooltip.style.cssText = 'position: fixed; background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%); border: 2px solid #c2b280; padding: 12px 16px; border-radius: 4px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8); z-index: 10000; color: #e5e7eb; font-family: "Courier New", monospace; font-size: 0.85rem; max-width: 250px; line-height: 1.5;';
            tooltip.innerHTML = '<div style="font-weight: bold; color: #c2b280; margin-bottom: 8px;">Terrain Elevation (MIL)</div><div style="color: #9ca3af; margin-bottom: 8px;">Enter exactly what your RED MIL HUD shows</div><div style="color: #9ca3af;">- downhill/nose-down (negative value)<br>+ uphill/nose-up (positive value)</div>';
            
            // Position tooltip near the button
            const button = event.target;
            const rect = button.getBoundingClientRect();
            tooltip.style.left = (rect.right + 10) + 'px';
            tooltip.style.top = (rect.top - 10) + 'px';
            
            // Adjust if tooltip goes off screen
            setTimeout(() => {
                const tooltipRect = tooltip.getBoundingClientRect();
                if (tooltipRect.right > window.innerWidth) {
                    tooltip.style.left = (rect.left - tooltipRect.width - 10) + 'px';
                }
                if (tooltipRect.top < 0) {
                    tooltip.style.top = '10px';
                }
            }, 0);
            
            document.body.appendChild(tooltip);
            
            // Close tooltip when clicking outside or after 5 seconds
            const closeTooltip = (e) => {
                if (!tooltip.contains(e.target) && e.target !== button) {
                    tooltip.remove();
                    document.removeEventListener('click', closeTooltip);
                    document.removeEventListener('touchstart', closeTooltip);
                }
            };
            
            setTimeout(() => {
                document.addEventListener('click', closeTooltip);
                document.addEventListener('touchstart', closeTooltip);
            }, 100);
            
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.remove();
                }
            }, 5000);
        }

        // Run initialization when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMobileEnhancements);
        } else {
            initializeMobileEnhancements();
        }

        // Defensive patch for MutationObserver to prevent errors from external scripts
        // This handles cases where external scripts (like browser extensions) try to observe null/undefined elements
        if (typeof MutationObserver !== 'undefined') {
            const OriginalMutationObserver = MutationObserver;
            MutationObserver = function(callback) {
                const observer = new OriginalMutationObserver(callback);
                const originalObserve = observer.observe.bind(observer);
                
                observer.observe = function(target, options) {
                    // Validate that target is a valid Node object
                    if (!target || typeof target !== 'object' || !(target instanceof Node)) {
                        console.warn('MutationObserver.observe: Invalid target provided, skipping observation', target);
                        return;
                    }
                    return originalObserve(target, options);
                };
                
                return observer;
            };
            // Copy static properties if any
            Object.setPrototypeOf(MutationObserver, OriginalMutationObserver);
            MutationObserver.prototype = OriginalMutationObserver.prototype;
        }