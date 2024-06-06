import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400  ">
        <div className=' max-w-[1300px] mx-auto py-14'>

       
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-100">Don't pass up our fantastic discounts. Email offers from all of our best eateries</h2>
          </div>
          <div className="flex ">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-l focus:outline-none focus:ring w-48 sm:w-60 focus:border-gray-600"
            />
            <button className="px-4 py-2 bg-orange-500 text-gray-100 rounded-r hover:bg-orange-600">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-5">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">ZOMO</h3>
            <p className="mb-4">
              Welcome to our online order website! Here, you can browse our wide selection of products and place orders from the comfort of your own home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-300"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">About us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Offer</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Account</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">My orders</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Wishlist</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Shopping Cart</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Saved Address</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Useful links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Blogs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Login</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Register</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Profile</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Settings</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Top Brands</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">PizzaBoy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Saladish</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">IcePops</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Maxican Hoy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">La Foodie</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='py-2' />
      <div className='text-center py-5'>
            <p>copyright 2024</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
