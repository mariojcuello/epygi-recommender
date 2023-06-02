import QuestionButton from "@/components/ui/QuestionButton";
import QuestionText from "../ui/QuestionText";

const FxsPortsQ = (props) => {

  const handleZeroClick = () => {
    props.setFxsPorts('0');
    props.setIsValidInput(true);
  };

  const handleTwoClick = () => {
    props.setFxsPorts('2');
    props.setIsValidInput(true);
  };


  return (
    <div className="max-w-2xl mx-auto">
      <QuestionText question={"How many FXS ports are needed?"} />
      <div className="flex flex-row gap-20 place-content-center">
        <QuestionButton
          onClick={handleZeroClick}
          buttonText={"0"}
          isSelected={props.fxsPorts === '0' ? true : null}
        />
        <QuestionButton
          onClick={handleTwoClick}
          buttonText={"2"}
          isSelected={props.fxsPorts === '2' ? true : null}
        />
      </div>
    </div>
  );
};

export default FxsPortsQ;
