"use client"

import React, { FormEvent,  useState } from "react";
import Button from "@/components/Button";
import Dropdown, { DropdownOption } from "@/components/Dropdown";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Paymaster} from "@/lib/types";
import { config } from "@/lib/config";

const applications:DropdownOption[] = [{ id:'1', value:'',name:'Any'},{ id:'2', value:'0xEA68b3eFbBf63BB837F36A90AA97Df27bBF9B864',name:'ETH GLOBAL STAKING'},
{ id:'3', value:'0x123',name:'COINBASE SHIELD NFT'},
]
const chains:DropdownOption[] = Object.entries(config).map(([_chainId,_chainConfig]) => {return {'id':_chainId,'name':_chainConfig.name,"value":_chainId}})

export default  function CreatePaymasterPage() {

  const [paymasterName,setPaymasterName] = useState<string>('')
  const [paymasterDescription,setPaymasterDescription] = useState<string>('')
	const [paymasterImage, setPaymasterImage] = useState<File>();
  const [paymasterType,setPaymasterType] = useState<string>('Standard Verification Paymaster')
	const [watchVideo,setWatchVideo] = useState(false)
	const [videoFile,setVideoFile] = useState<File>()
	const [answerQuestion,setAnswerQuestion] = useState(false)
	const [question,setQuestion]=useState<string>('')
	const [holdNFT,setHoldNFT] = useState(false)
	const [nftCollection,setNFTCollection ] = useState<string>('')

	const [isLoading,setIsLoading] = useState(false)
	const [loadingText, setLoadingText] = useState<string>('')
	const [identityProvider,setIdentityProvider] = useState<string>('')
  const [selectedChain, setSelectedChain] = useState(chains[0])
	const [applicationSelected, setApplicationSelected] = useState<DropdownOption>(applications[0])

	const handleStandardPaymasterFormSubmission = async (event: FormEvent) => {
		event.preventDefault();
		setIsLoading(true)
		setLoadingText("Creating...")
		try{
			if (paymasterName && paymasterDescription) {
				const formData = new FormData();
		
				// Append text data
				formData.append('name', paymasterName);
				formData.append('description', paymasterDescription);
				formData.append('type', paymasterType);
				formData.append('application', JSON.stringify(applicationSelected));
		
				// Append image file
				if (paymasterImage) {
					formData.append('coverImage', paymasterImage);
				}
				// Append video file
				if (watchVideo && videoFile) {
					formData.append('adVideo', videoFile);
				}
				// Append question data
				if (answerQuestion && question) {
					formData.append('question', JSON.stringify(JSON.parse(question)));
				}

				// Append NFT data
				if (holdNFT && nftCollection) {
					formData.append('nftCollection', nftCollection);
				}
		
				// Append identity data
				if (identityProvider) {
					formData.append('identity', identityProvider);
				}
				formData.append('chainId',selectedChain.value)
		
				// Send data to the backend
				const paymasterDataResponse = await fetch("/api/dashboard/standardpaymaster", {
					method: 'POST',
					body: formData,
				});
		
				if (paymasterDataResponse.ok) {
					console.log("Paymaster data successfully submitted!");
				} else {
					console.error("Error submitting paymaster data.");
				}
		
				// Clear the form fields
				setPaymasterName("");
				setPaymasterDescription("");
				setPaymasterImage(undefined);
				setPaymasterType("Standard Verification Paymaster");
				setWatchVideo(false);
				setVideoFile(undefined);
				setAnswerQuestion(false);
				setQuestion("");
				setHoldNFT(false);
				setNFTCollection("");
				setIdentityProvider("");
				setApplicationSelected(applications[0]);
			}
		}catch(e){
			setIsLoading(false)
			setLoadingText("")
		}finally{
			setIsLoading(false)
			setLoadingText("")
		}
	};
	
	
  return (
		<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
			<div className="flex flex-col items-center justify-between" >
				{/* <h6 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Empowering Users and Gas Fee Sponsors</h6> */}
				<h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Standard Paymasters</h1>
				<p className="text-xl lg:px-28 text-white mb-8 text-center line-clamp-5">Pre deployed paymaster, just configure your conditions for sponsoring users gas fee.
					If you want more control checkout Create Paymaster.
				</p>
			</div>
			<form onSubmit={handleStandardPaymasterFormSubmission} className=" shadow-sm text-white ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
				<div className="space-y-10 divide-y divide-gray-500 ">
					<div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
						<div className="px-4 sm:px-0">
								<h2 className="text-base font-semibold leading-7 text-white">Sponsor Details</h2>
								<p className="mt-1 text-sm leading-6 text-gray-600">
										{`This information will be displayed publicly`}
								</p>
						</div>

						<div className="px-4 py-4 sm:p-8 col-span-2">
							<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
									{/* Paymaster supported Chain */}
									<div className="sm:col-span-5">
											<label htmlFor="country" className="block text-sm font-medium leading-6 ">
													Select paymaster chain
											</label>
											<div className="mt-2">
												<Dropdown options={chains} setSelected={setSelectedChain} selected={selectedChain}  />
											</div>
									</div>
									{/* Paymaster supported Application */}
									<div className="sm:col-span-5">
											<label htmlFor="country" className="block text-sm font-medium leading-6 ">
													Application to Supported
											</label>
											<div className="mt-2">
												<Dropdown options={applications} selected={applicationSelected} setSelected={setApplicationSelected} />
											</div>
									</div>
									{/* Paymaster Name */}
									<div className="sm:col-span-6">
											<label htmlFor="name" className="block text-sm font-medium leading-6">
													Paymaster Name
											</label>
											<div className="mt-2">
													<div className="flex rounded-md shadow-sm ring-1 bg-gray-900 ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 sm:max-w-md">
															<input
																	type="text"
																	name="paymaster-name"
																	id="paymaster-name"
																	autoComplete="paymaster-name"
																	value={paymasterName}
																	onChange={(e)=> setPaymasterName(e.target.value)}
																	placeholder="Name"
																	className="block flex-1 border-0 bg-gray-900 py-1.5 pl-2 text-white rounded-md placeholder:text-gray-400 focus:ring-0 outline-none focus:outline-none sm:text-sm sm:leading-6"
															/>
													</div>
											</div>
									</div>
									{/* Paymaster Description  */}
									<div className="col-span-full">
											<label htmlFor="about" className="block text-sm font-medium leading-6 ">
													Paymaster Description
											</label>
											<div className="mt-2">
													<div className="flex rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 ">
															<textarea
																	id="about"
																	name="about"
																	rows={3}
																	className="block flex-1 border-0 bg-gray-900 py-1.5 pl-2 text-white rounded-md placeholder:text-gray-400 focus:ring-0 outline-none focus:outline-none sm:text-sm sm:leading-6"
																	value={paymasterDescription}
																	onChange={(e)=> setPaymasterDescription(e.target.value)}
																	placeholder="Write a description about paymaster."
															/>
													</div>
											</div>
									</div>
									{/* Paymaster Image */}
									<div className="col-span-full">
									<label htmlFor="cover-photo" className="block text-sm font-medium leading-6">
										Upload Cover Image
									</label>
									<div className="flex rounded-md shadow-sm ring-1 bg-gray-900  ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 justify-center">
										<div className="text-center w-full rounded-md bg-gray-900 ">
											<PhotoIcon className="mx-auto h-12 w-12 text-gray-200" aria-hidden="true" />
											<div className="mt-4 flex text-sm justify-center leading-6 text-gray-200">
												<label
													htmlFor="image-file-upload"
													className="relative cursor-pointer font-semibold text-gray-600 focus-within:outline-none "
												>
													<span
														className="block flex-1 text-white  outline-none focus:outline-none sm:text-sm sm:leading-6"
														>Upload a cover 
													</span>
													<input 
														onChange={(e)=> setPaymasterImage(e.target.files?.[0])} 
														accept="image/*"
														id="image-file-upload" 
														name="image-file-upload" 
														type="file"
														className="sr-only " 
													/>
												</label>
												<p className="pl-2">{paymasterImage ? paymasterImage.name : 'No image selected'}</p>
												{/* <p className="pl-2">or drag and drop</p> */}
											</div>
											<p className="text-xs leading-5 text-gray-400">MP4 up to 20MB</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Paymaster Condition Configuration */}
					<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
							<div className="px-4 sm:px-0">
									<h2 className="text-base font-semibold text-white leading-7 ">Paymaster Configuration</h2>
									<p className="mt-1 text-sm leading-6 text-gray-600">Configuration/Rules subjected to this paymaster.</p>
							</div>

							<div className="px-4 py-6 sm:p-8 col-span-2">
									<div className="max-w-2xl space-y-10">
											<fieldset>
												<legend className="text-sm font-semibold leading-6  text-white">{`Paymaster Conditions (Do one of these )`}</legend>
													<div className="mt-6 space-y-6">
															<div className="relative flex gap-x-3">
																	<div className="flex h-6 items-center">
																			<input
																					id="watch-video"
																					name="watch-video"
																					type="checkbox"
																					checked={watchVideo}
																					onChange={(e)=>setWatchVideo((v)=> !v)}
																					className="h-4 w-4 rounded border-gray-300  text-white focus:ring-gray-600"
																			/>
																	</div>
																	<div className="text-sm leading-6">
																			<label htmlFor="watch-video" className="font-medium  text-white">
																					Watch Video
																			</label>
																			<p className="text-gray-500">Watch complete Ad video to get gas fee sponsored.</p>
																	</div>
															</div>
															{/*Upload Video File */}
															{watchVideo?
															<div className="col-span-full">
																<label htmlFor="cover-photo" className="block text-sm font-medium leading-6">
																	Upload Video
																</label>
																<div className="flex rounded-md shadow-sm ring-1 bg-gray-900  ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 justify-center">
																	<div className="text-center w-full rounded-md bg-gray-900 ">
																		<PhotoIcon className="mx-auto h-12 w-12 text-gray-200" aria-hidden="true" />
																		<div className="mt-4 flex text-sm justify-center leading-6 text-gray-200">
																			<label
																				htmlFor="video-file-upload"
																				className="relative cursor-pointer font-semibold text-gray-600 focus-within:outline-none "
																			>
																				<span
																					className="block flex-1 text-white  outline-none focus:outline-none sm:text-sm sm:leading-6"
																					>Upload a video 
																				</span>
																				<input 
																					onChange={(e)=> setVideoFile(e.target.files?.[0])} 
																					accept="video/mp4"
																					id="video-file-upload" 
																					name="video-file-upload" 
																					type="file"
																					className="sr-only " 
																				/>
																			</label>
																			<p className="pl-2">{videoFile ? videoFile.name : 'No file selected'}</p>
																			{/* <p className="pl-2">or drag and drop</p> */}
																		</div>
																		<p className="text-xs leading-5 text-gray-400">MP4 up to 20MB</p>
																	</div>
																</div>
															</div>:<></>}

															<div className="relative flex gap-x-3">
																	<div className="flex h-6 items-center">
																			<input
																					id="answer-question"
																					name="answer-question"
																					type="checkbox"
																					checked={answerQuestion}
																					onChange={(e)=>setAnswerQuestion((v)=> !v)}
																					className="h-4 w-4 rounded border-gray-300  text-white focus:ring-gray-600"
																			/>
																	</div>
																	<div className="text-sm leading-6">
																			<label htmlFor="answer-question" className="font-medium  text-white">
																					Answer a question
																			</label>
																			<p className="text-gray-500">Answer a question related to sponsor to get gas fee sponsored.</p>
																	</div>
															</div>
															{answerQuestion?
															<div className="col-span-full">
																<label htmlFor="about" className="block text-sm font-medium leading-6 ">
																	Question, Options and Answer
																</label>
																<div className="mt-2">
																	<div className="flex rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 ">
																			<textarea
																					id="about"
																					name="about"
																					rows={4}
																					className="block flex-1 border-0 bg-gray-900 py-1.5 pl-2 text-white rounded-md placeholder:text-gray-400 focus:ring-0 outline-none focus:outline-none sm:text-sm sm:leading-6"
																					value={question}
																					onChange={(e)=> setQuestion(e.target.value)}
																					placeholder={`{\n\t"question":"Sample Question",\n\t"options":['a','b','c','d'],\n\t"answer":'a'\n}`}
																			/>
																	</div>
																</div>
															</div> :<></>}

															<div className="relative flex gap-x-3">
																	<div className="flex h-6 items-center">
																			<input
																					id="hold-a-nft"
																					name="hold-a-nft"
																					type="checkbox"
																					checked={holdNFT}
																					onChange={(e)=>setHoldNFT((v)=> !v)}
																					className="h-4 w-4 rounded border-gray-300  text-white focus:ring-gray-600"
																			/>
																	</div>
																	
																	<div className="text-sm leading-6">
																			<label htmlFor="hold-a-nft" className="font-medium  text-white">
																					Hold a NFT
																			</label>
																			<p className="text-gray-500">Prove you hold a NFT to get gas fee sponsored.</p>
																	</div>
															</div>
															{/* NFT Collection Address */}
															{holdNFT ? 
															<div className="sm:col-span-6">
																<label htmlFor="name" className="block text-sm font-medium leading-6">
																		NFT Collection Address
																</label>
																<div className="mt-2">
																		<div className="flex rounded-md shadow-sm ring-1 bg-gray-900 ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 sm:max-w-md">
																				<input
																						type="text"
																						name="nft-collection-address"
																						id="nft-collection-address"
																						autoComplete="nft-collection-address"
																						value={nftCollection}
																						onChange={(e)=> setNFTCollection(e.target.value)}
																						placeholder="0x"
																						className="block flex-1 border-0 bg-gray-900 py-1.5 pl-2 text-white rounded-md placeholder:text-gray-400 focus:ring-0 outline-none focus:outline-none sm:text-sm sm:leading-6"
																				/>
																		</div>
																</div>
															</div>:<></>}
													</div>
											</fieldset>
											<fieldset disabled>
													<legend className="text-sm font-semibold leading-6  text-white">Sybil Resistant Identity (coming soon)</legend>
													<p className="mt-1 text-sm leading-6  text-gray-500">
															Prove you are a human
													</p>
													<div className="mt-6 space-y-6">
															<div className="flex items-center gap-x-3">
																	<input
																			id="gitcoin-passport"
																			name="identity"
																			type="radio"
																			onChange={(e)=>setIdentityProvider('Gitcoin_Passport')}
																			className="h-4 w-4 border-gray-300  text-white focus:ring-gray-600"
																	/>
																	<label htmlFor="gitcoin-passport" className="block text-sm font-medium leading-6  text-white">
																			Gitcoin Passport
																	</label>
															</div>
															<div className="flex items-center gap-x-3">
																	<input
																			id="worldcoin-id"
																			name="identity"
																			type="radio"
																			onChange={(e)=>setIdentityProvider('Worldcoin')}
																			className="h-4 w-4 border-gray-300  text-white focus:ring-gray-600"
																	/>
																	<label htmlFor="worldcoin-id" className="block text-sm font-medium leading-6  text-white">
																			Worldcoin Identity
																	</label>
															</div>
															<div className="flex items-center gap-x-3">
																	<input
																			id="poh"
																			name="identity"
																			type="radio"
																			onChange={(e)=>setIdentityProvider('poh')}
																			className="h-4 w-4 border-gray-300  text-white focus:ring-gray-600"
																	/>
																	<label htmlFor="poh" className="block text-sm font-medium leading-6  text-white">
																			Proof Of Humanity(POH)
																	</label>
															</div>
													</div>
											</fieldset>
									</div>
							</div>
							<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 col-span-3">
									<Button label="Clear" type={"button"} />
									<Button label="Submit" type={"submit"} isLoading={isLoading} loadingText={loadingText}/>
							</div>
					</div>
				</div>
			</form>
	</div>
  )
}

