import { useContractContext } from "./context/ContractContext";
import { useEffect } from "react";

const App = () => {
  const { account, setAccountDetails, balance, authContract } =
    useContractContext();
  console.log(account, balance);

  const register = async () => {
    const tx = await authContract.methods
      .register(account, "Geoffrey", "abc123", "1234567890")
      .send({
        from: account,
      });
    console.log(tx);
  };

  const login = async () => {
    const tx = await authContract.methods.login(account, "abc123").send({
      from: account,
    });
    console.log(tx);
  };

  const checkIsUserLoggedIn = async () => {
    const tx = await authContract.methods.checkIsUserLogged(account).call();
    console.log(tx);
  };

  const logout = async () => {
    const tx = await authContract.methods.logout(account).send({
      from: account,
    });
    console.log(tx);
  };

  useEffect(() => {
    setAccountDetails();
  }, []);

  return (
    <div className="">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={checkIsUserLoggedIn}>Check if logged in</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default App;
