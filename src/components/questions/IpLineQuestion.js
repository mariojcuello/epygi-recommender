import { useState, useEffect } from "react";

const IPLines = (props) => {
  const [inputError, setInputError] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue);
    if (!isNaN(numericValue && inputValue !== "")) {
      setInputError(false);
      props.setIpLines(numericValue.toString());
      props.setIsValidInput(true);
    }
      else {
        setInputError(true);
        props.setIpLines("");
        props.setIsValidInput(false);
      }
    };


  useEffect(() => {
    console.log("IP Lines: " + props.ipLines);
  }, [props.ipLines]);

  return (
   <div className="max-w-2xl mx-auto">
      <label className="block text-lg text-gray-900 dark:text-white mb-5">
        Please enter the maximum amount of IP lines the unit will need.
      </label>
      <input
        type="text"
        id="ipLines"
        value={props.ipLines}
        onChange={handleChange}
        className={`bg-gray-50 border ${
          inputError ? "border-red-500" : "border-gray-300"
        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder="Enter an amount"
        required
      />
      {inputError && (
        <p className="text-red-500 text-sm mt-2">
          Please enter a valid number.
        </p>
      )}
    </div>
  );
};

export default IPLines;
