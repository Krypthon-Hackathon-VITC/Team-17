import "./App.css";
import Web3 from "web3";
import { contractAbi, contractAddress } from "./utils/constants";
import { useEffect, useState } from "react";

const web3 = new Web3(window.ethereum);
const greeterContract = new web3.eth.Contract(contractAbi, contractAddress);

const App = () => {
  const [newGreetings, setNewGreetings] = useState("");
  const [greetings, setGreetings] = useState("");

  useEffect(
    () => async () => {
      const greetMsg = await greetMe();
      setGreetings(greetMsg);
    },
    []
  );

  const greetMe = async () => {
    const greetMsg = await greeterContract.methods.greet().call();
    return greetMsg;
  };

  const updateGreets = async () => {
    const greetMsg = await greeterContract.methods
      .setGreeting(newGreetings)
      .send({ from: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266" });
    setGreetings(await greetMe());
  };

  return (
    <div className="App">
      <button className="read" onClick={() => greetMe()}>
        Greet me!
      </button>
      <h2>
        Current Greetings:{" "}
        <span style={{ color: "blueviolet" }}> {greetings}</span>
      </h2>
      <div>
        <input
          placeholder="New greetings"
          type="text"
          value={newGreetings}
          onChange={(e) => setNewGreetings(e.target.value)}
        />
        <button onClick={() => updateGreets()}>Update Greetings</button>
      </div>
    </div>
  );
};

export default App;
