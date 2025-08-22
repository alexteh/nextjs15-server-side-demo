import React from "react"
import Jokes from "./Jokes"
import Jokes2 from "./Jokes2"
import Jokes3 from "./Jokes3"
import Jokes4 from "./Jokes4"

function page() {
  return (
    <>
      <div className='flex flex-col'>
        <Jokes title='Jokes A' delay={500} />
        <Jokes2 title='Jokes B' delay={1500} />
        <Jokes3 title='Jokes C' delay={200} />
        <Jokes4 title='Jokes D' delay={3500} />
      </div>
    </>
  )
}

export default page
