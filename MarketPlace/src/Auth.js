import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import AuthAbi from "./abis/Auth.json";
import { useNavigate } from "react-router-dom";
import './styles/auth.css'
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
      "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
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
    <div className="main-auth-div">
      <div className="main-div">
        {isLogin ? (
          <div className="sec-div">
           <p className='auth-p' style={{"fontSize":"2rem","fontWeight":"bold"}}>Join Our Platform</p>
            <input
              type="text"
              placeholder="Phone Number"
              className='l-auth-ip'
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className='l-auth-ip'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Name"
              className='l-auth-ip'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Aadhar Number"
              className='l-auth-ip'
              onChange={(e) => {
                setAadharNumber(e.target.value);
              }}
            />

            <button className="l-sub-btn" onClick={Register}>Register</button>
            <div className="div-l-reg"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Existing User?" : "Don't have an account?"}
        </div>
          </div>
        ) : (
          <>
            <div className="main-div">
              <h1 className="log-head">Login</h1>
              <p className='auth-p'>Enter the password associated with your metamask account.</p>

              <input
                type="password"
                placeholder="Password"
                className='l-auth-ip'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button className="l-sub-btn" onClick={Login}>Register</button>
              <div className="div-l-reg"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Existing User?" : "Don't have an account?"}
        </div>
            </div>
          </>
        )}
        </div>
        <img className='auth-image' src="LoginImage.jpg"></img>
    </div>
  );
};

export default Auth;
