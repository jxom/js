import type { Chain } from "../src/types";
export default {
  "chain": "prm",
  "chainId": 39656,
  "explorers": [
    {
      "name": "Primal Network",
      "url": "https://prmscan.org",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://primalnetwork.org",
  "name": "PRM Mainnet",
  "nativeCurrency": {
    "name": "Primal Network",
    "symbol": "PRM",
    "decimals": 18
  },
  "networkId": 39656,
  "rpc": [
    "https://39656.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet-rpc.prmscan.org"
  ],
  "shortName": "prm",
  "slug": "prm",
  "testnet": false
} as const satisfies Chain;