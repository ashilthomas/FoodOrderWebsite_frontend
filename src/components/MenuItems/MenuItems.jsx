import React from "react";
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const restaurants = [
  {
    name: "Hotel Soft",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "Biryani, Chinese",
    location: "Fort Road",
    image:
      "https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "New City Light Restaurant",
    rating: 3.9,
    time: "25-30 mins",
    cuisine: "Snacks, Biryani",
    location: "Kannur",
    image:
      "https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    discount: "20% OFF UPTO ₹120",
  },
  {
    name: "Ajwa Restaurant",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "Biryani, Chinese",
    location: "Thana",
    image:
      "https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    discount: "20% OFF UPTO ₹50",
  },
  {
    name: "Volga Chef Restaurant",
    rating: 4,
    time: "25-30 mins",
    cuisine: "Biryani, Chinese, Kerala",
    location: "Thavakkara",
    image:
      "https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function RestaurantMenuItems() {
  return (
    <div className="max-w-[1300px] mx-auto py-14">
      <h1 className="text-3xl font-bold mb-4">Biryani</h1>
      <p className="mb-6">
        Taste these delectable classics, delectable biryanis to make your day.
      </p>
      <div className="flex flex-wrap space-x-4 mb-6 ">
        <button className="flex-grow sm:flex-grow-0 px-4 py-2 bg-orange-600 rounded text-white flex gap-2 items-center mb-2">
          <Dropdown />{" "}
          <span>
            <IoFilter />
          </span>
        </button>
        <button className="flex-grow sm:flex-grow-0 sm:px-4 py-2 bg-orange-600 rounded text-white flex gap-2 items-center mb-2">
          Sort By{" "}
          <span>
            <IoIosArrowDown />
          </span>
        </button>
        <button className="flex-grow sm:flex-grow-0 px-4 py-2 bg-orange-600 rounded text-white mb-2">
          Less than 30 mins
        </button>
        <button className="flex-grow sm:flex-grow-0 px-4 py-2 bg-orange-600 rounded text-white mb-2">
          Rs. 300-Rs. 600
        </button>
        <button className="flex-grow sm:flex-grow-0 px-4 py-2 bg-orange-600 rounded text-white mb-2">
          Less than Rs. 300
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Restaurants to explore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <Cards key={restaurant.name} dish={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenuItems;

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-inherit px-3   text-white">
          Filter
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
