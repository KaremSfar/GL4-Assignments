const nodemailer = require('nodemailer');
const config = require("config");

const transport = nodemailer.createTransport({
    host:"smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
        user: config.get("mailUser"),
        pass: config.get("mailPassword")
    }
});

function sendMail(from,to,subject,html){
    return new Promise((resolve,reject)=>{
        transport.sendMail({
            from,
            subject,
            to,
            html
        },(err,info)=>{
            if (err) reject(err);
            resolve(info);
        })
    })
}
function sendVerifyMail(to,id){
    let html = `Verify at : localhost:3000/api/users/verify/${id}`;
    return sendMail(config.get('mailSender'),to,'Email verfification',html);
}

module.exports = {sendMail,sendVerifyMail};
