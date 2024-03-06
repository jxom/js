import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "airdropERC20" function.
 */
export type AirdropERC20Params = {
  tokenAddress: AbiParameterToPrimitiveType<{
    type: "address";
    name: "tokenAddress";
  }>;
  tokenOwner: AbiParameterToPrimitiveType<{
    type: "address";
    name: "tokenOwner";
  }>;
  contents: AbiParameterToPrimitiveType<{
    type: "tuple[]";
    name: "contents";
    components: [
      { type: "address"; name: "recipient" },
      { type: "uint256"; name: "amount" },
    ];
  }>;
};

/**
 * Calls the "airdropERC20" function on the contract.
 * @param options - The options for the "airdropERC20" function.
 * @returns A prepared transaction object.
 * @extension ERC20
 * @example
 * ```
 * import { airdropERC20 } from "thirdweb/extensions/erc20";
 *
 * const transaction = airdropERC20({
 *  tokenAddress: ...,
 *  tokenOwner: ...,
 *  contents: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function airdropERC20(
  options: BaseTransactionOptions<AirdropERC20Params>,
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x0670b2b3",
      [
        {
          type: "address",
          name: "tokenAddress",
        },
        {
          type: "address",
          name: "tokenOwner",
        },
        {
          type: "tuple[]",
          name: "contents",
          components: [
            {
              type: "address",
              name: "recipient",
            },
            {
              type: "uint256",
              name: "amount",
            },
          ],
        },
      ],
      [],
    ],
    params: [options.tokenAddress, options.tokenOwner, options.contents],
  });
}
