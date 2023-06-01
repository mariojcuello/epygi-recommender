import Header from "@/components/ui/Header";

import IpLineQuestion from "@/components/questions/IpLineQuestion";
import IsFxoQuestion from "@/components/questions/IsFxoQuestion";
import FXOPorts from "@/components/questions/FXOPorts";
import NavQuestions from "@/components/ui/NavQuestions";
import { useState } from "react";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isValidInput, setIsValidInput] = useState(false);

  const [ipLines, setIpLines] = useState("");
  const [isFXO, setIsFXO] = useState(null);
  const [fxoPorts, setFxoPorts] = useState("");
  const [isFXS, setIsFXS] = useState(false);
  const [fxsPorts, setFxsPorts] = useState("");
  const [concurrentCalls, setConcurrentCalls] = useState("");
  const [callRecording, setCallRecording] = useState("");
  const [isCallCenter, setIsCallCenter] = useState("");
  const [callCenterAgents, setCallCenterAgents] = useState("");
  const [acd, setAcd] = useState("");

  console.log("IP Lines from Index: " + ipLines);

  const questions = [
    {
      id: 0,
      component: (
        <IpLineQuestion
          ipLines={ipLines}
          setIpLines={setIpLines}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
    {
      id: 1,
      component: (
        <IsFxoQuestion
          isFXO={isFXO}
          setFXO={setIsFXO}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
    {
      id: 2,
      component: (
        <FXOPorts
          fxoPorts={fxoPorts}
          setFxoPorts={setFxoPorts}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      {questions[currentQuestionIndex].component}
      <NavQuestions
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        isValidInput={isValidInput}
        setIsValidInput={setIsValidInput}
      />
    </>
  );
}
