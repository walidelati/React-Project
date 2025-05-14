import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm font-light py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <p className="tracking-wide">
          © {new Date().getFullYear()} ALCOVA. All rights reserved.
        </p>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Instagram</a></li>
          <li><a href="#" className="hover:underline">Newsletter</a></li>
          <li><a href="#" className="hover:underline">Privacy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
