import React, { ReactElement } from 'react';
import { SignUp } from '@clerk/nextjs';

import Layout from 'components/Common/Layout';

export default function SignInPage () {
  return <main className='h-screen flex items-center justify-center'>
    <SignUp
      path="/sign-up"
      routing="path"
      afterSignUpUrl={'/join-us/pre-register?onboarding=1'}
      afterSignInUrl={'/dashboard'}
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
        title: 'Adsylabs | Logowanie',
        description: 'Zatrudnij sprawdzonych marketerów do Twojego Biznesu.',
      }}
    >
      {page}
    </Layout>
  );
};