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
  subtitle: string
}

export const JoinUs = ({ subtitle }: IJoinUs) => {
  return (
    <Container>
      <Title>
        Dołącz do nas
      </Title>
      <SubTitle className={'sm:hidden'}>
        Nasza platforma jest wciąż w fazie rozwoju i testów.
        Cały nasz zespół ciężko pracuje, aby dostarczyć produkt, który przyspieszy i rozwinie marketing w Twoim Biznesie.
      </SubTitle>
      <SubTitle className={'hidden sm:block'}>
        Wypełnij formularz, jako pierwszy dowiedz się o starcie platformy
        i skorzystaj z <b>{subtitle}</b>
      </SubTitle>
    </Container>
  );
};