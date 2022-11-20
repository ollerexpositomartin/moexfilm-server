import express from "express"
import SCAN from './v1/scan'

const router = express.Router()

router.get("/", (req, res) => {
  res.send("API V1 Moexfilm")
})
router.use('/scan',SCAN)

export default router