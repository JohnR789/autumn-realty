import React from "react";
import ListingsSlider from "../components/ListingsSlider";

const Listings: React.FC = () => (
  <section className="max-w-5xl mx-auto py-16 px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-autumn-dark mb-8">Our Featured Listings</h2>
    <ListingsSlider />
  </section>
);

export default Listings;
