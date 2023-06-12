import { useEffect } from "react";
import NavButton from "../ui/NavButton";
import QuestionWrapper from "../wrapper/QuestionWrapper";

const Intro = ({ currentQuestionIndex, setCurrentQuestionIndex, setIsValidInput }) => {

  useEffect(() => {
    setIsValidInput(true);
  }, []);

  return (
    <QuestionWrapper>
      <div className="text-center mx-auto text-2xl md:text-4xl flex font-semibold">
        Epygi PBX Advisor
      </div>
      <div className="text-center mx-auto text-lg md:text-xl mt-2 flex dark:text-gray-400 text-gray-800 ">
        Figure out which Epygi PBX is the right choice for your project!
      </div>
    </QuestionWrapper>
  );
};

export default Intro;
