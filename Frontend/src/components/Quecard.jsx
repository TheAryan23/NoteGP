import React from 'react'

function Quecard({item}) {
  return (
    <>
     
    <div className='flex flex-wrap justify-center items-center my-6'>
      <a href={item.link}>
        <div className='border-2 p-3  border-amber-400 rounded-xl '>
        <div className=' border-gray-300 max-w-fit rounded-xl pt-3 border-2  p-2'>
            <img className='h-[8rem] w-[9.5rem] rounded-xl ' src={item.image}/>        
        <div className='font-medium flex justify-center items-center mt-1 ' >
        {item.title}

        </div>
        </div>
        </div>
        </a>
    </div>
       
    </>
   
  )
}

export default Quecard
