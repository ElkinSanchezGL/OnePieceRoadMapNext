import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

const locales = routing.locales;
const defaultLocale = routing.defaultLocale;
const publicPaths = ['/login', '/register'];

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get('session-token')?.value;


  const intlResponse = intlMiddleware(request);
  if (intlResponse) return intlResponse;

  const missingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if (missingLocale) {
    return redirectTo(`/${defaultLocale}${pathname}`, request);
  }

  const currentLocale = pathname.split('/')[1] || defaultLocale;

  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
  const isPublic = publicPaths.some((p) => pathWithoutLocale.startsWith(p));

  if (sessionToken && isPublic) {
    return redirectTo(`/${currentLocale}/`, request);
  }

  if (!sessionToken && !isPublic) {
    return redirectTo(`/${currentLocale}/login`, request);
  }

  return NextResponse.next();
}

function redirectTo(path: string, request: NextRequest) {
  return NextResponse.redirect(new URL(path, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
