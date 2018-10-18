const emailer = require('../services/Nodemailer');
const EmailContactToAdmin = require('../services/emailTemplates/EmailContactToAdmin');
const EmailContactToClient = require('../services/emailTemplates/EmailContactToClient');
const { EMAIL_NO_REPLY, EMAIL_ADMIN } = require('../config/keys');

module.exports = (app, csrf) => {
  app.post('/contact/sendmail', csrf, (req, res) => {
    //Send mail to Admin
    const mailOptions = {
      from: `"${req.body.name}" <${req.body.email}>`,
      to: EMAIL_ADMIN,
      subject: `${req.body.name} has sent contact to you`,
      html: EmailContactToAdmin(req.body)
    };
    emailer(mailOptions);

    //Send mail to Client
    const mailOptionsClient = {
      from: `<${EMAIL_NO_REPLY}>`,
      to: req.body.email,
      subject: 'Thank you for sending contact to us',
      html: EmailContactToClient(req.body)
    };
    emailer(mailOptionsClient);

    res.send({ status: 'success' });
  });
};
