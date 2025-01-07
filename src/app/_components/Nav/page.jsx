"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {  useState } from 'react'

export default function Nav() {
  const [search, setsearch] = useState("")
  
  const router = useRouter()


  async function handleSearch() {
    if (search.trim()) {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        if (res.data.meals && res.data.meals.length > 0) {
          const mealName = res.data.meals[0].strMeal;
          console.log("Search Result:", mealName);
          router.push(`/meals/${mealName}`);
        } else {
          setsearch("");  // Reset input field after successful search
          alert("No such meal like this.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        alert("No such a meal like this.");
        setsearch(""); 
      }
    } else {
      alert("Please enter a search term.");
      setsearch(""); 
    }
  }
  
  return (
    <header className="bg-white h-[90px] flex justify-center items-center">
  <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between gap-9">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Link rel='preload' className="flex md:flex-row flex-col-reverse md:justify-center  items-center text-teal-600" href="/">
          <span className="md:text-[30px] text-green-500">Foodix</span>
          <Image src={"/logo.jpeg"} width={60} height={50}  alt='logo'/>
        </Link>
      </div>

      <div className="md:flex w-[15rem]  md:w-[20rem] md:items-center md:gap-12 ">
        <nav aria-label="Global" className=" w-full md:block">
         
<div className="relative ">
  <label htmlFor="Search" className="sr-only"> Search </label>

  <input
    type="text"
    id="Search"
    onChange={(e)=>{setsearch(e.target.value)}}
    value={search}
    placeholder="Search for..."
    className="w-full p-2 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm bg-slate-100 outline-none sm:text-sm"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button       onClick={handleSearch}
 type="button" className="text-gray-600 hover:text-gray-700">
      <span className="sr-only">Search</span>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>
        </nav>

        <div className="flex items-center gap-4">
          

       
        </div>
      </div>
    </div>
  </div>
</header>
  )
}
