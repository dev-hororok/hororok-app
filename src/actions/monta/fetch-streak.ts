'use server';
import authOption from '@/lib/authOption';
import { getApiUrl } from '@/lib/getApiUrl';
import { IStreak } from '@/models/monta/streak.model';
import { getServerSession } from 'next-auth';

export const fetchStreak = async (member_id: string) => {
  const session = await getServerSession(authOption);
  const apiUrl = getApiUrl(`members/${member_id}/study-streak`, 'monta_nest');
  if (!session) return null;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const data: { data: IStreak } = await response.json();

    return data.data;
  } catch (e) {
    console.log('Error fetching data', e);
    return null;
  }
};
