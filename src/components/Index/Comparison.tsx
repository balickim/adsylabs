import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import { TfiCheck } from 'react-icons/tfi';
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';

import { STATIC } from 'constants/index';
import { StyledCtaButton } from 'components/Common/styled';
import styled from 'styled-components';
import { twConfig } from 'helpers/tailwind';

const StyledSection = tw.section`mt-16 md:mt-32`;
const Title = tw.h1`text-5xl tracking-tight text-gray-900 text-center mb-16`;
const HeaderContainer = tw.span`flex flex-col gap-2 justify-center items-center text-sm xl:text-base`;
const PinkText = tw.p`text-pink-400`;
const ColumnAsset = tw.div`flex justify-center items-center`;
const ColumnText = tw.p`flex justify-center items-center`;
const LeftColumnText = tw.p`flex items-center text-sm xl:text-base`;
const Grid = styled.div`
  ${tw`grid gap-x-4 h-[34rem] grid-rows-6 overflow-x-auto justify-center`}
  grid-template-columns:
    minmax(8rem, 10rem)
    minmax(11rem, 15rem) 
    minmax(11rem, 15rem) 
    minmax(11rem, 15rem) 
    minmax(11rem, 15rem)
  ;
`;

const Comparison = () => {
  const ICON_SIZE = 24;

  return (
    <StyledSection id={'comparison'}>
      <Title>
          AdsBridge vs tradycyjne rozwiązania
      </Title>

      <Grid>
        <div></div>
        <ColumnAsset className={'border-primary border-l-4 border-t-4 border-r-4 rounded-t-xl'}>
          <Image
            src={`${STATIC.LOGO}`}
            alt="AdsBridge Logo"
            width={100}
            height={50}
          />
        </ColumnAsset>
        <HeaderContainer>
          <p>Zewnętrzna firma HR</p>
          <PinkText>Jak rzut kością</PinkText>
        </HeaderContainer>
        <HeaderContainer>
          <p>Rekrutacja na własną rękę</p>
          <PinkText>Długi proces, różny efekt</PinkText>
        </HeaderContainer>
        <HeaderContainer>
          <p>Podobna usługa</p>
          <PinkText>Długi proces, różny efekt</PinkText>
        </HeaderContainer>

        <LeftColumnText>
          Gwarancja efektów kampanii lub zwrot pieniędzy za usługę
        </LeftColumnText>
        <ColumnAsset className={'border-primary border-l-4 border-r-4'}>
          <TfiCheck size={ICON_SIZE} color={twConfig?.theme?.colors?.primary as string} />
        </ColumnAsset>
        <ColumnAsset>
          <CgClose size={ICON_SIZE} />
        </ColumnAsset>
        <ColumnAsset>
          <CgClose size={ICON_SIZE} />
        </ColumnAsset>
        <ColumnAsset>
          <CgClose size={ICON_SIZE} />
        </ColumnAsset>

        <LeftColumnText>
          Czas zatrudnienia specjalisty
        </LeftColumnText>
        <ColumnAsset className={'border-primary border-l-4 border-r-4'}>
          3-4 dni
        </ColumnAsset>
        <ColumnText>
          kilka tygodni
        </ColumnText>
        <ColumnText>
          nawet do 8 tygodni
        </ColumnText>
        <ColumnText>
          3-4 dni
        </ColumnText>

        <LeftColumnText>
          Dedykowany ekspert strategii marketingowej
        </LeftColumnText>
        <ColumnAsset className={'border-primary border-l-4 border-r-4'}>
          <TfiCheck size={ICON_SIZE} color={twConfig?.theme?.colors?.primary as string} />
        </ColumnAsset>
        <ColumnAsset>
          <CgClose size={ICON_SIZE} />
        </ColumnAsset>
        <ColumnAsset>
          <CgClose size={ICON_SIZE} />
        </ColumnAsset>
        <ColumnAsset>
          <CgClose size={ICON_SIZE} />
        </ColumnAsset>

        <LeftColumnText>
          Cena
        </LeftColumnText>
        <ColumnText className={'border-primary border-l-4 border-r-4 '}>
          $$
        </ColumnText>
        <ColumnText>
          $$$
        </ColumnText>
        <ColumnText>
          $$$
        </ColumnText>
        <ColumnText>
          $
        </ColumnText>

        <div></div>
        <ColumnAsset className={'border-primary border-l-4 border-r-4 border-b-4 rounded-b-xl'}>
          <Link href="/#pricing">
            <StyledCtaButton
              version={'primary'}
              type="button"
            >
              Znajdź specjalistę
            </StyledCtaButton>
          </Link>
        </ColumnAsset>
        <div></div>
        <div></div>
        <div></div>
      </Grid>
    </StyledSection>
  );
};

export default Comparison;
