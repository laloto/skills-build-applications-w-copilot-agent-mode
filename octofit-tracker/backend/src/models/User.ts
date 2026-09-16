import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: String,
    fitnessLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  },
  { timestamps: true },
)

export default mongoose.models.User || mongoose.model('User', userSchema)