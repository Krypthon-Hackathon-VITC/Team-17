import { createContext, useContext, useState } from "react";
import Web3 from "web3";
import { greeterContractAbi, contractAddress } from "../utils/constants";

const initialState = {
  web3: null,
  account: null,
  greeterContract: null,
  setAccountDetails: () => {},
};

const ContractContext = createContext(initialState);

const ContractProvider = ({ children }) => {
  const web3 = new Web3(window.ethereum || "http://localhost:8545");

  const greeterContract = new web3.eth.Contract(
    greeterContractAbi,
    contractAddress
  );

  const [account, setAccount] = useState(null);

  const setAccountDetails = async () => {
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  return (
    <ContractContext.Provider
      value={{
        account,
        setAccountDetails,
        greeterContract,
        web3,
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
