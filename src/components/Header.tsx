import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <Navbar />
    </header>
  );
};

export default Header; 