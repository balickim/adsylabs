import { z } from 'zod';

export const preRegisterUserSchema = z.object({
  name: z.string(),
  companyName: z.string(),
  puuid: z.string(),
});

export const preRegisterUserClerkSchema = z.object({
  puuid: z.string(),
  clerk_user_id: z.string(),
});