import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
// import Sign from "../components/sign"
function login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
<>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-black text-white " onClick={()=>document.getElementById('my_modal_2').showModal()}>Login</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
 
  <div className="login-model  ml-7 flex">
          <form onSubmit={handleSubmit(onSubmit)} className='font-bold ml-14  '>
            <h1 className='font-bold'>Login</h1> <br />
            <div>
            <label>Email:</label> <br />
            <input className='border rounded text-xl s' type="email"  placeholder="Enter email" 
            {...register("EmailRequired", { required: true })} /> <br />
             {errors.emailRequired && (<span>This field is required</span>)}
            </div>
            <br /> <br />
          <div>
          <label>Password:</label>
            <br />
            <input className=' text-xl border rounded' type="password"  placeholder="Password" 
            {...register("Password", { required: true })} /> <br />
             {errors.password && (<span>This field is required</span>)}
          </div>
            <br />
          <div className='flex justify-around mt-4'>
          <button className='  mr-24 text-bold  bg-pink-500 px-3 py-1 rounded'>  login</button>
           <p> not registered? <Link to="/sign" className='ml-2 underline text-blue-500'> Sign </Link></p>
           </div>
          </form>
          
        </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</>
  )
}

export default login
