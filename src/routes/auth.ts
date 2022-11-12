import express from "express";
import * as Auth from '../services/AuthService'
import { User } from '../models/user'

const router = express.Router();

router.post('/signup', async (req, res) => {
  const user:User = req.body
  const isAuth = await Auth.signUp(user.email,user.password)
  res.sendStatus(isAuth?200:403);
})

router.post('/signin', async (req, res) => {
  const user:User = req.body
  const isAuth = await Auth.signUp(user.email,user.password)
  res.sendStatus(isAuth?200:403);
})

export default router;