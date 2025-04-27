import React from 'react';
import NavBar from './NavBar';
// import Categories from '../pages/categories';

const NavSection = ({ cartItems }) => {
  return (
    <div>
      <NavBar cartItems={cartItems} />
      {/* <Categories cartItems={cartItems} /> */}
    </div>
  );
};

export default NavSection;
