import { useState, useEffect } from "react";
import logistic from "../../utils/logistic";
import web3 from "../../utils/web3";

const ContractForm = ({ owner }) => {
  const [orderInfo, setOrderInfo] = useState({});
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [message, setMessage] = useState("");
  const [uniqueId, setUniqueId] = useState("");

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

    const orderInfo = await logistic.methods.package().call();
    setOrderInfo(orderInfo);
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
    <div className="App">
      <p>{owner}</p>
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
            onChange={(e) => setItemId(e.target.value)}
          />
          <label htmlFor="itemName">Product Name</label>
          <input
            className="contract-form-input"
            id="itemName"
            name="itemName"
            placeholder="Product Name..."
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <label htmlFor="itemType">Product Type</label>
          <input
            className="contract-form-input"
            id="itemType"
            name="itemType"
            placeholder="Product Type..."
            type="text"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
          />
          <label htmlFor="itemWeight">Product Weight</label>
          <input
            className="contract-form-input"
            id="itemWeight"
            name="itemWeight"
            placeholder="Product Weight..."
            type="text"
            value={itemWeight}
            onChange={(e) => setItemWeight(e.target.value)}
          />

          <button className="contract-form-button" type="submit">
            Click
          </button>
        </form>
      </div>
      <p>{message}</p>
      <p>{JSON.stringify(orderInfo)}</p>
      <p>{uniqueId} </p>
      <hr />
      <button onClick={handleCarrier}>Carrier</button>
    </div>
  );
};

export default ContractForm;
