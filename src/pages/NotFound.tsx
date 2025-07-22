import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="flex flex-col min-h-[60vh] items-center justify-center py-24 px-6">
    <h1 className="text-6xl font-bold text-autumn-dark mb-6">404</h1>
    <p className="text-2xl mb-4 text-autumn">Page Not Found</p>
    <Link
      to="/"
      className="bg-autumn-dark text-white px-7 py-3 rounded-full text-lg font-semibold shadow hover:bg-autumn transition"
    >
      Return Home
    </Link>
  </div>
);

export default NotFound;

