import type { Chain } from "../src/types";
export default {
  "chain": "CVM",
  "chainId": 323,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.cosvm.net",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://cosvm.network",
  "name": "Cosvm Mainnet",
  "nativeCurrency": {
    "name": "Cosvm",
    "symbol": "CVM",
    "decimals": 18
  },
  "networkId": 323,
  "rpc": [
    "https://323.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.cosvm.net"
  ],
  "shortName": "cvm",
  "slug": "cosvm",
  "testnet": false
} as const satisfies Chain;