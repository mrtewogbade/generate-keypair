import { Keypair } from "@solana/web3.js";

const myKeypair = Keypair.generate();

console.log(`Secret key: ${myKeypair.secretKey}`);

console.log(`The public key is: `, myKeypair.publicKey.toBase58());
console.log(`The secret key is: `, myKeypair.secretKey);