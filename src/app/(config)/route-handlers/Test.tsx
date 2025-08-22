"use client"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import React, { useActionState, useEffect, useState } from "react"
import { useSearchStore } from "./searchStore"

function Test(props: any) {
  const { result, setResult } = useSearchStore()
  const [loading, setLoading]: any = useState(false)

  async function fetchUrlData() {
    // const url = formData.get("url") as string
    const url = "http://localhost:3000/route-handlers/api"

    try {
      // if (!url || !url.startsWith("http")) {
      //   throw new Error("Invalid URL format")
      // }

      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()

      // Save to Zustand store
      setResult(url, data)
      return data
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Fetch failed"
      setResult(url, null, errorMessage)
      return {
        error: errorMessage,
        timestamp: new Date().toISOString(),
      }
    }
  }

  // useEffect(() => {
  //   if (state) {
  //     setResult(state.url, state.data || null, state.error)
  //   }
  // }, [state, setResult])

  return (
    <>
      <div className={cn("", props.className)}>
        {/* <form action={fetchUrlData} className='flex gap-2 items-center'> */}
        <Input
          defaultValue={result?.url || props.value}
          type='url'
          name='url'
          placeholder='https://api.example.com/data'
          // required
          pattern='https?://.+'
          className='flex-1'
        />
        <button
          onClick={fetchUrlData}
          // type='submit'
          className='bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50'>
          {loading ? "Fetching..." : "Search Test"}
        </button>
        {/* </form> */}
        <div>
          <pre className='text-sm overflow-auto max-h-60'>
            {result
              ? JSON.stringify(result.data || result.error, null, 2)
              : "Submit a URL to fetch data"}
          </pre>
        </div>
        {result?.timestamp && (
          <p className='text-xs text-muted-foreground mt-2'>
            Last fetched: {new Date(result.timestamp).toLocaleString()}
          </p>
        )}
      </div>
    </>
  )
}

export default Test
