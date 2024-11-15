import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

import list from '../../public/list.json';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Book from '../../../Backend/model/book.model';

function Freenotes() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data)=>data.name==="HTML");
        console.log(data);
        setBook(data);
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
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-20'>
     <div>
     <h1 className='font-semibold text-xl pb-2'>Free Notes</h1>
      <p>This is an example notes of HTML language , more notes are available at Notes page but for that you have to login with your email !!! </p>
     </div>
     <div> 
      <Slider {...settings}>
       {book.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
      </div>
     </div>
   </>
  );
}

export default Freenotes;
