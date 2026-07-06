import { NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "truongsonqk3@gmail.com";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  const name = typeof data?.name === "string" ? data.name.trim() : "";
  const phone = typeof data?.phone === "string" ? data.phone.trim() : "";
  if (!name || !phone) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot filled → bot. Pretend success, send nothing.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const company = typeof data.company === "string" ? data.company.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `[DXFlow] Khách liên hệ tư vấn: ${name}`,
      _template: "table",
      "Họ tên": name,
      "Số điện thoại": phone,
      "Doanh nghiệp": company || "(không điền)",
      "Nhu cầu": message || "(không điền)",
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
