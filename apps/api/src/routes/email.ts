import { Router } from "express"
import { emailQueue } from "../../../packages/queue/queue"

const router = Router()

router.post("/send", async (req, res) => {

 const { to, subject, html } = req.body

 await emailQueue.add("sendEmail", {
  to,
  subject,
  html
 })

 res.json({
  status: "queued"
 })

})

export default router
