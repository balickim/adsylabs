import React, { Children, LegacyRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSpecialistsPreRegistrationStore } from '../../store';
import { useAuth } from '@clerk/nextjs';

const StyledSection = tw.section`md:px-12 mt-16 md:mt-32 lg:px-6 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3`;
const TextContainer = tw.div`flex flex-col gap-6 xl:pt-32`;
const Title = tw.div`text-3xl text-center xl:text-left`;
const SubTitle = tw.h3`text-sm text-gray-500 text-lg text-center xl:text-left`;

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
    tw`pb-4 border rounded-lg relative`,
    variant === 'primary'
      ? tw`bg-primary pt-10`
      : tw`bg-white pt-4 md:pt-10`,
  ]
);
const TitleContainer = styled.div<IVariant>(
  ({ variant }) => [
    tw`flex justify-center text-center text-2xl`,
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
    tw`lg:h-24`,
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
}: IPricingItem) => {
  const arrayChildren = Children.toArray(children);
  const router = useRouter();
  const store = useSpecialistsPreRegistrationStore();
  const { isSignedIn } = useAuth();

  const handleClick = (variant: IPricingItem['variant']) => {
    if (isSignedIn) return router.push('/thank-you');

    store.setStep(0);
    router.push({
      pathname: '/pre-register',
      query: { plan: variant === 'primary' ? 'premium' : 'basic' },
    });
  };

  return (
    <PricingContainer variant={variant}>
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
        <Button variant={variant} onClick={() => handleClick(variant)}>
          Zarejestruj się za darmo
        </Button>
      </ButtonContainer>
    </PricingContainer>
  );
};

const Pricing = ({ innerRef }: { innerRef: LegacyRef<HTMLDivElement>}) => {
  return (
    <StyledSection id={'pricing'} ref={innerRef}>
      <TextContainer className={'col-span-1 lg:col-span-2 xl:col-span-1'}>
        <Title>
          Postaw na sprawdzonych specjalistów
        </Title>
        <SubTitle>
          Szybko i bezpiecznie znajdż i zatrudnij utalentowanych ekspertów, którzy rozwiną Twój biznes i otrzymaj
          od nas 60 dniową gwarancję całkowitego zwrotu pieniędzy.
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
