import "./Home.css";
import React from "react";
import brac from "./b1.png";
import ear from "./e1.png";
import nec from "./n1.png";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <h1>Jewellery Shop</h1>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/products">Products</Link></li>
                    <li className="nav-item"><Link to="/services">Services</Link></li>
                    <li className="nav-item"><Link to="/about">About Us</Link></li>
                </ul>
                <div className="auth-links">
                    <Link to="/signup" className="btn btn-signup">Sign Up</Link>
                    <Link to="/login" className="btn btn-login">Login</Link>
                </div>
            </nav>
            <main className="main-content">
                <h2>Welcome to Our Jewellery Store</h2>
                <div className="card-group">
    
                    <div className="card">
                        <img src={nec} className="card-img-top" alt="Image not found"/>
                        <div className="card-body">
                            <h5 className="card-title">Necklace</h5>
                            <p className="card-text">149000</p>
                        </div>
                       
                    </div>
                    <div className="card">
                        <img src={brac} className="card-img-top" alt="Image not found"/>
                        <div className="card-body">
                            <h5 className="card-title">Braclet</h5>
                            <p className="card-text">78000</p>
                        </div>
                      
                    </div>
                
                    <div className="card">
                        <img src={ear} className="card-img-top" alt="Image not found"/>
                        <div className="card-body">
                            <h5 className="card-title">Earings</h5>
                            <p className="card-text">69000</p>
                        </div>
                        
                    </div>

                </div>
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <p>Email: <a href="mailto:jwellery@gmail.com">jwellery@gmail.com</a></p>
                    <p>Contact: <a href="tel:+7990340495">7990340495</a></p>
                    <p>Feel free to contact us 24/7 any time.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
