"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';

export default function Name() {
    const [meals, setmeals] = useState([])
    let params = useParams()
    const {name} = params;
    console.log(name);
    
    useEffect(() => {
        let {name} = params
        getcat(name)
       
    }, [params])
    function getcat(name){
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        .then((res)=>{setmeals(res.data.meals)
            console.log(res.data.meals);
            
        })

    }
    var settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows:false,
      autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,
     
      responsive: [
          {
              breakpoint: 1024,  // For screens 1024px and below
              settings: {
                  slidesToShow: 3,  // Show 2 slides at this breakpoint
                  slidesToScroll: 1,
                  infinite: true
              }
          },
          {
              breakpoint: 768,  // For screens 768px and below
              settings: {
                  slidesToShow: 2,  // Show 1 slide at this breakpoint
                  slidesToScroll: 1,
                  infinite: true
              }
          },
          {
              breakpoint: 500,  // For screens 768px and below
              settings: {
                  slidesToShow: 1,  // Show 1 slide at this breakpoint
                  slidesToScroll: 1,
                  infinite: true
              }
          },
      ]
      
    };
  return (
    <div className='flex flex-col gap-10  '>
      <div className='flex'>
        <div className='h-[20rem] hidden lg:block w-1/5 m-auto'><img  className='h-full rounded-xl w-full object-cover' src="../break.jpg" alt="" /></div>
<div className='h-[20rem] w-full md:w-[50rem] m-auto'>
    <img className='h-full rounded-xl w-full object-cover' src="/menu.jpeg" alt="Menu" />
</div>
<div className='h-[20rem] hidden lg:block w-1/5 m-auto'><img  className='h-full w-full object-cover rounded-xl' src="../launch.jpg" alt="" /></div>

      </div>
      <div className='text-center text-3xl font-semibold text-blue-500'>
        Category : {name}
      </div>
      <div className=''>
            <Slider {...settings}>
                
                    
                {meals.map((meal) => (
                    <div key={meal.idMeal} className='flex  flex-col justify-center items-center h-[160px] w-[30px] bg-[#EFEFF1] gap-12 mt-20'>
                        <Link href={`/meals/${meal.strMeal}`}  className='w-[150px] outline-none flex justify-center items-center px-3 mx-3 translate-x-[100px] mt-8 translate-y-[-70px]'>
                            <img className='w-full shadow-xl rounded-full' src={meal.strMealThumb} alt={meal.strCategory} />
                        </Link>
                        <h3 className='text-center text-red-500 translate-y-[-40px]'>{meal.strMeal}</h3> 
                        
                    </div>
                ))}
                
            </Slider>
        </div>
    </div>
  )
}
