import sdk from "./1-initialize-sdk.js";

import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6Fed1d3fe0b594efeD16CCf85658265e5e85521C");

(async () => {
  try{
    await editionDrop.createBatch([
      {
        name: "Goku receives energy",
        description: "This NFT will give you access to DragonBallDao!",
        image: readFileSync("scripts/assets/goku-genkidama.webp"),
      },
                                  ]);
   console.log("✅ Successfully created a new NFT in the drop!");
  }catch (error){
    console.error("failed to create the new NFT", error);    
  }
})();