import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';


function Cards({dish}) {
  console.log("dish",dish);

  // const dispatch = useDispatch()
  const style = { color: "orange" }
  // const resData = useSelector(state => state.resData); // Corrected selector key
  // console.log("Redux",resData);

  // const getRestaurantDetails = (restaurant) => {
  //   dispatch(setResDetails(restaurant));
  //   console.log("catds",restaurant);
  // };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden ">
     <Link to={`/restaurantitems/${dish._id}`}>

    <img  src={dish.restaurantimg || dish.image} alt={dish.title || dish.name} className="w-full h-48 object-cover transition ease-in-out hover:-translate-y-1 hover:scale-110" />
    </Link>
    <div className="p-4">
      <h3 className="text-lg font-semibold  ">{dish.title}</h3>
      <p className="text-gray-500 text-sm mtext">{dish.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm flex items-center gap-1">{dish?.location}<IoLocationOutline  style={style} /></span>
      <span className='text-lg  font-bold text-green-500 flex items-center gap-2'><IoStar />{dish?.rating}</span>
      </div>
    </div>
  </div>
  )
}

export default Cards