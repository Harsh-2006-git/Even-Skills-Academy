import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper to generate Submitter Welcome Email HTML
export function getWelcomeEmailHtml(name: string, email: string, organization: string, message: string) {
  const formattedMessage = message.replace(/\n/g, "<br>");
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Partnering with Even Academy</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f7f5fa;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f7f5fa;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(107, 70, 193, 0.05);
      border: 1px solid #eaddff;
    }
    .header {
      background-color: #F3E8FF;
      padding: 35px 30px;
      text-align: center;
      border-bottom: 1px solid #eaddff;
    }
    .logo-container {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 900;
      line-height: 0.95;
      letter-spacing: -1.5px;
      margin-bottom: 8px;
    }
    .logo-even {
      font-size: 32px;
      display: block;
    }
    .logo-skills {
      font-size: 32px;
      display: block;
      color: #A64AED;
    }
    .purple-text {
      color: #A64AED;
    }
    .black-text {
      color: #1A1A1A;
    }
    .tagline {
      margin: 8px 0 0 0;
      font-size: 13px;
      color: #554477;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .content {
      padding: 40px 30px;
    }
    .welcome-text {
      font-size: 16px;
      line-height: 1.6;
      color: #333333;
      margin-bottom: 25px;
    }
    .info-card {
      background-color: #faf8ff;
      border: 1px solid #eaddff;
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .info-row {
      margin-bottom: 12px;
      border-bottom: 1px solid #f0e6ff;
      padding-bottom: 8px;
    }
    .info-row-last {
      margin-bottom: 0;
    }
    .card-label {
      font-size: 10px;
      font-weight: 700;
      color: #6B7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .card-value {
      font-size: 15px;
      color: #1a1a1a;
      margin-top: 4px;
      font-weight: 500;
    }
    .message-text {
      font-size: 14px;
      line-height: 1.5;
      color: #333333;
      font-style: italic;
      margin-top: 6px;
      background-color: #ffffff;
      border-left: 3px solid #A64AED;
      padding: 10px 12px;
      border-radius: 8px;
      word-break: break-word;
    }
    .mission-box {
      border: 1.5px dashed #b794f4;
      border-radius: 14px;
      padding: 16px;
      background-color: #faf8ff;
      margin-bottom: 20px;
    }
    .footer {
      background-color: #2E1065;
      color: #ffffff;
      padding: 30px;
      text-align: center;
      font-size: 12px;
    }
    .footer a {
      color: #D8B4FE;
      text-decoration: none;
      font-weight: bold;
    }
    .footer p {
      margin: 5px 0;
      opacity: 0.8;
    }
    .contact-info {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #4A2391;
    }

    /* Mobile Responsiveness styling */
    @media only screen and (max-width: 600px) {
      .wrapper {
        padding: 15px 10px !important;
      }
      .container {
        border-radius: 16px !important;
      }
      .header {
        padding: 25px 15px !important;
      }
      .logo-even {
        font-size: 26px !important;
      }
      .logo-skills {
        font-size: 26px !important;
      }
      .tagline {
        font-size: 11px !important;
      }
      .content {
        padding: 25px 15px !important;
      }
      .welcome-text {
        font-size: 14px !important;
        margin-bottom: 16px !important;
      }
      .info-card {
        padding: 15px !important;
        border-radius: 12px !important;
        margin-bottom: 16px !important;
      }
      .card-value {
        font-size: 14px !important;
      }
      .message-text {
        font-size: 13px !important;
        padding: 8px 10px !important;
      }
      .mission-box {
        padding: 12px !important;
        border-radius: 10px !important;
        margin-bottom: 16px !important;
      }
      .footer {
        padding: 25px 15px !important;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="logo-container">
          <span class="logo-even"><span class="purple-text">Eve</span><span class="black-text">n</span></span>
          <span class="logo-skills">Skills Academy</span>
        </div>
        <p class="tagline">Empowering Women, Enabling Careers</p>
      </div>
      <div class="content">
        <p class="welcome-text">
          Dear ${name},<br><br>
          Thank you for reaching out to <strong>Even Academy</strong>. We are thrilled about your interest in collaborating to help women from resource-poor communities build confidence and strong careers.
        </p>
        
        <div class="info-card">
          <div class="info-row">
            <div class="card-label">Full Name</div>
            <div class="card-value">${name}</div>
          </div>
          <div class="info-row">
            <div class="card-label">Organization</div>
            <div class="card-value">${organization}</div>
          </div>
          <div class="info-row">
            <div class="card-label">Email Address</div>
            <div class="card-value" style="color: #6b46c1; font-weight: bold;">${email}</div>
          </div>
          <div class="info-row-last">
            <div class="card-label">Partnership Interest & Message</div>
            <div class="message-text">${formattedMessage}</div>
          </div>
        </div>

        <div class="mission-box">
          <p style="margin: 0; font-size: 13px; line-height: 1.4; color: #554477; font-weight: 500;">
            <strong>Our Core Programs:</strong> We train women across sectors like EV, Mobility, Green Energy, and Logistics, ensuring they are job-ready and confident.
          </p>
        </div>

        <p class="welcome-text">
          Our team will review your request and get back to you within 1-2 business days to discuss how we can collaborate.
        </p>
      </div>
      <div class="footer">
        <p><strong>Even Academy</strong> &copy; 2026. All rights reserved.</p>
        <p>Empowering women from resource-poor communities with future-ready skills.</p>
        <div class="contact-info">
          <p>Email: <a href="mailto:evenacademy.ea@gmail.com">evenacademy.ea@gmail.com</a> | Phone: <a href="tel:+919667167448">+91 96671 67448</a></p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

// Helper to generate Admin Alert Email HTML
export function getAdminEmailHtml(name: string, email: string, organization: string, message: string) {
  const formattedMessage = message.replace(/\n/g, "<br>");
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Partnership Form Submission</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f7f5fa;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
    }
    .wrapper {
      width: 100%;
      background-color: #f7f5fa;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #eaddff;
      box-shadow: 0 4px 20px rgba(107, 70, 193, 0.05);
    }
    .header {
      background-color: #F3E8FF;
      padding: 30px;
      text-align: center;
      border-bottom: 1px solid #eaddff;
    }
    .logo-container {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 900;
      line-height: 0.95;
      letter-spacing: -1.2px;
      margin-bottom: 12px;
    }
    .logo-even {
      font-size: 26px;
      display: block;
    }
    .logo-skills {
      font-size: 26px;
      display: block;
      color: #A64AED;
    }
    .purple-text {
      color: #A64AED;
    }
    .black-text {
      color: #1A1A1A;
    }
    .badge {
      display: inline-block;
      background-color: #eaddff;
      color: #6b46c1;
      font-size: 11px;
      font-weight: 700;
      padding: 6px 16px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 30px;
    }
    .info-card {
      background-color: #faf8ff;
      border: 1px solid #eaddff;
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .info-row {
      margin-bottom: 12px;
      border-bottom: 1px solid #f0e6ff;
      padding-bottom: 8px;
    }
    .info-row-last {
      margin-bottom: 0;
    }
    .card-label {
      font-size: 10px;
      font-weight: 700;
      color: #6B7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .card-value {
      font-size: 15px;
      color: #1a1a1a;
      margin-top: 4px;
      font-weight: 500;
    }
    .message-text {
      font-size: 14px;
      line-height: 1.5;
      color: #333333;
      font-style: italic;
      margin-top: 6px;
      background-color: #ffffff;
      border-left: 3px solid #A64AED;
      padding: 10px 12px;
      border-radius: 8px;
      word-break: break-word;
    }
    .footer {
      background-color: #2E1065;
      color: #ffffff;
      padding: 20px;
      text-align: center;
      font-size: 12px;
    }
    .footer a {
      color: #D8B4FE;
      text-decoration: none;
      font-weight: bold;
    }
    .footer p {
      margin: 5px 0;
      opacity: 0.8;
    }

    /* Mobile Responsiveness styling */
    @media only screen and (max-width: 600px) {
      .wrapper {
        padding: 15px 10px !important;
      }
      .container {
        border-radius: 16px !important;
      }
      .header {
        padding: 25px 15px !important;
      }
      .logo-even {
        font-size: 22px !important;
      }
      .logo-skills {
        font-size: 22px !important;
      }
      .badge {
        font-size: 10px !important;
        padding: 4px 12px !important;
      }
      .content {
        padding: 25px 15px !important;
      }
      .info-card {
        padding: 15px !important;
        border-radius: 12px !important;
      }
      .card-value {
        font-size: 14px !important;
      }
      .message-text {
        font-size: 13px !important;
        padding: 8px 10px !important;
      }
      .footer {
        padding: 20px 15px !important;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="logo-container">
          <span class="logo-even"><span class="purple-text">Eve</span><span class="black-text">n</span></span>
          <span class="logo-skills">Skills Academy</span>
        </div>
        <div class="badge">New Collaboration Submission</div>
      </div>
      <div class="content">
        <p style="font-size: 15px; margin-bottom: 20px; color: #333333;">A new partnership request has been submitted with the following details:</p>
        
        <div class="info-card">
          <div class="info-row">
            <div class="card-label">Full Name</div>
            <div class="card-value">${name}</div>
          </div>
          <div class="info-row">
            <div class="card-label">Organization</div>
            <div class="card-value">${organization}</div>
          </div>
          <div class="info-row">
            <div class="card-label">Email Address</div>
            <div class="card-value"><a href="mailto:${email}" style="color: #6b46c1; font-weight: bold; text-decoration: underline;">${email}</a></div>
          </div>
          <div class="info-row-last">
            <div class="card-label">Message / Proposal</div>
            <div class="message-text">${formattedMessage}</div>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>This is an automated notification from the Even Academy website system.</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const { name, email, organization, message } = await request.json();

    // Field validation
    if (!name || !email || !organization || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP credentials in .env.local");
      return NextResponse.json(
        { error: "Server mail configuration is missing." },
        { status: 500 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const userEmailHtml = getWelcomeEmailHtml(name, email, organization, message);
    const adminEmailHtml = getAdminEmailHtml(name, email, organization, message);

    // Mail configurations
    const userMailOptions = {
      from: `"Even Academy" <${smtpUser}>`,
      to: email,
      subject: "Thank you for partnering with Even Academy!",
      html: userEmailHtml,
    };

    const adminMailOptions = {
      from: `"Even Academy Website" <${smtpUser}>`,
      to: smtpUser,
      replyTo: email,
      subject: `New Collaboration Request: ${organization}`,
      html: adminEmailHtml,
    };

    // Send emails in parallel
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Nodemailer API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email notifications." },
      { status: 500 }
    );
  }
}

// GET request handler for template preview in the browser
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const template = searchParams.get("template") || "user";

    const mockData = {
      name: "Aaradhya Sharma",
      email: "aaradhya@example.com",
      organization: "Innovate India Foundation",
      message: "We would love to partner with Even Academy to provide EV training support for women in local communities. Looking forward to connecting and discussing this collaboration further!",
    };

    if (template === "admin") {
      const html = getAdminEmailHtml(
        mockData.name,
        mockData.email,
        mockData.organization,
        mockData.message
      );
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // Default to user/welcome template
    const html = getWelcomeEmailHtml(
      mockData.name,
      mockData.email,
      mockData.organization,
      mockData.message
    );
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
