import React, { useState } from 'react';

const coupons = [
  { id: 1, title: "Google Pay", description: "Get cashback between $5 to $10 using Gpay", code: "#GOOGLE10", minOrder: 10 },
  { id: 2, title: "Amex", description: "Get cashback between $10 to $20 using Amex", code: "#AMEX20", minOrder: 10 },
  { id: 3, title: "Amazon", description: "Get cashback between $20 to $50 using Amazon", code: "#AMAZON30", minOrder: 10 },
  { id: 4, title: "Apple Pay", description: "Get cashback between $30 to $60 using Apple Pay", code: "#APPLEPAY40", minOrder: 10 },
  { id: 5, title: "Paypal", description: "Get cashback between $50 to $55 using Paypal", code: "#PAYPAL50", minOrder: 10 },
  { id: 6, title: "Visa", description: "Get cashback between $30 to $40 using Visa", code: "#VISA60", minOrder: 10 },
  { id: 7, title: "Sepa", description: "Get cashback between $10 to $20 using Sepa", code: "#SEPA70", minOrder: 20 },
  { id: 8, title: "Mastercard", description: "Get cashback between $25 to $50 using Mastercard", code: "#MASTERCARD80", minOrder: 50 },
];

const CouponCard = ({ title, description, code, minOrder }) => {
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
      <p className="text-gray-600 text-center">{description}</p>
      <p className="text-gray-400 text-sm mb-2">Valid on order with items worth ${minOrder} or more.</p>
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

const Coupons = () => (
  <div className="p-6 max-w-[1300px] mx-auto">
    <h1 className="text-2xl font-bold mb-4">Available Coupons</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coupons.map(coupon => (
        <CouponCard key={coupon.id} {...coupon} />
      ))}
    </div>
  </div>
);

export default Coupons;
