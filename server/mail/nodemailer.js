
const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'abiliyok@gmail.com',
    pass: 'tiesan123'
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const mailOptions = (to, subject, text) => ({
  from: '"Post It" <noreply@postit.com',
  to,
  subject,
  text,
})
;
