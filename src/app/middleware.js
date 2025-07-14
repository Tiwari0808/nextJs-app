import { NextResponse } from 'next/server';
import { verifyToken } from '@/app/lib/auth';

export async function middleware(req) {
  const token = req.cookies.get('token');
  const url = req.nextUrl;

  // Allow public access only to login page
  if (url.pathname === '/login') {
    return NextResponse.next();
  }

  // If token is present, verify it
  if (token) {
    try {
      await verifyToken(token.value);
      return NextResponse.next(); // Token valid
    } catch (err) {
      console.error("Invalid token", err);
    }
  }

  // If no valid token, redirect to login
  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: ['/', '/products/:path*'], // Protect both home and products
};
