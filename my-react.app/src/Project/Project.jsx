import React, { useState } from 'react';
import {   Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// --- Mock Data ---
const PRODUCTS = [
  { id: 1, name: "UltraHeadphones", price: 99, category: "Electronics", desc: "Noise cancelling wireless headphones." },
  { id: 2, name: "SmartBand Z", price: 49, category: "Wearables", desc: "Track your fitness 24/7." },
  { id: 3, name: "Pro Camera", price: 899, category: "Electronics", desc: "Capture 4K cinematic video." },
  { id: 4, name: "Leather Bag", price: 120, category: "Fashion", desc: "Handcrafted Italian leather." },
];

// --- Shared Components ---
const Navbar = ({ cartCount }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">ELITE-SHOP</Link>
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/shop">Shop</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="btn btn-outline-warning ms-lg-3" to="/cart">
          Cart ({cartCount})
        </Link>
      </div>
    </div>
  </nav>
);

// --- Page 1: Home ---
const Home = () => (
  <div className="text-center py-5">
    <div className="bg-light p-5 rounded-lg mb-5">
      <h1 className="display-4">Welcome to 2026 Tech</h1>
      <p className="lead">The future of shopping is here. Fast, sleek, and reliable.</p>
      <Link to="/shop" className="btn btn-primary btn-lg">Browse Catalog</Link>
    </div>
    <div className="container">
      <h3>Featured Categories</h3>
      <div className="row mt-4">
        {["Electronics", "Fashion", "Home"].map(cat => (
          <div key={cat} className="col-md-4 mb-3">
            <div className="card border-primary p-3"><h5>{cat}</h5></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Page 2: Shop ---
const Shop = ({ addToCart }) => (
  <div className="container py-5">
    <h2 className="mb-4">All Products</h2>
    <div className="row">
      {PRODUCTS.map(p => (
        <div key={p.id} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5>{p.name}</h5>
              <p className="text-muted">${p.price}</p>
              <Link to={`/product/${p.id}`} className="btn btn-sm btn-outline-secondary me-2">View Details</Link>
              <button onClick={() => addToCart(p)} className="btn btn-sm btn-success">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Page 3: Product Detail ---
const ProductDetail = ({ addToCart }) => {
  // Simple logic: picking first product as example
  const product = PRODUCTS[0]; 
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6"><img src="https://via.placeholder.com/400" className="img-fluid rounded" alt="product" /></div>
        <div className="col-md-6">
          <span className="badge bg-secondary mb-2">{product.category}</span>
          <h1>{product.name}</h1>
          <h3 className="text-primary">${product.price}</h3>
          <p className="my-4">{product.desc}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary btn-lg">Add to Shopping Bag</button>
        </div>
      </div>
    </div>
  );
};

// --- Page 4: Cart ---
const Cart = ({ cartItems }) => (
  <div className="container py-5">
    <h2>Your Shopping Cart</h2>
    {cartItems.length === 0 ? <p className="mt-4">Your cart is empty.</p> : (
      <ul className="list-group mt-4">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} <span>${item.price}</span>
          </li>
        ))}
        <li className="list-group-item active d-flex justify-content-between">
          <strong>Total:</strong> 
          <strong>${cartItems.reduce((acc, curr) => acc + curr.price, 0)}</strong>
        </li>
      </ul>
    )}
  </div>
);

// --- Page 5: Contact ---
const Contact = () => (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card p-4 shadow">
          <h2 className="text-center mb-4">Contact Us</h2>
          <input type="email" className="form-control mb-3" placeholder="Your Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="How can we help?"></textarea>
          <button className="btn btn-dark w-100">Send Message</button>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---
export default function Project() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <div className="content-area" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="bg-dark text-white text-center py-4">
        &copy; 2026 Elite Shop Frontend Demo
      </footer>
    </>
  );
}