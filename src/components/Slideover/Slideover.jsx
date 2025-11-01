

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../Axios";
import { useDispatch, useSelector } from "react-redux";
import { getallCartItems } from "../../Redux/cart";
import { useToast } from '@chakra-ui/react';

export default function Slideover({ open, setOpen }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartData.cartItems || []);
  const token = sessionStorage.getItem('token');
  const toast = useToast();
  const [isRemoving, setIsRemoving] = useState(false);

  const fetchCartItems = async () => {
    try {
      const res = await instance.get("cart/allcartitems", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.data.success) {
        dispatch(getallCartItems(res.data.cart));
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemoveItem = async (productId) => {
    setIsRemoving(true);
    try {
      const res = await instance.delete("cart/removeitem", {
        data: { productId },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.data.success) {
        toast({
          title: "Item removed from cart",
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        // Refresh cart items after removal
        await fetchCartItems();
      } else {
        toast({
          title: res.data.message || "Failed to remove item",
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Remove item error:", error);
      toast({
        title: error.response?.data?.message || "Failed to remove item",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setIsRemoving(false);
    }
  };

  useEffect(() => {
    if (open && token) {
      fetchCartItems();
    }
  }, [dispatch, open, token]);

  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                          Order Cart
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems.length === 0 ? (
                              <div>
                                <img src="https://shuvautsav.com/frontend/dist/images/logo/no-item-found-here.png" alt="" />
                              </div>
                            ) : (
                              cartItems.map((product) => (
                                <li key={product?._id} className="flex py-6">
                                  <div className="flex flex-col w-full">
                                    {  product.items.length==0?(  <div>
                                <img src="https://shuvautsav.com/frontend/dist/images/logo/no-item-found-here.png" alt="" />
                              </div>):  product?.items?.map((item) => (
                                      <div key={item?._id} className="flex py-2">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                          <img
                                            src={item?.productId?.image} // Adjust the image source if needed
                                            alt={item?.imageAlt} // Adjust the alt text if needed
                                            className="h-full w-full object-cover object-center"
                                          />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                              <h3>
                                                <a href={product.href}>
                                                  {item.productId?.title}
                                                </a>
                                              </h3>
                                              <p className="ml-4">{item.productId.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">
                                              {item?.customization?.map((custom) => (
                                                <span key={custom._id}>
                                                  {custom.name} ({custom.price})
                                                </span>
                                              ))}
                                            </p>
                                          </div>
                                          <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">Qty {item.quantity}</p>
                                            <div className="flex">
                                              <button
                                                type="button"
                                                className="font-medium text-red-500 hover:text-red-600 disabled:opacity-50"
                                                onClick={() => handleRemoveItem(item.productId._id)}
                                                disabled={isRemoving}
                                              >
                                                {isRemoving ? 'Removing...' : 'Remove'}
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </li>
                              ))
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      {cartItems.length > 0 && cartItems.some(cart => cart.items && cart.items.length > 0) ? (
                        <>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${cartItems.reduce((total, cart) => total + (cart.totalPrice || 0), 0).toFixed(2)}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6">
                            <Link to={"/placeorder"}>
                              <a
                                onClick={() => setOpen(false)}
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700"
                              >
                                Checkout
                              </a>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-gray-500 text-sm">Your cart is empty</p>
                          <button
                            type="button"
                            className="mt-4 font-medium text-orange-600 hover:text-orange-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </div>
                      )}
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-orange-600 hover:text-orange-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue ordering
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
