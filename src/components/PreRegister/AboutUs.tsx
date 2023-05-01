import Image from 'next/image';
import tw from 'twin.macro';

import { STATIC } from 'constants/index';

const Container = tw.div`
  absolute bottom-0 text-white overflow-hidden
  sm:relative sm:bottom-auto sm:mt-64 sm:pl-4 sm:max-w-[90%] lg:pl-24
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
            src={STATIC.JAKUB_JANIAK}
            alt="Jakub Janiak Co-Founder AdsBridge"
            width={50}
            height={50}
          />
          <div>
            <p className={'font-bold'}>Jakub Janiak</p>
            <p className={'text-gray-300'}>Co-Founder of AdsBridge</p>
          </div>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};