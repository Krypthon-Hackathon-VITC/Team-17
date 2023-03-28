import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import AuthAbi from "./abis/Auth.json";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [authContract, setAuthContract] = useState(null);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  const getAuthContract = async () => {
    const authProvider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = authProvider.getSigner();

    const authContract = new ethers.Contract(
      "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      AuthAbi.abi,
      signer
    );

    console.log(authContract);

    setAuthContract(authContract);
  };

  useEffect(() => {
    getAuthContract();
  }, []);

  const Register = async () => {
    const details = {
      name,
      phoneNumber,
      password,
      aadharNumber,
    };

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const account = accounts[0];

    console.log(account);

    if (account) {
      const isRegistered = await authContract.register(
        account,
        details.name,
        details.password,
        details.aadharNumber
      );

      console.log(isRegistered);
    }
  };

  const Login = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const account = accounts[0];

    console.log(account);

    if (account) {
      const isRegistered = await authContract.login(account, password);

      console.log(isRegistered);
    }

    navigate("/");
  };

  const isRegistered = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const account = accounts[0];

    console.log(account);

    if (account) {
      const isRegistered = await authContract.isRegistered(account);

      console.log(isRegistered);
    }
  };

  const checkIsUserLogged = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const account = accounts[0];

    console.log(account);

    if (account) {
      const isRegistered = await authContract.checkIsUserLogged(account);

      console.log(isRegistered);
    }
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
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
        {isLogin ? (
          <>
            <p>Welcome to your professional community</p>
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Aadhar Number"
              onChange={(e) => {
                setAadharNumber(e.target.value);
              }}
            />

            <button onClick={Login}>Register</button>
          </>
        ) : (
          <>
            <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
              <p>Welcome to your professional community</p>

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button onClick={Login}>Register</button>
            </div>
          </>
        )}

        <div
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Login" : "Register"}
        </div>
      </div>

      <div className="w-1/2 h-full"></div>
    </div>
  );
};

export default Auth;
