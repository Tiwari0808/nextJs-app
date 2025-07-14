import { signIn } from '@/app/lib/auth';
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();
    
    if (email !== 'abc@gmail.com' || password !== '111111') {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = await signIn({ email, role: 'user' });

    const response = NextResponse.json(
      { message: 'Login successful' },
      { status: 200 }
    );

    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      maxAge: 60 * 60,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
};
