import { MdArrowOutward } from "react-icons/md"
import type { UserProfile } from "../../types/types"
import type React from "react"

interface props{
    profile: UserProfile;
}

const LinkedinProfileCard: React.FC<props> = ({profile}) => {
    return (
        <>{
            profile.linkedinUrl && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">LinkedIn Profile</h3>

                    <div className="flex items-center justify-between">
                        {/* Profile Info */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <img
                                    src={profile.photo}
                                    alt={`${profile.name}'s profile`}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                                    {/* LinkedIn Logo */}
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-base">{profile.name}</h4>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {profile.location}
                                </div>
                            </div>
                        </div>

                        {/* External Link */}
                        <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-3 rounded-full border border-gray-200 dark:border-gray-700"
                            aria-label="View LinkedIn profile (opens in new tab)"
                        >
                            <MdArrowOutward className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default LinkedinProfileCard