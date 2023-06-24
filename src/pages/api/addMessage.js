
import { serverPusher } from "../../../pusher"
import redis from "../../../redis"



export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({name: "method not allowed"})
    return
  };
  const { Message } = req.body
  

  const newMessage = {
    create_at: Date.now(),
    ...Message
  }

  await redis.hset("messages", newMessage.id, JSON.stringify(newMessage));
  await serverPusher.trigger("messages", "new-message", newMessage)
  
  

  res.status(200).json(newMessage)
}