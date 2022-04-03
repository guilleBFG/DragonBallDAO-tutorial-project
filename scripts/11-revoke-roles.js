import sdk from "./1-initialize-sdk.js";


// This is our ERC-20 contract.
const token = sdk.getToken("0x2ad2F3B6b0BBBf86802062939ab6504AC3AB02F9");



(async () => {
  try {
    // Log the current roles.
    const allRoles = await token.roles.getAll();
    console.log("👀 Roles that exist right now:", allRoles);
    // Revoke all the superpowers your wallet had over the ERC-20 contract.

    await token.roles.setAll({ admin: [], minter: [] });
    console.log("🎉 Roles after revoking ourselves", await token.roles.getAll());
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO trasury", error);

  }
})();