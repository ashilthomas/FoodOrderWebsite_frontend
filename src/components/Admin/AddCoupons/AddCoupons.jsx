import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import instance from '../../Axios';

function AddCoupons() {
    const schema = yup.object({
        title: yup.string().required(),
       desc: yup.string().required(),
      code: yup.string().required(),
       discount: yup.number().required(),
       expirationDate: yup.string().required(),
      }).required();


      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = async(data) => {
        const res = await instance.post("coupon/",data)
        console.log(res.data);
      }
    
  return (
    <div className='md:ml-64 mt-8' >
        <div className='border p-6'>
            <h2 className='text-center text-lg font-bold text-orange-500'>Add Coupons</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-96'>
            <div>
                <input className='p-2 w-full border mb-3' type="text" {...register("title")} placeholder='title' />
            </div>
            <div>
                <input type="text" className='p-2 w-full border mb-3'{...register("desc")} placeholder='desc' />
            </div>
            <div>
                <input type="text" className='p-2 w-full border mb-3' {...register("code")} placeholder='code'/>
            </div>
            <div>
                <input type="text" className='p-2 w-full border mb-3' {...register("discount")} placeholder='discount' />
            </div>
            <div>
                <input type="text" className='p-2 w-full border mb-3'{...register("expirationDate")} placeholder='expirationDate' />
            </div>
           
            <button type="submit" className='p-2 w-full mt-3 bg-orange-500 text-white hover:bg-orange-600'>Submit</button>
            </form>
            
        </div>
    </div>
  )
}

export default AddCoupons