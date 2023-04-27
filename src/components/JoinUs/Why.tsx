import React from 'react';
import tw from 'twin.macro';

import { BasicTitle, StyledVideo, VideoContainer } from 'components/Common/styled';
import { STATIC } from 'constants/index';

const StyledSection = tw.section`mt-10 md:mt-16 md:px-10 grid grid-cols-1 items-center`;
const StyledBasicTitle = tw(BasicTitle)`text-center mb-12`;

const Why = () => {
  return (
    <StyledSection id={'why'}>
      <StyledBasicTitle>
        Dlaczego najlepsi specjaliści wybierają AdsBridge?
      </StyledBasicTitle>

      <VideoContainer className={'!pb-[30%] 2xl:!pb-[25%]'}>
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
    </StyledSection>
  );
};

export default Why;
