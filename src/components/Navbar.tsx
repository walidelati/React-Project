import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white font-sans">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-medium tracking-wide">ALCOVA 2024</h1>
        <ul className="flex space-x-5 text-sm font-light">
          <li><a href="#">Program</a></li>
          <li><a href="#">Exhibitors</a></li>
          <li><a href="#">Venues</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
