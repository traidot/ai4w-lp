import { NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

export async function POST(request: Request) {
  if (!CONTACT_EMAIL) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

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

  // FormSubmit rejects server-side calls without a Referer/Origin, so pass the site's own.
  const origin = request.headers.get("origin") ?? new URL(request.url).origin;

  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Referer: `${origin}/`,
      Origin: origin,
    },
    body: JSON.stringify({
      _subject: `[DXBiz] Khách liên hệ tư vấn: ${name}`,
      _template: "table",
      _captcha: "false",
      "Họ tên": name,
      "Số điện thoại": phone,
      "Doanh nghiệp": company || "(không điền)",
      "Nhu cầu": message || "(không điền)",
    }),
  });

  const result = await res.json().catch(() => null);
  const ok = res.ok && String(result?.success) === "true";
  if (!ok) {
    console.error("FormSubmit failed", res.status, result);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
