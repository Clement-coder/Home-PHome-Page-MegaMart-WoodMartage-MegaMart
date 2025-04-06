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

  // Add-to-cart logic
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
    // Open the cart sidebar after adding
    setIsCartOpen(true);
  };

  // Toggle cart sidebar visibility
  const toggleCartSidebar = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Calculate total items in the cart (by quantity)
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="mx-auto">
      <NavSection cartItemCount={totalItemCount} />
      <Categories cartItems={cart} onCartClick={toggleCartSidebar} />
      {isCartOpen && <CartSidebar cartItems={cart} onClose={toggleCartSidebar} />}

      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/categories" element={<div>Category Page Content</div>} />
        {/* Render ProductList with proper prop only in /products route */}
        <Route
          path="/products"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </div>
  );
}
