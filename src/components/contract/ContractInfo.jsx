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
      console.log(contractInfo);
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
    <div className="contract-info">
      <h1>Order Information</h1>
      {contractInfo && (
        <div>
          <div>
            <p>
              <strong>Product ID: </strong>
              {contractInfo.itemId}
            </p>
          </div>
          <div>
            <p>
              <strong>Product Name: </strong>
              {contractInfo.itemName}
            </p>
          </div>
          <div>
            <p>
              <strong>Product Type: </strong>
              {contractInfo.itemType}
            </p>
          </div>
          <div>
            <p>
              <strong>Product Weight: </strong>
              {contractInfo.itemWeight}
            </p>
          </div>
          <div>
            <p>
              <strong>Transit Status: </strong>
              {contractInfo.transitStatus}
            </p>
          </div>
          <div>
            <p>
              <strong>Order Date: </strong>
              {time}
            </p>
          </div>
          <div>
            <p>
              <strong>Customer: </strong>
              {contractInfo.customer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractInfo;
