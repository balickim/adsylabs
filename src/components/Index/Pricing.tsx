import React, { Children, LegacyRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { usePreRegistrationStore } from 'store';
import { PAY_PLANS } from 'utils/constants/index';

const StyledSection = tw.section`md:px-12 mt-16 md:mt-32 lg:px-6`;
const TextContainer = tw.div`flex flex-col gap-6 mb-7 xl:pt-32 text-center`;
const Title = tw.div`text-3xl`;
const SubTitle = tw.h3`text-sm text-gray-500 text-lg`;
const Grid = tw.div`grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;

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
      ? tw`bg-primary pt-10 md:col-span-2 lg:col-span-1`
      : tw`bg-white pt-4 md:pt-10`,
  ]
);
const TitleContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex justify-center text-center text-2xl h-20`,
    variant === 'primary'
      ? tw`text-white mb-6`
      : tw`text-black md:mb-6`,
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

const ChildrenContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex flex-col grow px-16 space-y-8`,
    variant === 'primary'
      ? tw``
      : tw`space-y-4 md:space-y-8`,
  ]
);

const SubtitleContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`h-16 md:h-20 lg:h-24`,
    variant === 'primary'
      ? tw`h-28`
      : tw`h-12 my-2 md:my-0 md:h-28 lg:h-24`,
  ]
);

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
      <div className={'flex flex-col gap-6 relative'}>
        <div className={'px-16'}>
          <TitleContainer variant={variant}>{title}</TitleContainer>
          <SubtitleContainer variant={variant}>
            <Text variant={variant}>{subtitle}</Text>
          </SubtitleContainer>
          <PriceContainer>
            <Price variant={variant}>
              {price}zł
            </Price>
            <Text variant={variant}>/Miesięcznie</Text>
          </PriceContainer>
        </div>

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
      </div>
      <ButtonContainer variant={variant}>
        <Button variant={variant} onClick={() => handleClick()}>
          Zarejestruj się za darmo
        </Button>
      </ButtonContainer>
    </PricingItemContainer>
  );
};

const Pricing = ({ innerRef }: { innerRef: LegacyRef<HTMLDivElement>}) => {
  return (
    <StyledSection id={'pricing'} ref={innerRef}>
      <TextContainer className={''}>
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
          <p className={'font-bold text-lg'}>Brak gwarancji AdsBridge</p>
        </PricingItem>

        <PricingItem
          variant={'secondary'}
          title={'Plan Standard'}
          subtitle={'Dla szybko rozwijających się i średnich przedsiębiorstw'}
          price={'350'}
          payPlan={PAY_PLANS.STANDARD}
        >
          <p>1 użytkownik</p>
          <p>Dostęp do platformy</p>
          <p>Dostęp tylko do 5 wybranych ekspertów</p>
          <p>1 godzina wsparcia eksperta w budowaniu strategii marketingowej</p>
          <p className={'font-bold text-lg'}>Brak gwarancji AdsBridge</p>
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
          <p>Wspólna analiza wyników kampanii</p>
          <p className={'font-bold text-lg'}>60 dniowa gwarancja AdsBridge</p>
        </PricingItem>
      </Grid>
    </StyledSection>
  );
};

export default Pricing;
