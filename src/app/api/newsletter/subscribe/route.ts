import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;
  const url = `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`;
  const API_KEY = process.env.BEEHIIV_API_KEY;

  const { email, language } = await request.json();

  try {
    const beehiivData = {
      email: email,
      send_welcome_email: true,
      custom_fields: [{ name: 'language', value: language }],
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(beehiivData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error while subscribing newsletter', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
