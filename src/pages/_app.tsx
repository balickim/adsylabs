import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppType } from 'next/dist/shared/lib/utils';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/main.css';
import '@uploadthing/react/styles.css';
import { api } from 'utils/api';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <>
      <Head>
        <title>Adsylabs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(App);
