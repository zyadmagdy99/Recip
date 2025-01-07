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
  
    useEffect(() => {
      async function getcategory() {
        try {
          let { name } = params
          await getcat(name)  
        } catch (error) {
          console.error(error)
        }
      }
      getcategory()
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
      <div className='flex justify-center items-center'>
        <div className='h-[40rem] w-full md:w-[80%]  lg:block  m-auto'>
        <img  className='h-full rounded-xl w-full object-cover' src="../menu.jpg" alt="" />
        </div>

<div className='h-[40rem] hidden lg:block w-1/5 m-auto'>
<img  className='h-1/2 rounded-xl w-full object-cover' src="../break.jpg" alt="" />
<img  className='h-1/2 w-full object-cover rounded-xl' src="../launch.jpg" alt="" />
</div>

      </div>
      <div className='text-center flex flex-col gap-7 text-3xl font-semibold text-blue-500'>
        <span className=' md:text-[60px] '>Welcome to our menu</span>
        <span className='text-red-400 md:text-3xl text-[20px]'>Category : {name}
            </span>
      </div>
      <div className=''>
            <Slider {...settings}>
                
                    
                {meals.map((meal) => (
                   
                    <Link key={meal.idMeal} href={`/meals/${meal.strMeal}`} className="group  relative block  bg-black">
                    <img
                      alt={meal.strCategory}
                      src={meal.strMealThumb}
                      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                  
                    <div className="relative p-4 sm:p-6 lg:p-8">
                      <p className="text-sm font-medium animate-pulse uppercase tracking-widest text-pink-500">{name}</p>
                  
                      <p className="text-xl font-bold text-white sm:text-2xl">{meal.strMeal}</p>
                  
                      <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                          className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                
            </Slider>
        </div>
    </div>
  )
}
