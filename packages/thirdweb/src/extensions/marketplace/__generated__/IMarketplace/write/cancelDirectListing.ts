import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "cancelDirectListing" function.
 */
export type CancelDirectListingParams = {
  listingId: AbiParameterToPrimitiveType<{
    type: "uint256";
    name: "_listingId";
  }>;
};

/**
 * Calls the "cancelDirectListing" function on the contract.
 * @param options - The options for the "cancelDirectListing" function.
 * @returns A prepared transaction object.
 * @extension MARKETPLACE
 * @example
 * ```
 * import { cancelDirectListing } from "thirdweb/extensions/marketplace";
 *
 * const transaction = cancelDirectListing({
 *  listingId: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function cancelDirectListing(
  options: BaseTransactionOptions<CancelDirectListingParams>,
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x7506c84a",
      [
        {
          type: "uint256",
          name: "_listingId",
        },
      ],
      [],
    ],
    params: [options.listingId],
  });
}
