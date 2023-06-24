"use client";
import { signIn } from "next-auth/react";

export default function AuthComponent({ providers }) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <p>you signIn with {provider.name}</p>
          <button onClick={() => signIn(provider.id, {callbackUrl: process.env.VERCEL_URL || "http://localhost:3000"})} className="bg-blue-500">facebook</button>
        </div>
      ))}
    </div>
  );
}
