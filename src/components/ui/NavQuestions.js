const NavQuestions = (props) => {
  const handleNext = () => {
    props.setCurrentQuestionIndex(props.currentQuestionIndex + 1);
    props.setIsValidInput(false);
  };

  const handlePrevious = () => {
    if (props.currentQuestionIndex > 0) {
      props.setCurrentQuestionIndex(props.currentQuestionIndex - 1);
    }
  };

  return (
    <div className="grid grid-cols-2 max-w-2xl mx-auto place-content-center gap-10 mt-5">
      {props.currentQuestionIndex > 0 && (
        <button
          type="button"
          onClick={handlePrevious}
          disabled={props.currentQuestionIndex === 0}
          className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4"
        >
          Previous
        </button>
      )}
      {props.currentQuestionIndex === 0 && <div />}

      {props.isValidInput && (
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default NavQuestions;
