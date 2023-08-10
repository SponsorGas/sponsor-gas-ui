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