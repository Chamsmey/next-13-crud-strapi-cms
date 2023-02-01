import { request } from "http";
import { getUserFromLocalCookies } from "lib/auth";
import { NextRequest, NextResponse } from "next/server";

export function middleware(res: NextRequest) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let user = getUserFromLocalCookies();
    const url = res.nextUrl.clone();
    url.
  
    if (!user) {
       
        NextResponse.redirect('/register')
    }
    else {
    
        NextResponse.next()
    }

    
}