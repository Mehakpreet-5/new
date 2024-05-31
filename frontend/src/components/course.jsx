import React from 'react'
import Cards from "./cards"
import list from "../../src/assets/list.json"
import {Link} from "react-router-dom"
function course() {
  return (
   <>
   <div className="">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-semibold md:text4xl"> We are delighted to have you <span className="text-pink-500"> here !</span></h1>
      <p className="mt-12 m-20"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ut asperiores atque eum quaerat velit voluptatibus dignissimos, 
        nisi laudantium perspiciatis aliquam ipsa optio ducimus Dolores ut asperiores atque eum quaerat velit voluptatibus dignissimos, 
        delectus, beatae nemo doloremque illum aliquid. Dolores ut asperiores atque eum quaerat velit voluptatibus dignissimos.</p>
<Link to="/">
<button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700  duration-200"> Back</button>

</Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
      {
         list.map((item)=>(
          <Cards keys={item.id} item={item}/>
         ))
      }
    </div>
    </div></>
  )
}

export default course
