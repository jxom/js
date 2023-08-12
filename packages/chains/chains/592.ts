import type { Chain } from "../src/types";
export default {
  "name": "Astar",
  "chain": "ASTR",
  "rpc": [
    "https://astar.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://evm.astar.network",
    "https://rpc.astar.network:8545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Astar",
    "symbol": "ASTR",
    "decimals": 18
  },
  "infoURL": "https://astar.network/",
  "shortName": "astr",
  "chainId": 592,
  "networkId": 592,
  "icon": {
    "url": "ipfs://Qmdvmx3p6gXBCLUMU1qivscaTNkT6h3URdhUTZCHLwKudg",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout.com/astar",
      "icon": {
        "url": "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
        "width": 551,
        "height": 540,
        "format": "png"
      },
      "standard": "EIP3091"
    },
    {
      "name": "subscan",
      "url": "https://astar.subscan.io",
      "standard": "none",
      "icon": {
        "url": "ipfs://Qma2GfW5nQHuA7nGqdEfwaXPL63G9oTwRTQKaGTfjNtM2W",
        "width": 400,
        "height": 400,
        "format": "png"
      }
    }
  ],
  "testnet": false,
  "slug": "astar"
} as const satisfies Chain;