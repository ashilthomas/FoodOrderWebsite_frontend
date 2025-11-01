// import React, { useState } from "react";
// import { IoAdd } from "react-icons/io5";
// import { FiMinus } from "react-icons/fi";
// function Itemdetails({ isVisible, onClose, singleMenuItems }) {
//   const [selectedSize, setSelectedSize] = useState("M");
//   const [selectedSauce, setSelectedSauce] = useState("Mustard");
//   const [quantity,setQuantity]=useState(0)

//   const handleQuantityDecrese =()=>{
//     setQuantity(prev=>prev -1)
//   }
//   const handleQuantityIncrease = ()=>{
//     setQuantity(prev=>prev+1)
//   }
  
 
//   const handilAddtocart = async (id, price) => {
   
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg relative ">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={() => onClose(false)}
//             >
//               &times;
//             </button>

//             <div className="flex">
//               <div>
//                 <img className="w-72" src={singleMenuItems.image} alt="" />

//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">
//                     {singleMenuItems.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm w-72">
//                     {singleMenuItems.description}
//                   </p>

//                   <span className="text-lg font-bold">
//                     {singleMenuItems.price}$
//                   </span>
//                 </div>
//               </div>

//               <div>
//                 {/* <OrderForm singleMenuItems={singleMenuItems.customization} /> */}
//                 <div className="px-4 max-w-md mx-auto">
//                   <div className="mb-4">
//                     <h2 className="text-lg font-semibold mb-2">Choose Size</h2>
//                     <div className="space-y-2">
//                       {singleMenuItems?.customization?.sizeOptions?.map(
//                         (size, index) => (
//                           <label key={index} className="flex items-center">
//                             <input
//                               type="radio"
//                               name="size"
//                               value={size}
//                               checked={selectedSize === size}
//                               onChange={() => setSelectedSize(size)}
//                               className="form-radio text-indigo-600"
//                             />
//                             <span className="ml-2">{size.name}</span>
//                             <span className="ml-auto">${quantity * size.price}</span>
//                           </label>
//                         )
//                       )}
//                     </div>
//                   </div>

//                   <div>
//                     <h2 className="text-lg font-semibold mb-2">Choose Sauce</h2>
//                     <div className="space-y-2">
//                       {singleMenuItems?.customization?.sauceOptions?.map(
//                         (sauce, index) => (
//                           <label key={index} className="flex items-center">
//                             <input
//                               type="radio"
//                               name="sauce"
//                               value={sauce}
//                               checked={selectedSauce === sauce}
//                               onChange={() => setSelectedSauce(sauce)}
//                               className="form-radio text-indigo-600"
//                             />
//                             <span className="ml-2">{sauce.name}</span>
//                             <span className="ml-auto">${sauce.price}</span>
//                           </label>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <hr className="mt-5" />

//                 <div className="flex items-center justify-between mt-4">
//                   <button
//                     onClick={() =>
//                       handilAddtocart(
//                         singleMenuItems._id,
//                         singleMenuItems.price
//                       )
//                     }
//                     className='className="ml-2 bg-orange-500 text-white py-2 px-8 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"'
//                   >
//                     Add
//                   </button>

//                   <div className="flex gap-4 shadow-lg py-2 px-8 items-center  rounded-full">
//                     <button onClick={handleQuantityDecrese} className="">
//                       <FiMinus size={20} />
//                     </button>
//                     <p>{quantity}</p>
//                     <button onClick={handleQuantityIncrease}>
//                       <IoAdd size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Itemdetails;

// const OrderForm = ({singleMenuItems}) => {

//   const [selectedSize, setSelectedSize] = useState("M");
//   const [selectedSauce, setSelectedSauce] = useState("Mustard");

//   return (
//     <div className="px-4 max-w-md mx-auto">
//       <div className="mb-4">
//         <h2 className="text-lg font-semibold mb-2">Choose Size</h2>
//         <div className="space-y-2">
//           {singleMenuItems?.sizeOptions?.map((size, index) => (
//             <label key={index} className="flex items-center">
//               <input
//                 type="radio"
//                 name="size"
//                 value={size}
//                 checked={selectedSize === size}
//                 onChange={() => setSelectedSize(size)}
//                 className="form-radio text-indigo-600"
//               />
//               <span className="ml-2">{size.name}</span>
//               <span className="ml-auto">${size.price}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-lg font-semibold mb-2">Choose Sauce</h2>
//         <div className="space-y-2">
//           {singleMenuItems?.sauceOptions?.map(
//             (sauce, index) => (
//               <label key={index} className="flex items-center">
//                 <input
//                   type="radio"
//                   name="sauce"
//                   value={sauce}
//                   checked={selectedSauce === sauce}
//                   onChange={() => setSelectedSauce(sauce)}
//                   className="form-radio text-indigo-600"
//                 />
//                 <span className="ml-2">{sauce.name}</span>
//                 <span className="ml-auto">${sauce.price}</span>
//               </label>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import instance from "../Axios";
import { setResDetails } from "../../Redux/cart";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from '@chakra-ui/react';

function Itemdetails({ isVisible, onClose, singleMenuItems }) {
  const {token} =useSelector((state)=>state.tokenData)
  const toast = useToast()


  const [selectedSize, setSelectedSize] = useState(singleMenuItems?.customization?.sizeOptions?.[0]?.name || "Size S");
  const [selectedSauce, setSelectedSauce] = useState(singleMenuItems?.customization?.sauceOptions?.[0]?.name || "Mustard");


const dispatch =useDispatch()
  const [quantity, setQuantity] = useState(1);


  const handleQuantityDecrease = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = async (id) => {
    const sizeOption = singleMenuItems?.customization?.sizeOptions?.find(size => size.name === selectedSize);
    const sauceOption = singleMenuItems?.customization?.sauceOptions?.find(sauce => sauce.name === selectedSauce);

    if (!sizeOption || !sauceOption) {
      toast({
        title: "Please select size and sauce options",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const customization = [
      { name: selectedSize, price: sizeOption.price },
      { name: selectedSauce, price: sauceOption.price }
    ];

    const payload = {
      productId: id,
      quantity,
      customization
    };

    try {
      const res = await instance.post("cart/addtocart", payload, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch(setResDetails(res.data));
      if (res.data.success) {
        toast({
          title: res.data.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: res.data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      if (error.response?.status === 401) {
        toast({
          title: "Please log in to add items to cart",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else if (error.response?.status === 403) {
        toast({
          title: "Token expired. Please log in again.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: error.response?.data?.message || "Failed to add item to cart",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }
  }
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => onClose(false)}
            >
              &times;
            </button>

            <div className="md:flex">
              <div>
                <img className="w-72" src={singleMenuItems.image} alt="" />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {singleMenuItems.title}
                  </h3>
                  <p className="text-gray-500 text-sm w-72">
                    {singleMenuItems.description}
                  </p>

                  <span className="text-lg font-bold">
                    {singleMenuItems.price}$
                  </span>
                </div>
              </div>

              <div>
                <div className="px-4 max-w-md mx-auto">
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Choose Size</h2>
                    <div className="space-y-2">
                      {singleMenuItems?.customization?.sizeOptions?.map(
                        (size, index) => (
                          <label key={index} className="flex items-center">
                            <input
                              type="radio"
                              name="size"
                              value={size.name}
                              checked={selectedSize === size.name}
                              onChange={() => setSelectedSize(size.name)}
                              className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">{size.name}</span>
                            <span className="ml-auto">${size.price}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold mb-2">Choose Sauce</h2>
                    <div className="space-y-2">
                      {singleMenuItems?.customization?.sauceOptions?.map(
                        (sauce, index) => (
                          <label key={index} className="flex items-center">
                            <input
                              type="radio"
                              name="sauce"
                              value={sauce.name}
                              checked={selectedSauce === sauce.name}
                              onChange={() => setSelectedSauce(sauce.name)}
                              className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">{sauce.name}</span>
                            <span className="ml-auto">${sauce.price}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <hr className="mt-5" />

                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() =>
                      handleAddToCart(singleMenuItems._id)
                    }
                    className="ml-2 bg-orange-500 text-white py-2 px-8 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
                  >
                    Add
                  </button>

                  <div className="flex gap-4 shadow-lg py-2 px-8 items-center rounded-full">
                    <button onClick={handleQuantityDecrease} className="">
                      <FiMinus size={20} />
                    </button>
                    <p>{quantity}</p>
                    <button onClick={handleQuantityIncrease}>
                      <IoAdd size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Itemdetails;

