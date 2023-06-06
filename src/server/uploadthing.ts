import { createUploadthing } from 'uploadthing/next-legacy';

const f = createUploadthing();

const auth = () => ({ id: 'fakeId' }); // Fake auth function

export const profileSettingsRouter = {
  fileUploader: f({
    blob:
      {
        maxFileSize: '2MB',
        maxFileCount: 1,
      },
  }).middleware(async (req, res) => {
    const user = await auth(req, res);
    if (!user) throw new Error('Unauthorized');
    // Whatever is returned here is accessible in onUploadComplete as `metadata`
    return { userId: user.id };
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log('Upload complete for userId:', metadata.userId);
    console.log('file url', file.url);
  }),

  multipleFileUploader: f({
    blob:
      {
        maxFileSize: '2MB',
        maxFileCount: 5,
      },
  }).middleware(async (req, res) => {
    const user = await auth(req, res);
    if (!user) throw new Error('Unauthorized');
    // Whatever is returned here is accessible in onUploadComplete as `metadata`
    return { userId: user.id };
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log('Upload complete for userId:', metadata.userId);
    console.log('file url', file.url);
  }),

  imageUploader: f({
    image:
      {
        maxFileSize: '2MB',
        maxFileCount: 1,
      },
  }).middleware(async (req, res) => {
    const user = await auth(req, res);
    if (!user) throw new Error('Unauthorized');
    // Whatever is returned here is accessible in onUploadComplete as `metadata`
    return { userId: user.id };
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log('Upload complete for userId:', metadata.userId);
    console.log('file url', file.url);
  }),
};

export type OurFileRouter = typeof profileSettingsRouter;