import { z } from 'zod';

import { PAY_PLANS } from 'utils/constants';

export const preRegisterUserSchema = z.object({
  name: z.string(),
  companyName: z.string(),
  payPlan: z.enum([PAY_PLANS.BASIC, PAY_PLANS.STANDARD, PAY_PLANS.PREMIUM_GUARANTEE]).optional(),
  puuid: z.string().optional(),
});

export const preRegisterUserClerkSchema = z.object({
  puuid: z.string(),
  clerk_user_id: z.string(),
});