import tw from 'twin.macro';
import styled from 'styled-components';

export const Main = tw.main`
  min-h-screen
  md:px-20
  lg:px-52
  px-4
  py-8
  flex
  flex-col
  gap-32
`;

export const Title = tw.h1`
  text-center text-5xl tracking-tight text-gray-900
`;
export const TitleLeft = tw.h1`
  text-5xl tracking-tight text-gray-900
`;

export const SubTitle = tw.h2`
  text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl
`;
export const SubTitleLeftShadow = styled.h3`
  ${tw`text-sm font-bold`}
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.2);
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin-top: 5rem;
`;