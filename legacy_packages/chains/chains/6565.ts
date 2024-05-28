import type { Chain } from "../src/types";
export default {
  "chain": "FOX",
  "chainId": 6565,
  "explorers": [
    {
      "name": "FOX Testnet Explorer",
      "url": "https://testnet.foxscan.app",
      "standard": "none"
    }
  ],
  "faucets": [
    "https://faucet.foxchain.app"
  ],
  "infoURL": "https://foxchain.app",
  "name": "Fox Testnet Network",
  "nativeCurrency": {
    "name": "FOX Native Token",
    "symbol": "tFOX",
    "decimals": 18
  },
  "networkId": 6565,
  "rpc": [
    "https://6565.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-testnet-v1.foxchain.app/",
    "https://rpc2-testnet-v1.foxchain.app/",
    "https://rpc3-testnet-v1.foxchain.app"
  ],
  "shortName": "fox",
  "slip44": 1,
  "slug": "fox-testnet-network",
  "testnet": true
} as const satisfies Chain;