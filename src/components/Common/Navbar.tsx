import {
  useAuth,
  UserButton,
} from '@clerk/nextjs';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

import { STATIC } from 'constants/index';
import { Spinner, StyledCtaButton } from 'components/Common/styled';
import React from 'react';

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
  flex-wrap
  justify-between 
  items-center
`;

const Start = tw.div`
  flex
  justify-start 
  items-center
`;

const End = tw.div`
  flex 
  gap-6
  items-center
`;

const MenuItem = ({ text, link }: { text: string; link: string }) => (
  <Link href={link}>
    <span className="text-black hover:text-primary">
      {text}
    </span>
  </Link>
);

const Logo = () => (
  <Link href="/" className="hidden md:flex mr-4">
    <Image
      src={`${STATIC.LOGO}`}
      alt="AdsBridge Logo"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const MobileButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className={'md:hidden'}
    >
      <AiOutlineMenu size={24} />
    </button>
  );

  const MenuItems = () => (
    <div className="hidden md:flex flex-row gap-6 w-auto">
      <MenuItem text={'Dołącz jako specjalista'} link={'/'} />
      <MenuItem text={'Cennik'} link={'/#pricing'} />
      <MenuItem text={'Jak to działa?'} link={'/#how-it-works'} />
    </div>
  );

  const MobileMenuItems = () => (
    <div className="md:hidden absolute left-4 top-12 flex flex-col w-3/5 rounded-md p-4 gap-4 bg-white shadow-2xl">
      <div className={'flex justify-center'}>
        <Image
          src={`${STATIC.LOGO}`}
          alt="AdsBridge Logo"
          width={100}
          height={50}
        />
      </div>
      <MenuItem text={'Dołącz jako specjalista'} link={'/'} />
      <MenuItem text={'Cennik'} link={'/#pricing'} />
      <MenuItem text={'Jak to działa?'} link={'/#how-it-works'} />
    </div>
  );

  return <Nav>
    {isMobileMenuOpen ? <MobileMenuItems /> : null}
    <Container>
      <Start>
        <Logo />

        <MenuItems />

        <MobileButton />
      </Start>
      <End>
        {!isLoaded
          ? <Spinner />
          : isSignedIn
            ? <UserButton appearance={{
              elements: {
                userButtonAvatarBox: 'scale-125',
              } }}
            />
            : <LoginButton />
        }

        <Link href="/#pricing">
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
