import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhotoIcon } from '@heroicons/react/20/solid';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  cuisinetype: yup.string().required('Cuisine type is required'),
  rating: yup.number().min(0).max(5).required('Rating is required'),
  openinghours: yup.string().required('Opening hours are required'),
  location: yup.string().required('Location is required'),
  restaurantimg: yup.mixed().required('Cover photo is required'),
});

const AddRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [cuisineTypes] = useState(['Italian', 'Chinese', 'Indian', 'Mexican', 'vege', 'non-vege']);

  const { register, handleSubmit, formState: { errors } } = useForm({
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
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('cuisinetype', data.cuisinetype);
      formData.append('rating', data.rating);
      formData.append('openinghours', data.openinghours);
      formData.append('location', data.location);
      formData.append('restaurantimg', data.restaurantimg[0]); 

      const response = await axios.post('http://localhost:3000/api/v1/restaurent/addrestaurant', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setRestaurants([...restaurants, response.data.restaurent]);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error adding restaurant:', error);
      toast.error('Failed to add restaurant. Please try again.');
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/restaurent/removerestaurant/${id}`);
      setRestaurants(restaurants.filter((restaurant) => restaurant._id !== id));
    } catch (error) {
      console.error('Error removing restaurant:', error);
      toast.error('Failed to remove restaurant. Please try again.');
    }
  };

  return (
    <div className=" mt-10 md:ml-64  p-5 w-full">
      <ToastContainer />
      <div className="flex gap-3">
        <div className="bg-white p-5 rounded-lg shadow-md w-full ">
          <h2 className="text-2xl font-bold mb-5">Create Restaurant</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="col-span-full">
              <label htmlFor="restaurantimg" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
            
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            
                <div className="text-center">
                
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="restaurantimg"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      
                      <span>Upload a file</span>
                      <input
                        id="restaurantimg"
                        name="restaurantimg"
                        type="file"
                        {...register('restaurantimg')}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              <p className="text-red-600 text-sm">{errors.restaurantimg?.message}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register('title')}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <p className="text-red-600 text-sm">{errors.title?.message}</p>
            </div>
            <div className="flex gap-3 w-full">
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

        <div className='overflow-auto h-screen w-full'>
          <h2 className="text-2xl font-bold mb-5">Restaurants</h2>
          <ul className="space-y-4">
            {restaurants && restaurants.map((items, i) => (
              <li key={i} className="p-4 border rounded-md shadow-sm flex justify-between items-center">
                  <div className="flex gap-3">
                 <img className="w-28" src={items.restaurantimg} alt="" />
                <div>
                  <h3 className="text-xl font-semibold">{items.title.toUpperCase()}</h3>
                  <p className="text-sm">Address: {items.address} </p>
                  <p className="text-sm">Cuisine: {items.cuisine} </p>
                  <p className="text-sm">Rating: {items.rating} </p>
                  <p className="text-sm">Opening Hours: {items.openinghours}</p>
                  <p className="text-sm">Location: {items.location}</p>
                </div>
                </div>
                <button
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                  onClick={() => handleRemove(items._id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;