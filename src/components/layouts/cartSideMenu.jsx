import React from "react";

const CartSidebar = ({ cartItems = [], onClose = () => {}, isOpen = false }) => {
  const isEmpty = cartItems.length === 0;

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40"></div>}

      <div
        className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg px-4 z-50 overflow-y-auto transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b py-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-black group text-xl font-medium flex items-center gap-2 hover:text-gray-500"
          >
            <svg
              className="transition-transform group-hover:-rotate-90 ease-out duration-300 fill-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            Close
          </button>
        </div>

        {isEmpty ? (
          <div className="flex flex-col items-center justify-center mt-12 text-center text-gray-500">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e5e5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6h13l-1.5 9h-11z" />
              <path d="M6 6L4 2" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <line x1="10" y1="10" x2="14" y2="14" />
              <line x1="14" y1="10" x2="10" y2="14" />
            </svg>
            <p className="mt-4 font-medium text-gray-800 py-4">
              No products in the cart.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 font-medium text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              RETURN TO SHOP
            </button>
          </div>
        ) : (
          <ul className="space-y-3 mt-4 text-black">
            {cartItems.map((item, index) => (
              <li key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
                <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
