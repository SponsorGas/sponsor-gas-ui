"use client"
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  return (
      <div className="mx-auto max-w-2xl  sm:px-6 sm:py-20 lg:max-w-7xl mt-16  lg:px-8">
        <div className="flex flex-col items-center justify-center  mb-4">
          <h6 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Empowering Users and Gas Fee Sponsors</h6>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Sponsor Gas</h1>
        </div>
        <p className="text-xl lg:px-56 text-white mb-8 text-center line-clamp-5">
          A portal that brings together users and gas fee sponsors in a seamless ecosystem.
          With SponsorGas, gas fee sponsors can configure conditions for sponsoring user operations. 
          Users who wish to avail of this sponsorship can fulfill the requirements set by the sponsor, and in return, get their user operations funded.</p>
        <div className="flex justify-center items-center space-x-3" >
            <Button type={"button"} label={"Developers SDK"} subText="coming soon"/>
            <Button type={"button"} label={"Getting Started"}/>
        </div>
      </div>
   
  )
  
}
