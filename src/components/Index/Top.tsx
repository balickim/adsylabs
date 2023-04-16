import { AiFillCheckCircle } from 'react-icons/ai';
import Image from 'next/image';
import tw from 'twin.macro';

import { SubTitleLeftShadow, TitleLeft } from 'components/Index/styled';
import { twConfig } from 'helpers/tailwind';
import { SearchInput } from 'components/Common/styled';
import { STATIC } from 'constants/index';

const StyledSection = tw.section`px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 md:pt-8`;

const Top = () => {
  return (
    <StyledSection id={'top'}>
      <div className="flex flex-col justify-center gap-10 md:min-h-[40rem]">
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
      <div className='flex justify-center relative h-96 md:h-auto'>
        <Image
          fill
          priority
          src={`${STATIC.STAIN_1}`}
          alt="stain"
          style={{ objectFit: 'contain', overflow: 'visible' }}
        />
        <Image
          fill
          priority
          src={`${STATIC.ROB_KATARZYNA}`}
          alt="how it works"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </StyledSection>
  );
};

export default Top;
