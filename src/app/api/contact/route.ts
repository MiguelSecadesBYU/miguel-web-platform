import { NextRequest, NextResponse } from "next/server";

const AUTHOR_EMAIL = "contacto.miguelsecades@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Web Miguel Secades", email: AUTHOR_EMAIL },
        to: [{ email: AUTHOR_EMAIL, name: "Miguel Secades García" }],
        replyTo: { email, name },
        subject: `[Web] ${subject} — ${name}`,
        htmlContent: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ccc; padding: 32px;">
            <div style="border-bottom: 1px solid #333; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #f59e0b; font-weight: 300; font-size: 22px; margin: 0;">
                Nuevo mensaje desde miguelseacades.com
              </h2>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 100px; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Nombre</td>
                <td style="padding: 8px 0; color: #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Motivo</td>
                <td style="padding: 8px 0; color: #eee;">${subject}</td>
              </tr>
            </table>
            <div style="border-left: 3px solid #f59e0b; padding: 16px 20px; background: #111;">
              <p style="white-space: pre-wrap; color: #bbb; line-height: 1.7; margin: 0;">${message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 11px; color: #444;">
              Responde directamente a este email para contactar con ${name}.
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Error Brevo contacto:", err);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error API contacto:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}