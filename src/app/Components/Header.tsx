"use client"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          Professor Store
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/Shop" className="hover:text-blue-500">Shop</a>
          <a href="/About" className="hover:text-blue-500">About</a>
          <a href="/Contact" className="hover:text-blue-500">Contact</a>
        </nav>

        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-4 space-y-4">
          <a href="/" className="block text-lg hover:text-blue-500">Home</a>
          <a href="/Shop" className="block text-lg hover:text-blue-500">Shop</a>
          <a href="/About" className="block text-lg hover:text-blue-500">About</a>
          <a href="/Contact" className="block text-lg hover:text-blue-500">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
