import React from 'react';
import tw from 'twin.macro';

import { BasicTitle, StyledVideo, VideoContainer } from 'components/Common/styled';
import { STATIC } from 'constants/index';

const StyledSection = tw.section`mt-10 md:mt-16 md:px-10 grid grid-cols-1 items-center`;
const StyledBasicTitle = tw(BasicTitle)`text-center mb-12`;
const VideoWrapper = tw.div`sm:px-10 md:px-24 lg:px-40 xl:px-56 2xl:px-80`;

const Why = () => {
  return (
    <StyledSection id={'why'}>
      <StyledBasicTitle>
        Dlaczego najlepsi specjaliści wybierają AdsBridge?
      </StyledBasicTitle>

      <VideoWrapper>
        <VideoContainer className={'!pb-[30%]'}>
          <StyledVideo
            title="why us"
            loop
            playsInline
            autoPlay
            muted
            className={'!h-auto'}
          >
            <source src={`${STATIC.SPECIALISTS}`} type={'video/mp4'} />
            Your browser does not support the video tag.
          </StyledVideo>
        </VideoContainer>
      </VideoWrapper>
    </StyledSection>
  );
};

export default Why;
