import { useState, useEffect } from 'react';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/jobs')
      .then(res => res.json())
      .then(setJobs);
  }, []);

  function addJob() {
    fetch('http://localhost:3000/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ company, role, postedBy: 'student' })
    })
      .then(res => res.json())
      .then(newJob => setJobs([...jobs, newJob]));
    setCompany(''); setRole('');
  }

  return (
    <div>
      <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" />
      <input value={role} onChange={e => setRole(e.target.value)} placeholder="Role" />
      <button onClick={addJob}>Add job</button>
      <ul>
        {jobs.map(j => <li key={j.id}>{j.company}: {j.role}</li>)}
      </ul>
    </div>
  );
}