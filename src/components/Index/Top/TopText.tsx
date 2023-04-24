import { AiFillCheckCircle } from 'react-icons/ai';
import Link from 'next/link';

import { SubTitleLeftShadow, TitleLeft } from 'components/Index/styled';
import { twConfig } from 'helpers/tailwind';
import { CtaButton } from 'components/Common/styled';

const TopText = () => {
  return (
    <div className="flex flex-col justify-center gap-4 md:gap-10 md:min-h-[40rem]">
      <TitleLeft>
          Zatrudnij specjalistów marketingu, bez ryzyka
      </TitleLeft>
      <SubTitleLeftShadow>
          Adsbridge.pl pomoże Ci znaleźć, zatrudnić i zarządzać zweryfikowanymi
          specjalistami ds. marketingu i reklamy
      </SubTitleLeftShadow>

      <Link href="/#pricing">
        <div className={'flex justify-start'}>
          <CtaButton
            version={'primary'}
            type={'button'}
          >
            Znajdź specjalistę
          </CtaButton>
        </div>
      </Link>
        

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
  );
};

export default TopText;
