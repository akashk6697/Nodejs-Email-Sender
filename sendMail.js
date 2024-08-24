const nodemailer = require("nodemailer");


const sendMail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    const transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: 'braxton.reichel43@ethereal.email',
        pass: 'V9NHgGwZ65tfXQXwV1'
        },
      });
       
      const info = await transporter.sendMail({
        from: '"Akash Babu Kushwah" <akash@gmail.com>', // sender address
        to: "akashk6697@gmail.com", // list of receivers
        subject: "Hello Everyone", // Subject line
        text: "Thank you for connecting.", // plain text body
        html: "<b>Thank you for connecting.</b>", // html body
      });
        
      console.log("Message sent: %s", info.messageId);
      res.json(info);

};

module.exports = sendMail;