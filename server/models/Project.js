import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techStack: [{
    type: String,
  }],
  category: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
    default: '',
  },
  liveUrl: {
    type: String,
    default: '',
  }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
