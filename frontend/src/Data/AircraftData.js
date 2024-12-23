export const aircraftData = [
   {
      id: 1,
      name: 'Lucia Lotus',
      avatar: '/aircrafts/lucia-lotus/avatar.png',
      icon: '/aircrafts/lucia-lotus/icon.png',
      poster: '/aircrafts/lucia-lotus/poster.png',
      elements: ['fire', 'physical'],
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
         type: 'Katana',
         signature: 'Lotus Berserker',
         image: '/weapons/lotus-berserker/lotus-berserker.png',
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
            '① Active skill [Piercing Field: Object] can provide a shield of 2% of the character\'s maximum health, improving survivability',
            '② Passive skill [Thorns]: When the marked enemy is injured, it will receive an additional physical damage of 40 % of the character\'s attack power',
         ],
         resonance: [
            {
               name: '① Piercing Field: Physical',
               image: '/pets/thorny/ap.png',
            },
            {
               name: '② Needle Polishing',
               image: '/pets/thorny/ps1.png',
            },
            {
               name: '③ Thorn: Sharpenen',
               image: '/pets/thorny/ps2.png',
            },
            {
               name: '④ Thorn: Stack',
               image: '/pets/thorny/ps3.png',
            },
            {
               name: '⑤ Thorn: Physical',
               image: '/pets/thorny/ps4.png',
            },
            {
               name: '⑥ Thorn Mark',
               image: '/pets/thorny/ps5.png',
            },
         ]
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
            howToObtain: '1. Participate in the "Little Potato Defense War" event between 10:00 on December 5, 2019 and 23:59 on December 11, 2019. 2. Can be purchased in the store or during purchase.'
         },
      ],
      skills: {
         basicSkills: [
            {
               id: 1,
               name: 'Initial Move',
               icon: '/aircrafts/lucia-lotus/b1.png',
               description: 'Red Orb: Ping Red Orb\nThrusts forward and pulls the target, dealing Physical DMG.\n- Deals 274.56% / 549.01% / 823.53% Physical DMG based on the number of orbs pinged.'
            },
            {
               id: 2,
               name: 'Flash Strike',
               icon: '/aircrafts/lucia-lotus/b2.png',
               description: 'Yellow Orb: Ping Yellow Orb\nQuickly strikes once and knocks the target airborne, dealing Physical DMG.\n- Deals 154.41% / 308.82% / 463.24% Physical DMG based on the number of orbs pinged.'
            },
            {
               id: 3,
               name: 'Wave Slash',
               icon: '/aircrafts/lucia-lotus/b3.png',
               description: 'Blue Orb: Ping Blue Orb\nDeals Physical DMG and flares up weapon, making all attacks deal extra Fire DMG for a period of time.\n- Deals 102.94% / 205.88% / 308.82% Physical DMG based on the number of orbs pinged.\n- Deals extra 10.29% /15.44% / 20.59% Fire DMG for 4 / 4 / 6s based on the number of orbs pinged.'
            },
            {
               id: 4,
               name: 'Quick Blade',
               icon: '/aircrafts/lucia-lotus/b4.png',
               description: 'Basic Attack: Tap Basic Attack\nLaunches consecutive attacks with Lotus - Quick Blade, dealing Physical DMG.\n- Deals 555.88% Physical DMG in total.'
            },
         ],
         specialSkills: [
            {
               id: 1,
               name: 'Dual Blades',
               icon: '/aircrafts/lucia-lotus/s1.png',
               corePassive: '/aircrafts/lucia-lotus/cp.png',
               description: 'Core Passive: Any 3-Ping + Ping Red Orb\nLucia: Lotus enters Burst Form when a Red Orb is pinged within 4s after any 3-Ping, replacing Basic Attacks with Dual Blades. Lotus - Dual Blades: Attacks the enemy multiple times, dealing Physical DMG.\n- Deals 1111.76% Physical DMG in total.'
            },
            {
               id: 2,
               name: 'Lotus Flurry',
               icon: '/aircrafts/lucia-lotus/s2.png',
               description: 'Signature Move: 100 Energy + Tap Signature\nUnleashes Lotus Flurry to deal quick slashes to the enemies ahead and finish with a heavy blow, dealing Physical DMG.\n- Each slash deals 144.12% Physical DMG.\n- The heavy blow deals 1029.41% Physical DMG.'
            },
            {
               id: 3,
               name: 'Lotus Quick Slash',
               icon: '/aircrafts/lucia-lotus/s3.png',
               description: 'QTE: Tap QTE\nLucia: Lotus enters the battlefield and attacks the enemy with her Dual Blades, dealing Physical DMG.\n- Deals 1142.65% Physical DMG in total.'
            },
         ],
         commonEffects: [
            {
               id: 1,
               name: 'Fearless Warrior',
               icon: '/aircrafts/lucia-lotus/c1.png',
               description: 'Leader\nIncreases ATK of all Attacker Omniframes in the team by 10%.'
            },
            {
               id: 2,
               name: 'Attacker',
               icon: '/aircrafts/lucia-lotus/c2.png',
               description: 'Class\nExtra DMG Bonus increases by 20.59%.'
            },
            {
               id: 3,
               name: 'Ultima Awaken',
               icon: '/aircrafts/lucia-lotus/c3.png',
               description: 'Ultima\nGains 3 Signal Orbs when entering battle.'
            },
         ],
         evolutionEffects: [
            {
               id: 1,
               name: 'Spiritblade Slash',
               icon: '/aircrafts/lucia-lotus/e1.png',
               description: 'Rank SS\nWhen attacking airborne targets, deals extra 20% Physical DMG per attack.'
            },
            {
               id: 2,
               name: 'Relentless Blade',
               icon: '/aircrafts/lucia-lotus/e2.png',
               description: 'Rank SSS\nDuring Burst Form, Extra DMG Bonus increases by 15%.'
            },
            {
               id: 3,
               name: 'Core of Clarity',
               icon: '/aircrafts/lucia-lotus/e3.png',
               description: 'Ranks SSS+\nExtra DMG Bonus of Basic Attack increases by 15%.'
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
               unlockedAt: 2,
               content: 'Using the Red Lotus Dual Blade Technique will cause the body to heat up, with the sensation being similar to a human fever.'
            },
            {
               id: 4,
               unlockedAt: 2,
               content: 'Hair is a man-made synthetic fiber that cannot be cut by ordinary knives.'
            },
            {
               id: 5,
               unlockedAt: 2,
               content: 'I have a special aesthetic taste for objects.'
            },
            {
               id: 6,
               unlockedAt: 2,
               content: 'Silence during time outside of tasks is not thinking, but daydreaming.'
            },
            {
               id: 7,
               unlockedAt: 2,
               content: 'I have some inexplicable respect for older machine designers like Bianca and Watanabe.'
            },
            {
               id: 8,
               unlockedAt: 2,
               content: 'I think Liv has great potential.'
            },
            {
               id: 9,
               unlockedAt: 2,
               content: 'I can\'t understand what Qi Shi is thinking.'
            },
            {
               id: 10,
               unlockedAt: 2,
               content: 'Unable to withstand Karenina\'s passionate offensive.'
            },
            {
               id: 11,
               unlockedAt: 2,
               content: 'I really want to use the sword-drawing slash, but I don\'t have a scabbard.'
            },
            {
               id: 12,
               unlockedAt: 2,
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
      equipment: {
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
               resonance: ['Patton', 'Darwin'],
               note: '① Any 15 attacks of the upper "attack" resonance can be used'
            },
            {
               title: 'General Awareness New',
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
      }
   },
   {
      id: 2,
      name: 'Lucia Dawn',
      avatar: '/aircrafts/lucia-dawn/avatar.png',
      icon: '/aircrafts/lucia-dawn/icon.png',
      poster: '/aircrafts/lucia-dawn/poster.png',
      elements: ['lightning', 'physical'],
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
         type: 'Katana',
         signature: 'Inverse - Shadow',
         image: '/weapons/inverse-shadow/inverse-shadow.png',
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         resonance: [
            {
               name: '① Glorious Afterglow',
               image: '/aircrafts/lucia-dawn/wr1.png',
            },
            {
               name: '② Dead Line Timing',
               image: '/aircrafts/lucia-dawn/wr2.png',
            },
            {
               name: '③ Incandescence',
               image: '/aircrafts/lucia-dawn/wr3.png',
            },
         ],
         briefs: [
            '① Every time Dawn causes lightning damage, its lightning damage will be enhanced (can be stacked, up to 4 layers), increasing Dawn\'s output damage',
            '② Dawn\'s extra damage after releasing the ultimate move increases, increasing Dawn\'s output damage',
         ]
      },
      pet: {
         name: 'lingya',
         image: '/pets/lingya/avatar.png',
         note: '① The content is for reference only. Commanders can plan and draw according to their own game situation.',
         briefs: [
            '① With the exclusive skill [High-voltage Relay], you can provide additional damage bonus to the next character to appear',
            '② With the exclusive skill [Voltage Transformer], you can provide a blue signal ball for the next character to appear',
         ],
         resonance: [
            {
               name: '① Piercing Field: Physical',
               image: '/pets/lingya/at.png',
            },
            {
               name: '② Needle Polishing',
               image: '/pets/lingya/ps1.png',
            },
            {
               name: '③ Thorn: Sharpenen',
               image: '/pets/lingya/ps2.png',
            },
            {
               name: '④ Thorn: Stack',
               image: '/pets/lingya/ps3.png',
            },
            {
               name: '⑤ Thorn: Physical',
               image: '/pets/lingya/ps4.png',
            },
            {
               name: '⑥ Thorn Mark',
               image: '/pets/lingya/ps5.png',
            },
         ]
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
            howToObtain: '1. Participate in the "Little Potato Defense War" event between 10:00 on December 5, 2019 and 23:59 on December 11, 2019. 2. Can be purchased in the store or during purchase.'
         },
      ],
      skills: {
         basicSkills: [
            {
               id: 1,
               name: 'Initial Move',
               icon: '/aircrafts/lucia-lotus/b1.png',
               description: 'Red Orb: Ping Red Orb\nThrusts forward and pulls the target, dealing Physical DMG.\n- Deals 274.56% / 549.01% / 823.53% Physical DMG based on the number of orbs pinged.'
            },
            {
               id: 2,
               name: 'Flash Strike',
               icon: '/aircrafts/lucia-lotus/b2.png',
               description: 'Yellow Orb: Ping Yellow Orb\nQuickly strikes once and knocks the target airborne, dealing Physical DMG.\n- Deals 154.41% / 308.82% / 463.24% Physical DMG based on the number of orbs pinged.'
            },
            {
               id: 3,
               name: 'Wave Slash',
               icon: '/aircrafts/lucia-lotus/b3.png',
               description: 'Blue Orb: Ping Blue Orb\nDeals Physical DMG and flares up weapon, making all attacks deal extra Fire DMG for a period of time.\n- Deals 102.94% / 205.88% / 308.82% Physical DMG based on the number of orbs pinged.\n- Deals extra 10.29% /15.44% / 20.59% Fire DMG for 4 / 4 / 6s based on the number of orbs pinged.'
            },
            {
               id: 4,
               name: 'Quick Blade',
               icon: '/aircrafts/lucia-lotus/b4.png',
               description: 'Basic Attack: Tap Basic Attack\nLaunches consecutive attacks with Lotus - Quick Blade, dealing Physical DMG.\n- Deals 555.88% Physical DMG in total.'
            },
         ],
         specialSkills: [
            {
               id: 1,
               name: 'Dual Blades',
               icon: '/aircrafts/lucia-lotus/s1.png',
               corePassive: '/aircrafts/lucia-lotus/cp.png',
               description: 'Core Passive: Any 3-Ping + Ping Red Orb\nLucia: Lotus enters Burst Form when a Red Orb is pinged within 4s after any 3-Ping, replacing Basic Attacks with Dual Blades. Lotus - Dual Blades: Attacks the enemy multiple times, dealing Physical DMG.\n- Deals 1111.76% Physical DMG in total.'
            },
            {
               id: 2,
               name: 'Lotus Flurry',
               icon: '/aircrafts/lucia-lotus/s2.png',
               description: 'Signature Move: 100 Energy + Tap Signature\nUnleashes Lotus Flurry to deal quick slashes to the enemies ahead and finish with a heavy blow, dealing Physical DMG.\n- Each slash deals 144.12% Physical DMG.\n- The heavy blow deals 1029.41% Physical DMG.'
            },
            {
               id: 3,
               name: 'Lotus Quick Slash',
               icon: '/aircrafts/lucia-lotus/s3.png',
               description: 'QTE: Tap QTE\nLucia: Lotus enters the battlefield and attacks the enemy with her Dual Blades, dealing Physical DMG.\n- Deals 1142.65% Physical DMG in total.'
            },
         ],
         commonEffects: [
            {
               id: 1,
               name: 'Fearless Warrior',
               icon: '/aircrafts/lucia-lotus/c1.png',
               description: 'Leader\nIncreases ATK of all Attacker Omniframes in the team by 10%.'
            },
            {
               id: 2,
               name: 'Attacker',
               icon: '/aircrafts/lucia-lotus/c2.png',
               description: 'Class\nExtra DMG Bonus increases by 20.59%.'
            },
            {
               id: 3,
               name: 'Ultima Awaken',
               icon: '/aircrafts/lucia-lotus/c3.png',
               description: 'Ultima\nGains 3 Signal Orbs when entering battle.'
            },
         ],
         evolutionEffects: [
            {
               id: 1,
               name: 'Spiritblade Slash',
               icon: '/aircrafts/lucia-lotus/e1.png',
               description: 'Rank SS\nWhen attacking airborne targets, deals extra 20% Physical DMG per attack.'
            },
            {
               id: 2,
               name: 'Relentless Blade',
               icon: '/aircrafts/lucia-lotus/e2.png',
               description: 'Rank SSS\nDuring Burst Form, Extra DMG Bonus increases by 15%.'
            },
            {
               id: 3,
               name: 'Core of Clarity',
               icon: '/aircrafts/lucia-lotus/e3.png',
               description: 'Ranks SSS+\nExtra DMG Bonus of Basic Attack increases by 15%.'
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
               unlockedAt: 2,
               content: 'Using the Red Lotus Dual Blade Technique will cause the body to heat up, with the sensation being similar to a human fever.'
            },
            {
               id: 4,
               unlockedAt: 2,
               content: 'Hair is a man-made synthetic fiber that cannot be cut by ordinary knives.'
            },
            {
               id: 5,
               unlockedAt: 2,
               content: 'I have a special aesthetic taste for objects.'
            },
            {
               id: 6,
               unlockedAt: 2,
               content: 'Silence during time outside of tasks is not thinking, but daydreaming.'
            },
            {
               id: 7,
               unlockedAt: 2,
               content: 'I have some inexplicable respect for older machine designers like Bianca and Watanabe.'
            },
            {
               id: 8,
               unlockedAt: 2,
               content: 'I think Liv has great potential.'
            },
            {
               id: 9,
               unlockedAt: 2,
               content: 'I can\'t understand what Qi Shi is thinking.'
            },
            {
               id: 10,
               unlockedAt: 2,
               content: 'Unable to withstand Karenina\'s passionate offensive.'
            },
            {
               id: 11,
               unlockedAt: 2,
               content: 'I really want to use the sword-drawing slash, but I don\'t have a scabbard.'
            },
            {
               id: 12,
               unlockedAt: 2,
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
      equipment: {
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
               resonance: ['Patton', 'Darwin'],
               note: '① Any 15 attacks of the upper "attack" resonance can be used'
            },
            {
               title: 'General Awareness New',
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
      }
   },
]