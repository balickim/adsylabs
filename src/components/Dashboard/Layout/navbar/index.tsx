import React from 'react';
import { useUser } from '@clerk/nextjs';

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className={'flex h-28 pb-2 text-[#2B3674] items-end'}>
      <span className={'text-4xl'}>Dzień Dobry, {user?.firstName}</span>
    </div>
  );
};

export default Navbar;
