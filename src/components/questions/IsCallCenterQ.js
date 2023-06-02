import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";

const IsCallCenterQ = (props) => {

  const handleYesClick = () => {
    props.setIsCallCenter(true);
    props.setIsValidInput(true);
    console.log("yes clicked")
  };

  const handleNoClick = () => {
    props.setSkipNextQuestion(true);
    props.setIsCallCenter(false);
    props.setIsValidInput(true);
    console.log("no clicked")
  };

  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText question={"Do you need call center functionality?"} />
      <div className="flex flex-row gap-20 place-content-center">
        <QuestionButton
          onClick={handleYesClick}
          buttonText={"Yes"}
          isSelected={props.isCallCenter ? true : null}
        />
        <QuestionButton
          onClick={handleNoClick}
          buttonText={"No"}
          isSelected={props.isCallCenter === false ? true : null}
        />
      </div>
    </div>
  );
};

export default IsCallCenterQ;
