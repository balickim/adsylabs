import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';

import { LANDING_IMAGES_PATH } from 'utils/constants';
import { CtaButton } from 'components/Common/styled';
import styled from 'styled-components';
import { twConfig } from 'utils/helpers/tailwind';

const StyledSection = tw.section`mt-16 md:mt-32`;
const Title = tw.h1`text-2xl lg:text-3xl xl:text-4xl tracking-tight text-gray-900 text-center mb-16`;
const HeaderContainer = tw.span`flex flex-col gap-2 justify-center items-center text-xs text-center md:text-left xl:text-base`;
const PinkText = tw.p`text-pink-400`;
const ColumnAsset = tw.div`flex justify-center items-center`;
const ColumnText = tw.p`flex justify-center items-center`;
const LeftColumnText = tw.p`flex items-center text-[11px] xl:text-sm`;
const Grid = styled.div`
  ${tw`grid gap-x-4 h-[34rem] grid-rows-6 overflow-x-auto`}
  grid-template-columns:
    minmax(5rem, 10rem)
    minmax(9rem, 15rem) 
    minmax(9rem, 15rem) 
    minmax(9rem, 15rem) 
    minmax(9rem, 15rem)
  ;
`;

const Comparison = () => {
  const ICON_SIZE = 24;

  return (
    <StyledSection id={'comparison'}>
      <Title>
        Adsylabs vs tradycyjne rozwiązania
      </Title>

      <div className={'flex justify-center'}>
        <Grid>
          <div></div>
          <ColumnAsset className={'border-primary border-l-4 border-t-4 border-r-4 rounded-t-xl'}>
            <Image
              src={LANDING_IMAGES_PATH.LOGO}
              alt="Adsylabs Logo"
              width={120}
              height={30}
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
            <FaCheck size={ICON_SIZE} color={twConfig?.theme?.colors?.primary as string} />
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
            Automatyczny system raportowania
          </LeftColumnText>
          <ColumnAsset className={'border-primary border-l-4 border-r-4'}>
            <FaCheck size={ICON_SIZE} color={twConfig?.theme?.colors?.primary as string} />
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
            <Link href="./pre-register">
              <CtaButton
                version={'primary'}
                type="button"
                className={'text-[11px] xl:text-base'}
              >
                Uzyskaj <br /> wczesny dostęp
              </CtaButton>
            </Link>
          </ColumnAsset>
          <div></div>
          <div></div>
          <div></div>
        </Grid>
      </div>
    </StyledSection>
  );
};

export default Comparison;
