import { request } from "http";
import { getUserFromLocalCookies } from "lib/auth";
import { NextRequest, NextResponse } from "next/server";

export function middleware(res: NextRequest) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let user = getUserFromLocalCookies();
    let url = res.nextUrl.clone();
    if (user) {
        url.pathname = '/'
        NextResponse.rewrite(url)
    }
    else {
        url.pathname= '/register'

        NextResponse.rewrite(url)
    }

    
}