
import { createTRPCRouter, publicProcedure } from 'server/api/trpc';
import { preRegisterUserSchema } from 'validation';
import { db } from 'server/database';
import { preRegisterUserClerkSchema } from 'validation/preRegisterSchema';

export const profileRouter = createTRPCRouter({
  getUsers: publicProcedure
    .query(async () => {
      return await db
        .selectFrom('user_profile')
        .select(['name', 'company_name', 'pay_plan', 'clerk_user_id', 'created_at'])
        .execute();
    }),

  insertUser: publicProcedure
    .input(preRegisterUserSchema)
    .mutation(async ({ input }) => {
      await db
        .insertInto('user_profile')
        .values([{
          name: input.name,
          company_name: input.companyName,
          pay_plan: input.payPlan,
          puuid: input.puuid,
        }])
        .execute();
    }),

  updateClerkUserId: publicProcedure
    .input(preRegisterUserClerkSchema)
    .mutation(async ({ input }) => {
      await db
        .updateTable('user_profile')
        .set({ clerk_user_id: input.clerk_user_id })
        .where('puuid', '=', input.puuid)
        .execute();
    }),
});
