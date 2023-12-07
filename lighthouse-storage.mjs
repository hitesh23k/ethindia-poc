import lighthouse from '@lighthouse-web3/sdk'

const apiKey = '394cfdb9.d77f39a280fd459d9dc63f30b43ca000';
const uploadResponse = await lighthouse.upload(
    '/home/hitesh/hitesh-team-pic.jpeg',
    apiKey
);

console.log("uploadResponse :", uploadResponse);
console.log(`File URL: https://gateway.lighthouse.storage/ipfs/${uploadResponse.data.Hash}`);
