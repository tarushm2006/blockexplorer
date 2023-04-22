import { Alchemy,Network } from "alchemy-sdk";

const settings = {
    apiKey: process.env.ALCHEMY_KEY,
    network: Network.MATIC_MAINNET,
  };

  export const alchemy = new Alchemy(settings);

  