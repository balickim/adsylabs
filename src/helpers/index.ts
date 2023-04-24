export const publicPaths = [
  '/',
  '/sign-in*',
  '/sign-up*',
  '/join-us',
];

export const isPublic = (path: string) => {
  return publicPaths.find(x =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  );
};

export const isBrowser = () => typeof window !== 'undefined';

export const openLink = (url: string, target: string = '_blank', options: string = 'noreferrer noopener') =>
  window.open(url, target, options);