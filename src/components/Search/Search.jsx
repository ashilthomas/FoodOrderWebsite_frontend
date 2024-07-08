// import React, { useEffect, useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import instance from "../Axios";
// import { Link } from "react-router-dom";
// import { SkeletonText } from "@chakra-ui/react";

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     if (query.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     const fetchSuggestions = async () => {
//       setLoading(true);
//       try {
//         const response = await instance.get(`menus/search?title=${query}`);
//         setSuggestions(response.data);
//       } catch (error) {
//         console.error("Error fetching suggestions", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const debounceFetch = setTimeout(() => {
//       fetchSuggestions();
//     }, 300);

//     return () => clearTimeout(debounceFetch);
//   }, [query]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//   };





//   return (
//     <div className="max-w-[900px] mx-auto py-14">
//       <div className="relative w-full mx-auto mb-4 flex items-center border border-gray-300 px-3 rounded">
//         <input
//           onChange={handleInputChange}
//           value={query}
//           type="text"
//           placeholder="Search for food"
//           className="w-full p-2 outline-none"
//         />
//         <CiSearch />
//       </div>
//       <div className="mb-4"></div>
//       <div>
//         {loading && (
//           <div>
//             <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
//           </div>
//         )}
//         {suggestions.length > 0 ? (
//           <ul className="suggestions-list">
//             {suggestions.map((suggestion, index) => (
//               <Link to={`/restaurantitems/${suggestion.restaurant._id}`} key={index}>
//                 <li
//                   className="pt-3 pb-3 flex gap-2 items-center cursor-pointer hover:bg-slate-50"
              
//                 >
//                   <img
//                     src={suggestion.image}
//                     className="w-16 rounded-lg"
//                     alt=""
//                   />
//                   <div className="flex flex-col">
//                     {suggestion.title}
//                     <span className="text-sm text-slate-500">
//                       {suggestion.restaurant.title}
//                     </span>
//                   </div>
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         ) : (
//           <>
//             <h2 className="text-lg font-semibold">Recent Searches</h2>
//             <div className="flex items-center mt-2">
//               <ul>
            
//                   <li className="flex gap-1 pb-4" >
//                     <svg
//                       className="w-6 h-6 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M10 21l-2-2a10 10 0 1114 0l-2 2m-6 0v-6m0 6H4"
//                       />
//                     </svg>
//                   <span>Burger</span>
//                   </li>
              
//               </ul>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import instance from "../Axios";
import { Link } from "react-router-dom";
import { SkeletonText } from "@chakra-ui/react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await instance.get(`menus/search?query=${query}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching suggestions", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounceFetch);
  }, [query]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className="max-w-[900px] mx-auto py-14">
      <div className="relative w-full mx-auto mb-4 flex items-center border border-gray-300 px-3 rounded">
        <input
          onChange={handleInputChange}
          value={query}
          type="text"
          placeholder="Search for food"
          className="w-full p-2 outline-none"
        />
        <CiSearch />
      </div>
      <div>
        {loading && (
          <div>
            <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
          </div>
        )}
        {suggestions.length > 0 ? (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <Link to={`/restaurantitems/${suggestion.restaurant._id}`} key={index}>
                <li className="pt-3 pb-3 flex gap-2 items-center cursor-pointer hover:bg-slate-50">
                  <img src={suggestion.image} className="w-16 rounded-lg" alt="" />
                  <div className="flex flex-col">
                    {suggestion.title}
                    <span className="text-sm text-slate-500">
                      {suggestion.restaurant.title}
                    </span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <>
            <h2 className="text-lg font-semibold">Recent Searches</h2>
            <div className="flex items-center mt-2">
              <ul>
                <li className="flex gap-1 pb-4">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 21l-2-2a10 10 0 1114 0l-2 2m-6 0v-6m0 6H4"
                    />
                  </svg>
                  <span>Burger</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
