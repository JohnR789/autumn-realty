import React from "react";
import Hero from "../components/Hero";
import ListingsSlider from "../components/ListingsSlider";
import Communities from "../components/Communities";
import PressBar from "../components/PressBar";

const Home: React.FC = () => (
  <main>
    <Hero />
    <section className="py-12 md:py-24">
      <ListingsSlider />
    </section>
    <section className="py-12 md:py-20 bg-autumn-light">
      <Communities />
    </section>
    <section className="py-8">
      <PressBar />
    </section>
  </main>
);

export default Home;
