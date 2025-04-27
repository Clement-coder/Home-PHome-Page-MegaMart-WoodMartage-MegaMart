import { useState, useEffect } from "react";
// import { FaStar } from 'react-icons/fa';


const ProductList = ({ onAddToCart }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductList(data.slice(0, 20)))
      .catch((err) => console.error("Error fetching productList:", err));
  }, []);

  const handleAdd = (product) => {
    console.log("Adding to cart:", product); // Check if this logs
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      console.error("onAddToCart not received");
    }
  };


  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {productList.map((product) => (
          <div 
            key={product.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-2 font-semibold text-sm">
              {product.title.length > 30
                ? `${product.title.slice(0, 30)}...`
                : product.title}
            </h3>
            <div className="flex items-center py-4 "> 
            <svg className="fill-gray-300" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg className="fill-gray-300" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg className="fill-gray-300" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg className="fill-gray-300" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg className="fill-gray-300" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>

            </div>
            <span>
            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>

            </span>
            <p className="text-blue-600 font-bold">${product.price}</p>
            <button
              onClick={() => handleAdd(product)}
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
