import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

import list from '../../public/list.json';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Book from '../../../Backend/model/book.model';


function Third() {
  const [sqlBooks, setSqlBooks] = useState([]);
  const [mprBooks, setMprBooks] = useState([]);
  const [javaBooks, setJavaBooks] = useState([]);
  const [dcBooks, setDcBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://localhost:4001/book");

        const sqldata = res.data.filter((data)=>data.name==="DBMS");
        const mprdata = res.data.filter((data)=>data.name==="MPR");
        const javadata = res.data.filter((data)=>data.name==="JAVA");
        const dcdata = res.data.filter((data)=>data.name==="DC");
        console.log(sqldata);
        console.log(mprdata);
        console.log(javadata);
        console.log(dcdata);

        setSqlBooks(sqldata);
        setMprBooks(mprdata);
        setJavaBooks(javadata);
        setDcBooks(dcdata);


      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  


    
   // const CNData=res.data.filter((data)=>data.name==="CN")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    
        <>
        <div className=''>
        <Navbar/>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-20'>
        
     <div className='flex justify-center'>
     <h1 className='font-semibold  text-4xl pb-2'>Third Semester</h1>
      {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga autem deleniti est temporibus excepturi. Dolorem, soluta voluptate. Rerum iste perspiciatis harum fugit voluptates, pariatur molestias animi modi unde voluptas!</p> */}
     </div>
     <div className='mt-8 font-bold text-2xl text-blue-500'>Microprocessor</div>
     <div> 
      <Slider {...settings}>
       {mprBooks.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
      </div>
      <div className='mt-8 font-bold text-2xl text-blue-500'>Database Management System</div>
      <div>
      <Slider {...settings}>
       {sqlBooks.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
      </div>
      <div className='mt-8 font-bold text-blue-500'>Java programming</div>
      <div>
      <Slider {...settings}>
       {javaBooks.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
      </div>

      <div className='mt-8 font-bold text-blue-500'>Data Communication</div>
      <div>
      <Slider {...settings}>
       {dcBooks.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
      </div>
      
     </div>
     </div>
   </>
  )
}

export default Third ;
