import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL, Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

const publicKey = keypair.publicKey;

const connection = new Connection(clusterApiUrl("devnet"));
const address = publicKey;
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balance} SOL`);