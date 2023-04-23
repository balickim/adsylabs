import type { AppType } from 'next/dist/shared/lib/utils';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs';

import 'main.css';
import { twConfig } from 'helpers/tailwind';
import { pl } from 'locale/clerk/pl';

const _App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nextjs Tailwind CSS Styled Components with TypeScript</title>
        <meta
          name="description"
          content="Nextjs Tailwind CSS Styled Components with TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Analytics />
      <ClerkProvider
        localization={pl}
        appearance={{
          variables: {
            colorPrimary: twConfig?.theme?.colors?.primary,
          },
        }}
        {...pageProps}
      >
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
};

export default _App;
