export const publicPaths = [
  '/',
  '/sign-in*',
  '/sign-up*',
];

export const isPublic = (path: string) => {
  return publicPaths.find(x =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  );
};

export const isBrowser = () => typeof window !== 'undefined';