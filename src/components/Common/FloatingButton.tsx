import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { useRect } from 'hooks/useRect';
import Link from 'next/link';
import { CtaButton } from './styled';

const Container = styled.div`
  ${tw`fixed z-50 md:hidden`}
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface IFloatingButton {
  pricingPosition: DOMRect | undefined
}

const FloatingButton = ({ pricingPosition }: IFloatingButton) => {
  const [rect, ref] = useRect<HTMLDivElement>();

  return (
    <Container ref={ref}>
      <Link href="/#pricing">
        <CtaButton
          version={'primary'}
          className={`w-52 ${rect && pricingPosition && rect.y > pricingPosition.y ? 'hidden' : null}`}
        >
          Znajdź specjalistę ➜
        </CtaButton>
      </Link>
    </Container>
  );
};

export default FloatingButton;
