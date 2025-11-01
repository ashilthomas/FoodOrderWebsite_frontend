import React, { useEffect, useState } from 'react';
import Itemdetails from '../itemDetails/Itemdetails';

import {
  Menu,
  MenuButton,
  MenuItem as HeadlessMenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useParams } from 'react-router-dom';
import instance from '../Axios';
import { Skeleton, Stack } from '@chakra-ui/react';



const RestaurentItems = () => {
  const [restaurantItems,setRestaurantItems]=useState([])
  const [singrestaurant,setSingleRestaurant]=useState({})
  const [loading,setLoading]=useState(false)
 
 

  
  const {id} = useParams()




useEffect(() => {
  const fetchRestaurantsData = async () => {
    try {
      setLoading(true)
      const res = await instance.get(`menus/restaurantitems?id=${id}`);
      const restaurant = await instance.get(`restaurent/singlerestaurant?id=${id}`);
      console.log("Restaurant data:", restaurant.data);
      console.log("Restaurant items:", res.data);
      setSingleRestaurant(restaurant.data.restaurant);
      setRestaurantItems(res.data.restaurantItem);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchRestaurantsData();
}, [id]);
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];
 


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="bg-white">
          <div className="text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-600 py-20">
                  <h1 className="text-3xl font-bold text-white">{singrestaurant.title || 'Restaurant'}</h1>
                    <div className="text-orange-100 mt-2">{singrestaurant.location || 'Location not available'}</div>
                    <div className="flex justify-center items-center mt-4 text-white">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">4.0km</span>
                      <span className="mx-3 text-orange-200">•</span>
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm flex items-center">
                        ⭐ {singrestaurant.rating || 'N/A'}
                      </span>
                    </div>
                  </div>
      <div>

        <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
            <div className="flex items-center space-x-4">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-white border border-gray-300 rounded-md px-3 py-2">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
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
                  <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <HeadlessMenuItem key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </HeadlessMenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </div>
<section aria-labelledby="products-heading" className="pb-24 pt-6">
  <h2 id="products-heading" className="sr-only">
    Products
  </h2>

  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Menu Items</h2>
      {
        loading ? (
          <Stack spacing={4}>
            <Skeleton height='100px' />
            <Skeleton height='100px' />
            <Skeleton height='100px' />
          </Stack>
        ) : (
          restaurantItems && restaurantItems.length > 0 ? (
            restaurantItems.map((items, i) => (
              <MenuItem key={items._id || i} items={items} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No menu items available for this restaurant.
            </div>
          )
        )
      }
    </div>
  </div>
</section>
        </main>
      </div>
    </div>
  );
};

const MenuItem = ({items} ) => {
   const [isOverlayVisible, setOverlayVisible] = useState(false);
   const [singleMenuItems,setSinglMenuItems]=useState({})

   const handleOpenOverlay = async(id) => {
     try {
       const res = await instance.get(`menus/singlemenuitems?id=${id}`)
       setSinglMenuItems(res.data.menuItem)
       setOverlayVisible(true);
     } catch (error) {
       console.error("Error fetching menu item details:", error);
     }
   };

   const handleCloseOverlay = () => {
     setOverlayVisible(false);
   };

   return (
     <>
       <Itemdetails isVisible={isOverlayVisible} onClose={handleCloseOverlay} singleMenuItems={singleMenuItems} />
       <div className="flex p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200 hover:shadow-lg transition-shadow">
         <img className="w-24 h-24 object-cover rounded-lg mr-4 flex-shrink-0" src={items?.image} alt={items?.title} />
         <div className="flex-1 min-w-0">
           <h3 className="text-lg font-semibold text-gray-900 truncate">{items?.title}</h3>
           <div className="text-yellow-500 flex items-center mb-2">
             <span className="mr-2 text-sm">{items?.restaurant?.rating || 'N/A'}</span>
             <span>⭐</span>
           </div>
           <p className="text-gray-600 mb-2 text-sm line-clamp-2">{items?.description}</p>
           <div className="text-lg font-bold text-green-600">${items?.price}</div>
         </div>
         <button
           onClick={()=>handleOpenOverlay(items._id)}
           className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-2 ml-4 self-start transition-colors flex-shrink-0"
         >
           +Add
         </button>
       </div>
     </>
   );
 };

export default RestaurentItems;
























    
 



























