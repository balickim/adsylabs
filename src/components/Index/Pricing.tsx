import React, { Children } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const StyledSection = tw.section`md:px-12 lg:px-6 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3`;
const TextContainer = tw.div`flex flex-col gap-6 lg:pt-32`;
const Title = tw.div`text-3xl text-center xl:text-left`;
const SubTitle = styled.h3`
  ${tw`text-sm text-gray-500 text-lg text-center xl:text-left`}
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
`;

interface IPricingItem {
  type: 'primary' | 'secondary';
  title: string;
  subtitle: string;
  price: string;
  children: React.ReactNode;
}

const PricingItem = ({
  type,
  title,
  subtitle,
  price,
  children,
}: IPricingItem) => {
  const arrayChildren = Children.toArray(children);

  const PricingContainer = styled.div(
    tw`pt-10 pb-4 border rounded-lg`,
    type === 'primary'
      ? tw`bg-primary`
      : tw`bg-white`
  );
  const TitleContainer = styled.div(
    tw`flex justify-center text-center text-2xl mb-6`,
    type === 'primary'
      ? tw`text-white`
      : tw`text-black`
  );
  const Text = styled.div(
    tw`flex justify-center text-center`,
    type === 'primary'
      ? tw`text-gray-100`
      : tw`text-gray-500`
  );
  const PriceContainer = tw.div`flex justify-center items-end gap-2`;
  const Price = styled.span(
    tw`text-5xl font-bold`,
    type === 'primary'
      ? tw`text-white`
      : tw`text-black`
  );
  const ButtonContainer = tw.div`flex flex-col justify-center px-16 mt-8`;
  const Button = styled.button(
    tw`rounded-lg text-lg py-6 px-4 md:px-12 transition hover:-translate-y-1 focus:outline-none focus:ring-4`,
    type === 'primary'
      ? tw`bg-white text-primary`
      : tw`bg-primary text-white hover:brightness-150`
  );

  return (
    <PricingContainer>
      <div className={'flex flex-col gap-6'}>
        <div className={'px-16'}>
          <TitleContainer>{title}</TitleContainer>
          <div className={'h-28 lg:h-36 xl:h-20'}>
            <Text>{subtitle}</Text>
          </div>
          <PriceContainer>
            <Price>
              {price}zł
            </Price>
            <Text>/Miesięcznie</Text>
          </PriceContainer>
        </div>

        <hr/>

        <div className={'h-84 md:h-72 xl:h-80'}>
          {Children.map(arrayChildren, (child, index) => {
            return (
              <div className={'px-16 my-6 lg:my-4'}>
                <Text key={index}>
                  {child}
                </Text>
              </div>
            );
          })}
        </div>
      </div>

      <ButtonContainer>
        <Button>
          Zarejestruj się za darmo
        </Button>
      </ButtonContainer>
    </PricingContainer>
  );
};

const Pricing = () => {
  return (
    <StyledSection id={'pricing'}>
      <TextContainer className={'col-span-1 lg:col-span-2 xl:col-span-1'}>
        <Title>
          Postaw na sprawdzonych specjalistów
        </Title>
        <SubTitle>
          Szybko i bezpiecznie znajdż i zatrudnij utalentowanych ekspertów, którzy rozwiną Twój biznes i otrzymaj
          od nas 60 dniową gwarancję całkowitego zwrotu pieniędzy*.
        </SubTitle>
      </TextContainer>

      <PricingItem
        type={'secondary'}
        title={'Plan Basic'}
        subtitle={'Dla mniejszych przedsiębiorstw'}
        price={'199'}
      >
        <p>1 użytkownik</p>
        <p>Dostęp do platformy</p>
        <p>Dostęp tylko do 5 wybranych ekspertów</p>
        <p>1 godzina wsparcia eksperta w budowaniu strategii marketingowej</p>
      </PricingItem>
      <PricingItem
        type={'primary'}
        title={'Plan Premium'}
        subtitle={'Dla szybko rozwijających się i średnich przedsiębiorstw'}
        price={'399'}
      >
        <p>3 użytkowników</p>
        <p>Dostęp do platformy</p>
        <p>Dostęp do wszystkich specjalistów</p>
        <p>Indywidualna ilość godzin wsparcia</p>
        <p>Wspólna analiza wyników kampanii</p>
        <p className={'font-bold text-lg'}>60 dniowa gwarancja AdsBridge</p>
      </PricingItem>
    </StyledSection>
  );
};

export default Pricing;
