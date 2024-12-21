export const aircraftData = [
   {
      id: 1,
      name: 'Lucia Lotus',
      avatar: '/aircrafts/lucia-lotus/avatar.png',
      icon: '/aircrafts/lucia-lotus/icon.png',
      poster: '/aircrafts/lucia-lotus/poster.png',
      elements: ['physics', 'fire'],
      type: 'Omniframes',
      maxim: 'Let the burning red lotus end everything!',
      introduction: 'The leader of Gray Raven. Brave and selfless, she is ever at the frontline of the war against the Corrupted.',
      features: {
         'Duel': 'Has strong single attack ability',
         'Dual Blades': 'Attack DMG boosting skill'
      },
      stats: {
         health: ['8905', '1350'],
         attack: ['1759', '270'],
         defense: ['1331', '192'],
         crit: ['866', '121'],
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
         },
         {
            id: 2,
            name: 'Generic - Modified',
            image: '/aircrafts/lucia-lotus/skin-2.png',
            icon: '/aircrafts/lucia-lotus/skin-2-icon.png',
            star: 2,
            description: 'The outfit designed by awakened Constructs to their liking after gaining the permission to do so.',
         },
         {
            id: 3,
            name: 'Generic - Final',
            image: '/aircrafts/lucia-lotus/skin-3.png',
            icon: '/aircrafts/lucia-lotus/skin-3-icon.png',
            star: 2,
            description: 'The outfit modified by Constructs after they reach the ultimate awakening phase. Perfectly resembles the characteristics of their M.I.N.D.',
         },
         {
            id: 4,
            name: 'Rain Walking',
            image: '/aircrafts/lucia-lotus/skin-4.png',
            icon: '/aircrafts/lucia-lotus/skin-4-icon.png',
            star: 5,
            description: 'New Life - As Lucia strolls on the streets after a refreshing rain, the waterproof and transparent macromolecular surface of her outfit reflects the mesmerizing light from the windows of shops nearby.',
         },
         {
            id: 5,
            name: 'Daybreak',
            image: '/aircrafts/lucia-lotus/skin-5.png',
            icon: '/aircrafts/lucia-lotus/skin-5-icon.png',
            star: 5,
            description: 'Horizon - The smooth design significantly reduces friction, while the stealth but passionate cut and colors help to transform Lucia into a daybreaking light.',
         },
         {
            id: 6,
            name: 'Gray Feathers: Lotus',
            image: '/aircrafts/lucia-lotus/skin-6.png',
            icon: '/aircrafts/lucia-lotus/skin-6-icon.png',
            star: 5,
            description: 'Uniform - The customized uniform made for all the Constructs that have developed a bond with Gray Raven. Often worn as a formal dress during all important Event.',
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
         leapSkills: [
            {
               id: 1,
               name: '',
               icon: '',
               description: ''
            },
            {
               id: 2,
               name: '',
               icon: '',
               description: ''
            },
            {
               id: 3,
               name: '',
               icon: '',
               description: ''
            },
         ]
      },
   },
   {
      id: 2,
      name: 'Lucia Dawn',
      avatar: '/aircrafts/lucia-dawn/avatar.png',
      icon: '/aircrafts/lucia-dawn/icon.png',
      poster: '/aircrafts/lucia-dawn/poster.png',
      elements: ['lightning', 'physics'],
      type: 'Omniframes',
      maxim: 'In the name of the Blade of God\'s Wrath, cut the night apart!',
      introduction: 'Lucia\'s signature frame. As graceful as it is powerful, its mere appearance on the battlefield inspires its allies, earning the “Dawn” sobriquet.',
      features: {
         'Single': 'Powerful single-target attack capability',
         'Mixed Damage': 'Can cause physical damage and attribute damage'
      },
      stats: {
         health: 1417,
         damage: 270,
         defense: 202,
         crit: 128,
      },
      file: {
         'Launch day': 'June 15',
         'Height': '165cm',
         'Weight': '48kg',
         'Circulating fluid type': 'A',
         'Mental age': '17'
      },
      weapon: {
         type: 'Tachi',
         signature: 'Inverse - Shadow',
      },
      information: {
         rank: 'A',
         class: 'Attacker',
         effect: 'none',
         affiliation: 'Gray Raven',
         gift: 'Frog Accessory',
      },
      skin: [
         {
            id: 1,
            name: 'Generic',
            image: '/aircrafts/lucia-dawn/skin-1.png',
            icon: '/aircrafts/lucia-dawn/skin-1-icon.png',
            star: 2,
            description: 'The default outfit given to Constructs when they were manufactured.',
         },
         {
            id: 2,
            name: 'Generic - Modified',
            image: '/aircrafts/lucia-dawn/skin-2.png',
            icon: '/aircrafts/lucia-dawn/skin-2-icon.png',
            star: 2,
            description: 'The outfit designed by awakened Constructs to their liking after gaining the permission to do so.',
         },
         {
            id: 3,
            name: 'Generic - Final',
            image: '/aircrafts/lucia-dawn/skin-3.png',
            icon: '/aircrafts/lucia-dawn/skin-3-icon.png',
            star: 2,
            description: 'The outfit modified by Constructs after they reach the ultimate awakening phase. Perfectly resembles the characteristics of their M.I.N.D.',
         },
         {
            id: 4,
            name: 'Gothic',
            image: '/aircrafts/lucia-dawn/skin-4.png',
            icon: '/aircrafts/lucia-dawn/skin-4-icon.png',
            star: 5,
            description: 'Underground Arena - Cruel yet elegant; she is one of the most formidable candidates in the ring. Still, many dreams of becoming her new owner and taking her away.',
         },
         {
            id: 5,
            name: 'Gray Feathers: Dawn',
            image: '/aircrafts/lucia-dawn/skin-5.png',
            icon: '/aircrafts/lucia-dawn/skin-5-icon.png',
            star: 5,
            description: 'Uniform - The customized uniform made for all the Constructs that have developed a bond with Gray Raven. Often worn as a formal dress during all important Event',
         },
         {
            id: 6,
            name: 'Holiday of Eden',
            image: '/aircrafts/lucia-dawn/skin-6.png',
            icon: '/aircrafts/lucia-dawn/skin-6-icon.png',
            star: 5,
            description: 'Endearment - A casual outfit launched by a fashion brand that is popular with young people in Babylonia. It is specially prepared by Lucia for the days off with the Commandant. This outfit comes with tiny accessories and a retro digital camera that can record your favorite moments at any time.',
         },
      ],
      skills: {
         basicSkills: [
            {
               id: 1,
               name: 'Red Lotus - Starting Style',
               icon: '/aircrafts/lucia-dawn/b1.png',
               description: 'Red signal ball - Eliminate the red signal ball\nStab forward, pulling the target and dealing physical damage.\n- Deals 274.56% / 549.01% / 823.53% physical damage based on the number of balls destroyed.'
            },
            {
               id: 2,
               name: 'Red Lotus - Lightning Attack',
               icon: '/aircrafts/lucia-dawn/b2.png',
               description: 'Yellow signal ball - Eliminate the yellow signal ball\nQuickly launches a single attack at the target, knocking it back and dealing physical damage.\n- Deals 158.82% / 317.65% / 476.47% physical damage based on the number of balls destroyed.'
            },
            {
               id: 3,
               name: 'Red Lotus - Wave Slash',
               icon: '/aircrafts/lucia-dawn/b3.png',
               description: 'Blue signal ball - Eliminate the blue signal ball\nThe weapon bursts and deals physical damage, while adding fire damage to all attacks for a certain period of time.\n- Deals 102.94% / 205.88% / 308.82% physical damage based on the number of balls destroyed.\n- Adds 10.29% / 15.44% / 20.59% fire damage based on the number of balls destroyed, lasting 4/4/6 seconds.'
            },
            {
               id: 4,
               name: 'Red Lotus - Swift Blade Style',
               icon: '/aircrafts/lucia-dawn/b4.png',
               description: 'Normal attack - Click normal attack\nUse Red Lotus Blade to attack the enemy continuously, causing physical damage.\n- Deals 571.76% physical damage in total.'
            },
         ],
         specialSkills: [
            {
               id: 1,
               name: 'Red Lotus - Dual Swordsmanship',
               icon: '/aircrafts/lucia-dawn/s1.png',
               corePassive: '/aircrafts/lucia-dawn/cp.png',
               description: 'Core passive - Eliminate any 3 + eliminate red signal balls\nAfter eliminating any 3 red signals, if you eliminate the red signal again within 4 seconds, Lucia Lotus will enter the burst state and use the double sword technique instead of the normal attack. Lotus - Dual Swordsmanship: Continuously attack the enemy, causing physical damage.\n- Causes a total of 1207.06% physical damage.'
            },
            {
               id: 2,
               name: 'Red Lotus Dance',
               icon: '/aircrafts/lucia-dawn/s2.png',
               description: 'Special move - 100 special move energy + click to kill\nRelease Red Lotus Sword Dance to quickly slash and hit the enemy in front of you, causing physical damage.\n- Each slash causes 140% physical damage.\n- Heavy attack causes 1029.41% physical damage.'
            },
            {
               id: 3,
               name: 'Lotus Quick Slash',
               icon: '/aircrafts/lucia-dawn/s3.png',
               description: 'QTE - Click QTE\nLucia Lotus appears and attacks the enemy with dual blades , causing physical damage.\n- Causes a total of 1142.65% physical damage.'
            },
         ],
         commonEffects: [
            {
               id: 1,
               name: 'Fearless Warrior',
               icon: '/aircrafts/lucia-dawn/c1.png',
               description: 'Captain skill\nIncreases the attack power of all Attacker Omniframes in the team by 10%.'
            },
            {
               id: 2,
               name: 'Offensive',
               icon: '/aircrafts/lucia-dawn/c2.png',
               description: 'Professional skills\nAdditional damage bonus increased by 21.76%.'
            },
            {
               id: 3,
               name: 'Final Liberation',
               icon: '/aircrafts/lucia-dawn/c3.png',
               description: 'When you first enter combat, you immediately receive three signal balls.'
            },
         ],
         evolutionEffects: [
            {
               id: 1,
               name: 'Lightning Attack - Air Blade',
               icon: '/aircrafts/lucia-dawn/e1.png',
               description: 'SS Upgraded Passive\nWhen attacking a flying target, each attack will inflict an additional 20% physical damage.'
            },
            {
               id: 2,
               name: 'The More Than Sword',
               icon: '/aircrafts/lucia-dawn/e2.png',
               description: 'SSS Upgraded Passive\nIn the double-blade burst state, the additional damage bonus increases by 15% .'
            },
            {
               id: 3,
               name: 'Mirror Core',
               icon: '/aircrafts/lucia-dawn/e3.png',
               description: 'SSS+ Upgraded Passive\nNormal attack bonus damage increased by 15% .'
            },
         ]
      },
   },
]