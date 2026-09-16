import { Router } from 'express'
import User from '../models/User.js'

const router = Router()

router.get('/', async (_request, response) => {
  try {
    response.json(await User.find().sort({ name: 1 }).lean())
  } catch (error) {
    response.status(500).json({ error: 'Unable to load users' })
  }
})

export default router