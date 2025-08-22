"use client"

import { useRouter } from "next/navigation"

export default function RefreshButton() {
  const router = useRouter()
  const handleSubmit = (e: any) => {
    // alert("abc")
    // router.refresh()
    window.location.reload(true)
  }

  return (
    <button
      type='button'
      onClick={handleSubmit}
      // onClick={() => router.refresh()}
      className='px-3 py-1 bg-amber-600 text-white rounded hover:bg-amber-700'>
      Get Jokes
    </button>
  )
}
