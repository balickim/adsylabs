import React, { ReactElement } from 'react';
import { SignIn } from '@clerk/nextjs';

import Layout from 'components/Common/Layout';

export default function SignInPage () {
  return <main className='h-screen flex items-center justify-center'>
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl={undefined}
      appearance={{
        layout: {
          privacyPageUrl: './polityka-prywatnosci',
          termsPageUrl: './regulamin',
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