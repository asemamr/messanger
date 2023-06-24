import redis from "../../../redis"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status("405").json({ name: "this method is not allowed" })
    return;
  }
  
  let messages = await redis.hvals("messages");
  if (messages) {
    messages = messages.map(message => {
      return JSON.parse(message)
    })
  }
  

  
  
  res.status("200").json(messages)
}