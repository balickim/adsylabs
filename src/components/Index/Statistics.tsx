import tw from 'twin.macro';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import { SubTitleLeftShadow } from './styled';
import { CtaButton } from 'components/Common/styled';
import { STATIC } from 'constants/index';

const StyledSection = tw.section`px-12 lg:px-36 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-36 relative`;
const StatsContainer = tw.div`flex flex-col gap-0.5 relative`;
const StatsItem = tw.div`flex flex-col text-center md:text-left bg-white border p-8 z-1`;
const TitleLeft = tw.h1`text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900`;
const TextContainer = tw.div`flex flex-col justify-center gap-6`;
const Title = tw.h1`text-3xl xl:text-5xl tracking-tight text-gray-900 text-center md:text-left`;

const SubTitle = styled.h3`
  ${tw`text-sm text-gray-500 text-lg text-center md:text-left`}
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
`;

const Statistics = () => {
  return (
    <StyledSection id={'statistics'}>
      <div className={'relative'}>
        <StatsContainer>
          <StatsItem className={'rounded-t-lg'}>
            <TitleLeft>
              10,5 mld zł
            </TitleLeft>
            <SubTitleLeftShadow>
              wartość rynku reklamowego w Polsce w 2021 roku.
            </SubTitleLeftShadow>
          </StatsItem>
          <StatsItem>
            <TitleLeft>
              803,6 mln zł
            </TitleLeft>
            <SubTitleLeftShadow>
              o tyle wzrosły wydatki na reklamę w Internecie w 2021 r.
            </SubTitleLeftShadow>
          </StatsItem>
          <StatsItem className={'rounded-b-lg'}>
            <TitleLeft>
              16%
            </TitleLeft>
            <SubTitleLeftShadow>
              o tyle wzrosła wartość rynku reklamowego w Polsce w ciągu 10 lat.
            </SubTitleLeftShadow>
          </StatsItem>
        </StatsContainer>
        <div className={'absolute h-full w-full left-0 top-0'}>
          <Image
            fill
            src={`${STATIC.STAIN_2}`}
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
        <Link href="/#pricing">
          <div className={'flex justify-center md:justify-start'}>
            <CtaButton
              version={'primary'}
              type={'button'}
            >
              Znajdź specjalistę
            </CtaButton>
          </div>
        </Link>
      </TextContainer>
    </StyledSection>
  );
};

export default Statistics;
