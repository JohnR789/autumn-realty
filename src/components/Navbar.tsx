import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import { Menu } from "react-feather";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Listings", path: "/listings" },
  { label: "Press", path: "/press" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow transition">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Autumn Realty Group" className="h-10 w-10" />
          <span className="font-extrabold text-2xl text-autumn-dark tracking-tight">Autumn Realty</span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold text-lg transition hover:text-autumn ${
                location.pathname === link.path ? "text-autumn underline" : "text-autumn-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-autumn-dark text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-autumn"
          >
            Contact John
          </Link>
        </div>
        <button
          className="md:hidden text-autumn-dark"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={32} />
        </button>
        <MenuOverlay open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;

