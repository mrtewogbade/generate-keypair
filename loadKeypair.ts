import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`${keypair.secretKey}`);
console.log(`${keypair.publicKey}`);



