import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { routing } from "@/i18n/routing";

const locales = routing.locales;
const defaultLocale = routing.defaultLocale;

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

export async function middleware(req: NextRequest) {
  const res = intlMiddleware(req);
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const pathname = req.nextUrl.pathname;

  const publicRoutes = [`/`, `/login`, `/register`];
  const isPublic = publicRoutes.some(
    (route) =>
      pathname === `/${defaultLocale}${route}` ||
      locales.some((loc) => pathname === `/${loc}${route}`)
  );

  if (isPublic) {
    return res;
  }

  const isExpired =
    !session?.expires_at || Date.now() >= session.expires_at * 1000;

  if (!session || isExpired) {
    const loginUrl = new URL(`/${defaultLocale}/login`, req.url);
    return NextResponse.redirect(loginUrl);
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
