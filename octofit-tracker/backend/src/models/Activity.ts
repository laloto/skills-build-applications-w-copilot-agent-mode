import mongoose, { Schema } from 'mongoose'

const activitySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['running', 'cycling', 'strength', 'yoga'], required: true },
    durationMinutes: { type: Number, required: true },
    calories: { type: Number, required: true },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
)

export default mongoose.models.Activity || mongoose.model('Activity', activitySchema)