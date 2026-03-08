import express from "express"
import emailRoutes from "./routes/email"

const app = express()

app.use(express.json())

app.use("/email", emailRoutes)

app.listen(4000, () => {
 console.log("API running on port 4000")
})
