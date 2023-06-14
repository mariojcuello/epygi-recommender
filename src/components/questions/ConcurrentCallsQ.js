import { useState, useEffect } from "react";
import QuestionText from "../ui/QuestionText";

const ConcurrentCallsQ = ({concurrentCalls, setConcurrentCalls, setIsValidInput}) => {
  const [inputError, setInputError] = useState(false);

  const checkInput = () => {
    console.log("checkInput() called")
    if (concurrentCalls !== "") {
      console.log("concurrentCalls is not empty")
      setIsValidInput(true);
    }
  }

  useEffect(() => {
    checkInput();
  }, [concurrentCalls]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue);
    if (inputValue === "") {
      setInputError(true);
      setConcurrentCalls("");
      setIsValidInput(false);
    } else if (!isNaN(numericValue)) {
      setInputError(false);
      setConcurrentCalls(numericValue.toString());
      setIsValidInput(true);
    } else {
      setInputError(true);
      setConcurrentCalls("");
      setIsValidInput(false);
    }
  };

  useEffect(() => {
    console.log("Concurrent Calls: " + concurrentCalls);
  }, [concurrentCalls]);

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText
        question={"What is the maximum number of concurrent calls you need to have?"}
      />
      <input
        type="text"
        id="ipLines"
        value={concurrentCalls}
        onChange={handleChange}
        className={`bg-gray-50 border mt-10 ${
          inputError ? "border-red-500" : "border-gray-300"
        } max-w-xs text-center mx-auto text-gray-900 text-lg md:text-3xl rounded-lg text focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder="Enter an amount"
        required
      />
      {inputError && (
        <p className="text-red-500 text-sm mt-2 text-center">
          Please enter a valid number.
        </p>
      )}
    </div>
  );
};

export default ConcurrentCallsQ;
