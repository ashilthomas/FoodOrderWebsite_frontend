import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  address: yup.string().required('Address is required'),
  cuisinetype: yup.string().required('Cuisine type is required'),
  rating: yup.number().min(0).max(5).required('Rating is required'),
  openinghours: yup.string().required('Opening hours are required'),
  location: yup.string().required('Location is required'),
});

const AddRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [cuisineTypes] = useState(['Italian', 'Chinese', 'Indian', 'Mexican']); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/restaurent/allrestaurant');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3000/api/v1/restaurent/addrestaurant', data);
      

      if(restaurants){
        toast.success(response.data.message)
      }else{
        toast.error(restaurants.data.message)
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
      toast.error("internal server error")
    }
  };



 console.log(restaurants);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`/api/restaurants/${id}`);
      setRestaurants(restaurants.filter(restaurant => restaurant._id !== id)); // Remove restaurant from the list
    } catch (error) {
      console.error('There was an error deleting the restaurant:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-5 ">
    <ToastContainer/>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-5">Create Restaurant</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register('title')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          <p className="text-red-600 text-sm">{errors.title?.message}</p>
        </div>
        <div className="flex gap-3">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              {...register('address')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <p className="text-red-600 text-sm">{errors.address?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cuisine Type</label>
            <select
              {...register('cuisinetype')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select Cuisine Type</option>
              {cuisineTypes.map((cuisine, index) => (
                <option key={index} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
            <p className="text-red-600 text-sm">{errors.cuisinetype?.message}</p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            {...register('rating')}
            min="0"
            max="5"
            step="0.1"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          <p className="text-red-600 text-sm">{errors.rating?.message}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Opening Hours</label>
          <input
            type="text"
            {...register('openinghours')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          <p className="text-red-600 text-sm">{errors.openinghours?.message}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            {...register('location')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          <p className="text-red-600 text-sm">{errors.location?.message}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700"
        >
          Submit
        </button>
      </form>
    </div>

    <div className='overflow-auto h-screen'>
      <h2 className="text-2xl font-bold mb-5">Restaurants</h2>
      <ul className="space-y-4">
      {
  restaurants && restaurants.map((items, i) => (
    <li key={i} className="p-4 border rounded-md shadow-sm flex justify-between items-center">
     <div><h3 className="text-xl font-semibold">{items.title.toUpperCase()}</h3>

              <p className="text-sm">Address:{items.address} </p>
              <p className="text-sm">Cuisine:{items.cuisine} </p>
              <p className="text-sm">Rating:{items.rating} </p>
              <p className="text-sm">Opening Hours:{items.openinghours}</p>
              <p className="text-sm">Location:{items.location}</p>
            
     </div>
      <button
        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
      >
        Remove
      </button>
    </li>
  ))
}

       
        
  
      </ul>
    </div>
  </div>
</div>
  );
};

export default AddRestaurant;




