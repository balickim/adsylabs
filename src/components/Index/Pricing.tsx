import React, { Children, LegacyRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Link from 'next/link';

import { PAY_PLANS } from '@prisma/client';

const StyledSection = tw.section`md:px-12 mt-16 lg:px-6`;
const TextContainer = tw.div`flex flex-col gap-6 mb-7 text-center`;
const Title = tw.div`text-2xl lg:text-3xl xl:text-4xl`;
const SubTitle = tw.h3`text-sm text-textBase`;
const Grid = tw.div`grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3`;

interface IPricingItem {
  variant: 'primary' | 'secondary';
  title: string;
  subtitle: string;
  price: string;
  payPlan: PAY_PLANS;
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
    tw`flex justify-center text-center text-xl`,
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
      : tw`text-textBase`,
  ]
);
const Price = styled.span<IVariant>(
  ({ variant }) => [
    tw`text-4xl font-bold h-14`,
    variant === 'primary'
      ? tw`text-white`
      : tw`text-black`,
  ]
);

const ButtonContainer = tw.div`flex justify-center px-16 mt-4 justify-self-end`;
const Button = styled.button<IVariant>(
  ({ variant }) => [
    tw`rounded-lg text-lg py-4 px-2 transition hover:-translate-y-1 focus:outline-none focus:ring-4`,
    variant === 'primary'
      ? tw`bg-white text-primary`
      : tw`bg-primary text-white hover:brightness-150`,
  ]
);

const PriceContainer = tw.div`relative flex h-5 justify-center items-end gap-2`;
const ChildrenContainer = tw.div`flex flex-col grow px-4 space-y-4 justify-between`;
const TopContainer = tw.div`flex flex-col gap-6 px-4 justify-between h-40 xl:h-52`;

const PricingItem = ({
  variant,
  title,
  subtitle,
  price,
  children,
  payPlan,
}: IPricingItem) => {
  const arrayChildren = Children.toArray(children);

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

        <ChildrenContainer>
          {Children.map(arrayChildren, (child, index) => {
            return (
              <Text variant={variant} key={index}>
                {child}
              </Text>
            );
          })}
        </ChildrenContainer>
        <ButtonContainer>
          <Link href={`/pre-register?payPlan=${payPlan}`}>
            <Button variant={variant}>
              Odbierz zniżkę i uzyskaj
              wczesny dostep
            </Button>
          </Link>
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
          <p className={'font-bold text-lg'}>60 dniowa gwarancja Adsylabs = brak wyników, nie płacisz</p>
        </PricingItem>
      </Grid>
    </StyledSection>
  );
};

export default Pricing;
