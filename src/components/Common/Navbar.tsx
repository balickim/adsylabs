import {
  useAuth,
  UserButton,
} from '@clerk/nextjs';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

import { STATIC } from 'constants/index';
import { Spinner, CtaButton } from 'components/Common/styled';
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
  2xl:max-w-[1200px] 2xl:ml-auto 2xl:mr-auto 2xl:left-0 2xl:right-0
`;

const Start = tw.div`
  flex
  justify-start 
  items-center
`;

const End = tw.div`
  flex 
  gap-2
  md:gap-2
  items-center
`;

const MenuItem = ({ text, link }: { text: string; link: string }) => (
  <Link href={link}>
    <span className="text-black hover:text-primary">
      {text}
    </span>
  </Link>
);

const MenuItems = () => (
  <>
    <MenuItem text={'Dołącz jako specjalista'} link={'/join-us'} />
    <MenuItem text={'Cennik'} link={'/#pricing'} />
    <MenuItem text={'Jak to działa?'} link={'#how-it-works'} />
    <Link href="/#pricing">
      <CtaButton
        version={'primary'}
        type="button"
        className={'md:hidden'}
      >
        Znajdź specjalistę
      </CtaButton>
    </Link>
  </>
);

const DesktopMenuItems = () => (
  <div className="hidden md:flex flex-row gap-6 w-auto">
    <MenuItems />
  </div>
);

const MobileMenuItems = () => (
  <div className="md:hidden absolute right-4 top-14 flex flex-col w-3/5 rounded-md p-4 gap-4 bg-white shadow-2xl">
    <MenuItems />
  </div>
);

const StyledUserButton = () => (
  <div className={'mr-2'}>
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: 'scale-125',
        } }}
    />
  </div>
);

const Logo = () => (
  <Link href="/" className="flex mr-4">
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
    <CtaButton
      version={'secondary'}
      type="button"
    >
      Zaloguj się
    </CtaButton>
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

  return <Nav>
    <Container>
      <Start>
        <Logo />

        <DesktopMenuItems />
      </Start>
      <End>
        {!isLoaded
          ? <Spinner />
          : isSignedIn
            ? <StyledUserButton />
            : <LoginButton />
        }
        <Link href="/#pricing">
          <CtaButton
            className={'hidden md:block'}
            version={'primary'}
            type="button"
          >
            Znajdź specjalistę
          </CtaButton>
        </Link>

        <MobileButton />
        {isMobileMenuOpen ? <MobileMenuItems /> : null}
      </End>
    </Container>
  </Nav>;
};
