import React, { useState, useEffect } from 'react';
import instance from '../../Axios';
import { useToast } from '@chakra-ui/react';

const AddCustomization = () => {
  const [sizeOptions, setSizeOptions] = useState([{ name: '', price: 0 }]);
  const [sauceOptions, setSauceOptions] = useState([{ name: '', price: 0 }]);
  const [customizations, setCustomizations] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

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

  const handleAddSizeOption = () => {
    setSizeOptions([...sizeOptions, { name: '', price: 0 }]);
  };

  const handleAddSauceOption = () => {
    setSauceOptions([...sauceOptions, { name: '', price: 0 }]);
  };

  const fetchCustomizations = async () => {
    try {
      const response = await instance.get('/foodcoustom');
      if (response.data.success) {
        setCustomizations(response.data.foodCustomization);
      }
    } catch (error) {
      console.error('Error fetching customizations:', error);
    }
  };

  useEffect(() => {
    fetchCustomizations();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Filter out empty options
    const filteredSizeOptions = sizeOptions.filter(option => option.name.trim() && option.price > 0);
    const filteredSauceOptions = sauceOptions.filter(option => option.name.trim() && option.price > 0);

    if (filteredSizeOptions.length === 0 && filteredSauceOptions.length === 0) {
      toast({
        title: "Please add at least one size or sauce option",
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    const data = {
      sizeOptions: filteredSizeOptions,
      sauceOptions: filteredSauceOptions
    };

    try {
      const response = await instance.post('/foodcoustom', data);
      if (response.data.success) {
        toast({
          title: "Customization options added successfully",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        // Reset form
        setSizeOptions([{ name: '', price: 0 }]);
        setSauceOptions([{ name: '', price: 0 }]);
        // Refresh customizations list
        fetchCustomizations();
      } else {
        toast({
          title: response.data.message || "Failed to add customization",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('There was an error!', error);
      toast({
        title: "Failed to add customization options",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='md:ml-64 mt-8 p-5'>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Add Customization Form */}
        <div className='border p-6 rounded-lg shadow-md w-full lg:w-1/2'>
          <h2 className='text-center text-xl font-bold text-orange-500 mb-6'>Add Food Customization</h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Size Options Section */}
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-4'>Size Options</h3>
              {sizeOptions.map((option, index) => (
                <div key={index} className='flex gap-3 mb-3'>
                  <input
                    type="text"
                    name="name"
                    placeholder="Size Name (e.g., Small, Medium, Large)"
                    value={option.name}
                    onChange={(event) => handleSizeChange(index, event)}
                    className='flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={option.price}
                    onChange={(event) => handleSizeChange(index, event)}
                    className='w-24 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                    min="0"
                    step="0.01"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSizeOption}
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
              >
                + Add Size Option
              </button>
            </div>

            {/* Sauce Options Section */}
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-4'>Sauce Options</h3>
              {sauceOptions.map((option, index) => (
                <div key={index} className='flex gap-3 mb-3'>
                  <input
                    type="text"
                    name="name"
                    placeholder="Sauce Name (e.g., Tomato, BBQ, Garlic)"
                    value={option.name}
                    onChange={(event) => handleSauceChange(index, event)}
                    className='flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={option.price}
                    onChange={(event) => handleSauceChange(index, event)}
                    className='w-24 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                    min="0"
                    step="0.01"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSauceOption}
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
              >
                + Add Sauce Option
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className='w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors'
            >
              {isSubmitting ? 'Adding...' : 'Add Customization Options'}
            </button>
          </form>
        </div>

        {/* Existing Customizations List */}
        <div className='flex-1'>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Existing Customizations</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {customizations && customizations.map((customization) => (
              <div key={customization._id} className="border rounded-lg p-6 shadow-md bg-white">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Customization Set</h3>

                {/* Size Options */}
                {customization.sizeOptions && customization.sizeOptions.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Size Options:</h4>
                    <div className="space-y-2">
                      {customization.sizeOptions.map((size, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                          <span className="text-gray-800">{size.name}</span>
                          <span className="font-medium text-green-600">${size.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sauce Options */}
                {customization.sauceOptions && customization.sauceOptions.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Sauce Options:</h4>
                    <div className="space-y-2">
                      {customization.sauceOptions.map((sauce, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                          <span className="text-gray-800">{sauce.name}</span>
                          <span className="font-medium text-green-600">${sauce.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {customizations && customizations.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">
                <div className="text-4xl mb-4">🍕</div>
                <p className="text-lg font-medium">No customizations found</p>
                <p className="text-sm">Add your first customization options using the form on the left.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomization;

