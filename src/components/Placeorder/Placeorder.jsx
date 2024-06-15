import React, { useState } from 'react';

const Placeorder = () => {


    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 1 ? count - 1 : 1);
    return (
        <div className="max-w-[900px] mx-auto py-14 flex flex-col md:flex-row">
            {/* Address Selection Section */}
            <div className="md:w-4/5 md:pr-4">
            <div className="mb-4">
                    <h2 className="text-xl font-semibold">Select Saved Address</h2>
                    <p className="text-gray-600">You've added some addresses before, You can select one below.</p>
                </div>
                <div className="max-w-lg mx-auto p-4">
    <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <input
                    type="text"
                    className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="First name"
                />
            </div>
            <div>
                <input
                    type="text"
                    className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="Last name"
                />
            </div>
        </div>
        <div>
            <input
                type="email"
                className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Email address"
            />
        </div>
        <div>
            <input
                type="text"
                className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Street"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <input
                    type="text"
                    className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="City"
                />
            </div>
            <div>
                <input
                    type="text"
                    className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="State"
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <input
                    type="text"
                    className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="Country"
                />
            </div>
        </div>
        <div>
            <input
                type="text"
                className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Phone"
            />
        </div>
    </form>
</div>

            </div>
            
            {/* Order Summary Section */}
           
            <div className="md:w-1/2 md:pl-4 mt-8 md:mt-0">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <div className="border rounded-lg p-4 mt-4">
                    <div className="flex justify-between border-b pb-2">
                        <span>Ultimate Loaded Nacho Fiesta</span>
                        <span>$20</span>
                        <div className="flex items-center justify-center space-x-4 bg-orange-600 text-white rounded-lg ">
                  <button
                    onClick={decrement}
                    className="bg-orange-700 hover:bg-orange-800 px-3 py-2 rounded-lg"
                  >
                    -
                  </button>
                  <span className="text-lg">{count}</span>
                  <button
                    onClick={increment}
                    className="bg-orange-700 hover:bg-orange-800 px-3 py-2 rounded-lg"
                  >
                    +
                  </button>
                </div>

                    </div>
                    <div className="flex justify-between border-b py-2">
                        <span>Smoked Salmon Bagel</span>
                        <span>$40</span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <span>Cranberry Club Sandwich</span>
                        <span>$50</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <span>Sub Total</span>
                        <span>$110</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Delivery Charge (2 kms)</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Discount (10%)</span>
                        <span>-$10</span>
                    </div>
                    <div>
  	<form class="m-4 flex">
    	<input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
		<button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
	</form>
</div>
                    <div className="flex justify-between mt-4 font-semibold ">
                        <span>To Pay</span>
                        <span>$100</span>
                    </div>
                    <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Placeorder