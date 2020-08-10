const router = require("express").Router();
var nodemailer = require('nodemailer');
require ("dotenv").config()
n
router.route("/api/submit")
    .post(function (req,res) {
 

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "AndrewJKleiner@gmail.com",
    pass: process.env.GMAIL_PW
  },
});

var mailOptions = {
  from: req.body.email,
  to: "andrewjkleiner@gmail.com",
  subject: 'AN EMAIL FROM YOUR WEBSITE FROM: ' + req.body.name,
  text: req.body.text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.send(error);
  } else {
    console.log('Email sent: ' + info);
    res.send(info);
  }
});
    })

module.exports = router;