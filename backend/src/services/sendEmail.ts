import nodemailer from 'nodemailer';
import { emailConfig } from '../config';

// 1. create an email transporter.
// SMTP (Simple Mail Transfer Protocol)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailConfig.admin,
        pass: emailConfig.password
    }
})

/**
 * Sends an email using Nodemailer transporter.
 * @param {string} email - Recipient email address.
 * @param {string} subject - Subject of the email.
 * @param {string} body - HTML body of the email.
 */
async function sendEmail({ email, subject, body }: { email: string, subject: string, body: string }): Promise<void> {
    // 2. Configure email content.
    const mailOptions = {
        from: emailConfig.admin,
        to: email,
        subject: subject,
        html: body,
    }

    //3. Send email
    try {
        const result = await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error(`Unable to send email : ${error}`)
    }
}

export { sendEmail };