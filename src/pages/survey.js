import Header from "@/components/ui/Header";
import { useState } from "react";
import Link from "next/link";
import SurveyQuestionBlockWrapper from "@/components/wrapper/SurveyQuestionBlockWrapper";
import SurveyQuestionWrapper from "@/components/wrapper/SurveyQuestionWrapper";

const Survey = () => {
  const [ipLines, setIpLines] = useState("");
  const [fxsPorts, setFxsPorts] = useState("");
  const [fxoPorts, setFxoPorts] = useState("");
  const [concurrentCalls, setConcurrentCalls] = useState("");
  const [callRecording, setCallRecording] = useState("");
  const [isCallCenter, setIsCallCenter] = useState(null);
  const [callCenterAgents, setCallCenterAgents] = useState("");
  const [isAcd, setIsAcd] = useState(null);
  const [audioConference, setAudioConference] = useState("");
  const [videoConference, setVideoConference] = useState("");
  const [eQall, setEQall] = useState("");

  const handleIpLinesChange = (e) => {
    setIpLines(e.target.value);
  };

  const handleFxsPortsChange = (e) => {
    setFxsPorts(e.target.value);
  };

  const handleFxoPortsChange = (e) => {
    setFxoPorts(e.target.value);
  };

  const handleConcurrentCallsChange = (e) => {
    setConcurrentCalls(e.target.value);
  };

  const handleCallRecordingChange = (e) => {
    setCallRecording(e.target.value);
  };

  const handleIsCallCenterChange = (e) => {
    setIsCallCenter(e.target.checked);
  };

  const handleCallCenterAgentsChange = (e) => {
    setCallCenterAgents(e.target.value);
  };

  const handleIsAcdChange = (e) => {
    setIsAcd(e.target.checked);
  };

  const handleAudioConferenceChange = (e) => {
    setAudioConference(e.target.value);
  };

  const handleVideoConferenceChange = (e) => {
    setVideoConference(e.target.value);
  };

  return (
    <>
      <Header></Header>
      <div className="max-w-lg mx-auto mt-10">
        <SurveyQuestionBlockWrapper>
          <SurveyQuestionWrapper>
            <input
              name="maxIpLines"
              id="maxIpLines"
              value={ipLines}
              onChange={handleIpLinesChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="maxIpLines"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Number of IP Lines
            </label>
          </SurveyQuestionWrapper>
          <SurveyQuestionWrapper>
            <input
              name="concurrentCalls"
              id="concurrentCalls"
              value={concurrentCalls}
              onChange={handleConcurrentCallsChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="concurrentCalls"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Number of Concurrent Calls
            </label>
          </SurveyQuestionWrapper>
        </SurveyQuestionBlockWrapper>
        <SurveyQuestionBlockWrapper>
          <SurveyQuestionWrapper>
            <input
              name="fxsPorts"
              id="fxsPorts"
              value={fxsPorts}
              onChange={handleFxsPortsChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="fxsPorts"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              FXS Ports
            </label>
          </SurveyQuestionWrapper>
          <SurveyQuestionWrapper>
            <input
              name="fxoPorts"
              id="fxoPorts"
              value={fxoPorts}
              onChange={handleFxoPortsChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="fxoPorts"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              FXO Ports
            </label>
          </SurveyQuestionWrapper>
        </SurveyQuestionBlockWrapper>
        <SurveyQuestionBlockWrapper>
          <SurveyQuestionWrapper>
            <input
              name="audioConference"
              id="audioConference"
              value={audioConference}
              onChange={handleAudioConferenceChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="audioConference"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Audio Conferencing
            </label>
          </SurveyQuestionWrapper>
          <SurveyQuestionWrapper>
            <input
              type="text"
              name="videoConference"
              id="videoConference"
              value={videoConference}
              onChange={handleVideoConferenceChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="videoConference"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Video Conferencing
            </label>
          </SurveyQuestionWrapper>
        </SurveyQuestionBlockWrapper>
        <SurveyQuestionBlockWrapper>
          <SurveyQuestionWrapper>
            <input
              name="callRecordingPorts"
              id="callRecordingPorts"
              value={callRecording}
              onChange={handleCallRecordingChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="callRecordingPorts"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Call Recording Ports
            </label>
          </SurveyQuestionWrapper>
          <SurveyQuestionWrapper>
            <input
              type="text"
              name="callCenterAgents"
              id="callCenterAgents"
              value={callCenterAgents}
              onChange={handleCallCenterAgentsChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="callCenterAgents"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Call Center Agents
            </label>
          </SurveyQuestionWrapper>
        </SurveyQuestionBlockWrapper>
        <SurveyQuestionBlockWrapper>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked={isCallCenter} onChange={handleIsCallCenterChange} />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              EAC/ACD (Call Center)
            </span>
          </label>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked={isAcd} onChange={handleIsAcdChange} />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Automatic Dialer
            </span>
          </label>
        </SurveyQuestionBlockWrapper>
        <div className="mt-10">
          {" "}
          <Link
            href={`/results/?ipLines=${ipLines}&fxsPorts=${fxsPorts}&fxoPorts=${fxoPorts}&concurrentCalls=${concurrentCalls}&callRecording=${callRecording}&isCallCenter=${isCallCenter}&callCenterAgents=${callCenterAgents}&isAcd=${isAcd}`}
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg text-xl py-2 px-4 mt-5 text-center"
          >
            See Results
          </Link>
        </div>
      </div>
    </>
  );
};

export default Survey;
