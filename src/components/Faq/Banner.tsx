import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LANDING_IMAGES_PATH } from 'utils/constants';
import { CtaButton } from 'components/Common/styled';

interface IBanner {
  text_1: string
  text_2: string
  text_3: string
  link: string
}

export const Banner = ({ text_1, text_2, text_3, link }: IBanner) => {
  return (
    <div className={'bg-primary p-8 mx-auto mt-8 xl:w-3/5'}>
      <div className={'flex flex-col gap-4 xl:gap-2 xl:flex-row xl:justify-evenly'}>
        <div className={'flex items-center gap-4 mx-auto'}>
          <div className={'min-w-fit'}>
            <Image
              src={LANDING_IMAGES_PATH.WAVING_HAND}
              alt="hand"
              width={50}
              height={50}
            />
          </div>

          <p className={'text-white text-lg xl:w-3/5 xl:text-xl'}>{text_1}</p>
        </div>

        <div className={'flex flex-col items-center'}>
          <Link href={link}>
            <CtaButton
              version={'secondary'}
              type={'button'}
              className={'w-52'}
            >
              <p className={'text-primary'}>{text_2}</p>
            </CtaButton>
          </Link>

          <p className={'text-xs text-gray-300 xl:w-56 xl:text-center'}>{text_3}</p>
        </div>
      </div>
    </div>
  );
};