# SponsorGas - Empowering Gasless Transactions

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

## SponsorGas Paymaster Conditions

Sponsors can configure four distinct paymaster conditions:

1. **Watch a Video (Ad):** Users fulfill the requirement of watching a video.
2. **Answer a Question:** Users complete a question-based challenge.
3. **NFT Verification:** Users prove ownership of a specific NFT from a given collection.
4. **Human Identity Verification:** Users prove their unique human identity via Worldcoin ID.

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
