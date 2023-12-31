import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // console.log("Request body:", body); // Log the received body
    const { content } = body;

    const apiResponse = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "tts-1", // or "tts-1-hd" for higher quality
        input: content,
        voice: "alloy" // choose the voice from available options
      }),
    });

    // console.log("API response status:", apiResponse.status); // Log the status of the API response

    if (!apiResponse.ok) {
      // console.error("API response error:", await apiResponse.text()); // Log the error response from the API
      throw new Error('Failed to convert text to speech');
    }

    const data = await apiResponse.arrayBuffer();
const audioContent = Buffer.from(data).toString('base64');
return NextResponse.json({ audioContent });

  } catch (error) {
    console.error("Server-side error:", error); // Log the server-side error
    return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 });
  }
}
