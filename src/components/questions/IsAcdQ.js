import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";

const IsAcdQ = (props) => {

  const handleYesClick = () => {
    props.setIsAcd(true);
    props.setIsValidInput(true);
    console.log("yes clicked")
  };

  const handleNoClick = () => {
    props.setIsAcd(false);
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
          isSelected={props.isAcd ? true : null}
        />
        <QuestionButton
          onClick={handleNoClick}
          buttonText={"No"}
          isSelected={props.isAcd === false ? true : null}
        />
      </div>
    </div>
  );
};

export default IsAcdQ;
