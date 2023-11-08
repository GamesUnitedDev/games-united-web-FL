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

  const { name, email, resume } = reqBody;

  if (reqMethod !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
  }

  const contentBuffer = Buffer.from(resume.data, 'base64');

  const mailData = {
    from: email,
    to: mailTo,
    subject: `New career application from ${name}`,
    text: `

Name    : ${name}
Email   : ${email}
Resume  : ${resume.name}

      `,
    replyTo: email,
    attachments: [
      {
        filename: resume.name,
        content: contentBuffer,
      },
    ],
  };

  const userMailData = {
    from: `Games United <${mailTo}>`,
    to: email,
    subject: `Thank you for applying to Games United, ${name}!`,
    text: `Thank you for applying to Games United, ${name}! We will get back to you as soon as possible.`,
  };

  const { error: mainMailError } = await SMTP.sendMail(mailData)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

  await SMTP.sendMail(userMailData)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

  if (mainMailError) {
    res.status(500).json({ message: 'Something went wrong' });
  }

  res.status(200).json({ message: 'Message sent successfully' });
}

export const config = {
  api: {
    responseLimit: false,
  },
};
