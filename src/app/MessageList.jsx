"use client"

import useSWR  from "swr";
import fetcher from "../../utils/fetchMessages"
import Message from "./Message";
import { useEffect } from "react";
import { clientPusher } from "../../pusher";

export default function MessageList({initialMessages, session}) {
  const isUser = false;

  const { data, isLoading, isValidating, mutate } = useSWR("/api/getMessages", fetcher);
  
  
  useEffect(() => {
    let height = document.body.scrollHeight;
    scrollTo(0, height)
    let channel = clientPusher.subscribe("messages")
    
    channel.bind("new-message", async(newMess) => {
      if (data == undefined) {
        await mutate(fetcher)
      }
      else if (data.find((message) => message.id === newMess.id)) {
        return
      }
      else {
        await mutate(fetcher, {
          optimisticData: [...data, newMess],
          rollbackOnError: true
        })
      }
    })
    return (() => {
      channel.unbind_all()
      // channel.unsubscribe()
    })
  }, [ data, mutate])
  

  // if (!session) {
  //   return (
  //       <h2 className="font-bold text-center pt-6">Log in to show you messages</h2>
  //     )
  //   }
    return (
      <div className={`mb-[110px] ${isUser && "bg-red-500"}`}>
        {
          (data || initialMessages).map((message) => (
            <Message session={session} key={message.id} messageId={message.id} message={message}></Message>
          ))
        }
      </div> 
    )
  
}