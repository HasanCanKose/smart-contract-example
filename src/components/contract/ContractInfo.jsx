import { useContext } from "react";
import ContractContext from "../../context/contract/contractContext";

const ContractInfo = () => {
  const contractContext = useContext(ContractContext);
  const { contractInfo } = contractContext;
  return (
    <div>
      <p>{JSON.stringify(contractInfo)}</p>
      <p>{contractInfo && contractInfo.customer}</p>
    </div>
  );
};

export default ContractInfo;
