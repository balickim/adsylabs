import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillCheckCircle } from 'react-icons/ai';

import { LANDING_IMAGES_PATH } from 'utils/constants';
import { SubTitleLeft, TitleLeft } from 'components/Index/styled';
import { CtaButton } from 'components/Common/styled';

const StyledSection = tw.section`px-10 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0`;

const Top = () => {
  return (
    <StyledSection id={'top'}>
      <div className="flex flex-col justify-center gap-4 lg:gap-10 lg:min-h-[40rem]">
        <TitleLeft>
          Zatrudnij specjalistów marketingu, bez ryzyka
        </TitleLeft>
        <SubTitleLeft>
          Adsbridge.pl pomoże Ci znaleźć, zatrudnić i zarządzać zweryfikowanymi
          specjalistami ds. marketingu i reklamy
        </SubTitleLeft>

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
              color={'#007D5D'}
            />
            Nie znajdziesz kandydata? Nie płacisz.
          </span>
          <span className="flex items-center gap-1">
            <AiFillCheckCircle
              size={20}
              color={'#007D5D'}
            />
            60 dniowa gwarancja
          </span>
        </div>
      </div>
      <div className='flex my-6 justify-center relative h-96 lg:h-auto lg:scale-75 lg:mt-20'>
        <Image
          fill
          priority
          src={LANDING_IMAGES_PATH.STAIN_1}
          alt="stain"
          style={{ objectFit: 'contain' }}
        />
        <Image
          fill
          priority
          src={LANDING_IMAGES_PATH.ROB_KATARZYNA}
          alt="how it works"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </StyledSection>
  );
};

export default Top;
