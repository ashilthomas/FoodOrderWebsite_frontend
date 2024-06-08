// Today's Deal Component in React with Tailwind CSS
import React from 'react';
import { Link } from 'react-router-dom';

const deals = [
  {
    image: 'https://themes.pixelstrap.net/zomo/assets/images/banner/banner1.jpg', // replace with actual image paths
    discount: 'Up to 50% OFF',
    description: ' Free Delivery',
  },
  {
    image: 'https://themes.pixelstrap.net/zomo/assets/images/banner/banner1.jpg', // replace with actual image paths
    discount: 'Big Offer Pizzaholic',
    description: 'Buy 1 Get 1 Free',
  },
  {
    image: 'https://themes.pixelstrap.net/zomo/assets/images/banner/banner1.jpg', // replace with actual image paths
    discount: 'Up to 50% OFF',
    description: 'Free Delivery',
  },
  {
    image: 'https://themes.pixelstrap.net/zomo/assets/images/banner/banner1.jpg', // replace with actual image paths
    discount: 'Up to 15% OFF',
    description: 'Non Veg | Free Delivery',
  },
  {
    image: 'https://themes.pixelstrap.net/zomo/assets/images/banner/banner1.jpg', // replace with actual image paths
    discount: 'Buy 1 Get 1',
    description: 'Mocktails | Juice | Shake',
  },
];

const Offers = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <h2 className="text-2xl font-bold">Today's Deal</h2>
      <p className="mb-8 text-gray-600">Take a benefit from our latest offers.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {deals.map((deal, index) => (
            <Link to={"/coupons"}>
           
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={deal.image} alt={`Deal ${index + 1}`} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{deal.discount}</h3>
              <p className="text-gray-600">{deal.description}</p>
            </div>
          </div> </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;
