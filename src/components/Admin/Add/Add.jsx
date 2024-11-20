import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import instance from "../../Axios";
import { useToast } from "@chakra-ui/react";




const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().positive().required("Price is required"),
  category: yup.string().required("Category is required"),
  availability: yup.boolean(),
  image: yup.mixed().required("Image is required"),
  brand: yup.string().required("Brand is required"),
  restaurant: yup.string().required("Restaurant is required"),
  customization: yup.string().required("Customization is required"),
});

const Add = () => {
  const toast = useToast();
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [customization,setustomization]=useState([])
 

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

 



  
  useEffect(() => {
    
    const fetchOptions = async () => {
      try {
        const restaurant = await instance.get("restaurent/allrestaurant");
        setRestaurants(restaurant.data);
        setCategories(['Pizza', 'Biriyani', "Dessert","salad","Rolls",'Sandwich','Cake','Pure Veg','Pasta','Noodles','Burger']);
  
        const menuRes = await instance.get(
          "menus/allfoods"
        );
        setMenuItems(menuRes.data.allMenus); // Corrected line: access the data property

        const allCustomization = await instance.get("foodcoustom")
        setustomization(allCustomization.data.foodCustomization)


      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };
  
    fetchOptions();
  }, []);

  

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('availability', data.availability ? "true" : "false");
    formData.append('brand', data.brand);
    formData.append('restaurant', data.restaurant);
    formData.append('customization', data.customization);
    formData.append('image', data.image[0]); 

    try {
      const response = await instance.post(
        "menus/addfood",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        toast({
          title: response.data.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: response.data.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
     
      reset(); 
    } catch (error) {
      console.error("There was an error creating the menu item:", error);
      toast({
        title: "There was an error creating the menu item.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleRemove = async (id) => {
    try {
      await instance.delete(`/api/menus/${id}`);
      setMenuItems(menuItems.filter((item) => item._id !== id)); // Remove item from the list
    } catch (error) {
      console.error("There was an error deleting the menu item:", error);
    }
  };


  return (
<>

{/* max-w-7xl */}
    <div className=" mx-auto mt-10 p-5  md:ml-64 ">

    {/* className="grid grid-cols-1 md:grid-cols-2 gap-6" */}
      <div className="sm:flex sm:gap-3 " >
     
        <div className="bg-white p-5 rounded-lg drop-shadow-lg w-auto ">
          <h2 className="text-2xl font-bold mb-5">Create Menu Item</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                {...register("title")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <p className="text-red-600 text-sm">{errors.title?.message}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("description")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <p className="text-red-600 text-sm">
                {errors.description?.message}
              </p>
            </div>
            <div className="flex gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  {...register("price")}
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
                  {...register("brand")}
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
                {...register("availability")}
                className="mt-1 block"
              />
              <p className="text-red-600 text-sm">
                {errors.availability?.message}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                {...register("image")}
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
                  {...register("category")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <p className="text-red-600 text-sm">
                  {errors.category?.message}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Restaurant
                </label>
                <select
                  {...register("restaurant")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Restaurant</option>
                  {restaurants.map((restaurant) => (
                    <option key={restaurant.id} value={restaurant._id}>
                      {restaurant.title}
                    </option>
                  ))}
                </select>
                <p className="text-red-600 text-sm">
                  {errors.restaurant?.message}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Customization
                </label>
                <select
                  {...register("customization")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Customization</option>
                  {customization.map((customization) => (
                    <option  key={customization._id} value={customization._id}>
                      customizationSize
                    
                    </option>
                  ))}
                </select>
                <p className="text-red-600 text-sm">
                  {errors.customization?.message}
                </p>
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

        <div className="h-screen overflow-auto w-full sm:w-96">
          <h2 className="text-2xl font-bold mb-5">Menu Items</h2>
          <ul className="space-y-4">
        
        
            { menuItems && menuItems.map((item) => (

             
              <li
                key={item._id}
                className="p-4 border rounded-md shadow-sm flex justify-between items-center"
              >
                <div className="flex gap-3">
                  <img className="w-28" src={item.image} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="text-sm">Price: ${item.price}</p>
                    <p className="text-sm">Category: {item.category}</p>
                    <p className="text-sm">Brand: {item.brand}</p>
                    <p className="text-sm flex">
                      Available: {item.availability ? <h4>in Stock</h4> : <h4>out of stock</h4>}
                    </p>
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
    </>
  );
};

export default Add;
