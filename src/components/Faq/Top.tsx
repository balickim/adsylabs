import React from 'react';
import Image from 'next/image';
import { BsArrowDownShort } from 'react-icons/bs';
import Link from 'next/link';

import { LANDING_IMAGES_PATH } from 'utils/constants';
import { twConfig } from 'utils/helpers/tailwind';

interface ITop {
  text: string
}

export const Top = ({ text }: ITop) => {
  const ICON_COLOR = twConfig?.theme?.colors?.primary as string;

  return (
    <section className={'flex justify-evenly items-center'}>
      <div className={'flex flex-col items-center md:items-start'}>
        <h1 className={'text-4xl'}>
          <p>Automatyzujemy</p>
          <p>współprace</p>
          <p>marketingowe</p>
        </h1>
        <p className={'mt-8 w-96 text-center md:text-start'}>{text}</p>
        <div className="mb-7 my-8 h-px bg-gray-300 w-full" />
        <Link href={'#items'}>
          <span className={'flex items-center'}>
            <p className={'text-primary cursor-pointer hover:underline'}>Zjedź niżej i dowiedz się więcej</p>
            <BsArrowDownShort color={ICON_COLOR} size={28} />
          </span>
        </Link>
      </div>
      <Image
        width={400}
        height={400}
        src={LANDING_IMAGES_PATH.FAQ}
        alt="faq image"
        className={'rounded-xl hidden md:block'}
      />
    </section>
  );
};