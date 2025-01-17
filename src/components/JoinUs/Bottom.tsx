import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Image from 'next/image';

import { BasicTitle, CtaButton } from 'components/Common/styled';
import { SubTitle } from 'components/Index/styled';
import { LANDING_IMAGES_PATH } from 'utils/constants';
import Link from 'next/link';

const StyledSection = tw.section`mt-12 md:mt-24`;
const StyledBasicTitle = tw(BasicTitle)`text-center mb-4`;
const Container = styled.div`
  ${tw`mt-6 flex flex-col gap-4 font-bold md:flex-row`}
  flex: 1 1 0;
`;
const Item = tw.div`relative p-6 bg-gray-100 rounded-2xl z-0 w-full text-center md:text-left`;
const ItemText = tw.span`block md:h-40 lg:h-20`;
const StyledImage = tw(Image)`mr-auto ml-auto mt-4`;
const Highlight = styled.span`
  position: relative;
  ${tw`text-white font-normal whitespace-nowrap`}
  &::before {
    ${tw`absolute bottom-0 bg-primaryLighten h-full`}
    width: calc(100% + 8px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    z-index: -1;
  }
`;
const CtaContainer = tw.div`
  flex flex-col justify-center items-center text-center bg-primary text-white text-xs w-[90%] h-[19rem] gap-4 mt-[-6.5rem] rounded-3xl 
  lg:text-base lg:w-[80%] lg:mt-[-8rem] lg:gap-6 lg:rounded-none lg:h-[25rem]
`;

const Bottom = () => {
  return (
    <StyledSection id={'bottom'}>
      <StyledBasicTitle>
        Zarejestruj się i dołącz do najlepszych specjalistów
      </StyledBasicTitle>
      <SubTitle>
        Oszczędź czas, nawiąż nowe współprace i rozwijaj biznes
      </SubTitle>
      <Container>
        <Item>
          <ItemText>
            Poznaj: <Highlight>społeczność ekspertów</Highlight> pomoże Ci uzyskać odpowiedź na każde pytanie dzięki wbudowanej grupie Slack.
          </ItemText>
          <StyledImage
            src={LANDING_IMAGES_PATH.SPECIALISTS_CTA_1}
            alt="Społeczność ekspertów"
            width={500}
            height={400}
          />
        </Item>
        <Item>
          <ItemText>
            Zwiększ produktywnosć: zarządzaj wszystkimi klientami <Highlight>w jednym miejscu.</Highlight>
          </ItemText>
          <StyledImage
            src={LANDING_IMAGES_PATH.SPECIALISTS_CTA_2}
            alt="Zarządzaj klientami"
            width={500}
            height={400}
          />
        </Item>
        <Item>
          <ItemText>
            Oszczędź czas: korzystaj z naszego <Highlight>automatycznego systemu</Highlight> raportowania wyników kampanii.
          </ItemText>
          <StyledImage
            src={LANDING_IMAGES_PATH.SPECIALISTS_CTA_3}
            alt="Automatyczny system"
            width={500}
            height={400}
          />
        </Item>
      </Container>
      <div className={'flex justify-center'}>
        <CtaContainer>
          <h1 className={'text-xl lg:text-2xl xl:text-3xl mt-24'}>Zarejestruj się za darmo</h1>
          <p className={'max-w-[70%] sm:max-w-[40%] md:max-w-[30%]'}>Porozmawiajmy, jak możemy pomóc rozwinąć Twoją karierę.</p>
          <Link href="/join-us/pre-register">
            <CtaButton
              version={'secondary'}
              type={'button'}
              className={'w-40'}
            >
              Aplikuj teraz
            </CtaButton>
          </Link>
        </CtaContainer>
      </div>
    </StyledSection>
  );
};

export default Bottom;
