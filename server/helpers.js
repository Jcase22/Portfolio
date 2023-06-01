import nodemailer from 'nodemailer';

const mailer = async (from, subject, message) => {

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 25,
    secure: false,
    auth: {
      user: 'justin.case1061@outlook.com',
      pass: 'REACTdeveloper123!'
    },
    disableFileAccess: true,
    logger: true,
  })

  const options = {
    from: 'justin.case1061@outlook.com',
    to: 'justin.case1061@gmail.com',
    subject: subject,
    text: from + message,
  }

  await transporter.sendMail(options, (err, info) => {
    if(err) {
      console.log(err);
      return;
    }

    console.log("message sent successfully", info.response);
  })

}

export { mailer }
