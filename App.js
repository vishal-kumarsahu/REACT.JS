import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { useCart } from './contexts/CartContext';

function App() {
  const { cartItems } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyShop</Link>
        <Link to="/cart" className="relative">
          Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 rounded-full text-xs px-1">
              {cartItems.length}
            </span>
          )}
        </Link>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <footer className="bg-gray-200 text-center p-4">
        &copy; 2025 MyShop. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
