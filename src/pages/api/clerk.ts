import { type NextApiRequest, type NextApiResponse } from 'next';

import { createTRPCContext } from 'server/api/trpc';
import { appRouter } from 'server/api/root';
import { Prisma } from '.prisma/client';

// TODO not working, fix that to use instead of acc/clerk.tsx
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const ctx = await createTRPCContext({ req, res });
  const caller = await appRouter.createCaller(ctx);
  try {
    const { profileId, redirectUrl } = req.query;
    if (!redirectUrl || !profileId) throw new Error();

    await caller.profile.updateClerkUserId({ profile_id: profileId as string });
    res.redirect(redirectUrl as string);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return res.redirect(`/join-us/pre-register?error=${e.name}`);
    }

    return res.redirect('/join-us/pre-register?error=Wystąpił error');
  }
};

export default handler;