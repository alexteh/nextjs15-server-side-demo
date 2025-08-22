export async function GET(request: Request) {
  const res = await fetch("https://api.vercel.app/blog")
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  //   const res = await request.json()
  return Response.json({ data })
}
