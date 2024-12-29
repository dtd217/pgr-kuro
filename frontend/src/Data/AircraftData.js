export const aircraftData = [
   // Lucia Lotus
   {
      id: 1,
      name: 'Lucia Lotus',
      avatar: '/aircrafts/lucia-lotus/avatar.png',
      icon: '/aircrafts/lucia-lotus/icon.png',
      poster: '/aircrafts/lucia-lotus/poster.png',
      elements: [
         {
            type: 'fire',
            percent: 20,
         },
         {
            type: 'physical',
            percent: 80,
         }
      ],
      type: 'Omniframes',
      maxim: 'Let the burning red lotus end everything!',
      introduction: 'The leader of Gray Raven. Brave and selfless, she is ever at the frontline of the war against the Corrupted.',
      features: {
         'Duel': 'Has strong single attack ability',
         'Dual Blades': 'Attack DMG boosting skill'
      },
      stats: {
         health: 1350,
         attack: 270,
         defense: 192,
         crit: 121,
      },
      file: {
         launchDay: 'June 15',
         height: '165cm',
         weight: '48kg',
         fluidType: 'A',
         mentalAge: '17'
      },
      weapon: {
         type: 'katana',
         signature: 'Lotus Berserker',
         image: '/weapons/katana/lotus-berserker.png',
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         resonance: [
            {
               name: '① Glorious Afterglow',
               image: '/aircrafts/lucia-lotus/wr1.png',
            },
            {
               name: '② Incandescence',
               image: '/aircrafts/lucia-lotus/wr2.png',
            },
            {
               name: '③ Dead Line Timing',
               image: '/aircrafts/lucia-lotus/wr3.png',
            },
         ],
         briefs: [
            '① Increase the additional damage caused by normal attacks by 10%',
            '② Each time you release a normal attack, the physical damage increases by 5%, which can be stacked up to 5 times".',
         ]
      },
      pet: {
         name: 'thorny',
         image: '/pets/thorny/avatar.png',
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         briefs: [
            '① Active skill [Piercing Field: Physical] can provide a shield of 2% of the character\'s maximum health, improving survivability',
            '② Passive skill [Thorns]: When the marked enemy is injured, it will receive an additional physical damage of 40 % of the character\'s attack power',
         ],
         resonance: {
            name: 'Piercing Field: Physical',
            image: '/pets/thorny/physical.png',
         }
      },
      information: {
         rank: 'b',
         class: 'attacker',
         effect: 'none',
         affiliation: 'Gray Crow Squad',
         gift: 'A Dai Frog',
      },
      skins: [
         {
            id: 1,
            name: 'Generic',
            image: '/aircrafts/lucia-lotus/skin-1.png',
            icon: '/aircrafts/lucia-lotus/skin-1-icon.png',
            star: 2,
            description: 'The default outfit given to Constructs when they were manufactured.',
            howToObtain: 'It will be automatically unlocked after obtaining the construct.'
         },
         {
            id: 2,
            name: 'Generic - Modified',
            image: '/aircrafts/lucia-lotus/skin-2.png',
            icon: '/aircrafts/lucia-lotus/skin-2-icon.png',
            star: 2,
            description: 'The outfit designed by awakened Constructs to their liking after gaining the permission to do so.',
            howToObtain: 'Obtained when the liberation level reaches the initial stage.'
         },
         {
            id: 3,
            name: 'Generic - Final',
            image: '/aircrafts/lucia-lotus/skin-3.png',
            icon: '/aircrafts/lucia-lotus/skin-3-icon.png',
            star: 2,
            description: 'The outfit modified by Constructs after they reach the ultimate awakening phase. Perfectly resembles the characteristics of their M.I.N.D.',
            howToObtain: 'Obtained when the liberation level reaches a high level.'
         },
         {
            id: 4,
            name: 'Rain Walking',
            image: '/aircrafts/lucia-lotus/skin-4.png',
            icon: '/aircrafts/lucia-lotus/skin-4-icon.png',
            star: 5,
            description: 'New Life - As Lucia strolls on the streets after a refreshing rain, the waterproof and transparent macromolecular surface of her outfit reflects the mesmerizing light from the windows of shops nearby.',
            howToObtain: 'Free gift from a 6 yuan top-up activity.'
         },
         {
            id: 5,
            name: 'Daybreak',
            image: '/aircrafts/lucia-lotus/skin-5.png',
            icon: '/aircrafts/lucia-lotus/skin-5-icon.png',
            star: 5,
            description: 'Horizon - The smooth design significantly reduces friction, while the stealth but passionate cut and colors help to transform Lucia into a daybreaking light.',
            howToObtain: 'As a gift during the public beta pre-order event.'
         },
         {
            id: 6,
            name: 'Gray Feathers: Lotus',
            image: '/aircrafts/lucia-lotus/skin-6.png',
            icon: '/aircrafts/lucia-lotus/skin-6-icon.png',
            star: 5,
            description: 'Uniform - The customized uniform made for all the Constructs that have developed a bond with Gray Raven. Often worn as a formal dress during all important Event.',
            howToObtain: '① Participate in the "Little Potato Defense War" event between 10:00 on December 5, 2019 and 23:59 on December 11, 2019. ② Can be purchased in the store or during purchase.'
         },
      ],
      skills: {
         basicSkills: [
            {
               id: 1,
               name: 'Initial Move',
               icon: '/aircrafts/lucia-lotus/b1.png',
               description: [
                  'Red Orb: Ping Red Orb\nThrusts forward and pulls the target, dealing Physical DMG.\n- Deals 274.56% / 549.01% / 823.53% Physical DMG based on the number of orbs pinged.'
               ]
            },
            {
               id: 2,
               name: 'Flash Strike',
               icon: '/aircrafts/lucia-lotus/b2.png',
               description: [
                  'Yellow Orb: Ping Yellow Orb\nQuickly strikes once and knocks the target airborne, dealing Physical DMG.\n- Deals 154.41% / 308.82% / 463.24% Physical DMG based on the number of orbs pinged.'
               ]
            },
            {
               id: 3,
               name: 'Wave Slash',
               icon: '/aircrafts/lucia-lotus/b3.png',
               description: [
                  'Blue Orb: Ping Blue Orb\nDeals Physical DMG and flares up weapon, making all attacks deal extra Fire DMG for a period of time.\n- Deals 102.94% / 205.88% / 308.82% Physical DMG based on the number of orbs pinged.\n- Deals extra 10.29% /15.44% / 20.59% Fire DMG for 4 / 4 / 6s based on the number of orbs pinged.'
               ]
            },
            {
               id: 4,
               name: 'Quick Blade',
               icon: '/aircrafts/lucia-lotus/b4.png',
               description: [
                  'Basic Attack: Tap Basic Attack\nLaunches consecutive attacks with Lotus - Quick Blade, dealing Physical DMG.\n- Deals 555.88% Physical DMG in total.'
               ]
            },
         ],
         specialSkills: [
            {
               id: 1,
               name: 'Dual Blades',
               icon: '/aircrafts/lucia-lotus/s1.png',
               corePassive: '/aircrafts/lucia-lotus/cp.png',
               description: [
                  'Core Passive: Any 3-Ping + Ping Red Orb\nLucia: Lotus enters Burst Form when a Red Orb is pinged within 4s after any 3-Ping, replacing Basic Attacks with Dual Blades. Lotus - Dual Blades: Attacks the enemy multiple times, dealing Physical DMG.\n- Deals 1111.76% Physical DMG in total.'
               ]
            },
            {
               id: 2,
               name: 'Lotus Flurry',
               icon: '/aircrafts/lucia-lotus/s2.png',
               description: [
                  'Signature Move: 100 Energy + Tap Signature\nUnleashes Lotus Flurry to deal quick slashes to the enemies ahead and finish with a heavy blow, dealing Physical DMG.\n- Each slash deals 144.12% Physical DMG.\n- The heavy blow deals 1029.41% Physical DMG.'
               ]
            },
            {
               id: 3,
               name: 'Lotus Quick Slash',
               icon: '/aircrafts/lucia-lotus/s3.png',
               description: [
                  'QTE: Tap QTE\nLucia: Lotus enters the battlefield and attacks the enemy with her Dual Blades, dealing Physical DMG.\n- Deals 1142.65% Physical DMG in total.'
               ]
            },
         ],
         commonEffects: [
            {
               id: 1,
               name: 'Fearless Warrior',
               icon: '/aircrafts/lucia-lotus/c1.png',
               description: [
                  'Leader\nIncreases ATK of all Attacker Omniframes in the team by 10%.'
               ]
            },
            {
               id: 2,
               name: 'Attacker',
               icon: '/aircrafts/lucia-lotus/c2.png',
               description: [
                  'Class\nExtra DMG Bonus increases by 20.59%.'
               ]
            },
            {
               id: 3,
               name: 'Ultima Awaken',
               icon: '/aircrafts/lucia-lotus/c3.png',
               description: [
                  'Ultima\nGains 3 Signal Orbs when entering battle.'
               ]
            },
         ],
         evolutionEffects: [
            {
               id: 1,
               name: 'Spiritblade Slash',
               icon: '/aircrafts/lucia-lotus/e1.png',
               description: [
                  'Rank SS\nWhen attacking airborne targets, deals extra 20% Physical DMG per attack.'
               ]
            },
            {
               id: 2,
               name: 'Relentless Blade',
               icon: '/aircrafts/lucia-lotus/e2.png',
               description: [
                  'Rank SSS\nDuring Burst Form, Extra DMG Bonus increases by 15%.'
               ]
            },
            {
               id: 3,
               name: 'Core of Clarity',
               icon: '/aircrafts/lucia-lotus/e3.png',
               description: [
                  'Ranks SSS+\nExtra DMG Bonus of Basic Attack increases by 15%.'
               ]
            },
         ],
         leapSkills: []
      },
      archives: {
         plots: [],
         material: [
            {
               id: 1,
               content: 'The leader of the Gray Crow Squad, an offensive type.\nAn excellent military pioneer, serious and calm, he focuses on destroying the source of the virus and welcoming the return of humans.\nHe uses a sword, and in the burst state, he can use the energy field to form a double-sword mode to carry out fierce continuous attacks.'
            },
            {
               id: 2,
               content: '"Commander, we will go to meet the enemy next, please give us permission to fight.\nI will obey orders absolutely, always perform combat tasks calmly and efficiently, and I will tend to disregard my own safety during battle."'
            },
            {
               id: 3,
               content: 'It was one of the first military constructs.\nIt had experienced countless battles since the beginning of the war. It was used to fighting and would not panic in the face of any crisis.\nIt had been suppressing all the emotions that emerged in its heart and avoiding any emotional factors that would affect the war situation.'
            },
            {
               id: 4,
               content: 'It seems that she has undergone a memory cleansing for unknown reasons.\nBlurred memory fragments occasionally appear in her sea of ​​consciousness, and when there are no combat missions, Lucia will fall into quiet thinking.'
            },
            {
               id: 5,
               content: 'In her human years, Lucia lived with her younger sister Luna and always took care of her.\nHer parents died because of Pamish.\nHer initial hope was to live with her younger sister Luna.\nShe has a crush on frog-shaped dolls.'
            },
            {
               id: 6,
               content: 'There seems to be some deep connection with the Ascended Ones.'
            },
         ],
         secrets: [
            {
               id: 1,
               unlockedAt: 2,
               content: 'There are many identical red scarves.'
            },
            {
               id: 2,
               unlockedAt: 2,
               content: 'Once wanted to cook a meal for the commander, and then seriously blew up the kitchen.'
            },
            {
               id: 3,
               unlockedAt: 3,
               content: 'Using the Red Lotus Dual Blade Technique will cause the body to heat up, with the sensation being similar to a human fever.'
            },
            {
               id: 4,
               unlockedAt: 3,
               content: 'Hair is a man-made synthetic fiber that cannot be cut by ordinary knives.'
            },
            {
               id: 5,
               unlockedAt: 4,
               content: 'I have a special aesthetic taste for objects.'
            },
            {
               id: 6,
               unlockedAt: 4,
               content: 'Silence during time outside of tasks is not thinking, but daydreaming.'
            },
            {
               id: 7,
               unlockedAt: 5,
               content: 'I have some inexplicable respect for older machine designers like Bianca and Watanabe.'
            },
            {
               id: 8,
               unlockedAt: 5,
               content: 'I think Liv has great potential.'
            },
            {
               id: 9,
               unlockedAt: 6,
               content: 'I can\'t understand what Qi Shi is thinking.'
            },
            {
               id: 10,
               unlockedAt: 6,
               content: 'Unable to withstand Karenina\'s passionate offensive.'
            },
            {
               id: 11,
               unlockedAt: 7,
               content: 'I really want to use the sword-drawing slash, but I don\'t have a scabbard.'
            },
            {
               id: 12,
               unlockedAt: 8,
               content: 'Pay attention to the commander\'s every move.'
            },
         ]
      },
      voices: [
         'Mandarin: 小N',
         'Japanese: Yui Ishikawa',
         'Cantonese: 尾狐殿',
         'English: Sura Siu',
      ],
      awareness: [
         {
            title: 'General Awareness',
            set4: {
               name: 'patton',
               resonance: 'Ex - Precision Attack',
               resonanceImg: '/resonance/attack.png',
               effect: 'ATK +15, CRIT +15',
            },
            set2: {
               name: 'darwin',
               resonance: 'Core Passive',
               resonanceImg: '/aircrafts/lucia-lotus/s1.png',
               effect: 'Core Passive +1'
            },
            resonance: ['No resonance'],
            note: '① Any 15 attacks of the upper "attack" resonance can be used'
         }
      ]
   },
   // Lucia Dawn
   {
      id: 2,
      name: 'Lucia Dawn',
      avatar: '/aircrafts/lucia-dawn/avatar.png',
      icon: '/aircrafts/lucia-dawn/icon.png',
      poster: '/aircrafts/lucia-dawn/poster.png',
      elements: [
         {
            type: 'lightning',
            percent: 60,
         },
         {
            type: 'physical',
            percent: 40,
         }
      ],
      type: 'Omniframes',
      maxim: 'In the name of the Blade of God\'s Wrath, cut the night apart!',
      introduction: 'Lucia\'s signature frame. As graceful as it is powerful, its mere appearance on the battlefield inspires its allies, earning the “Dawn” sobriquet.',
      features: {
         'Duel': 'Has strong single attack ability',
         'Mixed Damage': 'Able to deal Physical and Elemental DMG'
      },
      stats: {
         health: 1417,
         attack: 270,
         defense: 202,
         crit: 128,
      },
      file: {
         launchDay: 'June 15',
         height: '165cm',
         weight: '48kg',
         fluidType: 'A',
         mentalAge: '17'
      },
      weapon: {
         type: 'katana',
         signature: 'Inverse - Shadow',
         image: '/weapons/katana/inverse-shadow.png',
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         resonance: [
            {
               name: '① Glorious Afterglow',
               image: '/aircrafts/lucia-dawn/wr1.png',
            },
            {
               name: '② Incandescence',
               image: '/aircrafts/lucia-dawn/wr2.png',
            },
            {
               name: '③ Dead Line Timing',
               image: '/aircrafts/lucia-dawn/wr3.png',
            },
         ],
         briefs: [
            '① Every time Dawn causes lightning damage, its lightning damage will be enhanced (can be stacked, up to 4 layers), increasing Dawn\'s output damage',
            '② Dawn\'s extra damage after releasing the ultimate move increases, increasing Dawn\'s output damage',
         ]
      },
      pet: {
         id: 2,
         name: 'lingya',
         image: '/pets/lingya/avatar.png',
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         briefs: [
            '① With the exclusive skill [High-Voltage Relay], you can provide additional damage bonus to the next character to appear',
            '② With the exclusive skill [Voltage Transformer], you can provide a blue signal ball for the next character to appear',
         ],
         resonance: {
            name: 'Precise Volt Charge - Lightning',
            image: '/pets/lingya/lightning.png',
         },
      },
      information: {
         rank: 'a',
         class: 'attacker',
         effect: 'none',
         affiliation: 'Gray Crow Squad',
         gift: 'A Dai Frog',
      },
      skins: [
         {
            id: 1,
            name: 'Generic',
            image: '/aircrafts/lucia-dawn/skin-1.png',
            icon: '/aircrafts/lucia-dawn/skin-1-icon.png',
            star: 2,
            description: 'The default outfit given to Constructs when they were manufactured.',
            howToObtain: 'It will be automatically unlocked after obtaining the construct.'
         },
         {
            id: 2,
            name: 'Generic - Modified',
            image: '/aircrafts/lucia-dawn/skin-2.png',
            icon: '/aircrafts/lucia-dawn/skin-2-icon.png',
            star: 2,
            description: 'The outfit designed by awakened Constructs to their liking after gaining the permission to do so.',
            howToObtain: 'Obtained when the liberation level reaches the initial stage.'
         },
         {
            id: 3,
            name: 'Generic - Final',
            image: '/aircrafts/lucia-dawn/skin-3.png',
            icon: '/aircrafts/lucia-dawn/skin-3-icon.png',
            star: 2,
            description: 'The outfit modified by Constructs after they reach the ultimate awakening phase. Perfectly resembles the characteristics of their M.I.N.D.',
            howToObtain: 'Obtained when the liberation level reaches a high level.'
         },
         {
            id: 4,
            name: 'Gothic',
            image: '/aircrafts/lucia-dawn/skin-4.png',
            icon: '/aircrafts/lucia-dawn/skin-4-icon.png',
            star: 5,
            description: 'Underground Arena - Cruel yet elegant; she is one of the most formidable candidates in the ring. Still, many dreams of becoming her new owner and taking her away.',
            howToObtain: 'Use 68 Rainbow Cards to purchase the "[Eden Holiday] Limited Paint Job Pack" between 10:00 on March 14, 2020 and 9:59 on March 21, 2020.'
         },
         {
            id: 5,
            name: 'Gray Feathers: Dawn',
            image: '/aircrafts/lucia-dawn/skin-5.png',
            icon: '/aircrafts/lucia-dawn/skin-5-icon.png',
            star: 5,
            description: 'Uniform - The customized uniform made for all the Constructs that have developed a bond with Gray Raven. Often worn as a formal dress during all important Event',
            howToObtain: 'You can buy it in the store or during purchase.'
         },
         {
            id: 6,
            name: 'Holiday of Eden',
            image: '/aircrafts/lucia-dawn/skin-6.png',
            icon: '/aircrafts/lucia-dawn/skin-6-icon.png',
            star: 5,
            description: 'Endearment - A casual outfit launched by a fashion brand that is popular with young people in Babylonia. It is specially prepared by Lucia for the days off with the Commandant. This outfit comes with tiny accessories and a retro digital camera that can record your favorite moments at any time.',
            howToObtain: 'Use 68 Rainbow Cards to purchase the "[Eden Holiday] Limited Paint Job Pack" between 10:00 on March 14, 2020 and 9:59 on March 21, 2020.'
         },
      ],
      skills: {
         basicSkills: [
            {
               id: 1,
               name: 'Flurry',
               icon: '/aircrafts/lucia-dawn/b1.png',
               description: [
                  'Red Orb: Ping Red Orb\nLaunches a flurry of attacks that deals Physical DMG 5 times in a row (Lightning DMG instead on a 3-Ping).\n- Deals 41.18% / 82.35% / 148.24% Physical DMG based on the number of orbs pinged.'
               ]
            },
            {
               id: 2,
               name: 'Lightning Field',
               icon: '/aircrafts/lucia-dawn/b2.png',
               description: [
                  'Yellow Orb: Ping Yellow Orb\nDeploys a lightning field that deals Physical DMG to targets in the area and marks them. Enemies in the field take Lightning DMG over time. The mark stacks up to 3 times. Applying the mark again refreshes its duration.\n- Deals 102.94% / 205.88% / 308.82% Physical DMG based on the number of orbs pinged.\n- The lightning field lasts 3/4/5s, dealing 20.59% / 30.88% / 41.18% Lightning DMG to the enemies in the area every second based on the number of orbs pinged.'
               ]
            },
            {
               id: 3,
               name: 'Moon Arc Slash',
               icon: '/aircrafts/lucia-dawn/b3.png',
               description: [
                  'Blue Orb: Ping Blue Orb\nQuickly strikes the target to deal Lightning DMG, then pulls the target close, dealing Physical DMG and marking the target. The mark stacks up to 3 times. Applying the mark again refreshes its duration.\n- Deals 82.35% / 164.71% / 247.06% Lightning DMG based on the number of orbs pinged.\n- Deals 82.35% / 164.71% / 247.06% Physical DMG based on the number of orbs pinged when pulling the target close.'
               ]
            },
            {
               id: 4,
               name: 'Quick Blade',
               icon: '/aircrafts/lucia-dawn/b4.png',
               description: [
                  'Basic Attack: Tap Basic Attack\nLaunches consecutive attacks with Lotus - Quick Blade, dealing Physical DMG.\n- Deals 669.12% Physical DMG in total.'
               ]
            },
         ],
         specialSkills: [
            {
               id: 1,
               name: 'Lightning Dance',
               icon: '/aircrafts/lucia-dawn/s1.png',
               corePassive: '/aircrafts/lucia-dawn/cp.png',
               description: [
                  'Core Passive: Ping Yellow/Blue Orb + Tap Basic Attack (chance to trigger)\nLightning Lure: Attacking a marked enemy has a chance to summon a lightning bolt to strike the target, dealing Lightning DMG.\n- There is a 25/50/75% chance to summon a lightning bolt that deals 61.76% Lightning DMG based on the number of marks on the enemy.'
               ]
            },
            {
               id: 2,
               name: 'Lotus Blade',
               icon: '/aircrafts/lucia-dawn/s2.png',
               description: [
                  'Signature Move: 50 Energy + Tap Signature\nActivates the Lotus Blade. Performing Basic Attacks and skills launches an additional attack with Lotus Blade that deals Lightning DMG. Casting the Signature Move again while it is still active will refresh its duration.\n- Each slash deals 144.12% Physical DMG.\n- Lotus Blade deals 25.74% Lightning DMG each time and lasts 15s.'
               ]
            },
            {
               id: 3,
               name: 'Scattering Petals',
               icon: '/aircrafts/lucia-dawn/s3.png',
               description: [
                  'QTE: Tap QTE\nLucia: Dawn spins and slashes the target, dealing Physical DMG and Lightning DMG.\n- Deals 228.53% Physical DMG and 620.29% Lightning DMG in total.'
               ]
            },
         ],
         commonEffects: [
            {
               id: 1,
               name: 'Dawn Leader',
               icon: '/aircrafts/lucia-dawn/c1.png',
               description: [
                  'Leader\nIncreases ATK of all Attacker Omniframes in the team by 10%.'
               ]
            },
            {
               id: 2,
               name: 'Attacker',
               icon: '/aircrafts/lucia-dawn/c2.png',
               description: [
                  'Class\nExtra DMG Bonus increases by 20.59%.'
               ]
            },
            {
               id: 3,
               name: 'Ultima Awaken',
               icon: '/aircrafts/lucia-dawn/c3.png',
               description: [
                  'Ultima\nGains 3 Signal Orbs when entering battle.'
               ]
            },
         ],
         evolutionEffects: [
            {
               id: 1,
               name: 'Super Conductivity',
               icon: '/aircrafts/lucia-dawn/e1.png',
               description: [
                  'Rank SS\nLightning DMG increases by 20% inside the Lightning Field.'
               ]
            },
            {
               id: 2,
               name: 'Fiery Lightning',
               icon: '/aircrafts/lucia-dawn/e2.png',
               description: [
                  'Rank SSS\nExtra DMG Bonus of Lightning Lure increases by 20%.'
               ]
            },
            {
               id: 3,
               name: 'Daybreak Unleashed',
               icon: '/aircrafts/lucia-dawn/e3.png',
               description: [
                  'Ranks SSS+\nExtra DMG Bonus increases by 15% for 10s after casting Signature Move. Triggering this effect again refreshes its duration.'
               ]
            },
         ],
         leapSkills: [
            {
               id: 1,
               name: 'Vortex Flurry',
               icon: '/aircrafts/lucia-dawn/l1.png',
               description: [
                  'Vortex Flurry\nUpon a 3-Ping, Extra DMG Bonus of [Lotus - Flurry] increases by 10%.\n- Lv.9: [Lotus - Flurry] pulls in surrounding enemies upon a 3-Ping.\n- Lv.18: When casting [Lotus - Flurry] with a 3-Ping while the Signature is active, pressing and holding the Basic Attack button triggers Iaido - Deadly Slash, dealing 360% Lightning DMG.'
               ]
            },
            {
               id: 2,
               name: 'Thunder Kill Realm',
               icon: '/aircrafts/lucia-dawn/l2.png',
               description: [
                  'Thunder Kill Realm\nExtra DMG Bonus of lightning bolt attacks triggered by [Lotus - Lightning Dance] increases by 10%.\n- Lv.9: The chance of triggering lightning bolt attacks by [Lotus - Lightning Dance] increases to 50% / 75% / 100%.\n- Lv.18: [Lotus - Lightning Dance] triggers heavenly bolt attacks instead, increasing Lightning DMG Bonus by 10%.'
               ]
            },
            {
               id: 3,
               name: 'Glow Lotus Blade',
               icon: '/aircrafts/lucia-dawn/l3.png',
               description: [
                  'Glow Lotus Blade\nWhen casting [Signature - Lotus Blade], Lucia: Dawn\'s Extra DMG Bonus increases by 10% for 10s. Its duration will reset every time it is triggered.\n- Lv.9: Automatically recovers Signature Energy for 10s after casting the Signature.\n- Lv.18: Energy of Lotus Blade will not be reduced when Lucia: Dawn is on standby.'
               ]
            },
         ]
      },
      archives: {
         plots: [],
         material: [
            {
               id: 1,
               content: 'After Jiulong was stabbed by the "King", a new body was replaced because the damaged parts were difficult to replace. To prevent similar accidents from happening again, the body optimized the signal transmission path to improve crisis response capabilities.'
            },
            {
               id: 2,
               content: 'The new machine\'s incubator, the "cocoon", can capture the user\'s thought electrical signals and mold the machine\'s appearance accordingly. In other words, the appearance of the Tanxin machine was formed according to Hanying\'s own ideas.'
            },
            {
               id: 3,
               content: 'Perhaps out of the dancer\'s self-requirement, the combat module of the machine incorporates many elements of the Kowloon Dance. Its fierce offensive is often quite deceptive because of its elegant and gorgeous postures.'
            },
            {
               id: 4,
               content: 'Compared with other traditional cold weapons, the hairpin as one of the weapons is shorter in length, but it is also perfectly matched with the high mobility of Tanxin because of its light weight and portability.'
            },
            {
               id: 5,
               content: 'It can resonate with other mechanical bodies\' "dreams" to a certain extent and reproduce this audio-visual experience.'
            },
            {
               id: 6,
               content: 'His fingers are quite nimble and his grasp of rhythm is extremely precise. Although he is a little slow in most games, he is surprisingly good at music games.'
            },
         ],
         secrets: [
            {
               id: 1,
               unlockedAt: 2,
               content: 'She politely rejected the aircraft design proposal that included but was not limited to a plasma sword, four multifunctional robotic arms and six double light wings.'
            },
            {
               id: 2,
               unlockedAt: 2,
               content: 'I care a lot about hair care and would secretly ask which hair care solution is more friendly to my synthetic hair.'
            },
            {
               id: 3,
               unlockedAt: 3,
               content: '"She\'s bound to be able to pull something out."\nAfter pulling out the hairpin to demonstrate his fighting skills, he was once believed to be armed with "hidden weapons" like hairpins all over his body.'
            },
            {
               id: 4,
               unlockedAt: 3,
               content: 'While being an excellent cook, he is also keen on visiting night markets, believing that street snacks have a unique flavor, which may be derived from what Pulao calls the "smell of firework".'
            },
            {
               id: 5,
               unlockedAt: 4,
               content: 'After the rebounding pipa, we began to seriously consider the feasibility of the rotating pipa scheme proposed by Pulao.'
            },
            {
               id: 6,
               unlockedAt: 4,
               content: 'She is proficient in various dances, not only the Kowloon Dance, but also waltz, tango, samba and other Western dances.'
            },
            {
               id: 7,
               unlockedAt: 5,
               content: 'She once earnestly explained to the other machines that although they were playing the same four-string instrument, he was not qualified to be the bassist in the band.'
            },
            {
               id: 8,
               unlockedAt: 5,
               content: 'The new machine had been upgraded in terms of hardware, but the Kowloon instruction set architecture was difficult to replace. The chief technical officer of the Mechanicus read books such as "Kowloon Programming Art General Theory" and "Kowloon Computer Architecture Guide" to make the new machine\'s hardware perfectly compatible with the G36 instruction set.'
            },
            {
               id: 9,
               unlockedAt: 6,
               content: 'The sound of the pipa can help stabilize the emotional module of the machine, and this emotional stability is often manifested in the form of dormancy. When Neville is busy with scientific research, he will secretly put the mechanical children next to Hanying. The children will fall asleep to the soft pipa music while shouting "But the machine does not need to sleep"...'
            },
            {
               id: 10,
               unlockedAt: 6,
               content: 'She is not good at sewing, but has a unique obsession with threading a needle. If someone close to her needs something mended, she will not hesitate to hurt herself in order to mend it.'
            },
            {
               id: 11,
               unlockedAt: 7,
               content: 'Due to the complexity of Kowloon\'s language, MPK-12 was equipped with an extremely advanced language model when it was first produced. It is rumored that the model is even powerful enough to communicate with animals. Although I have not made it public, I have successfully used the "language" of cats to call back a lost kitten.'
            },
            {
               id: 12,
               unlockedAt: 8,
               content: 'You can recall memories from a first-person perspective. To kill time, you will use the name of hibernation to retrieve cherished memories, and the commander\'s name often appears in the output log.'
            },
         ]
      },
      voices: [
         'Mandarin: 小N',
         'Japanese: Yui Ishikawa',
         'Cantonese: 尾狐殿',
         'English: Sura Siu',
      ],
      awareness: [
         {
            title: 'General Awareness',
            set4: {
               name: 'heisen',
               resonance: 'Ex - Precision Attack',
               resonanceImg: '/resonance/Ex - Precision Attack.png',
               effect: 'ATK +15, CRIT +15',
            },
            set2: {
               name: 'darwin',
               resonance: 'Core Passive',
               resonanceImg: '/aircrafts/lucia-dawn/s1.png',
               effect: 'Core Passive +1'
            },
            resonance: ['No resonance'],
            note: '① Any 15 attacks of the upper "attack" resonance can be used'
         }
      ]
   },
   // Lee Palefire
   {
      id: 3,
      name: 'Lee Palefire',
      avatar: '/aircrafts/lee-palefire/avatar.png',
      icon: '/aircrafts/lee-palefire/icon.png',
      poster: '/aircrafts/lee-palefire/poster.png',
      elements: [
         {
            type: 'fire',
            percent: 40,
         },
         {
            type: 'physical',
            percent: 60,
         }
      ],
      type: 'Omniframes',
      maxim: 'Anyway, you have only one ending!',
      introduction: 'Member of Gray Raven. Somewhat aloof in manner. Good at computers and machines, he is responsible for Gray Raven\'s hardware and technical issues.',
      features: {
         'Combo': 'Easy to deal high combo damage',
         'Mixed Damage': 'Able to deal Physical and Elemental DMG'
      },
      stats: {
         health: 1282,
         attack: 283,
         defense: 172,
         crit: 134,
      },
      file: {
         launchDay: 'June 23',
         height: '175cm',
         weight: '63kg',
         fluidType: 'AB',
         mentalAge: '18'
      },
      weapon: {
         type: 'dual-guns',
         signature: 'Wolf Fang',
         image: '/weapons/dual-guns/wolf-fang.png',
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         resonance: [
            {
               name: '① Glorious Afterglow',
               image: '/aircrafts/lee-palefire/wr1.png',
            },
            {
               name: '② Incandescence',
               image: '/aircrafts/lee-palefire/wr2.png',
            },
            {
               name: '③ Dead Line Timing',
               image: '/aircrafts/lee-palefire/wr3.png',
            },
         ],
         briefs: [
            '① The alien fire increases the extra damage bonus when attacking enemies in the burning area (which can be formed after the alien fire eliminates the yellow ball).',
         ]
      },
      pet: {
         id: 5,
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         briefs: [
            '① Active skills can cause a "dizziness" control effect, providing a better output space when dealing with non-hegemonic and control-free enemies',
            '② The passive skill [Loaded Charge] can increase the character’s fire attribute damage',
            '③ Passive skill [Combustion] increases the damage when attacking enemies "dazzled" by Yuan Ye',
         ],
         resonance: {
            name: 'Loaded Charge - Fire',
            image: '/pets/yuan-ye/fire.png',
         },
      },
      information: {
         rank: 'a',
         class: 'attacker',
         effect: 'none',
         affiliation: 'Gray Crow Squad',
         gift: 'Precision Tool Kit',
      },
      skins: [
         {
            id: 1,
            name: 'Generic',
            image: '/aircrafts/lee-palefire/skin-1.png',
            icon: '/aircrafts/lee-palefire/skin-1-icon.png',
            star: 2,
            description: 'The default outfit given to Constructs when they were manufactured.',
            howToObtain: 'It will be automatically unlocked after obtaining the construct.'
         },
         {
            id: 2,
            name: 'Generic - Modified',
            image: '/aircrafts/lee-palefire/skin-2.png',
            icon: '/aircrafts/lee-palefire/skin-2-icon.png',
            star: 2,
            description: 'The outfit designed by awakened Constructs to their liking after gaining the permission to do so.',
            howToObtain: 'Obtained when the liberation level reaches the initial stage.'
         },
         {
            id: 3,
            name: 'Generic - Final',
            image: '/aircrafts/lee-palefire/skin-3.png',
            icon: '/aircrafts/lee-palefire/skin-3-icon.png',
            star: 2,
            description: 'The outfit modified by Constructs after they reach the ultimate awakening phase. Perfectly resembles the characteristics of their M.I.N.D.',
            howToObtain: 'Obtained when the liberation level reaches a high level.'
         },
         {
            id: 4,
            name: 'Gray Feathers: Palefire',
            image: '/aircrafts/lee-palefire/skin-4.png',
            icon: '/aircrafts/lee-palefire/skin-4-icon.png',
            star: 5,
            description: 'Uniform - The customized uniform made for all the Constructs that have developed a bond with Gray Raven. Often worn as a formal dress during all important Event',
            howToObtain: 'You can buy it in the store or during purchase.'
         },
         {
            id: 5,
            name: 'Ivy',
            image: '/aircrafts/lee-palefire/skin-5.png',
            icon: '/aircrafts/lee-palefire/skin-5-icon.png',
            star: 5,
            description: 'New Life - A spring fashion Coating designed by WGAA that blends together academic elements and current fashion trends, reminding people of their student days.',
            howToObtain: 'Use 68 Rainbow Card to purchase "[Ivy Paint Combo Pack]" from 10:00 on May 20, 2020 to 9:59 on June 18, 2020 to obtain it.'
         },
      ],
      skills: {
         basicSkills: [
            {
               id: 1,
               name: 'Precise Shots',
               icon: '/aircrafts/lee-palefire/b1.png',
               description: [
                  'Red Orb: Ping Red Orb\nFires 15 quick shots at the target, dealing Physical DMG. Gains Super Armor while using this skill.\n- Each shot deals 16.47% / 32.94% / 49.41% Physical DMG based on the number of Red Orbs pinged.'
               ]
            },
            {
               id: 2,
               name: 'Infernal Shot',
               icon: '/aircrafts/lee-palefire/b2.png',
               description: [
                  'Yellow Orb: Ping Yellow Orb\nFires a blasting round at the target that explodes on hit and deals Fire DMG. Creates a burning area that deals Fire DMG to the enemies inside over time. Attacking enemies in the burning area deals them extra Fire DMG.\n- The explosion deals 102.94% / 154.41% / 205.88% Fire DMG based on the number of Yellow Orbs pinged. The burning area lasts 3/4/5s and deals 12.35% / 24.71% / 37.06% Fire DMG every 0.5s.\n- Attacking enemies in the burning area deals them 12.35% Extra Fire DMG (this effect triggers up to once every 0.1s).'
               ]
            },
            {
               id: 3,
               name: 'Magnetic Shot',
               icon: '/aircrafts/lee-palefire/b3.png',
               description: [
                  'Blue Orb: Ping Blue Orb\nFires an explosive round at the target, dealing Physical DMG.\n- Deals 205.88% / 411.76% / 617.65% Physical DMG based on the number of Blue Orbs pinged.'
               ]
            },
            {
               id: 4,
               name: 'Shooting Mode',
               icon: '/aircrafts/lee-palefire/b4.png',
               description: [
                  'Basic Attack: Tap Basic Attack\nFires consecutive shots, dealing Physical DMG.\n- Deals 905.88% Physical DMG in total.'
               ]
            },
         ],
         specialSkills: [
            {
               id: 1,
               name: 'Controlling Bullet',
               icon: '/aircrafts/lee-palefire/s1.png',
               corePassive: '/aircrafts/lee-palefire/cp.png',
               description: [
                  'Core Passive: Ping Yellow Orb + Ping Red Orb\nAfter pinging a Yellow Orb, the next Red Ping will grant Blast, making Lee\'s shot explode after hitting the target, dealing Fire DMG to enemies in the area.\n- The explosion deals 42.35% Fire DMG to enemies in the area.'
               ]
            },
            {
               id: 2,
               name: '360° Shooting',
               icon: '/aircrafts/lee-palefire/s2.png',
               description: [
                  'Signature Move: 100 Energy + Tap Signature\nFires consecutive shots at nearby enemies, dealing Physical DMG, then deals Fire DMG with the last shot.\n- Deals 823.53% Physical DMG in total and 1235.29% Fire DMG.'
               ]
            },
            {
               id: 3,
               name: 'Rapid Fire',
               icon: '/aircrafts/lee-palefire/s3.png',
               description: [
                  'QTE: Tap QTE\nLee: Palefire enters the battlefield and shoots the target with his Dual Guns, dealing Physical DMG and inflicting the target with Electrocute, causing the target to take Extra Physical DMG when being attacked.\n- The shots deal 339.71% Physical DMG.\n- Electrocuted targets take 20.59% Extra Physical DMG when being attacked over the next 5s. This effect can be triggered up to 15 times while it lasts.'
               ]
            },
         ],
         commonEffects: [
            {
               id: 1,
               name: 'Riot of Color',
               icon: '/aircrafts/lee-palefire/c1.png',
               description: [
                  'Leader\nIncreases Physical DMG of all members by 5% and Elemental DMG of all members by 5%.'
               ]
            },
            {
               id: 2,
               name: 'Attacker',
               icon: '/aircrafts/lee-palefire/c2.png',
               description: [
                  'Class\nExtra DMG Bonus increases by 20.59%.'
               ]
            },
            {
               id: 3,
               name: 'Ultima Awaken',
               icon: '/aircrafts/lee-palefire/c3.png',
               description: [
                  'Ultima\nGains 3 Signal Orbs when entering battle.'
               ]
            },
         ],
         evolutionEffects: [
            {
               id: 1,
               name: 'Lightning',
               icon: '/aircrafts/lee-palefire/e1.png',
               description: [
                  'Rank SS\nWhen hitting enemies in the burning area of Infernal Shot, Extra DMG Bonus increases by 15%.'
               ]
            },
            {
               id: 2,
               name: 'Flame',
               icon: '/aircrafts/lee-palefire/e2.png',
               description: [
                  'Rank SSS\nExtra DMG Bonus increases by 15% before taking any damage. This effect has a 10s cooldown.'
               ]
            },
            {
               id: 3,
               name: 'Enhanced Controlling Bullet',
               icon: '/aircrafts/lee-palefire/e3.png',
               description: [
                  'Ranks SSS+\nExtra DMG Bonus of Core Passive - Controlling Bullet increases by 20%.'
               ]
            },
         ],
         leapSkills: [
            {
               id: 1,
               name: 'Bipolar Expansion',
               icon: '/aircrafts/lee-palefire/l1.png',
               description: [
                  'Bipolar Expansion\nExplosion DMG from [Infernal Shot]\'s blasting round increases by 10%. The burning area created by [Infernal Shot] will inflict Burn on enemies for 3s. Enemies inflicted with Burn are considered to be in the burning area.\n- Lv.9: When [Magnetic Shot] hits a target with Burn, extends the Burn status for 3s.\n- Lv.18: When Lee: Palefire attacks an enemy inflicted with Burn, the Base DMG of [Infernal Shot]\'s additional Extra DMG increases by 100%.'
               ]
            },
            {
               id: 2,
               name: 'Center Axis Relock',
               icon: '/aircrafts/lee-palefire/l2.png',
               description: [
                  'Center Axis Relock\nAfter casting [Controlling Bullet], Lee: Palefire\'s movement speed increases, and he enters Blasting Mode for 5s, performing Continuous Fire with his Dual Guns at the target. DMG dealt by each shot is based on the number of Red Orbs pinged when casting [Controlling Bullet]. In this mode, Lee: Palefire deals Fire DMG instead of Physical DMG, and Fire DMG increases by 10%. Pinging orbs will grant extra effects:\nRed Orbs: Extends Blasting Mode by 0.5/1/1.5s based on the number of orbs pinged. Each shot deals DMG equal to the DMG dealt by the corresponding number of orbs pinged by [Precise Shots].\nYellow and Blue Orbs: Lee: Palefire dodges to the side when pinged, and Blasting Mode extends by 0.3s.\n- Lv.9: In Blasting Mode, each successful shot during Continuous Fire will grant 1 Energy. Energy gained from pinging orbs is doubled.\n- Lv.18: In Blasting Mode, dodging will consume twice the amount of Dodge and trigger Evasive Shot: Lee: Palefire leaps into the air and quickly fires 11 times, gaining 21 Energy and dealing 45% Fire DMG with each shot. Gains Invincible during Evasive Shot. Successfully dodging with Evasive Shot will recover the extra Dodge consumed.'
               ]
            },
            {
               id: 3,
               name: 'Flaming Cyclone',
               icon: '/aircrafts/lee-palefire/l3.png',
               description: [
                  'Flaming Cyclone\nDeals Fire DMG with [Signature - 360° Shooting] instead. While casting [Signature - 360° Shooting], Fire DMG dealt by Lee: Palefire increases by 7.06%.\n- Lv.9: Casting [Signature - 360° Shooting] will pull in surrounding enemies continuously.\n- Lv.18: Hitting an enemy with [Signature - 360° Shooting] will inflict Burn for 3s, dealing Fire DMG based on the level of [Infernal Shot] every 0.5s. In Blasting Mode, the Base DMG of [Signature - 360° Shooting] increases by 40%.'
               ]
            },
         ]
      },
      archives: {
         plots: [],
         material: [
            {
               id: 1,
               content: 'A member of the Grey Crow Squad, an offensive type.\nA dual-gun construct who is proficient in engineering. Not only can he flexibly use various firearms and accurately hit the vital points of the infected, he is also good at fortification construction and equipment maintenance.'
            },
            {
               id: 2,
               content: '"Leave the isolation device to me."\nKnown for his high intelligence and superb logical calculation ability, he has a database that far exceeds the data storage capacity of ordinary constructs. During combat, he is responsible for the installation of isolation devices and the maintenance of the Grey Crows\' armaments.\nHe also seems to have some experience in construct body repair.'
            },
            {
               id: 3,
               content: '"Perhaps your general spiritual ability of living things can actually reach the standard of normal humans." He speaks directly and directly to the essence of things. Even if the words are spoken out of good intentions or other considerations, they will always be awkwardly interpreted as singing a different tune.\nTo understand his true meaning, you must start with his actions, not his words.'
            },
            {
               id: 4,
               content: '"Calling you brother is a bit..."\nHe is inexplicably bothered by the title of brother.\nAlthough he seems to be indifferent to everything and only focuses on the task at hand, he is actually watching everything silently.\n\nWhen Liv, a member of the team, was attacked by the infected body "Tifa", he stood up without hesitation and was injured.\nAlthough he tried his best to cover it up, it can be seen from this how much he values his "comrades", including the commander.'
            },
            {
               id: 5,
               content: '"I still hope you can be safe, that\'s all."\nThe consciousness comes from the human youth "Morrian". In order to heal his brother, he voluntarily joined the construct plan and became an experimental subject.\nAs part of the human heart, it is now beating in his brother\'s chest.\nIt is the most comprehensive among the same batch of constructs.'
            },
            {
               id: 6,
               content: '"Sorry, I\'ve seen through your tricks."\nAs a replacement for Liv, he took on the attack of the infected body "Tifa", leaving behind the trouble of being controlled by Tifa. Later, when he was fighting Tifa, he had an attack, but thanks to Lee\'s advance treatment, the situation was reversed and he was saved.\nHe is a construct worthy of the task and trust.'
            },
         ],
         secrets: [
            {
               id: 1,
               unlockedAt: 2,
               content: 'She politely rejected the aircraft design proposal that included but was not limited to a plasma sword, four multifunctional robotic arms and six double light wings.'
            },
            {
               id: 2,
               unlockedAt: 2,
               content: 'I care a lot about hair care and would secretly ask which hair care solution is more friendly to my synthetic hair.'
            },
            {
               id: 3,
               unlockedAt: 3,
               content: '"She\'s bound to be able to pull something out."\nAfter pulling out the hairpin to demonstrate his fighting skills, he was once believed to be armed with "hidden weapons" like hairpins all over his body.'
            },
            {
               id: 4,
               unlockedAt: 3,
               content: 'While being an excellent cook, he is also keen on visiting night markets, believing that street snacks have a unique flavor, which may be derived from what Pulao calls the "smell of firework".'
            },
            {
               id: 5,
               unlockedAt: 4,
               content: 'After the rebounding pipa, we began to seriously consider the feasibility of the rotating pipa scheme proposed by Pulao.'
            },
            {
               id: 6,
               unlockedAt: 4,
               content: 'She is proficient in various dances, not only the Kowloon Dance, but also waltz, tango, samba and other Western dances.'
            },
            {
               id: 7,
               unlockedAt: 5,
               content: 'She once earnestly explained to the other machines that although they were playing the same four-string instrument, he was not qualified to be the bassist in the band.'
            },
            {
               id: 8,
               unlockedAt: 5,
               content: 'The new machine had been upgraded in terms of hardware, but the Kowloon instruction set architecture was difficult to replace. The chief technical officer of the Mechanicus read books such as "Kowloon Programming Art General Theory" and "Kowloon Computer Architecture Guide" to make the new machine\'s hardware perfectly compatible with the G36 instruction set.'
            },
            {
               id: 9,
               unlockedAt: 6,
               content: 'The sound of the pipa can help stabilize the emotional module of the machine, and this emotional stability is often manifested in the form of dormancy. When Neville is busy with scientific research, he will secretly put the mechanical children next to Hanying. The children will fall asleep to the soft pipa music while shouting "But the machine does not need to sleep"...'
            },
            {
               id: 10,
               unlockedAt: 6,
               content: 'She is not good at sewing, but has a unique obsession with threading a needle. If someone close to her needs something mended, she will not hesitate to hurt herself in order to mend it.'
            },
            {
               id: 11,
               unlockedAt: 7,
               content: 'Due to the complexity of Kowloon\'s language, MPK-12 was equipped with an extremely advanced language model when it was first produced. It is rumored that the model is even powerful enough to communicate with animals. Although I have not made it public, I have successfully used the "language" of cats to call back a lost kitten.'
            },
            {
               id: 12,
               unlockedAt: 8,
               content: 'You can recall memories from a first-person perspective. To kill time, you will use the name of hibernation to retrieve cherished memories, and the commander\'s name often appears in the output log.'
            },
         ]
      },
      voices: [
         'Mandarin: 夏侯落枫',
         'Japanese: Matsuoka Yoshitsugu',
         'Cantonese: 犬畏',
         'English: Chris Hackney',
      ],
      awareness: [
         {
            title: 'General Awareness',
            set4: {
               name: 'shakespeare',
               resonance: 'Ex - Precision Attack',
               resonanceImg: '/resonance/Ex - Precision Attack.png',
               effect: 'ATK +15, CRIT +15',
            },
            set2: {
               name: 'darwin',
               resonance: 'Core Passive',
               resonanceImg: '/aircrafts/lee-palefire/s1.png',
               effect: 'Core Passive +1'
            },
            resonance: ['No resonance'],
            note: '① Any 15 attacks of the upper "attack" resonance can be used'
         }
      ]
   },
   // Kamui Bastion
   {
      id: 16,
      name: 'Kamui Bastion',
      avatar: '/aircrafts/kamui-bastion/avatar.png',
      icon: '/aircrafts/kamui-bastion/icon.png',
      poster: '/aircrafts/kamui-bastion/poster.png',
      elements: [
         {
            type: 'physical',
            percent: 100,
         },

      ],
      type: 'Omniframes',
      maxim: 'I will smash you all into pieces!',
      introduction: 'Member of Strike Hawk, an outstanding solo operator. He is friendly and helpful, but his carelessness always gets him into trouble.',
      features: {
         'Block': 'Blocking Skill',
         'Shield': 'Release a shield to defend'
      },
      stats: {
         health: 1485,
         attack: 243,
         defense: 218,
         crit: 124,
      },
      file: {
         launchDay: 'Oct 23',
         height: '180cm',
         weight: '72kg',
         fluidType: 'B',
         mentalAge: '19'
      },
      weapon: {
         type: 'greatsword',
         signature: 'Big Kamui',
         image: '/weapons/greatsword/big-kamui.png',
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         resonance: [
            {
               name: '① Pan-domain deconstruction',
               image: '/aircrafts/kamui-bastion/wr1.png',
            },
            {
               name: '② Resonant Echo',
               image: '/aircrafts/kamui-bastion/wr2.png',
            },
            {
               name: '③ Dead Line Timing',
               image: '/aircrafts/kamui-bastion/wr3.png',
            },
         ],
         briefs: [
            '① Increase the character\'s physical damage by 15%',
            '② After successfully counterattacking with a block (yellow ball), the additional damage caused by the next skill released by Heavy Energy will be increased'
         ]
      },
      pet: {
         id: 1,
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         briefs: [
            '① Active skill [Piercing - Physical] can provide a shield of 2% of the character\'s maximum health, improving survivability',
            '② Passive skill [Thorns] When the marked enemy is injured, it will receive an additional physical damage of 40% of the character\'s attack power',
         ],
         resonance: {
            name: 'Piercing Field - Physical',
            image: '/pets/thorny/physical.png',
         },
      },
      information: {
         rank: 'a',
         class: 'tank',
         effect: 'none',
         affiliation: 'Strike Eagle Squadron',
         gift: 'Portable Game Console',
      },
      skins: [
         {
            id: 1,
            name: 'Generic',
            image: '/aircrafts/kamui-bastion/skin-1.png',
            icon: '/aircrafts/kamui-bastion/skin-1-icon.png',
            star: 2,
            description: 'The default outfit given to Constructs when they were manufactured.',
            howToObtain: 'It will be automatically unlocked after obtaining the construct.'
         },
         {
            id: 2,
            name: 'Generic - Modified',
            image: '/aircrafts/kamui-bastion/skin-2.png',
            icon: '/aircrafts/kamui-bastion/skin-2-icon.png',
            star: 2,
            description: 'The outfit designed by awakened Constructs to their liking after gaining the permission to do so.',
            howToObtain: 'Obtained when the liberation level reaches the initial stage.'
         },
         {
            id: 3,
            name: 'Generic - Final',
            image: '/aircrafts/kamui-bastion/skin-3.png',
            icon: '/aircrafts/kamui-bastion/skin-3-icon.png',
            star: 2,
            description: 'The outfit modified by Constructs after they reach the ultimate awakening phase. Perfectly resembles the characteristics of their M.I.N.D.',
            howToObtain: 'Obtained when the liberation level reaches a high level.'
         },
         {
            id: 4,
            name: 'Gray Feathers: Bastion',
            image: '/aircrafts/kamui-bastion/skin-4.png',
            icon: '/aircrafts/kamui-bastion/skin-4-icon.png',
            star: 5,
            description: 'Uniform - The customized uniform made for all the Constructs that have developed a bond with Gray Raven. Often worn as a formal dress during all important Event',
            howToObtain: 'You can buy it in the store or during purchase.'
         },
         {
            id: 5,
            name: 'End Messenger',
            image: '/aircrafts/kamui-bastion/skin-5.png',
            icon: '/aircrafts/kamui-bastion/skin-5-icon.png',
            star: 5,
            description: 'Corrosion - The enhanced lower-body structure allows the wearer of this outfit to quickly dash across cities full of obstacles. Also has a low-level filter installed.',
            howToObtain: 'You can buy it in the store or during purchase.'
         },
      ],
      skills: {
         basicSkills: [
            {
               id: 1,
               name: 'Great Slash',
               icon: '/aircrafts/kamui-bastion/b1.png',
               description: [
                  'Red Orb: Ping Red Orb\nSlashes the target and deals Physical DMG. Unleashes an extra slash upon a 3-Ping.\n- Deals 205.88% / 411.76% / 411.76% Physical DMG based on the number of orbs pinged.\n- Deals additional 411.76% Physical DMG upon a 3-Ping.'
               ]
            },
            {
               id: 2,
               name: 'Counterattack',
               icon: '/aircrafts/kamui-bastion/b2.png',
               description: [
                  'Yellow Orb: Ping Yellow Orb\nEnters a block stance and increases Extra DMG Reduction.\n- The block stance lasts 2s, during which Extra DMG Reduction increases by 75%.',
                  'Yellow Orb: Attacked while Blocking\nAfter successfully blocking damage, Kamui: Bastion unleashes a wide-area counterattack, dealing Physical DMG and gaining Charge Points.\n- Counterattack deals 205.88% / 411.76% / 617.65% Physical DMG based on the number of orbs pinged.\n- Gains 40/80/120 Charge Points based on the number of orbs pinged.',
                  'Yellow Orb: Basic Attack while Blocking/Blocking ends\nWhen Kamui: Bastion performs a Basic Attack while blocking, or when the blocking ends, he unleashes a less powerful counterattack, dealing Physical DMG and canceling his block stance if it has not already ended.\n- Counterattack deals 102.94% / 205.88% / 411.76% Physical DMG based on the number of orbs pinged.'
               ]
            },
            {
               id: 3,
               name: 'Assault Mode',
               icon: '/aircrafts/kamui-bastion/b3.png',
               description: [
                  'Blue Orb: Ping Blue Orb\nReleases energy to gain Shield. Stuns targets when Kamui: Bastion\'s greatsword hits the ground, dealing Physical DMG.\n- Gains Shield equal to 51.47% / 102.94% / 154.41% of Kamui: Bastion\'s DEF based on the number of orbs pinged.\n- Stuns the target for 1/1.5/2s and deals 102.94% / 205.88% / 308.82% Physical DMG based on the number of orbs pinged.'
               ]
            },
            {
               id: 4,
               name: 'Swing',
               icon: '/aircrafts/kamui-bastion/b4.png',
               description: [
                  'Basic Attack: Tap Basic Attack\nFires consecutive shots, dealing Physical DMG.\n- Deals 905.88% Physical DMG in total.'
               ]
            },
         ],
         specialSkills: [
            {
               id: 1,
               name: 'Offence-Defense Rhythm',
               icon: '/aircrafts/kamui-bastion/s1.png',
               corePassive: '/aircrafts/kamui-bastion/cp.png',
               description: [
                  'Core Passive: Any 3-Ping\nGains Charge Points after any 3-Ping. When there are Charge Points, Kamui: Bastion\'s ATK increases. Charge Points decrease over time.\n- Gains 40 Charge Points after a 3-Ping, up to 120 points.\n- When there are more than 0/40/80 Charge Points, Kamui: Bastion\'s ATK increases by 6.18% / 12.35% / 18.53%.\n- Charge Points decrease by 8 every second.'
               ]
            },
            {
               id: 2,
               name: 'Obliterating Press',
               icon: '/aircrafts/kamui-bastion/s2.png',
               description: [
                  'Signature Move: 100 Energy + Tap Signature\nCharges up and quickly swings his greatsword at enemies in front, dealing Physical DMG.\n- Deals 2058.82% Physical DMG in total.'
               ]
            },
            {
               id: 3,
               name: 'Obliterating Wind',
               icon: '/aircrafts/kamui-bastion/s3.png',
               description: [
                  'QTE: Tap QTE\nKamui: Bastion slashes the target with his greatsword, dealing Physical DMG, stunning the target, and reducing the target\'s DEF.\n- Deals 514.71% Physical DMG in total.\n- Stuns the target for 3s. Reduces the target\'s DEF by 10.29% for 6s.'
               ]
            },
         ],
         commonEffects: [
            {
               id: 1,
               name: 'Unbreakable Formation',
               icon: '/aircrafts/kamui-bastion/c1.png',
               description: [
                  'Leader\nIncreases Physical DMG of all members by 10% when the HP of all members is greater than 70%.'
               ]
            },
            {
               id: 2,
               name: 'Tank',
               icon: '/aircrafts/kamui-bastion/c2.png',
               description: [
                  'Class\nAttacks reduce the target\'s Extra DMG Reduction by 20.59% for 5s.'
               ]
            },
            {
               id: 3,
               name: 'Ultima Awaken',
               icon: '/aircrafts/kamui-bastion/c3.png',
               description: [
                  'Ultima\nGains 3 Signal Orbs when entering battle.'
               ]
            },
         ],
         evolutionEffects: [
            {
               id: 1,
               name: 'Fearless Charge',
               icon: '/aircrafts/kamui-bastion/e1.png',
               description: [
                  'Rank SS\nGains 1 random Signal Orb after a successful block. This effect can only be triggered once every 5s.'
               ]
            },
            {
               id: 2,
               name: 'Growling Slash',
               icon: '/aircrafts/kamui-bastion/e2.png',
               description: [
                  'Rank SSS\nReduces Physical DMG taken by 10% and deals 8% more Physical DMG when there are over 60 Charge Points.'
               ]
            },
            {
               id: 3,
               name: 'Offensive Defense',
               icon: '/aircrafts/kamui-bastion/e3.png',
               description: [
                  'Ranks SSS+\nPhysical DMG increases by 10% when Shield is present.'
               ]
            },
         ],
         leapSkills: []
      },
      archives: {
         plots: [],
         material: [
            {
               id: 1,
               content: 'A member of the Assault Eagle Squad, an armored type.\nA construct that uses a large sword and has extremely high defense. He does not win by attack speed, but by strong attack power. He likes to charge into battle and is often active on the front line of the battlefield.'
            },
            {
               id: 2,
               content: 'He always has a smile on his face, is optimistic and straightforward, and has a very direct way of thinking.\nUnlike Lee who thinks things through, Kamui speaks his mind and often has verbal conflicts with Lee.\nBut strangely, the tit-for-tat situation between Kamui and Ri does not seem to be a sign of a bad relationship.'
            },
            {
               id: 3,
               content: 'This is really a headache... Affiliation..."\nShenwei was a member of the Assault Eagle Squad, but due to the mission, he almost became a permanent member of the Gray Crow Squad.\nShenwei once said seriously that he was a member of the Assault Eagle Squad, but he could also die for the Gray Crow.'
            },
            {
               id: 4,
               content: 'The machine is the latest batch of Sky Garden, but according to the system records, Shenwei is one of the earliest structures put into use.\nThe consciousness data of Shenwei is a secondary encrypted file of the Sky Garden system.\nWhen searching Shenwei on the system, only relevant data such as machine performance and combat characteristics are found.'
            },
            {
               id: 5,
               content: 'Shenwei is connected to Kamu\'s sea of ​​consciousness, but there is no way to know whether Shenwei knew of Kamu\'s existence from the beginning.\nEverything about Kamu and the connection between Kamu and Shenwei can only be truly understood when the archives are unlocked.'
            },
            {
               id: 6,
               content: 'Is there something hidden behind Shenwei\'s smile? Under those warm and direct, unremarkable words, there are contradictions and struggles buried, the struggle with himself, and the forgotten memories. Perhaps the important commander can help him solve it.'
            },
         ],
         secrets: [
            {
               id: 1,
               unlockedAt: 2,
               content: 'The horns on its head often hit the door frame.'
            },
            {
               id: 2,
               unlockedAt: 2,
               content: 'I felt like I should be heavier, and I was a little unsteady when swinging the sword.'
            },
            {
               id: 3,
               unlockedAt: 3,
               content: 'I think friend of women is a good term.'
            },
            {
               id: 4,
               unlockedAt: 3,
               content: 'Very good at video games, especially Candy Crush Saga.'
            },
            {
               id: 5,
               unlockedAt: 4,
               content: 'I once requested to install a gaming function inside the machine, but was told that the display screen could only be installed in the abdomen, so I gave up.'
            },
            {
               id: 6,
               unlockedAt: 4,
               content: 'I think the commander of Gray Crow is an interesting person.'
            },
            {
               id: 7,
               unlockedAt: 5,
               content: 'When I first met Lucia, I felt like I had seen her somewhere before - I wanted to say hello like that but gave up because I thought it would sound like a cliché.'
            },
            {
               id: 8,
               unlockedAt: 5,
               content: 'In the Assault Eagle Unit, he is often responsible for delivering messages because of the poor team coordination ability.'
            },
            {
               id: 9,
               unlockedAt: 6,
               content: 'I want an inverse device like Chrome\'s that won\'t break things everywhere.'
            },
            {
               id: 10,
               unlockedAt: 6,
               content: 'He once used an inverse meta-device to disrupt the thought circuits of an infected entity.'
            },
            {
               id: 11,
               unlockedAt: 7,
               content: 'In fact, he could use the greatsword dual-wielding style, but was rejected by Chrom because it was too messy.'
            },
            {
               id: 12,
               unlockedAt: 8,
               content: 'Played a mini-game with the commander of the Gray Crow Squad, and conceded defeat for some reason.'
            },
         ]
      },
      voices: [
         'Mandarin: DK',
         'Japanese: Fukuyama Jun',
         'Cantonese: 阿戈伊奥',
         'English: Patrick Gruia',
      ],
      awareness: [
         {
            title: 'General Awareness',
            set4: {
               name: 'da-vinci',
               resonance: 'Ex - Precision Attack',
               resonanceImg: '/resonance/Ex - Precision Attack.png',
               effect: 'ATK +15, CRIT +15',
            },
            set2: {
               name: 'catherine',
               resonance: 'Class Skills',
               resonanceImg: '/aircrafts/kamui-bastion/c2.png',
               effect: 'Class Skills +1'
            },
            resonance: ['No resonance'],
            note: '① Any 15 attacks of the upper "attack" resonance can be used'
         }
      ]
   },
]