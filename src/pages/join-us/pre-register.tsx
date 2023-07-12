import React from 'react';
import Head from 'next/head';
import type { GetServerSideProps, NextPage } from 'next';

import Mobile from 'components/PreRegister/Mobile';
import Desktop from 'components/PreRegister/Desktop';
import { getAuth } from '@clerk/nextjs/server';

const PreRegister: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Adsylabs | Dołącz do nas</title>
      </Head>

      <div className={'sm:hidden'}><Mobile variant={'specialist'} /></div>
      <div className={'hidden sm:block'}><Desktop variant={'specialist'} /></div>

    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { userId } = getAuth(ctx.req);
  const { onboarding } = ctx.query;

  // TODO jeśli jest specjalistą to redirect na /dashboard

  if (userId && !onboarding) {
    return {
      redirect: {
        permanent: false,
        destination: encodeURI('/join-us?error=Jesteś już zalogowany :)'),
      },
      props:{},
    };
  } else {
    return { props: {} };
  }
};

export default PreRegister;
