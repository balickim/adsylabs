import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { getAuth } from '@clerk/nextjs/server';
import { GetServerSideProps } from 'next';

import ThankYouComponent from 'components/ThankYou';
import { usePreRegistrationStore } from 'store';
import { api } from 'utils/api';

interface IThankYouProps {
  userId: string
}
const ThankYou: FC<IThankYouProps> = ({ userId }: IThankYouProps) => {
  const store = usePreRegistrationStore();
  const { mutateAsync } = api.profile.updateClerkUserId.useMutation();

  useEffect(() => {
    mutateAsync({ clerk_user_id: userId, puuid: store.puuid })
      .finally(() => store.resetStore());
  }, []);

  return (
    <main>
      <Head>
        <title>AdsBridge | Dziękujemy!</title>
      </Head>

      <ThankYouComponent />
    </main>
  );
};

export default ThankYou;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { userId } = getAuth(ctx.req);
  const store = usePreRegistrationStore.getState();

  if (userId) {
    store.setUserId(userId);

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