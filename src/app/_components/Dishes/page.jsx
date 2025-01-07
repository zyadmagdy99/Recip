"use client"
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Link from 'next/link';
export default function dishes() {
    const [meals, setmeals] = useState([])
  
    function getMeals() {

        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => {
                setmeals(res.data.categories)
            })
            
    }
    console.log(meals);
    
    useEffect(() => {
      getMeals()
    
      
    }, [])
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,         
        autoplaySpeed: 3000,
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
        <div className='flex flex-col justify-center mt-10'>
                        <p className='text-[40px] text-center font-semibold'>Check out our menu</p>

            <Slider {...settings}>
                
                    
                {meals.map((meal) => (
                    <div  key={meal.idCategory} className='flex px-3 mx-3  flex-col justify-center items-center h-[160px] w-[30px] bg-[#EFEFF1] gap-12 mt-20'>
                        <Link href={`categories/${meal.strCategory}`} className='w-[200px] transform duration-1000 transition-transform hover:rotate-[20deg] outline-none flex justify-center items-center translate-x-[55px] mt-8 translate-y-[-70px]'>
                            <img className='w-full shadow-xl rounded-full' src={meal.strCategoryThumb} alt={meal.strCategory} />
                        </Link>
                        <h3 className='text-center  translate-y-[-40px]'>{meal.strCategory}</h3> 
                        
                    </div>
                ))}
                
            </Slider>
        </div>
    );
    
    
}
