import { useEffect } from 'react';
import { clerkClient, getAuth } from '@clerk/nextjs/server';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { api } from 'utils/api';
import { Url } from 'next/dist/shared/lib/router/router';
import { useLocalStorageStore } from 'store';

interface IThankYouProps {
  userId: string
  primaryEmailAddress: string | undefined
}
export default function ClerkAction ({ userId, primaryEmailAddress }: IThankYouProps) {
  const { mutateAsync } = api.profile.updateClerkUserId.useMutation({ retry: 5 });
  const { query, push } = useRouter();
  const { setWasOnboarded } = useLocalStorageStore();

  useEffect(() => {
    mutateAsync({ clerk_user_id: userId, profile_id: query.profileId as string, email: primaryEmailAddress })
      .finally(() => {
        setWasOnboarded(true);
        return push(query.redirectUrl as Url);
      });
  }, []);

  return null;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const query = ctx.query;

  const { userId } = getAuth(ctx.req);
  const user = userId ? await clerkClient.users.getUser(userId) : undefined;
  const primaryEmailAddress = user?.emailAddresses[0]?.emailAddress;

  if (userId && query.profileId && query.redirectUrl) {
    return { props: { userId, primaryEmailAddress } };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props:{},
    };
  }
};