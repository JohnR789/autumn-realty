import React from "react";

const communities = [
  {
    name: "Beacon Hill",
    description: "Historic charm meets modern living in Boston's most iconic neighborhood.",
    image: "/assets/communities/beacon-hill.jpg",
  },
  {
    name: "Cambridge",
    description: "A vibrant city of innovation, culture, and renowned universities.",
    image: "/assets/communities/cambridge.jpg",
  },
  {
    name: "Back Bay",
    description: "Luxury brownstones and tree-lined streets in the heart of Boston.",
    image: "/assets/communities/back-bay.jpg",
  },
];

const Communities: React.FC = () => (
  <div>
    <h3 className="text-3xl md:text-4xl font-bold text-autumn-dark mb-8 text-center">Communities We Serve</h3>
    <div className="flex flex-wrap gap-8 justify-center">
      {communities.map((c) => (
        <div
          key={c.name}
          className="w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden group transition hover:scale-105"
        >
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-48 object-cover group-hover:opacity-90 transition"
            loading="lazy"
          />
          <div className="p-5">
            <h4 className="text-xl font-semibold text-autumn-dark mb-2">{c.name}</h4>
            <p className="text-autumn-dark">{c.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Communities;
