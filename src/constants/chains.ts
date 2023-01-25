const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${INFURA_KEY}`;
const POLYGON_RPC_URL = "https://matic-mainnet.chainstacklabs.com";

export const ethereumMainet = {
  id: "0x1",
  token: "ETH",
  label: "Ethereum Mainnet",
  rpcUrl: MAINNET_RPC_URL,
};

export const polygonMainnet = {
  id: "0x89",
  token: "MATIC",
  label: "Polygon",
  rpcUrl: POLYGON_RPC_URL,
};
