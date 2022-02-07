const mail = require('@sendgrid/mail')

const SENDGRID_API = process.env.SENDGRID_API_KEY;

mail.setApiKey(SENDGRID_API)

const sendEmail = (req, res) => {
        const body = JSON.parse(req.body)
    
        const message = `
            Name: ${body.name}\r\n
            Email: ${body.email}\r\n
            Message: ${body.message}
        `

        const data = {
            to: 'riquezani13@gmail.com',
            from: 'henrique.zani@hotmail.com',
            subject: `Nova mensagem de ${body.name}`,
            text: message,
            html: message.replace(/\r\n/g, '<br>')
        }

        mail.send(data)

    res.status(200).json({status: 'Ok', error: 'Erro'})
}

export default sendEmail