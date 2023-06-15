import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';

import { SubTitleLeft } from './styled';
import { CtaButton } from 'components/Common/styled';
import { LANDING_IMAGES_PATH } from 'utils/constants';

const StyledSection = tw.section`grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-36 relative`;
const StatsContainer = tw.div`flex flex-col gap-0.5 relative`;
const StatsItem = tw.div`flex flex-col text-center md:text-left bg-white border p-8 z-1`;
const TitleLeft = tw.h1`text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900`;
const TextContainer = tw.div`flex flex-col justify-center gap-6`;
const Title = tw.h1`text-3xl xl:text-4xl tracking-tight text-gray-900 text-center md:text-left`;
const SubTitle = tw.h3`text-lg text-center text-gray-500 md:text-left`;

const Statistics = () => {
  return (
    <StyledSection id={'statistics'}>
      <div className={'relative'}>
        <StatsContainer>
          <StatsItem className={'rounded-t-lg'}>
            <TitleLeft>
              1,5 mld zł
            </TitleLeft>
            <SubTitleLeft>
              wartość rynku marketingu online w 2022 roku. Wzrost o 9% rok do roku.¹
            </SubTitleLeft>
          </StatsItem>
          <StatsItem>
            <TitleLeft>
              120 mln zł
            </TitleLeft>
            <SubTitleLeft>
              o tyle rok do roku wzrosły wydatki na marketing online w styczniu 2022 roku.²
            </SubTitleLeft>
          </StatsItem>
          <StatsItem className={'rounded-b-lg'}>
            <TitleLeft>
              63% firm
            </TitleLeft>
            <SubTitleLeft>
              zwiększyło swoje budżety na marketing online od 2021 roku.
            </SubTitleLeft>
          </StatsItem>
          <span className={'text-[11px]'}>¹ Raport AdEx 2022’Q1 (IAB Polska/PwC AdEx)</span>
          <span className={'text-[11px]'}>² Ranktracker.com 77 statistics on Digital Marketing in 2022 you need to know</span>
        </StatsContainer>
        <div className={'absolute h-full w-full left-0 top-0'}>
          <Image
            fill
            src={LANDING_IMAGES_PATH.STAIN_2}
            alt="stain"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <TextContainer>
        <Title>
          Nie daj się wyprzedzić
        </Title>
        <SubTitle>
          Gwałtowny wzrost branży marketingu Internetowego w Polsce sprawia, że konkurencja staje się co raz silniejsza.
          Nie trać czasu i pieniędzy na niesprawadzone metody - zainwestuj w zweryfikowanego specjalistę marketingu.
        </SubTitle>
        <Link href="./pre-register">
          <div className={'flex justify-center md:justify-start'}>
            <CtaButton
              version={'primary'}
              type={'button'}
            >
              Uzyskaj wczesny dostęp
            </CtaButton>
          </div>
        </Link>
      </TextContainer>
    </StyledSection>
  );
};

export default Statistics;
