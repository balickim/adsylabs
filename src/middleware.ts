import { authMiddleware } from '@clerk/nextjs';

export const publicRoutes = [
  '/',
  '/api/(.*)',
  '/join-us(.*)',
  '/pre-register',
  '/faq',
  '/polityka-prywatnosci',
  '/polityka-cookies',
];

export default authMiddleware({
  publicRoutes,
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};