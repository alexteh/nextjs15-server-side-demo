"use client"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import React, { useActionState, useEffect, useState } from "react"
import { searchTest } from "./action"
import { useSearchStore } from "./searchStore"

function Test(props: any) {
  const { result, setResult } = useSearchStore()
  const [state, formAction, pending] = useActionState(searchTest, null)

  useEffect(() => {
    if (state) {
      setResult(state.url, state.data || null, state.error)
    }
  }, [state, setResult])

  return (
    <>
      <div className={cn("", props.className)}>
        <form action={formAction} className='flex gap-2 items-center'>
          {/* <Input
            defaultValue={result?.url || props.value}
            type='url'
            name='url'
            placeholder='https://api.example.com/data'
            // required
            pattern='https?://.+'
            className='flex-1'
          /> */}
          <button
            type='submit'
            className='bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50'>
            {pending ? "Fetching..." : "Search Test"}
          </button>
        </form>

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
