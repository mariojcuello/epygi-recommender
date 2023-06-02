
const Nav = (props) => {

  const handleNext = () => {
    if (props.skipNextQuestion) {
      props.setCurrentQuestionIndex(props.currentQuestionIndex + 2);
      props.setSkipNextQuestion(false);
      console.log("skipped to question " + props.currentQuestionIndex);
    }
    props.setCurrentQuestionIndex(props.currentQuestionIndex + 1);
    props.setIsValidInput(false);
    console.log("next question " + props.currentQuestionIndex);
  };

  const handlePrevious = () => {
    if (props.currentQuestionIndex > 0) {
      props.setCurrentQuestionIndex(props.currentQuestionIndex - 1);
      props.setIsValidInput(true);
      console.log("previous question " + props.currentQuestionIndex);
    }
  };

  return (
    <div className="grid grid-cols-2 max-w-2xl mx-auto place-content-center gap-10 mt-10">
      {props.currentQuestionIndex > 0 && (
        <button
        type="button"
        onClick={handlePrevious}
        disabled={props.currentQuestionIndex === 0}
        className="bg-blue-500 text-white rounded-lg text-xl py-2 px-4 mt-4"
      >
        Previous
      </button>
      )}
      {props.currentQuestionIndex === 0 && <div />}

      {props.isValidInput && (
        // <NavButton onClick={handleNext} currentQuestionIndex={props.currentQuestionIndex} text="Next" />
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white rounded-lg text-xl py-2 px-4 mt-4"
        >
          Next
        </button>
      )}

    </div>
  );
};

export default Nav;
