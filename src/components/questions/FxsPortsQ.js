import { useState, useEffect } from "react";

import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";

const FxsPortsQ = ({fxsPorts, setFxsPorts, setIsValidInput}) => {

  const checkInput = () => {
    if (fxsPorts === "0" || fxsPorts === "2") {
      console.log("fxsports is not empty")
      setIsValidInput(true);
    }
  }

  useEffect(() => {
    checkInput();
  }, [fxsPorts]);

  const handleZeroClick = () => {
    setFxsPorts("0");
    setIsValidInput(true);
  };

  const handleTwoClick = () => {
    setFxsPorts("2");
    setIsValidInput(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText question={"How many FXS ports are needed?"} />
      <div className="flex flex-row gap-20 place-content-center">
        <QuestionButton
          onClick={handleZeroClick}
          buttonText={"0"}
          isSelected={fxsPorts === "0" ? true : null}
        />
        <QuestionButton
          onClick={handleTwoClick}
          buttonText={"2"}
          isSelected={fxsPorts === "2" ? true : null}
        />
      </div>
    </div>
  );
};

export default FxsPortsQ;
