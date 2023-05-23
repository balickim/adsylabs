import { createTRPCRouter, publicProcedure } from 'server/api/trpc';
import { preRegisterSchema } from 'validation';
import { preRegisterSpecialistSchema, preRegisterUserClerkSchema } from 'validation/preRegisterSchema';

export const profileRouter = createTRPCRouter({
  getUsers: publicProcedure
    .query( ({ ctx }) => {
      return ctx.prisma.profile.findMany();
    }),

  insertCustomer: publicProcedure
    .input(preRegisterSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.$transaction(async (tx) => {
        const profile = await tx.profile.create({ data: { name: input.name, role: input.role } });
        await tx.profile_customer.create(
          {
            data:
              {
                profile_id: profile.id,
                company_name: input.companyName,
                pay_plan: input.payPlan,
              },
          }
        );

        return profile.id;
      });
    }),

  updateClerkUserId: publicProcedure
    .input(preRegisterUserClerkSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.profile.update({
        where: { id: input.profile_id },
        data: { clerk_user_id: input.clerk_user_id },
      });
    }),

  insertSpecialist: publicProcedure
    .input(preRegisterSpecialistSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.$transaction(async (tx) => {
        const profile = await tx.profile.create({ data: { name: input.name, role: input.role } });
        await tx.profile_specialist.create(
          {
            data:
              {
                profile_id: profile.id,
                linkedin_url: input.linkedinUrl,
              },
          }
        );

        return profile.id;
      });
    }),
});
