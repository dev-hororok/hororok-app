const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

const getCurrentUser = async () => {
  return await fetch(`${BASE_API_URL}/current`);
};

const getUser = async (userId: string) => {
  return await fetch(`${BASE_API_URL}/current`);
};
