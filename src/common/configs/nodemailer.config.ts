import nodemailer from 'nodemailer';

const mailUserName = process.env.MAIL_USER_NAME;
const mailPassword = process.env.MAIL_USER_PWD;

const getSMTPCredentials = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    service: 'gmail',
    auth: {
      user: mailUserName,
      pass: mailPassword,
    },
  }) as nodemailer.Transporter;
};

const SMTP = getSMTPCredentials();

export default SMTP;
