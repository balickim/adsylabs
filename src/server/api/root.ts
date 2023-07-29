import { createTRPCRouter } from 'server/api/trpc';
import { profileRouter } from 'server/api/routers/profile';
import { messageRouter } from 'server/api/routers/message';
import { communityRouter } from 'server/api/routers/community';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  profile: profileRouter,
  community: communityRouter,
  message: messageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
