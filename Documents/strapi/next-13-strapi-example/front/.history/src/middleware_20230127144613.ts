
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserFromLocalCookies } from 'lib/auth'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/', request.url))
  

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/register','/browe-movie'],
}