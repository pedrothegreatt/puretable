"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl sm:text-3xl font-bold text-[#1a202c] flex items-center group">
          puretable
        </a>
      </nav>
    </header>
  );
};

export default Header;