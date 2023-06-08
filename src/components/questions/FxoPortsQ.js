import { useState, useEffect } from "react";
import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";

const FxoPortsQ = (props) => {

  const handleZeroClick = () => {
    props.setFxoPorts('0');
    props.setIsValidInput(true);
  };

  const handleTwoClick = () => {
    props.setFxoPorts('2');
    props.setIsValidInput(true);
  };

  const handleFourClick = () => {
    props.setFxoPorts('4');
    props.setIsValidInput(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText question={"How many FXO ports are needed?"} />
      <div className="flex flex-row gap-10 md:gap-20 place-content-center">
        <QuestionButton
          onClick={handleZeroClick}
          buttonText={"0"}
          isSelected={props.fxoPorts === '0' ? true : null}
        />
        <QuestionButton
          onClick={handleTwoClick}
          buttonText={"2"}
          isSelected={props.fxoPorts === '2' ? true : null}
        />
        <QuestionButton
          onClick={handleFourClick}
          buttonText={"4"}
          isSelected={props.fxoPorts === '4' ? true : null}
        />
      </div>
    </div>
  );
};

export default FxoPortsQ;
