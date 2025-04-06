import React from 'react'


const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-6 '>
      <div className='flex items-center gap-16 '>
        <img src="https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2021/12/woodmart-building-supplies-logo.svg" alt="Logo" />
       <div className='hidden lg:flex items-center gap-8 text-gray-500 text-md'>
       <span className='flex items-center gap-1 '>
        <svg className=' fill-gray-500' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
            Find A Store
        <svg className=' fill-gray-500' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </span>
        <span className=''>
            Opened Until <span>9PM</span>
        </span>
       </div>
      </div>
              <div className='hidden lg:flex items-center gap-4'>
                <span className='text-gray-500 text-md gap-4'> Expert Advice</span>
                 <svg className='fill-gray-300' xmlns="http://www.w3.org/2000/svg" width="4" height="20" fill="gray">
          <rect width="1" height="24" rx="2" />
        </svg>

                <span className='text-gray-500 text-lg gap-4'> About Us</span> 
                <svg className='fill-gray-300' xmlns="http://www.w3.org/2000/svg" width="1" height="20" fill="gray">
          <rect width="4" height="24" rx="2" />
        </svg>

                <span className='text-gray-500 text-lg gap-4'> Track Orders</span> 
                <svg className='fill-gray-300' xmlns="http://www.w3.org/2000/svg" width="1" height="20" fill="gray">
          <rect width="4" height="24" rx="2" />
        </svg>

                <svg className='fill-gray-500' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
              </div>

    </div>
  )
}

export default NavBar
