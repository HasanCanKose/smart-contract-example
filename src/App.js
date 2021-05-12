import { useState, useEffect } from "react";
import "./App.css";
import lottery from "./utils/lottery";
import web3 from "./utils/web3";

function App() {
  const [owner, setOwner] = useState("");
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(lottery);
    fetchData();
  }, []);

  const fetchData = async () => {
    const owner = await lottery.methods.owner().call();
    setOwner(owner);
  };

  const onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting...");

    await lottery.methods.orderIitem(itemId, itemName).send({
      from: accounts[0],
    });

    setMessage("Done...");

    console.log(accounts[0]);
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
    </div>
  );
}

export default App;
