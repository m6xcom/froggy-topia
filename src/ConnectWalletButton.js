import {
    ThirdwebProvider,
    ConnectButton,
  } from "thirdweb/react";
  import {
    createWallet,
    walletConnect,
  } from "thirdweb/wallets";
  
  const client = createThirdwebClient({
    clientId: "YOUR_CLIENT_ID",
  });
  
  const wallets = [
    createWallet("io.metamask"),
    walletConnect(),
    createWallet("com.trustwallet.app"),
  ];
  
  export default function connectWalletButton() {
    return (
      <ThirdwebProvider>
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={"dark"}
          connectModal={{
            size: "wide",
            title: "Choose your wallet",
            titleIcon:
              "https://i.ibb.co/MSqtNsv/logo-frog.png",
          }}
        />
      </ThirdwebProvider>
    );
  }
  