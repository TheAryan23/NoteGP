import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import list from '../../public/list.json'

function Courses() {
    console.log(list)
  return (
   <>
   <div className=''>
    <Navbar/>
     <div className='flex flex-wrap justify-center items-center mt-6'>
      <div className='w-auto p-2 bg-gray-200 mt-20 rounded-lg' >
        <div className='flex flex-wrap justify-center text-black text-xl items-center font-medium'>Select the semester</div>
        <a href='/course/first'><div role='button'  className='bg-purple-600 my-8 rounded-xl px-20 py-2 text-white transform transition-all hover:-translate-y-2 duration-300 ' > First semester</div></a>   
        <a href='/course/second'><div role='button' className='bg-purple-600 my-8 rounded-xl px-20 py-2 text-white transform transition-all hover:-translate-y-2 duration-300'> Second semester</div></a>
        <a href='/course/third'><div role='button'  className='bg-purple-600 my-8 rounded-xl px-20 py-2 text-white transform transition-all hover:-translate-y-2 duration-300'> Third semester</div></a>
        <a href='/course/fourth'><div role='button' className='bg-purple-600 my-8 rounded-xl px-20 py-2 text-white transform transition-all hover:-translate-y-2 duration-300'> Fourth semester</div></a>
        <a href='/course/fifth'><div role='button'  className='bg-purple-600 my-8 rounded-xl px-20 py-2 text-white transform transition-all hover:-translate-y-2 duration-300'> Fifth semester</div></a>


      </div>
     </div>
     </div>
   
   </>
    
  )
}

export default Courses
