import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, venue, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log that we're about to send email
    console.log("Attempting to send email with Gmail SMTP...");
    console.log(
      "Gmail credentials exist:",
      !!process.env.GMAIL_USER && !!process.env.GMAIL_APP_PASSWORD
    );

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "Himanshu.yengal@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Venue:</strong> ${venue || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      throw emailError;
    }

    // Option 2: Store in a database
    // TODO: Add database integration if needed

    // Option 3: Send to a webhook (Zapier, Make.com, etc.)
    // TODO: Add webhook integration if needed

    return Response.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}

// NOTE: Add these to your .env file:
// GMAIL_USER=your-email@gmail.com
// GMAIL_APP_PASSWORD=your-gmail-app-password
