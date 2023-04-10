import { IMAGES } from 'constants/index';

export const publicPaths = [
  '/',
  '/sign-in*',
  '/sign-up*',
  `/static/${IMAGES.LOGO}`,
  `/static/${IMAGES.ROB_KATARZYNA}`,
];

export const isPublic = (path: string) => {
  return publicPaths.find(x =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  );
};