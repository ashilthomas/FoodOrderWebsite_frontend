import React from 'react'

function ExploreItems() {
  const menuItems = [
    { name: 'Salad', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Rolls', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Deserts', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Sandwich', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Cake', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Pure Veg', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Pasta', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Noodles', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];
  return (
    <div className="bg-white py-12  ">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Explore our menu</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi iure distinctio eligendi omnis, eum aspernatur inventore unde fuga eos.
        </p>
        <div className="overflow-x-auto">
          <div className="flex justify-center space-x-4 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-32 h-32 rounded-full mx-auto mb-2 object-cover" />
                <div className="text-lg font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreItems;