import { IAccount } from './../../models/account.model';
import authOption from '@/lib/authOption';
import { getApiUrl } from '@/lib/getApiUrl';
import { getServerSession } from 'next-auth';

export const fetchMe = async () => {
  const session = await getServerSession(authOption);
  const apiUrl = getApiUrl('accounts/me');

  if (!session) return null;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const data: { success: boolean; data: IAccount } = await response.json();
    console.log('실제 요청');
    return data.data;
  } catch (e) {
    console.log('Error fetching data', e);
    return null;
  }
};
