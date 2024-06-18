import React from 'react'
import { IoStar } from "react-icons/io5";

function Cards({dish}) {
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden ">
    <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover transition ease-in-out hover:-translate-y-1 hover:scale-110" />
    <div className="p-4">
      <h3 className="text-lg font-semibold  ">{dish.name}</h3>
      <p className="text-gray-500 text-sm">{dish.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold text-orange-500">{dish.price}$</span>
      <span className='text-lg  font-bold text-green-500 flex items-center gap-2'><IoStar />{""}</span>
      </div>
    </div>
  </div>
  )
}

export default Cards