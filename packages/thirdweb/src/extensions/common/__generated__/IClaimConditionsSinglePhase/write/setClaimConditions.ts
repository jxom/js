import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "setClaimConditions" function.
 */
export type SetClaimConditionsParams = {
  phase: AbiParameterToPrimitiveType<{
    type: "tuple";
    name: "phase";
    components: [
      { type: "uint256"; name: "startTimestamp" },
      { type: "uint256"; name: "maxClaimableSupply" },
      { type: "uint256"; name: "supplyClaimed" },
      { type: "uint256"; name: "quantityLimitPerWallet" },
      { type: "bytes32"; name: "merkleRoot" },
      { type: "uint256"; name: "pricePerToken" },
      { type: "address"; name: "currency" },
      { type: "string"; name: "metadata" },
    ];
  }>;
  resetClaimEligibility: AbiParameterToPrimitiveType<{
    type: "bool";
    name: "resetClaimEligibility";
  }>;
};

/**
 * Calls the "setClaimConditions" function on the contract.
 * @param options - The options for the "setClaimConditions" function.
 * @returns A prepared transaction object.
 * @extension COMMON
 * @example
 * ```
 * import { setClaimConditions } from "thirdweb/extensions/common";
 *
 * const transaction = setClaimConditions({
 *  phase: ...,
 *  resetClaimEligibility: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setClaimConditions(
  options: BaseTransactionOptions<SetClaimConditionsParams>,
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x426cfaf3",
      [
        {
          type: "tuple",
          name: "phase",
          components: [
            {
              type: "uint256",
              name: "startTimestamp",
            },
            {
              type: "uint256",
              name: "maxClaimableSupply",
            },
            {
              type: "uint256",
              name: "supplyClaimed",
            },
            {
              type: "uint256",
              name: "quantityLimitPerWallet",
            },
            {
              type: "bytes32",
              name: "merkleRoot",
            },
            {
              type: "uint256",
              name: "pricePerToken",
            },
            {
              type: "address",
              name: "currency",
            },
            {
              type: "string",
              name: "metadata",
            },
          ],
        },
        {
          type: "bool",
          name: "resetClaimEligibility",
        },
      ],
      [],
    ],
    params: [options.phase, options.resetClaimEligibility],
  });
}
