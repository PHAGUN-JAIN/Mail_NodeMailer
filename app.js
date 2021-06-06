const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: "littletoddler@outlook.com",
    pass: "Phagun@123",
  },
});
/*
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "@outlook.com",
    pass: "",
  },
});
*/
const emailOptions = {
  from: "littletoddler@outlook.com",
  to: "500076430@stu.upes.ac.in",
  subject: "sending email from node ",
  text: "WTF :)",
};

transporter.sendMail(emailOptions, (err, info) => {
  if (err) {
    console.error(err);
  }
  console.log("email sent:" + info.response);
});
