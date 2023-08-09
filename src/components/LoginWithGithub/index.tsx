'use client'
import React from "react"
import { signIn } from "next-auth/react"

export default function LoginWithGithub() {

    const handleLoginWithGithub = () =>{
        signIn('github',{ callbackUrl: '/dashboard' })
    }
    return (<button className="flex justify-end text-white"
    onClick={handleLoginWithGithub}
    >
      Login with Github
    </button>)
}

