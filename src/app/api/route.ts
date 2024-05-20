import { NextResponse } from "next/server";

// ================================================
//    THIS ENDPOINT IS TO GET THE DATA ARRAY OF
//    THE CONTENT FEED, USING BASE URL OF .ENV
// ================================================

export async function GET() {
  const baseUrl = process.env.BASE_API_URL;

  try {
    const resp = await fetch(`${baseUrl}/content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Prefer: "code=200, dynamic=true",
      },
    });

    const data = await resp.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}
