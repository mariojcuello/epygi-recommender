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
            className="bg-red-400 text-white rounded-lg text-xl py-2 px-4 mt-7 flex mx-auto"
          >
            Start Over
          </button>
        </div>
      )}
    </>
  );
};

export default Reset;
