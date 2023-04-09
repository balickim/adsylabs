import { SignUp } from '@clerk/nextjs';
import Layout from 'components/Common/Layout';

const SignUpPage = () => (
  <Layout>
    <main className='h-screen flex items-center justify-center'>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </main>
  </Layout>
);

export default SignUpPage;