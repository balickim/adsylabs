import { AiFillCheckCircle } from 'react-icons/ai';
import Image from 'next/image';
import tw from 'twin.macro';

import { STATIC } from 'constants/index';
import { StyledImageContainer, SubTitleLeftShadow, TitleLeft } from 'components/Index/styled';
import { twConfig } from 'helpers/tailwind';
import { SearchInput } from '../Common/styled';

const StyledSection = tw.section`grid grid-cols-1 gap-24 mt-8 md:grid-cols-2 md:mt-24`;

const Top = () => {
  return (
    <StyledSection id={'top'}>
      <div className="flex flex-col justify-center gap-10">
        <TitleLeft>
          Zatrudnij specjalistów marketingu, bez ryzyka
        </TitleLeft>
        <SubTitleLeftShadow>
          Adsbridge.pl pomoże Ci znaleźć, zatrudnić i zarządzać zweryfikowanymi
          specjalistami ds. marketingu i reklamy
        </SubTitleLeftShadow>

        <SearchInput
          label={'ZNAJDŹ SPECJALISTĘ'}
          placeholder={'Wyszukaj Specjalista Facebook Ads etc.'}
        />

        <div className="flex gap-3 text-xs">
          <span className="flex items-center gap-1">
            <AiFillCheckCircle
              size={20}
              color={twConfig?.theme?.colors?.secondary as string}
            />
            Nie znajdziesz kandydata? Nie płacisz.
          </span>
          <span className="flex items-center gap-1">
            <AiFillCheckCircle
              size={20}
              color={twConfig?.theme?.colors?.secondary as string}
            />
            60 dniowa gwarancja
          </span>
        </div>
      </div>
      <div className='flex justify-center relative'>
        <Image
          fill
          priority
          src={`${STATIC.STAIN_1}`}
          alt="stain"
          className={'absolute scale-150 !top-8'}
          style={{ objectFit: 'cover', left: '-4rem !important' }}
        />
        <StyledImageContainer>
          <Image
            fill
            priority
            src={`${STATIC.ROB_KATARZYNA}`}
            alt="how it works"
            style={{ objectFit: 'cover', overflow: 'visible' }}
          />
        </StyledImageContainer>
      </div>
    </StyledSection>
  );
};

export default Top;
