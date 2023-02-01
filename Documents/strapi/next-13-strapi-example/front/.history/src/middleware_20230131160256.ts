import { request } from "http";
import { getUserFromLocalCookies } from "lib/auth";
import { NextRequest, NextResponse } from "next/server";

export function middleware(res: NextRequest) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let user = getUserFromLocalCookies();
    const url = res.nextUrl.clone();
    // url.pathname = '/register';
    console.log('url.pathname = ' + url.pathname);
    if (!user && url.pathname=='/dash') {
      return  NextResponse.redirect(new URL('/register',url))
    }
    else {
        return  NextResponse.next()
    }
}