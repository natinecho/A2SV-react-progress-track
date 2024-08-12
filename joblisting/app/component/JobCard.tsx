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
        data-testid="job-link"
      >
        <div className="flex p-3 bg-white ">
          <div className="">
            <img
              src={job.logoUrl}
              alt="Job Image"
              className="w-[66px] h-[59px]"
              data-testid="job-logo"
            />
          </div>

          <div className="flex flex-col gap-2 ml-4 w-5/6 ">
            <h2 className="text-base  md:text-lg font-bold " data-testid="job-title">
              {job.title}
            </h2>
            <div className="flex items-center gap-3 md:w-1/2 text-sm font-light">
              <p className="text-xs text-gray-600" data-testid="job-org">
                {job.orgName}
              </p>
              <p className="text-sm text-gray-600" data-testid="job-location">
                {job.location[0]}
              </p>
            </div>
            <div className="text-l" data-testid="job-description">
              {job.description}
            </div>
            <div className="flex flex-wrap gap-2 justify-between">
              <div className="flex">
                <button
                  className="bg-[#56cdad38] px-4 py-2 rounded-full text-[#56CDAD]"
                  data-testid="job-opType"
                >
                  {job.opType}
                </button>
                <button className="text-[#36ad8d38]" data-testid="job-separator">
                  |
                </button>

              </div>
              {/* <div className="flex flex-wrap gap-4" data-testid="job-categories"> */}
                {job.categories.map((data, index) => (
                  <button
                    key={index}
                    className="border-2 py-1 px-2 bg-orange-100 rounded-full text-[#FFB836]"
                  >
                    {data}
                  </button>
                ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      </Link>
      {accessToken && (
        <div className="absolute top-2 right-2 md:right-24 md:top-7 ">
          {!bookmarked ? (
            <FaRegBookmark
              className="text-3xl"
              onClick={handleAddBookmark}
              data-testid="bookmark-icon"
            />
          ) : (
            <FaBookmark
              className="text-3xl text-yellow-300"
              onClick={handleDeleteBookmark}
              data-testid="bookmarked-icon"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default JobCard;
