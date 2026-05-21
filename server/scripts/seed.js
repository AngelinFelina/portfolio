import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Certification from '../models/Certification.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

const projectsData = [
  {
    title: 'Emergency Alert Kit',
    description: 'A full-stack system designed for both offline and online emergency communication. It provides resilient messaging channels, local alerts, and fallback mechanics utilizing React.js, Node.js, and MongoDB when normal internet connectivity or Wi-Fi is unavailable.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/AngelinFelina/emergency-alert-kit',
    liveUrl: ''
  },
  {
    title: 'Music Player Web App',
    description: 'A responsive, Spotify-inspired web application featuring smooth playback controls, customizable playlist options, and a personalized custom song upload utility that integrates track metadata, cover art, and external audio links.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    githubUrl: 'https://github.com/AngelinFelina/music-player',
    liveUrl: ''
  }
];

const skillsData = [
  // Languages
  { name: 'JavaScript', category: 'Languages', level: 90 },
  { name: 'Java', category: 'Languages', level: 85 },
  { name: 'Python', category: 'Languages', level: 80 },
  { name: 'C++', category: 'Languages', level: 75 },
  { name: 'C', category: 'Languages', level: 70 },
  // Web Development
  { name: 'React.js', category: 'Web Development', level: 90 },
  { name: 'Node.js', category: 'Web Development', level: 85 },
  { name: 'Express.js', category: 'Web Development', level: 85 },
  { name: 'HTML5 & CSS3', category: 'Web Development', level: 95 },
  { name: 'Bootstrap', category: 'Web Development', level: 80 },
  // Databases
  { name: 'MongoDB', category: 'Database', level: 85 },
  { name: 'MySQL', category: 'Database', level: 80 },
  // Cloud & Tools
  { name: 'Git & GitHub', category: 'Cloud & Tools', level: 90 },
  { name: 'AWS', category: 'Cloud & Tools', level: 75 },
  { name: 'Postman', category: 'Cloud & Tools', level: 85 },
  { name: 'VS Code', category: 'Cloud & Tools', level: 90 },
  { name: 'SQL Workbench', category: 'Cloud & Tools', level: 80 }
];

const experienceData = [
  {
    role: 'Web Development Intern',
    company: 'AICTE Eduskills',
    startDate: 'May 2024',
    endDate: 'July 2024',
    descriptionPoints: [
      'Built highly responsive web pages using HTML, CSS, and JavaScript, improving user interface consistency by 30%.',
      'Developed modular and dynamic user interface components in React.js and integrated with a Node.js + Express.js backend.',
      'Integrated backend logic with REST APIs and MySQL databases, contributing to a 20% reduction in query latency.',
      'Designed and deployed an Emergency Assistance App prototype targeted at real-time safety assistance in critical situations.'
    ]
  }
];

const certificationsData = [
  { title: 'Node.js & Express.js', issuer: 'Infosys Springboard' },
  { title: 'MongoDB Basics', issuer: 'MongoDB University' },
  { title: 'Cisco Python Essentials & Cybersecurity', issuer: 'Cisco' },
  { title: 'AWS Cloud Practitioner (Foundations)', issuer: 'Amazon Web Services' },
  { title: 'TCS iON Career Edge – Young Professional', issuer: 'TCS iON' }
];

async function seedDatabase() {
  try {
    console.log(`Connecting to MongoDB at: ${MONGODB_URI}...`);
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Certification.deleteMany({});
    console.log('Cleared existing database entries.');

    // Seed data
    await Project.insertMany(projectsData);
    console.log(`Seeded ${projectsData.length} projects.`);

    await Skill.insertMany(skillsData);
    console.log(`Seeded ${skillsData.length} skills.`);

    await Experience.insertMany(experienceData);
    console.log(`Seeded ${experienceData.length} experiences.`);

    await Certification.insertMany(certificationsData);
    console.log(`Seeded ${certificationsData.length} certifications.`);

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

seedDatabase();
