const QuestionButton = ({ onClick, buttonText, isSelected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isSelected ? "outline outline-3 outline-gray-400 bg-red-600" : "bg-red-500"
      } text-white rounded-lg py-3 px-6 mt-4 text-xl hover:bg-red-600`}
    >
      {buttonText}
    </button>
  );
};

export default QuestionButton;
