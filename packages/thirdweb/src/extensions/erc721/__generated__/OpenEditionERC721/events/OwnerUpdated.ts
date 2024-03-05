import { prepareEvent } from "../../../../../event/prepare-event.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the filters for the "OwnerUpdated" event.
 */
export type OwnerUpdatedEventFilters = Partial<{
  prevOwner: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "address";
    name: "prevOwner";
    type: "address";
  }>;
  newOwner: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "address";
    name: "newOwner";
    type: "address";
  }>;
}>;

/**
 * Creates an event object for the OwnerUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @extension ERC721
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownerUpdatedEvent } from "thirdweb/extensions/erc721";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownerUpdatedEvent({
 *  prevOwner: ...,
 *  newOwner: ...,
 * })
 * ],
 * });
 * ```
 */
export function ownerUpdatedEvent(filters: OwnerUpdatedEventFilters = {}) {
  return prepareEvent({
    signature:
      "event OwnerUpdated(address indexed prevOwner, address indexed newOwner)",
    filters,
  });
}
