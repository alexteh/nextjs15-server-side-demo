"use client"

// import { useAuth } from "@/lib/firebase/auth-context"
// import { auth } from "@/lib/firebase/firebase"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function ActionBar() {
  // const { user, loading } = useAuth()
  const router = useRouter()

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push("/login")
  //   }
  // }, [user, loading, router])

  // if (loading) return <div>Loading...</div>
  // if (!user) return null

  return (
    <>
      <div className='flex items-center justify-between w-full'>
        <div className='flex gap-5 py-3'>
          <Link href='/client-side' className=''>
            Client Side (axios api call)
          </Link>
          <Link href='/route-handlers' className=''>
            Server Side (Route Handlers)
          </Link>
          <Link href='/server-action' className=''>
            Server Side (Server Action)
          </Link>
          <Link href='/server-component' className=''>
            Server Component
          </Link>
        </div>
        {/* <div className='flex gap-5 items-center '>
          <div>{user?.email}</div>
          <div>
            <button className='p-0 m-0' onClick={() => auth.signOut()}>
              Logout
            </button>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default ActionBar
