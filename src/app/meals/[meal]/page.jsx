"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Error from '../../_components/Error'


export default function Meal() {
    
    let params = useParams()
    
    const [meals, setmeals] = useState([])
    const [ErrorP, setError] = useState(false)
      const [loading, setloading] = useState(false)
        
        if (loading) {
          return <div className="flex justify-center items-center h-screen">
            <div className="loader">Loading...</div>
          </div>
        }
    
   async function getmeal(meal){
       await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then((res)=>{
            console.log("themeal",res.data.meals[0].strYoutube);
            setmeals(res.data.meals[0])
            
        }).catch((err)=>{
          setError(true)
        })
    } 
    useEffect(() => {
      setloading(true)
       let {meal} =params
       console.log(meal);
         getmeal(meal)
         setloading(false)
   }, [params])

   if(ErrorP){
    return <Error/>
   }
   
  return (
    <div className='md:flex flex-col md:p-4 md:justify-around gap-10'>
        <div className='flex flex-col md:flex-row justify-around'>
      <motion.div initial={{opacity:0, x:-250 }} transition={{delay:1}} animate={{x:0,opacity :1}} className='w-full md:w-1/2 overflow-hidden md:max-w-[30rem]'><img   loading="lazy" 
 src={meals.strMealThumb} className='w-full md:rounded-xl object-cover' alt="" /></motion.div>
      <motion.div initial={{opacity:0, x:250 }} transition={{delay:1.5}} animate={{x:0,opacity :1}} className='p-3 flex flex-col gap-4 overflow-hidden md:w-1/2'>
        <h1 className='text-4xl text-center text-red-500'>{meals.strMeal}</h1>
        <h1 className='text-3xl font-semibold'>Instractions</h1>
        <motion.div  className='text-sm text-[#000000b2] line-clamp-[15]'>
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
        <p className='flex justify-center text-[30px] mt-5 md:text-[40px] text-green-500 animate-pulse'>How to Do? Watch Now</p>
      <div className='flex justify-center '>
      <a  href={meals.strYoutube} target="_blank" rel="noreferrer">
                    <img  className='max-h-[40rem] w-[70rem]' src={`/poster.jpg`} alt={meals.strMeal} loading='lazy'/>
            </a>
      </div>
    </div>
  )
}
