import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "react-feather";
import logo from "/logo.png"; // Place your logo in public/logo.png or src/assets/logo.png

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Listings", href: "/listings" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Autumn Realty Group Logo"
            className="h-9 w-auto mr-3"
            style={{ filter: "drop-shadow(0 2px 6px #0003)" }}
          />
          <span className="font-serif text-2xl font-bold text-autumn-dark tracking-wide hidden sm:block">
            Autumn Realty Group
          </span>
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800 hover:text-autumn-gold relative after:block after:h-0.5 after:bg-autumn-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              style={{ transition: "color .2s" }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-2 px-5 py-2 rounded-full bg-autumn-gold text-autumn-dark font-semibold shadow-lg hover:bg-autumn-dark hover:text-autumn-gold transition"
            style={{ transition: "all .2s" }}
          >
            Contact John
          </a>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Animated Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center gap-10 shadow-xl"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="text-3xl font-semibold text-autumn-dark hover:text-autumn-gold transition"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 px-7 py-3 rounded-full bg-autumn-gold text-autumn-dark font-bold shadow-lg text-2xl hover:bg-autumn-dark hover:text-autumn-gold transition"
            >
              Contact John
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

