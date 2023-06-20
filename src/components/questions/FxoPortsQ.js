import { useState, useEffect } from "react";
import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";
import SubQuestionText from "../ui/SubQuestionText";

const FxoPortsQ = ({fxoPorts, setFxoPorts, setIsValidInput}) => {

  const checkInput = () => {
    if (fxoPorts === "0" || fxoPorts === "2" || fxoPorts === "4") {
      console.log("fxsPorts is not empty")
      setIsValidInput(true);
    }
  }

  useEffect(() => {
    checkInput();
  }, [fxoPorts]);

  const handleZeroClick = () => {
    setFxoPorts("0");
    setIsValidInput(true);
  };

  const handleTwoClick = () => {
    setFxoPorts("2");
    setIsValidInput(true);
  };

  const handleFourClick = () => {
    setFxoPorts("4");
    setIsValidInput(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText question={"How many FXO ports are needed?"} />
      <SubQuestionText subQuestion={"(If you need more than 4 FXO ports a QX gateway can be used to increase that number.)"} />
      <div className="flex flex-row gap-10 md:gap-20 place-content-center">
        <QuestionButton
          onClick={handleZeroClick}
          buttonText={"0"}
          isSelected={fxoPorts === "0" ? true : null}
        />
        <QuestionButton
          onClick={handleTwoClick}
          buttonText={"2"}
          isSelected={fxoPorts === "2" ? true : null}
        />
        <QuestionButton
          onClick={handleFourClick}
          buttonText={"4"}
          isSelected={fxoPorts === "4" ? true : null}
        />
      </div>
    </div>
  );
};

export default FxoPortsQ;
