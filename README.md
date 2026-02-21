# Merkle Airdrop Distributor

A professional-grade implementation of a gas-efficient airdrop system. Instead of storing thousands of eligible addresses on-chain, this contract uses a single 32-byte **Merkle Root** to verify eligibility.

## How it Works
1. **Off-Chain:** A Merkle Tree is generated from a list of addresses and amounts. The Merkle Root is calculated.
2. **On-Chain:** The Merkle Root is stored in the smart contract.
3. **Claiming:** Users provide a "Merkle Proof" to the contract. The contract verifies the proof against the root and releases the tokens.



## Benefits
* **Incredible Gas Savings:** The cost to deploy is constant, regardless of whether you have 10 or 1,000,000 recipients.
* **Security:** Cryptographic proofs ensure that only eligible addresses can claim the specified amount.
* **Anti-Double Claim:** Built-in bitmapping or mapping to track and prevent multiple claims by the same user.

## Setup
1. Generate your Merkle Root using the provided JavaScript script.
2. Deploy `MerkleDistributor.sol` with the token address and the root.
3. Distribute the proofs to your users for claiming.

## License
MIT
