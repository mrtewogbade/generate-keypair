import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey, Keypair } from "@solana/web3.js";
import "dotenv/config";

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const suppliedToPubkey = process.argv[2] || null;

if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
}


const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
const toPubkey = new PublicKey(suppliedToPubkey);
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const transaction = new Transaction();
const LAMPORTS_TO_SEND = 5000;
const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

try {
    const signature = await sendAndConfirmTransaction(connection, transaction, [
        senderKeypair,
    ]);
    console.log(
        `
    Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}.`
    );

    console.log(`Transaction signature is ${signature}`);
} catch (error) {
    console.error(`Transaction failed: ${error}`);
    process.exit(1);
}


