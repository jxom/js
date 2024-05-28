import type { Chain } from "../src/types";
export default {
  "chain": "EUN",
  "chainId": 1984,
  "explorers": [
    {
      "name": "testnetexplorer",
      "url": "https://testnetexplorer.eurus.network",
      "standard": "none"
    }
  ],
  "faucets": [],
  "infoURL": "https://eurus.network",
  "name": "Eurus Testnet",
  "nativeCurrency": {
    "name": "Eurus",
    "symbol": "EUN",
    "decimals": 18
  },
  "networkId": 1984,
  "rpc": [
    "https://1984.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet.eurus.network"
  ],
  "shortName": "euntest",
  "slip44": 1,
  "slug": "eurus-testnet",
  "testnet": true
} as const satisfies Chain;