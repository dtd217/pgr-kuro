export const petData = [
   // Thorny
   {
      id: 1,
      image: '/pets/thorny/avatar.png',
      name: 'Thorny',
      type: 'Charge',
      element: 'Physical',
      signature: '',
      rank: 'A',
      story: [
         'Thorny is a mass-produced machine formerly used by the Engineering Force. Some of its traits shown during the digging operation caught the attention of the staff and it was permitted to be modified into a CUB. The spikes added during the development process have granted it the ability to defend itself against the enemies and made it look more like how it looks right now.',
         'Thorny was on a terrain exploration mission with the Engineering Force during the trial period after it was modified into a CUB. However, Thorny starts to exhibit strange behaviors after the mission. For example, it would stand on its hind legs and reveal its belly without thorns to people while holding the staff member by their wrist.\n"Why is it so clingy? Has it always been like this?"\nA hot - tempered Engineering Force Construct always complains like this to the staff members at the scene while cleaning up mud- covered Thorny.',
         'As its name suggests, Thorny weighs extremely heavily when fully expanded.\nBut it is also surprisingly easy to "pick it up" if you hold Thorny\'s front paws and push its lower body to its belly. However, if you pay more attention, you can see that Thorny is always stretching the spikes on its back secretly and stabbing them on the ground to raise its body and ease the load for whoever picks it up. "...Does it love to be picked up?"\nThis is the only conclusion the experiment staff could draw when seeing Thorny\'s shaky front legs.'
      ],
      background: [],
      activeSkills: {
         physical: [
            {
               name: 'Needle Gyro Orb: Physical',
               image: '/pets/thorny/physical.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Physical DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Physical',
               image: '/pets/thorny/physical.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Physical DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         ice: [
            {
               name: 'Needle Gyro Orb: Ice',
               image: '/pets/thorny/ice.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Ice DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Ice',
               image: '/pets/thorny/ice.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Ice DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         lightning: [
            {
               name: 'Needle Gyro Orb: Lightning',
               image: '/pets/thorny/lightning.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Lightning DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Lightning',
               image: '/pets/thorny/lightning.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Lightning DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         fire: [
            {
               name: 'Needle Gyro Orb: Fire',
               image: '/pets/thorny/fire.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Fire DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Fire',
               image: '/pets/thorny/fire.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Fire DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         dark: [
            {
               name: 'Needle Gyro Orb: Dark',
               image: '/pets/thorny/dark.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Dark DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Dark',
               image: '/pets/thorny/dark.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Dark DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         void: [
            {
               name: 'Needle Gyro Orb: Void',
               image: '/pets/thorny/void.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Void DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Void',
               image: '/pets/thorny/void.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Void DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Needle Polishing',
            image: '/pets/thorny/ps1.png',
            describe: 'Thorny\'s Active Skills deal 60% more DMG.'
         },
         {
            name: 'Thorn: Sharpenen',
            image: '/pets/thorny/ps2.png',
            describe: 'Increases the carrier\'s ATK by 60.'
         },
         {
            name: 'Thorn: Stack',
            image: '/pets/thorny/ps3.png',
            describe: 'Each time Thorny casts an active skill, the carrier\'s ATK increases by 5% for 5s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Thorn: Physical',
            image: '/pets/thorny/ps4.png',
            describe: 'Increases the carrier\'s Physical DMG by 10%.'
         },
         {
            name: 'Old Illusions',
            image: '/pets/thorny/ps5.png',
            describe: 'Thorny will mark an enemy upon dealing DMG to the enemy via an Active Skill. When the marked enemy receives DMG, the mark will be removed and the enemy will take Physical DMG equal to 200% of the carrier\'s ATK. The effect can only be triggered once every 2s.'
         },
      ]
   },
   // Lingya
   {
      id: 2,
      image: '/pets/lingya/avatar.png',
      name: 'Lingya',
      type: 'Damage',
      element: 'Lightning',
      signature: '',
      rank: 'A',
      story: [
         'Lingya was originally a common geological exploration robot in Babylonia with Frame ID A-19. It was later modified by the Engineering Force and put into use on the battlefield. It features an in-built generator that can affect the surrounding electromagnetic field while providing support in battle. It can also be used in geological explorations. Don\'t be surprised if Lingya remains on the battlefield after the battle.It is working on another task.',
         'It has always been an important subject of study for the Engineering Force to have a grasp of the lodes and geological changes on Earth. Some areas have a special magnetic field where it is hard for Levi-Detectors to work. To explore these areas, the Engineering Force opted to use a design with an in-built generator to eliminate the negative effects of magnetic field. To solve the movement and energy consumption issues of the generator, the Engineering Force added other designs to it. A few iterations later, the frame looks more and more like an animal from the antelope subfamily.',
         'Maybe it was because of Lingya\'s magnetic field interference feature, it seemed to show an attachment to the magnetic field on Earth during geological explorations. Just like the original geological exploration robot, Lingya was usually sent to carry out geological exploration tasks in mountains that were hard for humans and other robots to reach. When Lingya stands alone on the top of a mountain and feels pulled by the magnetic field, is it also using its wired central unit to analyze the entire look of this planet?'
      ],
      background: [],
      activeSkills: {
         physical: [
            {
               name: 'Precise Volt Charge: Physical',
               image: '/pets/lingya/physical.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Physical DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Physical',
               image: '/pets/lingya/physical.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Physical DMG.'
            },
         ],
         ice: [
            {
               name: 'Precise Volt Charge: Ice',
               image: '/pets/lingya/ice.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Ice DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Ice',
               image: '/pets/lingya/ice.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Ice DMG.'
            },
         ],
         lightning: [
            {
               name: 'Precise Volt Charge: Lightning',
               image: '/pets/lingya/lightning.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Lightning DMG to hit enemies and applying Charge to them. Lingya will accumulate 10% Lightning DMG its carrier has dealt to them. Once the accumulated DMG reaches 12000 or has lasted 5s, Lingya inflicts the accumulated DMG on the enemy.'
            },
            {
               name: 'Wild Volt Charge: Lightning',
               image: '/pets/lingya/lightning.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Lightning DMG and applying Charge to them. Lingya will accumulate 10% Lightning DMG its carrier has dealt to them. Once the accumulated DMG reaches 12000 or has lasted 5s, Lingya inflicts the accumulated DMG on the enemy.'
            },
         ],
         fire: [
            {
               name: 'Precise Volt Charge: Fire',
               image: '/pets/lingya/fire.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Fire DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Fire',
               image: '/pets/lingya/fire.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Fire DMG.'
            },
         ],
         dark: [
            {
               name: 'Precise Volt Charge: Dark',
               image: '/pets/lingya/dark.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Dark DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Dark',
               image: '/pets/lingya/dark.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Dark DMG.'
            },
         ],
         void: [
            {
               name: 'Precise Volt Charge: Void',
               image: '/pets/lingya/void.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Void DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Void',
               image: '/pets/lingya/void.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Void DMG.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Generator Retrofit',
            image: '/pets/lingya/ps1.png',
            describe: 'Lingya\'s Active Skills deal 60% more DMG.'
         },
         {
            name: 'Magnet Impulse',
            image: '/pets/lingya/ps2.png',
            describe: 'Increases the ATK of Lingya\'s carrier by 60.'
         },
         {
            name: 'High-voltage Relay',
            image: '/pets/lingya/ps3.png',
            describe: 'After performing Lingya\'s Active Skills, the next switched-in member\'s Extra DMG Bonus will increase by 8% for 8s.'
         },
         {
            name: 'Magnetic Sensor',
            image: '/pets/lingya/ps4.png',
            describe: 'Increases the carrier\'s Lightning DMG by 10%.'
         },
         {
            name: 'Voltage Transformer',
            image: '/pets/lingya/ps5.png',
            describe: 'The carrier\'s ATK increases by 30 for 5s after pinging basic Signal Orbs 3 times. It can be stacked up to 2 times. After it reaches max stacks, the duration will refresh whenever it is triggered. The next switched-in member will also gain an extra Blue Orb.'
         },
      ]
   },
   // Seeshell
   {
      id: 3,
      image: '/pets/seeshell/avatar.png',
      name: 'Seeshell',
      type: 'Area, Freeze',
      element: 'Ice',
      signature: '',
      rank: 'A',
      story: [
         'Seeshell, originally an outdated C7 Probe from Babylonia, frequently used in ocean exploration and climate observation. Its capability is recognized after multiple CUB experiments, and it is now active in the field as a CUB. When transformed, Seeshell\'s four cannons can provide substantial support fire. The two fisheye lenses by its sides also offer a comprehensive view of the battlefield. By syncing those data to Constructs and the commandant in real time, Seeshell is valuable for evaluating the battle.',
         'Due to the frequent accidents that occurred during the C7 Probes\' exploration missions, an engineer tries to install multiple modules on a prototype to increase its mission success rate. However, the large number of modules and their intricate connections make it impossible to mass produce. As the C7 models are retired, the prototype is going to be decommissioned as well. But, during the CUB program, its outstanding damage output and scouting capability caught tester\'s attention, who then named it "Seeshell".',
         'Seeshell\'s appearance is the best demonstration of its abilities.\nEverything it sees and records during an ocean exploration is gathered inside its "shell."\nEvery time it extracts those valuable data, researchers are astonished by the mysteries of the deep sea contained in its pearl.\nIt has been recording, watching, and gathering those scattered fragments to create these pearls to help study the ocean.Now, it will observe the battlefield and help its warriors shine.'
      ],
      background: [],
      activeSkills: {
         physical: [
            {
               name: 'Grenade Carnivale: Physical',
               image: '/pets/seeshell/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Physical Area DMG.'
            },
            {
               name: 'Rapid Quartet: Physical',
               image: '/pets/seeshell/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Physical Area DMG in total.'
            },
         ],
         ice: [
            {
               name: 'Grenade Carnivale: Ice',
               image: '/pets/seeshell/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Ice Area DMG and slows the enemies it hits. Hitting an enemy again will renew the slow duration. The grenades also cause Data Attack.'
            },
            {
               name: 'Rapid Quartet: Ice',
               image: '/pets/seeshell/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Ice Area DMG in total and slowing the enemies hit for 5s. Also causes Data Attack'
            },
         ],
         lightning: [
            {
               name: 'Grenade Carnivale: Lightning',
               image: '/pets/seeshell/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Lightning Area DMG.'
            },
            {
               name: 'Rapid Quartet: Lightning',
               image: '/pets/seeshell/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Lightning Area DMG in total.'
            },
         ],
         fire: [
            {
               name: 'Grenade Carnivale: Fire',
               image: '/pets/seeshell/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Fire Area DMG.'
            },
            {
               name: 'Rapid Quartet: Fire',
               image: '/pets/seeshell/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Fire Area DMG in total.'
            },
         ],
         dark: [
            {
               name: 'Grenade Carnivale: Dark',
               image: '/pets/seeshell/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Dark Area DMG.'
            },
            {
               name: 'Rapid Quartet: Dark',
               image: '/pets/seeshell/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Dark Area DMG in total.'
            },
         ],
         void: [
            {
               name: 'Grenade Carnivale: Void',
               image: '/pets/seeshell/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Void Area DMG.'
            },
            {
               name: 'Rapid Quartet: Void',
               image: '/pets/seeshell/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Void area DMG in total.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Modified Barrel',
            image: '/pets/seeshell/ps1.png',
            describe: 'Seeshell\'s active skill deals 60% more DMG.'
         },
         {
            name: 'Fire Support',
            image: '/pets/seeshell/ps2.png',
            describe: 'Increases the carrier\'s Attack by 60.'
         },
         {
            name: 'Saturation Bombing',
            image: '/pets/seeshell/ps3.png',
            describe: 'Each time the carrier makes a 3-ping, their Extra DMG Bonus increases by 4% for 5s, stacking up to 3 times.'
         },
         {
            name: 'LN2 Dispersion',
            image: '/pets/seeshell/ps4.png',
            describe: 'Increases the carrier\'s Ice DMG by 10%.'
         },
         {
            name: 'Seamless Reload',
            image: '/pets/seeshell/ps5.png',
            describe: 'After the carrier obtains 8 basic Signal Orbs, they will gain one extra basic Orb the next time they gain a basic Orb. 1.4s cooldown.'
         },
      ]
   },
   // Noctua
   {
      id: 4,
      image: '/pets/noctua/avatar.png',
      name: 'Noctua',
      type: 'Super Armor',
      element: 'Dark',
      signature: '',
      rank: 'A',
      story: [
         'Noctua is one of the first high-precision Support Units developed by Babylonia to enhance the connection between Constructs. Its looks and behavior patterns reflect the characteristics of owls. It can provide a wide range of support in battle by triggering the radioactive structure mounted on the wings. The multi-directional camera is also helpful for reconnaissance and investigation.',
         'Noctua is extremely sensitive to hot environments due to an issue with its cooling system during the early development stages. In addition to constantly chasing and harassing researchers who possess coolants, Noctua will continuously flap its wings in an attempt to extinguish any open flames it encounters. However, the airflow it creates will more likely fan the flames. This issue has been partially resolved in later adjustments, but Noctua tends to continue such behavior when not connected to a Construct. Be sure to keep Noctua from open flames when it is not attached to any Constructs.',
         'To keep up with its frequent activities, the Noctua unit comes with highly effective self-repairing components. When transformed, it often spins its head around in order to mend and lubricate its joints. As a result, Noctua often serves as the children\'s plaything on Babylonia.The WGAA encourages it and expresses interest in developing more CUBs with similar features, while the Science Council refuses to comment.'
      ],
      background: [],
      activeSkills: {
         physical: [
            {
               name: 'Radiative Shock - Barrier: Physical',
               image: '/pets/noctua/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Physical DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Physical',
               image: '/pets/noctua/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Physical DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
         ice: [
            {
               name: 'Radiative Shock - Barrier: Ice',
               image: '/pets/noctua/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Ice DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Ice',
               image: '/pets/noctua/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Ice DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
         lightning: [
            {
               name: 'Radiative Shock - Barrier: Lightning',
               image: '/pets/noctua/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Lightning DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Lightning',
               image: '/pets/noctua/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Lightning DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
         fire: [
            {
               name: 'Radiative Shock - Barrier: Fire',
               image: '/pets/noctua/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Fire DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Fire',
               image: '/pets/noctua/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Fire DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
         dark: [
            {
               name: 'Radiative Shock - Barrier: Dark',
               image: '/pets/noctua/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Dark DMG to the enemies nearby while leaving a mark on them that deals 200% Dark DMG upon detonation. While this skill is being cast, Noctua grants the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'s Attack for 10s. Also causes Data Attack.'
            },
            {
               name: 'Radiative Shock - Field: Dark',
               image: '/pets/noctua/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Dark DMG to the enemies nearby while leaving a mark on them that deals 200% Dark DMG upon detonation. While this skill is being cast, Noctua grants the character Super Armor for 5s. Also causes Data Attack.'
            },
         ],
         void: [
            {
               name: 'Radiative Shock - Barrier: Void',
               image: '/pets/noctua/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Void DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Void',
               image: '/pets/noctua/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Void DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Modified Barrel',
            image: '/pets/noctua/ps1.png',
            describe: 'Noctua\'s active skill deals 60% more damage.'
         },
         {
            name: 'Resonance',
            image: '/pets/noctua/ps2.png',
            describe: 'Increases the carrier\'s Attack by 60.'
         },
         {
            name: 'Collisional Jump',
            image: '/pets/noctua/ps3.png',
            describe: 'Each time the carrier casts a 3-Ping skill, their Extra DMG Bonus increases by 3% for 5s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Paramagnetic Resonance',
            image: '/pets/noctua/ps4.png',
            describe: 'Increases the carrier\'s Dark DMG by 10%.'
         },
         {
            name: 'Radiative Jump',
            image: '/pets/noctua/ps5.png',
            describe: 'Each time the carrier hits the enemy with a Basic Attack, their ATK increases by 20 for 5s, stacking up to 4 times. Once this effect reaches max stack, triggering it again will renew its duration.'
         },
      ]
   },
   // Yuan Ye
   {
      id: 5,
      image: '/pets/yuan-ye/avatar.png',
      name: 'Yuan Ye',
      type: 'Stun',
      element: 'Fire',
      signature: '',
      rank: 'A',
      story: [
         'Yuan Ye is the prototype of the Combat Unit Booster project. Its modularized appearance mimics traits of cloven-hooved mammals.\nAsimov claimed that the personal taste of its designer, Leonie of the WGAA, was reflected in the final product.\nOnce enough combat data is collected, it develops a combat form that uses high - speed ram and combo hits to interrupt the enemy\'s channeling and assist the Constructs.',
         'Yuan Ye reacts to fluttering fabrics. Experiments show that it responds to short-wavelength colors particularly well, a feature likely designed for detecting the Corrupted. Taunting this unit with colored fabrics is thereby forbidden.\nMaintenance tips: keep the unit in hibernation when not in combat. External modules are under development. Unauthorized modification is not allowed.That should be all for now.',
         'Additional maintenance tips: keep it in hibernation. I repeat, keep it in hibernation. As a prototype, it needs further adjustments. Excessive operations and modifications may break the unit, so stop playing with it.\nSecond warning: I\'ll say this one last time. No unauthorized modification is allowed! Don\'t ask!\nThird warning: Never mind... Just restore it to the default setup for combat.'
      ],
      background: [],
      activeSkills: {
         physical: [
            {
               name: 'Loaded Charge: Physical',
               image: '/pets/yuan-ye/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Physical DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Physical DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Physical',
               image: '/pets/yuan-ye/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Physical DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Physical DMG and stun the enemy for 5s.'
            },
         ],
         ice: [
            {
               name: 'Loaded Charge: Ice',
               image: '/pets/yuan-ye/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Ice DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Ice DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Ice',
               image: '/pets/yuan-ye/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Ice DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Ice DMG and stun the enemy for 5s.'
            },
         ],
         lightning: [
            {
               name: 'Loaded Charge: Lightning',
               image: '/pets/yuan-ye/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Lightning DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Lightning DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Lightning',
               image: '/pets/yuan-ye/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Lightning DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Lightning DMG and stun the enemy for 5s.'
            },
         ],
         fire: [
            {
               name: 'Loaded Charge: Fire',
               image: '/pets/yuan-ye/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Fire DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Fire DMG and stun the enemy for 2s. Also causes Data Attack.'
            },
            {
               name: 'Feint Attack: Fire',
               image: '/pets/yuan-ye/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% DMG and stun the enemy for 5s. Also causes Data Attack.'
            },
         ],
         dark: [
            {
               name: 'Loaded Charge: Dark',
               image: '/pets/yuan-ye/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Dark DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Dark DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Dark',
               image: '/pets/yuan-ye/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Dark DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Dark DMG and stun the enemy for 5s.'
            },
         ],
         void: [
            {
               name: 'Loaded Charge: Void',
               image: '/pets/yuan-ye/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Void DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Void DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Void',
               image: '/pets/yuan-ye/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Void DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Void DMG and stun the enemy for 5s.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Preparation',
            image: '/pets/yuan-ye/ps1.png',
            describe: 'Yuan Ye\'s active skill deals 60% more DMG.'
         },
         {
            name: 'Stacked Calculation',
            image: '/pets/yuan-ye/ps2.png',
            describe: 'Increases the attack of Yuan Ye\'s carrier by 60.'
         },
         {
            name: 'Relentless',
            image: '/pets/yuan-ye/ps3.png',
            describe: 'After Yuan Ye casts a skill, its carrier\'s ATK increases by 25. Stacks up to 3 times.'
         },
         {
            name: 'Combustion',
            image: '/pets/yuan-ye/ps4.png',
            describe: 'Yuan Ye\'s carrier\'s Fire DMG increases by 10%.'
         },
         {
            name: 'Cunning',
            image: '/pets/yuan-ye/ps5.png',
            describe: 'Enemies stunned by Yuan Ye take 10% Extra DMG.'
         },
      ]
   },
   // Toniris
   {
      id: 6,
      image: '/pets/toniris/avatar.png',
      name: 'Toniris',
      type: 'Pull, Charge',
      element: 'Lightning',
      signature: 'Biance Veritas',
      rank: 'S',
      story: [
         'Toniris, one of the first batch of high-precision bionic units developed for CUB experiment projects, shows a high degree of compatibility with Bianca: Veritas. Its prototype was a bionic bird made in the Golden Age to protect the environment, whose main feature was to detect climate and environmental changes. With the Science Council\'s modification, Toniris is capable of more detailed detection.The particle devices on its wings can also produce a large amount of electrical power.',
         'Compared with other CUBs, Toniris has stricter standards when identifying allies and only shows closeness toward individuals who have been in contact for a long time. However, Toniris also demonstrates a certain degree of aggression toward these individuals. It often lightly tears their shirt corner or pulls their hair (note: "light" in terms of CUB horsepower.) After multiple incidents, contact between non-essential personnel and Toniris has become restricted, although some are sad about the constraints.',
         'In the early stages of the experiment, Toniris made loud birdcalls from its throat, which were widely mistaken for thundering in Babylonia.\nInvestigation reveals that it was a design flaw but a unique feature reserved by the WGAA.\n"Isn\'t it cool that it can scream directly from the throat instead of through a loudspeaker?"\nSaid the anonymous president of WGAA.\nHowever, this feature had to remain turned off for the official model due to protests from the field testers.'
      ],
      background: [
         'The name "Toniris" represents "thunder in the rain," with the imagery of a lone bionic crane flying over the vast plain, followed by thunderclouds.\nLegend says it guides the lightning.',
         'Toniris also represents the rainbow after the thunderstorm.\nIts sliver wings bring the thunder as well as the rainbow.\nAfter a flash storm, the bionic crane stops at the rainbow and caresses its tail feathers, seemingly claiming the rainbow to be its creation.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Awakening Flash: Physical',
               image: '/pets/toniris/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Toniris charge forward, dealing 1500% Physical DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Physical Area DMG. Also causes Data Attack.'
            },
            {
               name: 'Surging Thunderbolt: Physical',
               image: '/pets/toniris/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After tapping it, Toniris and the carrier will charge forward together, dealing 1500% Physical DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Physical Area DMG. The character is invincible while charging with Toniris. Also causes Data Attack.'
            },
         ],
         ice: [
            {
               name: 'Awakening Flash: Ice',
               image: '/pets/toniris/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Toniris charge forward, dealing 1500% Ice DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Ice Area DMG. Also causes Data Attack.'
            },
            {
               name: 'Surging Thunderbolt: Ice',
               image: '/pets/toniris/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After tapping it, Toniris and the carrier will charge forward together, dealing 1500% Ice DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Ice Area DMG. The character is invincible while charging with Toniris. Also causes Data Attack.'
            },
         ],
         lightning: [
            {
               name: 'Awakening Flash: Lightning',
               image: '/pets/toniris/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Toniris charge forward, dealing 1500% Lightning DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Lightning Area DMG. Also causes Advanced Data Attack.'
            },
            {
               name: 'Surging Thunderbolt: Lightning',
               image: '/pets/toniris/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After tapping it, Toniris and the carrier will charge forward together, dealing 1500% Lightning DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Lightning Area DMG. The character is invincible while charging with Toniris. Also causes Advanced Data Attack'
            },
         ],
         fire: [
            {
               name: 'Awakening Flash: Fire',
               image: '/pets/toniris/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Toniris charge forward, dealing 1500% Fire DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Fire Area DMG. Also causes Data Attack.'
            },
            {
               name: 'Surging Thunderbolt: Fire',
               image: '/pets/toniris/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After tapping it, Toniris and the carrier will charge forward together, dealing 1500% Fire DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Fire Area DMG. The character is invincible while charging with Toniris. Also causes Data Attack.'
            },
         ],
         dark: [
            {
               name: 'Awakening Flash: Dark',
               image: '/pets/toniris/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Toniris charge forward, dealing 1500% Dark DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Dark Area DMG. Also causes Data Attack.'
            },
            {
               name: 'Surging Thunderbolt: Dark',
               image: '/pets/toniris/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After tapping it, Toniris and the carrier will charge forward together, dealing 1500% Dark DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Dark Area DMG. The character is invincible while charging with Toniris. Also causes Data Attack.'
            },
         ],
         void: [
            {
               name: 'Awakening Flash: Void',
               image: '/pets/toniris/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Toniris charge forward, dealing 1500% Void DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Void Area DMG. Also causes Data Attack.'
            },
            {
               name: 'Surging Thunderbolt: Void',
               image: '/pets/toniris/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After tapping it, Toniris and the carrier will charge forward together, dealing 1500% Void DMG and pulling the enemies toward its charging path, while inflicting them with Explosion for 8s. Attacks can detonate the Explosion and cause 600% Void Area DMG. The character is invincible while charging with Toniris. Also causes Data Attack.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Particle Relay',
            image: '/pets/toniris/ps1.png',
            describe: 'Toniris\'s active skill deals 70% more damage.'
         },
         {
            name: 'Matching Electrode',
            image: '/pets/toniris/ps2.png',
            describe: 'Increases the carrier\'s Attack by 100.'
         },
         {
            name: 'Bi-magnetic Stimulation',
            image: '/pets/toniris/ps3.png',
            describe: 'After Toniris casts a skill, its carrier gains 40 Attack, up to 3 stacks.'
         },
         {
            name: 'Voltage Overload',
            image: '/pets/toniris/ps4.png',
            describe: 'Each time the carrier deals Lightning DMG, their Lightning DMG increases by 5% for 8s, stacking up to 2 times. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Thunder Apocalypse',
            image: '/pets/toniris/ps5.png',
            describe: 'The skill damage of Bianca: Veritas\' Critical Moment increases by 12.5%.'
         },
      ]
   },
   // Frost Oath
   {
      id: 7,
      image: '/pets/frost-oath/avatar.png',
      name: 'Frost Oath',
      type: 'Crowd Control, Protection',
      element: 'Physical',
      signature: 'Rossetta Rigor',
      rank: 'S',
      story: [
         'Frost Oath, a new CUB adapted by the Science Council. Its prototype is based on the centaur module, "Lindwyrm", that Rosetta left in Babylonia. The humanoid hybrid frame with its severe side effects has been modified, making it suitable as a CUB. The birth of Frost Oath also marks a new direction for CUB research.',
         'Compared with other CUBs, Frost Oath has a stronger sense of individuality. Unlike Rosetta, who is rational and restrained, Frost Oath is more wild and unrestrained. It shows stronger enthusiasm in the open wilderness, such as snowfields or woodlands. Frost Oath has a strong sense of identity and belonging to the group, showing no mercy to enemies that violate its territory. It is bound by duty to guard its companions.',
         'Based on the individual wishes of Rosetta and Frost Oath, Rosetta can quickly return to the battlefield in her centaur form. Although the effectiveness isn\'t what it once as, the cognitive load brought by this state has been drastically reduced.Echoing one of the design concepts of CUB, Frost Oath is not a disposable weapon but a long - term companion on the battlefield.'
      ],
      background: [
         'Frost Oath was named by Rosetta at Asimov\'s suggestion.',
         'The appearance of Frost Oath means that the Forest Guard have claimed this land as their own, forming an area of defense that no enemy can penetrate.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Landing Stomp: Physical',
               image: '/pets/frost-oath/physical.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will stomp from above, dealing 750% Physical DMG and applying Rigidness to the target and generate a Snowthorn Forest field, dealing 125% Physical DMG for 4s. Adds Advanced Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
            {
               name: 'Empowered Strike: Physical',
               image: '/pets/frost-oath/physical.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will defend the active character, blocking attacks for 0.3s and stomping the enemy, dealing 500% Physical DMG and 1000% Physical DMG upon a successful block. Applies Rigidness to the target and generate a Snowthorn Forest field, dealing 125% Physical DMG for 8s. Adds Advanced Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
         ],
         ice: [
            {
               name: 'Landing Stomp: Ice',
               image: '/pets/frost-oath/ice.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will stomp from above, dealing 750% Ice DMG and applying Rigidness to the target and generate a Snowthorn Forest field, dealing 125% Ice DMG for 4s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
            {
               name: 'Empowered Strike: Ice',
               image: '/pets/frost-oath/ice.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will defend the active character, blocking attacks for 0.3s and stomping the enemy, dealing 500% Ice DMG and 1000% Ice DMG upon a successful block. Applies Rigidness to the target and generate a Snowthorn Forest field, dealing 125% DMG Ice for 8s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
         ],
         lightning: [
            {
               name: 'Landing Stomp: Lightning',
               image: '/pets/frost-oath/lightning.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will stomp from above, dealing 750% Lightning DMG and applying Rigidness to the target and generate a Snowthorn Forest field, dealing 125% Lightning DMG for 4s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
            {
               name: 'Empowered Strike: Lightning',
               image: '/pets/frost-oath/lightning.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will defend the active character, blocking attacks for 0.3s and stomping the enemy, dealing 500% Lightning DMG and 1000% Lightning DMG upon a successful block. Applies Rigidness to the target and generate a Snowthorn Forest field, dealing 125% DMG Lightning for 8s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
         ],
         fire: [
            {
               name: 'Landing Stomp: Fire',
               image: '/pets/frost-oath/fire.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will stomp from above, dealing 750% Fire DMG and applying Rigidness to the target and generate a Snowthorn Forest field, dealing 125% Fire DMG for 4s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
            {
               name: 'Empowered Strike: Fire',
               image: '/pets/frost-oath/fire.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will defend the active character, blocking attacks for 0.3s and stomping the enemy, dealing 500% Fire DMG and 1000% Fire DMG upon a successful block. Applies Rigidness to the target and generate a Snowthorn Forest field, dealing 125% DMG Fire for 8s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
         ],
         dark: [
            {
               name: 'Landing Stomp: Dark',
               image: '/pets/frost-oath/dark.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will stomp from above, dealing 750% Dark DMG and applying Rigidness to the target and generate a Snowthorn Forest field, dealing 125% Dark DMG for 4s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
            {
               name: 'Empowered Strike: Dark',
               image: '/pets/frost-oath/dark.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will defend the active character, blocking attacks for 0.3s and stomping the enemy, dealing 500% Dark DMG and 1000% Dark DMG upon a successful block. Applies Rigidness to the target and generate a Snowthorn Forest field, dealing 125% DMG Dark for 8s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
         ],
         void: [
            {
               name: 'Landing Stomp: Void',
               image: '/pets/frost-oath/void.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will stomp from above, dealing 750% Void DMG and applying Rigidness to the target and generate a Snowthorn Forest field, dealing 125% Void DMG for 4s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
            {
               name: 'Empowered Strike: Void',
               image: '/pets/frost-oath/void.png',
               describe: 'The CUB button will light up after any 6 basic orbs have been pinged. Frost Oath will defend the active character, blocking attacks for 0.3s and stomping the enemy, dealing 500% Void DMG and 1000% Void DMG upon a successful block. Applies Rigidness to the target and generate a Snowthorn Forest field, dealing 125% DMG Void for 8s. Adds Data ATK. Rigidness: Enemies will be snared for 2s.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Order - Aid',
            image: '/pets/frost-oath/ps1.png',
            describe: 'Frost Oath\'s active skill deals 70% more DMG.'
         },
         {
            name: 'Order - Landing Rain',
            image: '/pets/frost-oath/ps2.png',
            describe: 'Increases the carrier\'s Attack by 100.'
         },
         {
            name: 'Passage Aid',
            image: '/pets/frost-oath/ps3.png',
            describe: 'After Frost Oath casts a skill, its carrier gains 110 ATK for 8s.'
         },
         {
            name: 'Snow Forest Ambush',
            image: '/pets/frost-oath/ps4.png',
            describe: 'Physical DMG dealt by characters in the Snowthorn Forest field increases by 7.5%.'
         },
         {
            name: 'Forest Guard Volley',
            image: '/pets/frost-oath/ps5.png',
            describe: 'Rosetta: Rigor summons the Forest Guard to perform a clustered attack when she charges the Small/Medium Electromagnetic Beam, dealing 100%/100% Physical DMG to enemies in front, and slow down the enemies. Unleashing the Wide-area Electromagnetic Beam will summon the Forest Guard to fire a volley on the target\'s location in a large area, dealing 2000% Physical DMG.'
         },
      ]
   },
   // Nitor
   {
      id: 8,
      image: '/pets/nitor/avatar.png',
      name: 'Nitor',
      type: 'Damage',
      element: 'Fire',
      signature: 'Karenina Ember',
      rank: 'S',
      story: [
         'Karenina once was given a black cat with the same name by Dr. Kalon, who she called "Grandpa" - he wanted Karenina to take care of it so she learned to not always engage in conflicts. She still refuses to admit it, but this unit is probably made in the form of a black cat because of that.',
         'Due to strong resistance from Karenina, Nitor was initially given to other Task Force members for test, but the test had to terminate after receiving many complaints from most of the members. "With all due respect, this thing is way too hot!" "The enemy was approaching, but it just refused to move!" "It bites me! Look at my brand-new hand armor!" In the end, Karenina had no choice but to become its master.',
         'Nitor was buried in ruins in a mission by Corrupted attacks. Karenina thinks it was her fault–does she have to watch it die just like the black cat did? She screams out the name of her old cat, only to see Nitor walk out calmly from the melted ruins. "Thank goodness, you\'re still alive..." Karenina wants to give it a hug, but it scratches her in return. "I knew it! Not cute at all!" She can only complain.'
      ],
      background: [
         'The flames on Nitor\'s body change with its mood.They also get hotter as it continues to engage in battle.',
         'CUB "Nitor" has a high level of autonomy and can often come up with unique ideas that deviate from the standard tactics.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Blazing Blitz: Physical',
               image: '/pets/nitor/physical.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Nitor will rush toward the enemy, attack with continuous swiping and trigger one explosion, dealing 1500% Physical DMG.'
            },
            {
               name: 'Flare Spark: Physical',
               image: '/pets/nitor/physical.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, the character will retreat, while commanding Nitor to attack nearby enemies with continuous swiping and trigger one explosion, dealing 1500% Physical DMG.'
            },
         ],
         ice: [
            {
               name: 'Blazing Blitz: Ice',
               image: '/pets/nitor/ice.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Nitor will rush toward the enemy, attack with continuous swiping and trigger one explosion, dealing 1500% Ice DMG.'
            },
            {
               name: 'Flare Spark: Ice',
               image: '/pets/nitor/ice.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, the character will retreat, while commanding Nitor to attack nearby enemies with continuous swiping and trigger one explosion, dealing 1500% Ice DMG.'
            },
         ],
         lightning: [
            {
               name: 'Blazing Blitz: Lightning',
               image: '/pets/nitor/lightning.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Nitor will rush toward the enemy, attack with continuous swiping and trigger one explosion, dealing 1500% Lightning DMG.'
            },
            {
               name: 'Flare Spark: Lightning',
               image: '/pets/nitor/lightning.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, the character will retreat, while commanding Nitor to attack nearby enemies with continuous swiping and trigger one explosion, dealing 1500% Lightning DMG.'
            },
         ],
         fire: [
            {
               name: 'Blazing Blitz: Fire',
               image: '/pets/nitor/fire.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Nitor will rush toward the enemy, attack with continuous swiping and trigger one explosion, dealing 1500% Fire DMG. Also causes Data Attack.'
            },
            {
               name: 'Flare Spark: Fire',
               image: '/pets/nitor/fire.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, the character will retreat, while commanding Nitor to attack nearby enemies with continuous swiping and trigger one explosion, dealing 1500% Fire DMG. Also causes Data Attack.'
            },
         ],
         dark: [
            {
               name: 'Blazing Blitz: Dark',
               image: '/pets/nitor/dark.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Nitor will rush toward the enemy, attack with continuous swiping and trigger one explosion, dealing 1500% Dark DMG.'
            },
            {
               name: 'Flare Spark: Dark',
               image: '/pets/nitor/dark.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, the character will retreat, while commanding Nitor to attack nearby enemies with continuous swiping and trigger one explosion, dealing 1500% Dark DMG.'
            },
         ],
         void: [
            {
               name: 'Blazing Blitz: Void',
               image: '/pets/nitor/void.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Nitor will rush toward the enemy, attack with continuous swiping and trigger one explosion, dealing 1500% Void DMG.'
            },
            {
               name: 'Flare Spark: Void',
               image: '/pets/nitor/void.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, the character will retreat, while commanding Nitor to attack nearby enemies with continuous swiping and trigger one explosion, dealing 1500% Void DMG.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Blast Booster',
            image: '/pets/nitor/ps1.png',
            describe: 'Nitor\'s Active Skill DMG increases by 70%.'
         },
         {
            name: 'Fighting Spirit',
            image: '/pets/nitor/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Heatwave',
            image: '/pets/nitor/ps3.png',
            describe: 'After Nitor casts a skill, its carrier gains 40 ATK, up to 3 stacks.'
         },
         {
            name: 'Rising Inferno',
            image: '/pets/nitor/ps4.png',
            describe: 'Each time the carrier deals Fire DMG, their Fire DMG increases by 5% for 8s, stacking up to 2 times. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Pyro Resonance',
            image: '/pets/nitor/ps5.png',
            describe: 'When Karenina: Ember is in Heat Enhanced State, Extra DMG increases by 30%. When the Drone Support\'s laser - shooting drone is on the field, Flare Spark / Blazing Blitz will trigger extra laser shots, dealing 1500 % Fire DMG.'
         },
      ]
   },
   // Boreas
   {
      id: 9,
      image: '/pets/boreas/avatar.png',
      name: 'Boreas',
      type: 'Charge',
      element: 'Ice',
      signature: 'Chrome Glory',
      rank: 'S',
      story: [
         'Boreas, an eagle-shaped Combat Unit Booster developed by the Science Council with bionic technology based on Cosmos Industries\' military scout aircraft with the aircraft\'s core technology recycled. After multiple combats and adjustments, it has become highly compatible with Chrome: Glory. It is now ready to be used on the battlefield as the first CUB fully compatible with specialized frames.',
         'Boreas features a scout module that can fast analyze and mark the weak points of enemies. With its external optical camouflage unit that can make it perfectly blend in with the surroundings, it is capable of scouting and firing correction over a long period of time and provides intel to support the operations of the scouts. Boreas stays hidden up high most of the time and will only come down when Chrome signals it to do so. It will flap its wings to land quietly on his shoulder and touch his fingertip with its beak.',
         'Boreas always observes and records everything on the battlefield calmly just like a sharp arrow that is ready to be shot at any minute. With its support, your attacks will be swift and accurate like a piercing cold wind. But Boreas in its storage form is easygoing, despite his fierce look. "It won\'t get mad even if you pet its head repetitively. However, this could cause low- temperature damage to the coating on your hand, " says the tester in charge of maintenance.\n"But why don\'t you stop petting it?"\nSeeing this, Boreas folds its wings as it has already become used to similar situations.'
      ],
      background: [
         'A mechanical eagle flaps its broad wings and flies past the battlefield, gathering all the image intel and data of the enemies before they notice.',
         '"Boreas" is the experimental designation of the new Combat Unit Boosters. At the suggestion of an Administrative Officer who participated in the project evaluation, the name has been used as the frame name of this CUB.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Azure Blast: Physical',
               image: '/pets/boreas/physical.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy to deal 1500% Physical DMG.'
            },
            {
               name: 'Frigid Wings: Physical',
               image: '/pets/boreas/physical.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy along with the carrier to deal 1500% Physical DMG.'
            },
         ],
         ice: [
            {
               name: 'Azure Blast: Ice',
               image: '/pets/boreas/ice.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy to deal 750% Ice DMG and apply a Weakness Mark on the target that increases the Extra DMG Bonus by 3% for 8s upon taking Ice DMG. Triggering this effect again will renew its duration.'
            },
            {
               name: 'Frigid Wings: Ice',
               image: '/pets/boreas/ice.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy along with the carrier to deal 750% Ice DMG and apply a Weakness Mark on the target that increases the Extra DMG Bonus by 3% for 8s upon taking Ice DMG. Triggering this effect again will renew its duration.'
            },
         ],
         lightning: [
            {
               name: 'Azure Blast: Lightning',
               image: '/pets/boreas/lightning.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy to deal 1500% Lightning DMG.'
            },
            {
               name: 'Frigid Wings: Lightning',
               image: '/pets/boreas/lightning.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy along with the carrier to deal 1500% Lightning DMG.'
            },
         ],
         fire: [
            {
               name: 'Azure Blast: Fire',
               image: '/pets/boreas/fire.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy to deal 1500% Fire DMG.'
            },
            {
               name: 'Frigid Wings: Fire',
               image: '/pets/boreas/fire.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy along with the carrier to deal 1500% Fire DMG.'
            },
         ],
         dark: [
            {
               name: 'Azure Blast: Dark',
               image: '/pets/boreas/dark.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy to deal 1500% Dark DMG.'
            },
            {
               name: 'Frigid Wings: Dark',
               image: '/pets/boreas/dark.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy along with the carrier to deal 1500% Dark DMG.'
            },
         ],
         void: [
            {
               name: 'Azure Blast: Void',
               image: '/pets/boreas/void.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy to deal 1500% Void DMG.'
            },
            {
               name: 'Frigid Wings: Void',
               image: '/pets/boreas/void.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Boreas will fly toward the enemy along with the carrier to deal 1500% Void DMG.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Frosty Howl',
            image: '/pets/boreas/ps1.png',
            describe: 'Boreas\'s Active Skills deal 70% more DMG.'
         },
         {
            name: 'Arctic Knowledge',
            image: '/pets/boreas/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Hypercharge Cooling',
            image: '/pets/boreas/ps3.png',
            describe: 'Each time Boreas casts an active skill, the carrier\'s ATK increases by 5% for 8s.Triggering this effect again will renew its duration.'
         },
         {
            name: 'Frost Emblem',
            image: '/pets/boreas/ps4.png',
            describe: 'Increases the carrier\'s Ice DMG by 10%.'
         },
         {
            name: 'Glorious Hawk',
            image: '/pets/boreas/ps5.png',
            describe: 'Upon activating Frost Spirit, Chrome: Glory receives Boreas\'s enhancement, gaining 30% more Basic Attack DMG.Boreas will also continuously create frost hawks that fly toward the enemy for 8s, dealing Ice DMG equal to 500% of Chrome: Glory\'s ATK. When Condensed Frost is triggered, Boreas will also cast Azure Blast. Cooldown: 2.5s.'
         },
      ]
   },
   // Jet Jaeger
   {
      id: 10,
      image: '/pets/jet-jaeger/avatar.png',
      name: 'Jet Jaeger',
      type: 'Slice',
      element: 'Fire',
      signature: 'Nanami Starfarer',
      rank: 'S',
      story: [
         'One theory about the origin of the CUB Jet Jaeger goes like this: Its prototype was a small machine pet of Nanami, who wanted her little cat friend to grow up and become stronger, so Nanami designed and created her "big cat"-the tiger CUB Jet Jaeger. Compared to the "cub" version, the "mature" version is more powerful in battle.',
         'Jet Jaeger seems to be maverick and mysterious just like its designer. Sometimes it will wander in the non-battle area despite its big size. As big machines could cause trouble to the daily operation of certain departments and intimidate employees who are not strong enough mentally, Babylonia has specially carried out an order to limit the occasions where large machines are allowed to enter. However, according to an informed source, Jet Jaeger will be quiet and under control if you can work up your courage and stroke its head and tail. "Sounds easy, but if you look into its scary eyes... Um...”',
         'The battlefield is Jet Jaeger\'s playground.Its high - speed impacts and excellent ability to slash make it a regular unit in the front row and a sharp axe that can break the enemy apart.However, there are many cases where Jet Jaeger ran out of the signal detection range in the middle of a battle, though it returned to the base without a scratch.\n"It won\'t stop and wait for you! Stay close to it!"\nThis is what a captain will tell their subordinates when they use Jet Jaeger to fight.'
      ],
      background: [
         'Jet Jaeger is a large CUB that has been classified as "mountable" in its written assessment, but no one really wants to do so.',
         'We don\'t know whether it is due to its original program, but Jet Jaeger loves to stand by in dark, narrow places.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Earthshattering Driller: Physical',
               image: '/pets/jet-jaeger/physical.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target, pulling in surrounding enemies and performing a spinning slash that deals 1500% Physical DMG.'
            },
            {
               name: 'Flaming Slash: Physical',
               image: '/pets/jet-jaeger/physical.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target and perform a spinning slash, dealing 1000% Physical DMG and inflicting a laceration that deals Physical DMG equal to 100% of Jet Jaeger\'s ATK every second for 8s. (Triggering this effect again will renew its duration.)'
            },
         ],
         ice: [
            {
               name: 'Earthshattering Driller: Ice',
               image: '/pets/jet-jaeger/ice.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target, pulling in surrounding enemies and performing a spinning slash that deals 1500% Ice DMG.'
            },
            {
               name: 'Flaming Slash: Ice',
               image: '/pets/jet-jaeger/ice.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target and perform a spinning slash, dealing 1000% Ice DMG and inflicting a laceration that deals Ice DMG equal to 100% of Jet Jaeger\'s ATK every second for 8s. (Triggering this effect again will renew its duration.)'
            },
         ],
         lightning: [
            {
               name: 'Earthshattering Driller: Lightning',
               image: '/pets/jet-jaeger/lightning.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target, pulling in surrounding enemies and performing a spinning slash that deals 1500% Lightning DMG.'
            },
            {
               name: 'Flaming Slash: Lightning',
               image: '/pets/jet-jaeger/lightning.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target and perform a spinning slash, dealing 1000% Lightning DMG and inflicting a laceration that deals Lightning DMG equal to 100% of Jet Jaeger\'s ATK every second for 8s. (Triggering this effect again will renew its duration.)'
            },
         ],
         fire: [
            {
               name: 'Earthshattering Driller: Fire',
               image: '/pets/jet-jaeger/fire.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target, pulling in surrounding enemies and performing a spinning slash that deals 1500% Fire DMG. If Nanami: Starfarer triggers branch attacks during its spinning slash, it will launch a claw attack to deal 250% Fire DMG.'
            },
            {
               name: 'Flaming Slash: Fire',
               image: '/pets/jet-jaeger/fire.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target and perform a spinning slash, dealing 1000% Fire DMG and inflicting a laceration that deals Fire DMG equal to 100% of Jet Jaeger\'s ATK every second for 8s. (Triggering this effect again will renew its duration.) If Nanami: Starfarer triggers branch attacks during its spinning slash it will launch a claw attack to deal 600% Fire DMG and trigger the laceration to deal all of its DMG at once.'
            },
         ],
         dark: [
            {
               name: 'Earthshattering Driller: Dark',
               image: '/pets/jet-jaeger/dark.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target, pulling in surrounding enemies and performing a spinning slash that deals 1500% Dark DMG.'
            },
            {
               name: 'Flaming Slash: Dark',
               image: '/pets/jet-jaeger/dark.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target and perform a spinning slash, dealing 1000% Dark DMG and inflicting a laceration that deals Dark DMG equal to 100% of Jet Jaeger\'s ATK every second for 8s. (Triggering this effect again will renew its duration.)'
            },
         ],
         void: [
            {
               name: 'Earthshattering Driller: Void',
               image: '/pets/jet-jaeger/void.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target, pulling in surrounding enemies and performing a spinning slash that deals 1500% Void DMG.'
            },
            {
               name: 'Flaming Slash: Void',
               image: '/pets/jet-jaeger/void.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Jet Jaeger will charge toward the target and perform a spinning slash, dealing 1000% Void DMG and inflicting a laceration that deals Void DMG equal to 100% of Jet Jaeger\'s ATK every second for 8s. (Triggering this effect again will renew its duration.)'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Champion\'s Battlecry',
            image: '/pets/jet-jaeger/ps1.png',
            describe: 'Jet Jaeger\'s Active Skills deal 70% more DMG.'
         },
         {
            name: 'Molten Fangs',
            image: '/pets/jet-jaeger/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Blazing Wildfire',
            image: '/pets/jet-jaeger/ps3.png',
            describe: 'Each time Jet Jaeger casts an Active Skill, the carrier\'s ATK increases by 5% for 8s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Breaching Blaster',
            image: '/pets/jet-jaeger/ps4.png',
            describe: 'Increases the carrier\'s Fire DMG by 10%.'
         },
         {
            name: 'Firestar\'s Shadowguard',
            image: '/pets/jet-jaeger/ps5.png',
            describe: 'Jet Jaeger fires homing lasers alongside Nanami: Starfarer when she enters Slide Mode, dealing 50% Fire DMG. Fire DMG Bonus will increase by 5% during "Thunderer" Mode. Jet Jaeger will cast Earthshattering Driller/Flaming Slash during "Bzzz" Mode, dealing 500% Fire DMG.'
         },
      ]
   },
   // Moonhopper
   {
      id: 11,
      image: '/pets/moonhopper/avatar.png',
      name: 'Moonhopper',
      type: 'Control',
      element: 'Dark',
      signature: 'Karenina Scire',
      rank: 'S',
      story: [
         'Moonhopper is the "quietest" CUB, not because the animal it was inspired by rarely made sounds, but because audio devices are redundant in space combat. Despite its low-key sound profile, when it expands its body and creates a force field, it can easily become everyone\'s focus on the battlefield.',
         'Moonhopper\'s long ears are a pair of enhanced long - distance signal interaction devices that further strengthen control and communication stability in space missions.Therefore, they were definitely not designed to be cute or for patting.The reason for its rabbit- like appearance is that in certain myths and folktales, rabbits and the Moon have always been linked together.They are a perfect match in every human\'s heart.',
         'Moonhopper was given to Karenina on behalf of the Engineering Force by Teddy to accompany her on her mission to the Moon. She thought Karenina was going to hate it at first, but Karenina took it without making a fuss.\nBut when she saw Karenina with it again, she was surprised to see that Karenina had completely modified its face.\n"I didn\'t know CUBs could be made to look like their owner. What a scientific miracle."\n"It\'s more befitting for it to help me in battle!" Karenina\'s face showed the same expression as it did.'
      ],
      background: [
         'Moonhopper has a bad temper. If it stomps its feet, stay away! Fortunately, it doesn\'t bite...',
         'Supposedly, the position of a rabbit\'s ears can be used to determine its mood.However, that doesn\'t apply to Moonhopper. It\'s never been in a bad mood.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Supergravity Eclipse: Physical',
               image: '/pets/moonhopper/physical.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Physical DMG, and creating an Anti-gravity Field that deals 100% Physical DMG to all enemies inside every 0.5s for 4s. Enemies inside the Anti-gravity field will be slowed down and unable to use their skills.'
            },
            {
               name: 'Super Moonfall Field: Physical',
               image: '/pets/moonhopper/physical.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Physical DMG, and creating an Anti-gravity Field that deals 500% Physical DMG upon its creation. The Anti-gravity Field lasts 2s, in which enemies will be slowed down and unable to use their skills.'
            },
         ],
         ice: [
            {
               name: 'Supergravity Eclipse: Ice',
               image: '/pets/moonhopper/ice.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Ice DMG, and creating an Anti-gravity Field that deals 100% Ice DMG to all enemies inside every 0.5s for 4s. Enemies inside the Anti-gravity field will be slowed down and unable to use their skills.'
            },
            {
               name: 'Super Moonfall Field: Ice',
               image: '/pets/moonhopper/ice.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Ice DMG, and creating an Anti-gravity Field that deals 500% Ice DMG upon its creation. The Anti-gravity Field lasts 2s, in which enemies will be slowed down and unable to use their skills.'
            },
         ],
         lightning: [
            {
               name: 'Supergravity Eclipse: Lightning',
               image: '/pets/moonhopper/lightning.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Lightning DMG, and creating an Anti-gravity Field that deals 100% Lightning DMG to all enemies inside every 0.5s for 4s. Enemies inside the Anti-gravity field will be slowed down and unable to use their skills.'
            },
            {
               name: 'Super Moonfall Field: Lightning',
               image: '/pets/moonhopper/lightning.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Lightning DMG, and creating an Anti-gravity Field that deals 500% Lightning DMG upon its creation. The Anti-gravity Field lasts 2s, in which enemies will be slowed down and unable to use their skills.'
            },
         ],
         fire: [
            {
               name: 'Supergravity Eclipse: Fire',
               image: '/pets/moonhopper/fire.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Fire DMG, and creating an Anti-gravity Field that deals 100% Fire DMG to all enemies inside every 0.5s for 4s. Enemies inside the Anti-gravity field will be slowed down and unable to use their skills.'
            },
            {
               name: 'Super Moonfall Field: Fire',
               image: '/pets/moonhopper/fire.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Fire DMG, and creating an Anti-gravity Field that deals 500% Fire DMG upon its creation. The Anti-gravity Field lasts 2s, in which enemies will be slowed down and unable to use their skills.'
            },
         ],
         dark: [
            {
               name: 'Supergravity Eclipse: Dark',
               image: '/pets/moonhopper/dark.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Dark DMG, and creating an Anti-gravity Field that deals 100% Dark DMG to all enemies inside every 0.5s for 4s. Enemies inside the Anti-gravity field will be slowed down and unable to use their skills.'
            },
            {
               name: 'Super Moonfall Field: Dark',
               image: '/pets/moonhopper/dark.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Dark DMG, and creating an Anti-gravity Field that deals 500% Dark DMG upon its creation. The Anti-gravity Field lasts 2s, in which enemies will be slowed down and unable to use their skills.'
            },
         ],
         void: [
            {
               name: 'Supergravity Eclipse: Void',
               image: '/pets/moonhopper/void.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Void DMG, and creating an Anti-gravity Field that deals 100% Void DMG to all enemies inside every 0.5s for 4s. Enemies inside the Anti-gravity field will be slowed down and unable to use their skills.'
            },
            {
               name: 'Super Moonfall Field: Void',
               image: '/pets/moonhopper/void.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Moonhopper will teleport into the air and smash to the ground, interrupting enemy skills, dealing 1000% Void DMG, and creating an Anti-gravity Field that deals 500% Void DMG upon its creation. The Anti-gravity Field lasts 2s, in which enemies will be slowed down and unable to use their skills.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'High Jumping',
            image: '/pets/moonhopper/ps1.png',
            describe: 'Moonhopper\'s Active Skills deal 70% more DMG.'
         },
         {
            name: 'Foot-stamping',
            image: '/pets/moonhopper/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Smashing',
            image: '/pets/moonhopper/ps3.png',
            describe: 'Each time Moonhopper casts an Active Skill, the Extra DMG Bonus of the carrier\'s Signature Move increases by 5%. Can be stacked up to 3 times.'
         },
         {
            name: 'Paw-licking',
            image: '/pets/moonhopper/ps4.png',
            describe: 'Increases the carrier\'s Dark DMG by 10%.'
         },
         {
            name: 'Bye-bye Home Run',
            image: '/pets/moonhopper/ps5.png',
            describe: 'When Karenina: Scire performs her Signature Move while carrying Moonhopper, Moonhopper will be swung to the enemy, increasing the Signature Move\'s Base DMG Bonus by 100%. While Karenina: Scire is charging up by holding the Basic Attack button, Moonhopper will pull in surrounding enemies and unleash Super Moonfall Field.'
         },
      ]
   },
   // Shimmer
   {
      id: 12,
      image: '/pets/shimmer/avatar.png',
      name: 'Shimmer',
      type: 'Pull, Charge',
      element: 'Physical',
      signature: 'Bianca Stigmata',
      rank: 'S',
      story: [
         'CUB Shimmer was originally designed by Kurono to be a mass-produced carrier that can carry the aero foot pedals made for individual combats. However, the model, after being made bigger, showed poor stability and lift efficiency in the environment with gravity, which made it unsuitable to be pushed into mass production. Only the original small prototype was kept and modified by the Science Council into a specialized CUB with high-speed assault ability and strong firepower which can move freely after firing a shot.',
         'Shimmer\'s coating is extremely sound-proof and wave-proof, allowing it to fly at a high speed and approach the enemy almost without being noticed. It loves to creep on people and scare them out of a sudden. However, whenever it tries to play the same trick on Bianca, it will always be caught red-handed and touched gently by her, which of course doesn\'t stop it from doing this for it has already become a secret game between them.',
         'At first, Bianca thought the CUB would increase the chance of being exposed in the mission, after all, as a member of the Purifying Force, she always needs to sneak into somewhere alone. But during her last meeting with Chiko, the Vice-Captain of the Purifying Force, Chiko wanted her to accept the council\'s advice. Maybe it was because of Chiko\'s suggestion. Maybe she had some kind of hunch long ago... Shimmer was eventually produced. It has become Bianca\'s exclusive CUB companion after she switched to Stigmata.'
      ],
      background: [
         'Although it looks a bit intimidating in its extended form, Shimmer is actually very lively and gentle before its owner. Its mood is shown clearly on its display panel.',
         'The project owner in charge of the development of CUB Shimmer would like to remind every user to keep it busy, otherwise, they might suffer from unwanted loss of property and personal injury, and the developers will not be held responsible if any of the abovementioned situations appends.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Swirl Blast: Physical',
               image: '/pets/shimmer/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% Physical DMG and pull in the enemies with a beam to inflict 500% Physical DMG on enemies within range using its laser cannon.'
            },
            {
               name: 'Gliding Barrage: Physical',
               image: '/pets/shimmer/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% DMG Physical and shoot 3 laser beams, each dealing 500% Physical DMG to enemies within range.'
            },
         ],
         ice: [
            {
               name: 'Swirl Blast: Ice',
               image: '/pets/shimmer/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% Ice DMG and pull in the enemies with a beam to inflict 500% Ice DMG on enemies within range using its laser cannon.'
            },
            {
               name: 'Gliding Barrage: Ice',
               image: '/pets/shimmer/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% DMG Ice and shoot 3 laser beams, each dealing 500% Ice DMG to enemies within range.'
            },
         ],
         lightning: [
            {
               name: 'Swirl Blast: Lightning',
               image: '/pets/shimmer/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% Lightning DMG and pull in the enemies with a beam to inflict 500% Lightning DMG on enemies within range using its laser cannon.'
            },
            {
               name: 'Gliding Barrage: Lightning',
               image: '/pets/shimmer/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% DMG Lightning and shoot 3 laser beams, each dealing 500% Lightning DMG to enemies within range.'
            },
         ],
         fire: [
            {
               name: 'Swirl Blast: Fire',
               image: '/pets/shimmer/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% Fire DMG and pull in the enemies with a beam to inflict 500% Fire DMG on enemies within range using its laser cannon.'
            },
            {
               name: 'Gliding Barrage: Fire',
               image: '/pets/shimmer/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% DMG Fire and shoot 3 laser beams, each dealing 500% Fire DMG to enemies within range.'
            },
         ],
         dark: [
            {
               name: 'Swirl Blast: Dark',
               image: '/pets/shimmer/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% Dark DMG and pull in the enemies with a beam to inflict 500% Dark DMG on enemies within range using its laser cannon.'
            },
            {
               name: 'Gliding Barrage: Dark',
               image: '/pets/shimmer/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% DMG Dark and shoot 3 laser beams, each dealing 500% Dark DMG to enemies within range.'
            },
         ],
         void: [
            {
               name: 'Swirl Blast: Void',
               image: '/pets/shimmer/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% Void DMG and pull in the enemies with a beam to inflict 500% Void DMG on enemies within range using its laser cannon.'
            },
            {
               name: 'Gliding Barrage: Void',
               image: '/pets/shimmer/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shimmer will dash toward the target for 1000% DMG Void and shoot 3 laser beams, each dealing 500% Void DMG to enemies within range.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Photons Surge',
            image: '/pets/shimmer/ps1.png',
            describe: 'Shimmer\'s Active Skills deal 70% more DMG.'
         },
         {
            name: 'Guardian\'s Patrol',
            image: '/pets/shimmer/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Luster Splitter',
            image: '/pets/shimmer/ps3.png',
            describe: 'After Shimmer casts its Active Skill, its carrier\'s ATK increases by 75. Can be stacked up to 2 times.'
         },
         {
            name: 'Empowered Cyclone',
            image: '/pets/shimmer/ps4.png',
            describe: 'Increases the carrier\'s Physical DMG by 10%.'
         },
         {
            name: 'Voidrays Convergence',
            image: '/pets/shimmer/ps5.png',
            describe: 'When Bianca: Stigmata is carrying Shimmer and Luminous Realm is activated, CRIT DMG increases by 50%; Base DMG of Sword Dance in Sword Form increases by 30%; Bianca: Stigmata\'s upward thrust attack will summon Shimmer to cast its basic Active Skill for a combination strike.'
         },
      ]
   },
   // Punchy
   {
      id: 13,
      image: '/pets/punchy/avatar.png',
      name: 'Punchy',
      type: 'Damage',
      element: 'Fire',
      signature: 'Lee Hyperreal',
      rank: 'S',
      story: [
         'Punchy was originally an auxiliary machine used by Lee of Gray Raven to collect the combat data for his new frame. The Science Council later modified it into a Combat Unit Booster that could link to Constructs, and added more nanomachine parts for combat.',
         'No one would have thought that Punchy was once a smart desktop companion that could be bought in any gift shop during the Golden Age.\nIts parts have been replaced numerous times, but there is one part that has never been swapped out. Even though it no longer serves as the core drive, it still fits perfectly in Punchy and has become its "soul.”',
         'I recently found something: When connected, Punchy\'s screen will display irregular emotes. The root cause is yet to be identified, but given this has no clear impact on the collection of combat data, no repairs have been planned.\nUpdate: I figured it out! It will synchronize with the emotions of the Constructs that link to it, and show them in these emotes!\nUpdate: The emotion synchronization does not seem to apply on Lee. He always has a poker face when Punchy\'s screen is rapidly changing... I\'ll just keep the record here. Attachment: Below are the emotes of Punchy during a joint operation between Gray Raven and Strike Hawk: (` д`) [twice] (-\'-)[twice] (?_?) [3 times] (///) [once], ◟(*⁰▽⁰*)ﾉ [once]\n- An abstract from the personal diary of a Science Council technician.'
      ],
      background: [
         'Punchy\'s calm, quiet characteristics often give others a misunderstanding that it is not equipped with an autonomous emotion simulation system. It always watches everything around itself in silence.',
         'The designer has not put an absolute limit on Punchy\'s transformation mechanism while it is on standby, so don\'t be shocked when you see a fist next to you. Maybe it only wants to give you a thumbs-up, or a cup of coffee.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Downward Punch: Physical',
               image: '/pets/punchy/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch downward, dealing 1750% Physical DMG to all enemies across the screen.'
            },
            {
               name: 'Upward Punch: Physical',
               image: '/pets/punchy/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch upward, dealing 500% Physical DMG 5 times to enemies in a small area.'
            },
         ],
         ice: [
            {
               name: 'Downward Punch: Ice',
               image: '/pets/punchy/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch downward, dealing 1750% Ice DMG to all enemies across the screen.'
            },
            {
               name: 'Upward Punch: Ice',
               image: '/pets/punchy/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch upward, dealing 500% Ice DMG 5 times to enemies in a small area.'
            },
         ],
         lightning: [
            {
               name: 'Downward Punch: Lightning',
               image: '/pets/punchy/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch downward, dealing 1750% Lightning DMG to all enemies across the screen.'
            },
            {
               name: 'Upward Punch: Lightning',
               image: '/pets/punchy/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch upward, dealing 500% Lightning DMG 5 times to enemies in a small area.'
            },
         ],
         fire: [
            {
               name: 'Downward Punch: Fire',
               image: '/pets/punchy/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch downward, dealing 1750% Fire DMG to all enemies across the screen.'
            },
            {
               name: 'Upward Punch: Fire',
               image: '/pets/punchy/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch upward, dealing 500% Fire DMG 5 times to enemies in a small area.'
            },
         ],
         dark: [
            {
               name: 'Downward Punch: Dark',
               image: '/pets/punchy/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch downward, dealing 1750% Dark DMG to all enemies across the screen.'
            },
            {
               name: 'Upward Punch: Dark',
               image: '/pets/punchy/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch upward, dealing 500% Dark DMG 5 times to enemies in a small area.'
            },
         ],
         void: [
            {
               name: 'Downward Punch: Void',
               image: '/pets/punchy/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch downward, dealing 1750% Void DMG to all enemies across the screen.'
            },
            {
               name: 'Upward Punch: Void',
               image: '/pets/punchy/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Punchy will open a portal and then quickly throw an Ultralimit Punch upward, dealing 500% Void DMG 5 times to enemies in a small area.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Thermal Galvanization',
            image: '/pets/punchy/ps1.png',
            describe: 'Punchy\'s Active Skill deals 70% more DMG.'
         },
         {
            name: 'Guided Conversion',
            image: '/pets/punchy/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Potential Synchronization',
            image: '/pets/punchy/ps3.png',
            describe: 'Each time Punchy casts an Active Skill, the carrier\'s ATK increases by 120 for 8s.'
         },
         {
            name: 'Flame Blast',
            image: '/pets/punchy/ps4.png',
            describe: 'Increases the carrier\'s Fire DMG by 10%.'
         },
         {
            name: 'Mark of Overlapping Void Matrix',
            image: '/pets/punchy/ps5.png',
            describe: 'When Lee: Hyperreal is equipped with Punchy, the Base DMG of Hypermatrix Strike and Collapsing Realm increases by 25%. Casting Realm Travel or Retribution will summon Punchy to throw a Downward Punch to assist Lee, dealing damage based on the Skill Level of Punchy\'s Active Skill Downward Punch.'
         },
      ]
   },
   // Rainbow
   {
      id: 14,
      image: '/pets/rainbow/avatar.png',
      name: 'Rainbow',
      type: 'Pull, Damage',
      element: 'Ice',
      signature: 'Ayla Kaleido',
      rank: 'S',
      story: [
         'Originally a robotic artistic education assistant at the Center of Basic Public Education, Rainbow is equipped with 127 pigments, 28 types of paintbrushes, and 7 types of paint sprayers. After being modified into a Combat Unit Booster by Leonie, Rainbow is able to sweep the battlefield with splashes of color alongside Kaleido\'s Beam Gunlance.',
         'Rainbow\'s bowknot was a gift from the kids at the Center of Basic Public Education when it left there, now its most treasured ornament that it refuses to take off even on the battlefield. However kind and pleasant Rainbow is, if any enemy dares dirty its bowknot, it will end battles like a devastating hurricane.',
         'Presumably affected by its owner, among all the CUBs Rainbow is the one most into "making friends." To the staff of the Science Council, it is common to see Rainbow building bridges with other CUBs in the maintenance room. And one day, when the staff of the Science Council returned to the maintenance room after a vacation, they immediately realized that they had forgotten to enable hibernate mode on the CUBs before they left. The maintenance room was turned into a "party room" with every inch splashed with colors by Rainbow. All the CUBs were so high that they were parading around the room, celebrating. This merrymaking lasted until the Science Council called in the CUBs\' owners to calm them down.'
      ],
      background: [
         'In most cases, Rainbow is delightful and enjoys jokes and pranks, but you should never take this for granted. Once it feels you have gone too far, it will squirt a shower of special pigment that will not come off for a whole month.',
         'As Rainbow is a CUB inspired by a marine species like Shimmer and Seeshell, it makes the three of them become a close trio of friends among all CUBs. Rainbow would give Shimmer a new coating once in a while and relax lying on Seeshell in leisure time.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Refraction Siphon: Physical',
               image: '/pets/rainbow/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon casting, Rainbow will swim to the target, pull enemies within range, and deal 500% Physical DMG. Then, Rainbow will unleash a dazzling energy explosion, dealing 1000% Physical DMG to enemies within range.'
            },
            {
               name: 'Ripple Dash: Physical',
               image: '/pets/rainbow/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Rainbow will swiftly swim forward and deal 325% Physical DMG to the enemies ahead 3 times. Then, Rainbow will immediately return and deal 450% Physical DMG to the enemies on the path 3 times.'
            },
         ],
         ice: [
            {
               name: 'Refraction Siphon: Ice',
               image: '/pets/rainbow/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon casting, Rainbow will swim to the target, pull enemies within range, and deal 500% Ice DMG. Then, Rainbow will unleash a dazzling energy explosion, dealing 1000% Ice DMG to enemies within range.'
            },
            {
               name: 'Ripple Dash: Ice',
               image: '/pets/rainbow/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Rainbow will swiftly swim forward and deal 325% Ice DMG to the enemies ahead 3 times. Then, Rainbow will immediately return and deal 450% Ice DMG to the enemies on the path 3 times.'
            },
         ],
         lightning: [
            {
               name: 'Refraction Siphon: Lightning',
               image: '/pets/rainbow/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon casting, Rainbow will swim to the target, pull enemies within range, and deal 500% Lightning DMG. Then, Rainbow will unleash a dazzling energy explosion, dealing 1000% Lightning DMG to enemies within range.'
            },
            {
               name: 'Ripple Dash: Lightning',
               image: '/pets/rainbow/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Rainbow will swiftly swim forward and deal 325% Lightning DMG to the enemies ahead 3 times. Then, Rainbow will immediately return and deal 450% Lightning DMG to the enemies on the path 3 times.'
            },
         ],
         fire: [
            {
               name: 'Refraction Siphon: Fire',
               image: '/pets/rainbow/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon casting, Rainbow will swim to the target, pull enemies within range, and deal 500% Fire DMG. Then, Rainbow will unleash a dazzling energy explosion, dealing 1000% Fire DMG to enemies within range.'
            },
            {
               name: 'Ripple Dash: Fire',
               image: '/pets/rainbow/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Rainbow will swiftly swim forward and deal 325% Fire DMG to the enemies ahead 3 times. Then, Rainbow will immediately return and deal 450% Fire DMG to the enemies on the path 3 times.'
            },
         ],
         dark: [
            {
               name: 'Refraction Siphon: Dark',
               image: '/pets/rainbow/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon casting, Rainbow will swim to the target, pull enemies within range, and deal 500% Dark DMG. Then, Rainbow will unleash a dazzling energy explosion, dealing 1000% Dark DMG to enemies within range.'
            },
            {
               name: 'Ripple Dash: Dark',
               image: '/pets/rainbow/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Rainbow will swiftly swim forward and deal 325% Dark DMG to the enemies ahead 3 times. Then, Rainbow will immediately return and deal 450% Dark DMG to the enemies on the path 3 times.'
            },
         ],
         void: [
            {
               name: 'Refraction Siphon: Void',
               image: '/pets/rainbow/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon casting, Rainbow will swim to the target, pull enemies within range, and deal 500% Void DMG. Then, Rainbow will unleash a dazzling energy explosion, dealing 1000% Void DMG to enemies within range.'
            },
            {
               name: 'Ripple Dash: Void',
               image: '/pets/rainbow/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Rainbow will swiftly swim forward and deal 325% Void DMG to the enemies ahead 3 times. Then, Rainbow will immediately return and deal 450% Void DMG to the enemies on the path 3 times.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Colorful Touch',
            image: '/pets/rainbow/ps1.png',
            describe: 'Rainbow\'s Active Skill deals 70% more DMG.'
         },
         {
            name: 'Chain of Dreams',
            image: '/pets/rainbow/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Over the Rainbow',
            image: '/pets/rainbow/ps3.png',
            describe: 'Each time Rainbow casts an Active Skill, the carrier\'s Extra DMG Bonus increases by 4%. Can be stacked up to 3 times.'
         },
         {
            name: 'Diamond Star',
            image: '/pets/rainbow/ps4.png',
            describe: 'Increases the carrier\'s Ice DMG by 10%.'
         },
         {
            name: 'Inner Storm',
            image: '/pets/rainbow/ps5.png',
            describe: 'When Ayla: Kaleido casts Pure Color: Theme Emphasis or Color Mix: Clash of Concepts with Rainbow equipped, Base DMG will increase by 30%, and Rainbow will pull nearby enemies and deal 100% Ice DMG 3 times. Casting Vibrant Brushstroke will increase her Base DMG by 30% and summon Rainbow to assist with its basic Active Skill. Cooldown: 2s.'
         },
      ]
   },
   // Motorbolt
   {
      id: 15,
      image: '/pets/motorbolt/avatar.png',
      name: 'Motorbolt',
      type: 'Charge',
      element: 'Lightning',
      signature: 'Lucia Crimson Weave',
      rank: 'S',
      story: [
         'Motorbolt was originally Alpha\'s motorcycle, yet she couldn\'t always keep it by her side due to the challenges posed by diverse terrains. To make her rides more convenient, Alpha continually modified Motorbolt. After adding some combat modules, Alpha managed to reduce it to the current portable mechanical form. As for this design... perhaps it was inspired by some offhand suggestions from Luna?',
         'Motorbolt\'s compact form is equipped with a powerful turbocharged engine and stealth radar technology, coupled with enhanced communication channels. These features ensure maximum stealth and safety for its rider on the surface. However, with that powerful engine comes louder noise levels. Despite Alpha equipping it with the best available air filters and mufflers, Motorbolt was taken aback by its own roar during its initial run.',
         'Motorbolt doesn\'t seem too pleased with its compact form. Instead, it prefers its original form and often gives Alpha high-speed joyrides during downtimes. The fiery-red bike, carrying its master, blazes across the wastelands like a bolt of crimson lightning. Fortunately, Alpha has no qualms about this little indulgence.'
      ],
      background: [
         'Motorbolt doesn\'t like to use its speaker system much, but it\'s got a temperament as fiery as its engine. Don\'t test its patience, ever.',
         'After transformation, the jagged parts at the front aren\'t Motorbolt\'s "mouth." But unless necessary, never place your hand near those jagged parts unsupervised. Or you\'ll regret it.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Sparking Assault: Physical',
               image: '/pets/motorbolt/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and bump the target, dealing 450% Physical DMG and leaving behind a Pulling Current that keeps pulling enemies within range and deals 350% Physical DMG 3 times.'
            },
            {
               name: 'Drifting Gale: Physical',
               image: '/pets/motorbolt/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and drift, knocking enemies within range airborne and dealing 2000% Physical Lightning DMG. When Motorbolt is equipped by Lucia: Crimson Weave, it will enter Standby Mode upon casting the Active Skill. Afterward, Lucia: Crimson Weave will ride Motorbolt upon casting Resolute Blow with the kodachi, sprinting to the target before pulling enemies within range and knocking them airborne. Motorbolt deals 500% Physical DMG to the enemies within range during so.'
            },
         ],
         ice: [
            {
               name: 'Sparking Assault: Ice',
               image: '/pets/motorbolt/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and bump the target, dealing 450% Ice DMG and leaving behind a Pulling Current that keeps pulling enemies within range and deals 350% Ice DMG 3 times.'
            },
            {
               name: 'Drifting Gale: Ice',
               image: '/pets/motorbolt/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and drift, knocking enemies within range airborne and dealing 2000% Ice Lightning DMG. When Motorbolt is equipped by Lucia: Crimson Weave, it will enter Standby Mode upon casting the Active Skill. Afterward, Lucia: Crimson Weave will ride Motorbolt upon casting Resolute Blow with the kodachi, sprinting to the target before pulling enemies within range and knocking them airborne. Motorbolt deals 500% Ice DMG to the enemies within range during so.'
            },
         ],
         lightning: [
            {
               name: 'Sparking Assault: Lightning',
               image: '/pets/motorbolt/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and bump the target, dealing 450% Lightning DMG and leaving behind a Pulling Current that keeps pulling enemies within range and deals 350% Lightning DMG 3 times.'
            },
            {
               name: 'Drifting Gale: Lightning',
               image: '/pets/motorbolt/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and drift, knocking enemies within range airborne and dealing 2000% Lightning Lightning DMG. When Motorbolt is equipped by Lucia: Crimson Weave, it will enter Standby Mode upon casting the Active Skill. Afterward, Lucia: Crimson Weave will ride Motorbolt upon casting Resolute Blow with the kodachi, sprinting to the target before pulling enemies within range and knocking them airborne. Motorbolt deals 500% Lightning DMG to the enemies within range during so.'
            },
         ],
         fire: [
            {
               name: 'Sparking Assault: Fire',
               image: '/pets/motorbolt/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and bump the target, dealing 450% Fire DMG and leaving behind a Pulling Current that keeps pulling enemies within range and deals 350% Fire DMG 3 times.'
            },
            {
               name: 'Drifting Gale: Fire',
               image: '/pets/motorbolt/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and drift, knocking enemies within range airborne and dealing 2000% Fire Lightning DMG. When Motorbolt is equipped by Lucia: Crimson Weave, it will enter Standby Mode upon casting the Active Skill. Afterward, Lucia: Crimson Weave will ride Motorbolt upon casting Resolute Blow with the kodachi, sprinting to the target before pulling enemies within range and knocking them airborne. Motorbolt deals 500% Fire DMG to the enemies within range during so.'
            },
         ],
         dark: [
            {
               name: 'Sparking Assault: Dark',
               image: '/pets/motorbolt/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and bump the target, dealing 450% Dark DMG and leaving behind a Pulling Current that keeps pulling enemies within range and deals 350% Dark DMG 3 times.'
            },
            {
               name: 'Drifting Gale: Dark',
               image: '/pets/motorbolt/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and drift, knocking enemies within range airborne and dealing 2000% Dark Lightning DMG. When Motorbolt is equipped by Lucia: Crimson Weave, it will enter Standby Mode upon casting the Active Skill. Afterward, Lucia: Crimson Weave will ride Motorbolt upon casting Resolute Blow with the kodachi, sprinting to the target before pulling enemies within range and knocking them airborne. Motorbolt deals 500% Dark DMG to the enemies within range during so.'
            },
         ],
         void: [
            {
               name: 'Sparking Assault: Void',
               image: '/pets/motorbolt/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and bump the target, dealing 450% Void DMG and leaving behind a Pulling Current that keeps pulling enemies within range and deals 350% Void DMG 3 times.'
            },
            {
               name: 'Drifting Gale: Void',
               image: '/pets/motorbolt/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Motorbolt will rush to the enemy and drift, knocking enemies within range airborne and dealing 2000% Void Lightning DMG. When Motorbolt is equipped by Lucia: Crimson Weave, it will enter Standby Mode upon casting the Active Skill. Afterward, Lucia: Crimson Weave will ride Motorbolt upon casting Resolute Blow with the kodachi, sprinting to the target before pulling enemies within range and knocking them airborne. Motorbolt deals 500% Void DMG to the enemies within range during so.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Burst Booster',
            image: '/pets/motorbolt/ps1.png',
            describe: 'Motorbolt\'s Active Skill deals 70% more DMG.'
         },
         {
            name: 'Thrill of Accel',
            image: '/pets/motorbolt/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Light Streaks',
            image: '/pets/motorbolt/ps3.png',
            describe: 'Each time Motorbolt casts an Active Skill, the carrier\'s ATK increases by 5% for 8s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Wedged Lightning',
            image: '/pets/motorbolt/ps4.png',
            describe: 'Increases the carrier\'s Lightning DMG by 10%.'
         },
         {
            name: 'Unquenchable Fortitude',
            image: '/pets/motorbolt/ps5.png',
            describe: 'When Lucia: Crimson Weave casts Unquenchable Flare with Motorbolt equipped, Base DMG increases by 100%. Casting Weave: Splashing Thunder will summon Motorbolt to assist with its basic Active Skill. Cooldown: 8s.'
         },
      ]
   },
   // Hades Fangs
   {
      id: 16,
      image: '/pets/hades-fangs/avatar.png',
      name: 'Hades Fangs',
      type: 'Control, Damage',
      element: 'Lightning',
      signature: 'No.21 Feral',
      rank: 'S',
      story: [
         'Originally serving as a police mechanoid beast within Babylonia, Hades Fangs\' dire look and swift mobility were designed to suppress criminals. Kurono researchers gave it further modifications-particularly on its offensive power-to make it a Combat Unit Booster (CUB) that could fight along Constructs.',
         'According to reports submitted by researchers, the adaptation process for Hades Fangs was rather "primitive" compared to other CUBs. It seems to classify people into only three categories: "master" (those it cannot defeat), "servants" (those it can overpower), and middle-aged researchers who will comply with all its requests once it intimidates them.',
         'During the initial design phase, there were several proposals to modify Hades Fangs\' appearance, which could be roughly categorized as "adorable pet," "fierce beast," as well as "Cerberus", which was proposed by the user herself. After the "Cerberus" proposal was unanimously voted against, supporters of the remaining two proposals began a lengthy debate until recordings of Hades Fangs\' battle from the Hetero Zone were sent back. "Let\'s go with this one." -Vesalius made the final decision after browsing through the clips.'
      ],
      background: [
         'Always likes to jump out of a dark corner to scare those it likes. If the attempt is unsuccessful, it would keep trying until it succeeds.',
         'Hades Fangs is always obsessed with challenging other CUBs in various competitions, for example, racing with Frost Oath or wrestling with Yuan Ye. But its favorite activity is the daily battle with Jet Jaeger. Researchers have to separate them to avoid non-combat-related damages.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Fangs Crash: Physical',
               image: '/pets/hades-fangs/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will dash forward and leap up, penetrating and knocking enemies in its path into the air while dealing 850% Physical DMG 3 times.'
            },
            {
               name: 'Ion Realm: Physical',
               image: '/pets/hades-fangs/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will spin in mid-air and slam the enemy, dealing 500% Physical DMG and applying Rigidity to the enemy. Generates a purple lightning zone on hit that lasts for 2.4s and deals 75% Physical DMG to the enemies in it once every 0.2s. Rigidity: Immobilizes the enemy for 2s.'
            },
         ],
         ice: [
            {
               name: 'Fangs Crash: Ice',
               image: '/pets/hades-fangs/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will dash forward and leap up, penetrating and knocking enemies in its path into the air while dealing 850% Ice DMG 3 times.'
            },
            {
               name: 'Ion Realm: Ice',
               image: '/pets/hades-fangs/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will spin in mid-air and slam the enemy, dealing 500% Ice DMG and applying Rigidity to the enemy. Generates a purple lightning zone on hit that lasts for 2.4s and deals 75% Ice DMG to the enemies in it once every 0.2s. Rigidity: Immobilizes the enemy for 2s.'
            },
         ],
         lightning: [
            {
               name: 'Fangs Crash: Lightning',
               image: '/pets/hades-fangs/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will dash forward and leap up, penetrating and knocking enemies in its path into the air while dealing 850% Lightning DMG 3 times.'
            },
            {
               name: 'Ion Realm: Lightning',
               image: '/pets/hades-fangs/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will spin in mid-air and slam the enemy, dealing 500% Lightning DMG and applying Rigidity to the enemy. Generates a purple lightning zone on hit that lasts for 2.4s and deals 75% Lightning DMG to the enemies in it once every 0.2s. Rigidity: Immobilizes the enemy for 2s.'
            },
         ],
         fire: [
            {
               name: 'Fangs Crash: Fire',
               image: '/pets/hades-fangs/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will dash forward and leap up, penetrating and knocking enemies in its path into the air while dealing 850% Fire DMG 3 times.'
            },
            {
               name: 'Ion Realm: Fire',
               image: '/pets/hades-fangs/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will spin in mid-air and slam the enemy, dealing 500% Fire DMG and applying Rigidity to the enemy. Generates a purple lightning zone on hit that lasts for 2.4s and deals 75% Fire DMG to the enemies in it once every 0.2s. Rigidity: Immobilizes the enemy for 2s.'
            },
         ],
         dark: [
            {
               name: 'Fangs Crash: Dark',
               image: '/pets/hades-fangs/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will dash forward and leap up, penetrating and knocking enemies in its path into the air while dealing 850% Dark DMG 3 times.'
            },
            {
               name: 'Ion Realm: Dark',
               image: '/pets/hades-fangs/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will spin in mid-air and slam the enemy, dealing 500% Dark DMG and applying Rigidity to the enemy. Generates a purple lightning zone on hit that lasts for 2.4s and deals 75% Dark DMG to the enemies in it once every 0.2s. Rigidity: Immobilizes the enemy for 2s.'
            },
         ],
         void: [
            {
               name: 'Fangs Crash: Void',
               image: '/pets/hades-fangs/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will dash forward and leap up, penetrating and knocking enemies in its path into the air while dealing 850% Void DMG 3 times.'
            },
            {
               name: 'Ion Realm: Void',
               image: '/pets/hades-fangs/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Hades Fangs will spin in mid-air and slam the enemy, dealing 500% Void DMG and applying Rigidity to the enemy. Generates a purple lightning zone on hit that lasts for 2.4s and deals 75% Void DMG to the enemies in it once every 0.2s. Rigidity: Immobilizes the enemy for 2s.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Thunder Claws',
            image: '/pets/hades-fangs/ps1.png',
            describe: 'Hades Fangs\' Active Skill deals 70% more DMG.'
         },
         {
            name: 'Wild Order',
            image: '/pets/hades-fangs/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Moon Howl',
            image: '/pets/hades-fangs/ps3.png',
            describe: 'Each time Hades Fangs casts an Active Skill, the carrier\'s Extra DMG Bonus increases by 5% for 8s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Electro Mark',
            image: '/pets/hades-fangs/ps4.png',
            describe: 'Increases the carrier\'s Lightning DMG by 10%.'
         },
         {
            name: 'Kerberos',
            image: '/pets/hades-fangs/ps5.png',
            describe: 'When No. 21: Feral casts Dusk Fluorescence and Sky-ripping Arcflash with Hades Fangs equipped, the Base DMG will increase by 30%. Casting Dusk Fluorescence will summon Hades Fangs to assist, dealing 2000% Lightning DMG. Cooldown: 6s.'
         },
      ]
   },
   // Dawn Chorus
   {
      id: 17,
      image: '/pets/dawn-chorus/avatar.png',
      name: 'Dawn Chorus',
      type: 'Damage, Super Armor',
      element: 'Physical',
      signature: 'Alisa Echo',
      rank: 'S',
      story: [
         'Originally a backup frame produced as a prototype in the M.I.N.D. fusion experiment, the concept of Dawn Chorus had drawn reference from Babylonia CUBs, in which several Dawn Choruses were supposed to assist the M.I.N.D. fusion test subject for high-precision combat.',
         'To handle most combat situations, Dawn Chorus is equipped with four legs and wings, enabling it to perform decently both in the air and on land. While some have also raised concerns that its large size might hinder stealth operations, the chief developer believes that when the situation really needs Dawn Chorus, stealth operation is probably no longer an option.',
         'While Dawn Chorus was created as a weapon of violence, it demonstrated great restraint in exerting its power. This confused the Utopia scientists who developed it, leading them to suspect that the M.I.N.D. fusion technology had flaws. In fact, Dawn Chorus has its own judgment criteria-it will fight to protect the “weak” and only use its full strength against opponents that it regards as “evil.” “It seems to possess noble virtues like a knight,” commented Echo who fought alongside Dawn Chorus.'
      ],
      background: [
         'Really hates getting dirty. Will actively seek out clean water sources to wash itself clean even if there is a tiny mark on its white armor.',
         'When excited, it will impulsively attempt to screech. However, as Dawn Chorus is not equipped with a voice module, it always appears rather depressed after failing to vocalize. Perhaps we should try to give it a voice module?',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Night Laser: Physical',
               image: '/pets/dawn-chorus/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will fire a laser at the Enemy, dealing 1500% Physical DMG.'
            },
            {
               name: 'Flash Assault: Physical',
               image: '/pets/dawn-chorus/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will charge toward the enemy from a distance in mid-air, dealing 1250% Physical DMG while granting the equipped character super armor for 3s, and shield equal to 200% of the CUB\'s ATK for 10s.'
            },
         ],
         ice: [
            {
               name: 'Night Laser: Ice',
               image: '/pets/dawn-chorus/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will fire a laser at the Enemy, dealing 1500% Ice DMG.'
            },
            {
               name: 'Flash Assault: Ice',
               image: '/pets/dawn-chorus/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will charge toward the enemy from a distance in mid-air, dealing 1250% Ice DMG while granting the equipped character super armor for 3s, and shield equal to 200% of the CUB\'s ATK for 10s.'
            },
         ],
         lightning: [
            {
               name: 'Night Laser: Lightning',
               image: '/pets/dawn-chorus/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will fire a laser at the Enemy, dealing 1500% Lightning DMG.'
            },
            {
               name: 'Flash Assault: Lightning',
               image: '/pets/dawn-chorus/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will charge toward the enemy from a distance in mid-air, dealing 1250% Lightning DMG while granting the equipped character super armor for 3s, and shield equal to 200% of the CUB\'s ATK for 10s.'
            },
         ],
         fire: [
            {
               name: 'Night Laser: Fire',
               image: '/pets/dawn-chorus/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will fire a laser at the Enemy, dealing 1500% Fire DMG.'
            },
            {
               name: 'Flash Assault: Fire',
               image: '/pets/dawn-chorus/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will charge toward the enemy from a distance in mid-air, dealing 1250% Fire DMG while granting the equipped character super armor for 3s, and shield equal to 200% of the CUB\'s ATK for 10s.'
            },
         ],
         dark: [
            {
               name: 'Night Laser: Dark',
               image: '/pets/dawn-chorus/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will fire a laser at the Enemy, dealing 1500% Dark DMG.'
            },
            {
               name: 'Flash Assault: Dark',
               image: '/pets/dawn-chorus/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will charge toward the enemy from a distance in mid-air, dealing 1250% Dark DMG while granting the equipped character super armor for 3s, and shield equal to 200% of the CUB\'s ATK for 10s.'
            },
         ],
         void: [
            {
               name: 'Night Laser: Void',
               image: '/pets/dawn-chorus/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will fire a laser at the Enemy, dealing 1500% Void DMG.'
            },
            {
               name: 'Flash Assault: Void',
               image: '/pets/dawn-chorus/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Dawn Chorus will charge toward the enemy from a distance in mid-air, dealing 1250% Void DMG while granting the equipped character super armor for 3s, and shield equal to 200% of the CUB\'s ATK for 10s.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Blade Wings',
            image: '/pets/dawn-chorus/ps1.png',
            describe: 'Dawn Chorus\'s Active Skill deals 70% more DMG.'
         },
         {
            name: 'Powerful Escort',
            image: '/pets/dawn-chorus/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Fogbow Wings',
            image: '/pets/dawn-chorus/ps3.png',
            describe: 'Each time Dawn Chorus casts an Active Skill, the carrier\'s Extra DMG Bonus increases by 5% for 8s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Free Soaring',
            image: '/pets/dawn-chorus/ps4.png',
            describe: 'Increases the carrier\'s Physical DMG by 10%.'
         },
         {
            name: 'Twilight Hour',
            image: '/pets/dawn-chorus/ps5.png',
            describe: 'When Alisa: Echo casts Signature-Celestial Edge with Dawn Chorus equipped, Crit DMG increases by 75%. Casting Imprisoning Co-Strike or Soulbreacking Co-Strike, will summon Dawn Chorus to launch a joint attack, dealing 2500% Physical DMG.'
         },
      ]
   },
   // Cetus
   {
      id: 18,
      image: '/pets/cetus/avatar.png',
      name: 'Cetus',
      type: 'Damage, Crowd Control',
      element: 'Dark',
      signature: 'Lamia Lost Lullaby',
      rank: 'S',
      story: [
         'Originally a bionic machine customized by a marine animal research center in the Golden Age for in-depth study of dolphin behaviors. Cetus was accidently left forgotten in the sea due to changes in the center’s staffing and project funding.',
         'Cetus was not equipped with many weapons, as it was originally intended for scientific research purposes. In contrast, it had outstanding emotion simulating programs, which, in some aspects, were too good-some researchers at that time often had the false impression that cetus really developed emotions.',
         'As time went by, Cetus’ peers had all vanished, leaving behind only Cetus with an aging and damaged body. It was calmly awaiting its ending when its sensors detected Lamia. Cetus’ memory shell and emotion simulating programs were unable to understand the modifications it underwent, but the result is evident: it can now roam the ocean in a completely new form. Right now, it only wants to stay with Lamia though.'
      ],
      background: [
         'Enjoys floating Belly-up on the sea surface to bask in the sun. Sometimes, the ocean current would take Cetus across an incredibly long distance after it has been sun bathing for too long, and it takes a lot of effort for it to swim back.',
         'Cetus greatly enjoyed pointing ships in the direction of the coast, but such opportunities are now very rare, which often gives it depression. It resorted to sunbathing to handle this problem until it recently discovered some human vessels could possibly still exist in high latitude regions.'
      ],
      activeSkills: {
         physical: [
            {
               name: 'Terrifying Vortex: Physical',
               image: '/pets/cetus/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Physical DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Physical',
               image: '/pets/cetus/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Physical DMG, and pushing the enemy to the character.'
            },
         ],
         ice: [
            {
               name: 'Terrifying Vortex: Ice',
               image: '/pets/cetus/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Ice DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Ice',
               image: '/pets/cetus/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Ice DMG, and pushing the enemy to the character.'
            },
         ],
         lightning: [
            {
               name: 'Terrifying Vortex: Lightning',
               image: '/pets/cetus/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Lightning DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Lightning',
               image: '/pets/cetus/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Lightning DMG, and pushing the enemy to the character.'
            },
         ],
         fire: [
            {
               name: 'Terrifying Vortex: Fire',
               image: '/pets/cetus/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Fire DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Fire',
               image: '/pets/cetus/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Fire DMG, and pushing the enemy to the character.'
            },
         ],
         dark: [
            {
               name: 'Terrifying Vortex: Dark',
               image: '/pets/cetus/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Dark DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Dark',
               image: '/pets/cetus/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Dark DMG, and pushing the enemy to the character.'
            },
         ],
         void: [
            {
               name: 'Terrifying Vortex: Void',
               image: '/pets/cetus/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Void DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Void',
               image: '/pets/cetus/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Void DMG, and pushing the enemy to the character.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Dolphin Tactic: Patrol',
            image: '/pets/cetus/ps1.png',
            describe: 'Cetus\' Active Skill deals 70% more DMG.'
         },
         {
            name: 'Dolphin Tactic: Escort',
            image: '/pets/cetus/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Dolphin Tactic: Raid',
            image: '/pets/cetus/ps3.png',
            describe: 'Each time Cetus casts an Active Skill, the carrier\'s Extra DMG Bonus increases by 5% for 8s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Submerged Rock',
            image: '/pets/cetus/ps4.png',
            describe: 'Increases the carrier\'s Dark DMG by 10%.'
         },
         {
            name: 'Old Illusions',
            image: '/pets/cetus/ps5.png',
            describe: 'When Lamia: Lost Lullaby casts Signature - Sunken Finale with Cetus equipped, Base DMG will increase by 80%. Casting Blue Orb Skill - Ocean Break and Basic Attack - Abyssal Currents will summon Cetus to launch a joint attack, dealing 2500% Dark DMG.'
         },
      ]
   },
   // Shadow Wing
   {
      id: 19,
      image: '/pets/shadow-wing/avatar.png',
      name: 'Shadow Wing',
      type: 'Damage, Control',
      element: 'Fire',
      signature: 'Watanabe Epitaph',
      rank: 'S',
      story: [
         'Created based on an indoor close-quarters combat suppot attacking machine, it was originally designed to be a mass-produced solo wingman. Due to the manufacturing difficulty and poor budget control, it was modified into a specialized CUB.',
         'It used to be a headache for the researchers and designers to make an indoor weapon to a wide-range CUB. Thankfully, the timely application of new energy system fundamentally solved Shadow Wing\'s endurance problem. Besides, the AI module update has boosted its auto battle performance.',
         'Shadow Wing\'s co-op module has been improved several times based on the best data obtained from multiple practices with Watanabe. Watanabe\'s hook missed Shadow Wing several times and failed to connect to it. And there were times when the two failed to work with each other due to poor light at night. Now with the adjustments to their night vision equipment and the new material of Shadow Wing\'s hook attachment, their connection won\'t break easily even in the worst conditions.'
      ],
      background: [
         'Shadow Wing looks inactive by standing on Watanabe\'s shoulder with its wings folded. But don\'t be fooled by it. It is actually on the lookout for anyone suspicious getting close to Watanabe.',
         'Shadow Wing does not always patrol at night. It also patrols during the day. Though looked scary, Shadow Wing is actually a CUB that fears strangers. It always flies in the least noticeable way and mimics the surroundings to hide, making it hard to be noticed.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Wide-Area Sound Waves: Physical',
               image: '/pets/shadow-wing/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will release sound waves to deal damage and pull in nearby enemies, dealing 1650% Physical DMG.'
            },
            {
               name: 'Proximity Interference: Physical',
               image: '/pets/shadow-wing/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will start to circle, granting the equipped character shield equal to 200% of its ATK. At the end of the flight, Shadow Wing will spread its wings and deal 750% Physical DMG twice in the area around the target.'
            },
         ],
         ice: [
            {
               name: 'Wide-Area Sound Waves: Ice',
               image: '/pets/shadow-wing/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will release sound waves to deal damage and pull in nearby enemies, dealing 1650% Ice DMG.'
            },
            {
               name: 'Proximity Interference: Ice',
               image: '/pets/shadow-wing/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will start to circle, granting the equipped character shield equal to 200% of its ATK. At the end of the flight, Shadow Wing will spread its wings and deal 750% Ice DMG twice in the area around the target.'
            },
         ],
         lightning: [
            {
               name: 'Wide-Area Sound Waves: Lightning',
               image: '/pets/shadow-wing/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will release sound waves to deal damage and pull in nearby enemies, dealing 1650% Lightning DMG.'
            },
            {
               name: 'Proximity Interference: Lightning',
               image: '/pets/shadow-wing/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will start to circle, granting the equipped character shield equal to 200% of its ATK. At the end of the flight, Shadow Wing will spread its wings and deal 750% Lightning DMG twice in the area around the target.'
            },
         ],
         fire: [
            {
               name: 'Wide-Area Sound Waves: Fire',
               image: '/pets/shadow-wing/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will release sound waves to deal damage and pull in nearby enemies, dealing 1650% Fire DMG.'
            },
            {
               name: 'Proximity Interference: Fire',
               image: '/pets/shadow-wing/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will start to circle, granting the equipped character shield equal to 200% of its ATK. At the end of the flight, Shadow Wing will spread its wings and deal 750% Fire DMG twice in the area around the target.'
            },
         ],
         dark: [
            {
               name: 'Wide-Area Sound Waves: Dark',
               image: '/pets/shadow-wing/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will release sound waves to deal damage and pull in nearby enemies, dealing 1650% Dark DMG.'
            },
            {
               name: 'Proximity Interference: Dark',
               image: '/pets/shadow-wing/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will start to circle, granting the equipped character shield equal to 200% of its ATK. At the end of the flight, Shadow Wing will spread its wings and deal 750% Dark DMG twice in the area around the target.'
            },
         ],
         void: [
            {
               name: 'Wide-Area Sound Waves: Void',
               image: '/pets/shadow-wing/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will release sound waves to deal damage and pull in nearby enemies, dealing 1650% Void DMG.'
            },
            {
               name: 'Proximity Interference: Void',
               image: '/pets/shadow-wing/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Shadow Wing will start to circle, granting the equipped character shield equal to 200% of its ATK. At the end of the flight, Shadow Wing will spread its wings and deal 750% Void DMG twice in the area around the target.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Overwatcher',
            image: '/pets/shadow-wing/ps1.png',
            describe: 'Shadow Wing\'s Active Skills deal 70% more DMG.'
         },
         {
            name: 'Phantom Guard',
            image: '/pets/shadow-wing/ps2.png',
            describe: 'Increases the Carrier\'s ATK by 100.'
         },
         {
            name: 'Output Synchronization',
            image: '/pets/shadow-wing/ps3.png',
            describe: 'Each time Shadow Wing casts an Active Skill, the carrier\'s Extra DMG Bonus increases by 5% for 8s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Propelled Incineration',
            image: '/pets/shadow-wing/ps4.png',
            describe: 'Increases the carrier\'s Fire DMG by 10%.'
         },
         {
            name: 'Blazing Chain',
            image: '/pets/shadow-wing/ps5.png',
            describe: 'When Watanabe: Epitaph casts Flame Eruption, he will use his grappling hook to link with Shadow Wing and launch a joint attack together in mid-air, during which time Shadow Wing will attack and deal 2500% Fire DMG in total. Thermal Erosion\'s base DMG increases by 75%.'
         },
      ]
   },
   // Huiyu
   {
      id: 20,
      image: '/pets/huiyu/avatar.png',
      name: 'Huiyu',
      type: 'Damage, Control',
      element: 'Ice',
      signature: 'Qu Shukra',
      rank: 'S',
      story: [
         'To make Huiyu more versatile and enhance its efficiency, the Kowloong Crew have modified it into a CUB, significantly upgrading it’s combat abilities and intelligence.',
         'Since Huiyu already possesses decent combat capabilities, the modifications focus more on enhancing its durability and providing more diverse attack methods, such as more reliable flying capabilities and ranged attacks.',
         'The frame itself has special significance, so we decided not to give the structure a major overhaul during the upgrade. However that decision had set us back in various ways. When approached, it would become extremely aggressive, forcing us to put the upgrade on hold. Fortunately, lady Qu came soon after to oversee the modifications so we could complete the work on time. As for the wing upgrades… That\'s another story. -A Fuxi Crew member currently on medical leave.'
      ],
      background: [
         'After the modification was completed, Qu gave Huiyu more free time to venture around. The newly added positioning system ensures that it no longer gets lost.',
         'Huiyu is extremely alert to human-shaped objects with the exception of Qu and a particular Babylonia commandant. After gaining the ability to perform ranged attacks, it would even shoot its “plumes” at any stranger that approaches without permission. Fortunately, it has now learned to tell whether the target is friendly or hostile after a period of adaptation.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Emerald Wings: Physical',
               image: '/pets/huiyu/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will quickly dive to the target and hover around them, dealing 1500% Physical DMG and pulling in nearby enemies.'
            },
            {
               name: 'Chilling Plumes: Physical',
               image: '/pets/huiyu/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will teleport above the target, spreading its wings and summoning ice spikes before the target. Then, Huiyu will flap its wings to launch ice spikes, dealing 600% Physical DMG 3 times.'
            },
         ],
         ice: [
            {
               name: 'Emerald Wings: Ice',
               image: '/pets/huiyu/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will quickly dive to the target and hover around them, dealing 1500% Ice DMG and pulling in nearby enemies.'
            },
            {
               name: 'Chilling Plumes: Ice',
               image: '/pets/huiyu/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will teleport above the target, spreading its wings and summoning ice spikes before the target. Then, Huiyu will flap its wings to launch ice spikes, dealing 600% Ice DMG 3 times.'
            },
         ],
         lightning: [
            {
               name: 'Emerald Wings: Lightning',
               image: '/pets/huiyu/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will quickly dive to the target and hover around them, dealing 1500% Lightning DMG and pulling in nearby enemies.'
            },
            {
               name: 'Chilling Plumes: Lightning',
               image: '/pets/huiyu/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will teleport above the target, spreading its wings and summoning ice spikes before the target. Then, Huiyu will flap its wings to launch ice spikes, dealing 600% Lightning DMG 3 times.'
            },
         ],
         fire: [
            {
               name: 'Emerald Wings: Fire',
               image: '/pets/huiyu/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will quickly dive to the target and hover around them, dealing 1500% Fire DMG and pulling in nearby enemies.'
            },
            {
               name: 'Chilling Plumes: Fire',
               image: '/pets/huiyu/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will teleport above the target, spreading its wings and summoning ice spikes before the target. Then, Huiyu will flap its wings to launch ice spikes, dealing 600% Fire DMG 3 times.'
            },
         ],
         dark: [
            {
               name: 'Emerald Wings: Dark',
               image: '/pets/huiyu/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will quickly dive to the target and hover around them, dealing 1500% Dark DMG and pulling in nearby enemies.'
            },
            {
               name: 'Chilling Plumes: Dark',
               image: '/pets/huiyu/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will teleport above the target, spreading its wings and summoning ice spikes before the target. Then, Huiyu will flap its wings to launch ice spikes, dealing 600% Dark DMG 3 times.'
            },
         ],
         void: [
            {
               name: 'Emerald Wings: Void',
               image: '/pets/huiyu/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will quickly dive to the target and hover around them, dealing 1500% Void DMG and pulling in nearby enemies.'
            },
            {
               name: 'Chilling Plumes: Void',
               image: '/pets/huiyu/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Huiyu will teleport above the target, spreading its wings and summoning ice spikes before the target. Then, Huiyu will flap its wings to launch ice spikes, dealing 600% Void DMG 3 times.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Wing Storm',
            image: '/pets/huiyu/ps1.png',
            describe: 'Huiyu\'s Active Skill deal 70% more DMG.'
         },
         {
            name: 'Neon Plumes',
            image: '/pets/huiyu/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Frost Beak',
            image: '/pets/huiyu/ps3.png',
            describe: 'Each time Huiyu casts an Active Skill, the carrier\'s Extra DMG Bonus increases by 5% for 8s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Freezing Soul',
            image: '/pets/huiyu/ps4.png',
            describe: 'Increases the carrier\'s Ice DMG by 10%.'
         },
         {
            name: 'Battle Song of Dragon Children',
            image: '/pets/huiyu/ps5.png',
            describe: 'When Qu: Shukra casts Will Bearer or Mountain Caller with Huiyu equipped, her ATK will increase by 30% for 5s. When Enthronement begins, she will summon Huiyu to launch a joint attack, dealing 2500% Ice DMG.'
         },
      ]
   },
   // Su E
   {
      id: 21,
      image: '/pets/su-e/avatar.png',
      name: 'Su E',
      type: 'Control, Damage',
      element: 'Void',
      signature: 'Luna Oblivion',
      rank: 'S',
      story: [
         'Su E was originally the mascot of a fairytale park in the Golden Age. The park used it as the core theme to create a mysterious country guarded by dragons. Whenever it spread its wings and flew over the park, it would cause tourists to exclaim in surprise.',
         'After the disaster, the staff placed the dormant Su E deep underground before evacuating, intending to wake it up when the park was restarted. However, as time passed, this park in the corner was slowly forgotten. Later, due to a program error, Su E woke up from his slumber. Although the outside world was completely different from the memory data, it still spread its wings day after day and cruised over the abandoned Silent Park.',
         'After a long period of silence, one day, a girl stepped into this deserted country. The Evil flew over the girl\'s head and stopped in front of her. Due to the damage of its parts and insufficient energy, the Evil\'s movements were intermittent, but even so, it stared at the visitor with the proud attitude of a guardian. No one knew what happened that day, but after that, the Evil temporarily left its small country and embarked on a new journey with its new owner in a brand new attitude.'
      ],
      background: [
         'Su E regards everything Luna gives it as a treasure and treasures it very much. It does not allow anyone to touch it unless they have explicit permission.',
         'Although he looks scary and irritable, he is actually very calm and rarely loses his temper over anything. And because he lived in a fairy tale paradise in the past, he is very good at coaxing children.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Malefic Exhalation: Physical',
               image: '/pets/su-e/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will breathe draconic flame from above, dealing 750% Physical DMG, slowing the target for 3s, and dealing 250% Physical DMG every second.'
            },
            {
               name: 'Obliterating Ire: Physical',
               image: '/pets/su-e/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will dive towards the target, dealing 1800% Physical DMG.'
            },
         ],
         ice: [
            {
               name: 'Malefic Exhalation: Ice',
               image: '/pets/su-e/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will breathe draconic flame from above, dealing 750% Ice DMG, slowing the target for 3s, and dealing 250% Ice DMG every second.'
            },
            {
               name: 'Obliterating Ire: Ice',
               image: '/pets/su-e/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will dive towards the target, dealing 1800% Ice DMG.'
            },
         ],
         lightning: [
            {
               name: 'Malefic Exhalation: Lightning',
               image: '/pets/su-e/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will breathe draconic flame from above, dealing 750% Lightning DMG, slowing the target for 3s, and dealing 250% Lightning DMG every second.'
            },
            {
               name: 'Obliterating Ire: Lightning',
               image: '/pets/su-e/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will dive towards the target, dealing 1800% Lightning DMG.'
            },
         ],
         fire: [
            {
               name: 'Malefic Exhalation: Fire',
               image: '/pets/su-e/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will breathe draconic flame from above, dealing 750% Fire DMG, slowing the target for 3s, and dealing 250% Fire DMG every second.'
            },
            {
               name: 'Obliterating Ire: Fire',
               image: '/pets/su-e/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will dive towards the target, dealing 1800% Fire DMG.'
            },
         ],
         dark: [
            {
               name: 'Malefic Exhalation: Dark',
               image: '/pets/su-e/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will breathe draconic flame from above, dealing 750% Dark DMG, slowing the target for 3s, and dealing 250% Dark DMG every second.'
            },
            {
               name: 'Obliterating Ire: Dark',
               image: '/pets/su-e/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will dive towards the target, dealing 1800% Dark DMG.'
            },
         ],
         void: [
            {
               name: 'Malefic Exhalation: Void',
               image: '/pets/su-e/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will breathe draconic flame from above, dealing 750% Void DMG, slowing the target for 3s, and dealing 250% Void DMG every second.'
            },
            {
               name: 'Obliterating Ire: Void',
               image: '/pets/su-e/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Su E will dive towards the target, dealing 1800% Void DMG.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Dread Incarnate',
            image: '/pets/su-e/ps1.png',
            describe: 'Su E\'s Active Skills deal 70% more DMG.'
         },
         {
            name: 'Ruinous Fire',
            image: '/pets/su-e/ps2.png',
            describe: 'Increases the ATK of Su E\'s carrier by 100.'
         },
         {
            name: 'Incinerated Sky',
            image: '/pets/su-e/ps3.png',
            describe: 'Upon activating Su E\'s Active Skills, the carrier\'s Extra DMG Bonus will increase by 5% for 8s. Duration resets every time it is triggered.'
         },
         {
            name: 'Sunless Void',
            image: '/pets/su-e/ps4.png',
            describe: 'Increases the carrier\'s Void DMG by 10%.'
         },
         {
            name: 'Apokálypsis Selenes Eskhátes',
            image: '/pets/su-e/ps5.png',
            describe: 'When Luna: Oblivion performs Original Retribution or Final Retribution while carrying Su E, the CUB is summoned to perform a coordinated attack, dealing 2500% Void DMG and increasing all amplification effects granted by Apocalyptic Moonlight by 25%.'
         },
      ]
   },
   // Mei Wu
   {
      id: 22,
      image: '/pets/mei-wu/avatar.png',
      name: 'Mei Wu',
      type: 'Control, Damage',
      element: 'Physical',
      signature: 'Luna Oblivion',
      rank: 'S',
      story: [
         'Similar to its owner, it is very gentle and kind when not fighting, and will stay on a person\'s shoulder and flutter its wings to show its closeness. To unfriendly people, it will deliberately bring a little dust with it and then shake the dust off the person\'s shoulders.',
         'I secretly envied birds with huge wings, thinking that if my wings were bigger, I could cause powerful physical damage to the enemy with just a slight flap. However, after my master comforted me that the current size would make me cuter, I stopped worrying about it.',
         'He is very satisfied with the dark color design of his wings, which not only matches the owner\'s body, but also hides well in the dark, giving the enemy an unexpected attack. However, because of this, he will be ignored when he wants to get close to others, and then he will be left in the corner and feel sad.'
      ],
      background: [
         'It insists on maintaining a perfect and elegant posture even in battle, and regards dancing as a serious art, interpreting what it thinks of as "dance" in the way it understands. It usually flies beside its master when he practices dancing, and was once called the "dancing idiot" among auxiliary machines.',
         'Sometimes he would act childishly and like to run out to play with Pulao, and then come back covered in mud and dirt and ask his owner to wipe them clean.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Lunar Footfalls: Physical',
               image: '/pets/mei-wu/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fire energy waves, inflicting enemies in the area with Rigidness and dealing 250% Physical DMG 6 times. Rigidness: Enemies will be rooted for 2s.'
            },
            {
               name: 'Lonesome Phoenix: Physical',
               image: '/pets/mei-wu/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fly towards the target and strike the ground, dealing 450% Physical DMG 4 Times.'
            },
         ],
         ice: [
            {
               name: 'Lunar Footfalls: Ice',
               image: '/pets/mei-wu/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fire energy waves, inflicting enemies in the area with Rigidness and dealing 250% Ice DMG 6 times. Rigidness: Enemies will be rooted for 2s.'
            },
            {
               name: 'Lonesome Phoenix: Ice',
               image: '/pets/mei-wu/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fly towards the target and strike the ground, dealing 450% Ice DMG 4 Times.'
            },
         ],
         lightning: [
            {
               name: 'Lunar Footfalls: Lightning',
               image: '/pets/mei-wu/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fire energy waves, inflicting enemies in the area with Rigidness and dealing 250% Lightning DMG 6 times. Rigidness: Enemies will be rooted for 2s.'
            },
            {
               name: 'Lonesome Phoenix: Lightning',
               image: '/pets/mei-wu/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fly towards the target and strike the ground, dealing 450% Lightning DMG 4 Times.'
            },
         ],
         fire: [
            {
               name: 'Lunar Footfalls: Fire',
               image: '/pets/mei-wu/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fire energy waves, inflicting enemies in the area with Rigidness and dealing 250% Fire DMG 6 times. Rigidness: Enemies will be rooted for 2s.'
            },
            {
               name: 'Lonesome Phoenix: Fire',
               image: '/pets/mei-wu/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fly towards the target and strike the ground, dealing 450% Fire DMG 4 Times.'
            },
         ],
         dark: [
            {
               name: 'Lunar Footfalls: Dark',
               image: '/pets/mei-wu/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fire energy waves, inflicting enemies in the area with Rigidness and dealing 250% Dark DMG 6 times. Rigidness: Enemies will be rooted for 2s.'
            },
            {
               name: 'Lonesome Phoenix: Dark',
               image: '/pets/mei-wu/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fly towards the target and strike the ground, dealing 450% Dark DMG 4 Times.'
            },
         ],
         void: [
            {
               name: 'Lunar Footfalls: Void',
               image: '/pets/mei-wu/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fire energy waves, inflicting enemies in the area with Rigidness and dealing 250% Void DMG 6 times. Rigidness: Enemies will be rooted for 2s.'
            },
            {
               name: 'Lonesome Phoenix: Void',
               image: '/pets/mei-wu/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Mei Wu will fly towards the target and strike the ground, dealing 450% Void DMG 4 Times.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Spring Steps',
            image: '/pets/mei-wu/ps1.png',
            describe: 'Mei Wu\'s Active Skills deal 70% more DMG.'
         },
         {
            name: 'Fragrant Verse',
            image: '/pets/mei-wu/ps2.png',
            describe: 'Increases the ATK of Mei Wu\'s carrier by 100.'
         },
         {
            name: 'Intoxicated by Flowers',
            image: '/pets/mei-wu/ps3.png',
            describe: 'Upon activating of Mei Wu\'s Active Skills, the carrier\'s Extra DMG Bonus increases by 5% for 8s. Duration resets every time it is triggered.'
         },
         {
            name: 'Daffodil\'s Song',
            image: '/pets/mei-wu/ps4.png',
            describe: 'Increases the carrier\'s Physical DMG by 10%.'
         },
         {
            name: 'Moonlight Upon Thy Visage',
            image: '/pets/mei-wu/ps5.png',
            describe: 'When Hanying: Solacetune activates Moonsong Realm or triggers Phoenix Down while carrying Mei Wu, Mei Wu is summoned to perform a coordinated attack, dealing 1250% Physical DMG twice. CRIT DMG of Azure Allure and Sublimity increases by 75%.'
         },
      ]
   },
   // Rui Xue
   {
      id: 23,
      image: '/pets/rui-xue/avatar.png',
      name: 'Rui Xue',
      type: 'Control, Damage',
      element: 'Ice',
      signature: 'Wanshi Lucid Dreamer',
      rank: 'S',
      story: [
         'Rui Xue, the prototype is a service-type bionic machine that provides emotional support through social interaction, and mainly appears in the inpatient department of the Star of Life, the Youth Cultivation Center, etc. In order to successfully put this model on Earth for use, the members of the Science Council transformed it into an accompanying support unit and added a combat component to the tail.',
         'Rui Xue can analyze various values ​​of the human body and sense the emotional changes of the service recipients. When the patient is in a bad condition, Rui Xue will use physical contact and other methods to comfort him. "It will hug depressed patients and play with lonely children. Once we found that a patient who should have been in a panic remained rare calm, and Rui Xue was there, snuggling by his side until he fell asleep and woke up."',
         'According to survey data, the fox-shaped design has received a good response in the youth training center. Children like Rui Xue\'s playful and smart performance and are happy to interact with it. However, it should be noted that based on the underlying logic, it is difficult for Rui Xue to actively refuse unnecessary interactions, and excessive interactions will cause it to operate under load and unable to respond to real needs in a timely manner. This phenomenon has been alleviated after Wanshi and Rui Xue have completed the adaptation and fitting. Now, Rui Xue has mastered the skills of avoiding social interaction, knows the location of each corner for rest, and sometimes can capture the moment when it and Wanshi are recuperating together. This change allows Rui Xue to concentrate its increasingly scattered energy and bring more timely and more powerful assistance to those who really need help.'
      ],
      background: [
         'Rui Xue is quiet by nature and rarely appears in public, but its light and pure white image is deeply rooted in people\'s hearts. Whenever someone sees it, they regard it as a kind of good luck.',
         'Among the many ways to guide Rui Xue to appear, the most effective one is to pile small parts in its range of activities. "Look, this way it will come out, lie on the top of the small hill of parts, and keep scratching with its two claws. Pay attention, now is the best time for you to complete the behavioral observation record, but don\'t get too close, first, it is very alert and will run away, and second, if you are hit by its tail, it will be very painful." The staff responsible for the maintenance of the accompanying support unit explained to the new interns.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Footsteps in the Snow: Physical',
               image: '/pets/rui-xue/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will leap toward the target, slamming the ground and dealing 1800% Physical DMG once.'
            },
            {
               name: 'Snow Crystals: Physical',
               image: '/pets/rui-xue/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will flick its tail to fire crystal shards, inflicting enemies in the area with Rigidness and dealing 200% Physical DMG 7 times. Rigidness: Enemies will be rooted for 2s.'
            },
         ],
         ice: [
            {
               name: 'Footsteps in the Snow: Ice',
               image: '/pets/rui-xue/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will leap toward the target, slamming the ground and dealing 1800% Ice DMG once.'
            },
            {
               name: 'Snow Crystals: Ice',
               image: '/pets/rui-xue/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will flick its tail to fire crystal shards, inflicting enemies in the area with Rigidness and dealing 200% Ice DMG 7 times. Rigidness: Enemies will be rooted for 2s.'
            },
         ],
         lightning: [
            {
               name: 'Footsteps in the Snow: Lightning',
               image: '/pets/rui-xue/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will leap toward the target, slamming the ground and dealing 1800% Lightning DMG once.'
            },
            {
               name: 'Snow Crystals: Lightning',
               image: '/pets/rui-xue/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will flick its tail to fire crystal shards, inflicting enemies in the area with Rigidness and dealing 200% Lightning DMG 7 times. Rigidness: Enemies will be rooted for 2s.'
            },
         ],
         fire: [
            {
               name: 'Footsteps in the Snow: Fire',
               image: '/pets/rui-xue/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will leap toward the target, slamming the ground and dealing 1800% Fire DMG once.'
            },
            {
               name: 'Snow Crystals: Fire',
               image: '/pets/rui-xue/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will flick its tail to fire crystal shards, inflicting enemies in the area with Rigidness and dealing 200% Fire DMG 7 times. Rigidness: Enemies will be rooted for 2s.'
            },
         ],
         dark: [
            {
               name: 'Footsteps in the Snow: Dark',
               image: '/pets/rui-xue/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will leap toward the target, slamming the ground and dealing 1800% Dark DMG once.'
            },
            {
               name: 'Snow Crystals: Dark',
               image: '/pets/rui-xue/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will flick its tail to fire crystal shards, inflicting enemies in the area with Rigidness and dealing 200% Dark DMG 7 times. Rigidness: Enemies will be rooted for 2s.'
            },
         ],
         void: [
            {
               name: 'Footsteps in the Snow: Void',
               image: '/pets/rui-xue/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will leap toward the target, slamming the ground and dealing 1800% Void DMG once.'
            },
            {
               name: 'Snow Crystals: Void',
               image: '/pets/rui-xue/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, Rui Xue will flick its tail to fire crystal shards, inflicting enemies in the area with Rigidness and dealing 200% Void DMG 7 times. Rigidness: Enemies will be rooted for 2s.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Glistening Fortuity',
            image: '/pets/rui-xue/ps1.png',
            describe: 'Rui Xue\'s Active Skills deal 70% more DMG.'
         },
         {
            name: 'Niveous Prosperity',
            image: '/pets/rui-xue/ps2.png',
            describe: 'Increases the ATK of Rui Xue\'s carrier by 100.'
         },
         {
            name: 'Glacial Grace',
            image: '/pets/rui-xue/ps3.png',
            describe: 'Upon activating Rui Xue\'s Active Skills, the carrier\'s Extra DMG Bonus increases by 5% for 8s. Duration resets every time it is triggered.'
         },
         {
            name: 'Bright-hearted',
            image: '/pets/rui-xue/ps4.png',
            describe: 'Increases the carrier\'s Ice DMG by 10%.'
         },
         {
            name: 'Oneiros\' Ward',
            image: '/pets/rui-xue/ps5.png',
            describe: 'When Wanshi: Lucid Dreamer enters Calibration Mode while carrying Rui Xue, Rui Xue is summoned to perform a coordinated attack, dealing 250% Ice DMG 10 times. Base DMG of Hyperlinked Flight increases by 60%; if Wanshi: Lucid Dreamer has the maximum no. of Wounding stacks when performing Hyperlinked Flight, Base DMG additionally increases by 90%. Base DMG of Ruinous Blizzard increases by 75%; if 30 Correcting Rounds have been consumed, Base DMG additionally increases by 175%.'
         },
      ]
   },
   // Yi Kong
   {
      id: 24,
      image: '/pets/yi-kong/avatar.png',
      name: 'Yi Kong',
      type: 'Damage, Pull',
      element: 'Fire',
      signature: 'Lucia Pyroath',
      rank: 'S',
      story: [
         'Yi Kong, carrying the relevant data of the jet "Xingyu" equipped by the Crow Feather body, was originally used to assist the Oath Flame body in testing its flight performance. After the body adaptation was completed, it was transformed into an accompanying support unit by the Science Council.',
         'During the period of assisting the aircraft testing, the designers added a coordination module to the Yi Kong and increased its upper load-bearing limit. This module allows humans and constructs without the ability to fly to carry out short-term aerial combat with the Yi Kong through two methods: holding flight and riding flight. However, this type of coordination is quite demanding on the tacit understanding of the partners. Aerial tactics using the Yi Kong as the main auxiliary can currently only be realized within the Gray Crow Squad.',
         'Data shows that during the mission, Yi Kong will consume some extra computing power to determine the type of information and classify it, and the content it processes is not only from the environment, but also includes the interaction between the task executors and it. When the mission was over, some people who assisted Yi Kong during the mission said: They all got more or less rewards from Yi Kong. Sometimes it would bring you all kinds of glittering things, and sometimes it would appear in time when you need help. After noticing this, the relevant personnel continued to follow up on the situation and found that even outside the battlefield, as long as someone provided help to Yi Kong, it would give feedback to the other party in the future. The technicians called this behavior of Yi Kong a reward mechanism.'
      ],
      background: [
         'Yi Kong loves to collect all kinds of shiny little objects, and will arrange them neatly according to color and size. He is very satisfied with the final display and is often proud of it.',
         'The entertainment area in the logistics combat readiness room is Yi Kong\'s world. It has a thorough understanding of the gameplay of every facility here, and sometimes can even develop new gameplay based on the characteristics of different accompanying support units.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Swiping Pound: Physical',
               image: '/pets/yi-kong/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will circle around the target before slamming down, grouping surrounding enemies and dealing 1800% Physical DMG once.'
            },
            {
               name: 'Pouring Flames: Physical',
               image: '/pets/yi-kong/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will breathe flames at the target from the sky, dealing 500% Physical DMG 4 times.'
            },
         ],
         ice: [
            {
               name: 'Swiping Pound: Ice',
               image: '/pets/yi-kong/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will circle around the target before slamming down, grouping surrounding enemies and dealing 1800% Ice DMG once.'
            },
            {
               name: 'Pouring Flames: Ice',
               image: '/pets/yi-kong/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will breathe flames at the target from the sky, dealing 500% Ice DMG 4 times.'
            },
         ],
         lightning: [
            {
               name: 'Swiping Pound: Lightning',
               image: '/pets/yi-kong/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will circle around the target before slamming down, grouping surrounding enemies and dealing 1800% Lightning DMG once.'
            },
            {
               name: 'Pouring Flames: Lightning',
               image: '/pets/yi-kong/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will breathe flames at the target from the sky, dealing 500% Lightning DMG 4 times.'
            },
         ],
         fire: [
            {
               name: 'Swiping Pound: Fire',
               image: '/pets/yi-kong/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will circle around the target before slamming down, grouping surrounding enemies and dealing 1800% Fire DMG once.'
            },
            {
               name: 'Pouring Flames: Fire',
               image: '/pets/yi-kong/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will breathe flames at the target from the sky, dealing 500% Fire DMG 4 times.'
            },
         ],
         dark: [
            {
               name: 'Swiping Pound: Dark',
               image: '/pets/yi-kong/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will circle around the target before slamming down, grouping surrounding enemies and dealing 1800% Dark DMG once.'
            },
            {
               name: 'Pouring Flames: Dark',
               image: '/pets/yi-kong/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will breathe flames at the target from the sky, dealing 500% Dark DMG 4 times.'
            },
         ],
         void: [
            {
               name: 'Swiping Pound: Void',
               image: '/pets/yi-kong/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will circle around the target before slamming down, grouping surrounding enemies and dealing 1800% Void DMG once.'
            },
            {
               name: 'Pouring Flames: Void',
               image: '/pets/yi-kong/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Yi Kong will breathe flames at the target from the sky, dealing 500% Void DMG 4 times.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Shiny Flight',
            image: '/pets/yi-kong/ps1.png',
            describe: 'Yi Kong\'s Active Skill deals 70% more DMG.'
         },
         {
            name: 'Magnificent Grip',
            image: '/pets/yi-kong/ps2.png',
            describe: 'Increases the carrier\'s ATK by 100.'
         },
         {
            name: 'Brilliant Radiance',
            image: '/pets/yi-kong/ps3.png',
            describe: 'Each time Yi Kong casts an Active Skill, the carrier’s Extra DMG Bonus increases by 5% for 8s. Triggering this effect again will renew its duration.'
         },
         {
            name: 'Devouring Conflagration',
            image: '/pets/yi-kong/ps4.png',
            describe: 'Increases the carrier\'s Fire DMG by 10% and the carrier\'s Lightning DMG during Electronic Blast state by 10%.'
         },
         {
            name: 'Apricity of Tomorrow',
            image: '/pets/yi-kong/ps5.png',
            describe: 'When Lucia: Pyroath casts Basic Attack - Air-splitting Rays with Yi Kong equipped, summon Yi Kong to assist, dealing 2500% Fire DMG once. Base DMG increase effect of Radiant Engraving towards Signature Move - Auxiliary Precision Slash and Signature Move - Endless Eclipse increases by 20%.'
         },
      ]
   },
   // An Ji
   {
      id: 25,
      image: '/pets/an-ji/avatar.png',
      name: 'An Ji',
      type: 'Damage, Pull',
      element: 'Lightning',
      signature: 'Nanami Startrail',
      rank: 'S',
      story: [
         'According to the designer Nanami, An Ji is a mechanical body based on the interstellar creature in "Ocean Behemoth". "Starting with An Ji, the goal is to become a trainer of interstellar behemoths!" - said the lively designer.',
         'An Ji has performed well in both short- and medium-range combat tests. Its fin-shaped structure is equipped with small guided missiles, which can provide strong battlefield support for the structure. In addition, gain optical fibers are installed in its cavity, which can store energy in a short time and output high-energy beams, which can be used for close-range defense, cutting high-hardness materials, etc.',
         'In the original movie, An Ji is a super monster that feeds on stars, and the glowing lure on its head is a tool for receiving electromagnetic radiation and finding "prey". For the auxiliary machine, the lure module is used by the outside world to identify whether An Ji is dormant, or to act as a warm night light when its partner needs it.'
      ],
      background: [
         'Although its appearance looks rather ferocious, in fact, An Ji has shown good social adaptability in many tests, and it can be said that it has inherited the lively personality of its designer.',
         'An Ji prefer dimly lit environments and often wander aimlessly in quiet public spaces late at night. Recently, residents have been attracted by the glowing lures of An Ji and frightened by their appearance when approaching. Relevant departments have received many reports.',
      ],
      activeSkills: {
         physical: [
            {
               name: 'Bioluminescent Luring Predation: Physical',
               image: '/pets/an-ji/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji charges at the target, gathering nearby enemies and deals 1800% Physical DMG once.'
            },
            {
               name: 'Fin Rocket Barrage: Physical',
               image: '/pets/an-ji/physical.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji flies up into the sky and fires lasers at the target, dealing 500% Physical DMG once, followed by firing missiles that deal 250% Physical DMG 6 times.'
            },
         ],
         ice: [
            {
               name: 'Bioluminescent Luring Predation: Ice',
               image: '/pets/an-ji/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji charges at the target, gathering nearby enemies and deals 1800% Ice DMG once.'
            },
            {
               name: 'Fin Rocket Barrage: Ice',
               image: '/pets/an-ji/ice.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji flies up into the sky and fires lasers at the target, dealing 500% Ice DMG once, followed by firing missiles that deal 250% Ice DMG 6 times.'
            },
         ],
         lightning: [
            {
               name: 'Bioluminescent Luring Predation: Lightning',
               image: '/pets/an-ji/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji charges at the target, gathering nearby enemies and deals 1800% Lightning DMG once.'
            },
            {
               name: 'Fin Rocket Barrage: Lightning',
               image: '/pets/an-ji/lightning.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji flies up into the sky and fires lasers at the target, dealing 500% Lightning DMG once, followed by firing missiles that deal 250% Lightning DMG 6 times.'
            },
         ],
         fire: [
            {
               name: 'Bioluminescent Luring Predation: Fire',
               image: '/pets/an-ji/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji charges at the target, gathering nearby enemies and deals 1800% Fire DMG once.'
            },
            {
               name: 'Fin Rocket Barrage: Fire',
               image: '/pets/an-ji/fire.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji flies up into the sky and fires lasers at the target, dealing 500% Fire DMG once, followed by firing missiles that deal 250% Fire DMG 6 times.'
            },
         ],
         dark: [
            {
               name: 'Bioluminescent Luring Predation: Dark',
               image: '/pets/an-ji/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji charges at the target, gathering nearby enemies and deals 1800% Dark DMG once.'
            },
            {
               name: 'Fin Rocket Barrage: Dark',
               image: '/pets/an-ji/dark.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji flies up into the sky and fires lasers at the target, dealing 500% Dark DMG once, followed by firing missiles that deal 250% Dark DMG 6 times.'
            },
         ],
         void: [
            {
               name: 'Bioluminescent Luring Predation: Void',
               image: '/pets/an-ji/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji charges at the target, gathering nearby enemies and deals 1800% Void DMG once.'
            },
            {
               name: 'Fin Rocket Barrage: Void',
               image: '/pets/an-ji/void.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Upon tapping the CUB button, An Ji flies up into the sky and fires lasers at the target, dealing 500% Void DMG once, followed by firing missiles that deal 250% Void DMG 6 times.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Shield Bash Assault',
            image: '/pets/an-ji/ps1.png',
            describe: 'An Ji\'s Active Skills do 70% more DMG.'
         },
         {
            name: 'Luciferase Denaturation',
            image: '/pets/an-ji/ps2.png',
            describe: 'Increases the ATK of An Ji\'s carrier by 100.'
         },
         {
            name: 'Gum Piercing Fangs',
            image: '/pets/an-ji/ps3.png',
            describe: 'Upon activating An Ji\'s Active Skills, the carrier\'s Extra DMG Bonus will increase by 5% for 8s. Duration resets every time it is triggered.'
         },
         {
            name: 'Cosmic Pyroclasts',
            image: '/pets/an-ji/ps4.png',
            describe: 'Increases the carrier\'s Fire DMG by 10% and the carrier\'s Lightning DMG during Electronic Blast state by 10%.'
         },
         {
            name: 'Burning Phosphorus Whirlpool',
            image: '/pets/an-ji/ps5.png',
            describe: 'When Nanami: Startrail carries An Ji and casts Fallen Star Slam or Fiery Transformation with the enhanced effect, she summons An Ji to carry out a joint attack, dealing 1250% Lightning DMG twice. Base DMG of Luminance, Star Penetrating Celestial Strike and Gigabyte Star Crumbling Slash increases by 60%.'
         },
      ]
   },
]