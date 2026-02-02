import { client } from "./config/client"; // MUST have .js extension

async function main() {
  console.log("🚀 Starting application...");
  const publicClient = await client();
  console.log("✅ Application started successfully!");
  
  // Example: Get block number
  const blockNumber = await publicClient.getBlockNumber();
  console.log("📦 Current block number:", blockNumber);
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});