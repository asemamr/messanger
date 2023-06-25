import Image from "next/image";
import image from "../images/person.jpg"
import TimeAgo from "react-timeago";

export default function Message({ messageId, message , session}) {

  
  const user = session ? session.user.email === message.email : true;
  const date = new Date(message.create_at)


  return (
    <div key={messageId} className={`mx-10 flex items-center  my-5 space-x-0 ${user && " space-x-3 text-right flex-row-reverse  justify-start"}`}>
      <div className={`w-14 h-14 overflow-hidden rounded-full ${user && "ml-3"}`}>
        <img
          width="80"
          height="40"
          alt="profile picture"
          src={session ? session.user.image : image}
          className="" />
      </div>
      <div>
      <p className={`text-blue-300 text-sm font-bold ${!user && "text-red-300 pl-3"}`}>{message.username }</p>
        <p className={`px-2 py-1 bg-blue-500 rounded-md text-white w-fit ml-3 ${!user && "bg-red-400 "}`}>{ message.message }</p>
      </div>
      <div className="self-end">
        <TimeAgo date={date} className="text-gray-500 text-sm"></TimeAgo>
      </div>
    </div>
  )
}