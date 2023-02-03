import { NextRequest, NextResponse } from "next/server";
export function middleware(res: NextRequest) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let user = res.cookies.get('username')
    const url = res.nextUrl.clone();
 
    if (!user && url.pathname=='/dashboard') {
      return  NextResponse.redirect(new URL('/login',url))
    }
    else {
        return  NextResponse.next()
    }
}

