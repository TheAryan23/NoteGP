import React, { useEffect, useState } from 'react' ;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'

import list from '../../public/list.json';
import Card from '../components/Card';
import Navbar from '../components/Navbar.jsx';


function Fifth() {
  const [sqlBooks, setSqlBooks] = useState([]);
  const [cnBooks, setCnBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const sqldata = res.data.filter((data)=>data.name==="NIS");
        const cndata = res.data.filter((data)=>data.name==="CC");
        console.log(sqldata);
        console.log(cndata);

        setSqlBooks(sqldata);
        setCnBooks(cndata);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

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
 <h1 className='mt-8 font-bold text-white text-4xl pb-2'>Fifth Semester</h1>
 
 </div>
 <div className='mt-8 font-bold text-2xl text-blue-500'>Network Information Security</div>
 <div> 
  <Slider {...settings}>
   {sqlBooks.map((item)=>(
    <Card item={item} key={item.id}/>
   ))}
  </Slider>
  </div>
  <div className='mt-8 font-bold text-2xl text-blue-500'>Cloud Computing</div>
  <div>
  <Slider {...settings}>
   {cnBooks.map((item)=>(
    <Card item={item} key={item.id}/>
   ))}
  </Slider>
  </div>
 </div>
 </div>
</>
)
}

export default Fifth ;
