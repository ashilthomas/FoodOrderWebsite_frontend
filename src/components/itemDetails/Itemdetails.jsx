import React from 'react';

function Itemdetails({ isVisible, onClose, dish }) {
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          
          <div className="bg-white p-4 rounded-lg shadow-lg relative w-96">
              <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => onClose(false)}
            >
              &times;
            </button>

            <div>
              <img
                src="https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">name</h3>
              <p className="text-gray-500 text-sm">dshfjds</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold">price</span>
                <button className='className="ml-2 bg-orange-500 text-white py-2 px-8 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"'>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Itemdetails;
