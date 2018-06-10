// import _ from 'lodash';
const nodemailer = require('nodemailer');

export default (mailOptions) => {
  console.log("MAP ok this is working");


  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SENDGRID_APIKEY, // generated ethereal user
        pass: process.env.SENDGRID_PWD // generated ethereal password
      }
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      console.log("email info", info);

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });


}

