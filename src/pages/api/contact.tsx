import SMTP from '@/common/configs/nodemailer.config';
import type { NextApiRequest, NextApiResponse } from 'next';

const mailTo = process.env.MAIL_TO;

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const reqMethod = req.method;
  const reqBody = req.body;

  const { name, email, message } = reqBody;

  if (reqMethod !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
  }

  const mailData = {
    from: email,
    to: mailTo,
    subject: `New contact request from ${name}`,
    text: message,
    replyTo: email,
  };

  // ! Uncomment this block to send a thank you mail to the user
  // const userMailData = {
  //   from: `Games United <${mailTo}>`,
  //   to: email,
  //   subject: `Thank you for contacting Games United, ${name}!`,
  //   text: `Thank you for contacting us ${name}. We will get back to you as soon as possible.`,
  // };

  const { error: mainMailError } = await SMTP.sendMail(mailData)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

  // ! Uncomment this block to send a thank you mail to the user
  // await SMTP.sendMail(userMailData)
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });

  if (mainMailError) {
    res.status(500).json({ message: 'Something went wrong' });
  }

  res.status(200).json({ message: 'Message sent successfully' });
}

export const config = {
  runtime: 'experimental-edge',
  api: {
    responseLimit: false,
  },
};
