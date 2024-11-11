import React from 'react'
import { Await, Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          
          toast.success("signup successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
         
         toast.error("Error:"+err.response.data.message);
         
        }
      });
    
  }
  return (
    <>
    <div className='flex h-screen items-center justify-center ' >
    <div id="my_modal_3" className="border border-{4px} p-3 border-cyan-500 rounded-xl">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
        <h3 className="font-bold text-lg">Signup</h3>
       <div className='mt-4 space-y-2'>
          <span>Name</span>
           <br/>
            <input type='text' placeholder='Enter your name' className='w-80 px-4 rounded-md outline-none '
            {...register("fullname", { required: true })}/>
             <br />
            {errors.fullname && ( 
            <span className="text-sm text-red-500">This field is required</span>)}
    
          </div>
          <div className='mt-4 space-y-2'>
             <span>Email</span>
             <br/>
             <input type='email' placeholder='Enter your email' className='w-80 px-4 rounded-md outline-none '
             {...register("email", { required: true })}/>
               <br />
              {errors.email && ( 
             <span className="text-sm text-red-500">This field is required</span>)}
            </div>
            <div className='mt-4 space-y-2'>
               <span>Password</span>
               <br/>
               <input type='password' placeholder='Enter your password' className='w-80 px-4 rounded-md outline-none '
               {...register("password", { required: true })}/>
               <br />
               {errors.password && ( 
               <span className="text-sm text-red-500">This field is required</span>)}
             </div>
             <div className='flex justify-around mt-4'>
             <button className='bg-blue-600 text-white rounded-md px-3 py-1 '>
               Signup
             </button>
             <p>
                Have account? <Link to='/' 
                className='underline text-blue-500 cursor-pointer'>
                Login
               </Link>
             </p>
            </div>
   </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
