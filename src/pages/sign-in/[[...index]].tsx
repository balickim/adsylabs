import { SignIn } from '@clerk/nextjs';
import Layout from 'components/Common/Layout';

const SignInPage = () => (
  <Layout>
    <main className='h-screen flex items-center justify-center'>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </main>
  </Layout>
);

export default SignInPage;