import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import type { AppType } from 'next/dist/shared/lib/utils';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import 'styles/main.css';
import '@uploadthing/react/styles.css';
import { twConfig } from 'utils/helpers/tailwind';
import { pl as clerkPl } from 'locale/clerk/pl';
import pl from 'locale/pl.json';
import { api } from 'utils/api';
import { isBrowser } from 'utils/helpers';
import { IntlProvider } from 'react-intl';
import { MetaPixelScript } from 'components/Common/externalScripts';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const messages = {
  pl,
};

const App: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { push, events, locale } = useRouter();
  const [ loading, setLoading ] = useState(false);
  isBrowser() && events.on('routeChangeStart', () => setLoading(true));
  isBrowser() && events.on('routeChangeComplete', () => setLoading(false));
  isBrowser() && events.on('routeChangeError', () => setLoading(false));

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <style jsx global>{`body a button { cursor: ${loading ? 'wait !important' : 'unset'}}`}</style>
      <Head>
        <title>Adsylabs - automatyzujemy współprace marketingowe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Sprawdź jak automatyzujemy zatrudnianie i zarządzanie sprawdzonymi specjalistami marketingu. Nie znajdziemy kandydata? Nie płacisz."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <MetaPixelScript />
      <Analytics />
      <Toaster/>

      <ClerkProvider
        localization={clerkPl}
        appearance={{
          variables: {
            colorPrimary: twConfig?.theme?.colors?.primary,
          },
        }}
        navigate={(to) => push(to)}
        {...pageProps}
      >
        {getLayout(
          // @ts-ignore
          <IntlProvider locale={locale} messages={messages[locale]}>
            <Component {...pageProps} />
          </IntlProvider>
        )}
        {process.env.NODE_ENV !== 'production' && (
          <div className="hidden md:block">
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        )}
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(App);
