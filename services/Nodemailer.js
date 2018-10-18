const nodemailer = require('nodemailer');
const { NODEMAIL_USER, NODEMAIL_PASSWORD } = require('../config/keys');

module.exports = (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 456,
    secure: true, // true for 465, false for other ports
    auth: {
      user: NODEMAIL_USER, // generated ethereal user
      pass: NODEMAIL_PASSWORD // generated ethereal password
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
};
