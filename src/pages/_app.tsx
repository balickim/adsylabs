import type { AppType } from 'next/dist/shared/lib/utils';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ClerkProvider } from '@clerk/nextjs';

import 'main.css';

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

      <ClerkProvider {...pageProps} >
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
};

export default _App;
