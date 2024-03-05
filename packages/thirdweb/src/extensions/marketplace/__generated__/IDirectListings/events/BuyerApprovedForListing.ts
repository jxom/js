import { prepareEvent } from "../../../../../event/prepare-event.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the filters for the "BuyerApprovedForListing" event.
 */
export type BuyerApprovedForListingEventFilters = Partial<{
  listingId: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "uint256";
    name: "listingId";
    type: "uint256";
  }>;
  buyer: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "address";
    name: "buyer";
    type: "address";
  }>;
}>;

/**
 * Creates an event object for the BuyerApprovedForListing event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @extension MARKETPLACE
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { buyerApprovedForListingEvent } from "thirdweb/extensions/marketplace";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  buyerApprovedForListingEvent({
 *  listingId: ...,
 *  buyer: ...,
 * })
 * ],
 * });
 * ```
 */
export function buyerApprovedForListingEvent(
  filters: BuyerApprovedForListingEventFilters = {},
) {
  return prepareEvent({
    signature:
      "event BuyerApprovedForListing(uint256 indexed listingId, address indexed buyer, bool approved)",
    filters,
  });
}
