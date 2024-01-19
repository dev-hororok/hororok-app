import { z } from 'zod';

export const registerFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(4, { message: 'Must be 4 or more characters long' }),
});
