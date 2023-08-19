import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function Home() {
  
  return (
      <div id="home">
        <Container>
            <div className="pt-48 ml-auto min-h-screen">
                <div className="lg:w-2/3 text-center mx-auto">
                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl"> Reimagine gas fee with <span className="text-primary dark:text-white">Sponsor Gas.</span></h1>
                    <p className="mt-8 text-gray-700 dark:text-gray-300">Tired of high gas fees holding you back from seamless transactions? Look no further! With #SponsorGas, you can leave gas fee worries behind.</p>
                    <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                      <Button type="button" label="Get Started" />
                      <Button type="button" label="Developers SDK" />
                    </div>
                    <div className="hidden py-8 mt-16 border-y border-gray-300 dark:border-gray-800 sm:flex justify-between">
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Configure paymaster</h6>
                            <p className="mt-2 text-gray-500">Configure custom Paymaster criteria</p>
                        </div>
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Access statistics</h6>
                            <p className="mt-2 text-gray-500">Access detailed Paymaster statistics</p>
                        </div>
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Integrate</h6>
                            <p className="mt-2 text-gray-500">Integrate applications with  SDK </p>
                        </div>
                    </div>
                </div>
                <SponsorGasStats/>
                {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="./images/clients/microsoft.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                      </div>
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                      <img src="./images/clients/airbnb.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                    </div>
                    <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                      <img src="./images/clients/google.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                    </div>
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="./images/clients/ge.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                      </div>
                      <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                        <img src="./images/clients/netflix.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                      </div>
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="./images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                    </div>
                </div> */}
            </div>
        </Container>
        <Footer/>
      </div>
  )
  
}

const stats = [
  { id: 1, name: 'UserOps every 24 hours', value: '0' },
  { id: 2, name: 'Gas fee paid', value: '$119 ' },
  { id: 3, name: 'Paymasters configured', value: '46' },
]

export  function SponsorGasStats() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
