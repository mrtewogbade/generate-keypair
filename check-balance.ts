import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey('31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5');

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${publicKey} is ${balanceInSol}!`);
