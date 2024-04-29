import { useEffect, useState } from "react";
import { connectWallet, switchNetwork, getCurrentWalletConnected, mintNFT } from "./utils/interact.jsx";

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  
 
  // useEffect( () => { //TODO: implement
  //   const {address, status} = getCurrentWalletConnected();
  //   setWallet(address)
  //     setStatus(status);
  //
  //   addWalletListener();
  // }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    await switchNetwork();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    await switchNetwork();
    const { status } = await mintNFT(url, name, description);
    setStatus(status);
  };

  return (
    <div className="Minter">
      {/*<button id="walletButton" onClick={connectWalletPressed}>*/}
      {/*  {walletAddress.length > 0 ? (*/}
      {/*    "Connected: " +*/}
      {/*    String(walletAddress).substring(0, 6) +*/}
      {/*    "..." +*/}
      {/*    String(walletAddress).substring(38)*/}
      {/*  ) : (*/}
      {/*    <span>Connect Wallet</span>*/}
      {/*  )}*/}
      {/*</button>*/}
        <w3m-button class="web3-button"/>

      <br></br>
      <h1 className="title" id="title">FroggyTopia</h1>
      <p className="subtitle">
        🐸 Simply add your asset's link, name, and description, then press "Mint."
      </p>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Link to asset"
          onChange={(event) => setURL(event.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p>
    </div>
  );
};

export default Minter;
