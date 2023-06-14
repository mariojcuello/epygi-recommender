import { useState, useEffect } from "react";
import QuestionText from "../ui/QuestionText";

const IpLinesQ = ({ipLines, setIpLines, setIsValidInput}) => {
  const [inputError, setInputError] = useState(false);

  const checkInput = () => {
    if (ipLines !== "") {
      console.log("ipLines is not empty")
      setIsValidInput(true);
    }
  }

  useEffect(() => {
    checkInput();
  }, [ipLines]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue);
    if (inputValue === "") {
      setInputError(true);
      setIpLines("");
      setIsValidInput(false);
    } else if (!isNaN(numericValue)) {
      setInputError(false);
      setIpLines(numericValue.toString());
      setIsValidInput(true);
    } else {
      setInputError(true);
      setIpLines("");
      setIsValidInput(false);
    }
  };

  return (
   <div className="max-w-2xl mx-auto mt-12">
      <QuestionText question={"How many IP lines will be needed?"}/>
      <input
        type="text"
        id="ipLines"
        value={ipLines}
        onChange={handleChange}
        className={`bg-gray-50 border mt-10 ${
          inputError ? "border-red-500" : "border-gray-300"
        } max-w-xs text-center mx-auto text-gray-900 text-3xl rounded-lg text focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
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

export default IpLinesQ;
