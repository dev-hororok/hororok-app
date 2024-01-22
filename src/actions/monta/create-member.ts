'use server';
import authOption from '@/lib/authOption';
import { getApiUrl } from '@/lib/getApiUrl';
import { getServerSession } from 'next-auth';

export const createMontaMember = async () => {
  const session = await getServerSession(authOption);
  const apiUrl = getApiUrl('members', 'monta_nest');
  if (!session) return null;
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const data: { success: boolean; data: { member: IMontaMember } } =
      await response.json();

    if (!data.success) {
      throw new Error('서버에 문제가 발생했습니다.');
    }

    return data.data.member;
  } catch (e) {
    console.log('Server Error: ', e);
    throw new Error('서버에 문제가 발생했습니다.');
  }
};
