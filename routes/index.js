const router = require("express").Router();
var nodemailer = require('nodemailer');

router.route("/api/submit")
    .post(function (req,res) {
 

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "AndrewJKleiner@gmail.com",
    pass: process.env.GMAIL_PW
  }
});

var mailOptions = {
  from: req.body.name,
  to: "AndrewJKleiner@gmail.com",
  subject: 'AN EMAIL FROM YOUR WEBSITE',
  text: req.body.text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    })

module.exports = router;