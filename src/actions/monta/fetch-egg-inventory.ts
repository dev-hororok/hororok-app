'use server';
import authOption from '@/lib/authOption';
import { getApiUrl } from '@/lib/getApiUrl';
import { IEggInventory } from '@/models/monta/egg.model';
import { getServerSession } from 'next-auth';

export const fetchEggInventory = async (member_id: string) => {
  const session = await getServerSession(authOption);
  const apiUrl = getApiUrl(`members/${member_id}/egg-inventory`, 'monta_nest');
  if (!session) return [];
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const data: { data: { egg_inventory: IEggInventory[] } } =
      await response.json();

    return [
      {
        egg_inventory_id: '1234',
        progress: 0,
        egg: {
          egg_id: 'String',
          name: 'String',
          description: 'String',
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
          description: 'String',
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
          description: 'String',
          required_study_time: 6124,
          image_url: '/pockets/pocket_3.png',
          grade: 'String',
        },
      },
    ];
    //return data.data.egg_inventory;
  } catch (e) {
    console.log('Error fetching data', e);
    return [];
  }
};
