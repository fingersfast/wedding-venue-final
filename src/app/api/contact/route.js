import { Resend } from "resend";

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

    // Log that we're about to send email and check API key
    console.log("Attempting to send email with Resend...");
    console.log("API Key exists:", !!process.env.RESEND_API_KEY);

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev", // Using Resend's default sending domain
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
      });
      console.log("Email sent successfully:", data);
    } catch (emailError) {
      console.error("Resend API Error:", emailError);
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

// NOTE: Ensure RESEND_API_KEY is set in your environment for this to work.
