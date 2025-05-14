import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white font-sans">
      <div className="flex items-center justify-between px-6 py-4 bg-transparent">
        <h1 className="text-xl font-bold tracking-wide">LizardKicks</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
