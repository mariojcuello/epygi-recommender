import { useState } from "react";

const SpecForm = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionText:
        "What is the maximum number of IP lines you will need on this project?",
      placeholderText: "Enter a number",
      data: "",
      nextQuestionId: 2,
    },
    {
      id: 2,
      questionText: "Will you need any FXO lines?",
      data: "",
      options: [
        { label: "Yes", nextQuestionId: 3 },
        { label: "No", nextQuestionId: 4 },
      ],
    },
    {
      id: 3,
      questionText: "How many FXO lines will you need?",
      placeholderText: "Enter a number",
      data: "",
    },
    {
      id: 4,
      questionText: "You selected No for FXO lines.",
      // Add more questions for the "No" path
    },
    // Add more questions as needed
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleInputChange = (event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].data = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    let nextQuestionIndex = currentQuestionIndex + 1;

    if (currentQuestion.options) {
      const selectedOption = currentQuestion.options.find(
        (option) => option.label === currentQuestion.data
      );
      if (selectedOption) {
        nextQuestionIndex = questions.findIndex(
          (question) => question.id === selectedOption.nextQuestionId
        );
      }
    }

    if (nextQuestionIndex >= 0 && nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Handle end of questions
      console.log("End of questions");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto px-5">
      <form>
        <label
          htmlFor="question"
          className="block text-lg text-gray-900 dark:text-white mb-5"
        >
          {currentQuestion.questionText}
        </label>
        {currentQuestion.options ? (
          <div>
            {currentQuestion.options.map((option) => (
              <label key={option.label} className="mr-4">
                <input
                  type="radio"
                  name="question"
                  value={option.label}
                  checked={currentQuestion.data === option.label}
                  onChange={() =>
                    handleInputChange({ target: { value: option.label } })
                  }
                  className="mr-1"
                />
                {option.label}
              </label>
            ))}
          </div>
        ) : (
          <input
            type="text"
            id="question"
            value={currentQuestion.data}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={currentQuestion.placeholderText}
            required
          />
        )}
        <button
          type="button"
          onClick={handleNextQuestion}
          className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SpecForm;
