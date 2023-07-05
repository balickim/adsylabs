import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillCheckCircle } from 'react-icons/ai';

import { LANDING_IMAGES_PATH } from 'utils/constants';
import { CtaButton } from 'components/Common/styled';

const StyledSection = tw.section`mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0`;
const Title = tw.h1`text-2xl tracking-tight text-gray-900 lg:text-3xl xl:text-4xl xl:w-[690px]`;
const SubTitle = tw.h3`text-lg text-textBase mt-2 lg:w-[550px]`;

const Top = () => {
  return (
    <StyledSection id={'top'}>
      <div className="flex flex-col justify-center gap-4 lg:gap-10 lg:min-h-[40rem]">
        <Title>
          Zatrudnij specjalistów marketingu <br className={'hidden xl:block'}/>i śledź wyniki kampanii w czasie rzeczywistym!
        </Title>
        <SubTitle>
          Adsylabs.com pomoże Ci znaleźć zweryfikowanych specjalistów marketingu i
          śledzić wyniki prowadzonych przez nich kampanii reklamowych w czasie rzeczywistym, bez ryzyka.
        </SubTitle>

        <Link href="./pre-register">
          <div className={'flex justify-start'}>
            <CtaButton
              version={'primary'}
              type={'button'}
            >
              Uzyskaj wczesny dostęp
            </CtaButton>
          </div>
        </Link>

        <div className="flex gap-3 text-xs">
          <span className="flex items-center gap-1">
            <AiFillCheckCircle
              size={20}
              color={'#007D5D'}
              className={'self-start'}
            />
            Nie znajdziesz kandydata? Nie płacisz.
          </span>
          <span className="flex items-center gap-1">
            <AiFillCheckCircle
              size={20}
              color={'#007D5D'}
              className={'self-start'}
            />
            60 dniowa gwarancja
          </span>
        </div>
      </div>
      <div className='flex my-6 justify-center relative h-96 lg:min-w-[500px] lg:h-auto lg:scale-90 lg:mt-20 xl:ml-20'>
        <Image
          fill
          priority
          quality={50}
          src={LANDING_IMAGES_PATH.STAIN_1}
          alt="stain"
          style={{ objectFit: 'contain' }}
        />
        <Image
          fill
          priority
          quality={60}
          src={LANDING_IMAGES_PATH.ROB_KATARZYNA}
          alt="how it works"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </StyledSection>
  );
};

export default Top;
