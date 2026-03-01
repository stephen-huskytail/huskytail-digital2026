import { NextResponse } from "next/server";

const CLOSE_API_KEY = process.env.CLOSE_API_KEY || "";
const CLOSE_API_URL = "https://api.close.com/api/v1";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, business, website, city, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Create a Lead in Close CRM
    const leadPayload = {
      name: business || name,
      url: website || undefined,
      addresses: city
        ? [{ city, country: "US", label: "office" }]
        : undefined,
      contacts: [
        {
          name,
          emails: [{ email, type: "office" }],
          phones: phone ? [{ phone, type: "office" }] : undefined,
        },
      ],
      custom: {
        "Website URL": website || "",
        "City": city || "",
        "SEO Challenge": message || "",
        "Source": "HuskyTail Digital — Paw-sultation Form",
      },
    };

    const closeResponse = await fetch(`${CLOSE_API_URL}/lead/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${CLOSE_API_KEY}:`).toString("base64")}`,
      },
      body: JSON.stringify(leadPayload),
    });

    if (!closeResponse.ok) {
      const errorText = await closeResponse.text();
      console.error("Close CRM error:", errorText);
      // Still return success to user — don't expose CRM errors
    }

    const closeData = closeResponse.ok ? await closeResponse.json() : null;

    // Create an Activity (note) on the lead
    if (closeData?.id) {
      await fetch(`${CLOSE_API_URL}/activity/note/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`${CLOSE_API_KEY}:`).toString("base64")}`,
        },
        body: JSON.stringify({
          lead_id: closeData.id,
          note: `New Paw-sultation Request\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nBusiness: ${business || "Not provided"}\nWebsite: ${website || "Not provided"}\nCity: ${city || "Not provided"}\n\nChallenge: ${message || "Not provided"}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
