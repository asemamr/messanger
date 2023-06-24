

export default async function fetcher() {
  const res = await fetch("/api/getMessages")
  let data = await res.json()
  console.log("the data form the fetcher", data);

  data.sort((a, b)=> a.create_at - b.create_at);

  

  return data;
}