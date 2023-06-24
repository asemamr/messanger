import Pusher from "pusher";
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
  appId: "1546713",
  key: "5743c642f75db9783159",
  secret: "165db678b4004dddc319",
  cluster: "eu",
  useTLS: true
})

export const clientPusher = new ClientPusher('5743c642f75db9783159', {
  cluster: "eu",
  forceTLS: true
})


