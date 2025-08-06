import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Save contact message to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message: `${subject}\n\n${message}`,
      },
    });

    // TODO: Send email notification
    // You can integrate with services like SendGrid, Resend, or Nodemailer
    // For now, we'll just save to database

    return NextResponse.json(
      { 
        message: "Message sent successfully",
        contact: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          createdAt: contact.createdAt
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
} 