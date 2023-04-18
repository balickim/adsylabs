import React, { Children } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Link from 'next/link';

const StyledSection = tw.section`md:px-12 mt-16 md:mt-32 lg:px-6 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3`;
const TextContainer = tw.div`flex flex-col gap-6 xl:pt-32`;
const Title = tw.div`text-3xl text-center xl:text-left`;
const SubTitle = styled.h3`
  ${tw`text-sm text-gray-500 text-lg text-center xl:text-left`}
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
`;

interface IPricingItem {
  variant: 'primary' | 'secondary';
  title: string;
  subtitle: string;
  price: string;
  children: React.ReactNode;
}

interface IVariant {
  variant: IPricingItem['variant']
}

const PricingContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`pt-10 pb-4 border rounded-lg relative`,
    variant === 'primary'
      ? tw`bg-primary`
      : tw`bg-white`,
  ]
);
const TitleContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex justify-center text-center text-2xl mb-6`,
    variant === 'primary'
      ? tw`text-white`
      : tw`text-black`,
  ]
);
const Text = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex justify-center text-center`,
    variant === 'primary'
      ? tw`text-gray-100`
      : tw`text-gray-500`,
  ]
);
const Price = styled.span<IVariant>(
  ({ variant }) => [
    tw`text-5xl font-bold`,
    variant === 'primary'
      ? tw`text-white`
      : tw`text-black`,
  ]
);
const Button = styled.button<IVariant>(
  ({ variant }) => [
    tw`rounded-lg text-lg py-6 px-4 md:px-12 transition hover:-translate-y-1 focus:outline-none focus:ring-4`,
    variant === 'primary'
      ? tw`bg-white text-primary`
      : tw`bg-primary text-white hover:brightness-150`,
  ]
);
const PriceContainer = tw.div`flex justify-center items-end gap-2`;
const ButtonContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex justify-center px-16 mt-4 relative`,
    variant === 'primary'
      ? tw``
      : tw`lg:absolute lg:bottom-4 lg:left-0 lg:right-0 lg:m-0 lg:text-center lg:mx-auto`,
  ]
);

const ChildrenContainer = styled.div`
  ${tw`flex flex-col grow px-16 space-y-8`}
`;

const PricingItem = ({
  variant,
  title,
  subtitle,
  price,
  children,
}: IPricingItem) => {
  const arrayChildren = Children.toArray(children);

  return (
    <PricingContainer variant={variant}>
      <div className={'flex flex-col gap-6 relative'}>
        <div className={'px-16'}>
          <TitleContainer variant={variant}>{title}</TitleContainer>
          <div className={'h-28 lg:h-36 xl:h-20'}>
            <Text variant={variant}>{subtitle}</Text>
          </div>
          <PriceContainer>
            <Price variant={variant}>
              {price}zł
            </Price>
            <Text variant={variant}>/Miesięcznie</Text>
          </PriceContainer>
        </div>

        <hr/>

        <ChildrenContainer>
          {Children.map(arrayChildren, (child, index) => {
            return (
              <Text variant={variant} key={index}>
                {child}
              </Text>
            );
          })}
        </ChildrenContainer>
      </div>
      <ButtonContainer variant={variant}>
        <Link href="/sign-up">
          <Button variant={variant}>
          Zarejestruj się za darmo
          </Button>
        </Link>
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
        variant={'secondary'}
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
        variant={'primary'}
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
