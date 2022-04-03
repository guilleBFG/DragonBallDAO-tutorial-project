import sdk from "./1-initialize-sdk.js";



// This is our governance contract.

const vote = sdk.getVote("0x0A57d3392EA13DfBf0F10CF456D3DF13Da6ABA63");

// This is our ERC-20 contract.
const token = sdk.getToken("0x2ad2F3B6b0BBBf86802062939ab6504AC3AB02F9");


(async () => {
  try{
    // Give our treasury the power to mint additional token if needed.
    await token.roles.grant("minter", vote.getAddress());

    console.log("succesfully grant vote contract permissions to act on token contract");
    
  }catch(error){
        console.error("failed to grant vote contract permissions on token contract", error);
        process.exit(1);
  }

  try{
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    const walletAddress = process.env['WALLET_ADDRESS']
    const ownedTokenBalance = await token.balanceOf(walletAddress);
    
    // Grab 90% of the supply that we hold.

    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = Math.floor( Number(ownedAmount) / 100 * 90);
    console.log("ownedAmount", ownedAmount);
    console.log("percent90", percent90);    
    
    // Transfer 90% of the supply to our voting contract.
    await token.transfer(
      vote.getAddress(),
      percent90
    ); 
    console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");

  }catch(err){
    console.error("failed to transfer tokens to vote contract", err);    
  }
})();

