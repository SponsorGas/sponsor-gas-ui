const fs = require('fs');

import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse, type NextRequest } from 'next/server'
import { Web3Storage } from "./../../../../../node_modules/web3.storage";

export async function POST(request:NextRequest) {
    
	const session = await getServerSession(authOptions)

	if (!session) {
		return new Response("Unauthorized", { status: 403 })
	}

	const formData = await request.formData()
	console.log(formData)
	const name = formData.get('name') as string
	const description = formData.get('description') as string
	const type = formData.get('type') as string
	const application = JSON.parse(formData.get('application') as string)
	const coverImage = formData.get('coverImage') as File
	const adVideo = formData.get('adVideo') as File
	const question = formData.get('question') as string
	const identity = formData.get('identity') as string
	const nftCollection = formData.get('nftCollection') as string
	let paymasterCoverImageCID = ''
	let adVideoCID = ''

	const paymasterCriteria:Prisma.PaymasterCriteriaCreateManyPaymasterInput | Prisma.PaymasterCriteriaCreateManyPaymasterInput[] = []
	const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY! })
	
	if(coverImage){
			paymasterCoverImageCID = await client.put([coverImage]);
			console.log(`paymasterCoverImageCID : ${paymasterCoverImageCID}`)
			
	}

	if(adVideo){
			adVideoCID = await client.put([adVideo]);
			console.log(`adVideoCID : ${adVideoCID}`)
			const videoCriteria = { isMandatory:true, type:'video_challenge', video:adVideoCID }
			paymasterCriteria.push(videoCriteria)
	}
	
	if(question && question != ''){
			const questionCriteria = { isMandatory:true, type:'question_challenge', questionBook:question }
			paymasterCriteria.push(questionCriteria)
	}

	if(nftCollection && nftCollection != ''){
			const nftCriteria = { isMandatory:true, type:'nft_challenge', nftCollection }
			paymasterCriteria.push(nftCriteria)
	}

	if(identity && identity != ''){
			const identityCriteria = { isMandatory:true, type:'nft_challenge', identityProvider:identity }
			paymasterCriteria.push(identityCriteria)
	}
	const chainId = formData.get('chainId') as string
	const paymasterDb = await prisma.paymaster.create({
			data:{
					description:description,
					name:name,
					image:paymasterCoverImageCID,
					type:type,
					applications:{
						create:{
							name:application.name,
							value:application.value,
							chain:{ connect: { chainId : chainId } }
						}
					},
					PaymasterCriteria:{
						createMany:{
							data:paymasterCriteria
						}
					},
					owner: { connect: { email: session?.user?.email! } },
					chain: { connect: { chainId : chainId } } ,
					
			}
	})
	console.log(paymasterDb)
	return NextResponse.json({"status":"created",paymasterDb})
}

function makeFileObjects (formData:string) {
    const blob = new Blob([formData], { type: 'application/json' })
    const files = [
      new File([blob], 'metadata.json')
    ]
    return files
  }

  

function getLocalImageAsFile(filePath:string) {
  // Read the local image file as a Buffer
  const fileData = fs.readFileSync(filePath);

  // Get the MIME type of the image (replace 'image/png' with the appropriate MIME type)
  const mimeType = 'image/png';

  // Create a new Blob object with the file data and MIME type
  const blob = new Blob([fileData], { type: mimeType });

  // Create a new File object and provide a name for the file (e.g., 'image.png')
  const fileName = 'image.png';
  const file = new File([blob], fileName, { type: mimeType });

  return file;
}