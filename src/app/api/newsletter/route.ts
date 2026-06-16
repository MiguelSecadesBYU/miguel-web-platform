import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/contacts";
const LIST_ID = 2;

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "El nombre y el email son obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY no está configurada.");
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          NOMBRE: name, // Variable usada en la plantilla de bienvenida de Brevo
        },
        listIds: [LIST_ID],
        updateEnabled: true,
      }),
    });

    if (response.status === 201 || response.status === 204) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const errorData = await response.json();
    console.error("Error de Brevo:", errorData);

    if (errorData.code === "duplicate_parameter") {
      return NextResponse.json(
        { error: "Este email ya está suscrito." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "No se pudo completar la suscripción. Inténtalo de nuevo." },
      { status: response.status }
    );
  } catch (err) {
    console.error("Error en API newsletter:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}