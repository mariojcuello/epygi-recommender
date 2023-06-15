const Reset = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setIpLines,
  setCallCenterAgents,
  setCallRecording,
  setConcurrentCalls,
  setFxoPorts,
  setFxsPorts,
  setIsAcd,
  setIsCallCenter,
}) => {
  const handleReset = () => {
    console.log("Reset");
    setCurrentQuestionIndex(0);
    setIpLines(null);
    setCallCenterAgents(null);
    setCallRecording(null);
    setConcurrentCalls(null);
    setFxoPorts(null);
    setFxsPorts(null);
    setIsAcd(null);
    setIsCallCenter(null);
  };
  return (
    <>
      {currentQuestionIndex > 0 && (
        <div className="grid grid-cols-1 max-w-2xl mx-auto place-content-center">
          <button
            type="button"
            onClick={handleReset}
            className=" flex mx-auto py-2 px-6 mt-4 text-lg font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Start Over
          </button>
        </div>
      )}
    </>
  );
};

export default Reset;
