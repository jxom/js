import type { SwapQuote } from "./getSwap.js";
import type { SwapTransaction } from "./getStatus.js";
import { sendTransaction } from "../../../transaction/actions/send-transaction.js";
import {
  prepareTransaction,
  type PrepareTransactionOptions,
} from "../../../transaction/prepare-transaction.js";
import { waitForReceipt } from "../../../transaction/actions/wait-for-tx-receipt.js";
import type { Wallet } from "../../../wallets/interfaces/wallet.js";
import { approve } from "../../../extensions/erc20/write/approve.js";
import type { Address } from "viem";
import { defineChain } from "../../../chains/utils.js";
import type { Hex } from "../../../utils/encoding/hex.js";

// TODO: Support User Op Hash

/**
 * Send a Swap transaction using the connected wallet.
 * @param wallet -
 * The connected [`Wallet`](https://portal.thirdweb.com/references/typescript/v5/Wallet) instance to use for sending the swap transaction
 * @param quote -
 * The swap quote object of type [`SwapQuote`](https://portal.thirdweb.com/references/typescript/v5/SwapQuote)
 * returned from [`getTokenSwapQuote`](https://portal.thirdweb.com/references/typescript/v5/getTokenSwapQuote) function
 * @returns Object of type [`SwapTransaction`](https://portal.thirdweb.com/references/typescript/v5/SwapTransaction) that includes the transaction information.
 * You can pass this object to the [`getSwapStatus`](https://portal.thirdweb.com/references/typescript/v5/getSwapStatus) function to get the status of the swap transaction.
 * @example
 *
 * ```ts
 * import { sendSwapTransaction, getSwapQuote } from "thirdweb/pay";
 *
 * // get a quote for a swapping tokens
 * const quote = await getSwapQuote(quoteParams);
 *
 * // send the swap transaction
 * const swapTransaction = await sendSwapTransaction(wallet, quote);
 *
 * // keep polling the status of the swap transaction until it returns a success or failure status
 * const status = await getSwapStatus(swapTransaction);
 * ```
 */
export async function sendSwapTransaction(
  wallet: Wallet,
  quote: SwapQuote,
): Promise<SwapTransaction> {
  if (quote.approval) {
    /* approve the erc20 */
    const approvalTransaction = approve(quote.approval);

    const waitForReceiptOptions = await sendTransaction({
      transaction: approvalTransaction,
      wallet,
    });

    await waitForReceipt(waitForReceiptOptions);
  }
  const txData = {
    to: quote.transactionRequest.to as Address,
    data: quote.transactionRequest.data as Hex,
    value: BigInt(quote.transactionRequest.value),
    gas: BigInt(quote.transactionRequest.gasLimit),
    gasPrice: BigInt(quote.transactionRequest.gasPrice),
    chain: defineChain(quote.transactionRequest.chainId),
    client: quote.client,
  } as PrepareTransactionOptions;

  const transaction = prepareTransaction({
    ...txData,
  });

  const waitForReceiptOptions = await sendTransaction({
    transaction,
    wallet,
  });

  return {
    transactionHash: waitForReceiptOptions.transactionHash as string,
    transactionId: quote.transactionId,
    client: quote.client,
  };
}
