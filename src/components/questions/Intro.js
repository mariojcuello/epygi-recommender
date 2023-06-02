import NavButton from "../ui/NavButton";
import QuestionWrapper from "../wrapper/QuestionWrapper";

const Intro = ({currentQuestionIndex, setCurrentQuestionIndex}) => {
  return (
    <QuestionWrapper>
      <div className="text-center mx-auto text-3xl flex">
        Welcome to the Epygi Product Selector
      </div>
      <button text={"Start"} onClick={() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }} />
    </QuestionWrapper>
  );
};

export default Intro;
