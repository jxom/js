import type { BaseTransactionOptions } from "../../../transaction/types.js";
import { fetchTokenMetadata } from "../../../utils/nft/fetchTokenMetadata.js";
import { parseNFT, type NFT } from "../../../utils/nft/parseNft.js";
import { uri, type UriParams } from "../__generated__/IERC1155/read/uri.js";
import { totalSupply } from "../__generated__/IERC1155/read/totalSupply.js";

/**
 * Parameters for getting an NFT.
 */
export type GetNFTParams = UriParams;

/**
 * Retrieves information about a specific ERC1155 non-fungible token (NFT).
 * @param options - The options for retrieving the NFT.
 * @returns A promise that resolves to the NFT object.
 * @extension ERC1155
 * @example
 * ```ts
 * import { getNFT } from "thirdweb/extensions/erc1155";
 * const nft = await getNFT({
 *  contract,
 *  tokenId: 1n,
 * });
 * ```
 */
export async function getNFT(
  options: BaseTransactionOptions<GetNFTParams>,
): Promise<NFT> {
  const [tokenUri, supply] = await Promise.all([
    uri(options),
    totalSupply(options),
  ]);
  return parseNFT(
    await fetchTokenMetadata({
      client: options.contract.client,
      tokenId: options.id,
      tokenUri,
    }).catch(() => ({
      id: options.id,
      type: "ERC1155",
      uri: tokenUri,
    })),
    {
      tokenId: options.id,
      tokenUri,
      type: "ERC1155",
      owner: null,
      supply,
    },
  );
}
