"use client"

import {useState} from "react";
import { useRouter } from "next/navigation";
import { error } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card2 from "../../public/assets/card2.png";

export default function LoginPage(){
    const [form, setForm] = useState({
        username: "", password: ""
    })
    const [message, setMessage] = useState("");
    const router = useRouter();

    async function handleLogin(e: React.FormEvent ) {
        e.preventDefault();
        setMessage("Checking...");

        const formData = new FormData();
        formData.append("username", form.username);
        formData.append("password",form.password);
        
        console.log("Sending form:", formData);

        try{
            const res = await fetch("/api/login/", {
                method: "POST",
                body: formData,
            });

            console.log("Raw respond:", res);

            const data = await res.json();
            console.log("Respond data:", data);
                    if(res.ok){
                        setMessage("Login success!");
                        
                    }else {
                        setMessage(data.error||"Login Failed");
                    }
            if(res.ok){
                console.log("Redirect to dashboard . . .");
                router.push("/");
            }
            }catch(err){
            console.error("Login error:", err);
            setMessage("Network error, try again");
        }
    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-white-500 to-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-lg">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl text-gray-900">
                        collect and connect. <p className="font-bold mt-[-7px]"> only at the Hub. </p>
                    </h1>
                    <div>
                        <Image src={Card2} alt="card" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-helvetica font-semibold text-lg flex items-center">
                            be part of us join the HubID.
                        </h1>
                        <p className="text-gray-600 text-sm text-left">
                            get your exclusive ID card being a collective diecast by purchasing our merchandise and be part of the Hub.
                        </p>
                    </div>
                    <p className="font-helvetica text-sm text-gray-500">© 64 Social Hub</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-white rounded-xl shadow-md p-12 space-y-5 inline-block w-fit">
                        <h2 className="font-helvetica text-2xl text-gray-800">
                            welcome to <span className="font-helvetica font-bold">
                                HubID.
                            </span>
                        </h2>
                        <form onSubmit={handleLogin} className="space-y-3">
                            <input
                                type="text"
                                placeholder="username"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                                onChange={(e) => setForm({...form, username: e.target.value})}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                                onChange={(e) => setForm({...form, password: e.target.value})}
                            />
                            <button
                                type="submit"
                                className="w-full bg-gray-500 text-white p-3 rounded-md hover:bg-white-600 transition
                                        border-transparent hover:border-gray-300 hover:text-gray-700 hover:chroma-text"
                            >
                                login
                            </button>
                           
                        </form>
                         <Link className="text-left flex text-sm text-purple-800 hover:underline" href="/register">
                            create new account here.
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const Login = () => {
//     
// }

// export default Login;