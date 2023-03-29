# **KRISHIAAN**

## A web application for the farmers to sell their produce and consumers to buy produce directly and at a fair price. The ecosystem would offer a peer to peer transaction service  between the producer and the consumer and would primarily eliminate corruption by the inclusion of blockchain. 

<br/>

# Dappazon

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

-webockets and nodejs for chat application backend .


## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 6. Start frontend
`$ npm run start`


The landing and the market place are made in two different folder and will be hosted on different domains so you need to run both the files seperately.
Run the market place on port 3000
and landing on port 3002.
run chat client on port 3001.
