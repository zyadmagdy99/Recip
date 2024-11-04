"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"


export default function Meal() {
    let params = useParams()

    const [meals, setmeals] = useState([])
    function getmeal(meal){
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then((res)=>{
            console.log(res.data.meals[0]);
            setmeals(res.data.meals[0])
            
        })
    } 
    useEffect(() => {
       let {meal} =params
       console.log(meal);
         getmeal(meal)
   }, [params])
   
  return (
    <div className='md:flex md:p-4 md:justify-around '>
        
      <motion.div initial={{opacity:0, x:-250 }} transition={{delay:1}} animate={{x:0,opacity :1}} className='w-full  md:w-1/2 overflow-hidden md:max-w-[30rem]'><img src={meals.strMealThumb} className='w-full md:rounded-xl object-cover' alt="" /></motion.div>
      <motion.div initial={{opacity:0, x:250 }} transition={{delay:1.5}} animate={{x:0,opacity :1}} className='p-3 flex flex-col gap-4 overflow-hidden md:w-1/2'>
        <h1 className='text-4xl text-center text-red-500'>{meals.strMeal}</h1>
        <h1 className='text-3xl font-semibold'>Instractions</h1>
        <motion.div  className='text-xs text-[#000000b2] line-clamp-[15]'>
            {meals.strInstructions}
        </motion.div>
        <div>
            <div className='text-blue-500'>
                <h1><span className='text-2xl me-3 text-black'>Area:</span>{meals.strArea}</h1>
            </div>
            <div className='text-blue-500'>
            <h1><span className='text-2xl me-3 text-black'>Category:</span>{meals.strCategory}</h1>
            </div>
        <div className='flex flex-wrap md:flex-nowrap md:items-baseline'>
            <p className='text-2xl me-3 text-black'>Recepy:</p>
            <div className='flex flex-wrap mt-3 gap-2'>
                <p className='p-1 px-2 rounded-2xl bg-blue-300'>{meals.strIngredient1}</p>
                <p className='p-1 px-2 rounded-2xl bg-blue-300'>{meals.strIngredient2}</p>
                <p className='p-1 px-2 rounded-2xl bg-blue-300'>{meals.strIngredient3}</p>
                <p className='p-1 px-2 rounded-2xl bg-blue-300'>{meals.strIngredient4}</p>
                <p className='p-1 px-2 rounded-2xl bg-blue-300'>{meals.strIngredient5}</p>
                <p className='p-1 px-2 rounded-2xl bg-blue-300'>{meals.strIngredient6}</p>
                <p className='p-1 px-2 rounded-2xl bg-blue-300'>{meals.strIngredient8}</p>
                <p className='p-1 px-2 rounded-2xl bg-blue-300'>{meals.strIngredient7}</p>
            </div>
        </div>
        <div className='flex items-center'>
        <p className='text-2xl me-3 text-black'>Tags:</p>
        <div className='flex flex-wrap mt-3 gap-2'>
                <a href={meals.strSource} className='p-1 px-2 rounded-2xl bg-green-300'>source</a>
                <a href={meals.strYoutube} className='p-1 px-2 rounded-2xl bg-yellow-300'>Youtube</a>
             
            </div>
        </div>
        </div>
      </motion.div>
    </div>
  )
}
