import dotenv from "dotenv"
import { google } from "googleapis"
import { Router} from "express"

const SCOPES = ["https://www.googleapis.com/auth/drive"]
const REDIRECT = "http://localhost:8080/oauth2/oauthcallback"
dotenv.config()


const router = Router()

const oauthClient = new google.auth.OAuth2({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: REDIRECT,
})

router.use("/configure", async (req, res) => {

  const urlLogin = oauthClient.generateAuthUrl({
    scope: SCOPES,
  })

  res
    .writeHead(301, {
      Location: urlLogin,
    })
    .end()
})

router.use("/oauthcallback",async (req, res) => {
  const code = req.query.code as string

  const {tokens} = await oauthClient.getToken(code)
  oauthClient.setCredentials(tokens)
  console.log(tokens)
  

  res.send("OK")
})

export default router
