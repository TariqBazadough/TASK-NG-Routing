export type DifficultyLevel = 'All' | 'Easy' | 'Moderate' | 'Hard';

export interface Trip {
  id: number;
  name: string;
  city: string;
  slug: string;
  length: string;
  difficulty: DifficultyLevel;
  rating: string;
  details: string;
  img: string;
}

export const trips: Trip[] = [
  {
    id: 1,
    name: 'Petra Hike',
    city: 'maan',
    slug: 'petra-hike',
    length: '10',
    difficulty: 'Easy',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    img: 'https://lp-cms-production.imgix.net/2019-06/2bf1faac5c1e26d5cb94128cf762517a-petra.jpg',
    rating: '3/5',
  },
  {
    id: 2,
    name: 'Wadi-rum Hike',
    city: 'maan',
    slug: 'wadi-rum-hike',
    length: '20',
    difficulty: 'Moderate',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    rating: '4/5',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Wadi_Rum_in_December.jpg/1200px-Wadi_Rum_in_December.jpg',
  },
  {
    id: 3,
    name: 'Dana hike',
    slug: 'dana-hike',
    city: 'ajloun',
    length: '30',
    difficulty: 'Hard',
    rating: '5/5',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Dana_Reserve_02.jpg',
  },
  {
    id: 4,
    name: 'ًWadi Araba Hike',
    city: 'maan',
    slug: 'wadi-araba-hike',
    length: '10',
    difficulty: 'Hard',
    rating: '4/5',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    img: 'https://www.ammonnews.net/img/big/20091027big491941.jpeg?medium',
  },
  {
    id: 5,
    name: 'ًWadi Ghuwair Hike',
    city: 'ajloun',
    slug: 'wadi-ghuwair-hike',
    length: '20',
    difficulty: 'Easy',
    rating: '5/5',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    img: 'https://alrai.com/uploads/images/2019/08/01/179387.jpg?t=1',
  },
  {
    id: 6,
    name: 'Ajloun Hike',
    slug: 'ajloun-hike',
    city: 'ajloun',
    length: '30',
    rating: '2/5',
    difficulty: 'Moderate',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    img: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/419374083.jpg?k=7aa4991f14743908bfe20cfe386e63cc617dfac8322320f057e67f37211b9b66&o=',
  },
];
