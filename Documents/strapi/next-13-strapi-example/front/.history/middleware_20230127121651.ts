import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserFromLocalCookies } from 'lib/auth'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    let user = getUserFromLocalCookies();
    if(user){
        return NextResponse.redirect(new URL('/', request.url))
    }
    else{
        return NextResponse.redirect(new URL('/register', request.url))
    }
    console.log('auth', user);
    
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/register'],
}