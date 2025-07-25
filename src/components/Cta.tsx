import { RiSparkling2Fill } from "react-icons/ri";

const Cta = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-400 dark:from-blue-700 dark:to-green-600 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-white">
      
      {/* AI Badge + Text */}
      <div className="flex items-center text-center sm:text-left">
        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
          <div className="w-8 h-8 bg-white dark:bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-blue-500 font-bold text-xs">AI</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white dark:text-white">
            Maximize Your Interview Chances
          </h3>
          <p className="text-sm text-white dark:text-gray-100 opacity-90">
            Try our AI Feature Now!
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button
        className="w-full sm:w-auto bg-white hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 text-green-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors duration-200"
        aria-label="Customize your AI interview support"
      >
        <RiSparkling2Fill className="mr-2 text-green-600" />
        Customize
      </button>
    </div>
  );
};

export default Cta;