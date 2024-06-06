import React from 'react'

function Cards({dish}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden ">
    <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{dish.name}</h3>
      <p className="text-gray-500 text-sm">{dish.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold">{dish.price}</span>
        <div className="flex items-center">
          {Array.from({ length: dish.rating }).map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.177 2.392 9.823 2.392 9.951 2.927L11.17 8.09c.056.23.217.398.426.45l4.807.7c.515.074.723.709.35 1.074L13.8 13.214a.499.499 0 00-.144.439l.82 4.779c.098.573-.499 1.01-.998.739L10 16.347l-4.278 2.243c-.5.271-1.096-.166-.998-.739l.82-4.779a.499.499 0 00-.144-.439L2.896 10.314c-.373-.365-.165-1 .35-1.074l4.807-.7a.493.493 0 00.426-.45l1.219-5.162z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards