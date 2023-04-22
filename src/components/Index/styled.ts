import tw from 'twin.macro';
import styled from 'styled-components';

export const Title = tw.h1`
  text-center text-2xl lg:text-3xl xl:text-5xl tracking-tight text-gray-900
`;
export const TitleLeft = tw.h1`
  text-2xl lg:text-3xl xl:text-5xl tracking-tight text-gray-900
`;

export const SubTitle = tw.h2`
  text-center font-light text-gray-500 sm:text-xl
`;
export const SubTitleLeftShadow = styled.h3`
  ${tw`text-sm text-gray-500`}
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
`;

