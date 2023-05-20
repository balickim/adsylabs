/* eslint-disable */
import { HiX } from "react-icons/hi";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Links from "./components/Links";
import routes from "components/Dashboard/Layout/routes";
import { LANDING_IMAGES_PATH } from "utils/constants";

interface ISidebar {
  open: boolean
}

export const SidebarContainer = styled.aside<ISidebar>(
  ({ open }) => [
    tw`
        fixed min-h-full bg-white pb-10 shadow-2xl shadow-white/5 text-white
        transition ease-in-out delay-150 duration-300
      `,
    open
      ? tw``
      : tw`fixed translate-x-[-350px]`,
  ]
);

const Sidebar = ({ open }: ISidebar) => {
  return (
    <SidebarContainer open={open}>
      {/*<span*/}
      {/*  className="absolute top-4 right-4 cursor-pointer"*/}
      {/*  onClick={() => setOpen(!open)}*/}
      {/*>*/}
      {/*  <HiX />*/}
      {/*</span>*/}

      <div className={`h-28 ml-6 flex items-center`}>
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
    </SidebarContainer>
  );
};

export default Sidebar;
