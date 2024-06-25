import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ExploreItems() {
  const menuItems = [
    { name: 'Salad', image: 'https://image.lexica.art/full_webp/36ccd72b-10db-4b24-9fc1-ac282386f58f', route: "/fooditems/salad" },
    { name: 'Rolls', image: 'https://image.lexica.art/full_webp/bcb19d6e-f52c-43cd-9849-3679d1362013', route: "/fooditems/Rolls" },
    { name: 'Deserts', image: 'https://image.lexica.art/full_webp/7e2c9926-4f19-4494-b6da-a59187d6b6ea', route: "/fooditems/Deserts" },
    { name: 'Sandwich', image: 'https://image.lexica.art/full_webp/08652957-59c1-444c-ab68-f11417149898', route: "/fooditems/Sandwich" },
    { name: 'Cake', image: 'https://image.lexica.art/full_webp/31ad2e40-69e5-4bc4-abab-e4ca60199aa8', route: "/fooditems/Cake" },
    { name: 'Pure Veg', image: 'https://image.lexica.art/full_webp/66d5dbaf-0ec4-4ed4-a3c5-7c041a296f63', route: "/fooditems/Pure Veg" },
    { name: 'Pasta', image: 'https://image.lexica.art/full_webp/40218fe2-177a-4bf1-ae74-74ef2065e725', route: "/fooditems/Pasta" },
    { name: 'Noodles', image: 'https://image.lexica.art/full_webp/4084063d-e42a-495f-a866-0a0f744e9330', route: "/fooditems/Noodles" },
    { name: 'Biriyani', image: 'https://image.lexica.art/full_webp/0a8eb5cf-e34e-43a9-8f12-f830f3f25069', route: "/fooditems/Biriyani" },
    { name: 'Pizza', image: 'https://image.lexica.art/full_webp/12723f19-6f90-4258-b630-3a864ec5e3fd', route: "/fooditems/Pizza" },
    { name: 'Burger', image: 'https://image.lexica.art/full_webp/03c2619b-e8c1-4a16-80fe-79ec59798429', route: "/fooditems/Burger" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-white max-w-[1300px] mx-auto py-14 padding">
      <div className=" px-4">
        <h2 className="text-3xl font-bold mb-4">Explore our menu</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi iure distinctio eligendi .
        </p>
        <Slider {...settings}>
          {menuItems.map((item, index) => (
            <NavLink to={item.route} key={index}>
              <div className="text-center flex-shrink-0 px-2">
                <img src={item.image} alt={item.name} className="w-32 h-32 rounded-full mx-auto mb-2 object-cover" />
                <div className="text-lg font-semibold">{item.name}</div>
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ExploreItems;
