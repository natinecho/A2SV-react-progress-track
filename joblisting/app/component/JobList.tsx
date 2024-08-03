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
        const response = await fetch('/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data.jobs); // Ensure data structure matches expected format
        setCount(data.jobs.length); // Set count here
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
