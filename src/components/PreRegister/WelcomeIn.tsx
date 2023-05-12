import tw from 'twin.macro';

const Container = tw.div`
  relative top-0 text-white p-2 overflow-hidden mt-4
  sm:pl-4 sm:mt-28 lg:pl-24
`;
const Title = tw.h1`
  text-5xl text-center text-white 
  sm:text-start sm:max-w-[90%] lg:text-6xl
`;
const SubTitle = tw.div`
  relative ml-auto mr-auto mt-4 text-lg max-w-xs text-center text-white leading-8
  sm:text-start sm:ml-0 sm:mr-0 sm:text-base sm:max-w-[90%] lg:text-xl
`;

interface IWelcomeIn {
  subtitle: string
}

export const WelcomeIn = ({ subtitle }: IWelcomeIn) => {
  return (
    <Container>
      <Title>
        Witaj w AdsBridge!
      </Title>
      <SubTitle className={'sm:hidden'}>
        Wypełnij formularz, jako pierwszy dowiedz się o starcie platformy i
        skorzystaj z <span className={'font-bold'}>10% rabatu na pierwsze 2 miesiące subskrypcji AdsBridge.</span>
      </SubTitle>
      <SubTitle className={'hidden sm:block'}>
        Nasza platforma jest wciąż w fazie rozwoju i testów. Cały nasz zespół ciężko pracuje,
        aby dostarczyć produkt, który przyspieszy {subtitle}
      </SubTitle>
    </Container>
  );
};