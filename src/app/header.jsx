import Image from "next/image";
import Link from "next/link";
import SignOutButton from "./SignOutButton";


export default function Header({ session }) {
  

  if (session) {
    return (
      <header className="sticky z-10 shadow-sm py-7 px-20 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="overflow-hidden h-20 w-20 rounded-full">
            <img
              src={session.user.image}
              alt="profile"
              height="80"
              width="80" />
          </div>
          <div>
            <p className="text-blue-500 font-bold">Logged in as:</p>
            <h3 className="font-bold text-lg">{ session.user.name}</h3>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img
            src={"https://links.papareact.com/jne"}
            alt="logo"
            height="10"
            width="50"
          />
          <SignOutButton />
        </div>
      </header>
    );
  }
  return (
    <header className=" sticky z-10 shadow-sm p-7 flex flex-col justify-center space-y-2 items-center">
      <div className="flex space-x-4 items-center justify-center">
        <img
          src={"https://links.papareact.com/jne"}
          alt={"logo"}
          height={"10"}
          width={"50"}
        />
        <p className="text-blue-500 font-bold">Welcome to Meta Messenger</p>
      </div>
      <Link href={"./auth/signin"} className="bg-blue-500 hover:bg-blue-700 transition-colors rounded text-white font-bold px-4 py-1">
        Sign In
      </Link>
    </header>
  );
}
