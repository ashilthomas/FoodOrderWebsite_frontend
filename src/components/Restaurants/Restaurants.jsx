

import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenusStart, fetchMenusSuccess, fetchMenusFailure } from '../../Redux/items';
import CardSkeleton from '../Skeletons/CardSkeleton';

import instance from '../Axios';

const Restaurants = () => {
  const { loading, data, error } = useSelector((state) => state.menusData);
  const [clickedFilter, setClickedFilter] = useState('');
  const dispatch = useDispatch();


  const fetchMenuItems = async (val) => {
    setClickedFilter(`price-${val}`);
    dispatch(fetchMenusStart());
    try {
      const res = await instance.get(`menus/itemsfilter/?price=${val}`);
      dispatch(fetchMenusSuccess(res.data));
    } catch (error) {
      dispatch(fetchMenusFailure());
      console.error('Error fetching menu items:', error);
    }
  };

  const fetchByRating = async () => {
    setClickedFilter('rating');
    dispatch(fetchMenusStart());
    try {
      const res = await instance.get("menus/itemsfilter/?sort=rating");
      dispatch(fetchMenusSuccess(res.data));
    } catch (error) {
      dispatch(fetchMenusFailure());
      console.error('Error fetching menu items by rating:', error);
    }
  };

  const handleCuisineType = async (type) => {
    setClickedFilter('pure-veg');
    dispatch(fetchMenusStart());
    try {
      const res = await instance.get("menus/itemsfilter/?cuisinetype=vege");
      dispatch(fetchMenusSuccess(res.data));
    } catch (error) {
      dispatch(fetchMenusFailure());
      console.error('Error fetching menu items by rating:', error);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      dispatch(fetchMenusStart());
      try {
        const res = await instance.get("menus/allfoods");
        dispatch(fetchMenusSuccess(res.data.allMenus));
      } catch (error) {
        dispatch(fetchMenusFailure());
        console.error('Error fetching menu items by rating:', error);
      }
    };
    fetchItems();
  }, [dispatch]);

  return (
    <div id='restaurants' className="max-w-[1300px] mx-auto py-10 padding relative">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top Restaurants</h2>
      <div className="flex space-x-2 mb-7 whitespace-nowrap overflow-x-auto">
      <button
          className={`border rounded-full px-4 py-1 ${clickedFilter === 'All' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
        >
          All
        </button>
        <button
          onClick={fetchByRating}
          className={`border rounded-full px-4 py-1 ${clickedFilter === 'rating' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
        >
          Rating <span>&#9660;</span>
        </button>
       
        <button
          onClick={handleCuisineType}
          className={`border rounded-full px-4 py-1 ${clickedFilter === 'pure-veg' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
        >
          Pure Veg
        </button>
        <button
          onClick={() => fetchMenuItems(200)}
          className={`border rounded-full px-4 py-1 ${clickedFilter === 'price-100' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
        >
          Less than Rs. 200
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          data?.map((dish, index) => <Cards key={index} dish={dish} />)
        )}
      </div>

      <div className='mt-5 absolute bottom-0 right-0'>
    
    
      </div>
    </div>
  );
};

export default Restaurants;





// import React, { useEffect, useState } from 'react';
// import Cards from '../Cards/Cards';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchMenusStart, fetchMenusSuccess, fetchMenusFailure } from '../../Redux/items';
// import CardSkeleton from '../Skeletons/CardSkeleton';
// import instance from '../Axios';

// const Restaurants = () => {
//   const { loading, data, error } = useSelector((state) => state.menusData);
//   const [clickedFilter, setClickedFilter] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(8); // Adjust the number of items per page as needed
//   const [paginatedData, setPaginatedData] = useState([]);
//   const dispatch = useDispatch();

//   const fetchMenuItems = async (val) => {
//     setClickedFilter(`price-${val}`);
//     dispatch(fetchMenusStart());
//     try {
//       const res = await instance.get(`menus/itemsfilter/?price=${val}`);
//       dispatch(fetchMenusSuccess(res.data));
//     } catch (error) {
//       dispatch(fetchMenusFailure());
//       console.error('Error fetching menu items:', error);
//     }
//   };

//   const fetchByRating = async () => {
//     setClickedFilter('rating');
//     dispatch(fetchMenusStart());
//     try {
//       const res = await instance.get("menus/itemsfilter/?sort=rating");
//       dispatch(fetchMenusSuccess(res.data));
//     } catch (error) {
//       dispatch(fetchMenusFailure());
//       console.error('Error fetching menu items by rating:', error);
//     }
//   };

//   const handleCuisineType = async () => {
//     setClickedFilter('pure-veg');
//     dispatch(fetchMenusStart());
//     try {
//       const res = await instance.get("menus/itemsfilter/?cuisinetype=vege");
//       dispatch(fetchMenusSuccess(res.data));
//     } catch (error) {
//       dispatch(fetchMenusFailure());
//       console.error('Error fetching menu items by rating:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchItems = async () => {
//       dispatch(fetchMenusStart());
//       try {
//         const res = await instance.get("menus/allfoods");
//         dispatch(fetchMenusSuccess(res.data.allMenus));
//       } catch (error) {
//         dispatch(fetchMenusFailure());
//         console.error('Error fetching menu items by rating:', error);
//       }
//     };
//     fetchItems();
//   }, [dispatch]);

//   useEffect(() => {
//     // Calculate the paginated data based on the current page
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     setPaginatedData(data?.slice(indexOfFirstItem, indexOfLastItem));
//   }, [currentPage, data, itemsPerPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPagination = () => {
//     const totalPages = Math.ceil(data.length / itemsPerPage);
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <button
//           key={i}
//           onClick={() => handlePageChange(i)}
//           className={`border rounded-full px-4 py-1 ${currentPage === i ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pages;
//   };

//   return (
//     <div id='restaurants' className="max-w-[1300px] mx-auto py-10 padding relative">
//       <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top Restaurants</h2>
//       <div className="flex space-x-2 mb-7 whitespace-nowrap overflow-x-auto">
//         <button
//           className={`border rounded-full px-4 py-1 ${clickedFilter === 'All' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
//           onClick={() => setClickedFilter('All')}
//         >
//           All
//         </button>
//         <button
//           onClick={fetchByRating}
//           className={`border rounded-full px-4 py-1 ${clickedFilter === 'rating' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
//         >
//           Rating <span>&#9660;</span>
//         </button>
//         <button
//           onClick={handleCuisineType}
//           className={`border rounded-full px-4 py-1 ${clickedFilter === 'pure-veg' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
//         >
//           Pure Veg
//         </button>
//         <button
//           onClick={() => fetchMenuItems(100)}
//           className={`border rounded-full px-4 py-1 ${clickedFilter === 'price-100' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
//         >
//           Less than Rs. 300
//         </button>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {loading ? (
//           <>
//             <CardSkeleton />
//             <CardSkeleton />
//             <CardSkeleton />
//             <CardSkeleton />
//           </>
//         ) : (
//           paginatedData.map((dish, index) => <Cards key={index} dish={dish} />)
//         )}
//       </div>

//       <div className='mt-5'>
//         {renderPagination()}
//       </div>
//     </div>
//   );
// };

// export default Restaurants;
