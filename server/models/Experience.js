import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  descriptionPoints: [{
    type: String,
  }]
}, { timestamps: true });

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
