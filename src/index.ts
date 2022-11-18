import express from "express"
import V1API from "./routes/api/v1"
import V1AUTH from "./routes/auth/v1"
import bodyParser from "body-parser"
import { proxy } from "./proxy"

const app = express()
const port = process.env.PORT || 8080

app.use(proxy)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/auth/v1',V1AUTH)
app.use('/api/v1',V1API)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port} 🚀`)
})
