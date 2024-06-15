import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
 
<div className="sign-bg flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
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

