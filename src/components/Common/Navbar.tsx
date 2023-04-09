import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '../../constants';

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

const CtaButton = tw.button`
  mr-2 
  px-3 
  py-1.5
  h-10
  bg-primary 
  items-center 
  justify-center 
  rounded-lg 
  text-xs 
  font-medium 
  text-white 
  transition
  hover:brightness-150
  hover:-translate-y-1
  focus:outline-none 
  focus:ring-4 
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
        <Link href="/src/pages/pricing">
          <CtaButton type="button">Zaloguj się</CtaButton>
        </Link>

        <Link href="/">
          <CtaButton type="button">Znajdź specjalistę</CtaButton>
        </Link>
      </End>
    </Container>
  </Nav>
);
