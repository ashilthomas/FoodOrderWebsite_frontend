import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ExploreItems() {
  const menuItems = [
    { name: 'Salad', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', route: "/fooditems" },
    { name: 'Rolls', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', route: "/fooditems" },
    { name: 'Deserts', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', route: "/fooditems" },
    { name: 'Sandwich', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', route: "/fooditems" },
    { name: 'Cake', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', route: "/fooditems" },
    { name: 'Pure Veg', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', route: "/fooditems" },
    { name: 'Pasta', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', route: "/fooditems" },
    { name: 'Noodles', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', route: "/fooditems" },
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
    <div className="bg-white max-w-[1300px] mx-auto py-14">
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
