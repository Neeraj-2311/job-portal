import React from 'react';

interface MatchScoreCardProps {
  match: number;
  status: 'GREAT' | 'AVERAGE' | 'POOR';
  growthOpportunities?: boolean;
  activelyHiring?: boolean;
}

const getStatusStyles = (status: MatchScoreCardProps['status']) => {
  switch (status) {
    case 'GREAT':
      return {
        text: 'text-green-600',
        progress: 'stroke-green-500',
        gradient: 'bg-gradient-to-br from-green-100 to-green-50',
        border: 'border-green-300',
      };
    case 'AVERAGE':
      return {
        text: 'text-orange-600',
        progress: 'stroke-orange-500',
        gradient: 'bg-gradient-to-br from-orange-100 to-orange-50',
        border: 'border-orange-300',
      };
    case 'POOR':
      return {
        text: 'text-red-600',
        progress: 'stroke-red-500',
        gradient: 'bg-gradient-to-br from-red-100 to-red-50',
        border: 'border-red-300',
      };
    default:
      return {
        text: 'text-gray-600',
        progress: 'stroke-gray-400',
        gradient: 'bg-gradient-to-br from-gray-100 to-white',
        border: 'border-gray-300',
      };
  }
};

const MatchScoreCard: React.FC<MatchScoreCardProps> = ({
  match,
  status,
  growthOpportunities,
  activelyHiring,
}) => {
  const styles = getStatusStyles(status);
  const circumference = 2 * Math.PI * 28;
  const strokeDasharray = `${(match / 100) * circumference} ${circumference}`;

  return (
    <div
      className={`rounded-xl p-4 min-w-[140px] lg:min-w-[160px] border ${styles.gradient} ${styles.border}`}
    >
      <div className={`flex md:flex-col ${(!growthOpportunities && !activelyHiring) ? 'justify-center':'justify-around'} md:justify-none items-center`}>
        {/* Circular Progress */}
        <div className='flex flex-col items-center'>
          <div className="relative mb-3">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-gray-200"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray={strokeDasharray}
                strokeLinecap="round"
                className={styles.progress}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-lg font-bold ${styles.text}`}>{match}%</span>
            </div>
          </div>
          <span className={`text-sm font-bold ${styles.text} mb-1`}>{status}</span>
          <span className="text-xs text-gray-500 mb-4">Match</span>
        </div>

        <div className="text-xs space-y-2 md:w-full">
          {growthOpportunities && (
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500 text-sm">✓</span>
              <span>Growth Opportunities</span>
            </div>
          )}
          {activelyHiring !== undefined && (
            <div className="flex items-center gap-2 text-gray-600">
              <span className={`text-sm ${activelyHiring ? 'text-green-500' : 'text-red-500'}`}>
                {activelyHiring ? '✓' : '✗'}
              </span>
              <span>{activelyHiring ? 'Actively Hiring' : 'Not Hiring'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchScoreCard;