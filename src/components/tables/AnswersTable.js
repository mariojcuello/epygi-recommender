import { useRouter } from "next/router";

const AnswersTable = ({ ipLines, fxsPorts, fxoPorts, callCenterAgents, concurrentCalls, isAcd, isCallCenter, callRecording, pbxModel }) => {
  const defaultValues = {
    QX20: {
      ipLines: { value: 12, unit: "" },
      maxIpLines: { value: 32, unit: "" },
      fxsPorts: { value: 0, unit: "" },
      fxoPorts: { value: 0, unit: "" },
      concurrentCalls: { value: 10, unit: "" },
      callRecording: { value: 10, unit: "" },
      isCallCenter: { value: "-", unit: "" },
      callCenterAgents: { value: "-", unit: "" },
      isAcd: { value: "-", unit: "" }
    },
    QX50: {
      ipLines: { value: 16, unit: "" },
      maxIpLines: { value: 48, unit: "" },
      fxsPorts: { value: 0, unit: "" },
      fxoPorts: { value: 0, unit: "" },
      concurrentCalls: { value: 16, unit: "" },
      callRecording: { value: 12, unit: "" },
      isCallCenter: { value: "Yes", unit: "" },
      callCenterAgents: { value: 30, unit: "" },
      isAcd: { value: "Yes", unit: "" }
    },
    QX60: {
      ipLines: { value: 24, unit: "" },
      maxIpLines: { value: 64, unit: "" },
      fxsPorts: { value: 0, unit: "" },
      fxoPorts: { value: 0, unit: "" },
      concurrentCalls: { value: 16, unit: "" },
      callRecording: { value: 12, unit: "" },
      isCallCenter: { value: "Yes", unit: "" },
      callCenterAgents: { value: 30, unit: "" },
      isAcd: { value: "Yes", unit: "" }
    },
    QX100: {
      ipLines: { value: 32, unit: "" },
      maxIpLines: { value: 128, unit: "" },
      fxsPorts: { value: 0, unit: "" },
      fxoPorts: { value: 0, unit: "" },
      concurrentCalls: { value: 64, unit: "" },
      callRecording: { value: 32, unit: "" },
      isCallCenter: { value: "Yes", unit: "" },
      callCenterAgents: { value: 30, unit: "" },
      isAcd: { value: "Yes", unit: "" }
    },
    QX200: {
      ipLines: { value: 24, unit: "" },
      maxIpLines: { value: 200, unit: "" },
      fxsPorts: { value: 0, unit: "" },
      fxoPorts: { value: 0, unit: "" },
      concurrentCalls: { value: 64, unit: "" },
      callRecording: { value: 32, unit: "" },
      isCallCenter: { value: "-", unit: "" },
      callCenterAgents: { value: 30, unit: "" },
      isAcd: { value: "Yes", unit: "" }
    },
    QX500: {
      ipLines: { value: 100, unit: "" },
      maxIpLines: { value: 500, unit: "" },
      fxsPorts: { value: 0, unit: "" },
      fxoPorts: { value: 0, unit: "" },
      concurrentCalls: { value: 80, unit: "" },
      callRecording: { value: 48, unit: "" },
      isCallCenter: { value: "-", unit: "" },
      callCenterAgents: { value: 48, unit: "" },
      isAcd: { value: "Yes", unit: "" }
    }
  };

  const rowData = [
    { label: "Default IP Lines", userPBX: "-", default: defaultValues[pbxModel].ipLines },
    { label: "Max IP Lines", userPBX: ipLines, default: defaultValues[pbxModel].maxIpLines },
    { label: "FXS Ports", userPBX: fxsPorts, default: defaultValues[pbxModel].fxsPorts },
    { label: "FXO Ports", userPBX: fxoPorts, default: defaultValues[pbxModel].fxoPorts },
    { label: "Default Concurrent Calls", userPBX: "-", default: defaultValues[pbxModel].concurrentCalls },
    { label: "Max Concurrent Calls", userPBX: concurrentCalls, default: defaultValues[pbxModel].concurrentCalls },
    { label: "Max Concurrent Call Recording", userPBX: callRecording, default: defaultValues[pbxModel].callRecording },
    { label: "Call Center", userPBX: isCallCenter ? "Yes" : "No", default: defaultValues[pbxModel].isCallCenter },
    { label: "Call Center Agents", userPBX: callCenterAgents, default: defaultValues[pbxModel].callCenterAgents },
    { label: "Automatic Call Distribution", userPBX: isAcd ? "Yes" : "No", default: defaultValues[pbxModel].isAcd },
  ];

  return (
    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg mx-10 my-10">
      <table className="w-full text-sm  text-gray-500 dark:text-gray-400 ">
        <thead>
          <tr className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th className="px-5 py-3 font-medium text-left text-gray-900 whitespace-nowrap dark:text-white">Feature</th>
            <th className="px-5 py-3 text-lg font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">{pbxModel}</th>
            <th className="px-5 py-3 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">Your project</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-semibold">
              <th
                scope="row"
                className="px-5 py-2 font-md text-left text-gray-900 whitespace-nowrap dark:text-white text-md"
              >
                {row.label}
              </th>
              <td className="py-2 text-center text-lg">
                {row.default.value} {row.default.unit}
              </td>
              <td className="py-2 text-center text-lg">{row.userPBX}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnswersTable;
