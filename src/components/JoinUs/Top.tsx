import tw from 'twin.macro';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

import { twConfig } from 'helpers/tailwind';
import { BasicTitle, CtaButton } from 'components/Common/styled';

const StyledSection = tw.section`px-10 gap-4 flex flex-col items-center`;
const StarsContainer = tw.div`flex`;
const StyledBasicTitle = tw(BasicTitle)`flex flex-col text-center md:flex-row md:text-left`;
const TitleText = tw.p`md:mx-1`;
const Text = tw.p`text-center`;

const Top = () => {
  const ICON_SIZE = 24;
  const COLOR = twConfig?.theme?.colors?.primary as string;
  
  return (
    <StyledSection id={'top'}>
      <StarsContainer>
        <AiFillStar size={ICON_SIZE} color={COLOR} />
        <AiFillStar size={ICON_SIZE} color={COLOR} />
        <AiFillStar size={ICON_SIZE} color={COLOR} />
        <AiFillStar size={ICON_SIZE} color={COLOR} />
        <AiFillStar size={ICON_SIZE} color={COLOR} />
      </StarsContainer>
      <StyledBasicTitle>
        <TitleText>Powiększ dochód,</TitleText>
        <TitleText>{' '}oszczędź czas,</TitleText>
        <TitleText>{' '}buduj silną markę</TitleText>
      </StyledBasicTitle>
      <Text>
        Uzyskaj dostęp do ekscytujących współprac z Klientami w towarzystwie najlepszych specjalistów marketingu
      </Text>
      <Link href="/sign-up">
        <CtaButton
          version={'primary'}
          type={'button'}
          className={'w-64 !py-2'}
        >
          Aplikuj teraz
        </CtaButton>
      </Link>
    </StyledSection>
  );
};

export default Top;
