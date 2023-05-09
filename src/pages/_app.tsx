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

const _App: AppType = ({ Component, pageProps }: AppProps) => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AdsBridge</title>
        <meta
          name="description"
          content="Zatrudnij sprawdzonych marketerów do Twojego Biznesu."
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
        navigate={(to) => push(to)}
        {...pageProps}
      >
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(_App);
