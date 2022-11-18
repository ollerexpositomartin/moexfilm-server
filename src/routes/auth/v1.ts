import express from "express"
import Auth from "./v1/auth"

const router = express.Router()
router.use("/", Auth)

export default router
