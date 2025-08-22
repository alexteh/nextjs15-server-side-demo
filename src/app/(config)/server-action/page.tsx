import React from "react"
import Test from "./Test"

function page() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='text-xl pb-4'>Server Side - Server Action</div>
        <div className='border-1 border-primary/40 p-5 rounded-md mb-5 w-200'>
          <Test />
        </div>
      </div>
    </>
  )
}

export default page
