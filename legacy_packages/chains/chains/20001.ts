import type { Chain } from "../src/types";
export default {
  "chain": "ETHW",
  "chainId": 20001,
  "explorers": [
    {
      "name": "CamelarkScan",
      "url": "https://scan.camelark.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://www.camelark.com",
  "name": "Camelark Mainnet",
  "nativeCurrency": {
    "name": "EthereumPoW",
    "symbol": "ETHW",
    "decimals": 18
  },
  "networkId": 20001,
  "rpc": [
    "https://20001.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet-http-rpc.camelark.com"
  ],
  "shortName": "Camelark",
  "slug": "camelark",
  "testnet": false
} as const satisfies Chain;