const nodemailer = require('nodemailer')

const sendEmail = async (options) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 'smtp.gmail.com',
        auth: {
            user: "ahamedashiq08@gmail.com",
            pass: "odsxlffnbpnzedse"
        }
    })
    const messsage = {
        from: `${process.env.EMAIL_FROM}`,
        to: options.email,
        subject: options.subject,
        html: options.text,
    }
    transporter.sendMail(messsage, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}

module.exports = sendEmail