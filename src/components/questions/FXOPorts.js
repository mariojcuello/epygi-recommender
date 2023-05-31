import { useState, useEffect } from "react";

const FXOPorts = () => {
  const [FxoPorts, setFxoPorts] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue);
    if (!isNaN(numericValue)) {
      setFxoPorts(numericValue.toString());
    }
  };

  useEffect(() => {
    console.log(FxoPorts);
  }, [FxoPorts]);

  return (
    <div className="max-w-2xl mx-auto">
      <label className="block text-lg text-gray-900 dark:text-white mb-5">
        Please enter the maximum amount of FXO ports the unit will need.
      </label>
      <input
        type="text"
        id="ipLines"
        value={FxoPorts}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="enter an amount"
        required
      />
    </div>
  );
};

export default FXOPorts;
