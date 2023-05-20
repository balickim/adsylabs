import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import type { AppType } from 'next/dist/shared/lib/utils';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

import 'styles/main.css';
import { twConfig } from 'utils/helpers/tailwind';
import { pl } from 'locale/clerk/pl';
import { api } from 'utils/api';
import { isBrowser } from 'utils/helpers';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const _App: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { push, events } = useRouter();
  const [ loading, setLoading ] = useState(false);
  isBrowser() && events.on('routeChangeStart', () => setLoading(true));
  isBrowser() && events.on('routeChangeComplete', () => setLoading(false));
  isBrowser() && events.on('routeChangeError', () => setLoading(false));

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <style jsx global>{`body a button { cursor: ${loading ? 'wait !important' : 'unset'}}`}</style>
      <Head>
        <title>AdsBridge - automatyzujemy współprace marketingowe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Sprawdź jak automatyzujemy zatrudnianie i zarządzanie sprawdzonymi specjalistami marketingu. Nie znajdziemy kandydata? Nie płacisz."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Analytics />
      <ClerkProvider
        localization={pl}
        appearance={{
          variables: {
            colorPrimary: twConfig?.theme?.colors?.primary,
          },
        }}
        navigate={(to) => push(to)}
        {...pageProps}
      >
        {getLayout(<Component {...pageProps} />)}
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(_App);
