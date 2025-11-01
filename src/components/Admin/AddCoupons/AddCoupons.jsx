import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import instance from '../../Axios';
import { useToast } from '@chakra-ui/react';

function AddCoupons() {
    const toast = useToast();
    const [coupons, setCoupons] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const schema = yup.object({
        title: yup.string().required("Title is required"),
       desc: yup.string().required("Description is required"),
       code: yup.string().required("Code is required").min(3, "Code must be at least 3 characters"),
        discount: yup.number().required("Discount is required").min(1, "Discount must be at least 1").max(100, "Discount cannot exceed 100"),
        expirationDate: yup.string().required("Expiration date is required"),
       }).required();

      const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(schema)
      });

      const fetchCoupons = async () => {
        try {
          const res = await instance.get("coupon/");
          if (res.data.success) {
            setCoupons(res.data.coupon);
          }
        } catch (error) {
          console.error("Error fetching coupons:", error);
        }
      };

      useEffect(() => {
        fetchCoupons();
      }, []);

      const onSubmit = async(data) => {
        setIsSubmitting(true);
        try {
          const res = await instance.post("coupon/", data);
          if (res.data.success) {
            toast({
              title: "Coupon added successfully",
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
            reset();
            fetchCoupons(); // Refresh the coupons list
          } else {
            toast({
              title: res.data.message || "Failed to add coupon",
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
        } catch (error) {
          console.error("Error adding coupon:", error);
          const errorMessage = error.response?.data?.message || "Failed to add coupon";
          toast({
            title: errorMessage,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        } finally {
          setIsSubmitting(false);
        }
      }
    
  return (
   <div className='md:ml-64 mt-8 p-5'>
       <div className='flex flex-col lg:flex-row gap-8'>
           {/* Add Coupon Form */}
           <div className='border p-6 rounded-lg shadow-md w-full lg:w-1/3 xl:w-1/4'>
               <h2 className='text-center text-lg font-bold text-orange-500 mb-6'>Add Coupons</h2>
               <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                   <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                       <input
                           className='p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                           type="text"
                           {...register("title")}
                           placeholder='Enter coupon title'
                       />
                       <p className="text-red-500 text-sm mt-1">{errors.title?.message}</p>
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                       <input
                           type="text"
                           className='p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                           {...register("desc")}
                           placeholder='Enter description'
                       />
                       <p className="text-red-500 text-sm mt-1">{errors.desc?.message}</p>
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Code</label>
                       <input
                           type="text"
                           className='p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                           {...register("code")}
                           placeholder='Enter unique code'
                       />
                       <p className="text-red-500 text-sm mt-1">{errors.code?.message}</p>
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
                       <input
                           type="number"
                           className='p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                           {...register("discount")}
                           placeholder='Enter discount percentage'
                           min="1"
                           max="100"
                       />
                       <p className="text-red-500 text-sm mt-1">{errors.discount?.message}</p>
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                       <input
                           type="date"
                           className='p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                           {...register("expirationDate")}
                       />
                       <p className="text-red-500 text-sm mt-1">{errors.expirationDate?.message}</p>
                   </div>

                   <button
                       type="submit"
                       disabled={isSubmitting}
                       className='p-3 w-full mt-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors'
                   >
                       {isSubmitting ? 'Adding...' : 'Add Coupon'}
                   </button>
               </form>
           </div>

           {/* Coupons List */}
           <div className='flex-1'>
               <h2 className="text-2xl font-bold mb-6 text-gray-800">Existing Coupons</h2>
               <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                   {coupons && coupons.map((coupon) => (
                       <div key={coupon._id} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                           <div className="flex justify-between items-start mb-4">
                               <div className="flex-1">
                                   <h3 className="font-bold text-xl text-gray-800 mb-2">{coupon.title}</h3>
                                   <p className="text-gray-600 text-sm mb-4 leading-relaxed">{coupon.desc}</p>
                               </div>
                               <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                   coupon.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                               }`}>
                                   {coupon.isActive ? 'Active' : 'Inactive'}
                               </span>
                           </div>

                           <div className="space-y-3">
                               <div className="flex items-center justify-between">
                                   <span className="text-sm font-medium text-gray-700">Code:</span>
                                   <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md font-mono text-sm">
                                       {coupon.code}
                                   </span>
                               </div>

                               <div className="flex items-center justify-between">
                                   <span className="text-sm font-medium text-gray-700">Discount:</span>
                                   <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md font-semibold">
                                       {coupon.discount}% OFF
                                   </span>
                               </div>

                               <div className="flex items-center justify-between">
                                   <span className="text-sm font-medium text-gray-700">Expires:</span>
                                   <span className="text-gray-600 text-sm">
                                       {new Date(coupon.expirationDate).toLocaleDateString('en-US', {
                                           year: 'numeric',
                                           month: 'short',
                                           day: 'numeric'
                                       })}
                                   </span>
                               </div>
                           </div>
                       </div>
                   ))}
                   {coupons && coupons.length === 0 && (
                       <div className="col-span-full text-center text-gray-500 py-12">
                           <div className="text-4xl mb-4">🎫</div>
                           <p className="text-lg font-medium">No coupons found</p>
                           <p className="text-sm">Add your first coupon using the form on the left.</p>
                       </div>
                   )}
               </div>
           </div>
       </div>
   </div>
 )
}

export default AddCoupons