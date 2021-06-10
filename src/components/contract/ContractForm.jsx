import { useState, useEffect, useContext } from "react";
import ContractContext from "../../context/contract/contractContext";
import logistic from "../../utils/logistic";
import web3 from "../../utils/web3";

const ContractForm = ({ owner }) => {
  const contractContext = useContext(ContractContext);

  const { getContractInfo } = contractContext;

  const [contract, setContract] = useState({
    itemId: "",
    itemName: "",
    itemType: "",
    itemWeight: "",
  });

  const { itemId, itemName, itemType, itemWeight } = contract;
  const [message, setMessage] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  const onChange = (e) => {
    setContract({ ...contract, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting...");

    const ordered = await logistic.methods
      .orderIitem(itemId, itemName, itemType, itemWeight)
      .send({
        from: accounts[0],
      });

    console.log(ordered);

    setMessage("Done...");
    // setUniqueId(ordered);

    const contractInfo = await logistic.methods.package().call();
    getContractInfo(contractInfo);
  };

  const handleCarrier = async () => {
    const accounts = web3.eth.getAccounts();

    setMessage("Carrier waiting...");

    await logistic.methods.carrier1Report(uniqueId, "Hello").send({
      from: accounts[0],
    });

    setMessage("Carrier done");
  };
  return (
    <div className="contract-form">
      <div className="form-wrapper">
        <form onSubmit={handleOrder}>
          <label htmlFor="itemId">Product No</label>
          <input
            className="contract-form-input"
            id="itemId"
            name="itemId"
            placeholder="Product No..."
            type="text"
            value={itemId}
            onChange={onChange}
          />
          <label htmlFor="itemName">Product Name</label>
          <input
            className="contract-form-input"
            id="itemName"
            name="itemName"
            placeholder="Product Name..."
            type="text"
            value={itemName}
            onChange={onChange}
          />
          <label htmlFor="itemType">Product Type</label>
          <input
            className="contract-form-input"
            id="itemType"
            name="itemType"
            placeholder="Product Type..."
            type="text"
            value={itemType}
            onChange={onChange}
          />
          <label htmlFor="itemWeight">Product Weight</label>
          <input
            className="contract-form-input"
            id="itemWeight"
            name="itemWeight"
            placeholder="Product Weight..."
            type="text"
            value={itemWeight}
            onChange={onChange}
          />

          <button className="contract-form-button" type="submit">
            Click
          </button>
        </form>
      </div>
      <p>{message}</p>
      {/* <p>{JSON.stringify(packagee)}</p> */}
      <p>{uniqueId} </p>
      <hr />
      <button onClick={handleCarrier}>Carrier</button>
    </div>
  );
};

export default ContractForm;
