import type { Chain } from "../src/types";
export default {
  "chain": "XDC",
  "chainId": 51,
  "explorers": [
    {
      "name": "xdcscan",
      "url": "https://apothem.xinfinscan.com",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmPzVFs16GwaD8LAcGFLCNXzEK8BHFKNXeM3nmBpnq9xy3",
        "width": 512,
        "height": 512,
        "format": "png"
      }
    },
    {
      "name": "blocksscan",
      "url": "https://apothem.blocksscan.io",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmPzVFs16GwaD8LAcGFLCNXzEK8BHFKNXeM3nmBpnq9xy3",
        "width": 512,
        "height": 512,
        "format": "png"
      }
    }
  ],
  "faucets": [
    "https://faucet.apothem.network"
  ],
  "features": [],
  "infoURL": "https://xinfin.org",
  "name": "XDC Apothem Network",
  "nativeCurrency": {
    "name": "XinFin",
    "symbol": "TXDC",
    "decimals": 18
  },
  "networkId": 51,
  "redFlags": [],
  "rpc": [
    "https://51.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://apothem.xdcrpc.com",
    "https://rpc.apothem.network",
    "https://erpc.apothem.network"
  ],
  "shortName": "txdc",
  "slug": "xdc-apothem-network",
  "testnet": false
} as const satisfies Chain;