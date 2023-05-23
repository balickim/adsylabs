import { z } from 'zod';

import { PAY_PLANS, ROLES } from '@prisma/client';

const props = {
  name: z
    .string({ required_error: 'To pole jest wymagane' }),
  companyName: z
    .string({ required_error: 'To pole jest wymagane' }),
  payPlan: z
    .enum([PAY_PLANS.BASIC, PAY_PLANS.STANDARD, PAY_PLANS.PREMIUM_GUARANTEE])
    .optional(),
  linkedinUrl: z
    .string({ required_error: 'To pole jest wymagane' })
    .url('Pole musi zawierać adres url'),
  role: z
    .enum([ ROLES.CUSTOMER, ROLES.SPECIALIST ])
    .optional(),
};

export const preRegisterSchema = z.object({
  name: props.name,
  companyName: props.companyName,
  payPlan: props.payPlan,
  role: props.role,
});

export const preRegisterSpecialistSchema = z.object({
  name: props.name,
  linkedinUrl: props.linkedinUrl,
  role: props.role,
});

export const preRegisterUserClerkSchema = z.object({
  profile_id: z.string(),
  clerk_user_id: z.string(),
});