import tw from 'twin.macro';

const Container = tw.div`
  relative top-0 text-white p-2 overflow-hidden
  sm:pl-4 sm:mt-28
`;
const Title = tw.h1`
  text-3xl text-center text-black
  sm:text-start sm:max-w-[90%] lg:text-5xl
`;
const SubTitle = tw.p`
  relative ml-auto mr-auto mt-4 text-base max-w-xs text-center text-gray-600 leading-8
  sm:text-start sm:ml-0 sm:mr-0 sm:text-xs sm:max-w-[90%] lg:text-lg
`;

interface IJoinUs {
  mobileText?: string | JSX.Element
  desktopText?: string | JSX.Element
}

export const JoinUs = ({ mobileText, desktopText }: IJoinUs) => {
  return (
    <Container>
      <Title>
        Dołącz do nas
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