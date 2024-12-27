
"use client"
import { useState } from 'react';

import axios from "axios"

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] =useState("");
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="border flex flex-col gap-4 border-gray-300 p-4 rounded-lg shadow-md w-full max-w-sm">
                <input className="bg-white text-black px-5 py-1.5 rounded-md focus:outline-none" type="text" placeholder="Username"
                onChange={(e)=>{setUsername(e.target.value)}}
                ></input>
                <input className="bg-white text-black px-5 py-1.5 rounded-md focus:outline-none" type="password" placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}></input>
                <button className="bg-gray-600 hover:bg-gray-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                onClick={()=>{
                    axios.post("http://localhost:3000/api/v1/signup",{
                        username,
                        password
                    })
                }}>Sign Up</button>
            </div>
        </div>
    )
}