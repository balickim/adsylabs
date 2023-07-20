import { z } from 'zod';

export const userSchema = z.object({
  id: z.any().optional(),
  name: z.any().optional(),
  surname: z.any().optional(),
  clerk_user_id: z.any().optional(),
  email: z.any().optional(),
  created_at: z.any().optional(),
  role: z.any().optional(),
});

export type User = z.infer<typeof userSchema>