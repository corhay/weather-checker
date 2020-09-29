const nodemailer = require('nodemailer');
console.log("ok hello yes alright");

exports.handler = function(event, context, callback) {
    var mailOptions = {
        from: 'corwin.hayslip@gmail.com',
        to: 'corwinhayslip@yahoo.com',
        subject: 'yes so common',
        text: 'ouais zarma'
    };

    console.log("mailOptions and stuff with env variable:" + process.env.CORPASS)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'corwin.hayslip@gmail.com',
            pass: process.env.CORPASS
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


