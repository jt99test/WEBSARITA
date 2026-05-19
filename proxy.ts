import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/locales";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const [, segment] = pathname.split("/");
  const requestHeaders = new Headers(request.headers);

  if (isLocale(segment)) {
    requestHeaders.set("x-saritashakti-locale", segment);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
