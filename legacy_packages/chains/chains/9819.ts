import type { Chain } from "../src/types";
export default {
  "chain": "IMP",
  "chainId": 9819,
  "explorers": [
    {
      "name": "IMPERIUM Explorer",
      "url": "https://impscan.com",
      "standard": "none"
    }
  ],
  "faucets": [
    "https://faucet.imperiumchain.com/"
  ],
  "infoURL": "https://imperiumchain.com",
  "name": "IMPERIUM MAINNET",
  "nativeCurrency": {
    "name": "IMP",
    "symbol": "IMP",
    "decimals": 18
  },
  "networkId": 9819,
  "rpc": [
    "https://9819.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://data-aws-mainnet.imperiumchain.com",
    "https://data-aws2-mainnet.imperiumchain.com"
  ],
  "shortName": "IMP",
  "slug": "imperium",
  "testnet": false
} as const satisfies Chain;