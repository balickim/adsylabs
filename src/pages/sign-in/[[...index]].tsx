import { SignIn } from '@clerk/nextjs';

import Layout from 'components/Common/Layout';

const SignInPage = () => (
  <Layout
    meta={{
      title: 'AdsBridge | Logowanie',
      description: 'Zatrudnij sprawdzonych marketerów do Twojego Biznesu.',
    }}
  >
    <main className='h-screen flex items-center justify-center'>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </main>
  </Layout>
);

export default SignInPage;