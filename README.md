# SponsorGas - Empowering Gasless Transactions

DEMO- https://www.youtube.com/watch?v=MpdXdLV-C64


SponsorGas is a platform that brings together users and gas fee sponsors in a seamless ecosystem. Gas fee sponsors can configure conditions for sponsoring user operations. Users who wish to avail of this sponsorship can fulfill the requirements set by the sponsor, and in return, get their user operations funded.

## Project Description

SponsorGas aims to create a portal that revolutionizes the gas fee landscape by enabling sponsors to configure paymaster conditions for gasless transactions. Users can select from a variety of sponsors based on their preferred criteria, ensuring a frictionless experience. The project's goal is to provide an innovative solution for users to seamlessly interact with blockchain applications without worrying about gas fees.
![Screenshot 2023-08-21 at 10 07 30 PM](https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/a1ef09fd-5ea5-4695-913f-f8560e54c08b)
![Screenshot 2023-08-21 at 10 07 42 PM](https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/5c3c5583-e8a8-4bdd-8205-ae9cea09b3c1)

### Key Features

- Gas fee sponsors can configure custom paymaster conditions.
- Users can select sponsors based on their desired criteria for gasless transactions.
- Sample applications, working SponsorPay utilize SponsorGas paymasters (under development ETH Global Staking and Minting NFT).
- SponsorGas leverages paymasters depolyed on Linea and sample application uses Pimlico bunder.

## How it's Made

The SponsorGas build includes:

- Two interfaces: one for sponsors to configure paymaster conditions and another for sample applications.
- Deployment of paymaster contracts in Solidity on Linea, Base and Optimism testnets using Hardhat.
- Sample application contracts, such as staking and NFT contracts, deployed on Linea, Base and Optimism.
- Next.js framework and Tailwind CSS for developing user-friendly interfaces.
- Backend data storage using PostgreSQL to store paymaster-related information.



## SponsorGas Paymaster Conditions

Sponsors can configure four distinct paymaster conditions:

1. **NFT Verification:** Users prove ownership of a specific NFT from a given collection.
2. **Watch a Video (Ad):** Users fulfill the requirement of watching a video. (under development)
3. **Answer a Question:** Users complete a question-based challenge. (under development)
4. **Human Identity Verification:** Users prove their unique human identity via Worldcoin ID.(under development)

![Screenshot 2023-08-21 at 10 07 52 PM](https://github.com/SponsorGas/sponsor-gas-ui/assets/90941366/e84bfd99-b650-4af7-ab26-e2371a5b845a)


## Sample Application: Sending ETH on Linea

The sample application demonstrates how users can leverage SponsorGas paymasters to send ETH on linea . This interactive and user-friendly application showcases the capabilities of SponsorGas paymasters in providing gasless transactions for various use cases.

### Features

1. **SponsorPay:**
   - Sponsor Pay let user transfer ETH on Linea if they fulfill sponsor's requirement.
   - The application utilizes SponsorGas paymasters to facilitate gasless staking transactions.
 

### How It Works

1. **Transfering ETH on Linea:**
   - Users navigate to the "SponsorPay" application. https://sample-application-kannusingh.vercel.app/pay
   - Users fulfill the criteria set by the paymaster/sponsor .
   - Upon completion, users can send their ETH without gas fees, courtesy of SponsorGas paymasters.

### Integration with SponsorGas

The sample application seamlessly integrates with SponsorGas paymasters via sponsor-gas-sdk, enabling users to enjoy gasless transfer, staking and NFT minting experiences. By leveraging the configurable conditions provided by SponsorGas, the application enhances user engagement and accessibility to blockchain events and collectibles.


## Contract Deployments

- **Goerli Linea:**
    -  Verifying Paymaster Contract Address: `0xd6F6bA8025366300822Dae5008762074bC72F1B5`
     - Applications:
       - NAVHHacker NFT: `0x2ceb1c6626da4cd3c2d48ed99536a59b7f8241b9`

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

- **SponsorGas-UI:** https://github.com/SponsorGas/sponsor-gas-ui/tree/staging
- **SponsorGas-Backend:** https://github.com/SponsorGas/sponsor-gas-backend/tree/developement
- **Sample-Application:** https://github.com/SponsorGas/sample-application/tree/development
- **SponsorGas-Contracts:** https://github.com/SponsorGas/sponsor-gas-contracts/tree/development
- **SponsorGas-sdk** https://github.com/SponsorGas/sponsor-gas-sdk

## Get Involved

Feel free to explore, contribute, and provide feedback to enhance the SponsorGas project. Join our community and contribute to the future of gasless transactions!

## License

This project is licensed under the [MIT License](LICENSE).
