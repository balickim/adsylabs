import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { getAuth } from '@clerk/nextjs/server';
import { GetServerSideProps } from 'next';

import Mobile from 'components/PreRegister/Mobile';
import Desktop from 'components/PreRegister/Desktop';

const PreRegister: NextPage = () => {
  return (
    <main>
      <Head>
        <title>AdsBridge | Dołącz do nas</title>
      </Head>

      <div className={'sm:hidden'}><Mobile variant={'specialist'} /></div>
      <div className={'hidden sm:block'}><Desktop variant={'specialist'} /></div>

    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { userId } = getAuth(ctx.req);

  if (userId) {
    return {
      redirect: {
        permanent: false,
        destination: '/thank-you',
      },
      props:{},
    };
  } else {
    return { props: {} };
  }
};

export default PreRegister;
