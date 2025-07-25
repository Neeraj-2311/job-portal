import React from 'react';
import {
  IoBriefcaseOutline, IoLocationOutline, IoPersonOutline, IoWalletOutline
} from "react-icons/io5";
import {
  IoIosStarOutline
} from "react-icons/io";
import {
  FiMoreVertical
} from "react-icons/fi";
import {
  GoShareAndroid, GoClock
} from "react-icons/go";
import {
  BsBookmarkPlus
} from "react-icons/bs";
import {
  AiFillStar
} from "react-icons/ai";
import { getInitials } from '../../utils/getInitials';
import { getColorFromString } from '../../utils/getColorFromString';
import MatchScoreCard from '../MatchScoreCard';
import type { JobDetailsData } from '../../types/types';

interface JobDetailCardProps {
  jobData: JobDetailsData;
  isBookmarked?: boolean;
  onBookmark?: (e: React.MouseEvent) => void;
  onShare?: (jobId: number, e: React.MouseEvent) => void;
  onMoreOptions?: (jobId: number, e: React.MouseEvent) => void;
  className?: string;
}

const JobDetailCard: React.FC<JobDetailCardProps> = ({
  jobData,
  isBookmarked = false,
  onBookmark,
  onShare,
  onMoreOptions,
  className = ""
}) => {

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBookmark?.(e);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare?.(jobData.id, e);
  };

  const handleMoreOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMoreOptions?.(jobData.id, e);
  };

  const companyInitials = getInitials(jobData.company, 2);
  const logoBgColor = getColorFromString(jobData.company);

  return (
    <div className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm ${className}`}>
      <div className="flex-1 min-w-0 p-4 flex flex-col gap-4 md:gap-0">
        {/* Header */}
        <div className="flex flex-wrap gap-4 justify-between items-start">
          {/* Left: Logo + Info + Actions */}
          <div className="flex gap-4 flex-1 min-w-0">
            {/* Logo */}
            {jobData.logo ? (
              <img
                src={jobData.logo}
                alt={`${jobData.company} logo`}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
            ) : (
              <div className={`w-16 h-16 ${logoBgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-bold text-xs text-center">
                  {companyInitials}
                </span>
              </div>
            )}

            {/* Title + Meta */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 truncate">
                {jobData.title}
              </h1>
              <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 flex-wrap">
                <span className="font-medium truncate">{jobData.company}</span>
                <div className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400" />
                  <span className="ml-1">{jobData.rating}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 truncate">{jobData.reviews}</span>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-start gap-2">
              <button
                onClick={handleBookmark}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                <BsBookmarkPlus
                  size={16}
                  className={isBookmarked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}
                />
              </button>
              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Share job"
              >
                <GoShareAndroid size={16} className="text-gray-400 dark:text-gray-500" />
              </button>
              <button
                onClick={handleMoreOptions}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="More options"
              >
                <FiMoreVertical size={16} className="text-gray-400 dark:text-gray-500" />
              </button>
            </div>
          </div>
        </div>



        {/* Main Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4">
          <div className="flex flex-col gap-4">
            {/* Job Attributes */}
            <div className="flex items-center gap-x-10 gap-y-4 text-sm text-gray-600 dark:text-gray-300 flex-wrap">
              <div className="flex items-center gap-1">
                <IoLocationOutline size={16} />
                <span>{jobData.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <IoIosStarOutline size={16} />
                <span>{jobData.experience}</span>
              </div>
              <div className="flex items-center gap-1">
                <IoWalletOutline size={16} />
                <span>{jobData.salary && jobData.salary !== "Not Disclosed" ? jobData.salary : <span className="text-gray-500 dark:text-gray-400">Not Disclosed</span>}</span>
              </div>
              <div className="flex items-center gap-1">
                <GoClock size={16} />
                <span>{jobData.type}</span>
              </div>
              {jobData.remote && (
                <div className="flex items-center gap-1">
                  <IoBriefcaseOutline size={16} />
                  <span>{jobData.remote}</span>
                </div>
              )}
            </div>

            {/* Chips Row */}
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-medium px-3 py-1 rounded-sm">
                {jobData.connections}
              </span>
              {jobData.salaryNote && (
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-medium px-3 py-1 rounded-sm">
                  {jobData.salaryNote}
                </span>
              )}
              <button
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium px-3 py-1 rounded-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                aria-label="Take Action"
              >
                {jobData.actionText}
              </button>
            </div>

            {/* Posted Info */}
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 flex-wrap gap-2">
              <span>Posted by</span>
              <div className="flex items-center">
                <IoPersonOutline className="w-4 h-4 mr-1" />
                <span className="font-medium">{jobData.postedBy}</span>
              </div>
              <span>•</span>
              <span>{jobData.posted}</span>
              <span>•</span>
              <span>Openings <strong>{jobData.openings}</strong></span>
              <span>•</span>
              <span>Applicants <strong>{jobData.applicants}</strong></span>
            </div>
          </div>

          {/* Right: Match Card */}
          <MatchScoreCard
            match={jobData.match}
            status={jobData.status}
            growthOpportunities={!!jobData.growthOpportunities}
            activelyHiring={jobData.activelyHiring}
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetailCard;