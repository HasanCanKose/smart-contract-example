import ContractForm from "./ContractForm";
import { useState, useEffect } from "react";
import logistic from "../../utils/logistic";
import web3 from "../../utils/web3";
import "./Contract.css";

const Contract = () => {
  const [owner, setOwner] = useState("");
  const [orderInfo, setOrderInfo] = useState({});
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [message, setMessage] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const owner = await logistic.methods.owner().call();
    setOwner(owner);
  };

  return (
    <div>
      <ContractForm owner={owner} />
    </div>
  );
};

export default Contract;
