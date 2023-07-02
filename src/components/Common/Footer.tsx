import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsSend, BsPhone } from 'react-icons/bs';
import Link from 'next/link';
import tw from 'twin.macro';
import styled from 'styled-components';

import { LANDING_IMAGES_PATH, SOCIAL_LINKS } from 'utils/constants';

const StyledLink = tw(Link)`text-xs text-textBase hover:text-gray-900 md:text-base`;
const BannerContainer = tw.div`h-[320px] relative bg-primary rounded-2xl my-4 mx-6 lg:my-20 xl:mx-0`;
const StyledTopImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
const StyledBottomImage = styled(Image)`
  position: absolute;
  bottom: 0;
  object-fit: cover;
  margin-left: 85%;
`;
const InfoContainer = tw.div`
  flex h-full justify-center items-center flex flex-col text-white text-lg
  lg:relative lg:items-start lg:text-2xl lg:w-full
`;

function Banner () {
  return (
    <BannerContainer>
      <div className={'lg:hidden flex justify-center h-full items-center'}>
        <InfoContainer>
          <div className={'text-xl mb-2 lg:text-4xl'}>Bezpośredni <b>kontakt</b></div>
          <div className={'flex items-center gap-2'}><BsSend /> contact@adsylabs.com</div>
          <div className={'flex items-center gap-2'}><BsPhone />537 896 221</div>
          <div>NIP: 5213641211</div>
          <div>Działamy na terenie całej Polski</div>
        </InfoContainer>
      </div>

      <div className={'hidden lg:block'}>
        <InfoContainer>
          <div className={'text-4xl ml-[15%] mt-8'}>Bezpośredni <b>kontakt</b></div>
          <div className={'grid ml-[20%] grid-cols-2 gap-y-11 gap-x-10 mt-6'}>
            <div className={'flex items-center gap-2'}>
              <BsSend />
              <a className={'underline'} href="mailto:contact@adsylabs.com">contact@adsylabs.com</a>
            </div>
            <div className={'flex items-center gap-2'}>
              <BsPhone />537 896 221
            </div>
            <p className={'min-w-max'}>
              Działamy na terenie całej Polski
            </p>
            <p>
              NIP: 5213641211
            </p>
          </div>
        </InfoContainer>
      </div>

      <StyledTopImage
        src={LANDING_IMAGES_PATH.SHAPE_1}
        alt="shape"
        width={100}
        height={100}
      />
      <StyledBottomImage
        src={LANDING_IMAGES_PATH.SHAPE_2}
        alt="shape"
        width={400}
        height={400}
      />
    </BannerContainer>
  );
}
function OurWork () {
  return (
    <div className="w-80 text-start py-4 flex flex-col space-y-4 lg:text-start">
      <p className={'text-primary font-bold'}>NASZE DZIAŁANIA</p>
      <StyledLink
        rel="noopener noreferrer"
        href={'./join-us'}
      >
        Dołącz jako specjalista
      </StyledLink>
      <StyledLink
        rel="noopener noreferrer"
        href={'/#pricing'}
      >
        Cennik
      </StyledLink>
      <StyledLink
        rel="noopener noreferrer"
        href={'/#how-it-works'}
      >
        Jak to działa?
      </StyledLink>
    </div>
  );
}

function Help () {
  const { pathname } = useRouter();
  return (
    <div className="py-4 w-80 flex flex-col justify-center space-y-4">
      <p className={'text-primary font-bold'}>POMOC</p>
      <StyledLink
        target="_blank"
        rel="noopener noreferrer"
        href={pathname.includes('join-us') ? '/join-us/faq' : '/faq'}
      >
        Często zadawane pytania (FAQ)
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
      <StyledLink
        target="_blank"
        rel="noopener noreferrer"
        href={'./regulamin'}
      >
        Regulamin
      </StyledLink>
    </div>
  );
}

function Icons () {
  return (
    <div className={'flex w-80 flex-col mt-4 gap-4 lg:gap-10'}>
      <Link href="/" className="flex mr-8">
        <Image
          src={LANDING_IMAGES_PATH.LOGO}
          alt="Adsylabs Logo"
          width={150}
          height={40}
          priority
        />
      </Link>

      <span>Automatyzujemy marketing B2B</span>

      <div className="flex space-x-6 mb-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={SOCIAL_LINKS.LINKEDIN}
          className="text-textBase hover:text-gray-900"
        >
          <AiFillLinkedin size={32} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={SOCIAL_LINKS.INSTAGRAM}
          className="text-textBase hover:text-gray-900"
        >
          <AiFillInstagram size={32} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={SOCIAL_LINKS.FACEBOOK}
          className="text-textBase hover:text-gray-900"
        >
          <AiFillFacebook size={32} />
        </a>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className={'overflow-hidden mt-16 lg:mt-0'}>
      <Banner />
      <div className="mx-auto max-w-screen-xl">
        <div className={'flex flex-col items-center lg:items-start lg:gap-40 lg:flex-row'}>
          <Icons />
          <OurWork />
          <Help />
        </div>

        <hr className="mx-auto border-gray-200 lg:my-16" />
        <span className="flex mb-3 justify-center gap-2 text-center text-sm text-textBase">
          © {new Date().getFullYear()}{' '}
          Adsylabs
        </span>
      </div>
    </footer>
  );
};

export default Footer;
