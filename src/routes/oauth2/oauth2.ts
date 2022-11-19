import dotenv from "dotenv"
import { google } from "googleapis"
import { Router } from "express"
import fs from "fs"
import { Credentials } from "google-auth-library"

const SCOPES = ["https://www.googleapis.com/auth/drive"]
const REDIRECT = "http://localhost:8080/oauth2/oauthcallback"
dotenv.config()

const router = Router()

export const oauthClient = new google.auth.OAuth2({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: REDIRECT,
})

//load crendetials if exists
if (fs.existsSync("credentials.json")) {
  console.log("crendetials loaded 😈")
  let rawData:any = fs.readFileSync("credentials.json")
  let credentials: Credentials = JSON.parse(rawData)
  oauthClient.setCredentials(credentials)
}

router.use("/configure", async (req, res) => {
  if (fs.existsSync("credentials.json")) {
    res.send("Just configured")
    return
  }

  const urlLogin = oauthClient.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  })

  res
    .writeHead(301, {
      Location: urlLogin,
    })
    .end()
})

router.use("/oauthcallback", async (req, res) => {
  const code = req.query.code as string
  const { tokens } = await oauthClient.getToken(code)
  oauthClient.setCredentials(tokens)
  if (tokens.refresh_token == null) {
    res.send("FAILURE")
    return
  }
  let data = JSON.stringify(tokens)
  fs.writeFileSync("credentials.json", data)

  res.send("OK")
})

router.use("/reset", async (req, res) => {
  fs.unlinkSync("crendetials.json")
})

export default router
