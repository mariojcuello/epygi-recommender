import { useRouter } from "next/router";

const AnswersTable = ({ ipLines, fxsPorts, fxoPorts, callCenterAgents, concurrentCalls, isAcd, isCallCenter, callRecording, pbxModel }) => {
  
  const QX50 = {
    ipLines: 8, fxsPorts: 4, fxoPorts: 4, concurrentCalls: 8, callRecording: 0, isCallCenter: false, callCenterAgents: 0, isAcd: false
  }

  
  const rowData = [ 
    { label: "Default IP Lines", default: ipLines, userPBX: QX50.ipLines },
    { label: "FXS Ports", default: fxsPorts, userPBX: QX50.fxsPorts },
    { label: "FXO Ports", default: fxoPorts, userPBX: QX50.ipLines },
    { label: "Concurrent Calls", default: concurrentCalls, userPBX: QX50.ipLines },
    { label: "Call Recording", default: callRecording, userPBX: QX50.ipLines },
    { label: "Call Center", default: isCallCenter ? "Yes" : "No" , userPBX: QX50.ipLines },
    { label: "Call Center Agents", default: callCenterAgents },
    { label: "Automatic Call Distribution", default: isAcd ? "Yes" : "No" , userPBX: QX50.ipLines},
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-xl ml-auto mr-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead>
        <tr className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Feature</th>
            <th className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Included in {pbxModel}</th>
            <th className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Your project</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-semibold">
              <th
                scope="row"
                className="px-5 py-2 font-md text-gray-900 whitespace-nowrap dark:text-white text-md"
              >
                {row.label}
              </th>
              <td className="py-2 text-center text-lg">{row.default}</td>
              <td className="py-2 text-center text-lg">{row.userPBX}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnswersTable;
