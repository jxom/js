import type { Chain } from "../src/types";
export default {
  "chain": "ETH",
  "chainId": 4460,
  "explorers": [
    {
      "name": "basescout",
      "url": "https://explorerl2new-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "name": "Orderly Sepolia Testnet",
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 4460,
  "rpc": [
    "https://4460.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://l2-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz"
  ],
  "shortName": "orderlyl2",
  "slip44": 1,
  "slug": "orderly-sepolia-testnet",
  "testnet": true
} as const satisfies Chain;