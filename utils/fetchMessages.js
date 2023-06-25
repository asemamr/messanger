

export default async function fetcher() {
  const res = await fetch("/api/getMessages")
  let data = await res.json()

  data.sort((a, b)=> a.create_at - b.create_at);

  return data;
}