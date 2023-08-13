# SponsorGas - Empowering Gasless Transactions

DEMO
https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/e01ad927-7448-44e6-b50e-c804c13343b7


SponsorGas is a platform that brings together users and gas fee sponsors in a seamless ecosystem. Gas fee sponsors can configure conditions for sponsoring user operations. Users who wish to avail of this sponsorship can fulfill the requirements set by the sponsor, and in return, get their user operations funded.

## Project Description

SponsorGas aims to create a portal that revolutionizes the gas fee landscape by enabling sponsors to configure paymaster conditions for gasless transactions. Users can select from a variety of sponsors based on their preferred criteria, ensuring a frictionless experience. The project's goal is to provide an innovative solution for users to seamlessly interact with blockchain applications without worrying about gas fees.

### Key Features

- Gas fee sponsors can configure custom paymaster conditions.
- Users can select sponsors based on their desired criteria for gasless transactions.
- Sample applications, including ETH Global Staking and Minting NFT, utilize SponsorGas paymasters.
- SponsorGas leverages Base, Optimism, and integrated Worldcoin for diverse experience with paymasters.

## How it's Made

The SponsorGas build includes:

- Two interfaces: one for sponsors to configure paymaster conditions and another for sample applications.
- Deployment of paymaster contracts in Solidity on Base and Optimism testnets using Hardhat.
- Sample application contracts, such as staking and NFT contracts, deployed on Base and Optimism.
- Next.js framework and Tailwind CSS for developing user-friendly interfaces.
- Backend data storage using PostgreSQL to store paymaster-related information.

![Screenshot 2023-08-13 at 12 07 16 AM](https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/2971a6e5-9516-4131-aa86-352cf9d8c806)

## SponsorGas Paymaster Conditions

Sponsors can configure four distinct paymaster conditions:

1. **Watch a Video (Ad):** Users fulfill the requirement of watching a video.
2. **Answer a Question:** Users complete a question-based challenge.
3. **NFT Verification:** Users prove ownership of a specific NFT from a given collection.
4. **Human Identity Verification:** Users prove their unique human identity via Worldcoin ID.
   
![Screenshot 2023-08-13 at 12 07 35 AM](https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/39f6c12d-f5f8-466f-a72b-b7f8ac110eae)

## Sample Application: Staking ETH for Event and Minting xSuperhack NFT

The sample application demonstrates how users can leverage SponsorGas paymasters to stake ETH for an event and mint xSuperhack NFTs. This interactive and user-friendly application showcases the capabilities of SponsorGas paymasters in providing gasless transactions for various use cases.

### Features

1. **Stake ETH for Event:**
   - Users can stake ETH to participate in an upcoming event (such as an ETHGlobal event) without worrying about gas fees.
   - By fulfilling the staking requirement, users become eligible for event participation and incentives.
   - The application utilizes SponsorGas paymasters to facilitate gasless staking transactions.

2. **Mint xSuperhack NFT:**
   - Users can mint xSuperhack NFTs, which are unique collectibles associated with the xSuperhack project.
   - To mint an NFT, users need to meet specific criteria set by the xSuperhack paymaster.
   - SponsorGas paymasters enable users to mint NFTs without incurring gas fees.

### How It Works

1. **Staking ETH for Event:**
   - Users navigate to the "Staking" section of the application.
   - Users fulfill the criteria set by the paymaster/sponsor (e.g., watching a video, answering a question).
   - Upon completion, users can stake their ETH without gas fees, courtesy of SponsorGas paymasters.
   ![Screenshot 2023-08-13 at 12 08 50 AM](https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/687f9b41-fac9-4927-b8a4-db41877a6640)

   ![Screenshot 2023-08-13 at 12 12 28 AM](https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/89248a09-f663-4418-9057-806bc41bad37)

2. **Minting xSuperhack NFT:**
   - Users visit the "NFT Minting" section of the application.
   - The application presents users with xSuperhack NFT minting options.
   - Users fulfill the criteria set by the xSuperhack paymaster (e.g., watching a video, answering a question).
   - Upon completion, users can mint their xSuperhack NFT without gas fees, courtesy of SponsorGas paymasters.

### Integration with SponsorGas

The sample application seamlessly integrates with SponsorGas paymasters, enabling users to enjoy gasless staking and NFT minting experiences. By leveraging the configurable conditions provided by SponsorGas, the application enhances user engagement and accessibility to blockchain events and collectibles.
<img width="1047" alt="Screenshot 2023-08-13 at 10 31 59 AM" src="https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/1e3be699-ec33-4cb0-819c-2eae29c48ce1">


## Contract Deployments

- **Goerli Base:**
  - Verifying Paymaster Contract Address: `0xe6e61b4cb54ecfc67421b61bcdc5a566d91888ae`
  - Applications:
    - ETHGlobal Staking: `0x7f829ab036fa3ac32928910152c78d93038dc3e2`
    - xSuperhack NFT: `0x36d07d0b52eab491d714732c7cc79dc39e3ab373`

- **Goerli Optimism:**
  - Verifying Paymaster Contract Address: `0xe9866c87082bac6a08a1f7cbbc2697d137fc5dfc`
  - Applications:
    - ETHGlobal Staking: `0xe6e61b4cb54ecfc67421b61bcdc5a566d91888ae`
    - xSuperhack NFT: `0x04f726034cebb6dabc6dc6a57f4abe0b342e02a1`

## Repositories

- **SponsorGas-UI:** [GitHub Repository](https://github.com/SponsorGas/sponsor-gas-ui/tree/main)
- **SponsorGas-Backend:** [GitHub Repository](https://github.com/SponsorGas/sponsor-gas-backend/tree/master)
- **Sample-Application:** [GitHub Repository](https://github.com/SponsorGas/sample-application/tree/main)
- **SponsorGas-Contracts:** [GitHub Repository](https://github.com/SponsorGas/sponsor-gas-contracts/tree/main)

## Get Involved

Feel free to explore, contribute, and provide feedback to enhance the SponsorGas project. Join our community and contribute to the future of gasless transactions!

## License

This project is licensed under the [MIT License](LICENSE).
