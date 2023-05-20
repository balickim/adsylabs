import tw from 'twin.macro';
import Image from 'next/image';

import { SubTitle, Title } from './styled';
import { LANDING_IMAGES_PATH } from 'utils/constants';
import { twConfig } from 'utils/helpers/tailwind';
import useWindowDimension from 'utils/hooks/useWindowDimension';

const StyledSection = tw.section`md:px-24 mt-16 md:mt-32 flex flex-col gap-8`;
const SocialMediaContainer = tw.div`grid grid-cols-2 md:grid-cols-12 gap-6 rounded-sm border-2 shadow-xl px-16 py-8`;
const ImageContainer = tw.div`flex flex-col items-center md:col-span-4`;
const ImageLabel = tw.div`text-center text-lg lg:text-2xl`;

const ImageComponent = ({ src, alt }: { src: string, alt: string }) => {
  const { width } = useWindowDimension();

  {/*@ts-ignore*/}
  const calculatedWidth = width < twConfig.theme.screens.lg.slice(0, -2)
    ? 40
    : 60;
  
  return <Image
    src={src}
    alt={alt}
    width={calculatedWidth}
    height={calculatedWidth}
  />;
};

const ExpertSocialMedia = () => {
  return (
    <StyledSection id={'expert-social-media'}>
      <Title>
        Eksperci obsługujący największe kanały marketingowe
      </Title>
      <SubTitle>
        Odblokuj i rozwiń nowe kanały pozyskiwania klientów dla Twojego Biznesu ze specjalistami z naszej platformy.
      </SubTitle>
      <SocialMediaContainer>
        <ImageContainer>
          <ImageComponent
            src={LANDING_IMAGES_PATH.TIKTOK_ICON}
            alt={'tiktok icon'}
          />
          <ImageLabel>TikTok</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <ImageComponent
            src={LANDING_IMAGES_PATH.GOOGLE_ICON}
            alt={'google icon'}
          />
          <ImageLabel>Google</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <ImageComponent
            src={LANDING_IMAGES_PATH.COPY_ICON}
            alt={'copy icon'}
          />
          <ImageLabel>Copywriting</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <ImageComponent
            src={LANDING_IMAGES_PATH.FACEBOOK_ICON}
            alt={'facebook icon'}
          />
          <ImageLabel>Facebook</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <ImageComponent
            src={LANDING_IMAGES_PATH.INSTAGRAM_ICON}
            alt={'instagram icon'}
          />
          <ImageLabel>Instagram</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <ImageComponent
            src={LANDING_IMAGES_PATH.YOUTUBE_ICON}
            alt={'youtube icon'}
          />
          <ImageLabel>Youtube</ImageLabel>
        </ImageContainer>
        <ImageContainer className={'md:!col-span-6'}>
          <ImageComponent
            src={LANDING_IMAGES_PATH.BRAND_ICON}
            alt={'brand icon'}
          />
          <ImageLabel>Brand Marketing</ImageLabel>
        </ImageContainer>
        <ImageContainer className={'md:!col-span-6'}>
          <ImageComponent
            src={LANDING_IMAGES_PATH.INFLUENCER_ICON}
            alt={'influencer icon'}
          />
          <ImageLabel>Influencer Marketing</ImageLabel>
        </ImageContainer>
      </SocialMediaContainer>
    </StyledSection>
  );
};

export default ExpertSocialMedia;
