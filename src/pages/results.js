import ProductTable from "../components/tables/ProductTable";
import AnswersTable from "@/components/tables/AnswersTable";
import Header from "@/components/ui/Header";
import { useRouter } from "next/router";
import calculatePBX from "@/utils/calculatePBX";
import Link from "next/link";

const Results = () => {
  const router = useRouter();
  const { query } = router;

  const ipLines = parseInt(query.ipLines) || 0;
  const fxsPorts = parseInt(query.fxsPorts) || 0;
  const fxoPorts = parseInt(query.fxoPorts) || 0;
  const concurrentCalls = parseInt(query.concurrentCalls) || 0;
  const callRecording = parseInt(query.callRecording) || 0;
  const isCallCenter = query.isCallCenter || "";
  const callCenterAgents = parseInt(query.callCenterAgents) || 0;
  const isAcd = query.isAcd || "";

  const pbxModel = calculatePBX(
    ipLines,
    fxsPorts,
    fxoPorts,
    concurrentCalls,
    callRecording,
    isCallCenter,
    callCenterAgents,
    isAcd
  );

  const pbxLink = (pbxModel) => {
    if (pbxModel === "QX20") {
      return "https://www.epygi.com/qx-pbx/qx20/";
    } else if (pbxModel === "QX50") {
      return "https://www.epygi.com/qx-pbx/qx50/";
    } else if (pbxModel === "QX200") {
      return "https://www.epygi.com/qx-pbx/qx200/";
    } else if (pbxModel === "QX500") {
      return "https://www.epygi.com/qx-pbx/qx500/";
    } else if (pbxModel === "QX2000") {
      return "https://www.epygi.com/qx-pbx/qx2000/";
    } else if (pbxModel === "QX5000") {
      return "https://www.epygi.com/qx-pbx/qx5000/";
    } else if (pbxModel === "QX100") {
      return "https://www.epygi.com/qx-pbx/qx-pbx-100/";
    } else if (pbxModel === "QX60") {
      return "https://www.epygi.com/qx-pbx/qx-pbx-60/";
    }
  }

  
  return (
    <>
      <Header></Header>
      <div className="flex max-w-6xl mx-auto mb-10 items-baseline">
        <div className="text-5xl font-bold">{pbxModel}</div>
        <div className="mx-auto">
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <Link
              type="button"
              href={'/datasheets/' + pbxModel + "-datasheet.pdf"}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Datasheet
            </Link>
            <Link
              type="button"
              href={pbxLink(pbxModel)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border rounded-r-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Website Link
            </Link>
            
          </div>
        </div>
        <Link
          href={"/"}
          onClick={""}
          className="px-4 py-2 text-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Start Over
        </Link>
      </div>
      <div className="flex mx-auto items-center max-w-6xl">
        
        <AnswersTable
          ipLines={ipLines}
          fxsPorts={fxsPorts}
          fxoPorts={fxoPorts}
          concurrentCalls={concurrentCalls}
          callRecording={callRecording}
          isCallCenter={isCallCenter}
          callCenterAgents={callCenterAgents}
          isAcd={isAcd}
          pbxModel={pbxModel}
        ></AnswersTable>
        <img src={`/img/${pbxModel}.png`} alt={pbxModel} className="mx-auto" />
      </div>
    </>
  );
};

export default Results;
