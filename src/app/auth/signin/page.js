
import { getProviders, signIn } from "next-auth/react";
import AuthComponent from "./AuthComponent";


export default async function SignIn() {
  const providers = await getProviders()

  

  // {
  //   Object.values(providers).map((provider) => (
  //     <div key={provider.name}>
  //       <p>you signIn with { provider.name }</p>
  //       {/* <button onClick={()=> signIn(provider.id)}></button> */}
  //     </div>
  //   ))
  // }
  return (
    
    <div>
      
      <AuthComponent providers={providers} />
    </div>
  )
}