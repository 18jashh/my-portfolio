require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// POST /send endpoint
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  // Debug: Print env vars to ensure they are loaded
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '***' : 'NOT SET');

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
    },
  });

  // Verify transporter connection and log errors
  transporter.verify(function(error, success) {
    if (error) {
      console.error('Nodemailer verify error:', error);
    } else {
      console.log('Nodemailer is ready to send messages');
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER, // Send to your own Gmail
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send message to your Gmail
    await transporter.sendMail(mailOptions);

    // Auto-responder mail options
    const autoReplyOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thanks for contacting me',
      text: `Hi ${name}, thanks for reaching out! I’ll get back to you soon.`
    };

    // Send auto-reply to user
    await transporter.sendMail(autoReplyOptions);

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message.', details: error && error.toString ? error.toString() : error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
