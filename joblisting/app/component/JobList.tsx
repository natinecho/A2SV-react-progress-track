'use client';
import { useEffect, useState } from 'react';
import { Job } from '../api/jobs/route';
import JobCard from './JobCard';
import { useSession } from 'next-auth/react';

interface JobListProps {
  setCount: (count: number) => void;
}

const JobList: React.FC<JobListProps> = ({ setCount }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { data: session } = useSession();
  const access = session?.user?.accessToken;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let response;
        if (access) {
          response = await fetch('https://akil-backend.onrender.com/opportunities/search', {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          });
        } else {
          response = await fetch('https://akil-backend.onrender.com/opportunities/search');
        }

        const jobData = await response.json();
        setJobs(jobData.data);
        setCount(jobData.data.length);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, [access, setCount]);

  return (
    <div className='w-5/6 flex flex-col gap-6 justify-center'>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} accessToken={access} />
      ))}
    </div>
  );
}

export default JobList;
