const nodemailer = require('nodemailer');

module.exports = { sendEmail };
function sendEmail(username, email) {
    return new Promise( (resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: 'deploymemail@gmail.com',
                pass: 'deploymemailpass'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
     
        let HelperOtions = {
            from: '"Deployme" <deploymemail@gmail.com',
            to: email,
            subject: 'Hi ' + username + ', Wellcome to Deployme',
            text: "Wellcome to deployme",
            html: `
            <p>Wellcome to DeployMe</p>
            <p>Click <a href='http://www.deployme.ml'>here</a> to deploy your proyect</p>`
        };
     
        transporter.sendMail(HelperOtions, (error, info) => {
            if (error) {
                reject(error);
            }else{
                resolve();
            }
        });
    })
 }