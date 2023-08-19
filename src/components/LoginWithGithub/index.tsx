'use client'
import React from "react"
import { signIn } from "next-auth/react"

export default function LoginWithGithub() {

    const handleLoginWithGithub = () =>{
        signIn('github',{ callbackUrl: '/dashboard' })
    }
    return (
      <div className="w-fit p-0.5 rounded-lg  border border-cyan-800 bg-cyan-100 "> 
        <button className="inline-flex items-center gap-x-2 rounded-md px-3 py-2 text-gray-800  text-sm font-semibold  shadow-sm hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          onClick={handleLoginWithGithub}
        >
          Login with Github
        </button>
      </div>)
}

