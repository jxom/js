import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "reveal" function.
 */
export type RevealParams = {
  identifier: AbiParameterToPrimitiveType<{
    type: "uint256";
    name: "identifier";
  }>;
  key: AbiParameterToPrimitiveType<{ type: "bytes"; name: "key" }>;
};

/**
 * Calls the "reveal" function on the contract.
 * @param options - The options for the "reveal" function.
 * @returns A prepared transaction object.
 * @extension ERC721
 * @example
 * ```
 * import { reveal } from "thirdweb/extensions/erc721";
 *
 * const transaction = reveal({
 *  identifier: ...,
 *  key: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function reveal(options: BaseTransactionOptions<RevealParams>) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0xce805642",
      [
        {
          type: "uint256",
          name: "identifier",
        },
        {
          type: "bytes",
          name: "key",
        },
      ],
      [
        {
          type: "string",
          name: "revealedURI",
        },
      ],
    ],
    params: [options.identifier, options.key],
  });
}
