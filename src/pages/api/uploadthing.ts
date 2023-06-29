import { createNextPageApiHandler } from 'uploadthing/next-legacy';

import { profileSettingsRouter } from 'server/uploadthing';

const handler = createNextPageApiHandler({
  router: profileSettingsRouter,
});

export default handler;