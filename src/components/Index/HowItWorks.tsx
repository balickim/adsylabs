import tw from 'twin.macro';

import { Number } from 'components/Common/styled';

const StyledSection = tw.section`px-6 mt-16 md:mt-32 flex flex-col gap-8`;
const Title = tw.h1`text-center text-2xl lg:text-3xl xl:text-4xl tracking-tight text-gray-900`;
const SubTitle = tw.h2`text-center font-light text-gray-500 sm:text-base xl:px-52`;
const StyledStepsContainer = tw.div`grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-6 lg:gap-24 text-center`;
const StyledStep = tw.div`flex flex-col gap-2`;
const StyledIconContainer = tw.div`flex justify-center`;
const StyledText = tw.div`font-light text-gray-500 text-sm`;
const StyledHeaderText = tw.span`text-lg lg:text-2xl`;

const HowItWorks = () => {
  return (
    <StyledSection id={'how-it-works'}>
      <Title>
        Zweryfikowani specjaliści marketingu <wbr />w zasięgu ręki
      </Title>
      <SubTitle>
        Szybko i bezpiecznie nawiąż współpracę z doświadczonymi specjalistami reklamy i rozwiń swój biznes!
      </SubTitle>
      
      <StyledStepsContainer>
        <StyledStep>
          <StyledIconContainer>
            <Number>1</Number>
          </StyledIconContainer>
          <StyledHeaderText>Zdefiniuj cele</StyledHeaderText>
          <StyledText>
            Określ swój budżet reklamowy, kanały komunikacji i pozostałe wymagania. Twój dedykowany ekspert chętnie pomoże Ci obrać odpowiednią strategię marketingową.
          </StyledText>
        </StyledStep>
        <StyledStep>
          <StyledIconContainer>
            <Number>2</Number>
          </StyledIconContainer>
          <StyledHeaderText>Przeprowadź rekrutację</StyledHeaderText>
          <StyledText>
            Szybko znajdź grono odpowiednich specjalistów, skontaktuj się z nimi poprzez wbudowany chat i zacznij współpracę.
          </StyledText>
        </StyledStep>
        <StyledStep>
          <StyledIconContainer>
            <Number>3</Number>
          </StyledIconContainer>
          <StyledHeaderText>Zarządzaj specjalistami</StyledHeaderText>
          <StyledText>
            Trzymaj rękę na pulsie dzięki łatwym w nawigacji pulpicie i automatycznym systemie raportowania wyników kampanii wbudowanym w platformę AdsBridge
          </StyledText>
        </StyledStep>
      </StyledStepsContainer>
    </StyledSection>
  );
};

export default HowItWorks;
