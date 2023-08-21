import { SponsorGas } from "sponsor-gas-simple-sdk";
import prisma from "./prisma";
import { Paymaster } from "sponsor-gas-simple-sdk/dist/model";

export async function getUserPaymasters( userEmail:string){
    const paymasters = await prisma.paymaster.findMany({
        where: {
          owner: { email: userEmail },
        //   published: false,
        },
        include: {
          owner: {
            select: { name: true },
          },
        },
      });

      if(!paymasters){
        return []
      }
      return paymasters;
}



export async function getPaymasterById(id: string) {
  const sponsorGas = new SponsorGas()
  const paymaster: Paymaster | null = await sponsorGas.getPaymaster(id)
  return paymaster
}
