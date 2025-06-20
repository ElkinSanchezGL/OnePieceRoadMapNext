
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

const SESSION_MAX_AGE = 60 * 60 * 24; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username !== 'luffy' || password !== '1234') {

      return new NextResponse(
        JSON.stringify({ message: 'Credenciales inválidas' }),
        { status: 401 }
      );
    }

    const sessionToken = "simulated-jwt-token-for-luffy";

    const cookie = serialize('session-token', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: SESSION_MAX_AGE,
      path: '/',
    });

    return new NextResponse(JSON.stringify({ message: 'Login exitoso' }), {
      status: 200,
      headers: { 'Set-Cookie': cookie },
    });

  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Error en el servidor' }),
      { status: 500 }
    );
  }
}