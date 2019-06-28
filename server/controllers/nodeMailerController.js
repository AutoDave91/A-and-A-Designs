const nodemailer = require('nodemailer');
require('dotenv').config()

const {EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD} = process.env

async function newsletter(req, res, next){
    console.log('newsletter', req.body)
    const {subject, body} = req.body
    let sub_emails = [];

    const db = req.app.get('db');
    db.get_subs().then(response => {
        for(i=0; i<response.length; i++){
            console.log('for loop', response[i].email)
            sub_emails.push(response[i].email)
            console.log('newsletter3', sub_emails)
        }
    })
    .catch(()=> {
        console.log('error loading products');
        res.sendStatus(500)
    })
    console.log('newsletter3', sub_emails)

    const transporter = nodemailer.createTransport({
        service: EMAIL_SERVICE,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD
        }
    })
    let mail = {
        from: 'A & A Designs',
        to: EMAIL_USER,
        bcc: sub_emails,
        subject: `${subject}`,
        text: body
    }

    transporter.sendMail(mail, (err, data)=>{
        if(err){
            res.json({msg: 'fail'})
        } else {
            res.json({msg: 'success'})
        }
    })
}

module.exports={
    newsletter
}