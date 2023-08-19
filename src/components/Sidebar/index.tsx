'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define your options for the left-side pane here
const options = [
	{ id: 1, label: 'My Paymasters', url: "/dashboard/mypaymasters" },
	// { id: 2, label: 'Create Paymaster', url: "/dashboard/createpaymaster" },
	// { id: 3, label: 'Configure Paymaster', url: "/dashboard/configurepaymaster" },
	// { id: 4, label: 'Add Paymaster', url: "/dashboard/addpaymaster" },
	{ id: 5, label: 'Custom Paymasters', url: "/dashboard/custompaymaster" }
];

export default function Sidebar(){
	const pathname = usePathname()
    return(
			<aside id="logo-sidebar" className="fixed z-40 w-48 h-screen sm:translate-x-0" aria-label="Sidebar">
				<div className="h-full pb-4 overflow-y-auto border-r border-gray-700">
						<ul className="space-y-2 font-medium">
							<li>
									<a href="#" className="flex items-center p-2 text-black  hover:underline group">
										<svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
												<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
												<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
										</svg>
										<span className="ml-3">Dashboard</span>
									</a>
							</li>
							{options.map((option) => (
							<li key={option.id}>
								<Link
								className={`cursor-pointer flex items-center p-2  hover:underline group ${ pathname.startsWith(option.url)  ? 'bg-gradient-to-r  from-violet-500  to-cyan-600  bg-clip-text text-transparent' : 'text-black'}`}
								href={option.url}           
								>
								{option.label}
							</Link></li>
							))}
						</ul>
				</div>
			</aside>
		)
}