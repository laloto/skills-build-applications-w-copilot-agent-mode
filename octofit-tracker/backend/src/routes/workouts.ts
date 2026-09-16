import { Router } from 'express'
import Workout from '../models/Workout.js'

const router = Router()

router.get('/', async (_request, response) => {
  try {
    response.json(await Workout.find().sort({ difficulty: 1, title: 1 }).lean())
  } catch (error) {
    response.status(500).json({ error: 'Unable to load workouts' })
  }
})

export default router