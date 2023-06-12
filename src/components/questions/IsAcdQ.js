import { useEffect } from "react";

import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";

const IsAcdQ = ({isAcd, setIsAcd, setIsValidInput}) => {

  const checkInput = () => {
    if (isAcd === true || isAcd === false) {
      console.log("isAcd is not empty")
      setIsValidInput(true);
    }
  }

  useEffect(() => {
    checkInput();
  }, [isAcd]);

  const handleYesClick = () => {
    setIsAcd(true);
    setIsValidInput(true);
    console.log("yes clicked")
  };

  const handleNoClick = () => {
    setIsAcd(false);
    setIsValidInput(true);
    console.log("no clicked")
  };

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText question={"Do you need automatic call distribution?"} />
      <div className="flex flex-row gap-20 place-content-center">
        <QuestionButton
          onClick={handleYesClick}
          buttonText={"Yes"}
          isSelected={isAcd ? true : null}
        />
        <QuestionButton
          onClick={handleNoClick}
          buttonText={"No"}
          isSelected={isAcd === false ? true : null}
        />
      </div>
    </div>
  );
};

export default IsAcdQ;
