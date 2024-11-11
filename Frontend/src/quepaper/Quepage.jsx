import React, { useEffect, useState } from 'react'
import Quecard from '../components/Quecard'
import Navbar from '../components/Navbar'
import axios from 'axios';



function Quepage() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data)=>data.name==="QUE");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
   
  return (
    <>
    <div className=''>
    <Navbar/>
    <div className='flex justify-center'><h1 className='mt-8 font-bold text-4xl text-white pb-2'>Question Paper</h1></div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Quecard key={item.id} item={item} />
          ))}
        </div>
    
   
    </div>
    </>
  )
}

export default Quepage
