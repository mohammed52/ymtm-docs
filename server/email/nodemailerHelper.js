// import _ from 'lodash';
const nodemailer = require('nodemailer');

export default (mailOptions) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {


let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDGRID_USERNAME,
    pass: process.env.SENDGRID_PASSWORD
  }
});

// is this working

    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.ethereal.email',
    //   port: 587,
    //   auth: {
    //     user: 'hwd3o6upqvrgvot4@ethereal.email',
    //     pass: 'PMNP13EwbsRyVvzRDa'
    //   }
    // });




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

