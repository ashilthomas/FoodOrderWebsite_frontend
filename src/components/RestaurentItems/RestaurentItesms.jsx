import React, { useEffect, useState } from 'react';
import Itemdetails from '../itemDetails/Itemdetails';

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem as HeadlessMenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import { useParams } from 'react-router-dom';
import instance from '../Axios';
import { Skeleton, Stack } from '@chakra-ui/react';



const RestaurentItems = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [restaurantItems,setRestaurantItems]=useState([])
  const [singrestaurant,setSingleRestaurant]=useState({})
  const [loading,setLoading]=useState(false)
  console.log(restaurantItems);
 


  const {id} = useParams()

console.log(id);


useEffect(() => {
  const fetchRestaurantsData = async () => {
    try {
      setLoading(true)
      const res = await instance.post("menus/restaurantitems", {id} );
      const restaurant = await instance.post("restaurent/singlerestaurant",{id} );
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

const subCategories = [
  { name: 'burger', href: '#' },
  { name: 'biriyani', href: '#' },
  { name: 'pizza', href: '#' },
  { name: 'samoza', href: '#' },
  { name: 'noodils', href: '#' },
];

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'Rolle', label: 'Rolles', checked: false },
      { value: 'Pizza', label: 'Pizza', checked: false },
      { value: 'Deserts', label: 'Deserts', checked: true },
      { value: 'Salad', label: 'Salad', checked: false },
      { value: 'cake', label: 'cake', checked: false },
    ],
  },{
    id: 'size',
    name: 'Size',
    options: [
      { value: 'M', label: 'M', checked: false },
      { value: 'S', label: 'S', checked: false },
      { value: 'L', label: 'L', checked: false },
      
    ],
  },
];
 


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="bg-white">
          <div className="text-center mb-8 bg-fixed py-20 bg-[url('')] bg-cover bg-center restaurant-bg">
                  <h1 className="text-3xl font-bold text-white">{singrestaurant.title}</h1>
                    <div className="text-gray-500">{singrestaurant.location}</div>
                    <div className="flex justify-center items-center mt-2 text-green-500">
                      <span>4.0km</span>
                      <span className="mx-2">•</span>
                      <span>{singrestaurant.rating}</span>
                    </div>
                  </div>
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen}>
          <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 ">
          

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
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

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">


                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="">
                {/* className='max-w-2xl mx-auto mt-8'> */}
                  <div >
                    <h2 className="text-2xl font-semibold mb-4">Best Seller</h2>
                    {
                      loading?(
<Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>
                      ):(
                      restaurantItems && restaurantItems.map((items,i)=>(
                        <MenuItem items={items} 
                      />
                      )))
                    }
                   
                    <h2 className="text-2xl font-semibold mb-4">Special Combos</h2>
                    <MenuItem 
                      title="Burger & French fried combo"
                      description="Your burger dish looks perfect combination of flavors and textures."
                      price="30 / $60"
                      rating="1k+ Ratings"
                      image="https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const MenuItem = ({items} ) => {
  console.log(items);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [singleMenuItems,setSinglMenuItems]=useState({})

  const handleOpenOverlay = async(id) => {
    console.log(id);

    const res = await instance.post("menus/singleMenuItems",{id})
    setSinglMenuItems(res.data.menuItem)
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      <Itemdetails isVisible={isOverlayVisible} onClose={handleCloseOverlay} singleMenuItems={singleMenuItems} />
      <div className="flex p-4 bg-white shadow rounded-lg mb-4">
        <img className="w-24 h-24 object-cover rounded-lg mr-4" src={items?.image} alt={items?.title} />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{items?.title}</h3>
          <div className="text-yellow-500 flex items-center mb-2">
            <span className="mr-2">{items?.restaurant.rating}</span>
            <span>⭐</span>
          </div>
          <p className="text-gray-600 mb-2">{items?.description}</p>
          <div className="text-lg font-bold">${items?.price}</div>
        </div>
        <button onClick={()=>handleOpenOverlay(items._id)} className="bg-orange-500 text-white rounded-lg px-4 py-2 ml-4 self-start">
          +Add
        </button>
      </div>
    </>
  );
};

export default RestaurentItems;
























    
 
























