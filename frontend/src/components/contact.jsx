import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./navbar"

  const contact = ()=>{
    return (
     <>
      <div> 
        <Navbar/> </div>
        <div className=' h-screen flex items-center justify-center '>
        
       <form className='border p-5 font-bold'>
       <h1 className='font-bold text-xl text-pink-500'>Contact Us</h1> <br />
       <h2 className='font-bold'>Name</h2>
       <input className='border rounded text-xl ' type="name"  placeholder="Enter Name" ></input>
       <br />  <br />
       <h2 className='font-bold'>Email</h2>
       <input className='border rounded text-xl ' type="Email"  placeholder="Enter Email" ></input>
       <br /> <br />
       <h2 className='font-bold'>Message</h2>
       <input className='border rounded text-xl h-20 w-50' type="message"  placeholder="Type your message" ></input>
       <br />
       <button className=' px-3 py-1 rounded bg-blue-500 text-white mt-5 hover:bg-grey-500'> Submit</button>
       </form>
      </div>
      </>
    )
  }

export default contact
