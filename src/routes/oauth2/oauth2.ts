import dotenv from "dotenv"
import { google } from "googleapis"
import { Router } from "express"
import fs from "fs"
import { Credentials } from "google-auth-library"

const SCOPES = ["https://www.googleapis.com/auth/drive"]
const REDIRECT = "http://localhost:8080/oauth2/oauthcallback"
dotenv.config()

const router = Router()

export const oauth2Client = new google.auth.OAuth2({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: REDIRECT,
})

// load crendetials if exists
if (fs.existsSync("credentials.json")) {
  console.log("credentials loaded 😈")
  const rawData: any = fs.readFileSync("credentials.json")
  const credentials: Credentials = JSON.parse(rawData)
  oauth2Client.setCredentials(credentials)
}

router.use("/configure", async (req, res) => {
  if (fs.existsSync("credentials.json")) {
    res.send("Just configured")
    return
  }

  const urlLogin = oauth2Client.generateAuthUrl({
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
  const { tokens } = await oauth2Client.getToken(code)
  oauth2Client.setCredentials(tokens)
  if (tokens.refresh_token == null) {
    res.send("FAILURE")
    return
  }
  const data = JSON.stringify(tokens)
  fs.writeFileSync("credentials.json", data)

  res.send("OK")
})

router.use("/reset", async (req, res) => {
  try{
    fs.unlinkSync("credentials.json")
    res.send('CREDENTIALS REMOVE')
  }catch(e){
    res.send('ERROR CREDENTIALS NOT FOUNDS')
  }
})

export default router
