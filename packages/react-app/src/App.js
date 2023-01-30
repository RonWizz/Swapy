import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./styles";
import { usePools } from "./hooks";
// import { uniswapLogo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (

    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div class="header">
          <header className={styles.header}>
            <img
              // src={uniswapLogo}
              // alt="uniswap-logo"
              // className="w-16 h-16 object-contain"
            />
            <WalletButton />
        </header>
        </div>
        <div class="exchangeBox">
          <div class="exchangeBoxWrapper">

            <div className={styles.exchangeBoxWrapper}>
              <div className={styles.exchangeBox}>
                <div className="pink_gradient" />
                  <div className={styles.exchange}>
                    {account ? (
                      poolsLoading ? (
                        <Loader title="Loading pools, please wait!" />
                      ) : (
                        <Exchange pools={pools} />
                      )
                    ) : (
                        <Loader title="Please connect your wallet" />
                    )}
                  </div>
                <div className="blue_gradient" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
