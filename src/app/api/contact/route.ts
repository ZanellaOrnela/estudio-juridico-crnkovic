import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Aquí podrías integrar un proveedor de email (e.g., Resend, SendGrid, SES)
    // Por ahora devolvemos éxito simulado.
    console.log("Contacto recibido:", data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
