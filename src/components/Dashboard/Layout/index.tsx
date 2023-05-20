import React from 'react';
import tw from 'twin.macro';

import Navbar from 'components/Dashboard/Layout/navbar';
import Sidebar from 'components/Dashboard/Layout/sidebar';
import { twConfig } from 'utils/helpers/tailwind';
import styled from 'styled-components';
import useWindowDimension from 'utils/hooks/useWindowDimension';

const LayoutWrapper = tw.div`flex h-screen`;
const Container = tw.section`flex flex-1 overflow-hidden`;
const ChildrenContainer = tw.div`pt-5 mx-auto mb-auto z-0`;

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
      ? tw`md:ml-72`
      : tw`ml-0`,
  ]
);

interface IDashboardLayout {
  children: React.ReactNode;
}

export default function DashboardLayout ({ children }: IDashboardLayout) {
  const [open, setOpen] = React.useState(true);
  const { width } = useWindowDimension();

  React.useEffect(() => {
    // @ts-ignore
    width < twConfig.theme.screens.xl.slice(0, -2)
      ? setOpen(false)
      : setOpen(true);
  }, [width]);

  return (
    <LayoutWrapper>
      <Container>
        <Sidebar open={open} setOpen={setOpen} />
        <ContentContainer open={open}>
          <Navbar />
          <ChildrenContainer>
            {children}
          </ChildrenContainer>
        </ContentContainer>
      </Container>
    </LayoutWrapper>
  );
}
