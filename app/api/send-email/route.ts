import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST( req: Request) {
  const { to, subject, body } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "moxxxl290@gmail.com",
      pass: "dytp mtrl ildc ddsl"
    }
  });

  await transporter.sendMail({
    from: "moxxxl290@gmail.com",
    to,
    subject,
    text: body
  });

  return NextResponse.json({ success: true });
}