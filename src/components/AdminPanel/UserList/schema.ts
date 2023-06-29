import { z } from 'zod';

export const schema = z.object({
  name: z.string().optional(),
  surname: z.string().optional(),
  clerk_user_id: z.string().optional(),
  email: z.string().optional(),
  created_at: z.string().optional(),
  role: z.any(),
});

export type Task = z.infer<typeof schema>