import prisma from "./prisma";
import { Web3Storage } from "./../../node_modules/web3.storage";
import { Paymaster } from "@/model";

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



export async function getPaymasterById(paymasterId: string) {
  const paymaster: Paymaster | null = await prisma.paymaster.findFirst({
    where: {
      id: paymasterId
    },
    include:{PaymasterCriteria:true}
  });
  try{
    const client = new Web3Storage({ token: process.env.WEB3_STORAGE_API_KEY! })
    if(paymaster && paymaster.image){
    
        const imageFileResponse = await client.get(paymaster.image as string)
        if(imageFileResponse){
            const files = await imageFileResponse.files();
            const imageFile = await files[0];
            const imageURL = `https://${imageFile.cid}.ipfs.w3s.link`
            paymaster.image = imageURL
        }
      }
    } catch(e){
        console.log('caught error')
        console.error(e)
        if(paymaster)
          paymaster.image = undefined
    }
  return paymaster
}
