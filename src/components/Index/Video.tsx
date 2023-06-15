import tw from 'twin.macro';
import Link from 'next/link';

import { MEDIA_PATH } from 'utils/constants';
import styled from 'styled-components';
import { CtaButton, StyledVideo, VideoContainer } from 'components/Common/styled';

const StyledSection = tw.section`md:px-6 mt-16 md:mt-32 grid grid-cols-1 xl:grid-cols-2 gap-10`;
const TextContainer = tw.div`flex flex-col text-center justify-center gap-6`;
const Title = tw.h1`text-2xl lg:text-3xl xl:text-4xl tracking-tight xl:text-left text-gray-900 text-center`;

const SubTitle = styled.h3`
  ${tw`text-lg text-center text-gray-500 xl:text-left`}
`;

const Video = () => {
  return (
    <StyledSection id={'video'}>
      <VideoContainer>
        <StyledVideo
          title="how we verify"
          loop
          playsInline
          autoPlay
          muted
        >
          <source src={`${MEDIA_PATH.HOW_WE_VERIFY}`} type={'video/mp4'} />
          Your browser does not support the video tag.
        </StyledVideo>
      </VideoContainer>

      <TextContainer>
        <Title>
          Jak weryfikujemy specjalistów?
        </Title>
        <SubTitle>
          Podczas procesu weryfikacji zaglądamy na konta naszych ekspertów, aby na własne oczy przekonać się,
          że są tak dobrzy, jak mówią. Sprawdzamy ich wcześniejsze współprace, których się podejmowali,
          strategie marketingowe, metodologię testów A/B i wiele innych kryteriów. Tylko eksperci,
          którzy osiągnęli ponadprzeciętne wyniki mają szansę zostać członkami platformy AdsBridge.
        </SubTitle>
        <Link href="./pre-register">
          <div className={'flex justify-center xl:justify-start'}>
            <CtaButton
              version={'primary'}
              type={'button'}
            >
              Uzyskaj wczesny dostęp
            </CtaButton>
          </div>
        </Link>
      </TextContainer>
    </StyledSection>
  );
};

export default Video;
