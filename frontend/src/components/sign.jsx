import React from 'react'
import { Link } from 'react-router-dom'

function sign() {
  return (
 <>
 <div className='flex h-screen items-center justify-center '>
 <div id="my_modal_2" className="border shadow-md w-[450px]">
  <div className="model-box">
 
  <div className="login-model flex model-box">
    <form method='dialog'>
      <Link to="/"
      className='btn btn-sm btn-circle btn-ghost font-bold '>
      X
      </Link>
    </form>
          <form  className='font-bold ml-14  '>
            <h1 className='font-bold text-xl mt-2'> Sing up</h1> <br />
            <span>Name</span> <br />
            <input className='border rounded text-xl s' type="email"  placeholder="Enter email" />
            <br /> <br />
            <label>Email:</label> <br />
            <input className='border rounded text-xl s' type="email"  placeholder="Enter email" />
            <br /> <br />
            <label>Password:</label>
            <br />
            <input className=' text-xl border rounded' type="password"  placeholder="Password" />
            <br />
          <div className='flex justify-around mt-4'>
          <button className='  mr-24 text-bold  bg-pink-500 px-3 py-1 rounded'>  Sign up</button>
           <p> Have account? <Link to="/" className='ml-2 underline text-blue-500 mr-2'> Login </Link></p>
           </div>
          </form>
          
        </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</div>
   </div></>
  )
}

export default sign
