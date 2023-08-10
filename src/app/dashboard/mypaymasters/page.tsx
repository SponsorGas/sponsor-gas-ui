import { getUserPaymasters } from "@/lib/paymaster";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function MyPaymastersPage(){

	const user = await getCurrentUser()

  if (!user || !user.email) {
    redirect("/")
  }

	const paymasters = await getUserPaymasters(user.email)
	
	console.log("Paymasters : ",paymasters)
  return (
    <div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<div className="flex items-center justify-between pb-4">
							<div>
									<button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
											<svg className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
															<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
													</svg>
											Last 30 days
											<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
													<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
											</svg>
									</button>
									{/* <!-- Dropdown menu --> */}
									<div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" >
											<ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
													<li>
															<div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
																	<input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
																	<label htmlFor="filter-radio-example-1" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
															</div>
													</li>
													
											</ul>
									</div>
							</div>
							<label htmlFor="table-search" className="sr-only">Search</label>
							{/* Search Input */}
							<div className="relative">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
									</div>
									<input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search htmlFor items" />
							</div>
					</div>
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 over table-fixed">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr className="">
											{/* <th scope="col" className="p-4 w-">
													<div className="flex w-fit items-center">
															<input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
															<label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
													</div>
											</th> */}
											<th scope="col" className="px-6 py-3 w-2/12">
													Paymaster name
											</th>
											<th scope="col" className="px-6 py-3">
													Description
											</th>
											<th scope="col" className="px-6 py-3">
													Type
											</th>
											<th scope="col" className="px-6 py-3 w-1/12">
													Activated
											</th>
											<th scope="col" className="px-6 py-3">
													Action
											</th>
									</tr>
							</thead>
							<tbody>
								{paymasters.map(paymaster => (
									<tr key={paymaster.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
										<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{paymaster.name}
										</th>
										<td className="px-6 py-4 text-ellipsis overflow-hidden break-words whitespace-nowrap">
												{paymaster.description}
										</td>
										<td className="px-6 py-4 text-ellipsis overflow-hidden break-words whitespace-nowrap">
												{paymaster.type}
										</td>
										<td className="px-6 py-4">
												{paymaster.published?'Yes':'No'}
										</td>
										<td className="px-6 py-4">
												<a href="#" className="font-medium px-1 text-blue-600 dark:text-blue-500 hover:underline">Activate</a>
												<a href="#" className="font-medium px-1 text-blue-600 dark:text-blue-500 hover:underline">View</a>
										</td>
								</tr>
								))}
									
							</tbody>
					</table>
			</div>
    </div>
  );
};



