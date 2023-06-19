import styled from 'styled-components';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isBrowser = () => typeof window !== 'undefined';

export const openLink = (url: string, target: string = '_blank', options: string = 'noreferrer noopener') =>
  window.open(url, target, options);

interface IFadeGradientContainer {
  fadeHeight: number
  fadeFrom: number
  fadeTo: number
}

export const FadeGradientContainer = styled.div<IFadeGradientContainer>(
  ({ fadeHeight, fadeFrom, fadeTo }) => [`
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${fadeHeight}px;
    background: linear-gradient(to top, rgba(255, 255, 255, ${fadeFrom}) 0%, rgba(255, 255, 255, ${fadeTo}) 100%);
    `,
  ]
);

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
