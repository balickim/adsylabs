import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from 'server/api/trpc';
import { ROLES } from '@prisma/client';

export const communityRouter = createTRPCRouter({
  getSpecialists: protectedProcedure
    .input(z.object({
      take: z.number(),
      skip: z.number(),
      orderBy: z.object({}),
      where: z.object({}),
    }))
    .query( async ({ ctx, input }) => {
      const [total, data] = await Promise.all([
        ctx.prisma.profile.count({
          where: {
            ...input.where,
            role: ROLES.SPECIALIST,
          },
        }),
        ctx.prisma.profile.findMany({
          take: input.take,
          skip: input.skip,
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
            image_url: true,
            profile_specialist: {
              include: {
                tagsspecialization: { include: { tagsspecialization: true } },
                tagslanguage: { include: { tagslanguage: true } },
                tagsindustry: { include: { tagsindustry: true } },
                tagsplatform: { include: { tagsplatform: true } },
              },
            },
          },
          orderBy: [
            input.orderBy,
          ],
          where: {
            ...input.where,
            role: ROLES.SPECIALIST,
          },
        }),
      ]);

      return {
        data,
        meta: {
          total,
        } };
    }),
});
