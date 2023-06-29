import React from 'react';

interface INavbar {
  text: string | JSX.Element
  showDemo?: boolean
}

const Navbar = ({ text, showDemo = false }: INavbar) => {
  return (
    <div className={'flex h-28 pb-4 text-dashboardPrimary items-end'}>
      <span className={'flex items-center text-3xl'}>{text}</span>
      {showDemo ? <div className={'flex items-center text-center ml-auto lg:text-3xl'}>DANE DEMONSTRACYJNE</div> : null}
    </div>
  );
};

export default Navbar;
