import {
  useAuth,
  UserButton,
} from '@clerk/nextjs';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';

import { IMAGES } from 'constants/index';
import { Spinner, StyledCtaButton } from 'components/Common/styled';

const Nav = tw.nav`
  bg-white 
  border-gray-200 
  px-4 
  lg:px-6 
  py-2.5 
  border-b-2
`;

const Container = tw.div`
  flex
  flex-col
  sm:flex-wrap
  sm:flex-row 
  sm:justify-between 
  sm:items-center
`;

const Start = tw.div`
  flex
  flex-col
  sm:flex-row
  justify-start 
  items-center
`;

const End = tw.div`
  flex 
  flex-col
  sm:flex-row
  gap-2
  items-center
`;

const MenuItem = ({ text, link }: { text: string; link: string }) => (
  <Link href={link}>
    <span className="mx-6 text-black hover:text-primary">
      {text}
    </span>
  </Link>
);

const Logo = () => (
  <Link href="/" className="mr-4 flex">
    <Image
      src={`/static/${IMAGES.LOGO}`}
      alt="FlowBite Logo"
      width={100}
      height={50}
      priority
    />
  </Link>
);

const LoginButton = () => (
  <Link href="/sign-in">
    <StyledCtaButton
      version={'secondary'}
      type="button"
    >
      Zaloguj się
    </StyledCtaButton>
  </Link>
);

export const Navbar = () => {
  const { isLoaded, isSignedIn } = useAuth();

  return <Nav>
    <Container>
      <Start>
        <Logo />
        <MenuItem text={'Dołącz jako specjalista'} link={'/'} />
        <MenuItem text={'Cennik'} link={'#pricing'} />
        <MenuItem text={'Jak to działa?'} link={'#how-it-works'} />
      </Start>
      <End>
        {!isLoaded
          ? <Spinner />
          : isSignedIn
            ? <UserButton />
            : <LoginButton />
        }

        <Link href="/">
          <StyledCtaButton
            version={'primary'}
            type="button"
          >
            Znajdź specjalistę
          </StyledCtaButton>
        </Link>
      </End>
    </Container>
  </Nav>;
};
