import tw from 'twin.macro';

import { STATIC } from 'constants/index';
import styled from 'styled-components';
import { StyledCtaButton } from '../Common/styled';

const StyledSection = tw.section`grid grid-cols-1 sm:grid-cols-2 gap-10`;
const TextContainer = tw.div`flex flex-col justify-center gap-6`;
const Title = tw.h1`text-5xl tracking-tight text-gray-900 text-center md:text-left`;

export const SubTitle = styled.h3`
  ${tw`text-sm text-gray-500 text-lg text-center md:text-left`}
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
`;

const VideoContainer = styled('div')`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

const StyledVideo = styled('video')`
  overflow: hidden;
  border: 0;
  align-self: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Video = () => {
  return (
    <StyledSection id={'video'}>
      <VideoContainer>
        <StyledVideo
          title="how we verify"
          loop
          autoPlay
          muted
        >
          <source src={`${STATIC.HOW_WE_VERIFY}`} type={'video/mp4'} />
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
        <div className={'flex justify-center md:justify-start'}>
          <StyledCtaButton
            version={'primary'}
            type={'button'}
            className={'w-3/5'}
          >
            Znajdź specjalistę
          </StyledCtaButton>
        </div>
      </TextContainer>
    </StyledSection>
  );
};

export default Video;
