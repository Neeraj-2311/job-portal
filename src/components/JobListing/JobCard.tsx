import { BsBookmarkPlus } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { GoClock, GoShareAndroid } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { IoLocationOutline, IoWalletOutline, IoBriefcaseOutline } from "react-icons/io5";
import { RiSparkling2Fill } from "react-icons/ri";
import MatchScoreCard from "../MatchScoreCard";
import type { Job } from "../../types/types";
import { getColorFromString } from "../../utils/getColorFromString";
import { getInitials } from "../../utils/getInitials";
import { Link } from "react-router-dom";

const JobCard: React.FC<{
  job: Job;
  isBookmarked: boolean;
  onBookmark: (jobId: number, e: React.MouseEvent) => void;
}> = ({ job, isBookmarked, onBookmark }) => {
  const companyInitials = getInitials(job.company, 2);
  const logoBgColor = getColorFromString(job.company);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 p-1">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
        <div className="flex-1 min-w-0 p-4 md:pr-0 flex flex-col gap-4">
          {/* Header Section */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* Company Logo or Initials */}
              {job.logo ? (
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                />
              ) : (
                <div
                  className={`w-12 h-12 ${logoBgColor} rounded-md flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                >
                  {companyInitials}
                </div>
              )}
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 truncate">
                  {job.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
                  {job.company}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm flex-shrink-0 whitespace-nowrap">
              <GoClock size={14} />
              <span>{job.posted}</span>
            </div>
          </div>

          {/* Job Details */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 flex-wrap justify-between">
            <div className="flex items-center gap-1">
              <IoLocationOutline size={16} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <IoIosStarOutline size={16} />
              <span>{job.experience}</span>
            </div>
            {job.salary && job.salary !== "Not Disclosed" ? (
              <div className="flex items-center gap-1">
                <IoWalletOutline size={16} />
                <span>{job.salary}</span>
              </div>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">Not Disclosed</span>
            )}
            <div className="flex items-center gap-1">
              <GoClock size={16} />
              <span>{job.type}</span>
            </div>
            {job.remote && (
              <div className="flex items-center gap-1">
                <IoBriefcaseOutline size={16} />
                <span>{job.remote}</span>
              </div>
            )}
          </div>

          {/* Action Chips */}
          <div className="flex items-center gap-4 text-sm flex-wrap">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-medium px-3 py-1 rounded-sm">
              {job.connections}
            </span>
            {job.salaryNote && (
              <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-medium px-3 py-1 rounded-sm">
                {job.salaryNote}
              </span>
            )}
            <button className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium px-3 py-1 rounded-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              {job.actionText}
            </button>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => onBookmark(job.id, e)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <BsBookmarkPlus
                    size={16}
                    className={isBookmarked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}
                  />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <GoShareAndroid size={16} className="text-gray-400 dark:text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <FiMoreVertical size={16} className="text-gray-400 dark:text-gray-500" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-gray-100 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <RiSparkling2Fill className="text-blue-500" size={14} />
                  Ask Buddy
                </button>

                {job.applied ? (
                  <span className="text-gray-400 dark:text-gray-500 text-sm px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800">
                    Applied {job.appliedTime}
                  </span>
                ) : (
                  <Link to={`/${job?.id}`} className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition">
                    Apply now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Match Score Card */}
        <MatchScoreCard
          match={job.match}
          status={job.status}
          growthOpportunities={job.growthOpportunities}
          activelyHiring={job.activelyHiring}
        />
      </div>
    </div>
  );
};

export default JobCard;