const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const ethers = require('ethers');

// Example data: [index, address, amount]
const recipients = [
  { index: 0, address: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", amount: "1000000000000000000" },
  { index: 1, address: "0x123...", amount: "2000000000000000000" }
];

const leaves = recipients.map(x => 
  ethers.solidityPackedKeccak256(["uint256", "address", "uint256"], [x.index, x.address, x.amount])
);

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log("Merkle Root:", root);
// Use this root when deploying the contract
