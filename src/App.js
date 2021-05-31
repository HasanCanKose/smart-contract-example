import { useState, useEffect } from "react";
import "./App.css";
import logistic from "./utils/logistic";
import web3 from "./utils/web3";

function App() {
  const [owner, setOwner] = useState("");
  const [orderInfo, setOrderInfo] = useState({});
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [message, setMessage] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const owner = await logistic.methods.owner().call();
    setOwner(owner);
  };

  const onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting...");

    const ordered = await logistic.methods.orderIitem(itemId, itemName).send({
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
      <input
        type="text"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <button onClick={onClick}>Click</button>
      <p>{message}</p>
      <p>{JSON.stringify(orderInfo)}</p>
      <p>{uniqueId} </p>
      <hr />
      <button onClick={handleCarrier}>Carrier</button>
    </div>
  );
}

export default App;
