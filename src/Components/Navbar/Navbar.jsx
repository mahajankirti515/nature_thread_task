import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../../assets/NT-logo.png'
import { FaAngleDown } from "react-icons/fa";
 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <div className="dropdown">
          <NavLink to="/shop" className="nav-link">Shop <FaAngleDown className='angle' /></NavLink>
          <div className="dropdown-content">
            <NavLink to="/shop/women">Women</NavLink>
            <NavLink to="/shop/men">Men</NavLink>
            <NavLink to="/shop/kids">Kids</NavLink>
            <NavLink to="/shop/personal-care">Personal Care</NavLink>
          </div>
        </div>
        <NavLink to="/blog" className="nav-link">Blog</NavLink>
        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        <NavLink to="/about" className="nav-link">About Us</NavLink>
      </div>

      <div className="navbar-center">
          <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-right">
        <NavLink to="/login" className="nav-link">Login / Register</NavLink>
        <NavLink to="/cart" className="nav-link">0 / ₹0.00</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
