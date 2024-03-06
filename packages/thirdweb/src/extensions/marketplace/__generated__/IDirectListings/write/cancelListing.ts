import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "cancelListing" function.
 */
export type CancelListingParams = {
  listingId: AbiParameterToPrimitiveType<{
    type: "uint256";
    name: "_listingId";
  }>;
};

/**
 * Calls the "cancelListing" function on the contract.
 * @param options - The options for the "cancelListing" function.
 * @returns A prepared transaction object.
 * @extension MARKETPLACE
 * @example
 * ```
 * import { cancelListing } from "thirdweb/extensions/marketplace";
 *
 * const transaction = cancelListing({
 *  listingId: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function cancelListing(
  options: BaseTransactionOptions<CancelListingParams>,
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x305a67a8",
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
