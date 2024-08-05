'use client';
import { useEffect, useState } from 'react';
import { Job } from '../api/jobs/route';
import JobCard from './JobCard';

interface JobListProps {
  setCount: (count: number) => void;
}

const JobList: React.FC<JobListProps> = ({ setCount }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://akil-backend.onrender.com/opportunities/search');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        console.log(data.data)
        setJobs(data.data); // Ensure data structure matches expected format
        setCount(data.data.length); // Set count here
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, [setCount]);

  return (
    <div className='w-5/6 flex flex-col items-center gap-6 justify-center'>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
