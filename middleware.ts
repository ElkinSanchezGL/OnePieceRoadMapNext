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
    data: { user },
  } = await supabase.auth.getUser();
  const pathname = req.nextUrl.pathname;

  const publicRoutes = [`/`, `/login`, `/register`];
  const isPublic = publicRoutes.some(
    (route) =>
      pathname === `/${defaultLocale}${route}` ||
      locales.some((loc) => pathname === `/${loc}${route}`)
  );
  if (!isPublic && !user) {
    const loginUrl = new URL(`/${defaultLocale}/login`, req.url);
    return NextResponse.redirect(loginUrl);
  }

  return res;
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
