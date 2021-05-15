import { useState, useEffect } from "react";
import "./App.css";
import lottery from "./utils/lottery";
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
    const owner = await lottery.methods.owner().call();
    setOwner(owner);
  };

  const onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting...");

    const ordered = await lottery.methods.orderIitem(itemId, itemName).send({
      from: accounts[0],
    });

    setMessage("Done...");
    setUniqueId(ordered.blockHash);

    const orderInfo = await lottery.methods.package().call();
    setOrderInfo(orderInfo);
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
    </div>
  );
}

export default App;
