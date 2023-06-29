import { z } from 'zod';

export const specialistNameSurnameSchema = z.object({
  name: z.string().optional(),
  surname: z.string().optional(),
});
export const specialistTitleSchema = z.object({
  title: z.string().max(100).optional(),
});
export const specialistDescriptionSchema = z.object({
  description: z.string().max(500).optional(),
});
export const specialistImageUrlSchema = z.object({
  image_url: z.string().optional(),
});
export const specialistBackgroundImageUrlSchema = z.object({
  background_image_url: z.string().optional(),
});
export const specialistCaseStudiesUrlsSchema = z.object({
  case_studies_urls: z.array(z.string()).optional(),
});
export const specialistFormTagsSchema = z.object({
  tagIds: z.object({}).array(),
});
export const specialistTagsSchema = z.object({
  tagIds: z.array(z.string()),
});
export const specialistCustomTagsSchema = z.object({
  tagNames: z.array(z.string()),
});