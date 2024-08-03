import { Job } from '../../../api/jobs/route';
import { FaMapMarkerAlt,FaRegCalendarCheck,FaRegCheckCircle } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { SlFire } from "react-icons/sl";
import { LuPlusCircle } from "react-icons/lu";

interface about{
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
}


const About =({...input}:about)=>{
    return (
        <>
        <div >
            <h1 className='py-3 font-extrabold text-3xl text-black'> About </h1>
            <div className='flex flex-col justify-between gap-4'>

                <div className='flex  gap-3 items-center'>
                    <LuPlusCircle className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm '/>
                    <div className='flex flex-col  items-start'>
            
                        <div className='font-light '>Posted On </div>
                        <div>{input.posted_on}</div>     
                    </div>
                </div>
                <div className='flex  gap-3 items-center'>
                    <SlFire className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm '/>
                    <div className='flex flex-col  items-start'>
                        <div className='font-light '>Deadline </div>
                        <div>{input.deadline}</div>     
                    </div>
                </div>
                <div className='flex  gap-3 items-center'>
                    <FaMapMarkerAlt className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm '/>
                    <div className='flex flex-col  items-start'>
                        <div className='font-light '>Location</div>
                        <div>{input.location}</div>     
                    </div>
                </div>
                <div className='flex  gap-3 items-center'>
                    <LuCalendarClock className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm '/>
                    <div className='flex flex-col  items-start'>
                        <div className='font-light '>Start Date</div>
                        <div>{input.start_date}</div>     
                    </div>
                </div>
                <div className='flex  gap-3 items-center mb-5'>
                    <FaRegCalendarCheck className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm '/>
                    <div className='flex flex-col  items-start'>
                        <div className='font-light '>End Date</div>
                        <div>{input.end_date}</div>     
                    </div>
                </div>
                <div className='border-b-2 font-light border-blue-200 w-2/3'></div>

            </div>
        </div>
        <div className='felx flex-col gap-3 mb-4'>
            <h1 className="py-3 font-extrabold text-3xl text-black"> Catagories</h1>
            <div className='flex w-1/2 gap-4'>
                <button className='border-2 py-1 px-2 bg-orange-100 rounded-full text-[#FFB836]'>Marketing</button>
                <button className='bg-[#56cdad38] py-1 px-2 rounded-full text-[#56CDAD]'>Design</button>
        </div>
        </div>
        <div className='border-b-2 font-light border-blue-200 w-2/3'></div>

        <div>
            <h1 className="py-3 font-extrabold text-3xl text-black"> Required Skill </h1>
            <div className='flex flex-wrap gap-3'>
                <button className='bg-[#F8F8FD] px-3 py-1 text-sm  text-[#56CDAD]'>Social-media Marketing</button>
                <button className='bg-[#F8F8FD] px-3 py-1 text-sm  text-[#56CDAD]'>English</button>
                <button className='bg-[#F8F8FD] px-3 py-1 text-sm  text-[#56CDAD]'>Copywriting</button>
        </div>
        </div>
        
 
</>
    )
}

export default About