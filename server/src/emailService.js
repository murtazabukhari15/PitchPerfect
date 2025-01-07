// emailSender.js
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pitchperfectcp@gmail.com', // Your Gmail address
    pass: 'gvvt kqju xbup aanl',   // Your App Password
  },
});


// Function to send an email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'pitchperfectcp@gmail.com',
    to, // Recipient email address
    subject, // Subject line
    text, // Plain text body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error while sending email:', error);
  }
};

module.exports = sendEmail;
