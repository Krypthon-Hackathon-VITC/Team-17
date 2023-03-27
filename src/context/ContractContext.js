import { createContext, useContext, useState } from "react";
import Web3 from "web3";
import {
  greeterContractAbi,
  greeterContractAddress,
  authContractAbi,
  authContractAddress,
} from "../utils/constants";

const initialState = {
  web3: null,
  account: null,
  greeterContract: null,
  authContract: null,
  balance: null,
  setAccountDetails: () => {},
};

const ContractContext = createContext(initialState);

const ContractProvider = ({ children }) => {
  const web3 = new Web3(window.ethereum || "http://localhost:8545");

  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const greeterContract = new web3.eth.Contract(
    greeterContractAbi,
    greeterContractAddress
  );

  const authContract = new web3.eth.Contract(
    authContractAbi,
    authContractAddress
  );

  const setAccountDetails = async () => {
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      alert("Please connect to Metamask");
      return;
    }
    const balance = await web3.eth.getBalance(accounts[0]);

    setBalance(balance);

    setAccount(accounts[0]);
  };

  return (
    <ContractContext.Provider
      value={{
        account,
        setAccountDetails,
        greeterContract,
        web3,
        balance,
        authContract,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

const useContractContext = () => {
  return useContext(ContractContext);
};

export { ContractProvider, useContractContext };
