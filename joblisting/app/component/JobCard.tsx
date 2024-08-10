"use client";
import React, { useEffect, useState } from "react";
import { Job } from "../api/jobs/route";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import Link from "next/link";

interface JobCardProps {
  job: Job;
  accessToken: string;
}

const JobCard: React.FC<JobCardProps> = ({ job, accessToken }) => {
  const [bookmarked, setBookmarked] = useState(job.isBookmarked);

  useEffect(() => {
    setBookmarked(job.isBookmarked);
  }, [job]);

  const handleAddBookmark = async () => {
    const res = await fetch(
      `https://akil-backend.onrender.com/bookmarks/${job.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (res.ok) {
      setBookmarked(true);
    }
  };

  const handleDeleteBookmark = async () => {
    const res = await fetch(
      `https://akil-backend.onrender.com/bookmarks/${job.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (res.ok) {
      setBookmarked(false);
    }
  };

  return (
    <div className="relative">
      <Link
        href={`/jobs/${job.id}`}
        className="flex ml-9 rounded-3xl border-2 overflow-hidden"
      >
        <div className="flex p-3 bg-white ">
          <div className="">
            <img
              src={job.logoUrl}
              alt="Job Image"
              className="w-[66px] h-[59px]"
            />
          </div>

          <div className="flex flex-col gap-2 ml-4 w-5/6 ">
            <h2 className="text-lg font-bold">{job.title}</h2>
            <div className="flex items-center gap-3 w-1/2 text-sm font-light">
              <p className="text-xs text-gray-600">{job.orgName}</p>
              <p className="text-sm text-gray-600">{job.location[0]}</p>
            </div>
            <div className="text-l">{job.description}</div>
            <div className="flex justify-between">
              <button className="bg-[#56cdad38] px-4 py-2 rounded-full text-[#56CDAD]">
                {job.opType}
              </button>
              <button className="text-[#36ad8d38]">|</button>
              <div className="flex flex-wrap gap-4">
                {job.categories.map((data, index) => (
                  <button
                    key={index}
                    className="border-2 py-1 px-2 bg-orange-100 rounded-full text-[#FFB836]"
                  >
                    {data}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
      {accessToken && (
        <div className="absolute right-24 top-7">
          {!bookmarked ? (
            <FaRegBookmark className="text-3xl" onClick={handleAddBookmark} />
          ) : (
            <FaBookmark
              className="text-3xl text-yellow-300"
              onClick={handleDeleteBookmark}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default JobCard;
