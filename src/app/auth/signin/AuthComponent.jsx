"use client";
import { signIn } from "next-auth/react";
import {FaSquareFacebook} from "react-icons/fa6"
import {SiMessenger} from "react-icons/si"
import {GrSend} from "react-icons/gr"
import {FaGoogle} from "react-icons/fa";
import {AiFillMessage} from "react-icons/ai";

export default function AuthComponent({ providers }) {
  const provider = providers.google;
  return (
    <div className="text-center ">
      <div className="bg-blue-500 w-32 h-32 rounded-full flex justify-center items-center mx-auto text-white">

      <AiFillMessage className=" h-20 w-20  text-white"/>
      </div>
      <p className="font-bold mt-8 mb-3">you signIn with {provider.name}</p>
      <button onClick={() => signIn(provider.id, {callbackUrl: process.env.VERCEL_URL || "http://localhost:3000"})} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 font-bold capitalize flex gap-x-4 mx-auto"><FaGoogle className="text-2xl" />Google</button>
    </div>
  );
}
