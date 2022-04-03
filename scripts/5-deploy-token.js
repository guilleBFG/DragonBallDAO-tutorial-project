import { AddressZero } from "@ethersproject/constants";

import sdk from "./1-initialize-sdk.js";



(async () => {
  try{
    const tokenAddress = await sdk.deployer.deployToken({
      // What's your token's name? Ex. "Ethereum"
      name: "Ki Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "Ki",
      // This will be in case we want to sell our token,
      // because we don't, we set it to AddressZero again.
      primary_sale_recipient: AddressZero,      
    });

    console.log("✅ succesfully deployed token module, address: ", tokenAddress,);
  }catch(error){
   console.error("failed to deploy token module", error);
  
  }
})();