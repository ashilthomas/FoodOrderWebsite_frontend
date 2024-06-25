

import React, { useState } from 'react';
import axios from 'axios';


const AddCustomization = () => {
  const [sizeOptions, setSizeOptions] = useState([{ name: '', price: 0 }]);
  const [sauceOptions, setSauceOptions] = useState([{ name: '', price: 0 }]);

  const handleSizeChange = (index, event) => {
    const values = [...sizeOptions];
    values[index][event.target.name] = event.target.value;
    setSizeOptions(values);
  };

  const handleSauceChange = (index, event) => {
    const values = [...sauceOptions];
    values[index][event.target.name] = event.target.value;
    setSauceOptions(values);
  };

//   const addSizeOption = () => {
//     setSizeOptions([...sizeOptions, { name: '', price: 0 }]);
//   };

//   const addSauceOption = () => {
//     setSauceOptions([...sauceOptions, { name: '', price: 0 }]);
//   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      sizeOptions,
      sauceOptions
    };
    try {
      const response = await axios.post('/foodCustomization', data);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
   
    <div className=' ml-10 '>
      
        
    <form onSubmit={handleSubmit} className='border w-full  p-6 sm:ml-5 h-96'>
      <h2 className='text-center text-lg font-bold text-orange-500'>Size Options</h2>
      {sizeOptions.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            placeholder="Size Name"
            value={option.name}
            onChange={(event) => handleSizeChange(index, event)}
            className='p-2 w-full border mb-3'
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={option.price}
            onChange={(event) => handleSizeChange(index, event)}
             className='p-2 w-full border '
          />
        </div>
      ))}
      <button type="button" className='mb-3' >Add Size Option</button>

      <h2 className='text-center text-lg font-bold text-orange-500'>Sauce Options</h2>
      {sauceOptions.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            placeholder="Sauce Name"
            value={option.name}
            onChange={(event) => handleSauceChange(index, event)}
             className='p-2 w-full border mb-3'
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={option.price}
            onChange={(event) => handleSauceChange(index, event)}
             className='p-2 w-full border'
          />
        </div>
      ))}
      <button type="button">Add Sauce Option</button>

      <button type="submit" className=' p-2 w-full mt-3 bg-orange-500 text-white hover:bg-orange-600 '>Submit</button>
    </form>
    </div>
  );
};

export default AddCustomization;
