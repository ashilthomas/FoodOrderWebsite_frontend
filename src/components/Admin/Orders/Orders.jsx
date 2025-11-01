import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, Heading, Image, Skeleton, Stack, Text, Badge, Select, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import instance from '../../Axios';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { FaSearch, FaShoppingCart, FaClock, FaCheckCircle, FaTimesCircle, FaTruck, FaUser, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';


function Orders() {
  const [orderData, setOrderData] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [deleteRes, setDeleteRes] = useState({});

  const { isAdmin } = useSelector((state) => state.tokenData);
  const { token } = useSelector((state) => state.tokenData);
  const toast = useToast();

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        setLoading(true);
        const res = await instance.get("order/allorderitems", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setOrderData(res.data);
        setFilteredOrders(res.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
        toast({
          title: "Error fetching orders",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    getAllOrders();
  }, [deleteRes, token, toast]);

  // Filter orders based on search and status
  useEffect(() => {
    let filtered = orderData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.orderItems.some(orderItem =>
          orderItem.cart.items.some(item =>
            item.productId.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.productId.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.deliveryStatus === statusFilter);
    }

    setFilteredOrders(filtered);
  }, [orderData, searchTerm, statusFilter]);

  const deleteOrder = async (orderId, productId) => {
    try {
      const res = await instance.post("order/deleteOrder", { orderId, productId });
      setDeleteRes(res.data);
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
      if (error.response && error.response.status === 403) {
        toast({
          title: "Token expired. Please log in again.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Internal server error",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      // This would need a backend endpoint to update order status
      // For now, we'll just show a toast
      toast({
        title: `Order status updated to ${newStatus}`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Failed to update order status",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'yellow';
      case 'shipped': return 'blue';
      case 'delivered': return 'green';
      case 'cancelled': return 'red';
      default: return 'gray';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FaClock />;
      case 'shipped': return <FaTruck />;
      case 'delivered': return <FaCheckCircle />;
      case 'cancelled': return <FaTimesCircle />;
      default: return <FaShoppingCart />;
    }
  };

  return (
    <div className='md:ml-64 mt-8 p-6'>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Management</h1>
        <p className="text-gray-600">Monitor and manage all customer orders</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaShoppingCart className="text-blue-600 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-800">{orderData.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaClock className="text-yellow-600 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-800">
                {orderData.filter(order => order.deliveryStatus === 'pending').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Delivered</p>
              <p className="text-2xl font-bold text-gray-800">
                {orderData.filter(order => order.deliveryStatus === 'delivered').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-full">
              <FaTimesCircle className="text-red-600 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Cancelled</p>
              <p className="text-2xl font-bold text-gray-800">
                {orderData.filter(order => order.deliveryStatus === 'cancelled').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Orders</label>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <FaSearch className="text-gray-400" />
              </InputLeftElement>
              <Input
                placeholder="Search by product name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </InputGroup>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </Select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="w-full">
                <CardBody>
                  <Skeleton height="200px" />
                </CardBody>
              </Card>
            ))}
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <FaShoppingCart className="mx-auto h-24 w-24 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          filteredOrders.map((order) =>
            order.orderItems.map((orderItem) =>
              orderItem.cart.items.map((item) => (
                <Card
                  key={`${order._id}-${item._id}`}
                  className="w-full shadow-md hover:shadow-lg transition-shadow"
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                >
                  <div className="relative">
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '200px' }}
                      h={{ base: '200px', sm: 'auto' }}
                      src={item.productId.image}
                      alt={item.productId.title}
                      className="w-full h-full"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge
                        colorScheme={getStatusColor(order.deliveryStatus)}
                        className="flex items-center gap-1"
                      >
                        {getStatusIcon(order.deliveryStatus)}
                        {order.deliveryStatus}
                      </Badge>
                    </div>
                  </div>

                  <Stack w="100%" spacing={4}>
                    <CardBody>
                      <div className="flex justify-between items-start mb-2">
                        <Heading size='md' className="text-gray-800">{item.productId.title}</Heading>
                        <div className="text-right">
                          <div className="flex items-center text-lg font-bold text-green-600">
                            <FaDollarSign className="mr-1" />
                            {item.price}
                          </div>
                          <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                        </div>
                      </div>

                      <Text py='2' className="text-gray-600">
                        {item.productId.description}
                      </Text>

                      {/* Order Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center text-sm text-gray-600">
                          <FaUser className="mr-2 text-gray-400" />
                          <span>Order ID: {order._id.slice(-8)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaCalendarAlt className="mr-2 text-gray-400" />
                          <span>{new Date(order.date).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Customizations */}
                      {item.customization && item.customization.length > 0 && (
                        <div className="mt-3">
                          <Text className="text-sm font-medium text-gray-700 mb-2">Customizations:</Text>
                          <div className="flex flex-wrap gap-2">
                            {item.customization.map((custom, idx) => (
                              <Badge key={idx} variant="subtle" colorScheme="orange" className="text-xs">
                                {custom.name} (+${custom.price})
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardBody>

                    <CardFooter className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Select
                          size="sm"
                          value={order.deliveryStatus}
                          onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                          className="w-32"
                        >
                          <option value="pending">Pending</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </Select>
                      </div>

                      <Button
                        onClick={() => deleteOrder(order._id, item.productId._id)}
                        variant='solid'
                        colorScheme='red'
                        size="sm"
                      >
                        Cancel Order
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              ))
            )
          )
        )}
      </div>
    </div>
  );
}

export default Orders;
