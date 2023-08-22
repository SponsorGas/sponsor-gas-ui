
import { getPaymasterById } from "@/lib/paymaster"
import Image from "next/image"

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Total User Operations', value: '12' },
    { name: 'Gas fee paid', value: '300+' },
    { name: 'User Operations last week', value: '40' },
    { name: 'Applications supported', value: 'Unlimited' },
  ]
  
  export default async function PaymasterDetails({ params }: { params: { address: string } }) {
    const paymasterAddress = params.address
    
    const paymaster = await getPaymasterById(paymasterAddress)

      if(paymaster === null){
        return (
					<div className="relative isolate overflow-hidden text-black pt-24 sm:pt-32 pb-16 sm:pb-24 ">
						<div
							className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
							aria-hidden="true"
						>
							<div
								className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-violet-600 to-blue-700 opacity-25"
								style={{
									clipPath:
										'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
							/>
						</div>
						<div
							className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
							aria-hidden="true"
						>
							<div
								className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-violet-600 to-blue-700 opacity-25"
								style={{
									clipPath:
										'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
							/>
						</div>
						<div className="mx-auto max-w-7xl px-6 lg:px-8 animate-pulse">
							<div className="mx-auto max-w-2xl lg:mx-0">
								<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
								<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mt-6 mb-2.5"></div>
								<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
								<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px]  mb-2.5"></div>
								<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px]  mb-2.5"></div>
							</div>
							<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
								<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
								<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
									{stats.map((stat) => (
										<div key={stat.name} className="flex flex-col-reverse">
											<dt className="text-base leading-7">{stat.name}</dt>
											<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] mb-2.5"></div>
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
        )
      }

    return (
      <div className="relative isolate overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-242">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-violet-600 to-blue-700 opacity-25"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-violet-600 to-blue-700  opacity-25"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto flex flex-col max-w-7xl px-6 lg:px-8">
          <div className="flex">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">{`${paymaster.name}`}</h2>
              <p className="mt-6 text-lg leading-8 text-gray-800">
                {`${paymaster.description}`}
              </p>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
                {/* {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))} */}
              </div>
            </div>
            <div className="relative aspect-w-4 aspect-h-3 w-full m-4 p-4  overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image src={paymaster.image ?? '/sponsor_gas_defaultcover.png'}  alt={`product.imageAlt`} layout="fill" objectFit="contain"  className="border rounded-2xl" unoptimized />
            </div>

          </div>
          
          <div className="mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-8 grid grid-cols-1 gap-8 sm:mt-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  