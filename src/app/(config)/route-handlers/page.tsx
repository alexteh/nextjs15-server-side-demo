import React from "react"
import Test from "./Test"

export default async function Page() {
  // async function fetchUrlData(prevState: any, formData: FormData) {
  //   const url = formData.get("url") as string

  //   try {
  //     if (!url || !url.startsWith("http")) {
  //       throw new Error("Invalid URL format")
  //     }

  //     const res = await fetch(url)
  //     if (!res.ok) throw new Error(`HTTP ${res.status}`)
  //     const data = await res.json()

  //     // Save to Zustand store
  //     setResult(url, data)
  //     return data
  //   } catch (error) {
  //     const errorMessage =
  //       error instanceof Error ? error.message : "Fetch failed"
  //     setResult(url, null, errorMessage)
  //     return {
  //       error: errorMessage,
  //       timestamp: new Date().toISOString(),
  //     }
  //   }
  // }
  return (
    <>
      <div className='flex flex-col'>
        <div className='text-xl pb-4'>Server Side - Route Handlers</div>
        <div className='text-red-500'>
          <Test />
        </div>
      </div>
    </>
  )
}
