import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import ThankYouComponent from 'components/ThankYou';

const ThankYou: NextPage = () => {
  return (
    <main>
      <Head>
        <title>AdsBridge | Dołącz do nas</title>
      </Head>

      <ThankYouComponent />
    </main>
  );
};

export default ThankYou;
