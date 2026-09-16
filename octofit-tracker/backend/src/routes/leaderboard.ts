import { Router } from 'express'
import Leaderboard from '../models/Leaderboard.js'

const router = Router()

router.get('/', async (_request, response) => {
  try {
    response.json(await Leaderboard.find().populate('user', 'name').populate('team', 'name').sort({ points: -1 }).lean())
  } catch (error) {
    response.status(500).json({ error: 'Unable to load leaderboard' })
  }
})

export default router