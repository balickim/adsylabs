import tw from 'twin.macro';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';
import { InputHTMLAttributes } from 'react';
import { Field } from 'formik';

export const BasicTitle = tw.h1`text-2xl lg:text-3xl xl:text-4xl tracking-tight text-gray-900`;

interface ICtaButton {
  version: 'primary' | 'secondary'
}

export const CtaButton = styled.button<ICtaButton>(
  ({ version }) => [
    tw`p-3 text-center transition rounded-3xl hover:-translate-y-1 focus:outline-none focus:ring-4`,
    version === 'primary'
      ? tw`text-white bg-primary hover:brightness-150`
      : tw`text-black bg-white border`,
  ]
);

export const StyledFaSpinner = tw(FaSpinner)`animate-spin`;

interface ILoadingCtaButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean
  version: ICtaButton['version']
  children: React.ReactNode;
}
export const LoadingCtaButton = ({ isLoading, version, children, ...props }: ILoadingCtaButton) => {
  return <CtaButton disabled={isLoading} version={version} {...props}>
    <span className={'flex items-center gap-2'}>
      {isLoading ? <StyledFaSpinner className={'align-bottom'} size={24}  /> : null}
      {children}
    </span>
  </CtaButton>;
};


export const VideoContainer = styled('div')`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

export const StyledVideo = styled('video')`
  overflow: hidden;
  border: 0;
  align-self: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Number = tw.p`flex items-center justify-center text-2xl rounded-full bg-primary w-8 h-8 text-white`;

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClasses?: string;
  inputClasses?: string;
  error?: any;
}

export const Input = ({ label, labelClasses, inputClasses, error, ...rest }: IInput) => {
  return <div>
    <label
      htmlFor="input"
      className={`block mb-2 text-sm font-medium sm:text-base ${labelClasses}`}
    >
      {label}
    </label>
    <input
      type="text"
      id={'input'}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 ${inputClasses}
                    ${error && 'border-2 border-red-600'}
                  `}
      {...rest}
    />
    <p className={'text-red-600 font-bold text-xs'}>
      {error}
    </p>
  </div>;
};

export const Textarea = ({ label, labelClasses, error, ...rest }: IInput) => {
  return <div>
    <label
      htmlFor="input"
      className={`block mb-2 text-sm font-medium sm:text-base ${labelClasses}`}
    >
      {label}
    </label>
    <Field
      id={'input'}
      as={'textarea'}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 
                    ${error && 'border-2 border-red-600'}
                  `}
      {...rest}
    />
    <p className={'text-red-600 font-bold text-xs'}>
      {error}
    </p>
  </div>;
};