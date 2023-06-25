"use client";
import { signIn } from "next-auth/react";
import {FaSquareFacebook} from "react-icons/fa6"
import {SiMessenger} from "react-icons/si"

export default function AuthComponent({ providers }) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="text-center ">
          <SiMessenger className="text-blue-500 text-center h-32 w-32 mx-auto my-10"/>
          <p>you signIn with {provider.name}</p>
          <button onClick={() => signIn(provider.id, {callbackUrl: process.env.VERCEL_URL || "http://localhost:3000"})} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 font-bold capitalize flex gap-x-4 mx-auto"><FaSquareFacebook className="text-2xl" /> facebook</button>
        </div>
      ))}
    </div>
  );
}
