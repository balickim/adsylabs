import React from 'react';
import tw from 'twin.macro';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { BasicTitle } from 'components/Common/styled';
import { twConfig } from 'helpers/tailwind';

const StyledSection = tw.section`grid grid-cols-1 items-center mt-16`;
const StyledBasicTitle = tw(BasicTitle)`text-center mb-8`;
const Grid = tw.div`grid gap-4 grid-cols-1 md:grid-cols-2`;
const ItemContainer = tw.div`rounded-2xl border p-6 flex gap-2`;

const MoreBenefits = () => {
  const ICON_SIZE = 80;

  return (
    <StyledSection id={'more-benefits'}>
      <StyledBasicTitle>
        Więcej korzyści współpracy z nami
      </StyledBasicTitle>

      <Grid>
        <ItemContainer>
          <AiOutlineCheckCircle size={ICON_SIZE} color={twConfig?.theme?.colors?.primary as string} />
          <p>
            <b>AdsBridge to najbardziej przystępna cenowo platforma na rynku.</b>
            {' '}Cenimy Wasze doświadczenie, czas i niesamowite wyniki reklamowe.
          </p>
        </ItemContainer>
        <ItemContainer>
          <AiOutlineCheckCircle size={ICON_SIZE} color={twConfig?.theme?.colors?.primary as string} />
          <p>
            <b>Sytuacja win-win.</b>
            {' '}Pomagamy znaleźć idealnie dopasowanych Klientów, w niszy, którą oboje doskonale rozumiecie.
          </p>
        </ItemContainer>
        <ItemContainer>
          <AiOutlineCheckCircle size={ICON_SIZE} color={twConfig?.theme?.colors?.primary as string} />
          <p>
            <b>Społeczność ekspertów.</b>
            {' '}Dołącz do społeczności doświadczonych Ekspertów, wymieniaj się doswiadczeniami i buduj swoją markę.
          </p>
        </ItemContainer>
        <ItemContainer>
          <AiOutlineCheckCircle size={ICON_SIZE} color={twConfig?.theme?.colors?.primary as string} />
          <p>
            <b>Zaufanie Klienta.</b>
            {' '}Zrzeszamy najlepszych, najbardziej utalentowanych i doświadczonych freelancerów i agencje marketingowe.
          </p>
        </ItemContainer>
      </Grid>
    </StyledSection>
  );
};

export default MoreBenefits;
