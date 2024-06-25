import React from 'react'

function CardSkeleton() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
    <div className="w-full h-48 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
    </div>
    <div className="px-4 pb-4 flex justify-between items-center">
      <div className="h-6 w-12 bg-gray-300 rounded"></div>
      <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
    </div>
  </div>
  )
}

export default CardSkeleton