import NavButton from "../ui/NavButton";
import QuestionWrapper from "../wrapper/QuestionWrapper";

const Intro = ({ currentQuestionIndex, setCurrentQuestionIndex }) => {
  return (
    <QuestionWrapper>
      <div className="text-center mx-auto text-2xl md:text-4xl flex">
        Welcome to the Epygi Product Selector
      </div>
    </QuestionWrapper>
  );
};

export default Intro;
