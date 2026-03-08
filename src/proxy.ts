import { NextRequest, NextResponse } from "next/server";

/**
 * Force /builds/<id> to hit the Next.js app route instead of
 * serving public/builds/<id>/index.html as a static file.
 *
 * Rewrites to /builds/<id>?_page=1 which doesn't match any static
 * file, so Next.js falls through to the dynamic [id] route.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (!url.searchParams.has("_page")) {
    url.searchParams.set("_page", "1");
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/builds/:id",
};
