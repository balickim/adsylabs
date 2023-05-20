import { z } from 'zod';

import { PAY_PLANS } from 'utils/constants';

const props = {
  name: z
    .string({ required_error: 'To pole jest wymagane' }),
  companyName: z
    .string({ required_error: 'To pole jest wymagane' }),
  payPlan: z
    .enum([PAY_PLANS.BASIC, PAY_PLANS.STANDARD, PAY_PLANS.PREMIUM_GUARANTEE])
    .optional(),
  puuid: z
    .string()
    .optional(),
  linkedinUrl: z
    .string({ required_error: 'To pole jest wymagane' })
    .url('Pole musi zawierać adres url'),
};

export const preRegisterSchema = z.object({
  name: props.name,
  companyName: props.companyName,
  payPlan: props.payPlan,
  puuid: props.puuid,
});

export const preRegisterSpecialistSchema = z.object({
  name: props.name,
  linkedinUrl: props.linkedinUrl,
});

export const preRegisterUserClerkSchema = z.object({
  puuid: z.string(),
  clerk_user_id: z.string(),
});