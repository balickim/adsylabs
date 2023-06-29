import Image from 'next/image';
import tw from 'twin.macro';

import { LANDING_IMAGES_PATH } from 'utils/constants';

const Container = tw.div`
  absolute bottom-0 text-white overflow-hidden
  sm:relative sm:bottom-auto sm:pl-4 md:max-w-[80%] sm:mt-[40%] md:mt-[30%] lg:pl-24
`;
const Wrapper = tw.div`p-2 sm:p-0`;
const BottomContainer = tw.div`flex gap-2 sm:mt-4`;

export const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <p>&quot;Automatyzujemy i usprawniamy współpracę przedsiębiorców z prawdziwymi talentami marketingu.&quot;</p>
        <BottomContainer>
          <Image
            src={LANDING_IMAGES_PATH.JAKUB_JANIAK}
            alt="Jakub Janiak Co-Founder Adsylabs"
            width={50}
            height={50}
          />
          <div>
            <p className={'font-bold'}>Jakub Janiak</p>
            <p className={'text-gray-300'}>Co-Founder of Adsylabs</p>
          </div>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};