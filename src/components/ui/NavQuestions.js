const NavQuestions = (props) => {

    const handleNext = () => {
        props.setCurrentQuestionIndex(props.currentQuestionIndex + 1);
      };
    
      const handlePrevious = () => {
        props.setCurrentQuestionIndex(props.currentQuestionIndex - 1);
      };

  return (
    <div className="flex max-w-2xl mx-auto place-content-evenly">
      <button
        type="button"
        onClick={handlePrevious}
        className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default NavQuestions;
