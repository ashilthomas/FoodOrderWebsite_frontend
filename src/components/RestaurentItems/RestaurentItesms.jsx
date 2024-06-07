import React from 'react';

const MenuItem = ({ title, description, price, rating, image }) => {
  return (
    <div className="flex p-4 bg-white shadow rounded-lg mb-4">
      <img className="w-24 h-24 object-cover rounded-lg mr-4" src={image} alt={title} />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-yellow-500 flex items-center mb-2">
          <span className="mr-2">{rating}</span>
          <span>⭐</span>
        </div>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="text-lg font-bold">${price}</div>
      </div>
      <button className="bg-orange-500 text-white rounded-lg px-4 py-2 ml-4 self-start">+Add</button>
    </div>
  );
};

const RestaurentItems = () => {
  return (
    <div className="">
      <div className="text-center mb-8 bg-black/80 py-20">
        <h1 className="text-3xl font-bold text-white">Fiesta Mexico : Authentic Mexican Food</h1>
        <div className="text-gray-500">Ontario, Canada</div>
        <div className="flex justify-center items-center mt-2 text-green-500">
          <span>4.0km</span>
          <span className="mx-2">•</span>
          <span>5.0 (1k+ Reviews)</span>
        </div>
      </div>
      <div className='max-w-2xl mx-auto mt-8'>
        <h2 className="text-2xl font-semibold mb-4">Best Seller</h2>
        <MenuItem 
          title="Ultimate Loaded Nacho Fiesta"
          description="Nacho typically consists of layers of crispy tortilla chips topped with a..."
          price="40"
          rating="1k+ Ratings"
          image="https://via.placeholder.com/150"
        />
        <h2 className="text-2xl font-semibold mb-4">Special Combos</h2>
        <MenuItem 
          title="Burger & French fried combo"
          description="Your burger dish looks perfect combination of flavors and textures."
          price="30 / $60"
          rating="1k+ Ratings"
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};

export default RestaurentItems;