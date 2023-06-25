
import MessageList from "./MessageList";
import { getServerSession } from "next-auth";
import authOption from ".././pages/api/auth/[...nextauth]";
import Provider from "utils/provider";




export default async function homePage() {

  const res = await fetch(`${process.env.VERCEL_URL}/api/getMessages`)
  const messages = await res.json();
  const session = await getServerSession(authOption)


  return (
    <Provider session={session}>
      <MessageList initialMessages={messages} session={session} />
    </Provider>
  );
}
