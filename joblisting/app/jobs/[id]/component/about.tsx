import { FaMapMarkerAlt,FaRegCalendarCheck,FaRegCheckCircle } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { SlFire } from "react-icons/sl";
import { LuPlusCircle } from "react-icons/lu";

interface About{
    datePosted:string;
    deadline:string;
    startDate:string;
    endDate:string;
    categories:string[];
    requiredSkills:string[];
    location:string[];
}


const About =({...input}:About)=>{
    return (
        <>
        <div >
            <h1 className='py-3 font-extrabold text-3xl text-black'> About </h1>
            <div className='flex flex-col justify-between gap-4'>

                <div className='flex  gap-3 items-center'>
                    <LuPlusCircle className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm '/>
                    <div className='flex flex-col  items-start'>
            
                        <div className='font-light '>Posted On </div>
                        <div>{input.datePosted}</div>     
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
                        <div>{input.startDate}</div>     
                    </div>
                </div>
                <div className='flex  gap-3 items-center mb-5'>
                    <FaRegCalendarCheck className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm '/>
                    <div className='flex flex-col  items-start'>
                        <div className='font-light '>End Date</div>
                        <div>{input.endDate}</div>     
                    </div>
                </div>
                <div className='border-b-2 font-light border-blue-200 w-2/3'></div>

            </div>
        </div>
        <div className='felx flex-col gap-3 mb-4'>
            <h1 className="py-3 font-extrabold text-3xl text-black"> Catagories</h1>
            <div className='flex  flex-wrap gap-4'>
                {
                    input.categories.map((data,index)=>(
                        <button className='border-2 py-1 px-2 bg-orange-100 rounded-full text-[#FFB836]'>{data}</button>
                    ))
                }
            </div>
        </div>
        <div className='border-b-2 font-light border-blue-200 w-2/3'></div>

        <div>
            <h1 className="py-3 font-extrabold text-3xl text-black"> Required Skill </h1>
            <div className='flex  flex-wrap gap-4'>
                {
                    input.requiredSkills.map((data,index)=>(
                        <button className='bg-[#F8F8FD] px-3 py-1 text-sm  text-[#56CDAD]'>{data}</button>
                    ))
                }
            </div>
        </div>
        
 
</>
    )
}

export default About