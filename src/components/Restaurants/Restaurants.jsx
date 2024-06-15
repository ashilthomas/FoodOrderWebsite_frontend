import React, { useState } from 'react';
import Cards from '../Cards/Cards';

import { Link } from 'react-router-dom';


import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const dishes = [
  {
    name: 'Greek salad',
    price: '$12',
    rating: 4,
    image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Food provides essential nutrients for overall health and well-being',
  },
  {
    name: 'Veg salad',
    price: '$18',
    rating: 4,
    image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Food provides essential nutrients for overall health and well-being',
  },
  {
    name: 'Clover Salad',
    price: '$16',
    rating: 4,
    image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Food provides essential nutrients for overall health and well-being',
  },
  {
    name: 'Chicken Salad',
    price: '$24',
    rating: 4,
    image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Food provides essential nutrients for overall health and well-being',
  },
  {
    name: 'Greek salad',
    price: '$12',
    rating: 4,
    image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Food provides essential nutrients for overall health and well-being',
  },
  {
    name: 'Veg salad',
    price: '$18',
    rating: 4,
    image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Food provides essential nutrients for overall health and well-being',
  },
  {
    name: 'Clover Salad',
    price: '$16',
    rating: 4,
    image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Food provides essential nutrients for overall health and well-being',
  },
  {
    name: 'Chicken Salad',
    price: '$24',
    rating: 4,
    image: 'https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Food provides essential nutrients for overall health and well-being',
  },
];

// const DishCard = ({ dish }) => {
//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden ">
//         <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
//         <div className="p-4">
//           <h3 className="text-lg font-semibold">{dish.name}</h3>
//           <p className="text-gray-500 text-sm">{dish.description}</p>
//           <div className="flex items-center justify-between mt-4">
//             <span className="text-lg font-bold">{dish.price}</span>
//             <div className="flex items-center">
//               {Array.from({ length: dish.rating }).map((_, index) => (
//                 <svg
//                   key={index}
//                   className="w-4 h-4 text-yellow-500"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927C9.177 2.392 9.823 2.392 9.951 2.927L11.17 8.09c.056.23.217.398.426.45l4.807.7c.515.074.723.709.35 1.074L13.8 13.214a.499.499 0 00-.144.439l.82 4.779c.098.573-.499 1.01-.998.739L10 16.347l-4.278 2.243c-.5.271-1.096-.166-.998-.739l.82-4.779a.499.499 0 00-.144-.439L2.896 10.314c-.373-.365-.165-1 .35-1.074l4.807-.7a.493.493 0 00.426-.45l1.219-5.162z" />
//                 </svg>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

const Restaurants = () => {

  return (
    <>
   
   
    <div id='restaurants' className="max-w-[1300px] mx-auto py-10 padding" >
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top Restaurants</h2>
      <div className="flex space-x-2 mb-7 overflow-x-auto whitespace-nowrap">
    <button className="border rounded-full px-4 py-1 sm:px-4 sm:py-1 hover:bg-orange-500 hover:text-white">
        <Dropdowns />
    </button>
    <button className="border rounded-full px-4 py-1 hover:bg-orange-500 hover:text-white">
        Sort By <span>&#9660;</span>
    </button>
    <button className="border rounded-full px-4 py-1 hover:bg-orange-500 hover:text-white">
        Ratings 4.0+
    </button>
    <button className="border rounded-full px-4 py-1 hover:bg-orange-500 hover:text-white">
        Pure Veg
    </button>
    <button className="border rounded-full px-4 py-1 hover:bg-orange-500 hover:text-white">
        Less than Rs. 300
    </button>
</div>



      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dishes.map((dish, index) => (
            <Link to={"/restaurantitems"}>

           
          <Cards key={index} dish={dish} />
          </Link>
        ))}
      </div>
    </div>  </>
  );
};

export default Restaurants;

const Dropdowns = ()=>{
  return (
  <Menu as="div" className="relative inline-block text-left">
  <div>
    <MenuButton className="inline-flex w-full justify-center gap-x-1.5  px-4 py-1 hover:bg-orange-500 hover:text-white">
    Filter
      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </MenuButton>
  </div>

  <Transition
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        <MenuItem>
          {({ focus }) => (
            <a
              href="#"
              className={classNames(
                focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Account settings
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ focus }) => (
            <a
              href="#"
              className={classNames(
                focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Support
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ focus }) => (
            <a
              href="#"
              className={classNames(
                focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              License
            </a>
          )}
        </MenuItem>
        <form method="POST" action="#">
          <MenuItem>
            {({ focus }) => (
              <button
                type="submit"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block w-full px-4 py-2 text-left text-sm'
                )}
              >
                Sign out
              </button>
            )}
          </MenuItem>
        </form>
      </div>
    </MenuItems>
  </Transition>
</Menu>
  )
}