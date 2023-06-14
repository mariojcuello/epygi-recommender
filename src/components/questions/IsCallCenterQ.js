import React, { useEffect } from "react";

import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";
import SubQuestionText from "../ui/SubQuestionText";

const IsCallCenterQ = ({isCallCenter, setIsCallCenter, setIsValidInput, setSkipNextQuestion}) => {

  const checkInput = () => {
    if (isCallCenter === true || isCallCenter === false) {
      setIsValidInput(true);
    }
  }

  useEffect(() => {
    checkInput();
  }, [isCallCenter]);

  const handleYesClick = () => {
    setIsCallCenter(true);
    setIsValidInput(true);
    console.log("yes clicked")
  };

  const handleNoClick = () => {
    setSkipNextQuestion(true);
    setIsCallCenter(false);
    setIsValidInput(true);
    console.log("no clicked")
  };

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText question={"Do you need call center functionality?"} />
      <SubQuestionText subQuestion={"(Will there be call center agents and magagers that need to oversee them?)"} />
      <div className="flex flex-row gap-20 place-content-center mt-10">
        <QuestionButton
          onClick={handleYesClick}
          buttonText={"Yes"}
          isSelected={isCallCenter ? true : null}
        />
        <QuestionButton
          onClick={handleNoClick}
          buttonText={"No"}
          isSelected={isCallCenter === false ? true : null}
        />
      </div>
    </div>
  );
};

export default IsCallCenterQ;
