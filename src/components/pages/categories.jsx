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
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const categoryItems = [
  {
    title: "All Categories",
    leftIcon: <FaThList className="text-gray-500/50 text-xl" />,
    rightIcon: <MdKeyboardArrowDown className="text-gray-500/50 text-xl" />,
  },
  { title: "Services", leftIcon: <FaCogs className="text-gray-500/50 text-xl" /> },
  { title: "Promotions", leftIcon: <FaBullhorn className="text-gray-500/50 text-xl" /> },
  { title: "Payment And Delivery", leftIcon: <FaTruck className="text-gray-500/50 text-xl" /> },
];

const Categories = ({ cartItems, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuVisible, setIsMoreMenuVisible] = useState(false);

  // Toggle for menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Toggle for "More" menu visibility
  const toggleMoreMenu = () => {
    setIsMoreMenuVisible((prev) => !prev);
  };

  return (
    <div className="sticky top-0 left-0 z-50 bg-blue-700 shadow-lg">
      <div className="px-4 py-3 lg:px-10 flex items-center justify-between flex-wrap gap-y-4">
        <div className="flex items-center gap-4 w-full lg:w-auto justify-between">
          <div className="hidden lg:flex items-center gap-6">
            {categoryItems.map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-2 text-white font-semibold text-sm cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={toggleMenu} // Add the toggle to this section
              >
                {item.leftIcon}
                <span>{item.title}</span>
                {item.rightIcon}
              </span>
            ))}
          </div>

          {/* More button and dropdown toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleMoreMenu}
              className="text-white text-lg font-bold flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              More
              {isMoreMenuVisible ? (
                <MdKeyboardArrowUp className="text-white text-xl" />
              ) : (
                <MdKeyboardArrowDown className="text-white text-xl" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 w-full lg:w-auto">
          <div className="flex items-center w-full lg:w-auto relative">
            <input
              placeholder="Search for Products"
              className="w-full lg:w-72 pl-6 pr-10 py-2 rounded-md focus:outline-none transition-all duration-300 transform hover:scale-105"
              type="search"
            />
            <FaSearch className="absolute right-4 text-gray-500 text-lg" />
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
              onClick={onCartClick}
              className="relative flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              <FaShoppingCart className="text-white text-2xl" />
              <span className="absolute -top-2 -right-2 bg-white text-blue-800 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth toggle for More menu with opacity transition */}
      <div
        className={`absolute transition-opacity lg:hidden  duration-500 ease-in-out bg-gray-900 text-white p-6 rounded-lg w-full shadow-xl z-10 ${
          isMoreMenuVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="lg:hidden flex flex-col text-left gap-4">
          {categoryItems.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-white font-semibold text-sm cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={toggleMenu} // Add the toggle to this section
            >
              {item.leftIcon}
              <span>{item.title}</span>
              {item.rightIcon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
