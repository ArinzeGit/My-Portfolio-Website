import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  try {
    // Send message to you
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.MY_EMAIL!,
      subject: subject || `Portfolio message from ${name}`,
      replyTo: email,
      text: `You received a new message via your portfolio from ${name} (${email}):\n\n${message}`,
    });

    // Send auto-reply to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      text: `Hi ${name},\n\nThank you for contacting me! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nDennings Owoh`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ success: false, error });
  }
}
