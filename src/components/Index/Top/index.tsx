import tw from 'twin.macro';

import TopImage from './TopImage';
import TopText from './TopText';

const StyledSection = tw.section`px-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 md:pt-8`;

const Top = () => {
  return (
    <StyledSection id={'top'}>
      <TopText />
      <TopImage />
    </StyledSection>
  );
};

export default Top;
