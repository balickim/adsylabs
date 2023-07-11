import { clerkClient, getAuth } from '@clerk/nextjs/server';
import { GetServerSideProps } from 'next';

import { createTRPCContext } from 'server/api/trpc';
import { Prisma } from '.prisma/client';

export default function ClerkAction () {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const query = ctx.query;
    const { profileId, redirectUrl } = query;

    const { userId } = getAuth(ctx.req);
    const user = userId ? await clerkClient.users.getUser(userId) : undefined;
    const primaryEmailAddress = user?.emailAddresses[0]?.emailAddress;

    const { req, res } = ctx;
    // @ts-ignore
    const trpc = await createTRPCContext({ req, res });
    const result = await trpc.prisma.profile.update({
      where: { id: profileId as string },
      data: {
        clerk_user_id: userId,
        email: primaryEmailAddress,
      },
    });

    if (result) return {
      redirect: {
        permanent: false,
        destination: redirectUrl,
      },
      props: {},
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        redirect: {
          permanent: false,
          destination: encodeURI(`/join-us?error=${e.code}`),
        },
        props:{},
      };
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: encodeURI('/join-us?error=Wystąpił błąd'),
    },
    props:{},
  };
};