import { NextResponse } from 'next/server';

export async function GET() {

  try {
    const response = await fetch('/api/gen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();

    return NextResponse.json({ cronTriggered: true, genResponse: data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to trigger gen', details: error }, { status: 500 });
  }
}
