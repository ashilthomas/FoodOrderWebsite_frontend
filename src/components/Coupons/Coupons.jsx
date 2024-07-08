import React, { useEffect, useState } from 'react';
import instance from '../Axios';



const CouponCard = ({ title, desc, code, discount, }) => {
  const [buttonText, setButtonText] = useState('Copy Code');
  
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setButtonText('Copied!');
      setTimeout(() => setButtonText('Copy Code'), 2000); // Reset text after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="border rounded-lg p-4 m-2 shadow-lg flex flex-col items-center justify-between">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{desc}</p>
      <p className="text-gray-400 text-sm mb-2">Valid on order with items discount %{discount}  or more.</p>
      
      <div className='flex items-center gap-5'>
        <p className='border px-4 py-2 mt-2'>{code}</p>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded mt-2"
          onClick={handleCopyClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Coupons = () => {
  const [coupons, setCoupons] = useState([]); // State to hold fetched coupons

  useEffect(() => {
    const fetchAllCoupons = async () => {
      try {
        const res = await instance.get("coupon/"); // Assuming 'instance' is axios instance
        console.log(res.data.coupon);
        setCoupons(res.data.coupon); // Save the fetched coupons to state
      } catch (error) {
        console.error('Error fetching coupons:', error);
      }
    };

    fetchAllCoupons();
  }, []); // Ensure the effect runs only once

return(
  <div className="p-6 max-w-[1300px] mx-auto padding">
    <h1 className="text-2xl font-bold mb-4">Available Coupons</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coupons?.map(coupon => (
        <CouponCard key={coupon?.id} {...coupon} />
      ))}
    </div>
  </div>
);
}

export default Coupons;
