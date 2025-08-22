"use server"

export async function searchTest(prevState: any, formData: FormData) {
  let url: any = "" // = formData.get("url") as string
  if (url == "") {
    // url = "https://api.vercel.app/blog"
    url = "https://jsonplaceholder.typicode.com/posts"
  }

  try {
    if (!url || !url.startsWith("http")) {
      throw new Error("Invalid URL format")
    }

    const res = await fetch(url, { cache: "no-store" }) // server fetch

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()

    return {
      data,
      url,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Fetch failed"
    return {
      error: errorMessage,
      url,
      timestamp: new Date().toISOString(),
    }
  }
}
