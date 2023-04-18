import { SignUp } from '@clerk/nextjs';

import Layout from 'components/Common/Layout';

const SignUpPage = () => (
  <Layout
    meta={{
      title: 'AdsBridge | Rejestracja',
      description: 'Zatrudnij sprawdzonych marketerów do Twojego Biznesu.',
    }}
  >
    <main className='h-screen flex items-center justify-center'>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </main>
  </Layout>
);

export default SignUpPage;