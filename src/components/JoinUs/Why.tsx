import React from 'react';
import Image from 'next/image';
import tw from 'twin.macro';

import { BasicTitle, StyledVideo, VideoContainer } from 'components/Common/styled';
import { STATIC } from 'constants/index';

const StyledSection = tw.section`mt-10 md:mt-16 md:px-10 grid grid-cols-1 items-center`;
const StyledBasicTitle = tw(BasicTitle)`text-center mb-12`;
const VideoUpTextContainer = tw.div`flex justify-center text-xs gap-8 md:text-base md:gap-20`;
const VideoUpText = tw.div`flex items-center`;
const VideoWrapper = tw.div`sm:px-10 md:px-24 lg:px-40 xl:px-56 2xl:px-80`;

const Why = () => {
  return (
    <StyledSection id={'why'}>
      <StyledBasicTitle>
        Dlaczego najlepsi specjaliści wybierają AdsBridge?
      </StyledBasicTitle>
      <VideoUpTextContainer>
        <VideoUpText>
          Działanie na własną rękę
        </VideoUpText>
        <VideoUpText>
          korzystanie z
          <Image
            src={`${STATIC.LOGO}`}
            alt="AdsBridge Logo"
            width={50}
            height={25}
            priority
          />
        </VideoUpText>
      </VideoUpTextContainer>

      <VideoWrapper>
        <VideoContainer className={'!pb-[20%]'}>
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
