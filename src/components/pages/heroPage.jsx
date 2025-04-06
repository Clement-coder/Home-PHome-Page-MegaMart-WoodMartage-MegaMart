import React from 'react';
import Populars from '../layouts/populars';
import ProductList from '../layouts/fakeApi';

const HeroPage = () => {
  return (
    <>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-blue-600 p-4 ">
     <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
  {/* Hero Text Section */}
  <div className="bg-[#ADB89A] text-white text-center w-full lg:basis-[60%] flex flex-col justify-center items-center px-6 py-12 lg:py-0 lg:h-full">
    <span className="text-lg font-medium">
      From <span className="text-blue-600">For the</span> designer
    </span>
    <h1 className="text-4xl md:text-5xl font-bold py-6">
      Check out our Expert Advice
    </h1>
    <button className="py-3 px-6 bg-blue-600 rounded-md text-white text-lg font-semibold hover:bg-blue-800 transition">
      Expert Advice
    </button>
  </div>

  {/* Hero Image Section */}
  <div className="w-full lg:basis-[60%] h-[250px] sm:h-[350px] md:h-[450px] lg:h-full">
    <img
      src="https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2021/12/slider-2-2.jpg"
      alt="Expert"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        {/* Right Column - Services + Shipping */}
        <div className="flex flex-col">
          {/* Services Section */}
          <div className="relative w-full h-[300px] md:h-[350px]">
            <img
              src="https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/05/banner-servises.jpg.webp"
              alt="Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-6 md:px-12">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Our Services</h2>
              <p className="text-white text-sm md:text-md mt-2">
                Discover all the ways to get your product.
              </p>
              <button className="bg-blue-700 text-white py-2 px-4 mt-4 font-semibold text-sm md:text-md rounded-md hover:bg-purple-900 transition">
                VIEW MORE
              </button>
            </div>
          </div>

          {/* Free Shipping Section */}
          <div className="relative w-full h-[300px] md:h-[350px] mt-6 md:mt-8">
            <img
              src="https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2021/12/shipping-banner-x2.jpg.webp"
              alt="Free Shipping"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-6 md:px-12">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Free Shipping!</h2>
              <p className="text-white text-sm md:text-md mt-2">
                Free shipping on orders of <span className="font-bold">$100</span> or more.
              </p>
            </div>
          </div>
        </div>
      </div>
    <Populars/>
    <ProductList/>
    </>
  );
};

export default HeroPage;
