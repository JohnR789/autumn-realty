import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-20 min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;


