"use strict";
const nodemailer = require("nodemailer");

const sendmail= async(req,res)=>{
res.send('i am sending mail')
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nicole.renner@ethereal.email',
        pass: 'vqDjST1rVuVzvsaEjn'
    }
});

// async..await is not allowed in global scope, must use a wrapper

// send mail with defined transport object
const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <nicole.renner@ethereal.email>', // sender address
    to: "aakash.gupta@heliostechservices.com", // list of receivers
    subject: "Hello Developer", // Subject line
    text: "Hurayyyy!!!", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  
}  

module.exports=sendmail;