import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xB88396bbF354ADD490B89A097Ec85203e8D2Ea85";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/hc1JpQv90AxeZOhJw0UW6RZOMqQH8T5T",
  },
};
