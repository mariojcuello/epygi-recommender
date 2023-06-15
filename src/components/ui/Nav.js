import Link from "next/link";

const Nav = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  isValidInput,
  setIsValidInput,
  skipNextQuestion,
  setSkipNextQuestion,
  ipLines,
  fxsPorts,
  fxoPorts,
  concurrentCalls,
  callRecording,
  isCallCenter,
  callCenterAgents,
  isAcd,
}) => {
  const totalNumberOfQuestions = 8;

  const handleNext = () => {
    if (skipNextQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 2);
      setSkipNextQuestion(false);
      setIsValidInput(false);
      console.log("skipped to question " + currentQuestionIndex);
      return;
    }

    // Check if the input is invalid if not do not update
    if (!isValidInput) {
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    console.log("next question " + currentQuestionIndex);
    setIsValidInput(false);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      console.log("updated question index to " + currentQuestionIndex);
      setIsValidInput(true);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 max-w-2xl mx-auto place-content-center gap-10 mt-10 px-5">
        {currentQuestionIndex > 0 && (
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg text-xl py-2 px-4 mt-4"
          >
            Previous
          </button>
        )}
        {currentQuestionIndex === 0 && (
          <Link
            type="button"
            href="/survey/"
            className="py-2 px-4 mt-4 text-lg font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Single Form Mode
          </Link>
        )}
        {currentQuestionIndex < totalNumberOfQuestions && isValidInput && (
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg text-xl py-2 px-4 mt-4"
          >
            Next
          </button>
        )}
        {currentQuestionIndex === totalNumberOfQuestions && (
          <Link
            href={`/results/?ipLines=${ipLines}&fxsPorts=${fxsPorts}&fxoPorts=${fxoPorts}&concurrentCalls=${concurrentCalls}&callRecording=${callRecording}&isCallCenter=${isCallCenter}&callCenterAgents=${callCenterAgents}&isAcd=${isAcd}`}
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg text-xl py-2 px-4 mt-4 text-center"
          >
            See Results
          </Link>
        )}
      </div>
    </>
  );
};

export default Nav;
