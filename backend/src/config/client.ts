import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

export async function client() {
  console.log("Creating public client...");
  const publicClient = createPublicClient({ 
    chain: mainnet,
    transport: http()
  });
  console.log("Public client created successfully!");
  return publicClient;
}