import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { SubTitleLeft } from './styled';
import { CtaButton } from 'components/Common/styled';
import { LANDING_IMAGES_PATH } from 'utils/constants';

const StyledSection = tw.section`grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-36 relative`;
const StatsContainer = tw.div`flex flex-col gap-0.5 relative`;
const StatsItem = styled.div`
  ${tw`flex flex-col z-1 p-7 text-left lg:py-4 lg:pl-14`}
  background: rgba( 255, 255, 255, 0.7 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;
const TitleLeft = tw.h1`text-3xl lg:text-4xl xl:text-5xl tracking-tight text-gray-900`;
const TextContainer = tw.div`flex flex-col justify-center gap-6`;
const Title = tw.h1`text-3xl xl:text-4xl tracking-tight text-gray-900 text-center mx-auto lg:mx-0 lg:text-left`;
const SubTitle = tw.h3`text-lg text-center text-textBase lg:text-left lg:mt-10 lg:mb-6`;

const Statistics = () => {
  return (
    <StyledSection id={'statistics'}>
      <div className={'relative max-w-md mx-auto lg:mx-0'}>
        <StatsContainer>
          <StatsItem className={'rounded-t-lg'}>
            <TitleLeft>
              1,5 mld zł
            </TitleLeft>
            <SubTitleLeft className={'w-80'}>
              wartość rynku marketingu online w 2022 roku. Wzrost o 9% rok do roku.¹
            </SubTitleLeft>
          </StatsItem>
          <StatsItem>
            <TitleLeft>
              120 mln zł
            </TitleLeft>
            <SubTitleLeft className={'w-80'}>
              o tyle rok do roku wzrosły wydatki na marketing online w styczniu 2022 roku.²
            </SubTitleLeft>
          </StatsItem>
          <StatsItem className={'rounded-b-lg'}>
            <TitleLeft>
              63% firm
            </TitleLeft>
            <SubTitleLeft className={'w-80'}>
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
            style={{ objectFit: 'cover' }}
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
          <div className={'flex justify-center lg:justify-start'}>
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
