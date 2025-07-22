import React from "react";
import PressBar from "../components/PressBar";

const Press: React.FC = () => (
  <section className="max-w-4xl mx-auto py-16 px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-autumn-dark mb-8">As Featured In</h2>
    <PressBar />
    <div className="mt-8 text-lg text-autumn-dark">
      <p>
        Autumn Realty Group LLC and John have been featured in leading publications for their outstanding expertise and service in luxury real estate. Discover the stories and market insights that set us apart.
      </p>
    </div>
  </section>
);

export default Press;
