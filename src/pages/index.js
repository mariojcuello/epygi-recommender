import Header from "@/components/ui/Header";
import FXOPorts from "@/components/questions/FXOPorts";
import IpLines from "@/components/questions/IPLines";
import NavQuestions from "@/components/ui/NavQuestions";
import { useState } from "react";

export default function Home() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const[ipLines, setIpLines] = useState("")
  const[fxoPorts, setFxoPorts] = useState("")
  const[concurrentCalls, setConcurrentCalls] = useState("")
  const[callRecording, setCallRecording] = useState("")
  const[callCenter, setCallCenter] = useState("")
  const[callCenterAgents, setCallCenterAgents] = useState("")
  const[acd, setAcd] = useState("")
  
  console.log("IP Lines from Index: " + ipLines);

  const questions = [
    { id:0, question: "How many IP lines do you need?", component: <IpLines ipLines={ipLines} setIpLines={setIpLines}/> },
    { id:1, question: "How many FXO ports do you need?", component: <FXOPorts fxoPorts={fxoPorts} setFxoPorts={setFxoPorts}/> },
  ]

  return (
    <>
      <Header/>
      
      {questions[currentQuestionIndex].component}
      <NavQuestions currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex}/>
      
    </>
  );
}
