import sdk from "./1-initialize-sdk.js";


/* this is  the address of the contract that has ERC-20 it prints the token */
const token = sdk.getToken("0x2ad2F3B6b0BBBf86802062939ab6504AC3AB02F9");

(async () => {
  try{
    // whats the max supply you want to set 1 000 000 is a nice example
    const amount = 1000000;

    //interact with the deployed erc 20 contract and mint the token
    await token.mint(amount);

    const totalSupply = await token.totalSupply();
     // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$Ki  in circulation");
    
  }catch (error){
    
  }
})();