import React from 'react';
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const cuisines = [
    { name: 'Biryani', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Rolls', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Pizzas', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Tea', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Burger', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Chinese', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Cake', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Dessert', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'North Indian', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'South Indian', image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  ];

  return (
    <div className="max-w-[900px] mx-auto py-14">
      <div className="relative w-full mx-auto mb-4 flex items-center border border-gray-300 px-3 rounded">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="w-full p-2 outline-none  "
         
        />
         <CiSearch />
       
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Recent Searches</h2>
        <div className="flex items-center mt-2">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21l-2-2a10 10 0 1114 0l-2 2m-6 0v-6m0 6H4" />
          </svg>
          <span>Kannur Kitchen</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Popular Cuisines</h2>
        <div className="flex overflow-x-auto mt-2 space-x-4">
          {cuisines.map((cuisine, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="mt-2 text-center">{cuisine.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
