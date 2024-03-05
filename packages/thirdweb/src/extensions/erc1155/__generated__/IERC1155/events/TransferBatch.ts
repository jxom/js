import { prepareEvent } from "../../../../../event/prepare-event.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the filters for the "TransferBatch" event.
 */
export type TransferBatchEventFilters = Partial<{
  _operator: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "address";
    name: "_operator";
    type: "address";
  }>;
  _from: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "address";
    name: "_from";
    type: "address";
  }>;
  _to: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "address";
    name: "_to";
    type: "address";
  }>;
}>;

/**
 * Creates an event object for the TransferBatch event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @extension ERC1155
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { transferBatchEvent } from "thirdweb/extensions/erc1155";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  transferBatchEvent({
 *  _operator: ...,
 *  _from: ...,
 *  _to: ...,
 * })
 * ],
 * });
 * ```
 */
export function transferBatchEvent(filters: TransferBatchEventFilters = {}) {
  return prepareEvent({
    signature:
      "event TransferBatch(address indexed _operator, address indexed _from, address indexed _to, uint256[] _ids, uint256[] _values)",
    filters,
  });
}
