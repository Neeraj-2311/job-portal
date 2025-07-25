import type React from "react";
import type { JobDetailsData } from "../../types/types";

interface props{
    jobData: JobDetailsData;
    handleApply: () => void
}

export const ApplyButton: React.FC<props> = ({jobData, handleApply}) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 lg:left-64 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-30">
            <div className="px-4 lg:px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Dynamic Job Info */}
                    <div className="hidden sm:block min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {jobData.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {jobData.company} • {jobData.location}
                        </p>
                    </div>

                    {/* Apply Button */}
                    <button
                        onClick={handleApply}
                        className="cursor-pointer flex-1 sm:flex-none bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        aria-label={`Apply for ${jobData.title} position at ${jobData.company}`}
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    )
}