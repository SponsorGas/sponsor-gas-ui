"use client"

import React, { FormEvent,  useEffect,  useState } from "react";
import Button from "@/components/Button";
import Dropdown, { DropdownOption } from "@/components/Dropdown";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { config, getApplicationsForChainId } from "@/lib/config";
import { useToast } from "@/providers/ToastProvider";
import LoadingOverlay from "@/components/LoadingOverlay";

export default  function CreatePaymasterPage() {
  const [paymasterName,setPaymasterName] = useState<string>('')
  const [paymasterDescription,setPaymasterDescription] = useState<string>('')
	const [paymasterImage, setPaymasterImage] = useState<File>();
  const [paymasterType,setPaymasterType] = useState<string>('Verifying Paymaster')
	const [watchVideo,setWatchVideo] = useState(false)
	const [videoFile,setVideoFile] = useState<File>()
	const [answerQuestion,setAnswerQuestion] = useState(false)
	const [question,setQuestion]=useState<string>('')
	const [holdNFT,setHoldNFT] = useState(false)
	const [nftCollection,setNFTCollection ] = useState<string>('')
	const [identityProvider,setIdentityProvider] = useState<string>('')

	const [isLoading,setIsLoading] = useState(false)
	const [loadingText, setLoadingText] = useState<string>('')

	const chains:DropdownOption[] = Object.entries(config).map(([_chainId,_chainConfig]) => {return {'id':_chainId,'name':_chainConfig.name,"value":_chainId}})
	const [selectedChain, setSelectedChain] = useState(chains[0])
	
	const [applicationConfig,setApplicationConfig] = useState(getApplicationsForChainId(selectedChain.id) as unknown as DropdownOption[])
	const [applicationSelected, setApplicationSelected] = useState(applicationConfig && applicationConfig[0])
	
	const [currentStep, setCurrentStep] = useState(1);
	const { addToast } = useToast();

	useEffect(() => {
		const newApplicationConfig = getApplicationsForChainId(selectedChain.id) as unknown as DropdownOption[]
		setApplicationConfig(newApplicationConfig);
		setApplicationSelected(newApplicationConfig && newApplicationConfig[0]);
	  }, [ selectedChain]);


	const handleStandardPaymasterFormSubmission = async () => {
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
				console.log(formData.forEach((value,key)=> console.log(`${key}: ${value}`)))
				const paymasterDataResponse = await fetch("/api/dashboard/standardpaymaster", {
					method: 'POST',
					body: formData,
				});
		
				if (paymasterDataResponse.ok) {
					console.log("Paymaster data successfully submitted!");
				} else {
					console.error("Error submitting paymaster data.");
				}
				addToast("Created Successfully","success")
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
				setApplicationSelected(applicationConfig && applicationConfig[0]);
				setCurrentStep(1)
			}
		}catch(e){
			setIsLoading(false)
			setLoadingText("")
		}finally{
			setIsLoading(false)
			setLoadingText("")
		}
	};

	const handleNext = () => {
    if (currentStep === 1) {
			if(paymasterName != '' && paymasterDescription != '' && paymasterImage && paymasterType != '' && selectedChain && applicationSelected){
				setCurrentStep(2);
			}
    } else if (currentStep === 2) {
      handleStandardPaymasterFormSubmission()
    }
  };

	const handleBack = () => {
		setCurrentStep(1);
	}
	
	
  return (
		<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
			{isLoading && ( <LoadingOverlay /> )}
			<div className="flex flex-col items-center justify-between" >
				{/* <h6 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Empowering Users and Gas Fee Sponsors</h6> */}
				<h1 className="text-5xl font-bold bg-gradient-to-r from-violet-800  to-blue-700 bg-clip-text text-transparent">Custom Paymasters</h1>
				<p className="text-sm lg:px-28 text-black mb-8 text-center line-clamp-5">Pre deployed paymaster, just configure your conditions for sponsoring users gas fee.
					If you want more control checkout Create Paymaster.
				</p>
			</div>

			<div className="relative flex-col flex items-center">
				
				<ol className="flex  w-2/5 mb-4 sm:mb-5">
					<li className={`flex w-full items-center text-blue-600  after:content-[''] after:w-full after:h-3  after:inline-block ${currentStep === 2 ? 'after:bg-gradient-to-r after:from-violet-300 after:to-cyan-300' : 'after:bg-white'}`}>
							<div className="flex items-center justify-center w-10 h-10  bg-violet-300 rounded-full lg:h-12 lg:w-12 shrink-0">
									<div className={`flex items-center justify-center w-8 h-8 ${currentStep === 1 && 'bg-white'} rounded-full lg:h-10 lg:w-10 shrink-0`}>
										<svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
												<path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
										</svg>
									</div>
							</div>
							
					</li>
					<li className="flex  items-center  ">
						<div className={`flex items-center justify-center w-10 h-10 ${currentStep === 2 ? 'bg-cyan-300' : 'bg-white'} rounded-full lg:h-12 lg:w-12 shrink-0`}>
							<div className="flex items-center justify-center w-8 h-8 bg-white rounded-full lg:h-10 lg:w-10 shrink-0">
									<svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
											<path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"/>
											<path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"/>
									</svg>
							</div>
						</div>
					</li>
				</ol>
				{currentStep === 1 && 
					<div className="grid w-1/2 grid-cols-1 items-start">
						<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 text-black">
								<div className="sm:col-span-6">
									<h2 className="text-xl font-semibold leading-7 ">Paymaster Details</h2>
									<p className="mt-1 text-sm leading-6 text-gray-600">
											{`This information will be displayed publicly`}
									</p>
								</div>
								{/* Paymaster supported Chain */}
								<div className="sm:col-span-3">
										<label htmlFor="country" className="block text-sm font-medium leading-6 ">
												Select paymaster chain
										</label>
										<div className="mt-2">
											<Dropdown options={chains} setSelected={setSelectedChain} selected={selectedChain}  />
										</div>
								</div>
								{/* Paymaster supported Application */}
								<div className="sm:col-span-3">
										<label htmlFor="country" className="block text-sm font-medium leading-6 ">
												Application to Supported
										</label>
										<div className="mt-2">
											<Dropdown options={applicationConfig} selected={applicationSelected} setSelected={setApplicationSelected} />
										</div>
								</div>
								{/* Paymaster Name */}
								<div className="sm:col-span-4">
										<label htmlFor="name" className="block text-sm font-medium leading-6">
												Paymaster Name
										</label>
										<div className="mt-2">
												<div className="flex rounded-md shadow-sm ring-0 bg-gray-300 ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-violet-500 to-cyan-600 p-0.5 sm:max-w-md">
														<input
																type="text"
																name="paymaster-name"
																id="paymaster-name"
																autoComplete="paymaster-name"
																value={paymasterName}
																onChange={(e)=> setPaymasterName(e.target.value)}
																placeholder="Name"
																className="block flex-1 border-0 bg-gray-200 py-1.5 pl-2 text-black rounded-md placeholder:text-gray-400 focus:ring-0 outline-none focus:outline-none sm:text-sm sm:leading-6"
																required
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
												<div className="flex rounded-md shadow-sm ring-0 bg-gray-300 ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-violet-500 to-cyan-600 p-0.5 ">
														<textarea
																id="about"
																name="about"
																rows={3}
																className="block flex-1 border-0 bg-gray-200 py-1.5 pl-2 text-black rounded-md placeholder:text-gray-400 focus:ring-0 outline-none focus:outline-none sm:text-sm sm:leading-6"
																value={paymasterDescription}
																onChange={(e)=> setPaymasterDescription(e.target.value)}
																placeholder="Write a description about paymaster."
																required
														/>
												</div>
										</div>
								</div>
								{/* Paymaster Image */}
								<div className="col-span-full">
								<label htmlFor="cover-photo" className="block text-sm font-medium leading-6">
									Upload Cover Image
								</label>
								<div className="flex rounded-md shadow-sm ring-0 bg-gray-300 ring-gray-300 focus-within:ring-0 focus-within:bg-gradient-to-r from-violet-500 to-cyan-600 p-0.5 justify-center">
									<div className="text-center w-full rounded-md bg-gray-200 ">
										<PhotoIcon className="mx-auto h-12 w-12 text-gray-600" aria-hidden="true" />
										<div className="mt-1 flex text-sm justify-center leading-6 text-gray-600">
											<label
												htmlFor="image-file-upload"
												className="relative cursor-pointer font-semibold text-gray-600 focus-within:outline-none "
											>
												<span
													className="block flex-1 text-gray-600  outline-none focus:outline-none sm:text-sm sm:leading-6"
													>Upload a cover 
												</span>
												<input 
													onChange={(e)=> setPaymasterImage(e.target.files?.[0])} 
													accept="image/*"
													id="image-file-upload" 
													name="image-file-upload" 
													type="file"
													className="sr-only " 
													required
												/>
											</label>
											<p className="pl-2">{paymasterImage ? paymasterImage.name : 'No image selected'}</p>
											{/* <p className="pl-2">or drag and drop</p> */}
										</div>
										<p className="text-xs leading-5 text-gray-400">jpeg,png up to 20MB</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-end  border-t border-gray-900/10 py-4  col-span-3">
							<Button type={"submit"} onClick={handleNext} label={"Next: Configure Criteria"} />
						</div>
					</div>
				}
				{currentStep === 2 && 
						<div className="grid w-1/2 grid-cols-1 items-start">
							{/* Paymaster Condition Configuration */}
								<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 text-black">
									<div className="sm:col-span-6">
										<h2 className="text-xl font-semibold  leading-7 ">Paymaster Configuration</h2>
										<p className="mt-1 text-sm leading-6 text-gray-600">Configuration/Rules user needs to fulfill.</p>
									</div>
									<fieldset className="sm:col-span-6">
										<legend className="text-sm font-semibold leading-6  ">{`Paymaster Conditions`}</legend>
											<div className="mt-6 space-y-6">
													{/*select Video  */}
													<div className="relative flex gap-x-3">
															<div className="flex h-6 items-center">
																	<input
																			id="watch-video"
																			name="watch-video"
																			type="checkbox"
																			checked={watchVideo}
																			onChange={(e)=>setWatchVideo((v)=> !v)}
																			className="h-4 w-4 rounded border-gray-300  text-black focus:ring-gray-600"
																	/>
															</div>
															<div className="text-sm leading-6">
																	<label htmlFor="watch-video" className="font-medium  text-black">
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
																			className="block flex-1 text-black  outline-none focus:outline-none sm:text-sm sm:leading-6"
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
																</div>
																<p className="text-xs leading-5 text-gray-400">MP4 up to 20MB</p>
															</div>
														</div>
													</div>:<></>}
													{/*Select question */}
													<div className="relative flex gap-x-3">
															<div className="flex h-6 items-center">
																	<input
																			id="answer-question"
																			name="answer-question"
																			type="checkbox"
																			checked={answerQuestion}
																			onChange={(e)=>setAnswerQuestion((v)=> !v)}
																			className="h-4 w-4 rounded border-gray-300  text-black focus:ring-gray-600"
																	/>
															</div>
															<div className="text-sm leading-6">
																	<label htmlFor="answer-question" className="font-medium  text-black">
																			Answer a question
																	</label>
																	<p className="text-gray-500">Answer a question related to sponsor to get gas fee sponsored.</p>
															</div>
													</div>
													{/*Write question */}
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

													{/*HOLD A NFT */}
													<div className="relative flex gap-x-3">
															<div className="flex h-6 items-center">
																	<input
																			id="hold-a-nft"
																			name="hold-a-nft"
																			type="checkbox"
																			checked={holdNFT}
																			onChange={(e)=>setHoldNFT((v)=> !v)}
																			className="h-4 w-4 rounded border-gray-300  focus:ring-gray-600"
																	/>
															</div>
															
															<div className="text-sm leading-6">
																	<label htmlFor="hold-a-nft" className="font-medium ">
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
																				className="block flex-1 border-0 bg-gray-300 py-1.5 pl-2 text-black rounded-md placeholder:text-gray-400 focus:ring-0 outline-none focus:outline-none sm:text-sm sm:leading-6"
																		/>
																</div>
														</div>
													</div>:<></>}
											</div>
									</fieldset>
									<fieldset className="sm:col-span-6" >
											<legend className="text-sm font-semibold leading-6 ">Sybil Resistant Identity </legend>
											<p className="mt-1 text-sm leading-6  text-gray-500">
													Prove you are a human
											</p>
											<div className="mt-6 space-y-6">
													
													<div className="flex items-center gap-x-3">
															<input
																	id="worldcoin-id"
																	name="identity"
																	type="radio"
																	checked={identityProvider === 'worldcoin'}
																	onChange={(e)=>setIdentityProvider('worldcoin')}
																	className="h-4 w-4 border-gray-300  focus:ring-gray-600"
															/>
															<label htmlFor="worldcoin-id" className="block text-sm font-medium leading-6 ">
																	Worldcoin Identity
															</label>
													</div>
													<div className="flex items-center gap-x-3">
															<input
																	id="gitcoin-passport"
																	name="identity"
																	type="radio"
																	disabled
																	onChange={(e)=>setIdentityProvider('gitcoin_passport')}
																	className="h-4 w-4 border-gray-300  focus:ring-gray-600"
															/>
															<label htmlFor="gitcoin-passport" className="block text-sm font-medium leading-6 ">
																	Gitcoin Passport (coming soon)
															</label>
													</div>
													<div className="flex items-center gap-x-3">
															<input
																	id="poh"
																	name="identity"
																	type="radio"
																	disabled
																	onChange={(e)=>setIdentityProvider('poh')}
																	className="h-4 w-4 border-gray-300  focus:ring-gray-600"
															/>
															<label htmlFor="poh" className="block text-sm font-medium leading-6 ">
																	Proof Of Humanity (coming soon)
															</label>
													</div>
											</div>
									</fieldset>
								</div>
								<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10  py-4 col-span-3">
										<Button label="Back" onClick={handleBack} type={"button"} />
										<Button label="Submit" type={"button"}  onClick={handleNext} />
								</div>
						</div>
				}
			</div>
	</div>
  )
}

