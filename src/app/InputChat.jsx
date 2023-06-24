"use client"
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useSWR from "swr";
import fetcher from "utils/fetchMessages";



function InputChat({session}) {
  const [input, setInput] = useState("");


  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher)

  async function  submitForm(e) {
    e.preventDefault()

    const messageForSend = input
    setInput("")
    const id = uuid()
    const Message = {
      id,
      message: messageForSend,
      create_at: Date.now(),
      username: session.user.name || "Asem Amra",
      profilePic: session.user.image || "https://scontent.fdiy1-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=cA0UbZzuIigAX_slxB2&_nc_ht=scontent.fdiy1-1.fna&edm=AP4hL3IEAAAA&oh=00_AfDNaD11UDPmq8yl2FdHK1rCbokz8I8bVwVrOKYl91ml_Q&oe=6405E7D9",
      email: session.user.email || "asem@gmail.com"
    }

    async function SendMessage() {
      let res = await fetch("/api/addMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({Message})
      })
      let data = await res.json();
      return [...messages, data]
    }
    await mutate(SendMessage, {
      optimisticData: [...messages, Message],
      rollbackOnError: true
    })

  }
  return (
    <form onSubmit={submitForm} className="w-[100%] bg-white fixed bottom-0 flex space-x-4 py-6 px-10 drop-shadow-3xl">
      <input type="text"
        placeholder="Type a message"
        value={input}
        onChange={e=> setInput(e.target.value)}
        id="input"
        autoComplete="false"
        disabled={!session}
        className="flex-1 rounded focus:outline-none border-2 outline-none px-4 focus:ring-2 focus:border-transparent " />
        
      <button type="submit" disabled={!input} className="bg-blue-500 text-white rounded font-bold py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed">
        Send
      </button>
    </form>
  );
}

export default InputChat;