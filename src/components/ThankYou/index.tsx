import tw from 'twin.macro';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import styled from 'styled-components';

import { LANDING_IMAGES_PATH } from 'utils/constants';

const Container = tw.div`
  bg-primary h-screen w-screen relative text-white text-center overflow-hidden
  sm:w-[30rem] sm:h-[40rem] sm:rounded-xl`;
const StyledImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
  object-position: 25% 25%;
  margin-right: -10rem;
`;

const ThankYouComponent = () => {
  const ICON_SIZE = 40;
  return (
    <div className={'sm:flex sm:h-screen sm:justify-center sm:items-center'}>
      <Container>
        <h2 className={'text-4xl mb-3 pt-8'}>Dziękujemy!</h2>
        <p>Ogromnie dziękujemy za Twoje zaufanie!</p>
        <p className={'max-w-[14rem] ml-auto mr-auto'}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://miro.com/app/board/uXjVM_rJSCI=/?share_link_id=903127860568'}
            className={'underline'}
          >
            Kliknij w ten link
          </a>
          {' '}i odbierz swój planer treści social media</p>

        <p className={'mt-16'}>Pozostańmy w kontakcie, zaobserwuj nas na socialach:</p>

        <div className="py-4 flex justify-center space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://www.facebook.com/profile.php?id=100090247710645'}
            className="text-white hover:text-gray-900"
          >
            <AiFillFacebook size={ICON_SIZE} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://instagram.com/adsbridge_pl?igshid=YmMyMTA2M2Y='}
            className="text-white hover:text-gray-900"
          >
            <AiFillInstagram size={ICON_SIZE} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://www.linkedin.com/company/ads-bridge/'}
            className="text-white hover:text-gray-900"
          >
            <AiFillLinkedin size={ICON_SIZE} />
          </a>
        </div>

        <p className={'mt-36 mb-6 sm:mt-24 w-4/5 mx-auto'}>
        &quot;Dziękuję za Państwa kredyt zaufania. Razem tworzymy produkt, który na zawsze zmieni obraz marketingu w Polsce.&quot;
        </p>
        <div className={'flex justify-center text-left gap-2'}>
          <Image
            src={LANDING_IMAGES_PATH.JAKUB_JANIAK}
            alt="Jakub Janiak Co-Founder AdsBridge"
            width={50}
            height={50}
          />
          <div>
            <p className={'font-bold'}>Jakub Janiak</p>
            <p className={'!text-gray-300'}>Co-Founder of AdsBridge</p>
          </div>
        </div>
        <StyledImage
          src={LANDING_IMAGES_PATH.SHAPE_2}
          alt="shape"
          width={400}
          height={400}
          className={'sm:hidden'}
        />
      </Container>
    </div>
  );
};

export default ThankYouComponent;