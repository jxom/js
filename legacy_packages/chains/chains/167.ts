import type { Chain } from "../src/types";
export default {
  "chain": "ATOSHI",
  "chainId": 167,
  "explorers": [
    {
      "name": "atoshiscan",
      "url": "https://scan.atoverse.info",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://atoshi.org",
  "name": "Atoshi Testnet",
  "nativeCurrency": {
    "name": "ATOSHI",
    "symbol": "ATOS",
    "decimals": 18
  },
  "networkId": 167,
  "rpc": [
    "https://167.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://node.atoshi.io/"
  ],
  "shortName": "atoshi",
  "slip44": 1,
  "slug": "atoshi-testnet",
  "testnet": true
} as const satisfies Chain;