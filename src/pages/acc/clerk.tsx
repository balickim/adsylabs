import { useEffect } from 'react';
import { getAuth } from '@clerk/nextjs/server';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { api } from 'utils/api';
import { Url } from 'next/dist/shared/lib/router/router';
import { useLocalStorageStore } from 'store';

interface IThankYouProps {
  userId: string
}
export default function ClerkAction ({ userId }: IThankYouProps) {
  const { mutateAsync } = api.profile.updateClerkUserId.useMutation();
  const { query, push } = useRouter();
  const { setWasOnboarded } = useLocalStorageStore();

  useEffect(() => {
    mutateAsync({ clerk_user_id: userId, profile_id: query.profileId as string })
      .finally(() => {
        setWasOnboarded(true);
        return push(query.redirectUrl as Url);
      });
  }, []);

  return null;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { userId } = getAuth(ctx.req);
  const query = ctx.query;

  if (userId && query.profileId && query.redirectUrl) {
    return { props: { userId } };
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