import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavSection from "./components/layouts/navSection";
import Categories from "./components/pages/categories";
import HeroPage from "./components/pages/heroPage";
import ProductList from "./components/layouts/fakeApi";
import CartSidebar from "./components/layouts/cartSideMenu";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) => 
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const toggleCartSidebar = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <NavSection cartItemCount={cart.length} />

      {/* ✅ Only one Categories component here */}
      <Categories cartItems={cart} onCartClick={toggleCartSidebar} />

      {/* ✅ CartSidebar works globally */}
      {isCartOpen && <CartSidebar cartItems={cart} onClose={toggleCartSidebar} />}

      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/categories" element={<div>Category Page Content</div>} />
        <Route
          path="/products"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </>
  );
}
