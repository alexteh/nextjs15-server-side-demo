"use client"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { useSearchStore } from "./searchStore"
import axios, { AxiosError } from "axios"

function Test(props: any) {
  const { result, setResult } = useSearchStore()
  const [loading, setLoading] = useState(false)

  async function fetchUrlData() {
    const url = "https://jsonplaceholder.typicode.com/posts"

    setLoading(true)
    try {
      // Axios automatically parses JSON response
      const res = await axios.get(url)

      // Save to Zustand store
      setResult(url, res.data)
      return res.data
    } catch (error) {
      let errorMessage = "Fetch failed"
      if (axios.isAxiosError(error)) {
        errorMessage =
          (error.response && `HTTP ${error.response.status}`) ||
          error.message ||
          "Axios error"
      } else if (error instanceof Error) {
        errorMessage = error.message
      }

      setResult(url, null, errorMessage)
      return {
        error: errorMessage,
        timestamp: new Date().toISOString(),
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("", props.className)}>
      <button
        onClick={fetchUrlData}
        className='bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50'
        disabled={loading}>
        {loading ? "Fetching..." : "Search Test"}
      </button>

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
  )
}

export default Test
