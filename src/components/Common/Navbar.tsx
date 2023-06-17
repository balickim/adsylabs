import {
  useAuth,
} from '@clerk/nextjs';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { LANDING_IMAGES_PATH } from 'utils/constants';
import { Spinner, CtaButton } from 'components/Common/styled';
import React from 'react';
import { useLocalStorageStore } from 'store';
import { api } from 'utils/api';
import { ROLES } from '@prisma/client';

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

const Logo = () => (
  <Link href="/" className="flex mr-4">
    <Image
      src={LANDING_IMAGES_PATH.LOGO}
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
      aria-label={'log in'}
      type="button"
    >
      Zaloguj się
    </CtaButton>
  </Link>
);

const LogoutButton = ({ signOut }: { signOut: () => Promise<void>}) => (
  <CtaButton
    version={'secondary'}
    aria-label={'log out'}
    type="button"
    onClick={() => signOut()}
  >
      Wyloguj się
  </CtaButton>
);

const DashboardButton = () => (
  <Link href="/dashboard">
    <CtaButton
      className={'w-36 flex items-center justify-evenly'}
      version={'primary'}
      aria-label={'go to dashboard'}
      type="button"
    >
      Dashboard <BsArrowRight />
    </CtaButton>
  </Link>
);

export const Navbar = () => {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { pathname } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { wasOnboarded } = useLocalStorageStore();
  const {
    data,
    isLoading,
  } = api.profile.getRole.useQuery(undefined, { enabled: isLoaded && isSignedIn });

  const MenuItem = ({ text, link }: { text: string; link: string }) => (
    <Link href={link} onClick={() => setIsMobileMenuOpen(false)}>
      <span className="text-black hover:text-primary">
        {text}
      </span>
    </Link>
  );

  const SpecialistButton = () => (
    <Link href={pathname.includes('join-us') ? './join-us/pre-register' : './pre-register'}>
      <CtaButton
        className={'hidden md:block'}
        version={'primary'}
        type="button"
      >
        {pathname.includes('join-us') ? 'Aplikuj teraz' : 'Uzyskaj wczesny dostęp'}
      </CtaButton>
    </Link>
  );

  const MenuItems = () => (
    <>
      <MenuItem text={'Dołącz jako specjalista'} link={'/join-us'} />
      <MenuItem text={'Cennik'} link={'./pre-register'} />
      <MenuItem text={'Jak to działa?'} link={'#how-it-works'} />
      <Link href={pathname.includes('join-us') ? './join-us/pre-register' : './pre-register'}>
        <CtaButton
          version={'primary'}
          type="button"
          className={'md:hidden'}
        >
          {pathname.includes('join-us') ? 'Aplikuj teraz' : 'Uzyskaj wczesny dostęp'}
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
        {!isLoaded || (isLoaded && isSignedIn ? isLoading : false)
          ? <Spinner />
          : isSignedIn
            ? data && data.role === ROLES.SPECIALIST
              ? <DashboardButton />
              : <LogoutButton signOut={signOut} />
            : wasOnboarded
              ? <LoginButton />
              : null
        }
        {!isLoaded || (isLoaded && isSignedIn ? isLoading : false)
          ? null
          : isSignedIn
            ? null
            : <SpecialistButton />
        }

        <MobileButton />
        {isMobileMenuOpen ? <MobileMenuItems /> : null}
      </End>
    </Container>
  </Nav>;
};
