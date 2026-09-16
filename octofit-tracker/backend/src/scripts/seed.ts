import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [maya, leo, sofia] = await User.create([
      { name: 'Maya Chen', email: 'maya@example.com', avatar: 'MC', fitnessLevel: 'intermediate' },
      { name: 'Leo Martins', email: 'leo@example.com', avatar: 'LM', fitnessLevel: 'advanced' },
      { name: 'Sofia Patel', email: 'sofia@example.com', avatar: 'SP', fitnessLevel: 'beginner' },
    ]);

    const [trailblazers, pulseCrew] = await Team.create([
      { name: 'Trailblazers', motto: 'One more mile together', members: [maya._id, leo._id], totalPoints: 1840 },
      { name: 'Pulse Crew', motto: 'Small steps, strong habits', members: [sofia._id], totalPoints: 920 },
    ]);

    await Activity.create([
      { user: maya._id, type: 'running', durationMinutes: 42, calories: 380, completedAt: new Date('2026-09-14T07:30:00Z') },
      { user: leo._id, type: 'cycling', durationMinutes: 55, calories: 510, completedAt: new Date('2026-09-13T18:00:00Z') },
      { user: sofia._id, type: 'strength', durationMinutes: 30, calories: 220, completedAt: new Date('2026-09-15T17:15:00Z') },
    ]);

    await Leaderboard.create([
      { user: leo._id, team: trailblazers._id, points: 980, rank: 1, period: 'September 2026' },
      { user: maya._id, team: trailblazers._id, points: 860, rank: 2, period: 'September 2026' },
      { user: sofia._id, team: pulseCrew._id, points: 920, rank: 3, period: 'September 2026' },
    ]);

    await Workout.create([
      {
        title: 'Morning Momentum', description: 'A balanced full-body session to start the day.', category: 'strength', difficulty: 'beginner', durationMinutes: 25,
        exercises: [{ name: 'Bodyweight squat', sets: 3, reps: 12 }, { name: 'Incline push-up', sets: 3, reps: 10 }],
      },
      {
        title: 'Tempo Builder', description: 'A focused cardio workout for improving endurance.', category: 'cardio', difficulty: 'intermediate', durationMinutes: 35,
        exercises: [{ name: 'Easy run', sets: 1, reps: 1 }, { name: 'Tempo interval', sets: 4, reps: 1 }],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
