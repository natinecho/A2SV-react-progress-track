'use client'
import { useState } from 'react';

import JobList from "./component/JobList";

export default function Home() {
  const [count,setCount] = useState<number>(0)
  return (
<>
<div className=''>

    <div className='w-4/5 m-6 p-3 flex items-center justify-between'>
        <div className='flex flex-col text-sm font-light'>
          <p className='font-extrabold text-3xl text-slate-700' >Opportunities</p>
          <p>Showing {count} results</p>
        </div>
        <div className='flex'>
          <div className=' text-sm font-light'>sort by :</div>
            <select >
                  <option value="1">Most relevent</option>
            </select>
        </div>
    </div>
    <JobList setCount = {setCount}/>
</div>
</>
  );
}
