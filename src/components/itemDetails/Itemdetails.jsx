import React, { useState } from "react";

function Itemdetails({ isVisible, onClose, dish }) {


  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative ">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => onClose(false)}
            >
              &times;
            </button>
           

         <div className="flex">

       
         <div>
           
              <img className="w-72"
                src="https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
        
            <div className="p-4">
              <h3 className="text-lg font-semibold">name</h3>
              <p className="text-gray-500 text-sm">dshfjds</p>

              <span className="text-lg font-bold">price</span>
          
            </div>
            </div>
           

          

         <div>

      
            <OrderForm />
            <div className="flex items-center justify-between mt-4">
          
                <button className='className="ml-2 bg-orange-500 text-white py-2 px-8 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"'>
                  Add
                </button>
              </div>
              </div>
             
          </div>
          </div>
      
        </div>
      )}
    </>
  );
}

export default Itemdetails;

const OrderForm = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedSauce, setSelectedSauce] = useState("Mustard");

  return (
    <div className="px-4 max-w-md mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Choose Size</h2>
        <div className="space-y-2">
          {["S", "M", "L"].map((size, index) => (
            <label key={size} className="flex items-center">
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size)}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">{`Size ${size}`}</span>
              <span className="ml-auto">${18 + index * 2}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Choose Sauce</h2>
        <div className="space-y-2">
          {["Chili sauce", "Mustard", "Special dipping sauce"].map(
            (sauce, index) => (
              <label key={sauce} className="flex items-center">
                <input
                  type="radio"
                  name="sauce"
                  value={sauce}
                  checked={selectedSauce === sauce}
                  onChange={() => setSelectedSauce(sauce)}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">{sauce}</span>
                <span className="ml-auto">${18 + index * 2}</span>
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};
