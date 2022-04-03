import sdk from "./1-initialize-sdk.js";

// This is the address to our ERC-1155 membership NFT contract.
const editionDrop = sdk.getEditionDrop("0x6Fed1d3fe0b594efeD16CCf85658265e5e85521C");

// this is the address of the ERC 20 contract
const token = sdk.getToken("0x2ad2F3B6b0BBBf86802062939ab6504AC3AB02F9");

(async () => {
  try{
    
    /*
      Grab all address that owns the membership NFT with token id "0"
    */

    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.legth === 0){
      console.log("No NFTs have been claimed yet, get some friends to claim the NFTs!");
      process.exit(0);
    }

    // loop through the arrray of wallets

    const airdropTargets = walletAddresses.map((address)=>{
      // pick random amount between 1000 and 10000
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 +1) + 1000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      //set up the target
      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    // Call transferBatch on all our airdrop targets.
    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    
  }catch(error){
    console.error("Failed to airdrop tokens", err);
  }
})();
