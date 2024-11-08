import React from 'react'

function Card({item}) {
  
  return (
   <>
    <div className='  flex flex-wrap justify-center items-center mt-6'>
    <a href={item.link}>
      <div className='w-60 p-2 bg-gray-100 rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl' >
        <img className='h-40 object-cover rounded-xl ' src={item.image} alt='shoes'></img>
        <div className='flex space-x-4'>
        <div className='h-6 w-fit px-3 mt-1 justify-center items-center rounded-md text-white bg-sky-500 ml-2 '>{item.name}</div>
        <div className='h-6 w-fit px-3 mt-1 justify-center items-center rounded-md text-white bg-yellow-500 '>{item.pages}</div>
        </div>
        <div className='p-2'>
          <h2 className='font-semibold text-xl mb-1 text-black'>{item.chpt}</h2>
          <p className='text-lg text-gray-600 '>{item.title}</p>
        </div>
        <div className='m-2'>
          <a role='button' href={item.link} className='text-white bg-purple-600 px-3 py-1 rounded-md '>view</a>
        </div>
        
        

      </div>
      </a>

    </div>
   </>
  )
}

export default Card
