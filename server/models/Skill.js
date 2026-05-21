import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Languages', 'Web Development', 'Database', 'Cloud & Tools']
  },
  level: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 80
  }
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
