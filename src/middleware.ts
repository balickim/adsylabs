import { authMiddleware } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export const publicRoutes = [
  '/',
  '/api/(.*)',
  '/join-us(.*)',
  '/pre-register',
  '/faq',
  '/thank-you',
  '/polityka-prywatnosci',
  '/polityka-cookies',
  '/regulamin',
];

export default authMiddleware({
  publicRoutes,
  afterAuth (auth, req) {
    if (req.nextUrl.pathname.includes('admin-panel')) {
      const home = new URL('/', req.url);
      if (!auth.userId) return NextResponse.rewrite(home);

      return clerkClient.users.getUser(auth.userId)
        .then((user) => {
          if (!user) return NextResponse.rewrite(home);
          if (user.publicMetadata.role !== 'admin') return NextResponse.redirect(home);
        })
        .catch(() => NextResponse.rewrite(home));
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};