import Header from "@/components/ui/Header";

import Intro from "@/components/questions/Intro";
import IpLineQ from "@/components/questions/IpLineQ";
import FxoPortsQ from "@/components/questions/FxoPortsQ";
import FxsPortsQ from "@/components/questions/FxsPortsQ";
import ConcurrentCallsQ from "@/components/questions/ConcurrentCallsQ";
import CallRecordingQ from "@/components/questions/CallRecordingQ";
import IsCallCenterQ from "@/components/questions/IsCallCenterQ";
import CallCenterAgentsQ from "@/components/questions/CallCenterAgentsQ";
import IsAcdQ from "@/components/questions/IsAcdQ";

import Nav from "@/components/ui/Nav";
import { useState } from "react";
import Reset from "@/components/ui/Reset";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [skipNextQuestion, setSkipNextQuestion] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);

  const [ipLines, setIpLines] = useState("");
  const [fxsPorts, setFxsPorts] = useState(null);
  const [fxoPorts, setFxoPorts] = useState(null);
  const [concurrentCalls, setConcurrentCalls] = useState("");
  const [callRecording, setCallRecording] = useState("");
  const [isCallCenter, setIsCallCenter] = useState(null);
  const [callCenterAgents, setCallCenterAgents] = useState("");
  const [isAcd, setIsAcd] = useState(null);

  const resetAllQuestions = () => {
    setCurrentQuestionIndex(0);
    setIpLines("");
    setFxsPorts("");
    setFxoPorts("");
    setConcurrentCalls("");
    setCallRecording("");
    setIsCallCenter(null);
    setCallCenterAgents("");
    setIsAcd(null);
  }
    

  const questions = [
    {
      id: 0,
      component: (
        <Intro
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
    {
      id: 0,
      component: (
        <IpLineQ
          ipLines={ipLines}
          setIpLines={setIpLines}
          setIsValidInput={setIsValidInput}
          currentQuestionIndex={currentQuestionIndex}
        />
      ),
    },
    {
      id: 1,
      component: (
        <FxsPortsQ
          fxsPorts={fxsPorts}
          setFxsPorts={setFxsPorts}
          setIsValidInput={setIsValidInput}
          currentQuestionIndex={currentQuestionIndex}
        />
      ),
    },
    {
      id: 2,
      component: (
        <FxoPortsQ
          fxoPorts={fxoPorts}
          setFxoPorts={setFxoPorts}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
    {
      id: 3,
      component: (
        <ConcurrentCallsQ
          concurrentCalls={concurrentCalls}
          setConcurrentCalls={setConcurrentCalls}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
    {
      id: 4,
      component: (
        <CallRecordingQ
          callRecording={callRecording}
          setCallRecording={setCallRecording}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
    {
      id: 5,
      component: (
        <IsCallCenterQ
          isCallCenter={isCallCenter}
          setIsCallCenter={setIsCallCenter}
          setIsValidInput={setIsValidInput}
          skipNextQuestion={skipNextQuestion}
          setSkipNextQuestion={setSkipNextQuestion}
        />
      ),
    },
    {
      id: 6,
      component: (
        <CallCenterAgentsQ
          callCenterAgents={callCenterAgents}
          setCallCenterAgents={setCallCenterAgents}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
    {
      id: 7,
      component: (
        <IsAcdQ
          isAcd={isAcd}
          setIsAcd={setIsAcd}
          setIsValidInput={setIsValidInput}
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      {questions[currentQuestionIndex].component}
      <Nav
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        isValidInput={isValidInput}
        setIsValidInput={setIsValidInput}
        skipNextQuestion={skipNextQuestion}
        setSkipNextQuestion={setSkipNextQuestion}
      />
      <Reset 
      currentQuestionIndex={currentQuestionIndex}
      setCurrentQuestionIndex={setCurrentQuestionIndex}
      setIpLines={setIpLines}
      setCallCenterAgents={setCallCenterAgents}
      setCallRecording={setCallRecording}
      setConcurrentCalls={setConcurrentCalls}
      setFxoPorts={setFxoPorts}
      setFxsPorts={setFxsPorts}
      setIsAcd={setIsAcd}
      setIsCallCenter={setIsCallCenter}
      />
    </>
  );
}
