import express from 'express';

const router = express.Router();

// Temporary job storage
const jobs = [];
let nextId = 1;

// Get all posted jobs
router.get('/', (req, res) => {
  res.json(jobs);
});

// Post a new job
router.post('/', (req, res) => {
  const { company, role, postedBy } = req.body;

  if (!company || !role) {
    return res.status(400).json({
      error: 'Company and role are required'
    });
  }

  const newJob = {
    id: nextId++,
    company,
    role,
    postedBy: postedBy || 'student'
  };

  jobs.push(newJob);

  res.status(201).json(newJob);
});

export default router;