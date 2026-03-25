const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// API Route
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, jobTitle, country, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });


    await transporter.sendMail({
      from: '"Sealsure Lead" <no-reply@contisofttechno.com>',
      to: "bishir@contisofttechno.com",
      subject: "New Lead Form Submission",
      html: `
       <div style="font-family: "Poppins", sans-serif; max-width: 600px; margin: auto; background-color: #f4f4f7; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <h2 style="color: #2E86DE; text-align: center;">📩 New Lead Form Submission</h2>
  
  <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: separate; border-spacing: 0; border-radius: 10px; overflow: hidden;">
    
    <tr style="background-color: #2E86DE; color: white;">
      <th style="padding: 12px; text-align: left; font-size: 16px;">Field</th>
      <th style="padding: 12px; text-align: left; font-size: 16px;">Details</th>
    </tr>

    <tr style="background-color: #EAF2F8;">
      <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">Name</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
    </tr>

    <tr style="background-color: #FDFEFE;">
      <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">Email</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">${email}</td>
    </tr>

    <tr style="background-color: #EAF2F8;">
      <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">${phone}</td>
    </tr>

    <tr style="background-color: #FDFEFE;">
      <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">Company</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">${company}</td>
    </tr>

    <tr style="background-color: #EAF2F8;">
      <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">Job Title</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">${jobTitle}</td>
    </tr>

    <tr style="background-color: #FDFEFE;">
      <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">Country</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">${country}</td>
    </tr>

    <tr style="background-color: #EAF2F8;">
      <td style="padding: 12px; font-weight: bold;">Message</td>
      <td style="padding: 12px;">${message}</td>
    </tr>
    
  </table>

 
  <p style="text-align: center; font-size: 12px; color: #7F8C8D; margin-top: 20px;">
    This email was automatically generated from your website contact form.
  </p>
  

</div>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
