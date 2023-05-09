import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

import { Number } from 'components/Common/styled';
import { BasicTitle } from 'components/Common/styled';
import { STATIC } from 'utils/constants/index';

const StyledSection = tw.section`grid grid-cols-1 items-center mt-16`;
const StyledBasicTitle = tw(BasicTitle)`text-center mb-8`;
const Grid = tw.div`grid grid-cols-1 lg:grid-cols-2`;
const Container = tw.div`flex flex-col gap-6`;
const ItemContainer = styled.div`
  ${tw`grid gap-y-2 gap-x-3`}
  grid-template-columns:
    minmax(7%)
    minmax(93%) 
  ;
  grid-template-rows:
    auto
    auto
  ;
`;
const ItemTop = tw.div`flex font-bold items-center`;
const ItemTitle = tw.h3`text-lg`;
const ItemText = tw.p`col-start-2`;
const ItemLink = tw.div`flex font-bold text-primary text-base md:text-lg items-center hover:underline whitespace-nowrap`;
const ImageContainer = tw.div`relative hidden lg:block`;

const HowItWorks = () => {
  return (
    <StyledSection id={'how-it-works'}>
      <StyledBasicTitle>
        Jak to działa?
      </StyledBasicTitle>

      <Grid>
        <Container>
          <ItemContainer>
            <ItemTop>
              <Number>1</Number>
            </ItemTop>
            <ItemTop>
              <ItemTitle>Zostań zweryfikowanym specjalistą</ItemTitle>
            </ItemTop>
            <ItemText>
              Zarejestruj się za darmo i powiedz nam cos więcej o sobie!
              Nasz zespół skontaktuje się z Tobą aby porozmawiać o Twoim doświadczeniu i karierze na platformie.
            </ItemText>
          </ItemContainer>
          <ItemContainer>
            <ItemTop>
              <Number>2</Number>
            </ItemTop>
            <ItemTop>
              <ItemTitle>Poznaj swoich nowych Klientów</ItemTitle>
            </ItemTop>
            <ItemText>
              Przeprowadź rozmowę z potencjalnymi Klientami i zdecyduj, czy chcesz podjąć współpracę. Zaakceptuj wytyczne projektu w ciągu 24 godzin.
            </ItemText>
          </ItemContainer>
          <ItemContainer>
            <ItemTop>
              <Number>3</Number>
            </ItemTop>
            <ItemTop>
              <ItemTitle>Przeprowadź onboarding, łatwiej niż zawsze</ItemTitle>
            </ItemTop>
            <ItemText>
              Nasza wygodna i przejrzysta platforma onboardingowa pozwoli Ci na szybkie rozpoczęcie współpracy.
            </ItemText>
          </ItemContainer>
          <ItemContainer>
            <ItemTop>
              <Number>4</Number>
            </ItemTop>
            <ItemTop>
              <ItemTitle>Zarządzaj projektem i śledź wyniki</ItemTitle>
            </ItemTop>
            <ItemText>
              Utrzymuj kontakt ze swoim Klientem i oszczędź czas na manualne raportowanie -
              nasza platforma pozwala na ponad 75 integracji z najpopularniejszymi kanałami marketingowymi.
            </ItemText>
          </ItemContainer>
          <ItemContainer>
            <ItemTop>
              <div className='w-10'></div>
              <ItemLink>
                <Link href={'/sign-up'}>
                  Aplikuj teraz i przetestuj za darmo →
                </Link>
              </ItemLink>
            </ItemTop>
          </ItemContainer>
        </Container>

        <ImageContainer>
          <Image
            fill
            src={STATIC.MOBILE_STOCK}
            alt="how-it-works"
            style={{ objectFit: 'contain' }}
          />
        </ImageContainer>
      </Grid>
    </StyledSection>
  );
};

export default HowItWorks;
