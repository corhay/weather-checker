const nodemailer = require('nodemailer');

var mailOptions = {
    from: 'thewysalami@gmail.com',
    to: 'corwinhayslip@yahoo.com',
    subject: 'yes so common',
    text: 'ouais zarma'
};
exports.handler = function(event, context, callback) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'thewysalami@gmail.com',
            pass: process.env.SALAMIPASS
        }
    });

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else{
            console.log("email sent: " + info.response);
        }
    });
}


