import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'react-feather';
import Logo from './Logo';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Reviews', to: 'reviews-subscribe' },
  ];

  const NavLink = ({ to, children }) => (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      className="hover:text-amber-200 transition duration-300 cursor-pointer"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </ScrollLink>
  );

  return (
    <header className={`fixed top-0 bg-auto left-0 font-serif right-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-brown-800' : 'bg-brown-800'
    } text-white shadow-md`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <ScrollLink to="home" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer"><Logo/></ScrollLink>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <NavLink key={item.to} to={item.to}>{item.name}</NavLink>
            ))}
          </div>
          <div className="hidden md:flex space-x-4">
            <RouterLink to="/signup" className="hover:text-amber-200 transition duration-300">Sign Up</RouterLink>
            <RouterLink to="/signin" className="hover:text-amber-200 transition duration-300">Sign In</RouterLink>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col gap-2 mt-4">
            {menuItems.map((item) => (
              <NavLink key={item.to} to={item.to}>{item.name}</NavLink>
            ))}
            <RouterLink to="/signup" className="block hover:text-amber-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>Sign Up</RouterLink>
            <RouterLink to="/signin" className="block hover:text-amber-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>Sign In</RouterLink>
          </div>
        )}
      </nav>
    </header>
  );
}