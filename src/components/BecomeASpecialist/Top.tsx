import tw from 'twin.macro';

const StyledSection = tw.section`px-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 md:pt-8 lg:gap-0`;

const Top = () => {
  return (
    <StyledSection id={'top'}>
      Powiększ dochód, oszczędź czas,
      buduj silną markę

      Uzyskaj dostęp do ekscytujących współprac z Klientami w towarzystwie najlepszych specjalistów marketingu
    </StyledSection>
  );
};

export default Top;
