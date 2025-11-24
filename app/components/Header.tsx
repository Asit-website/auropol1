'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-container">
          <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763207487/image_304_dt87n0.svg" alt="Auropol Group" className="header-logo-img" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About Us</Link>
          <div className="nav-item nav-dropdown">
            <Link href="/products" className="nav-link">
              Products
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="dropdown-menu">
              <Link href="/products?category=rubber" className="dropdown-item">Specialty Rubber Chemicals</Link>
              <Link href="/products?category=plastic" className="dropdown-item">Plastic Additives</Link>
            </div>
          </div>
          <Link href="/rd-technology" className="nav-link">R & D Technology</Link>

          {/* <Link href="/quality-policy" className="nav-link">Quality Policy</Link> */}

          <Link href="/careers" className="nav-link">Careers</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </nav>

        <div className="header-right">
          <Link href="/enquiry" className="enquire-btn">
            Enquire Now
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="white"/>
            </svg>
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-content">
            <Link href="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
            <Link href="/about" className="mobile-nav-link" onClick={closeMenu}>About Us</Link>
            <div className="mobile-nav-item">
              <span className="mobile-nav-link">Products</span>
              <div className="mobile-dropdown">
                <Link href="/products?category=rubber" className="mobile-dropdown-item" onClick={closeMenu}>Specialty Rubber Chemicals</Link>
                <Link href="/products?category=plastic" className="mobile-dropdown-item" onClick={closeMenu}>Plastic Additives</Link>
              </div>
            </div>
            <Link href="/rd-technology" className="mobile-nav-link" onClick={closeMenu}>R & D Technology</Link>
            {/* <Link href="/quality-policy" className="mobile-nav-link" onClick={closeMenu}>Quality Policy</Link> */}
            <Link href="/careers" className="mobile-nav-link" onClick={closeMenu}>Careers</Link>
            <Link href="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact Us</Link>
            <Link href="/enquiry" className="mobile-nav-link mobile-enquire-btn" onClick={closeMenu}>
              Enquire Now
            </Link>
          </div>
        </nav>

        {/* Overlay */}
        {isMenuOpen && <div className="mobile-menu-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
}

