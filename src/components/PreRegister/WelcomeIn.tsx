import tw from 'twin.macro';

const Container = tw.div`
  relative top-0 text-white p-2 overflow-hidden mt-4
  sm:pl-4 sm:mt-28 lg:pl-24
`;
const Title = tw.h1`
  text-3xl text-center text-white 
  sm:text-start sm:max-w-[90%] lg:text-5xl
`;
const SubTitle = tw.div`
  relative ml-auto mr-auto mt-4 text-base max-w-xs text-center text-white leading-8
  sm:text-start sm:ml-0 sm:mr-0 sm:text-xs sm:max-w-[90%] lg:text-lg
`;

interface IWelcomeIn {
  mobileText?: string | JSX.Element
  desktopText?: string | JSX.Element
}

export const WelcomeIn = ({ mobileText, desktopText }: IWelcomeIn) => {
  return (
    <Container>
      <Title>
        Witaj w Adsylabs!
      </Title>
      <SubTitle className={'sm:hidden'}>
        {mobileText}
      </SubTitle>
      <SubTitle className={'hidden sm:block'}>
        {desktopText}
      </SubTitle>
    </Container>
  );
};