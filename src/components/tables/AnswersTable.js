import { useRouter } from "next/router";

const AnswersTable = ({ ipLines, fxsPorts, fxoPorts, callCenterAgents, concurrentCalls, isAcd, isCallCenter, callRecording }) => {
  const rowData = [ 
    { label: "Default IP Lines", value: ipLines },
    { label: "FXS Ports", value: fxsPorts },
    { label: "FXO Ports", value: fxoPorts },
    { label: "Concurrent Calls", value: concurrentCalls },
    { label: "Call Recording", value: callRecording },
    { label: "Call Center", value: isCallCenter },
    { label: "Call Center Agents", value: callCenterAgents },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-xs">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row.label}
              </th>
              <td className="px-4 py-3">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnswersTable;
