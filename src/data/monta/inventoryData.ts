import {
  InventoryCharacter,
  InventoryUseItem,
} from '@/app/(main)/timer/inventory/page';
import { IEggInventory } from '@/models/monta/egg.model';

export const dummyEggInventory: IEggInventory[] = [
  {
    egg_inventory_id: '1234',
    progress: 0,
    egg: {
      egg_id: 'String',
      name: 'String',
      description: '',
      purchase_price: 200,
      required_study_time: 303,
      image_url: '/pockets/pocket_1.png',
      grade: 'String',
    },
  },
  {
    egg_inventory_id: '1234',
    progress: 33,
    egg: {
      egg_id: 'String',
      name: 'String',
      description: '',
      purchase_price: 200,
      required_study_time: 33,
      image_url: '/pockets/pocket_2.png',
      grade: 'String',
    },
  },
  {
    egg_inventory_id: '2135',
    progress: 5552,
    egg: {
      egg_id: 'String',
      name: 'String',
      description: '',
      purchase_price: 200,
      required_study_time: 6124,
      image_url: '/pockets/pocket_3.png',
      grade: 'String',
    },
  },
];

export const dummyUseItems: InventoryUseItem[] = [
  {
    itemType: 'streak-color-change',
    count: 40,
  },
];

export const dummyCharacterItems: InventoryCharacter[] = [
  {
    imgSrc: '/character/monster_1.png',
    alt: 'monta',
    price: 4000,
    name: '몬스터 1',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_2.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 2',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_3.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 3',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_4.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 4',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_5.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 5',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_6.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 6',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_7.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 7',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_8.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 8',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_9.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 9',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_10.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 10',
    grade: 'C',
  },
];
