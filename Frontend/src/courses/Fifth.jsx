import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json';
import Card from '../components/Card';
import Navbar from '../components/navbar';


function Fifth() {
    const filterData=list.filter((data)=>data.name==="SQL");
    const CNData=list.filter((data)=>data.name==="CN")
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
        
     <div>
     <h1 className='font-semibold text-xl pb-2'>free notes</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga autem deleniti est temporibus excepturi. Dolorem, soluta voluptate. Rerum iste perspiciatis harum fugit voluptates, pariatur molestias animi modi unde voluptas!</p>
     </div>
     <div> 
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
      </div>
      <div className='mt-8 font-bold text-blue-500'>COMPUTER NETWORK</div>
      <div>
      <Slider {...settings}>
       {CNData.map((item)=>(
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
