import ProductTable from "../components/tables/ProductTable";
import AnswersTable from "@/components/tables/AnswersTable";
import Header from "@/components/ui/Header";
import { useRouter } from "next/router";

const Results = () => {
  const router = useRouter();
  const { query } = router;

  const ipLines = query.ipLines || "";
  const fxsPorts = query.fxsPorts || "";
  const fxoPorts = query.fxoPorts || "";
  const concurrentCalls = query.concurrentCalls || "";
  const callRecording = query.callRecording || "";
  const isCallCenter = query.isCallCenter || "";
  const callCenterAgents = query.callCenterAgents || "";
  const isAcd = query.isAcd || "";

  return (
    <>
      <Header></Header>
      <AnswersTable
        ipLines={ipLines}
        fxsPorts={fxsPorts}
        fxoPorts={fxoPorts}
        concurrentCalls={concurrentCalls}
        callRecording={callRecording}
        isCallCenter={isCallCenter}
        callCenterAgents={callCenterAgents}
        isAcd={isAcd}
      ></AnswersTable>
    </>
  );
};

export default Results;
