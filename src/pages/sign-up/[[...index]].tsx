import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => (
  <main className='h-screen flex items-center justify-center'>
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </main>
);

export default SignUpPage;