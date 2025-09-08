// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { CartContext } from "../context/CartContext.jsx";

// export default function SoftwareAndApps() {
//   const [sortOption, setSortOption] = useState("default");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useContext(CartContext);

//   // Fetch products from API
//   const fetchProducts = async (sort) => {
//     try {
//       setLoading(true);
//       const res = await axios.get(
//         `http://localhost:3000/api/product/products?sort=${sort}`
//       );
//       setProducts(res.data.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(sortOption);
//   }, [sortOption]);

//   const handleSort = (option) => {
//     setSortOption(option);
//   };

//   if (loading) {
//     return (
//       <div className="p-6 text-center text-lg text-gray-500 animate-pulse">
//         Loading products...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Breadcrumb */}
//         <p className="text-gray-500 text-sm mb-2">Home / Software & Apps</p>

//         {/* Heading */}
//         <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">
//           Software & Apps
//         </h1>
//         <p className="text-gray-500 mb-6">
//           Showing all {products.length} results
//         </p>

//         {/* Sorting */}
//         <div className="flex justify-end mb-6">
//           <select
//             value={sortOption}
//             onChange={(e) => handleSort(e.target.value)}
//             className="border border-gray-300 px-4 py-2 rounded-md shadow-sm bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//           >
//             <option value="default">Default sorting</option>
//             <option value="popularity">Sort by popularity</option>
//             <option value="rating">Sort by average rating</option>
//             <option value="latest">Sort by latest</option>
//             <option value="lowToHigh">Sort by price: low to high</option>
//             <option value="highToLow">Sort by price: high to low</option>
//           </select>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
//             >
//               {/* Sale badge */}
//               {product.sale && (
//                 <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md z-10">
//                   Sale!
//                 </span>
//               )}

//               {/* Product Image */}
//               <div className="relative h-56 bg-gray-100 overflow-hidden">
//                 {product.image ? (
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                 ) : (
//                   <span className="text-gray-400 flex items-center justify-center h-full">
//                     No Image
//                   </span>
//                 )}
//               </div>

//               {/* Product Details */}
//               <div className="p-4 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-gray-900 font-medium mb-2 hover:text-pink-500 transition">
//                     {product.title}
//                   </h2>

//                   {/* Prices */}
//                   <div className="mb-3 flex items-center justify-center gap-2">
//                     {product.oldPrice && (
//                       <span className="text-gray-400 line-through text-sm">
//                         ₹{product.oldPrice.toLocaleString()}
//                       </span>
//                     )}
//                     <span className="text-green-700 font-bold text-lg">
//                       ₹{product.price.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="w-full bg-[#294A63] text-white py-2 rounded-md font-medium hover:bg-[#1f3f53] transition"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function SoftwareAndApps() {
  const { addToCart } = useContext(CartContext);

  // Static products data
  const products = [
    {
      id: 1,
      title: "Product One",
      price: 4999,
      oldPrice: 5999,
      image: "/assets/products/product1.jpg",
      sale: true,
    },
    {
      id: 2,
      title: "Product Two",
      price: 2999,
      oldPrice: 3999,
      image: "/assets/products/product2.jpg",
      sale: false,
    },
    {
      id: 3,
      title: "Product Three",
      price: 1999,
      image: "/assets/products/product3.jpg",
      sale: true,
    },
    {
      id: 4,
      title: "Product Four",
      price: 3999,
      oldPrice: 4499,
      image: "/assets/products/product4.jpg",
      sale: false,
    },
    {
      id: 5,
      title: "Product Five",
      price: 5999,
      oldPrice: 6999,
      image: "/assets/products/product5.jpg",
      sale: true,
    },
    {
      id: 6,
      title: "Product Six",
      price: 1499,
      image: "/assets/products/product6.jpg",
      sale: false,
    },
    {
      id: 7,
      title: "Product Seven",
      price: 3499,
      oldPrice: 3999,
      image: "/assets/products/product7.jpg",
      sale: true,
    },
    {
      id: 8,
      title: "Product Eight",
      price: 2599,
      image: "/assets/products/product8.jpg",
      sale: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen p-6 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <p className="text-gray-500 text-sm mb-2">Home / Software & Apps</p>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">
        Software & Apps
      </h1>
      <p className="text-gray-500 mb-6">Showing all {products.length} results</p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col"
          >
            {/* Sale badge */}
            {product.sale && (
              <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md z-10">
                Sale!
              </span>
            )}

            {/* Image */}
            <div className="relative h-56 bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-gray-900 font-medium mb-2 hover:text-pink-500 transition">
                  {product.title}
                </h2>

                {/* Prices */}
                <div className="mb-3 flex items-center justify-center gap-2">
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-green-700 font-bold text-lg">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-[#294A63] text-white py-2 rounded-md font-medium hover:bg-[#1f3f53] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
