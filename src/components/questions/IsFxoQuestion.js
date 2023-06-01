import { useState, useEffect } from "react";
import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";

const IsFxoQuestion = (props) => {
  const handleYesClick = () => {
    props.setFXO(true);
    props.setIsValidInput(true);
  };

  const handleNoClick = () => {
    props.setFXO(false);
    props.setIsValidInput(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText question={"Does the unit need FXO ports?"} />
      <div className="flex flex-row gap-20 place-content-center">
        <QuestionButton
          onClick={handleYesClick}
          buttonText={"Yes"}
          isSelected={props.isFXO ? true : null}
        />
        <QuestionButton
          onClick={handleNoClick}
          buttonText={"No"}
          isSelected={props.isFXO ? false : props.isFXO === false ? true : null}
        />
      </div>
    </div>
  );
};

export default IsFxoQuestion;
