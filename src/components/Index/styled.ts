import tw from 'twin.macro';

export const Title = tw.h1`
  text-2xl lg:text-3xl xl:text-4xl text-center tracking-tight text-gray-900
`;
export const TitleLeft = tw(Title)`
  text-start
`;

export const SubTitle = tw.h2`
  text-center font-light text-textBase
`;
export const SubTitleLeft = tw(SubTitle)`
  text-base text-start
`;

