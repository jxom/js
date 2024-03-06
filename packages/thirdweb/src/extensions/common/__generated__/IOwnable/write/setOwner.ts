import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "setOwner" function.
 */
export type SetOwnerParams = {
  newOwner: AbiParameterToPrimitiveType<{ type: "address"; name: "_newOwner" }>;
};

/**
 * Calls the "setOwner" function on the contract.
 * @param options - The options for the "setOwner" function.
 * @returns A prepared transaction object.
 * @extension COMMON
 * @example
 * ```
 * import { setOwner } from "thirdweb/extensions/common";
 *
 * const transaction = setOwner({
 *  newOwner: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setOwner(options: BaseTransactionOptions<SetOwnerParams>) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x13af4035",
      [
        {
          type: "address",
          name: "_newOwner",
        },
      ],
      [],
    ],
    params: [options.newOwner],
  });
}
