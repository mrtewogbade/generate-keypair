import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { Connection, PublicKey, Keypair, clusterApiUrl } from "@solana/web3.js";

// Initialize  a connection to the Solana Devnet
const connection = new Connection(clusterApiUrl("devnet"));


//Generate a new keypair for the Metaplex wallet
const keypair = Keypair.generate();

// Set up the Metaplex instance with the connection and identity driver
const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(keypair));

    // Example usage: Fetch an NFT by its mint address

async function fetchNFT(mintAddress: string): Promise<void> {
    try {
        const nft = await metaplex.nfts().findByMint({ mintAddress: PublicKey.default });
        console.log(nft);
    } catch (error){
        console.error(error);
    }
}    