import React from 'react';

const Abc = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Gujarati Food</h1>
          <button className="bg-red-600 px-4 py-2 rounded">CLOSE</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Restaurant</h2>
              <p><span className="font-bold">Owner:</span> dev</p>
              <p><span className="font-bold">Restaurant Name:</span> Gujarati Food</p>
              <p><span className="font-bold">Cuisine Type:</span> Indian</p>
              <p><span className="font-bold">Opening Hours:</span> Mon-Sun: 9:00 AM - 9:00 PM</p>
              <p><span className="font-bold">Status:</span> <span className="text-green-400">Open</span></p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <p><span className="font-bold">Country:</span> India</p>
              <p><span className="font-bold">City:</span> Banglor</p>
              <p><span className="font-bold">Postal Code:</span> 530068</p>
              <p><span className="font-bold">Street Address:</span> Ambavadi choke</p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <p><span className="font-bold">Email:</span> codewithzosh@gmail.com</p>
              <p><span className="font-bold">Mobile:</span> +91903344783</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-2xl"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-2xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-2xl"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-2xl"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="fixed left-0 top-0 h-full bg-gray-800 w-16 flex flex-col items-center py-4">
        <a href="#" className="text-gray-400 hover:text-white mb-6"><i className="fas fa-home"></i></a>
        <a href="#" className="text-gray-400 hover:text-white mb-6"><i className="fas fa-receipt"></i></a>
        <a href="#" className="text-gray-400 hover:text-white mb-6"><i className="fas fa-utensils"></i></a>
        <a href="#" className="text-gray-400 hover:text-white mb-6"><i className="fas fa-list"></i></a>
        <a href="#" className="text-gray-400 hover:text-white mb-6"><i className="fas fa-carrot"></i></a>
        <a href="#" className="text-gray-400 hover:text-white mb-6"><i className="fas fa-calendar-alt"></i></a>
        <a href="#" className="text-gray-400 hover:text-white mb-6"><i className="fas fa-info-circle"></i></a>
        <a href="#" className="text-gray-400 hover:text-white"><i className="fas fa-sign-out-alt"></i></a>
      </nav>
    </div>
  );
}

export default Abc;
