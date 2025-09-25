"use client";

import Link from "next/link";
import React from "react";
import Card2 from "../../public/assets/card2.png";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
    const [form, setForm] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
        nama:""
    });
    const [message, setMessage] = useState("");

   

    async function handleSubmit(e: React.FormEvent) {   
        e.preventDefault();
        setMessage("Registering...");

        if(form.password !== form.confirmPassword){
            setMessage("Passwords do not match");
            return;
        }

        try{

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")){
            const json = await res.json();

            if (res.ok) {
                setMessage("Registration successful! Please check your email to verify your account.");
                }else{
                setMessage(json.error || "Registration failed. Please try again.");
                }
        }else{
            const text = await res.text();
            console.error("Non-JSON response", text);
            setMessage("Server invalid")
        }

        }catch(err){
            console.error("Network error:", err);
            setMessage("Network error. Please try again.");
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
                 <div className="bg-white rounded-xl shadow-md p-12 space-y-5 inline-block">
                     <h2 className="font-helvetica font-bold text-2xl text-gray-800">
                         create an account.
                     </h2>
                     <p className="text-sm text-gray-500">
                         already have an account?{" "}
                         <Link href="/login" className="text-gray-800 font-semibold hover:underline">
                             sign in
                         </Link>
                     </p>
                     <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            type="text"
                            placeholder="name here"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                            onChange={(e) => setForm({...form, nama: e.target.value})}
                        />
                         <input
                            type="email"
                            placeholder="64socialhub@gmail.com"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                            onChange={(e) => setForm({...form, email: e.target.value})}
                        />
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
                        <input
                            type="password"
                            placeholder="re-type password"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                            onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                        />
                        <button
                            type="submit"
                            className="w-full bg-gray-500 text-white p-3 rounded-md hover:bg-white-600 transition
                            border-transparent hover:border-gray-300 hover:text-gray-700 hover:chroma-text"
                        >
                            sign up
                        </button>
                        <p>{message}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

// export default RegisterPage