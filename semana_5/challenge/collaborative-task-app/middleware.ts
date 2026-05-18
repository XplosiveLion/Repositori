import {
  NextRequest,
  NextResponse,
} from "next/server";

export function middleware(
  request: NextRequest
) {
  const token =
    request.cookies.get("token");

  const role =
    request.cookies.get("user-role")
      ?.value;

  const pathname =
    request.nextUrl.pathname;

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register";

  if (!token && !isAuthPage) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    );
  }

  if (
    token &&
    isAuthPage
  ) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  if (
    pathname ===
      "/provider/create" &&
    role === "viewer"
  ) {
    return NextResponse.redirect(
      new URL(
        "/?error=viewer",
        request.url
      )
    );
  }

  const response =
    NextResponse.next();

  response.headers.set(
    "x-app-version",
    "1.0.0"
  );

  return response;
}

export const config = {
  matcher: [
    "/",
    "/provider/:path*",
    "/products/:path*",
    "/profile/:path*",
    "/login",
    "/register",
  ],
};