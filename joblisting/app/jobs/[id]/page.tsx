import { notFound } from 'next/navigation';
import { GET, Job } from '../../api/jobs/route';
import About from './component/about';
import { FaMapMarkerAlt, FaRegCheckCircle } from "react-icons/fa";

export default async function JobDetail({ params }: { params: { id: string } }) {
    const response = await GET();
    const jobs = await response.json();

    if (response.status === 200) {
        const job: Job | undefined = jobs.jobs.find((job: Job) => job.id.toString() === params.id);

        if (!job) {
            notFound();
        }

        const style = "py-3 font-extrabold text-3xl text-black";

        return (
            <div className='flex w-screen gap-10 m-7 justify-between items-start'>
                <div className='w-5/6 flex flex-col gap-5 text-gray-600'>
                    <div className='flex flex-col justify-between'>
                        <h1 className={style}>Description</h1>
                        <p>{job.description}</p>
                    </div>
                    <div>
                        <h1 className={style}>Responsibilities</h1>
                        <ul>
                            {job.responsibilities.map((item, index) => (
                                <li key={index} className='flex items-center gap-3 p-1'>
                                    <FaRegCheckCircle /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className={style}>Ideal Candidate</h1>
                        <ul className='list-disc ml-3'>
                            <li className='p-1'>{job.ideal_candidate.age}</li>
                            <li className='p-1'>{job.ideal_candidate.gender}</li>
                            <li className='p-1'>{job.ideal_candidate.traits}</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className={style}>When & Where</h1>
                        <p className='flex gap-3 items-center'>
                            <FaMapMarkerAlt className='text-blue-600 rounded-full p-1 border-2 h-[35px] w-[35px] shadow-sm' />
                            {job.when_where}
                        </p>
                    </div>
                </div>
                <div>
                    <About {...job.about} />
                </div>
            </div>
        );
    } else {
        notFound();
    }
}
