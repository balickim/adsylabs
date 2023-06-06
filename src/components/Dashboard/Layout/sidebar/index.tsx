import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Links from './components/Links';
import routes from 'components/Dashboard/Layout/routes';
import { LANDING_IMAGES_PATH } from 'utils/constants';
import { MdLogout } from 'react-icons/md';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { twConfig } from 'utils/helpers/tailwind';

interface ISidebar {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ISidebarContainer {
  open: boolean
}

export const SidebarContainer = styled.aside<ISidebarContainer>(
  ({ open }) => [
    tw`
        z-20 fixed min-h-full bg-white pb-10 shadow-2xl shadow-white/5 text-white md:z-0
        transition ease-in-out delay-150 duration-300
      `,
    open
      ? tw``
      : tw`fixed translate-x-[-310px]`,
  ]
);

const Sidebar = ({ open, setOpen }: ISidebar) => {
  const { signOut } = useAuth();
  const { push } = useRouter();
  const ICON_COLOR = twConfig?.theme?.colors?.secondary as string;

  return (
    <SidebarContainer open={open}>
      <span
        className="absolute text-black top-2 right-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <BsArrowLeft size={32} color={ICON_COLOR} />
      </span>

      <div className={'h-28 ml-6 flex items-center'}>
        <Image
          src={LANDING_IMAGES_PATH.LOGO}
          alt="AdsBridge Logo"
          width={200}
          height={100}
          priority
        />
      </div>
      
      <div className="mb-7 h-px bg-gray-100" />

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
      <button
        onClick={() => signOut().then(() => push('./'))}
        className={'absolute left-10 bottom-20 flex items-center gap-2 text-gray-400 text-lg'}
      >
        <MdLogout size={24} /> Wyloguj się
      </button>
      {open ? null : <button onClick={() => setOpen(!open)} className={'absolute top-2 right-[-50px]'}>
        <BsArrowRight size={32} color={ICON_COLOR} />
      </button>}
    </SidebarContainer>
  );
};

export default Sidebar;
