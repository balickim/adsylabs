import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import { BasicTitle, StyledVideo, VideoContainer } from 'components/Common/styled';
import { MEDIA_PATH } from 'utils/constants';

const StyledSection = tw.section`mt-10 md:mt-16 md:px-10 grid grid-cols-1 items-center`;
const StyledBasicTitle = tw(BasicTitle)`text-center mb-4 md:mb-0`;
const LocalStyledVideo = styled(StyledVideo)`
  ${tw`!h-auto max-w-2xl`}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Why = () => {
  return (
    <StyledSection id={'why'}>
      <StyledBasicTitle>
        Dlaczego najlepsi specjaliści wybierają Adsylabs?
      </StyledBasicTitle>

      <VideoContainer className={'!pb-[30%] 2xl:!pb-[25%]'}>
        <LocalStyledVideo
          title="why us"
          loop
          playsInline
          autoPlay
          muted
        >
          <source src={MEDIA_PATH.SPECIALISTS} type={'video/mp4'} />
            Your browser does not support the video tag.
        </LocalStyledVideo>
      </VideoContainer>
    </StyledSection>
  );
};

export default Why;
