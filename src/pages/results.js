import { useEffect, useState } from "react";
import AnswersTable from "@/components/tables/AnswersTable";
import Header from "@/components/ui/Header";
import { useRouter } from "next/router";
import calculatePBX from "@/utils/calculatePBX";
import Link from "next/link";
import Contact from "@/components/ui/Contact";

const Results = () => {
  const router = useRouter();
  const { query } = router;

  // Parse integer values from the URL query parameters
  const ipLines = parseInt(query.ipLines) || 0;
  const fxsPorts = parseInt(query.fxsPorts) || 0;
  const fxoPorts = parseInt(query.fxoPorts) || 0;
  const concurrentCalls = parseInt(query.concurrentCalls) || 0;
  const callRecording = parseInt(query.callRecording) || 0;

  // Parse boolean values from the URL query parameters
  const isCallCenter = query.isCallCenter === "true" || false;
  const callCenterAgents = parseInt(query.callCenterAgents) || 0;
  const isAcd = query.isAcd === "true" || false;

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

  const [needsGateway, setNeedsGateway] = useState(false);

  useEffect(() => {
    if ((fxoPorts > 0 || fxsPorts > 0) && ipLines > 200) {
      setNeedsGateway(true);
    }
  }, [pbxModel, ipLines]);

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
  };

  return (
    <>
      <Header></Header>
      <div className="flex max-w-6xl mx-auto mb-10 items-center ">
        <div className="text-5xl font-bold ml-10 text-gray-800 dark:text-gray-200">
          {pbxModel}
        </div>
        <div className=" mx-auto my-5 md:my-0 justify-center items-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Link
              type="button"
              href={"/datasheets/" + pbxModel + "-datasheet.pdf"}
              className="px-2 py-2 md:px-4 md:py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Datasheet
            </Link>
            <Link
              type="button"
              href={pbxLink(pbxModel)}
              className="px-2 py-2 md:px-4 md:py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border-t border rounded-r-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Website Link
            </Link>
          </div>
        </div>
        <Link
          href={"/"}
          onClick={""}
          className="px-2 py-2 md:px-4 md:py-2 text-xs sm:text-sm font-medium hidden md:flex text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Start Over
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mt-1 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </Link>
      </div>
      {needsGateway && (
        <div
          className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 max-w-5xl mx-auto text-center"
          role="alert"
        >
          <span className="font-medium ">Warning!</span> If you need more than
          200 IP Lines and also need to use FXS or FXO ports, you will need to
          supplement your solution with a QX Gateway.
        </div>
      )}

      <div className="flex mx-auto items-center max-w-6xl gap-20">
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
        <img
          src={`/img/${pbxModel}.png`}
          alt={pbxModel}
          className=" mr-20 lg:flex hidden max-w-[300px]"
        />
      </div>
      <Contact
        ipLines={ipLines}
        fxsPorts={fxsPorts}
        fxoPorts={fxoPorts}
        concurrentCalls={concurrentCalls}
        callRecording={callRecording}
        isCallCenter={isCallCenter}
        callCenterAgents={callCenterAgents}
        isAcd={isAcd}
        pbxModel={pbxModel}
      >
        {" "}
      </Contact>
    </>
  );
};

export default Results;
