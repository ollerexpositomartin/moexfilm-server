import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.send("API V1 Moexfilm")
})

export default router