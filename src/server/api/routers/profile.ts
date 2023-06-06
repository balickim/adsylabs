import { createTRPCRouter, protectedProcedure, publicProcedure } from 'server/api/trpc';
import {
  preRegisterSchema,
  preRegisterSpecialistSchema,
  preRegisterUserClerkSchema,
} from 'validation/preRegisterSchema';
import {
  specialistBackgroundImageUrlSchema,
  specialistCaseStudiesUrlsSchema, specialistCustomTagsSchema,
  specialistDescriptionSchema,
  specialistImageUrlSchema,
  specialistNameSurnameSchema,
  specialistTagsSchema,
  specialistTitleSchema,
} from 'validation/SettingsSchema';

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

  getProfile: protectedProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.profile.findFirst({
        select: { name: true, surname: true, role: true, image_url: true, background_image_url: true, profiles_specialists: true, profiles_customers: true },
        where: { clerk_user_id: ctx.auth.userId },
      });
    }),

  getProfileSpecialist: protectedProcedure
    .query(async ({ ctx }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.findFirst({
        where: { profile_id: profile.id },
        include: {
          tagsspecialization: { include: { tagsspecialization: true } },
          tagslanguage: { include: { tagslanguage: true } },
          tagsindustry: { include: { tagsindustry: true } },
          tagsplatform: { include: { tagsplatform: true } },
        },
      }
      );
    }),

  updateSpecialistNameSurname: protectedProcedure
    .input(specialistNameSurnameSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.profile.update({
        where: { clerk_user_id: ctx.auth.userId },
        data: { name: input.name, surname: input.surname },
      });
    }),

  updateSpecialistTitle: protectedProcedure
    .input(specialistTitleSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: { title: input.title },
      });
    }),

  updateSpecialistDescription: protectedProcedure
    .input(specialistDescriptionSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: { description: input.description },
      });
    }),

  updateProfileImage: protectedProcedure
    .input(specialistImageUrlSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.profile.update({
        where: { clerk_user_id: ctx.auth.userId },
        data: { image_url: input.image_url },
      });
    }),

  updateBackgroundImage: protectedProcedure
    .input(specialistBackgroundImageUrlSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.profile.update({
        where: { clerk_user_id: ctx.auth.userId },
        data: { background_image_url: input.background_image_url },
      });
    }),

  updateCaseStudies: protectedProcedure
    .input(specialistCaseStudiesUrlsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: { case_studies_urls: input.case_studies_urls },
      });
    }),

  getTagsSpecializations: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.tagsspecialization.findMany();
    }),

  getTagsLanguages: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.tagslanguage.findMany();
    }),

  getTagsIndustries: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.tagsindustry.findMany();
    }),

  getTagsPlatforms: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.tagsplatform.findMany();
    }),

  updateTagsSpecializations: protectedProcedure
    .input(specialistTagsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: {
          tagsspecialization: {
            deleteMany: {},
            connectOrCreate: input.tagIds.map((tagId) => {
              return {
                where: {
                  profile_id_tagsspecialization_id: {
                    profile_id: profile.id,
                    tagsspecialization_id: tagId,
                  } },
                create: { tagsspecialization_id: tagId },
              };
            }),
          } },
      });
    }),

  updateTagsLanguages: protectedProcedure
    .input(specialistTagsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: {
          tagslanguage: {
            deleteMany: {},
            connectOrCreate: input.tagIds.map((tagId) => {
              return {
                where: {
                  profile_id_tagslanguage_id: {
                    profile_id: profile.id,
                    tagslanguage_id: tagId,
                  } },
                create: { tagslanguage_id: tagId },
              };
            }),
          } },
      });
    }),

  updateTagsIndustries: protectedProcedure
    .input(specialistTagsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: {
          tagsindustry: {
            deleteMany: {},
            connectOrCreate: input.tagIds.map((tagId) => {
              return {
                where: {
                  profile_id_tagsindustry_id: {
                    profile_id: profile.id,
                    tagsindustry_id: tagId,
                  } },
                create: { tagsindustry_id: tagId },
              };
            }),
          } },
      });
    }),

  updateTagsPlatforms: protectedProcedure
    .input(specialistTagsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: {
          tagsplatform: {
            deleteMany: {},
            connectOrCreate: input.tagIds.map((tagId) => {
              return {
                where: {
                  profile_id_tagsplatform_id: {
                    profile_id: profile.id,
                    tagsplatform_id: tagId,
                  } },
                create: { tagsplatform_id: tagId },
              };
            }),
          } },
      });
    }),

  updateSpecialistCustomTagSpecialization: protectedProcedure
    .input(specialistCustomTagsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: { custom_tags_specialization: input.tagNames },
      });
    }),

  updateSpecialistCustomTagIndustry: protectedProcedure
    .input(specialistCustomTagsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: { custom_tags_industry: input.tagNames },
      });
    }),

  updateSpecialistCustomTagLanguage: protectedProcedure
    .input(specialistCustomTagsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: { custom_tags_language: input.tagNames },
      });
    }),

  updateSpecialistCustomTagPlatform: protectedProcedure
    .input(specialistCustomTagsSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        select: { id: true },
        where: { clerk_user_id: ctx.auth.userId },
      });

      if (!profile) throw new Error('profile not found');

      return ctx.prisma.profile_specialist.update({
        where: { profile_id: profile.id },
        data: { custom_tags_platform: input.tagNames },
      });
    }),
});
