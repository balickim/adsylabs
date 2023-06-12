import { authMiddleware } from '@clerk/nextjs';

export const publicRoutes = [
  '/',
  '/api/(.*)',
  '/join-us(.*)',
  '/pre-register',
  '/faq',
  '/polityka-prywatnosci',
  '/polityka-cookies',
  '/regulamin',
];

export default authMiddleware({
  publicRoutes,
  // afterAuth (auth, req, ctx) {
  //   if (req.nextUrl.pathname.includes('dashboard')) {
  //     const user = await currentUser();
  //     prisma.profile.findFirst({
  //       select: { role: true },
  //       where: { clerk_user_id: user?.id },
  //     });
  //   }
  // },
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};