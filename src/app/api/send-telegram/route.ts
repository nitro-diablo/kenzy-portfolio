import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram is not configured" },
      { status: 500 }
    );
  }

  let body: { name?: string; brand?: string; email?: string; whatsapp?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, brand, email, whatsapp } = body;
  if (!name || !brand || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const text = [
    "🚀 New Strategy Session Booking!",
    "",
    `👤 Name: ${name}`,
    `🏷 Brand: ${brand}`,
    `📧 Email: ${email}`,
    `📱 WhatsApp: ${whatsapp || "—"}`,
  ].join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
