import tw from 'twin.macro';
import styled from 'styled-components';

export const Title = tw.h1`
  text-center text-2xl lg:text-3xl xl:text-4xl tracking-tight text-gray-900
`;
export const TitleLeft = tw.h1`
  text-2xl lg:text-3xl xl:text-4xl tracking-tight text-gray-900
`;

export const SubTitle = tw.h2`
  text-center font-light text-gray-500 sm:text-xl
`;
export const SubTitleLeft = styled.h3`
  ${tw`text-sm text-gray-500`}
`;

