import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Product from "./components/Product";
import AuthAbi from "./abis/Auth.json";

// ABIs
import Dappazon from "./abis/Dappazon.json";

// Config
import config from "./config.json";
import { useNavigate } from "react-router-dom";

function App() {
  const [provider, setProvider] = useState(null);
  const [dappazon, setDappazon] = useState(null);

  const [account, setAccount] = useState(null);

  const [rabi, setrabi] = useState(null);
  const [kharif, setkharif] = useState(null);
  const [fruitVeg, setfruitVeg] = useState(null);
  const [authContract, setAuthContract] = useState(null);

  const [item, setItem] = useState({});
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const togglePop = (item) => {
    setItem(item);
    toggle ? setToggle(false) : setToggle(true);
  };

  const getAuthContract = async () => {
    const authProvider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = authProvider.getSigner();

    const authContract = new ethers.Contract(
      "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      AuthAbi.abi,
      signer
    );

    console.log(authContract);

    setAuthContract(authContract);
  };

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();
    console.log(network);
    console.log(provider, Dappazon);
    const dappazon = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      Dappazon.abi,
      provider
    );
    setDappazon(dappazon);
    const items = [];
    for (var i = 0; i < 9; i++) {
      const item = await dappazon.items(i + 1);
      items.push(item);
    }
    console.log(items);

    const rabi = items.filter((item) => item.category === "rabi");
    const kharif = items.filter((item) => item.category === "kharif");
    const fruitVeg = items.filter(
      (item) => item.category === "fruits and vegetables"
    );

    setrabi(rabi);
    setkharif(kharif);
    setfruitVeg(fruitVeg);
  };

  const logout = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const account = accounts[0];

    console.log(account);

    if (account) {
      const isRegistered = await authContract.logout(account);

      console.log(isRegistered);

      navigate("/auth");
    }
  };

  useEffect(() => {
    loadBlockchainData();
    getAuthContract();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} logout={logout} />

      <h2>कृषिAAN Best Sellers</h2>

      {rabi && kharif && fruitVeg && (
        <>
          <Section
            title={"Kharif Crops"}
            items={kharif}
            togglePop={togglePop}
          />
          <Section title={"Rabi Crops"} items={rabi} togglePop={togglePop} />
          <Section
            title={"Fruits and Vegetable Set"}
            items={fruitVeg}
            togglePop={togglePop}
          />
        </>
      )}

      {toggle && (
        <Product
          item={item}
          provider={provider}
          account={account}
          dappazon={dappazon}
          togglePop={togglePop}
        />
      )}
    </div>
  );
}

export default App;
