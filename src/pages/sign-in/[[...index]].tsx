import React, { ReactElement } from 'react';
import { SignIn } from '@clerk/nextjs';

import Layout from 'components/Common/Layout';
import { useLocalStorageStore } from 'store';

export default function SignInPage () {
  return <main className='h-screen flex items-center justify-center'>
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl={undefined}
      appearance={{
        layout: {
          termsPageUrl: '/',
          privacyPageUrl: '/',
        } }
      }
    />
  </main>;
};

SignInPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout
      meta={{
        title: 'AdsBridge | Logowanie',
        description: 'Zatrudnij sprawdzonych marketerów do Twojego Biznesu.',
      }}
    >
      {page}
    </Layout>
  );
};

export const getServerSideProps = () => {
  const { wasOnboarded } = useLocalStorageStore.getState();

  if (!wasOnboarded) return {
    redirect: {
      permanent: false,
      destination: '/',
    },
    props:{},
  };

  return { props: { } };
};