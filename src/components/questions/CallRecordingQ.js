import { useState, useEffect } from "react";
import QuestionText from "../ui/QuestionText";

const CallRecordingQ = ({callRecording, setCallRecording, setIsValidInput}) => {
  
  const checkInput = () => {
    if (callRecording !== "") {
      console.log("callRecording is not empty")
      setIsValidInput(true);
    }
  }

  useEffect(() => {
    checkInput();
  }, [callRecording]);
  
  const [inputError, setInputError] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue);
    if (inputValue === "") {
      setInputError(true);
      setCallRecording("");
      setIsValidInput(false);
    } else if (!isNaN(numericValue)) {
      setInputError(false);
      setCallRecording(numericValue.toString());
      setIsValidInput(true);
    } else {
      setInputError(true);
      setCallRecording("");
      setIsValidInput(false);
    }
  };

  useEffect(() => {
    console.log("Call Recording Ports: " + callRecording);
  }, [setCallRecording]);

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText
        question={"How many calls if any do you need to record at the same time?"}
      />
      <input
        type="text"
        id="ipLines"
        value={callRecording}
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

export default CallRecordingQ;
