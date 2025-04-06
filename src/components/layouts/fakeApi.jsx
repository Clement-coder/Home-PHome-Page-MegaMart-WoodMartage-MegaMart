import { useState, useEffect } from "react";

const ProductList = ({ onAddToCart }) => {
  // Log the received prop for debugging.
  console.log("ProductList received onAddToCart:", onAddToCart);

  const [productList, setProductList] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductList(data.slice(0, 20))) // Only take first 20 products
      .catch((err) => console.error("Error fetching productList:", err));
  }, []);

  // Handle the add to cart operation
  const handleAdd = (product) => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      console.error("onAddToCart is not defined");
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
