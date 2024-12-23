export const petData = [
   {
      id: 100,
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
               image: '/pets/cetus/ap.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Physical DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Physical',
               image: '/pets/cetus/ap.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Physical DMG, and pushing the enemy to the character.'
            },
         ],
         ice: [
            {
               name: 'Terrifying Vortex: Ice',
               image: '/pets/cetus/ai.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Ice DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Ice',
               image: '/pets/cetus/ai.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Ice DMG, and pushing the enemy to the character.'
            },
         ],
         lightning: [
            {
               name: 'Terrifying Vortex: Lightning',
               image: '/pets/cetus/al.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Lightning DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Lightning',
               image: '/pets/cetus/al.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Lightning DMG, and pushing the enemy to the character.'
            },
         ],
         fire: [
            {
               name: 'Terrifying Vortex: Fire',
               image: '/pets/cetus/af.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Fire DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Fire',
               image: '/pets/cetus/af.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Fire DMG, and pushing the enemy to the character.'
            },
         ],
         dark: [
            {
               name: 'Terrifying Vortex: Dark',
               image: '/pets/cetus/ad.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Dark DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Dark',
               image: '/pets/cetus/ad.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will swim toward the enemy, swing its tail, and backflip, generating waves behind the target, dealing 1750% Dark DMG, and pushing the enemy to the character.'
            },
         ],
         void: [
            {
               name: 'Terrifying Vortex: Void',
               image: '/pets/cetus/av.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. After casting, Cetus will leap up, dive to the target location, and generate a vortex, dealing 1600% Void DMG and applying Rigidity.\nRigidity: Immobilizes the enemy for 2s.'
            },
            {
               name: 'Raging Waves: Void',
               image: '/pets/cetus/av.png',
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
               image: '/pets/thorny/ap.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Physical DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Physical',
               image: '/pets/thorny/ap.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Physical DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         ice: [
            {
               name: 'Needle Gyro Orb: Ice',
               image: '/pets/thorny/ai.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Ice DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Ice',
               image: '/pets/thorny/ai.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Ice DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         lightning: [
            {
               name: 'Needle Gyro Orb: Lightning',
               image: '/pets/thorny/al.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Lightning DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Lightning',
               image: '/pets/thorny/al.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Lightning DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         fire: [
            {
               name: 'Needle Gyro Orb: Fire',
               image: '/pets/thorny/af.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Fire DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Fire',
               image: '/pets/thorny/af.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Fire DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         dark: [
            {
               name: 'Needle Gyro Orb: Dark',
               image: '/pets/thorny/ad.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Dark DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Dark',
               image: '/pets/thorny/ad.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy and shoot needles at other enemies around, dealing 500% Dark DMG and gaining a shield equal to 10% of the carrier\'s max HP for 2s. Each time a needle hits an enemy, Thorny\'s next attack will gain 15% Extra DMG (up to 75%).'
            },
         ],
         void: [
            {
               name: 'Needle Gyro Orb: Void',
               image: '/pets/thorny/av.png',
               describe: 'The CUB button will be activated after pinging 6 basic Signal Orbs. Upon casting, Thorny will dash toward the enemy. On hit, Thorny will spin attack 10 times with each time dealing 100% Void DMG to the enemy.'
            },
            {
               name: 'Raging Waves: Void',
               image: '/pets/thorny/av.png',
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
               image: '/pets/lingya/ap.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Physical DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Physical',
               image: '/pets/lingya/ap.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Physical DMG.'
            },
         ],
         ice: [
            {
               name: 'Precise Volt Charge: Ice',
               image: '/pets/lingya/ai.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Ice DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Ice',
               image: '/pets/lingya/ai.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Ice DMG.'
            },
         ],
         lightning: [
            {
               name: 'Precise Volt Charge: Lightning',
               image: '/pets/lingya/al.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Lightning DMG to hit enemies and applying Charge to them. Lingya will accumulate 10% Lightning DMG its carrier has dealt to them. Once the accumulated DMG reaches 12000 or has lasted 5s, Lingya inflicts the accumulated DMG on the enemy.'
            },
            {
               name: 'Wild Volt Charge: Lightning',
               image: '/pets/lingya/al.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Lightning DMG and applying Charge to them. Lingya will accumulate 10% Lightning DMG its carrier has dealt to them. Once the accumulated DMG reaches 12000 or has lasted 5s, Lingya inflicts the accumulated DMG on the enemy.'
            },
         ],
         fire: [
            {
               name: 'Precise Volt Charge: Fire',
               image: '/pets/lingya/af.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Fire DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Fire',
               image: '/pets/lingya/af.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Fire DMG.'
            },
         ],
         dark: [
            {
               name: 'Precise Volt Charge: Dark',
               image: '/pets/lingya/ad.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Dark DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Dark',
               image: '/pets/lingya/ad.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Dark DMG.'
            },
         ],
         void: [
            {
               name: 'Precise Volt Charge: Void',
               image: '/pets/lingya/av.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies in a straight line at medium speed, dealing 800% Void DMG to hit enemies.'
            },
            {
               name: 'Wild Volt Charge: Void',
               image: '/pets/lingya/av.png',
               describe: 'The CUB button will be activated after 6 random pings. After casting, Lingya will shoot an electric ball that flies at high speed and explodes when hitting the enemy, dealing 1200% Void DMG.'
            },
         ],
      },
      passiveSkills: [
         {
            name: 'Generator Retrofit',
            image: '/pets/thorny/ps1.png',
            describe: 'Lingya\'s Active Skills deal 60% more DMG.'
         },
         {
            name: 'Magnet Impulse',
            image: '/pets/thorny/ps2.png',
            describe: 'Increases the ATK of Lingya\'s carrier by 60.'
         },
         {
            name: 'High-voltage Relay',
            image: '/pets/thorny/ps3.png',
            describe: 'After performing Lingya\'s Active Skills, the next switched-in member\'s Extra DMG Bonus will increase by 8% for 8s.'
         },
         {
            name: 'Magnetic Sensor',
            image: '/pets/thorny/ps4.png',
            describe: 'Increases the carrier\'s Lightning DMG by 10%.'
         },
         {
            name: 'Voltage Transformer',
            image: '/pets/thorny/ps5.png',
            describe: 'The carrier\'s ATK increases by 30 for 5s after pinging basic Signal Orbs 3 times. It can be stacked up to 2 times. After it reaches max stacks, the duration will refresh whenever it is triggered. The next switched-in member will also gain an extra Blue Orb.'
         },
      ]
   },
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
               image: '/pets/seeshell/ap.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Physical Area DMG.'
            },
            {
               name: 'Rapid Quartet: Physical',
               image: '/pets/seeshell/ap.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Physical Area DMG in total.'
            },
         ],
         ice: [
            {
               name: 'Grenade Carnivale: Ice',
               image: '/pets/seeshell/ai.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Ice Area DMG and slows the enemies it hits. Hitting an enemy again will renew the slow duration. The grenades also cause Data Attack.'
            },
            {
               name: 'Rapid Quartet: Ice',
               image: '/pets/seeshell/ai.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Ice Area DMG in total and slowing the enemies hit for 5s. Also causes Data Attack'
            },
         ],
         lightning: [
            {
               name: 'Grenade Carnivale: Lightning',
               image: '/pets/seeshell/al.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Lightning Area DMG.'
            },
            {
               name: 'Rapid Quartet: Lightning',
               image: '/pets/seeshell/al.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Lightning Area DMG in total.'
            },
         ],
         fire: [
            {
               name: 'Grenade Carnivale: Fire',
               image: '/pets/seeshell/af.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Fire Area DMG.'
            },
            {
               name: 'Rapid Quartet: Fire',
               image: '/pets/seeshell/af.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Fire Area DMG in total.'
            },
         ],
         dark: [
            {
               name: 'Grenade Carnivale: Dark',
               image: '/pets/seeshell/ad.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Dark Area DMG.'
            },
            {
               name: 'Rapid Quartet: Dark',
               image: '/pets/seeshell/ad.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 4 grenades from the turret, dealing 1000% Dark Area DMG in total.'
            },
         ],
         void: [
            {
               name: 'Grenade Carnivale: Void',
               image: '/pets/seeshell/av.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Seeshell expand its shells to launch 1 grenade from the turret. Each time Seeshell fires a grenade, there is a 78% chance to fire 1 additional grenade, up to a total of 9 grenades. Each grenade deals 250% Void Area DMG.'
            },
            {
               name: 'Rapid Quartet: Void',
               image: '/pets/seeshell/av.png',
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
               image: '/pets/noctua/ap.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Physical DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Physical',
               image: '/pets/noctua/ap.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Physical DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
         ice: [
            {
               name: 'Radiative Shock - Barrier: Ice',
               image: '/pets/noctua/ai.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Ice DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Ice',
               image: '/pets/noctua/ai.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Ice DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
         lightning: [
            {
               name: 'Radiative Shock - Barrier: Lightning',
               image: '/pets/noctua/al.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Lightning DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Lightning',
               image: '/pets/noctua/al.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Lightning DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
         fire: [
            {
               name: 'Radiative Shock - Barrier: Fire',
               image: '/pets/noctua/af.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Fire DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Fire',
               image: '/pets/noctua/af.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Fire DMG to the enemies nearby while granting the character Super Armor for 5s.'
            },
         ],
         dark: [
            {
               name: 'Radiative Shock - Barrier: Dark',
               image: '/pets/noctua/ad.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Dark DMG to the enemies nearby while leaving a mark on them that deals 200% Dark DMG upon detonation. While this skill is being cast, Noctua grants the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'s Attack for 10s. Also causes Data Attack.'
            },
            {
               name: 'Radiative Shock - Field: Dark',
               image: '/pets/noctua/ad.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 1000% Dark DMG to the enemies nearby while leaving a mark on them that deals 200% Dark DMG upon detonation. While this skill is being cast, Noctua grants the character Super Armor for 5s. Also causes Data Attack.'
            },
         ],
         void: [
            {
               name: 'Radiative Shock - Barrier: Void',
               image: '/pets/noctua/av.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Noctua fly one circle around the character currently in control, dealing 800% Void DMG to the enemies nearby while granting the character Super Armor for 3s and a shield with capacity equal to 200% of the CUB\'S Attack for 10s.'
            },
            {
               name: 'Radiative Shock - Field: Void',
               image: '/pets/noctua/av.png',
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
               image: '/pets/yuan-ye/ap.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Physical DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Physical DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Physical',
               image: '/pets/yuan-ye/ap.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Physical DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Physical DMG and stun the enemy for 5s.'
            },
         ],
         ice: [
            {
               name: 'Loaded Charge: Ice',
               image: '/pets/yuan-ye/ai.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Ice DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Ice DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Ice',
               image: '/pets/yuan-ye/ai.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Ice DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Ice DMG and stun the enemy for 5s.'
            },
         ],
         lightning: [
            {
               name: 'Loaded Charge: Lightning',
               image: '/pets/yuan-ye/al.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Lightning DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Lightning DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Lightning',
               image: '/pets/yuan-ye/al.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Lightning DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Lightning DMG and stun the enemy for 5s.'
            },
         ],
         fire: [
            {
               name: 'Loaded Charge: Fire',
               image: '/pets/yuan-ye/af.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Fire DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Fire DMG and stun the enemy for 2s. Also causes Data Attack.'
            },
            {
               name: 'Feint Attack: Fire',
               image: '/pets/yuan-ye/af.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% DMG and stun the enemy for 5s. Also causes Data Attack.'
            },
         ],
         dark: [
            {
               name: 'Loaded Charge: Dark',
               image: '/pets/yuan-ye/ad.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Dark DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Dark DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Dark',
               image: '/pets/yuan-ye/ad.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 250% Dark DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 500% Dark DMG and stun the enemy for 5s.'
            },
         ],
         void: [
            {
               name: 'Loaded Charge: Void',
               image: '/pets/yuan-ye/av.png',
               describe: 'After pinging a total of 6 basic Signal Orbs, the CUB button will become available. Tapping it will make Yuan Ye charge toward the target, dealing 500% Void DMG. If Yuan Ye hits the enemy, it will knock the enemy again to deal 1000% Void DMG and stun the enemy for 2s.'
            },
            {
               name: 'Feint Attack: Void',
               image: '/pets/yuan-ye/av.png',
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
            describe: 'After Yuan Ye casts a skill, its carrier’s ATK increases by 25. Stacks up to 3 times.'
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
]