const emailjs=require('@emailjs/nodejs')

const formController = {

sendMail: (req, res) => {
    const templateParams = {
        firstName: req.body['first-name'],
        lastName: req.body['last-name'],
        email: req.body.email,
        message: req.body.message,
    };
  
    emailjs.send('service_ofooa6q', 'contact_form', templateParams, {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        res.send('Email sent successfully!');
    }, (err) => {
        console.log('FAILED...', err);
        res.send('Failed to send email.');
    });
  }
}
  module.exports = formController