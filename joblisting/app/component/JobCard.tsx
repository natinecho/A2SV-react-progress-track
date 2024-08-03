import React from 'react';
import { Job } from '../api/jobs/route';

import Link from 'next/link';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link href={`/jobs/${job.id}`} className='flex ml-9'>
    <div className="flex p-3 rounded-3xl bg-white w-11/12 border-2">
      <div className=''>
        <img src={job.image} alt="Job Image"  className='w-[66px] h-[59px]' />
      </div>

      <div className="flex flex-col gap-2 ml-4 w-5/6 ">
        <h2 className="text-lg font-bold">{job.title}</h2>
        <div className='flex items-center gap-3 w-1/2 text-sm font-light'>
            <p className="text-xs text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-600">{job.about.location}</p>    
        </div>
        <div className='text-l'>
            {job.description}
        </div>
        <div className='flex w-1/2 justify-between'>
            <button className='bg-[#56cdad38] px-4 py-2 rounded-full text-[#56CDAD]'>In Person</button>
            <button className='border-2 border-orange-300 px-4 py-2 rounded-full text-[#FFB836]'>Education</button>
            <button className='border-2 border-[#4640DE] px-8 py-2 rounded-full text-[#4640DE]'>IT</button>
        </div>

      </div>
    </div>
    </Link>
  );
};

export default JobCard;
