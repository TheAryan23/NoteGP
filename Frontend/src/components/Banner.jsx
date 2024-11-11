import React from 'react';
import banner from '../../public/banner.jpg'


export default function Banner() {

  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10'>
    <div className='order-2 md:order-1 w-full mt-12 md:w-1/2 '>
     <div className='space-y-12'>
     <h1 className='text-4xl font-bold'>
       Hello, polytechnic students here is your <span className='text-blue-400'>treasure of notes</span> preserve 
     </h1>
     <p className='text-xl font-semibold'>      
       NoteGP is an student made community website to provide notes to the polytechnic students . 
       explicitly desing to cover all theory sub of IT dept with curriculum .

     </p>
     
     <label className="input input-bordered flex items-center gap-2">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 16 16"
         fill="currentColor"
         className="h-4 w-4 opacity-70">
        <path
        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
       <path
        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
       </svg>
      <input type="text" className="grow" placeholder="Email" />
    </label>

    </div>
    <button className="py-3 mt-6 text-black bg-blue-500 px-8 border-blue-400 rounded-2xl hover:bg-blue-400 duration-200 "
    onClick={() => document.getElementById("my_modal_3").showModal() }
    >Login</button>
    </div>
     <div className='order-1 w-full md:w-1/2 flex justify-center items-center'>
     <img className='h-[25rem] max-w-full ' src={banner} />
     </div> 
   </div>
   
   </>
  )
}
