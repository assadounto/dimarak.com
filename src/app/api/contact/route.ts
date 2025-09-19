import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),
  role: z.string().optional(),
  region: z.string().optional(),
  timeline: z.string(),
  budget: z.string(),
  brief: z.string(),
  consent: z.boolean(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.parse(body);

    // TODO: send to your destination of choice
    // - Email (Resend, Postmark, SES)
    // - CRM (HubSpot, Pipedrive)
    // - Notion/Sheet for simple logging
    // Example (Resend):
    // const resend = new Resend(process.env.RESEND_API_KEY!)
    // await resend.emails.send({ from: 'contact@dimarak.com', to: 'hello@dimarak.com', subject: 'New inquiry', html: render(parsed) })

    console.log("[contact] inquiry", parsed);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
