import {
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';

import { IMAGES } from 'constants/index';
import { CtaButton } from 'components/Common/styled';

const Nav = tw.nav`
  bg-white 
  border-gray-200 
  px-4 
  lg:px-6 
  py-2.5 
  dark:bg-gray-800
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
    <span className="mx-6 text-black hover:text-primary dark:text-white">
      {text}
    </span>
  </Link>
);

const Logo = () => (
  <Link href="/" className="mr-4 flex">
    <Image
      src={`/images/${IMAGES.LOGO}`}
      alt="FlowBite Logo"
      width={100}
      height={50}
    />
  </Link>
);

export const Navbar = () => (
  <Nav>
    <Container>
      <Start>
        <Logo />
        <MenuItem text={'Dołącz jako specjalista'} link={'/'} />
        <MenuItem text={'Cennik'} link={'/pricing'} />
        <MenuItem text={'Jak to działa?'} link={'/'} />
      </Start>
      <End>
        <Link href="/list">
          <CtaButton type="button">Znajdź specjalistę</CtaButton>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href='/sign-up'>
            <CtaButton type="button">Zarejestruj się</CtaButton>
          </Link>
          <Link href='/sign-in'>
            <CtaButton type="button">Zaloguj się</CtaButton>
          </Link>
        </SignedOut>
      </End>
    </Container>
  </Nav>
);
