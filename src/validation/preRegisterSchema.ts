import { z } from 'zod';

export const preRegisterUserSchema = z.object({
  name: z.string(),
  companyName: z.string(),
  payPlan: z.string().optional(),
  puuid: z.string().optional(),
});

export const preRegisterUserClerkSchema = z.object({
  puuid: z.string(),
  clerk_user_id: z.string(),
});