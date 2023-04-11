import tw from 'twin.macro';
import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
} from 'react-icons/tb';

import { twConfig } from 'helpers/tailwind';
import { SubTitle, Title } from './styled';

export const StyledSection = tw.section`flex flex-col gap-8`;
export const StyledStepsContainer = tw.div`grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center`;
export const StyledStep = tw.div`flex flex-col gap-2`;
export const StyledIconContainer = tw.div`flex justify-center`;
export const StyledText = tw.div`font-light text-gray-500`;

const HowItWorks = () => {
  return (
    <StyledSection id={'how-it-works'}>
      <Title>
        Zweryfikowani specjaliści marketingu w zasięgu ręki
      </Title>
      <SubTitle>
        Szybko i bezpiecznie nawiąż współpracę z doświadczonymi specjalistami reklamy i rozwiń swój biznes!
      </SubTitle>
      
      <StyledStepsContainer>
        <StyledStep>
          <StyledIconContainer>
            <TbSquareRoundedNumber1Filled
              size={30}
              color={twConfig?.theme?.colors?.primary as string}
            />
          </StyledIconContainer>
          <span>Zdefiniuj cele</span>
          <StyledText>
            Określ swój budżet reklamowy, kanały komunikacji i pozostałe wymagania. Nie jesteś pewny/a? Chętnie pomożemy!
          </StyledText>
        </StyledStep>
        <StyledStep>
          <StyledIconContainer>
            <TbSquareRoundedNumber2Filled
              size={30}
              color={twConfig?.theme?.colors?.primary as string}
            />
          </StyledIconContainer>
          <span>Przeprowadź rekrutację</span>
          <StyledText>
            Szybko znajdź grono specjalistów i zacznij współpracę.
          </StyledText>
        </StyledStep>
        <StyledStep>
          <StyledIconContainer>
            <TbSquareRoundedNumber3Filled
              size={30}
              color={twConfig?.theme?.colors?.primary as string}
            />
          </StyledIconContainer>
          <span>Osiągnij sukces</span>
          <StyledText>
            Rozwiń swój marketing z naszymi zweryfikowanymi specjalistami lub otrzymaj całkowity zwrot pieniędzy.
          </StyledText>
        </StyledStep>
      </StyledStepsContainer>
    </StyledSection>
  );
};

export default HowItWorks;
