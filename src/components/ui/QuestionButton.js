const QuestionButton = ({ onClick, buttonText, isSelected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isSelected
          ? "ring-4"
          : "bg-red-500"
      } "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  focus:ring-gray-200 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"`}
    >
      {buttonText}
    </button>
  );
};

export default QuestionButton;
