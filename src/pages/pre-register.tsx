import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import { twConfig } from 'helpers/tailwind';
import useWindowDimension from 'hooks/useWindowDimension';
import Mobile from 'components/PreRegister/Mobile';
import Desktop from 'components/PreRegister/Desktop';

const PreRegister: NextPage = () => {
  const windowDimensions = useWindowDimension();
  return (
    <main>
      <Head>
        <title>AdsBridge | Dołącz do nas</title>
      </Head>

      {/*@ts-ignore*/}
      {windowDimensions.width! < twConfig.theme.screens.sm.slice(0, -2)
        ? <Mobile />
        : <Desktop />
      }
    </main>
  );
};

export default PreRegister;
