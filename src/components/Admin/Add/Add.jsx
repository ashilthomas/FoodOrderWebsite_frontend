import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup.number().positive().required('Price is required'),
  category: yup.string().required('Category is required'),
  availability: yup.boolean(),
  image: yup.mixed().required('Image is required'),
  brand: yup.string().required('Brand is required'),
  restaurant: yup.string().required('Restaurant is required'),
  customization: yup.string().required('Customization is required'),
});

const Add = () => {
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [customizations, setCustomizations] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });



  useEffect(() => {
    const fetchOptions = async () => {
      try {
       
        setCategories(["Appetizer", "Main Course", "Dessert"]); 
        setRestaurants([
          { id: "1", name: "Restaurant A" },
          { id: "2", name: "Restaurant B" },
        ]); // Example restaurants
        setCustomizations([
          { id: "1", name: "Customization A" },
          { id: "2", name: "Customization B" },
        ]); 

    
        const menuRes = await axios.get("http://localhost:3000/api/v1/menus/allfoods");
        setMenuItems(menuRes.data.allMenus);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);



  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/menus/addfood", data);
      console.log("Menu item created:", response.data);
    //   setMenuItems([...menuItems, response.data]); // Add new menu item to the list
      reset(); // Reset the form fields after submission
    } catch (error) {
      console.error("There was an error creating the menu item:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`/api/menus/${id}`);
      setMenuItems(menuItems.filter((item) => item._id !== id)); // Remove item from the list
    } catch (error) {
      console.error("There was an error deleting the menu item:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-5">Create Menu Item</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                {...register('title')}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <p className="text-red-600 text-sm">{errors.title?.message}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register('description')}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <p className="text-red-600 text-sm">{errors.description?.message}</p>
            </div>
            <div className="flex gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  {...register('price')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                <p className="text-red-600 text-sm">{errors.price?.message}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Brand
                </label>
                <input
                  type="text"
                  {...register('brand')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                <p className="text-red-600 text-sm">{errors.brand?.message}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Available
              </label>
              <input
                type="checkbox"
                {...register('availability')}
                className="mt-1 block"
              />
              <p className="text-red-600 text-sm">{errors.availability?.message}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="file"
                {...register('image')}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <p className="text-red-600 text-sm">{errors.image?.message}</p>
            </div>
            <div className="flex gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  {...register('category')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <p className="text-red-600 text-sm">{errors.category?.message}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Restaurant
                </label>
                <select
                  {...register('restaurant')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Restaurant</option>
                  {restaurants.map((restaurant) => (
                    <option key={restaurant.id} value={restaurant.id}>
                      {restaurant.name}
                    </option>
                  ))}
                </select>
                <p className="text-red-600 text-sm">{errors.restaurant?.message}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Customization
                </label>
                <select
                  {...register('customization')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Customization</option>
                  {customizations.map((customization) => (
                    <option key={customization.id} value={customization.id}>
                      {customization.name}
                    </option>
                  ))}
                </select>
                <p className="text-red-600 text-sm">{errors.customization?.message}</p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="h-screen overflow-auto">
          <h2 className="text-2xl font-bold mb-5">Menu Items</h2>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item._id} className="p-4 border rounded-md shadow-sm flex justify-between items-center">  
              <div className="flex gap-3">
                <img className="w-28" src={item.image} alt="" />
                <div>

               
              
                  <h3 className="text-xl font-semibold">{item.title.toUpperCase()}</h3>
                  <p className="text-sm">{item.description}</p>
                  <p className="text-sm">Price: ${item.price}</p>
                  <p className="text-sm">Category: {item.category}</p>
                  <p className="text-sm">Brand: {item.brand}</p>
                  <p className="text-sm">Available: {item.availability ? 'Yes' : 'No'}</p> 
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
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

export default Add;
