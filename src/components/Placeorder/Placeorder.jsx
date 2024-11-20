import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../Axios";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Placeorder = () => {
  const toast = useToast();
  const cartItems = useSelector((state) => state.cartData.cartItems || []);
  const {token} =useSelector((state)=>state.tokenData)
 
 
 

  const [discount, setDiscount] = useState({ discount: 0 })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const subTotal = useMemo(
    () => cartItems.reduce((acc, v) => acc + v.totalPrice, 0),
    [cartItems]
  );

  const discountAmount = useMemo(
    () => (discount?.discount ? (subTotal * discount.discount) / 100 : 0),
    [subTotal, discount]
  );
  
  const finalPrice = useMemo(
    () => subTotal - discountAmount,
    [subTotal, discountAmount]
  );





  const onSubmit = async (data) => {
    try {
      const res = await instance.post("coupon/couponvalidate", { data });
      if (res.data.success && res.data.coupon) {
        setDiscount(res.data.coupon); // Apply the coupon
        toast({
          title: res.data.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        setDiscount({ discount: 0 }); // Reset discount on failure
        toast({
          title: res.data.message || "Invalid coupon code",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      setDiscount({ discount: 0 }); // Reset discount on error
      toast({
        title: "Something went wrong. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  

  const paymentHandler = async (event) => {

    const amountToPay = discount.discount ? finalPrice : subTotal;
    
    const response = await instance.post(
      "order/placeorder",
      { amount: amountToPay },{
        headers: {
          'Authorization': ` ${token}` // Pass the token here
        }
      }
    );

    const order = await response.data.data;

    console.log("orderddddsss",order);

    const option = {
      key: import.meta.env.VITE_SOME_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "Ashil Codder",
      description: "Test Transaction",
      image: "https://i.ibb.co/5Y3m33n/test.png",
      order_id: order.id,
    
      handler: async function (response) {
        const body = { ...response ,cartItems: cartItems.map(item => ({ _id: item._id })),amountToPay};

        const validateResponse = await instance.post(
          "order/verifyorder",
          body,{
            headers: {
              'Authorization': ` ${token}` // Pass the token here
            }
          }
        );

        const jsonResponse = await validateResponse;

      
      },
      prefill: {
        name: "Ashil Coder",
        email: "Ashilcoder@example.com",
        contact: "00000000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(option);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
    });

    rzp1.open();
    event.preventDefault();
  };

  return (
    <div className="max-w-[900px] mx-auto py-14 flex flex-col md:flex-row">
      {/* Address Selection Section */}
      <div className="md:w-4/5 md:pr-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Select Saved Address</h2>
          <p className="text-gray-600">
            You've added some addresses before, You can select one below.
          </p>
        </div>
        <div className="max-w-lg mx-auto p-4">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="First name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                type="text"
                className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Street"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="City"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="w-full">
                <input
                  type="text"
                  className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="Country"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="Pin code"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                className="mt-1 block w-full p-1.5 border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Phone"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Order Summary Section */}

      <div className="md:w-1/2 md:pl-4 mt-8 md:mt-0">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="border rounded-lg p-4 mt-4">
          {cartItems.map((items, i) => (
            <div key={i} className="flex justify-between border-b py-2 flex-col gap-3">
              {items.items.map((product) => (
               <div className="flex justify-between">
                <span>{product.productId.title}</span>
                <span>{product.productId.price}</span>
                </div>
               
              
              ))}

            
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <span>Sub Total</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Delivery Charge (2 kms)</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Discount (10%)</span>
            <span>-$10</span>
          </div>
          <div>
            <form className="m-4 flex" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                {...register("coupon", { required: true })}
                placeholder="Add coupon"
              />

              <button
                type="submit"
                className="px-8 rounded-r-lg bg-orange-500 text-white p-2 uppercase border-yellow-500 border-t border-b border-r"
              >
                Coupon
              </button>
            </form>
          </div>
          <div className="flex justify-between mt-4 font-semibold ">
            {discount?.discount ? (
              <>
                <p>
                  Discount: ${discountAmount.toFixed(2)} ({discount?.discount}%)
                </p>
                <p>Final Price: ${finalPrice.toFixed(2)}</p>
              </>
            ) : (
              <>
                <span>To Pay</span>
                <span>${subTotal.toFixed(2)}</span>
              </>
            )}
          </div>
          <button onClick={paymentHandler} className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;

