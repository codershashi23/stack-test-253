import transporter from "../config/mailer.js";

export const sendContactMail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.RECEIVER_MAIL, 
      subject: `New Contact Message from ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};
