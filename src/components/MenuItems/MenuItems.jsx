import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems as HeadlessMenuItems,
  Transition,
} from "@headlessui/react";
import { useParams } from "react-router-dom";
import instance from "../Axios";
import CardSkeleton from "../Skeletons/CardSkeleton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function RestaurantMenuItems() {
  const [restaurantsCategory, setRestaurantsCategory] = useState([]);
  const [noItem,setNoitem]=useState('')
  const [categoriesLoading,setCategoriesLoding]=useState(false)
  const category = useParams();
 

  useEffect(() => {
 
    const fetchCategoryItems = async () => {
      try {
        setCategoriesLoding(true)
        const res = await instance.get(`menus/categoryitems?category=${category.items}`);
        setCategoriesLoding(false)
       
        if(res.data.success){


         setRestaurantsCategory(res.data.items)


        }else{
          setNoitem(res.data.message)
        }
         
        
      } catch (error) {
        console.error('Error fetching category items:', error);
      }
    };
fetchCategoryItems()

  
  
  }, [category]);

 

  return (
    <div className="max-w-[1300px] mx-auto py-14 padding">
      <h1 className="text-3xl font-bold mb-4">Restaurants</h1>
      <p className="mb-6">
        Taste these delectable classics, delectable biryanis to make your day.
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <IoFilter />
          Filter
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          Sort By
          <IoIosArrowDown />
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
          Less than 30 mins
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Rs. 300-Rs. 600
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
          Less than Rs. 300
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Menu Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoriesLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : restaurantsCategory && restaurantsCategory.length > 0 ? (
          restaurantsCategory.map((item) => (
            <Cards key={item._id} dish={item} />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No items found in this category.
          </div>
        )}
      </div>
      <p className="text-center"> {noItem}</p>
     
    </div>
  );
}

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center  rounded-md bg-inherit pl-3
         text-white">
          filter
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
        <HeadlessMenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Rating
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Veg
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Non-veg
                </a>
              )}
            </MenuItem>
          </div>
        </HeadlessMenuItems>
      </Transition>
    </Menu>
  );
};

export default RestaurantMenuItems;

