import tw from 'twin.macro';

export const Title = tw.h1`
  text-center text-4xl font-extrabold tracking-tight text-gray-900
`;

export const SubTitle = tw.h2`
  text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl
`;

export const CtaButton = tw.button`
  mr-2 
  px-3 
  py-1.5
  h-10
  bg-primary 
  items-center 
  justify-center 
  rounded-lg 
  text-xs 
  font-medium 
  text-white 
  transition
  hover:brightness-150
  hover:-translate-y-1
  focus:outline-none 
  focus:ring-4 
`;