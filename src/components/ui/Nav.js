const Nav = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  isValidInput,
  setIsValidInput,
  skipNextQuestion,
  setSkipNextQuestion,
}) => {
  const totalNumberOfQuestions = 8;

  const handleNext = () => {
    if (skipNextQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 2);
      setSkipNextQuestion(false);
      setIsValidInput(false);
      console.log("skipped to question " + currentQuestionIndex);
    }


    // Check if the input is invalid if not do not update
    if (!isValidInput) {
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    console.log("next question " + currentQuestionIndex);
    setIsValidInput(false);
    console.log("isValidInput: " + isValidInput);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      console.log("updated question index to " + currentQuestionIndex);
      setIsValidInput(true);
      console.log("isValidInput is now " + isValidInput);
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
            className="bg-blue-500 text-white rounded-lg text-xl py-2 px-4 mt-4"
          >
            Previous
          </button>
        )}
        {currentQuestionIndex === 0 && <div />}
        {currentQuestionIndex < totalNumberOfQuestions && isValidInput && (
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white rounded-lg text-xl py-2 px-4 mt-4"
          >
            Next
          </button>
        )}
        {currentQuestionIndex === totalNumberOfQuestions && (
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white rounded-lg text-xl py-2 px-4 mt-4"
          >
            See Results
          </button>
        )}
      </div>
    </>
  );
};

export default Nav;
