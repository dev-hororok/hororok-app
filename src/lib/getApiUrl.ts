import { Base_Backend_URL, Monta_Nest_Backend_URL } from './constant';

export type SubApp = 'monta_nest' | 'monta_spring';

export const getApiUrl = (endpoint: string, subApp?: SubApp) => {
  if (subApp === 'monta_nest') {
    return `${Monta_Nest_Backend_URL}/${endpoint}`;
  }
  if (subApp === 'monta_spring') {
    return `example.com/${endpoint}`;
  }

  return `${Base_Backend_URL}/${endpoint}`;
};
