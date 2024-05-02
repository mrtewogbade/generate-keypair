import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

//function to check if a public key is valid

const isValidPublicKey = (publicKey: String) => {
    try {
        new PublicKey(publicKey);
        return true;
    }
    catch (error) {
        return false;
    }
}

async function checkBalance(publicKey: String){
    if (!isValidPublicKey(publicKey)){
        console.log(`Invalid public key: ${publicKey}`);
        return;
    }

    const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

    const balanceInLamports = await connection.getBalance(new PublicKey(publicKey));
    const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;


    console.log(`The balance of the account at ${publicKey} is ${balanceInSol}!`);
    console.log(checkBalance("YU1fQ2tTD3tGzbVfCPCV2358BDMN4JVMCRetdieucoa"));
    
   

}