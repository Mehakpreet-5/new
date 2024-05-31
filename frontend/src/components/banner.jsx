import React from 'react'
import books from "../../src/components/books.png"

function banner() {
  return (
   <>
   <div className="flex flex-col  md:flex-row my-10">
      <div className="w-full   md:w-1/2 space-y-12 ml-20 "> 
         <h1 className="text-4xl font-bold mt-20">Hello,welcomes here to learn something <span className="text-pink-500 "> new everyday!!!</span></h1>
          <h4 className="max-w-scr-2xl container mx-auto md:px-20 px-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia consequatur quo itaque minus veritatis, labore laudantium harum quaerat velit ullam veniam mollitia? Asperiores eius quidem fugiat ipsam sint omnis!</h4>
          <label className="input input-bordered flex items-center gap-2 h-9">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn bg-pink-500 text-white ml-1  "> Secondary</button>
        </div>
      <div className="w-full md:w-1/2"> <img className="w-3/4 h-100 m-20 order-1" src={books} alt="" /> </div>
       
   </div>
  
   </>
  )
}

export default banner
