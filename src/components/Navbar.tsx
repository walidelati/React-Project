import React from 'react';
import { Link } from '@tanstack/react-router';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="text-blue-500">Home</Link>
      <Link to="/about" className="text-green-500">About</Link>
    </nav>
  );
}

export default Navbar;
