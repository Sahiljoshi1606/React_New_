import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// --- Shared Components ---
const Navbar = ({ cartCount }) => (
  <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-3 shadow-lg" style={{ backdropFilter: "blur(15px)", backgroundColor: "rgba(0,0,0,0.7)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
    <div className="container">
      <Link className="navbar-brand fw-bold tracking-widest" to="/">Fasion<span className="text-warning">Brand</span></Link>
      <div className="navbar-nav ms-auto flex-row align-items-center">
        <Link className="nav-link px-2 mx-2 text-uppercase small text-white" to="/">HOME</Link>
        <Link className="nav-link px-2 mx-2 text-uppercase small text-white" to="/gents">Gents</Link>
        <Link className="nav-link px-2 mx-2 text-uppercase small text-white" to="/ladies">Ladies</Link>
        <Link className="nav-link px-2 mx-2 text-uppercase small text-white" to="/kids">Jwellary</Link>
        <Link className="btn btn-warning ms-3 rounded-pill px-4 fw-bold" to="/cart">
          BAG ({cartCount})
        </Link>
      </div>
    </div>
  </nav>
);

// --- Page 1: Home (Transparent Cards + Attractive Borders) ---
const Home = ({ addToCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setAllProducts(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center text-white py-5 mb-5" style={{ minHeight: "75vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 className="display-1 fw-bold mb-3 tracking-tighter">COLLECTION 2026</h1>
        <p className="lead opacity-75 fs-3">Elevate your aura with timeless style.</p>
        <div className="mt-4">
            {/* Added Home Button */}
            <a href="#shop-all" className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg transition-all">
                SHOP THE COLLECTION
            </a>
        </div>
      </div>

      {/* Product Grid - No white background, same as home */}
      <div className="container py-5" id="shop-all">
        <h2 className="text-center fw-bold mb-5 text-white tracking-widest text-uppercase">Featured Arrivals</h2>
        {loading ? (
            <div className="text-center"><div className="spinner-border text-warning"></div></div> 
        ) : (
          <div className="row g-4 px-3">
            {allProducts.map(p => (
              <div key={p.id} className="col-6 col-md-4 col-lg-3">
                {/* GLASS CARD: Transparent + Attractive Border */}
                <div className="card h-100 shadow-lg border-0" style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.08)", 
                    backdropFilter: "blur(12px)", 
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle white border
                    transition: "transform 0.3s ease, border-color 0.3s ease"
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = "rgba(255, 193, 7, 0.6)"}
                onMouseOut={(e) => e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"}
                >
                  <div className="p-4 text-center" style={{ height: "220px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={p.image} className="img-fluid" style={{ maxHeight: "160px", filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.5))" }} alt={p.title} />
                  </div>
                  <div className="card-body d-flex flex-column text-white">
                    <h6 className="text-truncate small mb-1 opacity-75 text-uppercase">{p.category}</h6>
                    <h6 className="text-truncate mb-2 fw-bold">{p.title}</h6>
                    <p className="text-warning fs-5 fw-bold mb-3">${p.price}</p>
                    <button onClick={() => addToCart(p)} className="btn btn-outline-light btn-sm mt-auto rounded-pill py-2">
                        Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Category Page (Updated to match Glass Style) ---
const CategoryPage = ({ categoryTitle, apiCategory, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/category/${apiCategory}`)
      .then(res => { setProducts(res.data); setLoading(false); });
  }, [apiCategory]);

  return (
    <div className="container py-5 my-5">
      <h2 className="fw-bold text-white mb-5 text-center">{categoryTitle}</h2>
      <div className="row g-4">
        {products.map(p => (
          <div key={p.id} className="col-md-3">
            <div className="card h-100 border-0 shadow" style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px" }}>
              <div className="p-4" style={{ height: "250px", display: "flex", alignItems: "center" }}>
                <img src={p.image} className="img-fluid" style={{ filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.3))" }} alt={p.title} />
              </div>
              <div className="card-body text-white">
                <h6 className="text-truncate">{p.title}</h6>
                <p className="fw-bold text-warning">${p.price}</p>
                <button onClick={() => addToCart(p)} className="btn btn-warning w-100 rounded-pill fw-bold">Add to Bag</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Page 4: Cart ---
const Cart = ({ items, removeItem, clearCart }) => {
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="container py-5 my-5" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderRadius: "30px" }}>
      <div className="p-4">
        <h2 className="fw-bold mb-4 text-dark">YOUR BAG</h2>
        {items.length === 0 ? (
            <div className="text-center py-5">
            <p className="fs-5 text-muted">Your bag is looking light.</p>
            <Link to="/" className="btn btn-dark rounded-pill px-5">Continue Shopping</Link>
            </div>
        ) : (
            <div className="row">
            <div className="col-md-8 text-dark">
                {items.map((item, idx) => (
                <div key={idx} className="d-flex border-bottom py-3 align-items-center">
                    <img src={item.image} style={{ width: "60px", borderRadius: "8px" }} className="me-3 shadow-sm" alt="" />
                    <div className="flex-grow-1">
                    <h6 className="mb-0 fw-bold">{item.title}</h6>
                    <p className="fw-bold mb-0 text-secondary">${item.price}</p>
                    </div>
                    <button onClick={() => removeItem(idx)} className="btn btn-sm text-danger fw-bold">Remove</button>
                </div>
                ))}
            </div>
            <div className="col-md-4 p-4 border-start text-dark text-center text-md-start">
                <h4 className="fw-bold">Total: <span className="text-success">${total.toFixed(2)}</span></h4>
                <button className="btn btn-warning w-100 rounded-pill py-3 mt-3 fw-bold shadow">PROCEED TO CHECKOUT</button>
                <button onClick={clearCart} className="btn btn-link text-muted w-100 mt-2">Empty Bag</button>
            </div>
            </div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---
export default function AuraWear() {
  const [cart, setCart] = useState([]);

  const addToCart = (p) => { 
    setCart([...cart, p]);
  };

  const removeItem = (idx) => setCart(cart.filter((_, i) => i !== idx));
  const clearCart = () => { if(window.confirm("Empty your bag?")) setCart([]); };

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      minHeight: "100vh"
    }}>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/gents" element={<CategoryPage categoryTitle="Gents Collection" apiCategory="men's clothing" addToCart={addToCart} />} />
        <Route path="/ladies" element={<CategoryPage categoryTitle="Ladies Collection" apiCategory="women's clothing" addToCart={addToCart} />} />
        <Route path="/kids" element={<CategoryPage categoryTitle="Jewelry & Accessories" apiCategory="jewelery" addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart items={cart} removeItem={removeItem} clearCart={clearCart} />} />
      </Routes>
      <footer className="text-center text-white-50 py-5">
        <p>&copy; 2026 AURA WEAR | Premium Fashion Concept</p>
      </footer>
    </div>
  );
}