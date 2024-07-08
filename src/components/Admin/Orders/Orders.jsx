import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, Heading, Image, Skeleton, Stack, Text } from '@chakra-ui/react';
import instance from '../../Axios';
import { useToast } from '@chakra-ui/react';
import CardSkeleton from '../../Skeletons/CardSkeleton';

function Orders() {
  const [orderData, setOrderData] = useState([]);
  const [deleteRes,setDeleteRes]=useState({})

  const toast = useToast()
console.log("all order page rendering");

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const res = await instance.get("order/allorderitems",{withCredentials:true});
        setOrderData(res.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };
    getAllOrders();
  }, [deleteRes]);

  const deleteOrder = async (orderId, productId) => {
    try {
      const res = await instance.post("order/deleteOrder", { orderId, productId });
      setDeleteRes(res.data)
      if(res.data.success){
        toast({
          title: res.data.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }else{
        toast({
          title: res.data.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
 
    
    
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast({
          title: "Token expired. Please log in again.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Internal server error",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  // if (orderData.length === 0) {
  //   return ;
  // }

  return (
    <div className='max-w-[1300px] mx-auto py-14 padding md:ml-64 w-full'>



      {
      orderData.length === 0?(<div><Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack></div>):(
      
      
      orderData.map((order) =>
        order.orderItems.map((orderItem) =>
          orderItem.cart.items.map((item) => (
            <Card className='w-full'
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              key={item._id}
              mb={5}
              w="100%" // Set the card width to 100%
            >
              <Image className=''
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={item.productId.image}
                alt={item.productId.title}
              />
              <Stack w="100%"> {/* Ensure the stack takes full width */}
                <CardBody>
                  <Heading size='md'>{item.productId.title}</Heading>
                  <Text py='2'>
                    {item.productId.description}
                  </Text>
                  <Text py='2'>
                    Price: ${item.price}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button onClick={() => deleteOrder(order._id,item.productId._id)} variant='solid' colorScheme='orange'>
                    Cancel
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          ))
        )
      ))}
    </div>
  );
}

export default Orders;
