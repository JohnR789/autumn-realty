import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-autumn/10 py-6 mt-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Autumn Realty Group" className="h-8 w-8" />
        <span className="text-autumn-dark font-semibold text-lg">
          Autumn Realty Group LLC &copy; {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex gap-6">
        <Link to="/about" className="text-autumn hover:underline font-medium">About</Link>
        <Link to="/listings" className="text-autumn hover:underline font-medium">Listings</Link>
        <Link to="/press" className="text-autumn hover:underline font-medium">Press</Link>
        <Link to="/contact" className="text-autumn hover:underline font-medium">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer;

