import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text, target } = await req.json();

    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "auto",
        target,
        format: "text",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    return NextResponse.json({
      ok: true,
      translated: data?.translatedText || text,
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, translated: text },
      { status: 200 }
    );
  }
}
