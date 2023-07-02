import tw, { theme } from 'twin.macro';
import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledSection = tw.section`flex relative max-w-[1476px] mx-auto flex-col items-center mb-20 mt-16 md:mt-32`;
const Title = tw.h1`text-2xl tracking-tight text-gray-900 text-center lg:text-3xl xl:text-4xl`;
const SubTitle = tw.h3`text-lg text-center text-textBase mt-2 lg:w-[600px]`;
const SwitchRow = tw.div`w-full flex flex-col items-center justify-evenly space-y-2 my-4 lg:space-y-0 lg:my-10 lg:flex-row`;
const ImageContainer = styled('div')`
  ${tw`drop-shadow-2xl w-[330px] h-[255px] sm:w-[440px] sm:h-[340px] md:w-[770px] md:h-[595px] lg:w-[1100px] lg:h-[850px]`} 
  @media only screen and (min-width: ${theme`screens.lg`}) {
    background: linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 50px) calc(100% - 50px) no-repeat,
    linear-gradient(transparent 10%, #e3e3e3 100%);
    border-radius: 20px;
    padding: 25px;
    box-sizing: border-box;
    z-index: 1;
    &:before {
      content: " ";
      position: absolute;
      z-index: -1;
      border-radius: 20px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid #e3e3e3;
    }
  } 
`;

interface ISwitch {
  open: boolean
}
const Switch = styled.span<ISwitch>(
  ({ open }) => [
    tw`text-lg text-gray-500 hover:cursor-pointer`,
    open
      ? tw`underline underline-offset-8 text-primary`
      : tw``,
  ]
);

export default function AllInOne () {
  const [step, setStep] = useState(1);
  return (
    <StyledSection id={'all-in-one'}>
      <Title>Adsylabs to rozwiązanie <span className={'whitespace-nowrap'}>all-in-one</span></Title>
      <SubTitle>
        W Adsylabs pomożemy zbadać Twoje potrzeby marketingowe, wybrać eksperta,
        nawiązać współpracę i monitorować rezultaty Twoich kampanii reklamowych w jednym miejscu.
      </SubTitle>

      <SwitchRow>
        <Switch open={step === 1} onClick={() => setStep(1)}>
          ANALITYKA NA ŻYWO
        </Switch>
        <Switch open={step === 2} onClick={() => setStep(2)}>
          WYBÓR EKSPERTA
        </Switch>
        <Switch open={step === 3} onClick={() => setStep(3)}>
          KOMUNIKACJA
        </Switch>
        <Switch open={step === 4} onClick={() => setStep(4)}>
          DORADZTWO
        </Switch>
      </SwitchRow>

      <ImageContainer>
        <div className={'relative w-full h-full'}>
          <Image
            alt="adsylabs to rozwiązanie wszystko w jednym"
            src={`/static/image/landing/all_in_one_${step}.webp`}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{ objectFit: 'fill' }}
          />
        </div>
      </ImageContainer>
    </StyledSection>
  );
}