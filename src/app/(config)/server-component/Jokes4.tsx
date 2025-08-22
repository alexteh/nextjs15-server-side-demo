import { Suspense } from "react"

async function getData(delay: number) {
  // simulate delay
  await new Promise((resolve) => setTimeout(resolve, delay))

  const res = await fetch("https://official-joke-api.appspot.com/random_joke", {
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}

async function Posts4({ delay }: { delay: number }) {
  const post = await getData(delay)

  return (
    <div
      key={post.id}
      className='border-b-2 border-amber-950 hover:font-bold p-2'>
      <p>{post.setup}</p>
      <p>{post.punchline}</p>
    </div>
  )
}

export default function Jokes4({
  title,
  delay,
}: {
  title: string
  delay: number
}) {
  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>{title}</h1>
      <Suspense fallback={<p className='text-gray-500'>Loading Jokes...</p>}>
        <Posts4 delay={delay} />
      </Suspense>
    </div>
  )
}
