import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookies = request.cookies.get("isAuth");
  const isLoggedIn = authCookies?.value === "true";

  const path = request.nextUrl.pathname;

  if (isLoggedIn) {
    if (path === "/login" || path === "/signup") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (path !== "/login" && path !== "/signup") {
      return NextResponse.redirect(new URL("/signup", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/images|favicon.ico).*)"],
};
