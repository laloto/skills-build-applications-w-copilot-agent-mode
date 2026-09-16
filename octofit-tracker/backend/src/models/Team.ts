import mongoose, { Schema } from 'mongoose'

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    motto: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    totalPoints: { type: Number, required: true, default: 0 },
  },
  { timestamps: true },
)

export default mongoose.models.Team || mongoose.model('Team', teamSchema)