import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function sendEmail(data:any){

 await sgMail.send({
  to: data.to,
  from: process.env.FROM_EMAIL!,
  subject: data.subject,
  html: data.html
 })

}
