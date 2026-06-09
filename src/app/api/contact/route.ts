import { NextRequest, NextResponse } from "next/server";

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
        sender: { name: "Web Miguel Secades", email: "miguelsecades@gmail.com" },
        to: [{ email: "miguelsecades@gmail.com", name: "Miguel Secades" }],
        replyTo: { email, name },
        subject: `[Web] ${subject}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f59e0b; border-bottom: 1px solid #333; padding-bottom: 12px;">
              Nuevo mensaje desde miguelseacades.com
            </h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <div style="margin-top: 16px; padding: 16px; background: #111; border-left: 3px solid #f59e0b;">
              <p style="white-space: pre-wrap; color: #ccc;">${message}</p>
            </div>
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
