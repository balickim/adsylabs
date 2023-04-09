import { SignIn } from '@clerk/nextjs';

const SignInPage = () => (
  <main className='h-screen flex items-center justify-center'>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </main>
);

export default SignInPage;