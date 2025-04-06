import React from "react";

const Populars = () => {
    const products = [
      { name: 'Tiles and porcelain', count: 20, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Pipes & accessories', count: 27, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Bath', count: 9, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Mirrors', count: 15, image:  "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Spotlights', count: 25, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Bathroom vanities', count: 15, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Bathroom', count: 29, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Water heaters', count: 12, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Power tools', count: 39, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
      { name: 'Toilets and compacts', count: 8, image: "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/bathroom-product-4-80x80.jpg" },
    ];
  
    return (
      <div>
        <div className="font-sans max-w-7xl mx-auto p-5">
          <h1 className="text-left font-bold text-3xl mb-6 text-gray-800">Popular Categories</h1>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg  transition-shadow duration-300"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 transform transition-transform duration-300 hover:scale-110">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full cursor-pointer h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold mb-1">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{product.count} products</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Populars;