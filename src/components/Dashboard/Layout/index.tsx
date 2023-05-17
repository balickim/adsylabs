import React from 'react';
import tw from 'twin.macro';

import Navbar from 'components/Dashboard/Layout/navbar';
import Sidebar from 'components/Dashboard/Layout/sidebar';
import { twConfig } from 'utils/helpers/tailwind';
import styled from 'styled-components';

const LayoutWrapper = tw.section`flex h-screen`;
const Container = tw.section`flex flex-1 overflow-hidden`;

interface IChildrenContainer {
  open: boolean
}

export const ContentContainer = styled.main<IChildrenContainer>(
  ({ open }) => [
    tw`
        w-full px-8 h-full overflow-y-auto bg-[#F4F7FE]
        transition-all ease-in-out delay-150 duration-300
      `,
    open
      ? tw`ml-80`
      : tw`ml-0`,
  ]
);

interface IDashboardLayout {
  children: React.ReactNode;
}

export default function DashboardLayout ({ children }: IDashboardLayout) {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener('resize', () =>
      // @ts-ignore
      window.innerWidth < twConfig.theme.screens.xl.slice(0, -2) ? setOpen(false) : setOpen(true)
    );
  }, []);

  return (
    <LayoutWrapper>
      <Container>
        <Sidebar open={open} />
        <ContentContainer open={open}>
          <Navbar />
          <div className={'pt-5 mx-auto mb-auto'}>
            {children}
          </div>
        </ContentContainer>
      </Container>
    </LayoutWrapper>
  );
}
