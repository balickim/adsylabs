import React, { FC } from 'react';
import Head from 'next/head';

import ThankYouComponent from 'components/ThankYou';

const ThankYou: FC = () => {
  return (
    <main>
      <Head>
        <title>Adsylabs | Dziękujemy!</title>
      </Head>

      <ThankYouComponent />
    </main>
  );
};

export default ThankYou;