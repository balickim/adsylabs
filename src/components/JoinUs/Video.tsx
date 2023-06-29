import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import { StyledVideo, VideoContainer } from 'components/Common/styled';
import { MEDIA_PATH } from 'utils/constants';

const LocalStyledVideo = styled(StyledVideo)`
  ${tw`!h-auto max-w-4xl`}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Video = () => {
  return (
    <VideoContainer className={'mt-11'}>
      <LocalStyledVideo
        title="adsylabs automates"
        loop
        playsInline
        autoPlay
        muted
      >
        <source src={MEDIA_PATH.AUTOMATES} type={'video/mp4'} />
            Your browser does not support the video tag.
      </LocalStyledVideo>
    </VideoContainer>
  );
};

export default Video;
