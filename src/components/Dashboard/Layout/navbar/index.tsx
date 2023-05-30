import React from 'react';
import { useUser } from '@clerk/nextjs';

import { StyledFaSpinner } from 'components/Common/styled';

const Navbar = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className={'flex h-28 pb-2 text-[#2B3674] items-end'}>
      <span className={'flex items-center text-3xl'}>Dzień Dobry, {isLoaded ? user?.firstName : <StyledFaSpinner size={36} /> }</span>
    </div>
  );
};

export default Navbar;
