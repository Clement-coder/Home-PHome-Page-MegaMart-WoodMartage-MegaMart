import React, { useState } from "react";
import {
  FaHeart,
  FaExchangeAlt,
  FaShoppingCart,
  FaSearch,
  FaThList,
  FaTruck,
  FaBullhorn,
  FaCogs,
} from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CartSidebar from "../layouts/cartSideMenu";

const categoryItems = [
  {
    title: "All Categories",
    leftIcon: <FaThList className="text-gray-500/50 text-xl" />,
    rightIcon: <MdKeyboardArrowRight className="text-gray-500/50 text-xl" />,
  },
  { title: "Services", leftIcon: <FaCogs className="text-gray-500/50 text-xl" /> },
  { title: "Promotions", leftIcon: <FaBullhorn className="text-gray-500/50 text-xl" /> },
  { title: "Payment And Delivery", leftIcon: <FaTruck className="text-gray-500/50 text-xl" /> },
];

const Categories = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuVisible, setIsMoreMenuVisible] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [cartShake, setCartShake] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleMoreMenu = () => setIsMoreMenuVisible((prev) => !prev);
  const toggleCartSidebar = () => setIsCartSidebarOpen((prev) => !prev);
  
  // Shake the cart icon when clicked
  const shakeCartIcon = () => {
    setCartShake(true);
    setTimeout(() => {
      setCartShake(false);
    }, 500);
  };

  return (
    <div className="sticky top-0 left-0 z-50 bg-blue-700 shadow-lg">
      <div className="px-4 py-3 lg:px-10 flex items-center justify-between flex-wrap gap-y-4">
        {/* Category Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {categoryItems.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-white font-semibold text-sm cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={toggleMenu}
            >
              {item.leftIcon}
              <span>{item.title}</span>
              {item.rightIcon}
            </span>
          ))}
        </div>

        {/* Search and Cart Icons */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 w-full lg:w-auto">
          <div className="relative">
            <input
              placeholder="Search for Products"
              className="w-full lg:w-72 pl-6 z-100 pr-10 py-2 mt-9 rounded-md focus:outline-none transition-all duration-300 transform hover:scale-105"
              type="search"
            />
            <FaSearch className="absolute right-4 top-12 text-gray-500 text-lg" />
          </div>

          <div className="flex items-center justify-center gap-4">
            {[FaHeart, FaExchangeAlt].map((Icon, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Icon className="text-white text-2xl" />
                <span className="absolute -top-2 -right-2 bg-white text-blue-800 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            ))}
            <div
              onClick={() => {
                shakeCartIcon();
                toggleCartSidebar();
              }}
              className={`relative flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105 ${cartShake ? "animate-shake" : ""}`}
            >
              <FaShoppingCart className="text-white text-2xl" />
              <span className="absolute -top-2 -right-2 bg-white text-blue-800 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </div>
          </div>

          {/* More button for mobile */}
          <div className="lg:hidden flex items-center gap-4 absolute top-3 right-3">
            <button
              onClick={toggleMoreMenu}
              className="text-white text-lg font-bold flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              More
            <div>
            {isMoreMenuVisible ? (
                <MdKeyboardArrowRight className="text-white text-xl" />
              ) : (
                <MdKeyboardArrowLeft className="text-white text-xl" />
              )}
            </div>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar "More" menu */}
      <div
        className={`absolute transition-all duration-500 top-0 ease-in-out bg-gray-900 text-white p-6 rounded-lg w-64 h-screen shadow-xl z-10 ${
          isMoreMenuVisible ? "left-0 opacity-100" : "-left-64 opacity-0 pointer-events-none"
        }`}
      >
        
        <div className="flex flex-col text-left gap-4">
        <span className='text-xl'>
            Opened Until <span>9PM</span>
        </span>
        <span className='flex items-center gap-1 '>
        <svg className=' fill-gray-500' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
            Find A Store
        <svg className=' fill-gray-500' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </span>
          {categoryItems.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-white font-semibold text-sm cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={toggleMenu}
            >
              {item.leftIcon}
              <span>{item.title}</span>
              {item.rightIcon}
            </span>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        cartItems={cartItems}
        onClose={toggleCartSidebar}
        isOpen={isCartSidebarOpen}
      />
    </div>
  );
};

export default Categories;
