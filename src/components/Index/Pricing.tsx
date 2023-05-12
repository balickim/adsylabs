import React, { Children, LegacyRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { usePreRegistrationStore } from 'store';
import { PAY_PLANS } from 'utils/constants/index';

const StyledSection = tw.section`md:px-12 mt-16 lg:px-6`;
const TextContainer = tw.div`flex flex-col gap-6 mb-7 text-center`;
const Title = tw.div`text-3xl`;
const SubTitle = tw.h3`text-sm text-gray-500 text-lg`;
const Grid = tw.div`grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3`;

interface IPricingItem {
  variant: 'primary' | 'secondary';
  title: string;
  subtitle: string;
  price: string;
  payPlan: 'basic' | 'standard' | 'premium_guarantee'; // use PAY_PLANS constant here somehow
  children: React.ReactNode;
}

interface IVariant {
  variant: IPricingItem['variant']
}

const PricingItemContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`pb-4 border rounded-lg relative`,
    variant === 'primary'
      ? tw`bg-primary pt-10 md:col-span-2 mx-0 md:mx-16 lg:mx-44 xl:mx-0 xl:col-span-1`
      : tw`bg-white pt-4 md:pt-10`,
  ]
);
const TitleContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex justify-center text-center text-2xl`,
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

const ButtonContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex justify-center px-16 mt-4 justify-self-end`,
    variant === 'primary'
      ? tw``
      : tw``,
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

const PriceContainer = tw.div`relative flex justify-center items-end gap-2`;
const ChildrenContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex flex-col grow px-4 space-y-4 justify-between`,
    variant === 'primary'
      ? tw``
      : tw`md:space-y-12`,
  ]
);

const TopContainer = tw.div`flex flex-col gap-6 px-16 h-52 justify-between md:h-64 lg:h-44 xl:h-60`;

const PricingItem = ({
  variant,
  title,
  subtitle,
  price,
  children,
  payPlan,
}: IPricingItem) => {
  const arrayChildren = Children.toArray(children);
  const router = useRouter();
  const store = usePreRegistrationStore();

  const handleClick = () => {
    if (!store.puuid) store.setPuuid();
    store.setPayPlan(payPlan);
    return router.push({
      pathname: '/pre-register',
    });
  };

  return (
    <PricingItemContainer variant={variant}>
      <div className={'flex flex-col gap-6 relative h-full'}>
        <TopContainer>
          <TitleContainer variant={variant}>{title}</TitleContainer>
          <Text variant={variant}>{subtitle}</Text>
          <PriceContainer>
            <Price variant={variant}>
              {price}zł
            </Price>
            <Text variant={variant}>/Miesięcznie</Text>
          </PriceContainer>
        </TopContainer>

        <hr/>

        <ChildrenContainer variant={variant}>
          {Children.map(arrayChildren, (child, index) => {
            return (
              <Text variant={variant} key={index}>
                {child}
              </Text>
            );
          })}
        </ChildrenContainer>
        <ButtonContainer variant={variant}>
          <Button variant={variant} onClick={() => handleClick()}>
            Zarejestruj się za darmo
          </Button>
        </ButtonContainer>
      </div>
    </PricingItemContainer>
  );
};

const Pricing = ({ innerRef }: { innerRef: LegacyRef<HTMLDivElement>}) => {
  return (
    <StyledSection id={'pricing'} ref={innerRef}>
      <TextContainer>
        <Title>
          Postaw na sprawdzonych specjalistów
        </Title>
        <SubTitle>
          Szybko i bezpiecznie znajdż i zatrudnij utalentowanych ekspertów, którzy rozwiną Twój biznes i otrzymaj
          od nas 60 dniową gwarancję całkowitego zwrotu pieniędzy.
        </SubTitle>
      </TextContainer>

      <Grid>
        <PricingItem
          variant={'secondary'}
          title={'Plan Basic'}
          subtitle={'Plan testowy'}
          price={'200'}
          payPlan={PAY_PLANS.BASIC}
        >
          <p>1 użytkownik</p>
          <p>Dostęp do platformy</p>
          <p>Dostęp tylko do 5 wybranych ekspertów</p>
          <p>1 godzina wsparcia eksperta w budowaniu strategii marketingowej</p>
        </PricingItem>

        <PricingItem
          variant={'secondary'}
          title={'Plan Standard'}
          subtitle={'Dla szybko rozwijających się i średnich przedsiębiorstw'}
          price={'350'}
          payPlan={PAY_PLANS.STANDARD}
        >
          <p>3 użytkowników</p>
          <p>Dostęp do platformy</p>
          <p>Dostęp do wszystkich specjalistów</p>
          <p>Automatyczny system raportowania</p>
        </PricingItem>

        <PricingItem
          variant={'primary'}
          title={'Plan Premium + Gwarancja'}
          subtitle={'Dla szybko rozwijających się i średnich przedsiębiorstw'}
          price={'400'}
          payPlan={PAY_PLANS.PREMIUM_GUARANTEE}
        >
          <p>3 użytkowników</p>
          <p>Dostęp do platformy</p>
          <p>Dostęp do wszystkich specjalistów</p>
          <p>Indywidualna ilość godzin wsparcia</p>
          <p>Automatyczny system raportowania</p>
          <p className={'font-bold text-lg'}>60 dniowa gwarancja AdsBridge = brak wyników, nie płacisz</p>
        </PricingItem>
      </Grid>
    </StyledSection>
  );
};

export default Pricing;
