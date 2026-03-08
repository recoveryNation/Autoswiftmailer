import { Worker } from "bullmq"
import { sendEmail } from "../../packages/mailer/mailer"

new Worker("emailQueue", async job => {

 const { to, subject, html } = job.data

 await sendEmail({
  to,
  subject,
  html
 })

})
