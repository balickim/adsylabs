import { AiFillCheckCircle } from 'react-icons/ai';
import Image from 'next/image';

import { IMAGES } from 'constants/index';
import { StyledImageContainer, SubTitleLeftShadow, TitleLeft } from 'components/Index/styled';
import { twConfig } from 'helpers/tailwind';
import { SearchInput } from '../Common/styled';

const Top = () => {
  return (
    <section id={'top'} className="grid grid-cols-1 sm:mt-4 md:grid-cols-2">
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
      <div className='flex justify-center'>
        <StyledImageContainer>
          <Image
            fill
            priority
            src={`/static/${IMAGES.ROB_KATARZYNA}`}
            alt="how it works"
            style={{ objectFit: 'cover', overflow: 'visible' }}
          />
        </StyledImageContainer>
      </div>
    </section>
  );
};

export default Top;
