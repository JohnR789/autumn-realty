import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "react-feather";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Listings", path: "/listings" },
  { label: "Press", path: "/press" },
  { label: "Contact", path: "/contact" },
];

const MenuOverlay: React.FC<Props> = ({ open, setOpen }) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-xl transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center px-6 py-5 border-b border-autumn/30">
          <span className="text-2xl font-bold text-autumn-dark">Menu</span>
          <button
            className="p-2 text-autumn-dark"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8 py-8 flex-grow">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`font-semibold text-2xl py-2 px-3 rounded transition hover:bg-autumn-light
                ${location.pathname === link.path ? "text-autumn underline" : "text-autumn-dark"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-8 py-6">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block bg-autumn-dark text-white rounded-full px-7 py-3 text-xl font-semibold shadow hover:bg-autumn transition"
          >
            Contact John
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;

