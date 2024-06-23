import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const adminOnlyPathRegexs = [new RegExp(`^/user$`), new RegExp(`^/user/.*$`)];

export default withAuth(function middleware(req: NextRequestWithAuth) {
  const { pathname } = req.nextUrl;
  if (
    req.nextauth.token?.authority === "2" &&
    adminOnlyPathRegexs.some((regex) => regex.test(pathname))
  ) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }
});

export const config = {
  matcher: ["/((?!login).*)"],
};
