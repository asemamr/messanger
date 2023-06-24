"use client"
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button href={"./auth/signout"} onClick={()=> signOut()} className="bg-blue-500 hover:bg-blue-700 transition-colors rounded text-white font-bold px-4 py-1">Sign Out</button>
  );
}

export default SignOutButton;