const QuestionButton = ({ onClick, buttonText, isSelected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isSelected ? "outline outline-3 outline-yellow-900 dark:outline-gray-200 bg-red-600 font-bold" : "bg-red-500"
      } text-white rounded-lg py-3 px-6 mt-4 text-2xl hover:bg-red-600`}
    >
      {buttonText}
    </button>
  );
};

export default QuestionButton;
