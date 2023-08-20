import { Paymaster } from '../../../sponsor-gas-sdk/dist/model';
import {SponsorGas} from 'sponsor-gas-sdk'
import prisma from "./prisma";

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
