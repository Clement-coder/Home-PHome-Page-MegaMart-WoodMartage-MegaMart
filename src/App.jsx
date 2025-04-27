import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavSection from "./components/layouts/navSection";
import HeroPage from "./components/pages/heroPage";
import ProductList from "./components/layouts/fakeApi"; // Your product list
import CartSidebar from "./components/layouts/cartSideMenu";
import Categories from "./components/pages/categories";

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
    setIsCartOpen(true);
  };

  const toggleCartSidebar = () => {
    setIsCartOpen((prev) => !prev);
  };

  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="mx-auto">
      <NavSection cartItemCount={totalItemCount} />
      <Categories cartItems={cart} onCartClick={toggleCartSidebar} />
      <CartSidebar
        cartItems={cart}
        onClose={toggleCartSidebar}
        isOpen={isCartOpen}
      />

      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/categories" element={<div>Category Page Content</div>} />
        <Route
          path="/products"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </div>
  );
}
