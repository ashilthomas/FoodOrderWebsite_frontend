import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { fetchMenusStart,fetchMenusSuccess,fetchMenusFailure } from '../../Redux/items'
import axios from 'axios';

import CardSkeleton from '../Skeletons/CardSkeleton';
import Pagination from '../Pagination/Pagination';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Restaurants = () => {
  const { loading, data, error } = useSelector((state) => state.menusData);
  console.log(loading);
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(()=>{

    const fetchMenuItems = async()=>{
      dispatch(fetchMenusStart())
      const responce = await axios.get("http://localhost:3000/api/v1/menus/allfoods")
      
        dispatch( fetchMenusSuccess(responce.data.allMenus))
     
     
     
      dispatch(fetchMenusFailure())
     
     }
     fetchMenuItems()
  },[])

  return (
    <>
   
   
    <div id='restaurants' className="max-w-[1300px] mx-auto py-10 padding relative" >
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top Restaurants</h2>
      <div className="flex space-x-2 mb-7  whitespace-nowrap">
    <button className="">
      <Dropdown/>
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


  {
    loading ? (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    ) :(


      data.map((dish,index)=>(
        <Cards dish={dish}  />
      ))
    
)}
      
     
       
      </div>
      <div className='mt-5 absolute bottom-0 right-0'>
         <Pagination
           currentPage={currentPage}
           totalPages={totalPages}
           onPageChange={handlePageChange}
         
         />
      </div>
     
    </div>  </>
  );
};

export default Restaurants;



const Dropdown = ()=>{
  return(
    <Menu as="div" className="relative inline-block text-left  ">
    <div>
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 border rounded-full px-4 py-1 sm:px-4 sm:py-1 hover:bg-orange-500 hover:text-white">
      Cuisines
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
      <MenuItems className="absolute w-36 h-40 overflow-auto right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
               Rating
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
               Sort
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                License
              </a>
            )}
          </MenuItem>
         
        </div>
      </MenuItems>
    </Transition>
  </Menu>
  )
}