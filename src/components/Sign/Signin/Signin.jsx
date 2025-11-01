import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import instance from '../../Axios';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../Redux/token';



const schema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required')
  }).required();
  
function Signin() {
    const toast = useToast()
   const navigation = useNavigate()
   const dispatch =useDispatch()

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    

      const onSubmit = async(data)=>{
        const res = await instance.post("user/login",data,{withCredentials:true})
        console.log(res.data.role);
        
        dispatch(setUser(res.data.user || res.data))

        sessionStorage.setItem("token", res.data.token);
        if(res.data.success){
          toast({
            title: res.data.message,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    
          setTimeout(() => {
            navigation("/")
          }, 2000);
        }else{
          toast({
            title: res.data.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      }
  return (
 
<div className="sign-bg flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
             {...register("email")}
             value={"ashil@gmail.com"}
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Email address"
            />
                <p className='text-red-500 text-sm'>{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
             {...register("password")}
             value={"12345678"}
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
              <p className='text-red-500 text-sm'>{errors.password?.message}</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700 text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-orange-500 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center justify-center mt-6">
          <p className="text-gray-600 text-sm">create account
          <Link to={"/signup"}>
          <span className='text-orange-500 cursor-pointer'>Signup</span> </Link> </p>
         
        </div>
      
      </div>
    </div>
  )
}

export default Signin

