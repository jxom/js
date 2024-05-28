import type { Chain } from "../src/types";
export default {
  "chain": "$EL",
  "chainId": 99099,
  "explorers": [
    {
      "name": "eLiberty Testnet",
      "url": "https://testnet.eliberty.ngo",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://faucet.eliberty.ngo"
  ],
  "infoURL": "https://eliberty.ngo",
  "name": "eLiberty Testnet",
  "nativeCurrency": {
    "name": "eLiberty",
    "symbol": "$EL",
    "decimals": 18
  },
  "networkId": 99099,
  "rpc": [
    "https://99099.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-rpc.eliberty.ngo"
  ],
  "shortName": "ELt",
  "slip44": 1,
  "slug": "eliberty-testnet",
  "testnet": true
} as const satisfies Chain;