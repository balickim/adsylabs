import { getAuth, withClerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { isPublic } from 'helpers';

export default withClerkMiddleware((request: NextRequest) => {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const { userId } = getAuth(request);
  if (!userId) {
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect_url', request.url);
    return NextResponse.redirect(signInUrl);
  }
  
  return NextResponse.next();
});

export const config = { matcher:  '/((?!_next/image|_next/static|favicon.ico|api).*)' };