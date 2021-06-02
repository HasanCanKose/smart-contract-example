import { useContext, useEffect, useState } from "react";
import ContractContext from "../../context/contract/contractContext";

const ContractInfo = () => {
  const contractContext = useContext(ContractContext);
  const { contractInfo } = contractContext;

  const [time, setTime] = useState(null);

  useEffect(() => {
    if (contractInfo) {
      var date = new Date().getTime();
      setTime(currentTime(date));
    }
  }, [contractInfo]);

  const currentTime = (currTime) => {
    var options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(currTime).toLocaleDateString("tr-TR", options);
  };
  return (
    <div>
      <p>{JSON.stringify(contractInfo)}</p>
      <p>{contractInfo && contractInfo.customer}</p>
      <p>{contractInfo && time}</p>
      <p>{contractInfo && contractInfo.orderTime}</p>
      asdasd
    </div>
  );
};

export default ContractInfo;
