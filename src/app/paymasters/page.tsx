// import PaymastersGrid from "@/components/PaymastersGrid";

export default function Paymasters() {
  return (
      <div >
				<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-20 lg:max-w-7xl mt-16 lg:px-8">
					<div className="flex flex-col items-center justify-center  mb-4">
						<h6 className="bg-gradient-to-r from-violet-800  to-blue-700 bg-clip-text text-transparent">Sponsors for your application</h6>
						<h1 className="text-7xl font-bold bg-gradient-to-r from-violet-800  to-blue-700 bg-clip-text text-transparent">Paymasters</h1>
					</div>
					<p className="text-xl lg:px-56 text-black mb-8 text-center line-clamp-3">
												A collection of excellent paymasters available for your application.
												Easily choose the one best for your users.</p>
					<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          {/* <div className="flex  items-center justify-between" >
            <h2 className="text-2xl font-bold tracking-tight text-white">Available Paymasters</h2>
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
							<button
								type="button"
								className="inline-flex items-center gap-x-2 rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
								onClick={() => setOpenAddPaymaster(true)}
							>
								<PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
								Add Paymaster
							</button> 
						</div>
          </div> */}
          {/* <PaymastersGrid /> */}
        </div>
				</div>
        
					
      </div>
  )
  
}


