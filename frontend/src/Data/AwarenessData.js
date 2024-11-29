export const awarenessData = [
   {
      id: 1,
      name: 'Darwin',
      banner: '/awareness/darwin/banner.png',
      scope: 'Construct',
      rarity: 6,
      characteristics: 'Elimination of reinforcement',
      portrait: [
         {
            image: '/awareness/darwin/14.png',
            poster: '/awareness/darwin/14-poster.png'
         },
         {
            image: '/awareness/darwin/25.png',
            poster: '/awareness/darwin/25-poster.png'
         },
         {
            image: '/awareness/darwin/36.png',
            poster: '/awareness/darwin/36-poster.png'
         },
      ],
      stats: {
         hp: '149/1491',
         atk: '13/129',
         crit: '6/67',
         def: '22/218',
      },
      setSkills: {
         '2-Piece set': 'Each time a ball is eliminated, the extra damage bonus increases by 3% and lasts for 4 seconds. It can be stacked up to 5 times, and repeated triggering will refresh the duration.',
         '4-Piece set': 'When a signal ball of a certain color is eliminated, a record mark is added. After all three signal balls of different colors are recorded, a large-scale shock wave with a diameter of 12 meters is released with the character as the center, causing 600% physical damage and refreshing the record mark.',
      },
      breakthroughMaterials: {
         'Breakthrough 1': { circuit: 4, nuts: 10000 },
         'Breakthrough 2': { alloy: 4, circuit: 4, nuts: 20000 },
         'Breakthrough 3': { alloyHigh: 3, circuitHigh: 3, alloy: 3, circuit: 6, nuts: 30000 },
         'Breakthrough 4': { alloyHigh: 5, circuitHigh: 5, alloy: 3, circuit: 3, nuts: 40000 },
      },
      stories: {
         'Story 1': 'The human period has brought about great changes in the field of biology. Darwin\'s biological theory has been regarded as a classic by biologists in the Golden Age, but Darwin was not satisfied with this. What "he" wanted to find was the ultimate direction of human evolution, and he conducted many experiments for this purpose, including self-transformation. In this case, whether we call him "he" or "she" seems to no longer matter.',
         'Story 2': 'In addition to being a biologist, Darwin was also an adventurous man, and his never-flinching spirit of adventure could also be of great help on the battlefield. Even without a physical body, Darwin still thought about how to leave the Sky Garden every day and go to the surface to survey species in various places.'
      }
   }
]