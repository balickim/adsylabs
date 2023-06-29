import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import tw from 'twin.macro';
import { SOCIAL_LINKS } from 'utils/constants';

const StyledLink = tw(Link)`text-xs text-textBase hover:text-gray-900 md:text-base`;

function Links () {
  return (
    <div className="py-4 flex flex-col items-center justify-center md:space-x-4 md:flex-row">
      <StyledLink
        target="_blank"
        rel="noopener noreferrer"
        href={'./join-us'}
      >
        Dołącz do nas
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener noreferrer"
        href={'./regulamin'}
      >
        Regulamin
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener noreferrer"
        href={'./polityka-prywatnosci'}
      >
        Polityka prywatności
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener noreferrer"
        href={'./polityka-cookies'}
      >
        Polityka cookies
      </StyledLink>
    </div>
  );
}

function Icons () {
  return (
    <div className="flex justify-center space-x-6 mb-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={SOCIAL_LINKS.FACEBOOK}
        className="text-textBase hover:text-gray-900"
      >
        <AiFillFacebook />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={SOCIAL_LINKS.INSTAGRAM}
        className="text-textBase hover:text-gray-900"
      >
        <AiFillInstagram />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={SOCIAL_LINKS.LINKEDIN}
        className="text-textBase hover:text-gray-900"
      >
        <AiFillLinkedin />
      </a>
    </div>
  );
}


const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl">
        <hr className="my-2 mx-auto border-gray-200" />
        <span className="flex justify-center gap-2 text-center text-sm text-textBase">
          © {new Date().getFullYear()}{' '}
          Adsylabs
        </span>

        <Links />
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
