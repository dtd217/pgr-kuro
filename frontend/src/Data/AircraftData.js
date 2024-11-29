export const aircraftData = [
   {
      id: 1,
      name: 'Lucia: Lotus',
      avatar: '/aircrafts/lucia-lotus/avatar.png',
      icon: '/aircrafts/lucia-lotus/icon.png',
      poster: '/aircrafts/lucia-lotus/poster.png',
      elements: ['physics', 'fire'],
      maxim: 'Let the burning red lotus end everything!',
      introduction: 'The captain of the Gray Crow Squad, he possesses great courage and a spirit of sacrifice, and is determined to follow orders and fight against the infected in various war zones.',
      features: {
         'Single': 'Powerful single-target attack capability',
         'Dual Blade Technique': 'Skill increases own attack damage'
      },
      stats: {
         health: 1350,
         damage: 270,
         defense: 192,
         crit: 121,
      },
      file: {
         'Launch Day': 'June 15',
         'Height': '165cm',
         'Weight': '48kg',
         'Circulating fluid type': 'A',
         'Mental age': '17'
      },
      information: {
         quality: 'B',
         class: 'Attacker',
         weapon: 'katana',
         signature: 'Lotus Berserker',
         faction: 'Gray Raven',
         gift: 'Frog Accessory',
      },
      skin: [
         {
            id: 1,
            name: 'Generic',
            image: '/aircrafts/lucia-lotus/skin-1.png',
            icon: '/aircrafts/lucia-lotus/skin-1-icon.png',
            description: 'The default outfit given to Constructs when they were manufactured.',
         },
         {
            id: 2,
            name: 'Generic - Modified',
            image: '/aircrafts/lucia-lotus/skin-2.png',
            icon: '/aircrafts/lucia-lotus/skin-2-icon.png',
            description: 'The outfit designed by awakened Constructs to their liking after gaining the permission to do so.',
         },
         {
            id: 3,
            name: 'Generic - Final',
            image: '/aircrafts/lucia-lotus/skin-3.png',
            icon: '/aircrafts/lucia-lotus/skin-3-icon.png',
            description: 'The outfit modified by Constructs after they reach the ultimate awakening phase. Perfectly resembles the characteristics of their M.I.N.D.',
         },
         {
            id: 4,
            name: 'Rain Walking',
            image: '/aircrafts/lucia-lotus/skin-4.png',
            icon: '/aircrafts/lucia-lotus/skin-4-icon.png',
            description: 'New Life - As Lucia strolls on the streets after a refreshing rain, the waterproof and transparent macromolecular surface of her outfit reflects the mesmerizing light from the windows of shops nearby.',
         },
         {
            id: 5,
            name: 'Daybreak',
            image: '/aircrafts/lucia-lotus/skin-5.png',
            icon: '/aircrafts/lucia-lotus/skin-5-icon.png',
            description: 'Horizon - The smooth design significantly reduces friction, while the stealth but passionate cut and colors help to transform Lucia into a daybreaking light.',
         },
         {
            id: 6,
            name: 'Gray Feathers: Lotus',
            image: '/aircrafts/lucia-lotus/skin-6.png',
            icon: '/aircrafts/lucia-lotus/skin-6-icon.png',
            description: 'Uniform - The customized uniform made for all the Constructs that have developed a bond with Gray Raven. Often worn as a formal dress during all important Event.',
         },
      ],
      skills: {
         basicSkills: [
            {
               id: 1,
               name: 'Red Lotus - Starting Style',
               icon: '/aircrafts/lucia-lotus/b1.png',
               description: 'Red signal ball - Eliminate the red signal ball\nStab forward, pulling the target and dealing physical damage.\n- Deals 274.56% / 549.01% / 823.53% physical damage based on the number of balls destroyed.'
            },
            {
               id: 2,
               name: 'Red Lotus - Lightning Attack',
               icon: '/aircrafts/lucia-lotus/b2.png',
               description: 'Yellow signal ball - Eliminate the yellow signal ball\nQuickly launches a single attack at the target, knocking it back and dealing physical damage.\n- Deals 158.82% / 317.65% / 476.47% physical damage based on the number of balls destroyed.'
            },
            {
               id: 3,
               name: 'Red Lotus - Wave Slash',
               icon: '/aircrafts/lucia-lotus/b3.png',
               description: 'Blue signal ball - Eliminate the blue signal ball\nThe weapon bursts and deals physical damage, while adding fire damage to all attacks for a certain period of time.\n- Deals 102.94% / 205.88% / 308.82% physical damage based on the number of balls destroyed.\n- Adds 10.29% / 15.44% / 20.59% fire damage based on the number of balls destroyed, lasting 4/4/6 seconds.'
            },
            {
               id: 4,
               name: 'Red Lotus - Swift Blade Style',
               icon: '/aircrafts/lucia-lotus/b4.png',
               description: 'Normal attack - Click normal attack\nUse Red Lotus Blade to attack the enemy continuously, causing physical damage.\n- Deals 571.76% physical damage in total.'
            },
         ],
         specialSkills: [
            {
               id: 1,
               name: 'Red Lotus - Dual Swordsmanship',
               icon: '/aircrafts/lucia-lotus/s1.png',
               description: 'Core passive - Eliminate any 3 + eliminate red signal balls\nAfter eliminating any 3 red signals, if you eliminate the red signal again within 4 seconds, Lucia Lotus will enter the burst state and use the double sword technique instead of the normal attack. Lotus - Dual Swordsmanship: Continuously attack the enemy, causing physical damage.\n- Causes a total of 1207.06% physical damage.'
            },
            {
               id: 2,
               name: 'Red Lotus Dance',
               icon: '/aircrafts/lucia-lotus/s2.png',
               description: 'Special move - 100 special move energy + click to kill\nRelease Red Lotus Sword Dance to quickly slash and hit the enemy in front of you, causing physical damage.\n- Each slash causes 140% physical damage.\n- Heavy attack causes 1029.41% physical damage.'
            },
            {
               id: 3,
               name: 'Lotus Quick Slash',
               icon: '/aircrafts/lucia-lotus/s3.png',
               description: 'QTE - Click QTE\nLucia Lotus appears and attacks the enemy with dual blades , causing physical damage.\n- Causes a total of 1142.65% physical damage.'
            },
         ],
         commonEffects: [
            {
               id: 1,
               name: 'Fearless Warrior',
               icon: '/aircrafts/lucia-lotus/c1.png',
               description: 'Captain skill\nIncreases the attack power of all Attacker Omniframes in the team by 10%.'
            },
            {
               id: 2,
               name: 'Fearless Warrior',
               icon: '/aircrafts/lucia-lotus/c2.png',
               description: 'Professional skills\nAdditional damage bonus increased by 21.76%.'
            },
            {
               id: 3,
               name: 'Final Liberation',
               icon: '/aircrafts/lucia-lotus/c3.png',
               description: 'When you first enter combat, you immediately receive three signal balls.'
            },
         ],
         evolutionEffects: [
            {
               id: 1,
               name: 'Lightning Attack - Air Blade',
               icon: '/aircrafts/lucia-lotus/e1.png',
               description: 'SS Upgraded Passive\nWhen attacking a flying target, each attack will inflict an additional 20% physical damage.'
            },
            {
               id: 2,
               name: 'The More Than Sword',
               icon: '/aircrafts/lucia-lotus/e2.png',
               description: 'SSS Upgraded Passive\nIn the double-blade burst state, the additional damage bonus increases by 15% .'
            },
            {
               id: 3,
               name: 'Mirror Core',
               icon: '/aircrafts/lucia-lotus/e3.png',
               description: 'SSS+ Upgraded Passive\nNormal attack bonus damage increased by 15% .'
            },
         ]
      },
   },
]