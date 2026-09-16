import mongoose, { Schema } from 'mongoose'

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ['cardio', 'strength', 'mobility'], required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    durationMinutes: { type: Number, required: true },
    exercises: [{ name: String, sets: Number, reps: Number }],
  },
  { timestamps: true },
)

export default mongoose.models.Workout || mongoose.model('Workout', workoutSchema)